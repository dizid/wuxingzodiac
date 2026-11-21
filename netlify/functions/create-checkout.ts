import type { Context } from "@netlify/functions"
import Stripe from 'stripe'
import { validateReadingInput, toStripeMetadata, READING_TYPES } from '../../src/lib/readings/types'
import { getSignForBirthDate } from '../../src/lib/readings/sign'

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })
}

// Same READING_LIVE env var that switches /reading from the waitlist to the order
// form (src/lib/reading-offer.ts). While it isn't "true", calling this function
// directly can't start a checkout. The old Elemental Blueprint body ({ slug })
// is refused either way: it fails validateReadingInput below.
function isReadingLive(): boolean {
  return process.env.READING_LIVE === 'true'
}

// Affiliate refs are short codes; anything else is dropped. Stripe refuses the whole
// checkout if a metadata value is over 500 characters. (The PlugAff/Promoten tracker
// script was removed Nov 11 2026; this only reads refs left in older visitors' cookies.)
const AFFILIATE_REF_PATTERN = /^[A-Za-z0-9._-]{1,64}$/

/**
 * PlugAff affiliate ref from the visitor's cookie, or '' when missing or malformed.
 * Never throws: a broken cookie value (e.g. a stray '%') used to crash checkout.
 */
function readAffiliateRef(cookieHeader: string | null): string {
  for (const part of (cookieHeader || '').split(';')) {
    const [key, ...valueParts] = part.trim().split('=')
    if (key !== 'plugaff_ref') continue
    try {
      const value = decodeURIComponent(valueParts.join('='))
      return AFFILIATE_REF_PATTERN.test(value) ? value : ''
    } catch {
      return ''
    }
  }
  return ''
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  if (!isReadingLive()) {
    return jsonResponse({ error: 'The personal reading is not on sale yet.' }, 410)
  }

  const plugaffRef = readAffiliateRef(req.headers.get('cookie'))

  try {
    // Body: { readingType, names[], birthDates[], email, isGift, recipientName?, giftMessage? }
    const body: unknown = await req.json().catch(() => null)
    const validation = validateReadingInput(body)
    if (!validation.ok) {
      return jsonResponse({ error: validation.error }, 400)
    }

    const input = validation.input
    if (!READING_TYPES[input.type].available) {
      return jsonResponse({ error: 'This reading is not available yet' }, 400)
    }

    // Sign is always computed server-side from the birth date
    const sign = getSignForBirthDate(input.birthDates[0]!)

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const siteUrl = process.env.SITE_URL || 'https://wuxingzodiac.me'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      customer_email: input.email,
      metadata: {
        ...toStripeMetadata(input, sign.slug),
        plugaff_ref: plugaffRef,
        plugaff_app: 'wuxingzodiac',
      },
      // Shown above the pay button: honest about what the reading is based on
      custom_text: {
        submit: {
          message: `Your ${READING_TYPES[input.type].label} is based on your birth-year sign (${sign.name}) and the five elements, written for you by name, and emailed to you as a PDF.`,
        },
      },
      success_url: `${siteUrl}/report/download?session_id={CHECKOUT_SESSION_ID}`,
      // Back to the page the reading is ordered from
      cancel_url: `${siteUrl}/reading`,
    })

    return jsonResponse({ url: session.url }, 200)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Checkout creation error:', message)
    return jsonResponse({ error: 'Failed to create checkout session' }, 500)
  }
}

export const config = { path: "/api/create-checkout" }
