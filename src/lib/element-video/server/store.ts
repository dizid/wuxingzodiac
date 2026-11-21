// ============================================
// STEP INTO YOUR ELEMENT — jobs, videos and the daily spend cap (Netlify Blobs)
// ============================================
// Site-wide Blobs store "element-videos" (kept across deploys; no database):
//   job/<checkoutSessionId>     generation state for one paid order (JSON)
//   video/<checkoutSessionId>   the finished MP4 (one per paid order)
//   spend/<YYYY-MM-DD>          dollars reserved/spent on Genie that UTC day (JSON)
//
// One paid Stripe session = at most one video and at most MAX_ATTEMPTS Genie
// sessions. Counters use compare-and-swap writes (onlyIfMatch / onlyIfNew), so
// two requests at the same moment can't both slip under the daily cap.

import { randomUUID } from 'node:crypto'
import { getStore, type Store } from '@netlify/blobs'
import { ELEMENT_VIDEO_SECONDS } from '../offer'

export const STORE_NAME = 'element-videos'

/** Dollars set aside before each Genie session; settled to the real cost afterwards.
 *  20 s = 480 frames ≈ $2.02, plus the few frames that arrive after complete(). */
export const RESERVE_PER_VIDEO_USD = Math.round(ELEMENT_VIDEO_SECONDS * 0.1 * 1.2 * 100) / 100

/** Default daily Genie budget (order T-0644: $20/day). Env: ELEMENT_VIDEO_DAILY_USD_CAP. */
export const DEFAULT_DAILY_CAP_USD = 20

/** Genie sessions per paid order before we stop and alert the owner. */
export const MAX_ATTEMPTS = 2

/** A job still "working" after this long belongs to a run that died (background limit is 15 min). */
export const JOB_STALE_MS = 16 * 60 * 1000

export type JobStatus = 'pending' | 'generating' | 'ready' | 'failed' | 'capped'

export interface VideoJob {
  status: JobStatus
  sign: string
  attempts: number
  updatedAt: number
  /** Random secret the background function must present; never sent to the browser. */
  token: string
  /** Buyer email from Stripe, for the "your video is ready" link. */
  email?: string
  /** UTC day this attempt's money was reserved on (settled against the same day). */
  day: string
  error?: string
  costUsd?: number
}

interface SpendDay {
  usd: number
  count: number
}

export function videoStore(): Store {
  return getStore({ name: STORE_NAME, consistency: 'strong' })
}

export function jobKey(sessionId: string): string {
  return `job/${sessionId}`
}

export function videoKey(sessionId: string): string {
  return `video/${sessionId}`
}

/** UTC day, e.g. "2026-11-21". */
export function utcDay(now: number = Date.now()): string {
  return new Date(now).toISOString().slice(0, 10)
}

/** Read a positive number from an env var, falling back to a default. */
export function numberFromEnv(value: string | undefined, fallback: number): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback
}

export function dailyCapUsd(): number {
  return numberFromEnv(process.env.ELEMENT_VIDEO_DAILY_USD_CAP, DEFAULT_DAILY_CAP_USD)
}

function round(usd: number): number {
  return Math.round(usd * 10_000) / 10_000
}

/**
 * Compare-and-swap update of one JSON blob. `change` gets the current value (or
 * null) and returns the new value, or null to leave it alone. Returns the written
 * value, or null when `change` declined.
 */
export async function updateJson<T>(
  store: Store,
  key: string,
  change: (current: T | null) => T | null,
  maxTries = 6,
): Promise<T | null> {
  for (let attempt = 0; attempt < maxTries; attempt++) {
    const current = await store.getWithMetadata(key, { type: 'json', consistency: 'strong' })
    const next = change((current?.data as T | undefined) ?? null)
    if (next === null) return null
    const result = current?.etag
      ? await store.setJSON(key, next, { onlyIfMatch: current.etag })
      : await store.setJSON(key, next, { onlyIfNew: true })
    if (result.modified) return next
  }
  throw new Error(`element-video: too much write contention on ${key}`)
}

// ---------- Spend cap ----------

/** Dollars reserved or spent today. */
export async function spentToday(store: Store, now = Date.now()): Promise<number> {
  const day = (await store.get(`spend/${utcDay(now)}`, { type: 'json', consistency: 'strong' })) as SpendDay | null
  return day?.usd ?? 0
}

