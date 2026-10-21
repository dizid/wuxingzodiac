import type { Context } from "@netlify/functions"
import Stripe from 'stripe'
import { neon } from '@neondatabase/serverless'
import { getProductLabel, READING_PRODUCT } from '../../src/lib/readings/types'

// Events that can complete a purchase. async_payment_succeeded only fires for
// delayed payment methods (e.g. SEPA debit), where "completed" arrives unpaid.
const HANDLED_EVENTS = new Set(['checkout.session.completed', 'checkout.session.async_payment_succeeded'])

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })
}

/**
 * Kick off the background generator for a paid reading. Safe to repeat on
 * Stripe retries: the generator atomically claims the order, so delivered
 * or running readings are never regenerated.
 * Throws if the background function can't be reached, so Stripe retries the webhook.
 */
async function triggerReading(sessionId: string, origin: string) {
  // Background functions respond 202 immediately and run for up to 15 minutes
  const res = await fetch(`${origin}/.netlify/functions/generate-reading-background`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId }),
  })
  if (!res.ok) {
    throw new Error(`Background generator returned ${res.status}`)
  }
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return jsonResponse({ error: 'Missing stripe-signature header' }, 400)
  }

  let event: Stripe.Event

  try {
    const body = await req.text()
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook signature verification failed:', message)
    return jsonResponse({ error: 'Webhook signature verification failed' }, 400)
  }

  // Only process checkout sessions that complete a purchase
  if (!HANDLED_EVENTS.has(event.type)) {
    return jsonResponse({ received: true }, 200)
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session
    const signSlug = session.metadata?.sign_slug
    const email = session.customer_details?.email || session.metadata?.email
    const isPaid = session.payment_status === 'paid'
    const isReading = session.metadata?.product === READING_PRODUCT
    const amountCents = session.amount_total ?? 0
    const currency = session.currency || 'usd'

    if (!signSlug || !email) {
      console.error('Missing metadata or email in checkout session:', session.id)
      return jsonResponse({ error: 'Missing required session data' }, 400)
    }

    const sql = neon(process.env.DATABASE_URL!)

    // Unpaid (delayed payment) orders stay 'pending' until async_payment_succeeded.
    // A paid order is never downgraded, and fulfilled_at keeps the first payment time.
    // Readings start 'queued'; a Stripe retry never resets their delivery state.
    await sql`
      INSERT INTO report_orders (
        stripe_session_id,
        stripe_payment_intent,
        customer_email,
        sign_slug,
        amount_cents,
        currency,
        status,
        fulfilled_at,
        reading_status
      ) VALUES (
        ${session.id},
        ${session.payment_intent as string},
        ${email},
        ${signSlug},
        ${amountCents},
        ${currency},
        ${isPaid ? 'paid' : 'pending'},
        ${isPaid ? new Date().toISOString() : null},
        ${isReading ? 'queued' : null}
      )
      ON CONFLICT (stripe_session_id)
      DO UPDATE SET
        status = CASE WHEN report_orders.status = 'paid' THEN 'paid' ELSE EXCLUDED.status END,
        fulfilled_at = COALESCE(report_orders.fulfilled_at, EXCLUDED.fulfilled_at),
        reading_status = COALESCE(report_orders.reading_status, EXCLUDED.reading_status)
    `

    if (!isPaid) {
      return jsonResponse({ received: true }, 200)
    }

    // Personalized readings: generate + email (legacy Blueprint orders need nothing more)
    if (isReading) {
      await triggerReading(session.id, new URL(req.url).origin)
    }

    // Fire GA4 purchase event via Measurement Protocol (server-side)
    if (process.env.GA4_API_SECRET) {
      try {
        await fetch(
          `https://www.google-analytics.com/mp/collect?measurement_id=G-5M7CY55LL8&api_secret=${process.env.GA4_API_SECRET}`,
          {
            method: 'POST',
            body: JSON.stringify({
              client_id: session.client_reference_id || session.id,
              events: [{
                name: 'purchase',
                params: {
                  transaction_id: session.id,
                  value: amountCents / 100,
                  currency,
                  items: [{
                    item_name: `${getProductLabel(session.metadata)} - ${signSlug}`,
                    price: amountCents / 100,
                    quantity: 1,
                  }],
                },
              }],
            }),
          }
        )
      } catch (ga4Error) {
        // Non-blocking — don't fail the webhook if GA4 is down
        console.error('GA4 Measurement Protocol error:', ga4Error)
      }
    }

    return jsonResponse({ received: true }, 200)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook processing error:', message)
    return jsonResponse({ error: 'Webhook processing failed' }, 500)
  }
}

export const config = { path: "/api/stripe-webhook" }
