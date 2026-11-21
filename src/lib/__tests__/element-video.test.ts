// @vitest-environment node
// "Step into your element" video: prompts, cost, cap/job logic, byte ranges, and
// a real ffmpeg encode (ffmpeg-static) of a tiny clip.
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { spawnSync } from 'node:child_process'
import type { Store } from '@netlify/blobs'
import type Stripe from 'stripe'
import ffmpegStatic from 'ffmpeg-static'
import { signProfiles } from '@/lib/sign-content/profiles'
import { buildWorldPrompt, buildCloseUpPrompt, worldSummary } from '@/lib/element-video/worlds'
import {
  isCheckoutSessionId,
  ELEMENT_VIDEO_PRODUCT,
  ELEMENT_VIDEO_SECONDS,
  ELEMENT_VIDEO_PRICE,
  ELEMENT_VIDEO_PRICE_CENTS,
} from '@/lib/element-video/offer'
import { genieCostUsd, steeringPlan, GENIE_FPS } from '@/lib/element-video/server/genie'
import { buildFfmpegArgs, encodeMp4 } from '@/lib/element-video/server/encode'
import { parseRange } from '@/lib/element-video/server/range'
import {
  canStartAttempt,
  claimAttempt,
  startJob,
  finishJob,
  markCapped,
  readJob,
  reserveSpend,
  adjustSpend,
  spentToday,
  hasRoomToday,
  utcDay,
  RESERVE_PER_VIDEO_USD,
  MAX_ATTEMPTS,
  JOB_STALE_MS,
  type VideoJob,
} from '@/lib/element-video/server/store'
import { paidVideoOrder, claimAndReserve } from '@/lib/element-video/server/fulfil'

/** In-memory stand-in for a Netlify Blobs store with etag compare-and-swap. */
function memoryStore(): Store {
  const data = new Map<string, { value: unknown; etag: string }>()
  let version = 0
  const store = {
    async get(key: string) {
      return data.get(key)?.value ?? null
    },
    async getWithMetadata(key: string) {
      const entry = data.get(key)
      return entry ? { data: entry.value, etag: entry.etag, metadata: {} } : null
    },
    async setJSON(key: string, value: unknown, options: { onlyIfMatch?: string; onlyIfNew?: boolean } = {}) {
      const current = data.get(key)
      if (options.onlyIfNew && current) return { modified: false }
      if (options.onlyIfMatch && current?.etag !== options.onlyIfMatch) return { modified: false }
      const etag = `e${++version}`
      data.set(key, { value: structuredClone(value), etag })
      return { modified: true, etag }
    },
  }
  return store as unknown as Store
}

const SESSION = 'cs_test_a1B2c3D4e5F6g7H8i9J0'

describe('element video offer', () => {
  it('price label and cents agree', () => {
    expect(ELEMENT_VIDEO_PRICE).toBe(`$${(ELEMENT_VIDEO_PRICE_CENTS / 100).toFixed(2)}`)
  })

  it('recognises Stripe Checkout session ids only', () => {
    expect(isCheckoutSessionId(SESSION)).toBe(true)
    expect(isCheckoutSessionId('cs_live_abcdefghijklmnop')).toBe(true)
    expect(isCheckoutSessionId('pi_123')).toBe(false)
    expect(isCheckoutSessionId('cs_test_short')).toBe(false)
    expect(isCheckoutSessionId('cs_test_abc/../../etc')).toBe(false)
    expect(isCheckoutSessionId(42)).toBe(false)
  })
})

describe('element worlds', () => {
  it('builds a first-person prompt with the animal and sound for all 60 signs', () => {
    expect(signProfiles).toHaveLength(60)
    for (const sign of signProfiles) {
      const prompt = buildWorldPrompt(sign.element, sign.animal)
      expect(prompt).toMatch(/^Immersive first-person view/)
      expect(prompt.toLowerCase()).toContain(sign.animal)
      expect(prompt).toContain('Audio:')
      // Camera cuts break a Genie world; brands/people are blocked at startup
      expect(prompt.toLowerCase()).not.toMatch(/cut to|aerial view/)
      expect(prompt).not.toContain('{essence}')
      expect(buildCloseUpPrompt(sign.element, sign.animal)).toContain(sign.animal)
      expect(worldSummary(sign.element).length).toBeGreaterThan(5)
    }
  })
})

