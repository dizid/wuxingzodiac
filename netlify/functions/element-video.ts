import type { Context } from '@netlify/functions'
import { isCheckoutSessionId, type ElementVideoStatusResponse } from '../../src/lib/element-video/offer'
import { videoStore, readJob, isJobWorking } from '../../src/lib/element-video/server/store'
import { queueElementVideo } from '../../src/lib/element-video/server/fulfil'

function json(body: ElementVideoStatusResponse | { error: string }, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

/**
 * Status of one order's video, for /element-video/ready?session_id=…
 *
 * GET  ?session_id=cs_…  → { status, sign } from the Blobs job (no Stripe call;
 *                          the page polls this every few seconds)
 * POST { sessionId }     → make sure the video is started: re-checks payment with
 *                          Stripe and starts an attempt if none is running or done
 *                          (covers a late or failed webhook). Idempotent.
 *
 * The Checkout session id (long, random, only in the buyer's success URL and
 * email) is the key to their video, like the reading's download page.
 */
export default async (req: Request, _context: Context) => {
  if (req.method === 'GET') {
    const sessionId = new URL(req.url).searchParams.get('session_id')
    if (!isCheckoutSessionId(sessionId)) return json({ error: 'Invalid session' }, 400)

    const job = await readJob(videoStore(), sessionId)
    if (!job) return json({ status: 'unknown' })
    // A run that died mid-way reads as failed, so the page can ask for a new attempt
    const stale = (job.status === 'pending' || job.status === 'generating') && !isJobWorking(job)
    return json({ status: stale ? 'failed' : job.status, sign: job.sign })
  }

  if (req.method === 'POST') {
    const body: unknown = await req.json().catch(() => null)
    const sessionId = body && typeof body === 'object' ? (body as Record<string, unknown>).sessionId : null
    if (!isCheckoutSessionId(sessionId)) return json({ error: 'Invalid session' }, 400)

    try {
      const status = await queueElementVideo(sessionId, new URL(req.url).origin)
      const job = await readJob(videoStore(), sessionId)
      return json({ status, sign: job?.sign })
    } catch (error) {
      console.error('element-video: start failed:', error instanceof Error ? error.message : error)
      return json({ error: 'Could not start the video' }, 502)
    }
  }

  return json({ error: 'Method not allowed' }, 405)
}

export const config = { path: '/api/element-video' }
