import type { Context } from "@netlify/functions"
import Stripe from 'stripe'
import { neon } from '@neondatabase/serverless'

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  let event: Stripe.Event

  try {
    const body = await req.text()
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook signature verification failed:', message)
    return new Response(JSON.stringify({ error: 'Webhook signature verification failed' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Only process completed checkout sessions
  if (event.type !== 'checkout.session.completed') {
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const session = event.data.object as Stripe.Checkout.Session
    const signSlug = session.metadata?.sign_slug
    const email = session.customer_details?.email

    if (!signSlug || !email) {
      console.error('Missing metadata or email in checkout session:', session.id)
      return new Response(JSON.stringify({ error: 'Missing required session data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const sql = neon(process.env.DATABASE_URL!)

    await sql`
      INSERT INTO report_orders (
        stripe_session_id,
        stripe_payment_intent,
        customer_email,
        sign_slug,
        amount_cents,
        currency,
        status,
        fulfilled_at
      ) VALUES (
        ${session.id},
        ${session.payment_intent as string},
        ${email},
        ${signSlug},
        ${session.amount_total || 999},
        ${session.currency || 'usd'},
        'paid',
        NOW()
      )
      ON CONFLICT (stripe_session_id)
      DO UPDATE SET status = 'paid', fulfilled_at = NOW()
    `

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
                  value: (session.amount_total || 999) / 100,
                  currency: session.currency || 'usd',
                  items: [{
                    item_name: `Elemental Blueprint - ${signSlug}`,
                    price: (session.amount_total || 999) / 100,
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

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Webhook processing error:', message)
    return new Response(JSON.stringify({ error: 'Webhook processing failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = { path: "/api/stripe-webhook" }