describe('Genie cost and steering', () => {
  it('bills ~$0.10 per second (240 tokens/frame at $17.50 per 1M)', () => {
    expect(genieCostUsd(GENIE_FPS)).toBeCloseTo(0.1008, 4)
    expect(genieCostUsd(ELEMENT_VIDEO_SECONDS * GENIE_FPS)).toBeCloseTo(2.016, 3)
  })

  it('reserves enough for a clip plus the frames that arrive after complete()', () => {
    const clipFrames = ELEMENT_VIDEO_SECONDS * GENIE_FPS
    expect(RESERVE_PER_VIDEO_USD).toBeGreaterThanOrEqual(genieCostUsd(clipFrames + 48))
    // ...and stays well under the price, so every paid order covers its cost
    expect(RESERVE_PER_VIDEO_USD).toBeLessThan(ELEMENT_VIDEO_PRICE_CENTS / 100)
  })

  it('walks, asks for the close-up, then stops, in that order', () => {
    const plan = steeringPlan(ELEMENT_VIDEO_SECONDS)
    expect(plan.total).toBe(480)
    expect(plan.walkStart).toBeLessThan(plan.closeUp)
    expect(plan.closeUp).toBeLessThan(plan.walkStop)
    expect(plan.walkStop).toBeLessThan(plan.total)
  })
})

describe('ffmpeg', () => {
  it('builds args with watermark, padded audio, exact length and faststart', () => {
    const args = buildFfmpegArgs({
      fps: 24,
      seconds: 20,
      audioFile: '/tmp/a.pcm',
      audioSampleRate: 48000,
      audioChannels: 2,
      watermarkPath: '/tmp/w.png',
      outFile: '/tmp/o.mp4',
    })
    const joined = args.join(' ')
    expect(joined).toContain('-i pipe:0')
    expect(joined).toContain('-f s16le -ar 48000 -ac 2 -i /tmp/a.pcm')
    expect(joined).toContain('[0:v][2:v]overlay=')
    expect(joined).toContain('-map 1:a -af apad')
    expect(joined).toContain('-t 20.000')
    expect(joined).toContain('+faststart')
    expect(args[args.length - 1]).toBe('/tmp/o.mp4')
  })

  it('skips audio mapping when Genie sent no audio', () => {
    const args = buildFfmpegArgs({
      fps: 24,
      seconds: 1,
      audioFile: null,
      audioSampleRate: 48000,
      audioChannels: 2,
      outFile: '/tmp/o.mp4',
    })
    expect(args.join(' ')).not.toContain(':a')
    expect(args.join(' ')).toContain('[0:v]format=yuv420p[v]')
  })

  it('encodes real JPEG frames + PCM into a playable MP4', async () => {
    const ffmpegPath = ffmpegStatic as unknown as string
    // One 1280x720 test JPEG, used as every frame
    const jpeg = spawnSync(ffmpegPath, [
      '-hide_banner', '-loglevel', 'error', '-f', 'lavfi', '-i', 'testsrc=size=1280x720:rate=1',
      '-frames:v', '1', '-f', 'image2pipe', '-c:v', 'mjpeg', 'pipe:1',
    ]).stdout
    expect(jpeg.length).toBeGreaterThan(1000)

    const mp4 = await encodeMp4({
      frames: Array.from({ length: 24 }, () => jpeg),
      fps: 24,
      audio: Buffer.alloc(48000 * 2 * 2 * 0.5), // half a second of silence: gets padded
      audioSampleRate: 48000,
      audioChannels: 2,
      ffmpegPath,
    })
    expect(mp4.subarray(4, 8).toString('latin1')).toBe('ftyp')
    expect(mp4.length).toBeGreaterThan(1000)
  }, 30_000)
})

