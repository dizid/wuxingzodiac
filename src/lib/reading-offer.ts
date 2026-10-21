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
 * Refund policy for the reading: the ONE place to change it. Shown word for
 * word in the Terms of Service (/terms) and the /reading FAQ, so the two
 * always say the same thing. No refunds (Marc, 2026-10-21): the reading is
 * made for you and delivered instantly, and buyers waive their 14-day EU right
 * of withdrawal on the order form. Broken files or a wrong name or date are
 * still fixed or re-sent.
 */
export const READING_REFUND_POLICY =
  "Because each reading is made for you and delivered instantly, all sales are final. If something is wrong with your file (it won't open, wrong name or date), reply to the email and we'll fix it or send a new one."

/**
 * Buttondown tag for the launch waitlist. The newsletter-subscribe function
 * only accepts tags on its own allowlist, so keep the two in sync.
 */
export const READING_WAITLIST_TAG = 'reading-waitlist'
