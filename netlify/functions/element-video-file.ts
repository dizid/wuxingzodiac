import type { Context } from '@netlify/functions'
import { isCheckoutSessionId } from '../../src/lib/element-video/offer'
import { videoStore, videoKey } from '../../src/lib/element-video/server/store'
import { parseRange } from '../../src/lib/element-video/server/range'

/**
 * The finished MP4 for one order: /api/element-video-file?session_id=cs_…[&download=1]
 * Supports byte ranges (iPhone Safari won't play a video without them).
 * download=1 sends it as a file named after the sign.
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405 })
  }
  const url = new URL(req.url)
  const sessionId = url.searchParams.get('session_id')
  if (!isCheckoutSessionId(sessionId)) return new Response('Invalid session', { status: 400 })

  const entry = await videoStore().getWithMetadata(videoKey(sessionId), { type: 'arrayBuffer' })
  if (!entry) return new Response('Not found', { status: 404 })

  const bytes = new Uint8Array(entry.data)
  const sign = typeof entry.metadata?.sign === 'string' ? entry.metadata.sign : 'element'
  const disposition = url.searchParams.get('download') === '1' ? 'attachment' : 'inline'
  const headers: Record<string, string> = {
    'Content-Type': 'video/mp4',
    'Accept-Ranges': 'bytes',
    // Private: the URL is the buyer's key; never cache on shared proxies
    'Cache-Control': 'private, max-age=86400',
    'Content-Disposition': `${disposition}; filename="wuxing-${sign}-element-video.mp4"`,
  }

  const range = parseRange(req.headers.get('range'), bytes.length)
  if (range === 'invalid') {
    return new Response(null, { status: 416, headers: { ...headers, 'Content-Range': `bytes */${bytes.length}` } })
  }
  if (range) {
    const chunk = bytes.subarray(range.start, range.end + 1)
    return new Response(req.method === 'HEAD' ? null : chunk, {
      status: 206,
      headers: {
        ...headers,
        'Content-Range': `bytes ${range.start}-${range.end}/${bytes.length}`,
        'Content-Length': String(chunk.length),
      },
    })
  }
  return new Response(req.method === 'HEAD' ? null : bytes, {
    status: 200,
    headers: { ...headers, 'Content-Length': String(bytes.length) },
  })
}

export const config = { path: '/api/element-video-file' }