describe('byte ranges', () => {
  it('parses the ranges browsers send for video', () => {
    expect(parseRange(null, 100)).toBeNull()
    expect(parseRange('bytes=0-', 100)).toEqual({ start: 0, end: 99 })
    expect(parseRange('bytes=0-1', 100)).toEqual({ start: 0, end: 1 })
    expect(parseRange('bytes=10-500', 100)).toEqual({ start: 10, end: 99 })
    expect(parseRange('bytes=-10', 100)).toEqual({ start: 90, end: 99 })
  })

  it('rejects ranges it cannot serve', () => {
    expect(parseRange('bytes=100-', 100)).toBe('invalid')
    expect(parseRange('bytes=5-2', 100)).toBe('invalid')
    expect(parseRange('bytes=-', 100)).toBe('invalid')
    expect(parseRange('bytes=0-1,5-6', 100)).toBe('invalid')
    expect(parseRange('items=0-1', 100)).toBe('invalid')
  })
})

describe('daily cap', () => {
  it('reserves until the next video would pass the cap, then refuses', async () => {
    const store = memoryStore()
    const cap = RESERVE_PER_VIDEO_USD * 2 + 0.01
    expect(await hasRoomToday(store, cap)).toBe(true)
    expect(await reserveSpend(store, cap)).toBe(true)
    expect(await reserveSpend(store, cap)).toBe(true)
    expect(await reserveSpend(store, cap)).toBe(false)
    expect(await hasRoomToday(store, cap)).toBe(false)
    expect(await spentToday(store)).toBeCloseTo(RESERVE_PER_VIDEO_USD * 2, 4)
  })

  it('settles a reservation to the real cost, never below zero', async () => {
    const store = memoryStore()
    await reserveSpend(store, 20)
    await adjustSpend(store, 2.05 - RESERVE_PER_VIDEO_USD, utcDay())
    expect(await spentToday(store)).toBeCloseTo(2.05, 4)
    await adjustSpend(store, -10, utcDay())
    expect(await spentToday(store)).toBe(0)
  })

  it('starts a new budget each UTC day', async () => {
    const store = memoryStore()
    const day1 = Date.UTC(2027, 1, 6, 23, 59)
    const day2 = Date.UTC(2027, 1, 7, 0, 1)
    expect(await reserveSpend(store, RESERVE_PER_VIDEO_USD, day1)).toBe(true)
    expect(await reserveSpend(store, RESERVE_PER_VIDEO_USD, day1)).toBe(false)
    expect(await reserveSpend(store, RESERVE_PER_VIDEO_USD, day2)).toBe(true)
  })
})

describe('video jobs', () => {
  const now = Date.UTC(2026, 10, 21, 12)
  const job = (over: Partial<VideoJob>): VideoJob => ({
    status: 'pending', sign: 'fire-horse', attempts: 1, updatedAt: now, token: 't', day: '2026-11-21', ...over,
  })

  it('allows a new attempt only when nothing is running or done and attempts are left', () => {
    expect(canStartAttempt(null, now)).toBe(true)
    expect(canStartAttempt(job({ status: 'pending' }), now)).toBe(false)
    expect(canStartAttempt(job({ status: 'generating' }), now)).toBe(false)
    expect(canStartAttempt(job({ status: 'ready' }), now)).toBe(false)
    expect(canStartAttempt(job({ status: 'failed', attempts: 1 }), now)).toBe(true)
    expect(canStartAttempt(job({ status: 'failed', attempts: MAX_ATTEMPTS }), now)).toBe(false)
    expect(canStartAttempt(job({ status: 'capped', attempts: MAX_ATTEMPTS }), now)).toBe(true)
    // A run that died (older than the background limit) may be replaced
    expect(canStartAttempt(job({ status: 'generating', attempts: 1, updatedAt: now - JOB_STALE_MS - 1 }), now)).toBe(true)
  })

  it('gives each attempt a secret token the background function must present', async () => {
    const store = memoryStore()
    const token = await claimAttempt(store, SESSION, { sign: 'fire-horse', email: 'a@example.com' })
    expect(token).toBeTruthy()
    // A second request while it's pending gets nothing
    expect(await claimAttempt(store, SESSION, { sign: 'fire-horse' })).toBeNull()
    // A made-up token can't start it (no Genie spend)
    expect(await startJob(store, SESSION, 'made-up')).toBeNull()
    const started = await startJob(store, SESSION, token!)
    expect(started?.status).toBe('generating')
    // ...and can't be started twice
    expect(await startJob(store, SESSION, token!)).toBeNull()
    await finishJob(store, SESSION, token!, { status: 'ready', costUsd: 2.05 })
    const done = await readJob(store, SESSION)
    expect(done).toMatchObject({ status: 'ready', costUsd: 2.05, email: 'a@example.com', attempts: 1 })
    // One paid order = one video
    expect(await claimAttempt(store, SESSION, { sign: 'fire-horse' })).toBeNull()
  })

  it('stops after MAX_ATTEMPTS failed attempts', async () => {
    const store = memoryStore()
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      const token = await claimAttempt(store, SESSION, { sign: 'fire-horse' })
      expect(token).toBeTruthy()
      await startJob(store, SESSION, token!)
      await finishJob(store, SESSION, token!, { status: 'failed', error: 'boom' })
    }
    expect(await claimAttempt(store, SESSION, { sign: 'fire-horse' })).toBeNull()
  })

  it('a capped attempt does not use up an attempt', async () => {
    const store = memoryStore()
    const token = await claimAttempt(store, SESSION, { sign: 'fire-horse' })
    await markCapped(store, SESSION, token!)
    expect(await readJob(store, SESSION)).toMatchObject({ status: 'capped', attempts: 0 })
    const again = await claimAttempt(store, SESSION, { sign: 'fire-horse' })
    expect(again).toBeTruthy()
    expect(await readJob(store, SESSION)).toMatchObject({ status: 'pending', attempts: 1 })
  })
})

