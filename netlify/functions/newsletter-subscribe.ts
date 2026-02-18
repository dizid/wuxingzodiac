import type { Context } from "@netlify/functions"
import 'dotenv/config'

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { email, honeypot } = await req.json()

    // Spam bot check — honeypot field should be empty
    if (honeypot) {
      // Pretend success so bots don't retry
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY
    if (!apiKey) {
      console.error('BUTTONDOWN_API_KEY not configured')
      return new Response(JSON.stringify({ error: 'Newsletter service not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const res = await fetch('https://api.buttondown.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        type: 'regular',
      }),
    })

    // Duplicate subscriber — Buttondown returns 400 with specific error
    if (res.status === 400) {
      const data = await res.json()
      const isDuplicate = JSON.stringify(data).toLowerCase().includes('already')
      if (isDuplicate) {
        return new Response(JSON.stringify({ ok: true, message: "You're already subscribed!" }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      }
      return new Response(JSON.stringify({ error: 'Could not subscribe. Please check your email and try again.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (!res.ok) {
      const text = await res.text()
      console.error('Buttondown API error:', res.status, text)
      return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(JSON.stringify({ ok: true, message: "You're in! Watch your inbox." }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Newsletter subscribe error:', message)
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = { path: "/api/newsletter/subscribe" }
