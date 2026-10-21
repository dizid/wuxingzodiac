import type { Context } from "@netlify/functions"
import { neon } from '@neondatabase/serverless'
import { getStore } from '@netlify/blobs'
import { READING_TYPES } from '../../src/lib/readings/types'
import { MAX_READING_ATTEMPTS } from '../../src/lib/readings/server/orders'

// Legacy Blueprint downloads: max downloads per order and expiry window (30 days, matches UI promise)
const MAX_DOWNLOADS = 5
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000

function jsonResponse(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  })
}

function formatSignName(slug: string): string {
  return slug
    .split('-')
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** "marc@example.com" → "m•••@example.com" (enough to recognise, not to harvest) */
function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  return local && domain ? `${local[0]}•••@${domain}` : ''
}

/** Collapse the order's reading state into what the status page needs */
function readingState(status: string, attempts: number): 'generating' | 'delivered' | 'failed' {
  if (status === 'delivered') return 'delivered'
  // A failed attempt with attempts left is still being retried automatically
  if (status === 'failed' && attempts >= MAX_READING_ATTEMPTS) return 'failed'
  return 'generating'
}

/**
 * GET /api/download-report?session_id=…&action=check
 *  - Personalized readings: delivery status only (the PDF is emailed, never stored)
 *  - Legacy Blueprint orders (?session=…): status check, then PDF download
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== 'GET') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  try {
    const url = new URL(req.url)
    // session_id: Stripe success_url for readings; session: legacy Blueprint links
    const sessionId = url.searchParams.get('session_id') || url.searchParams.get('session')

    if (!sessionId) {
      return jsonResponse({ error: 'Missing session parameter' }, 400)
    }

    const sql = neon(process.env.DATABASE_URL!)

    // Look up the order
    const [order] = await sql`
      SELECT id, sign_slug, status, download_count, fulfilled_at, customer_email, reading_status, reading_attempts
      FROM report_orders
      WHERE stripe_session_id = ${sessionId}
    `

    if (!order) {
      return jsonResponse({ error: 'Order not found' }, 404)
    }

    if (order.status !== 'paid') {
      return jsonResponse({ error: 'Payment not completed' }, 402)
    }

    const action = url.searchParams.get('action')
    const signName = formatSignName(order.sign_slug)

    // ── Personalized reading: emailed, nothing to download ──
    if (order.reading_status) {
      if (action !== 'check') {
        return jsonResponse({ error: 'Readings are delivered by email' }, 410)
      }
      return jsonResponse({
        status: readingState(order.reading_status, Number(order.reading_attempts)),
        productName: READING_TYPES.personal.label,
        signName,
        signSlug: order.sign_slug,
        email: maskEmail(order.customer_email),
      }, 200)
    }

    // ── Legacy Elemental Blueprint: static per-sign PDF ──

    // Check expiry
    const fulfilledAt = new Date(order.fulfilled_at).getTime()
    if (Date.now() - fulfilledAt > EXPIRY_MS) {
      return jsonResponse({ error: 'Download link has expired' }, 410)
    }

    // Check download limit
    if (order.download_count >= MAX_DOWNLOADS) {
      return jsonResponse({ error: 'Download limit exceeded' }, 429)
    }

    // Two modes: ?action=check returns status JSON, default streams the PDF
    if (action === 'check') {
      return jsonResponse({
        status: 'ready',
        productName: 'Elemental Blueprint',
        signName,
        signSlug: order.sign_slug,
        downloadsRemaining: MAX_DOWNLOADS - order.download_count,
      }, 200)
    }

    // Download mode — fetch and stream the PDF
    const store = getStore('reports')
    const pdfBuffer = await store.get(`${order.sign_slug}.pdf`, { type: 'arrayBuffer' })

    if (!pdfBuffer) {
      console.error('PDF not found in blob store for slug:', order.sign_slug)
      return jsonResponse({ error: 'Report file not found' }, 404)
    }

    // Increment download count
    await sql`
      UPDATE report_orders
      SET download_count = download_count + 1
      WHERE id = ${order.id}
    `

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="elemental-blueprint-${order.sign_slug}.pdf"`,
        'Cache-Control': 'no-store',
      }
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Download report error:', message)
    return jsonResponse({ error: 'Failed to download report' }, 500)
  }
}

export const config = { path: "/api/download-report" }
