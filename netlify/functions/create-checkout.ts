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

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  // Read PlugAff affiliate ref from cookie
  const cookies = Object.fromEntries(
    (req.headers.get('cookie') || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=')
      return [k, decodeURIComponent(v.join('='))]
    })
  )
  const plugaffRef = cookies['plugaff_ref'] || ''

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
      cancel_url: `${siteUrl}/zodiac/${sign.slug}?purchase=cancelled`,
    })

    return jsonResponse({ url: session.url }, 200)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Checkout creation error:', message)
    return jsonResponse({ error: 'Failed to create checkout session' }, 500)
  }
}

export const config = { path: "/api/create-checkout" }
