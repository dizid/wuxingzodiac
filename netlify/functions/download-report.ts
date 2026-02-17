import type { Context } from "@netlify/functions"
import { neon } from '@neondatabase/serverless'
import { getStore } from '@netlify/blobs'

// Max downloads per order and expiry window (7 days)
const MAX_DOWNLOADS = 5
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000

export default async (req: Request, _context: Context) => {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const url = new URL(req.url)
    const sessionId = url.searchParams.get('session')

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing session parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const sql = neon(process.env.DATABASE_URL!)

    // Look up the order
    const [order] = await sql`
      SELECT id, sign_slug, status, download_count, fulfilled_at
      FROM report_orders
      WHERE stripe_session_id = ${sessionId}
    `

    if (!order) {
      return new Response(JSON.stringify({ error: 'Order not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    if (order.status !== 'paid') {
      return new Response(JSON.stringify({ error: 'Payment not completed' }), {
        status: 402,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Check expiry
    const fulfilledAt = new Date(order.fulfilled_at).getTime()
    if (Date.now() - fulfilledAt > EXPIRY_MS) {
      return new Response(JSON.stringify({ error: 'Download link has expired' }), {
        status: 410,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Check download limit
    if (order.download_count >= MAX_DOWNLOADS) {
      return new Response(JSON.stringify({ error: 'Download limit exceeded' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Fetch PDF from Netlify Blobs
    const store = getStore('reports')
    const pdfBuffer = await store.get(`${order.sign_slug}.pdf`, { type: 'arrayBuffer' })

    if (!pdfBuffer) {
      console.error('PDF not found in blob store for slug:', order.sign_slug)
      return new Response(JSON.stringify({ error: 'Report file not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
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
    return new Response(JSON.stringify({ error: 'Failed to download report' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = { path: "/api/download-report" }
