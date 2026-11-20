// ============================================
// STEP INTO YOUR ELEMENT — start the video for a paid order
// ============================================
// Called by stripe-webhook.ts (payment confirmed) and by POST /api/element-video
// (the ready page, in case the webhook is late or failed). Safe to call any
// number of times: Stripe is re-checked, and the Blobs job allows one running
// attempt per order and MAX_ATTEMPTS in total, so Genie spend is bounded per
// paid order and by the daily cap.

import Stripe from 'stripe'
import { ELEMENT_VIDEO_PRODUCT, type ElementVideoStatus } from '../offer'
import { getProfileBySlug } from '../../sign-content/profiles'
import { sendOwnerAlert } from '../../readings/server/email'
import {
  videoStore,
  readJob,
  canStartAttempt,
  claimAttempt,
  reserveSpend,
  adjustSpend,
  markCapped,
  finishJob,
  dailyCapUsd,
  RESERVE_PER_VIDEO_USD,
  type VideoJob,
} from './store'
import type { Store } from '@netlify/blobs'

export interface PaidVideoOrder {
  sessionId: string
  sign: string
  email?: string
}

/** The video order in a Checkout session, or null if it isn't a paid video order. */
export function paidVideoOrder(session: Stripe.Checkout.Session): PaidVideoOrder | null {
  if (session.payment_status !== 'paid') return null
  if (session.metadata?.product !== ELEMENT_VIDEO_PRODUCT) return null
  const sign = session.metadata?.video_sign
  if (!sign || !getProfileBySlug(sign)) return null
  return {
    sessionId: session.id,
    sign,
    email: session.customer_details?.email ?? undefined,
  }
}

/** Ask the background function to run one attempt. Throws if it can't be reached. */
async function triggerBackground(origin: string, sessionId: string, token: string): Promise<void> {
  const res = await fetch(`${origin}/.netlify/functions/element-video-background`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, token }),
  })
  if (!res.ok) throw new Error(`element-video-background returned ${res.status}`)
}

/**
 * Claim an attempt + reserve today's money for it. Returns the token to hand to
 * the background function, or the status to report when no attempt starts.
 */
export async function claimAndReserve(
  store: Store,
  order: PaidVideoOrder,
): Promise<{ token: string } | { status: ElementVideoStatus }> {
  const before = await readJob(store, order.sessionId)
  if (!canStartAttempt(before)) return { status: before?.status ?? 'unknown' }

  const token = await claimAttempt(store, order.sessionId, { sign: order.sign, email: order.email })
  if (!token) {
    const now = await readJob(store, order.sessionId)
    return { status: now?.status ?? 'unknown' }
  }

  if (!(await reserveSpend(store, dailyCapUsd()))) {
    await markCapped(store, order.sessionId, token)
    // Alert once per order, not on every page reload
    if (before?.status !== 'capped') {
      await sendOwnerAlert(
        'Element video waiting: daily cap reached',
        [
          `A paid "Step into your element" video could not start: today's Genie budget ($${dailyCapUsd()}) is used up.`,
          `Session: ${order.sessionId}`,
          `Sign: ${order.sign}`,
          'It starts by itself when the buyer opens their video page after 00:00 UTC.',
          'Raise ELEMENT_VIDEO_DAILY_USD_CAP (Netlify env + redeploy) to make it now.',
        ].join('\n'),
      )
    }
    return { status: 'capped' }
  }

  return { token }
}

/**
 * Start (or report) the video for a Checkout session id. Re-reads the session
 * from Stripe; anything but a paid video order returns 'unknown'.
 */
export async function queueElementVideo(sessionId: string, origin: string): Promise<ElementVideoStatus> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  const order = paidVideoOrder(session)
  if (!order) return 'unknown'

  const store = videoStore()
  const claim = await claimAndReserve(store, order)
  if ('status' in claim) return claim.status

  try {
    await triggerBackground(origin, sessionId, claim.token)
  } catch (error) {
    // Nothing ran, so give the money back; the attempt counts (bounded retries)
    const message = error instanceof Error ? error.message : 'unknown error'
    const job = (await readJob(store, sessionId)) as VideoJob | null
    await finishJob(store, sessionId, claim.token, { status: 'failed', error: message })
    await adjustSpend(store, -RESERVE_PER_VIDEO_USD, job?.day)
    if (job && !canStartAttempt({ ...job, status: 'failed' })) {
      await sendOwnerAlert(
        'Element video could not start',
        `Paid session ${sessionId} (${order.sign}): the background function could not be reached on the last attempt.\nLast error: ${message}`,
      )
    }
    throw error
  }
  return 'pending'
}
