// ============================================
// READING ORDER STATE (Neon, report_orders)
// ============================================
// Nothing about the reading itself is stored: inputs live in Stripe session
// metadata and the PDF is emailed then discarded. The order row only tracks
// delivery state (see scripts/migrations/002-reading-delivery.sql).

import { neon } from '@neondatabase/serverless'

export type ReadingStatus = 'queued' | 'generating' | 'delivered' | 'failed'

/** Max generation attempts per paid order (bounds Claude spend) */
export const MAX_READING_ATTEMPTS = 3

// Background functions time out at 15 minutes; a 'generating' row older than
// this belongs to a run that died and may be claimed again.
const STALE_INTERVAL = '16 minutes'

// Stripe Checkout session ids: cs_test_… / cs_live_…
const SESSION_ID_PATTERN = /^cs_(test|live)_[A-Za-z0-9]{10,250}$/

export function isCheckoutSessionId(value: unknown): value is string {
  return typeof value === 'string' && SESSION_ID_PATTERN.test(value)
}

function db() {
  return neon(process.env.DATABASE_URL!)
}

/**
 * Atomically claim a paid reading order for generation.
 * Returns the attempt number, or null when the order is delivered, already
 * being generated, out of attempts, unpaid, or unknown.
 */
export async function claimReadingOrder(sessionId: string): Promise<{ attempt: number } | null> {
  const rows = await db()`
    UPDATE report_orders
    SET reading_status = 'generating',
        reading_attempts = reading_attempts + 1,
        reading_updated_at = NOW(),
        reading_error = NULL
    WHERE stripe_session_id = ${sessionId}
      AND status = 'paid'
      AND reading_attempts < ${MAX_READING_ATTEMPTS}
      AND (
        reading_status IN ('queued', 'failed')
        OR (reading_status = 'generating' AND reading_updated_at < NOW() - ${STALE_INTERVAL}::interval)
      )
    RETURNING reading_attempts
  `
  const row = rows[0]
  return row ? { attempt: Number(row.reading_attempts) } : null
}

export async function markReadingDelivered(sessionId: string): Promise<void> {
  await db()`
    UPDATE report_orders
    SET reading_status = 'delivered', reading_updated_at = NOW(), delivered_at = NOW(), reading_error = NULL
    WHERE stripe_session_id = ${sessionId}
  `
}

export async function markReadingFailed(sessionId: string, error: string): Promise<void> {
  await db()`
    UPDATE report_orders
    SET reading_status = 'failed', reading_updated_at = NOW(), reading_error = ${error.slice(0, 500)}
    WHERE stripe_session_id = ${sessionId}
  `
}
