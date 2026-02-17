import type { Context } from "@netlify/functions"
import Stripe from 'stripe'

const VALID_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water']
const VALID_ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { slug } = await req.json()

    if (!slug || typeof slug !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing or invalid slug' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Validate slug format: element-animal
    const parts = slug.split('-')
    if (parts.length !== 2 || !VALID_ELEMENTS.includes(parts[0]) || !VALID_ANIMALS.includes(parts[1])) {
      return new Response(JSON.stringify({ error: 'Invalid zodiac sign slug' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    const siteUrl = process.env.SITE_URL || 'https://wuxingzodiac.me'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      metadata: { sign_slug: slug, product: 'elemental_blueprint' },
      success_url: `${siteUrl}/report/download?session={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/zodiac/${slug}?purchase=cancelled`,
    })

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Checkout creation error:', message)
    return new Response(JSON.stringify({ error: 'Failed to create checkout session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = { path: "/api/create-checkout" }
