// ============================================
// WUXING PERSONAL READING — shared offer facts
// ============================================
// One place for what every reading CTA and the /reading landing page say,
// so the price, page count and URL can't drift apart.

/**
 * Feature flag: set the READING_LIVE env var to "true" (Netlify build env,
 * then redeploy) to sell the reading on /reading. Unset or anything else = off:
 * /reading collects launch-notification emails instead.
 */
export const READING_LIVE: boolean = import.meta.env.READING_LIVE === 'true'

/** The one stable URL every CTA and social post links to. */
export const READING_PATH = '/reading'

export const READING_PRICE = '$9.90'
export const READING_PAGE_COUNT = 8

/**
 * What we promise if a reading file has a problem, shown in the Terms of
 * Service (/terms). Keep it friendly and low-friction (Marc, 2026-10-21):
 * no policy or finality wording anywhere in the buying flow.
 */
export const READING_FIX_PROMISE =
  "If something is wrong with your reading file, reply to the email and we'll fix it or send a new one."

/**
 * Buttondown tag for the launch waitlist. The newsletter-subscribe function
 * only accepts tags on its own allowlist, so keep the two in sync.
 */
export const READING_WAITLIST_TAG = 'reading-waitlist'
