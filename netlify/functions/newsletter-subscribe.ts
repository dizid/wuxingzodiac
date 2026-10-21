import type { Context } from "@netlify/functions"
import 'dotenv/config'

// Launch waitlist for the personal reading (READING_WAITLIST_TAG in src/lib/reading-offer.ts)
const WAITLIST_TAG = 'reading-waitlist'

// Extra tags a signup form may ask for, on top of the visitor's sign.
// Anything else is ignored so visitors can't create arbitrary Buttondown tags.
const ALLOWED_EXTRA_TAGS = [WAITLIST_TAG]

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const { email, honeypot, sign, tags: requestedTags } = await req.json()

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

    const extraTags: string[] = Array.isArray(requestedTags)
      ? requestedTags.filter((tag): tag is string => typeof tag === 'string' && ALLOWED_EXTRA_TAGS.includes(tag))
      : []
    const isWaitlist = extraTags.includes(WAITLIST_TAG)
    const tags = [...(sign ? [sign] : []), ...extraTags]
    const metadata: Record<string, string> = {
      ...(sign ? { zodiac_sign: sign } : {}),
      // Also in metadata, so a waitlist signup still shows if the tag can't be applied
      ...(isWaitlist ? { reading_waitlist: 'yes' } : {}),
    }

    const subscribe = (withTags: boolean) => fetch('https://api.buttondown.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
        // Waitlist: merge the tag into an existing subscriber instead of rejecting the duplicate
        ...(isWaitlist ? { 'X-Buttondown-Collision-Behavior': 'add' } : {}),
      },
      body: JSON.stringify({
        email_address: email,
        type: 'regular',
        ...(withTags && tags.length > 0 ? { tags } : {}),
        ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
      }),
    })

    let res = await subscribe(true)

    // Buttondown plans without tags reject tags that don't exist yet (403 feature_disabled).
    // Retry without tags so the signup itself still goes through; metadata keeps the sign/waitlist.
    if (res.status === 403 && tags.length > 0) {
      console.error('Buttondown rejected tags, retrying without them:', await res.text())
      res = await subscribe(false)
    }

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

    const message = isWaitlist
      ? "You're on the list! We'll email you when the reading launches."
      : "You're in! Watch your inbox."
    return new Response(JSON.stringify({ ok: true, message }), {
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
