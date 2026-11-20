import type { Context } from '@netlify/functions'
import Stripe from 'stripe'
import {
  ELEMENT_VIDEO_PRODUCT,
  ELEMENT_VIDEO_PATH,
  ELEMENT_VIDEO_READY_PATH,
  ELEMENT_VIDEO_PRICE_CENTS,
  ELEMENT_VIDEO_CURRENCY,
  ELEMENT_VIDEO_SECONDS,
  elementVideoProductName,
} from '../../src/lib/element-video/offer'
import { getProfileBySlug } from '../../src/lib/sign-content/profiles'
import { videoStore, hasRoomToday, dailyCapUsd } from '../../src/lib/element-video/server/store'

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

/**
 * POST { sign: 'fire-horse' } → { url } of a Stripe Checkout page for the
 * "Step into your element" video of that sign.
 *
 * Refuses (so nobody pays for a video we can't make):
 * - 410 while ELEMENT_VIDEO_LIVE isn't "true" (Netlify env, functions)
 * - 503 when GEMINI_API_KEY is missing or today's Genie budget is used up
 *
 * The price is sent inline (price_data), so no Stripe product or price object
 * has to exist: one constant in offer.ts is the price everywhere.
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)
  if (process.env.ELEMENT_VIDEO_LIVE !== 'true') {
    return json({ error: 'The element video is not on sale yet.' }, 410)
  }

  const body: unknown = await req.json().catch(() => null)
  const sign = body && typeof body === 'object' ? (body as Record<string, unknown>).sign : null
  const profile = typeof sign === 'string' ? getProfileBySlug(sign) : undefined
  if (!profile) return json({ error: 'Please pick your sign.' }, 400)

  if (!process.env.GEMINI_API_KEY) {
    console.error('element-video-checkout: GEMINI_API_KEY is not set')
    return json({ error: 'Videos are paused right now. Please try again later.' }, 503)
  }

  try {
    if (!(await hasRoomToday(videoStore(), dailyCapUsd()))) {
      return json({ error: "Today's videos are all made. Please come back tomorrow." }, 503)
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const siteUrl = process.env.SITE_URL || 'https://wuxingzodiac.me'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: ELEMENT_VIDEO_CURRENCY,
            unit_amount: ELEMENT_VIDEO_PRICE_CENTS,
            product_data: {
              name: elementVideoProductName(profile.name),
              description: `A ${ELEMENT_VIDEO_SECONDS}-second AI-made video world of the ${profile.name}, with sound.`,
            },
          },
        },
      ],
      metadata: {
        product: ELEMENT_VIDEO_PRODUCT,
        video_sign: profile.slug,
      },
      custom_text: {
        submit: {
          message: `Your ${ELEMENT_VIDEO_SECONDS}-second ${profile.name} video is made right after payment (about a minute) and shown on the next page. We also email you the link.`,
        },
      },
      success_url: `${siteUrl}${ELEMENT_VIDEO_READY_PATH}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${ELEMENT_VIDEO_PATH}?sign=${profile.slug}`,
    })

    return json({ url: session.url }, 200)
  } catch (error) {
    console.error('element-video-checkout error:', error instanceof Error ? error.message : error)
    return json({ error: 'Could not start checkout. Please try again.' }, 500)
  }
}

export const config = { path: '/api/element-video-checkout' }