describe('paid video orders', () => {
  const session = (over: Partial<Stripe.Checkout.Session>) =>
    ({
      id: SESSION,
      payment_status: 'paid',
      metadata: { product: ELEMENT_VIDEO_PRODUCT, video_sign: 'fire-horse' },
      customer_details: { email: 'buyer@example.com' },
      ...over,
    }) as unknown as Stripe.Checkout.Session

  it('accepts only paid sessions for this product with a real sign', () => {
    expect(paidVideoOrder(session({}))).toEqual({ sessionId: SESSION, sign: 'fire-horse', email: 'buyer@example.com' })
    expect(paidVideoOrder(session({ payment_status: 'unpaid' }))).toBeNull()
    expect(paidVideoOrder(session({ metadata: { product: 'reading-personal', video_sign: 'fire-horse' } }))).toBeNull()
    expect(paidVideoOrder(session({ metadata: { product: ELEMENT_VIDEO_PRODUCT, video_sign: 'lava-unicorn' } }))).toBeNull()
  })
})

describe('claimAndReserve', () => {
  const order = { sessionId: SESSION, sign: 'fire-horse', email: 'buyer@example.com' }
  let savedCap: string | undefined
  let savedSupport: string | undefined

  beforeEach(() => {
    savedCap = process.env.ELEMENT_VIDEO_DAILY_USD_CAP
    savedSupport = process.env.SUPPORT_EMAIL
    delete process.env.SUPPORT_EMAIL // owner alerts become no-ops
  })
  afterEach(() => {
    if (savedCap === undefined) delete process.env.ELEMENT_VIDEO_DAILY_USD_CAP
    else process.env.ELEMENT_VIDEO_DAILY_USD_CAP = savedCap
    if (savedSupport !== undefined) process.env.SUPPORT_EMAIL = savedSupport
  })

  it('claims and reserves once per order', async () => {
    const store = memoryStore()
    const first = await claimAndReserve(store, order)
    expect('token' in first).toBe(true)
    expect(await spentToday(store)).toBeCloseTo(RESERVE_PER_VIDEO_USD, 4)
    // The webhook and the ready page both call it: the second call starts nothing
    expect(await claimAndReserve(store, order)).toEqual({ status: 'pending' })
    expect(await spentToday(store)).toBeCloseTo(RESERVE_PER_VIDEO_USD, 4)
  })

  it('parks a paid order as capped when the day is full, without spending', async () => {
    process.env.ELEMENT_VIDEO_DAILY_USD_CAP = String(RESERVE_PER_VIDEO_USD / 2)
    const store = memoryStore()
    expect(await claimAndReserve(store, order)).toEqual({ status: 'capped' })
    expect(await spentToday(store)).toBe(0)
    expect(await readJob(store, SESSION)).toMatchObject({ status: 'capped', attempts: 0 })
  })
})
