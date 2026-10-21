import type { Context } from "@netlify/functions"
import Stripe from 'stripe'
import { fromStripeMetadata, READING_PRODUCT } from '../../src/lib/readings/types'
import { generateReading } from '../../src/lib/readings/server/engine'
import { sendReadingEmail, sendOwnerAlert } from '../../src/lib/readings/server/email'
import {
  claimReadingOrder,
  markReadingDelivered,
  markReadingFailed,
  isCheckoutSessionId,
  MAX_READING_ATTEMPTS,
} from '../../src/lib/readings/server/orders'

// Pause between attempts (transient API/network trouble usually clears quickly)
const RETRY_DELAY_MS = 30_000

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Background function (15-min limit, responds 202 immediately).
 * Generates a personalized reading for a paid Stripe Checkout session and
 * emails the PDF to the buyer. Nothing is stored: inputs come from Stripe
 * metadata, the PDF only exists in memory until it's sent.
 *
 * Triggered by stripe-webhook.ts with { sessionId }. The function is publicly
 * reachable, so it trusts nothing but the session id: payment and reading
 * details are re-read from Stripe, and the order row is claimed atomically
 * (paid, not delivered, not running, under the attempt cap) — Claude spend
 * is bounded per paid order.
 *
 * Retries happen inside this invocation (Netlify does not reliably retry
 * background functions): up to MAX_READING_ATTEMPTS, 30s apart, each one a
 * fresh atomic claim. After the last failure the owner (SUPPORT_EMAIL) gets
 * an alert. Manual retry after fixing a problem:
 *   UPDATE report_orders SET reading_attempts = 0, reading_status = 'failed' WHERE stripe_session_id = 'cs_live_...';
 *   curl -X POST https://wuxingzodiac.me/.netlify/functions/generate-reading-background \
 *        -H 'Content-Type: application/json' -d '{"sessionId":"cs_live_..."}'
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') return

  const body: unknown = await req.json().catch(() => null)
  const sessionId = body && typeof body === 'object' ? (body as Record<string, unknown>).sessionId : null
  if (!isCheckoutSessionId(sessionId)) {
    console.error('generate-reading: invalid session id')
    return
  }

  // Stripe is the source of truth for payment and the reading inputs
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  if (session.payment_status !== 'paid' || session.metadata?.product !== READING_PRODUCT) {
    console.error(`generate-reading: session ${sessionId} is not a paid reading`)
    return
  }

  const input = fromStripeMetadata(session.metadata)
  if (!input) {
    // Validated at checkout, so this means tampered or corrupt metadata
    console.error(`generate-reading: invalid reading metadata for ${sessionId}`)
    await sendOwnerAlert('Invalid reading metadata', `Paid session ${sessionId} has invalid reading details in Stripe metadata.`)
    return
  }

  const to = session.customer_details?.email || input.email

  // Each loop iteration is one attempt: an atomic claim skips delivered,
  // running and exhausted orders, so concurrent invocations can't double up.
  for (;;) {
    const claim = await claimReadingOrder(sessionId)
    if (!claim) return

    try {
      const reading = await generateReading(input)
      await sendReadingEmail(to, reading.context, reading.pdf)
      await markReadingDelivered(sessionId)
      return
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      console.error(`generate-reading: attempt ${claim.attempt} failed for ${sessionId}:`, message)
      await markReadingFailed(sessionId, message)

      if (claim.attempt < MAX_READING_ATTEMPTS) {
        await sleep(RETRY_DELAY_MS)
        continue
      }

      await sendOwnerAlert(
        'Reading delivery failed',
        [
          `A paid reading could not be delivered after ${claim.attempt} attempts.`,
          `Session: ${sessionId}`,
          `Customer email: ${to}`,
          `Last error: ${message}`,
          '',
          'To retry after fixing the cause, reset the order and trigger the generator:',
          `UPDATE report_orders SET reading_attempts = 0, reading_status = 'failed' WHERE stripe_session_id = '${sessionId}';`,
          `curl -X POST https://wuxingzodiac.me/.netlify/functions/generate-reading-background -H 'Content-Type: application/json' -d '{"sessionId":"${sessionId}"}'`,
        ].join('\n'),
      )
      return
    }
  }
}