/** Is there room for one more video today? (checkout gate, no reservation) */
export async function hasRoomToday(store: Store, capUsd: number, now = Date.now()): Promise<boolean> {
  return (await spentToday(store, now)) + RESERVE_PER_VIDEO_USD <= capUsd
}

/** Reserve money for one Genie session. False when it would go over today's cap. */
export async function reserveSpend(store: Store, capUsd: number, now = Date.now()): Promise<boolean> {
  const written = await updateJson<SpendDay>(store, `spend/${utcDay(now)}`, (current) => {
    const usd = current?.usd ?? 0
    if (usd + RESERVE_PER_VIDEO_USD > capUsd) return null
    return { usd: round(usd + RESERVE_PER_VIDEO_USD), count: (current?.count ?? 0) + 1 }
  })
  return written !== null
}

/** Move a day's total by `deltaUsd` (refund an unused reservation, or settle the real cost). */
export async function adjustSpend(store: Store, deltaUsd: number, day: string = utcDay()): Promise<void> {
  await updateJson<SpendDay>(store, `spend/${day}`, (current) => ({
    usd: round(Math.max(0, (current?.usd ?? 0) + deltaUsd)),
    count: current?.count ?? 0,
  }))
}

// ---------- Jobs ----------

/** Is a job still being worked on (and not abandoned)? */
export function isJobWorking(job: VideoJob | null, now: number = Date.now()): boolean {
  return !!job && (job.status === 'pending' || job.status === 'generating') && now - job.updatedAt < JOB_STALE_MS
}

/** May a new attempt start for this job? (none yet, failed/capped/stale, attempts left) */
export function canStartAttempt(job: VideoJob | null, now: number = Date.now()): boolean {
  if (!job) return true
  if (job.status === 'ready' || isJobWorking(job, now)) return false
  // A capped job never used an attempt's money, so it may always retry
  if (job.status === 'capped') return true
  return job.attempts < MAX_ATTEMPTS
}

export async function readJob(store: Store, sessionId: string): Promise<VideoJob | null> {
  return (await store.get(jobKey(sessionId), { type: 'json', consistency: 'strong' })) as VideoJob | null
}

/**
 * Start an attempt for this paid order. Returns the attempt's secret token, or
 * null when another request is already on it, it is done, or attempts are used up.
 */
export async function claimAttempt(
  store: Store,
  sessionId: string,
  details: { sign: string; email?: string },
  now = Date.now(),
): Promise<string | null> {
  const token = randomUUID()
  const written = await updateJson<VideoJob>(store, jobKey(sessionId), (current) => {
    if (!canStartAttempt(current, now)) return null
    // Every claim counts; markCapped gives the attempt back when no money was spent
    const attempts = (current?.attempts ?? 0) + 1
    return {
      status: 'pending',
      sign: details.sign,
      email: details.email,
      day: utcDay(now),
      attempts,
      updatedAt: now,
      token,
    }
  })
  return written ? token : null
}

/** Paid, but today's cap is full: park the job until the next UTC day (no attempt used). */
export async function markCapped(store: Store, sessionId: string, token: string): Promise<void> {
  await updateJson<VideoJob>(store, jobKey(sessionId), (current) => {
    if (!current || current.token !== token) return null
    return { ...current, status: 'capped', attempts: Math.max(0, current.attempts - 1), updatedAt: Date.now() }
  })
}

/** Background function: pending → generating, only with the right token. */
export async function startJob(store: Store, sessionId: string, token: string, now = Date.now()): Promise<VideoJob | null> {
  return updateJson<VideoJob>(store, jobKey(sessionId), (current) => {
    if (!current || current.status !== 'pending' || current.token !== token) return null
    if (now - current.updatedAt >= JOB_STALE_MS) return null
    return { ...current, status: 'generating', updatedAt: now }
  })
}

export async function finishJob(
  store: Store,
  sessionId: string,
  token: string,
  outcome: { status: 'ready'; costUsd: number } | { status: 'failed'; error: string },
): Promise<void> {
  await updateJson<VideoJob>(store, jobKey(sessionId), (current) => {
    if (!current || current.token !== token) return null
    return { ...current, ...outcome, updatedAt: Date.now() }
  })
}
