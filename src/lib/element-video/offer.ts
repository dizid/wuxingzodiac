// ============================================
// STEP INTO YOUR ELEMENT — shared offer facts
// ============================================
// Browser- and server-safe (no import.meta.env, no Node imports). One place for
// the price, length and URLs, so the product page, the sign-page card, the
// checkout function and the emails can't drift apart. The on/off switch is read
// separately: pages use ELEMENT_VIDEO_LIVE from ./live (build-time), functions
// read process.env.ELEMENT_VIDEO_LIVE.

/** Stripe metadata `product` value for this purchase. */
export const ELEMENT_VIDEO_PRODUCT = 'element-video'

export const ELEMENT_VIDEO_PATH = '/element-video'
export const ELEMENT_VIDEO_READY_PATH = '/element-video/ready'

/** Price shown on the site and charged at checkout (USD, like the reading). */
export const ELEMENT_VIDEO_PRICE = '$4.90'
export const ELEMENT_VIDEO_PRICE_CENTS = 490
export const ELEMENT_VIDEO_CURRENCY = 'usd'

/** Clip length in seconds (Genie 4 bills ~$0.10 per second). */
export const ELEMENT_VIDEO_SECONDS = 20

/** Product name on the Stripe checkout and receipt. */
export function elementVideoProductName(signName: string): string {
  return `Step into your element: ${signName} world video (${ELEMENT_VIDEO_SECONDS} s)`
}

/** Stripe Checkout session ids look like cs_test_… / cs_live_… */
export function isCheckoutSessionId(value: unknown): value is string {
  return typeof value === 'string' && /^cs_(test|live)_[A-Za-z0-9]{10,250}$/.test(value)
}

/** Status the ready page polls for (GET /api/element-video). */
export type ElementVideoStatus =
  | 'unknown' // no job yet (payment not seen yet, or not a video purchase)
  | 'pending' // paid, queued
  | 'generating' // Genie is painting the world
  | 'ready' // MP4 stored, can be played/downloaded
  | 'failed' // all attempts failed; the owner has been alerted
  | 'capped' // today's spend cap was reached after payment; made after 00:00 UTC

export interface ElementVideoStatusResponse {
  status: ElementVideoStatus
  /** Sign slug, e.g. 'fire-horse' (once known) */
  sign?: string
}
