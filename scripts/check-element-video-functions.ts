// Local check of the "Step into your element" functions against a real (local)
// Netlify Blobs server. Costs nothing: no Genie call (GEMINI_API_KEY is cleared,
// so the background function takes its "key missing" path) and no Stripe call.
//
//   npx tsx scripts/check-element-video-functions.ts [path/to/sample.mp4]
//
// Covers: checkout refusals (flag off, no key, bad sign, daily cap), the
// background function's token guard and failure path (reservation refunded),
// status polling, and video serving (full file, byte ranges, HEAD, download).
// Not covered: Stripe payment (needs a valid test key) and a Genie run inside
// the handler (scripts/generate-sample-element-video.ts runs the same code).

import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { BlobsServer } from '@netlify/blobs/server'
import { setEnvironmentContext } from '@netlify/blobs'

const results: { name: string; ok: boolean; detail?: string }[] = []
function check(name: string, ok: boolean, detail?: string) {
  results.push({ name, ok, detail })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail && !ok ? `  (${detail})` : ''}`)
}

const samplePath = process.argv[2] ?? 'public/element-video/sample-fire-horse.mp4'
const sample = readFileSync(samplePath)
const dir = mkdtempSync(join(tmpdir(), 'element-video-blobs-'))
const token = 'local-check-token'
const server = new BlobsServer({ directory: dir, token })
const { port } = await server.start()
const url = `http://localhost:${port}`
setEnvironmentContext({ siteID: 'local-check', token, edgeURL: url, uncachedEdgeURL: url })

// Clean env for the checks
delete process.env.GEMINI_API_KEY
delete process.env.SUPPORT_EMAIL
delete process.env.ELEMENT_VIDEO_LIVE
delete process.env.ELEMENT_VIDEO_DAILY_USD_CAP

const { default: checkout } = await import('../netlify/functions/element-video-checkout')
const { default: status } = await import('../netlify/functions/element-video')
const { default: file } = await import('../netlify/functions/element-video-file')
const { default: background } = await import('../netlify/functions/element-video-background')
const store = await import('../src/lib/element-video/server/store')
const { claimAndReserve } = await import('../src/lib/element-video/server/fulfil')

const ctx = {} as never
const post = (path: string, body: unknown) =>
  new Request(`https://local.test${path}`, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } })

try {
  // --- Checkout refusals (none of these reach Stripe) ---
  let res = await checkout(post('/api/element-video-checkout', { sign: 'fire-horse' }), ctx)
  check('checkout refuses while not on sale (410)', res.status === 410, String(res.status))

  process.env.ELEMENT_VIDEO_LIVE = 'true'
  res = await checkout(post('/api/element-video-checkout', { sign: 'lava-unicorn' }), ctx)
  check('checkout rejects an unknown sign (400)', res.status === 400, String(res.status))

  res = await checkout(post('/api/element-video-checkout', { sign: 'fire-horse' }), ctx)
  check('checkout refuses without GEMINI_API_KEY (503)', res.status === 503, String(res.status))

  process.env.GEMINI_API_KEY = 'not-a-real-key'
  process.env.ELEMENT_VIDEO_DAILY_USD_CAP = '1' // below one video's reservation
  res = await checkout(post('/api/element-video-checkout', { sign: 'fire-horse' }), ctx)
  const capBody = (await res.json()) as { error?: string }
  check('checkout refuses when the day is full (503)', res.status === 503 && /tomorrow/.test(capBody.error ?? ''), String(res.status))
  delete process.env.ELEMENT_VIDEO_DAILY_USD_CAP
  delete process.env.GEMINI_API_KEY

  // --- Background function: token guard + failure path ---
  const blobs = store.videoStore()
  const failing = 'cs_test_localcheckFAILING0001'
  const claim = await claimAndReserve(blobs, { sessionId: failing, sign: 'water-dragon', email: 'buyer@example.com' })
  check('a paid order claims an attempt and reserves money', 'token' in claim)
  const reserved = await store.spentToday(blobs)
  check('reservation counted for today', Math.abs(reserved - store.RESERVE_PER_VIDEO_USD) < 1e-6, String(reserved))

  await background(post('/.netlify/functions/element-video-background', { sessionId: failing, token: 'made-up' }), ctx)
  let job = await store.readJob(blobs, failing)
  check('background ignores a made-up token', job?.status === 'pending', job?.status)

  await background(post('/.netlify/functions/element-video-background', { sessionId: failing, token: (claim as { token: string }).token }), ctx)
  job = await store.readJob(blobs, failing)
  check('without a Gemini key the attempt fails cleanly', job?.status === 'failed' && /GEMINI_API_KEY/.test(job.error ?? ''), JSON.stringify(job))
  check('...and its reservation is refunded', (await store.spentToday(blobs)) === 0, String(await store.spentToday(blobs)))

  res = await status(new Request(`https://local.test/api/element-video?session_id=${failing}`), ctx)
  let body = (await res.json()) as { status?: string; sign?: string }
  check('status endpoint reports failed + sign', body.status === 'failed' && body.sign === 'water-dragon', JSON.stringify(body))

  // --- A finished video: status + file serving ---
  const ready = 'cs_test_localcheckREADY000001'
  const t = await store.claimAttempt(blobs, ready, { sign: 'fire-horse' })
  await store.startJob(blobs, ready, t!)
  await blobs.set(store.videoKey(ready), new Blob([new Uint8Array(sample)]), { metadata: { sign: 'fire-horse' } })
  await store.finishJob(blobs, ready, t!, { status: 'ready', costUsd: 2.05 })

  res = await status(new Request(`https://local.test/api/element-video?session_id=${ready}`), ctx)
  body = (await res.json()) as { status?: string; sign?: string }
  check('status endpoint reports ready', body.status === 'ready' && body.sign === 'fire-horse', JSON.stringify(body))
  check('status is never cached', res.headers.get('cache-control') === 'no-store')

  res = await file(new Request(`https://local.test/api/element-video-file?session_id=${ready}`), ctx)
  const full = new Uint8Array(await res.arrayBuffer())
  check('file: 200 with the whole MP4', res.status === 200 && full.length === sample.length, `${res.status} ${full.length}`)
  check('file: video/mp4 + Accept-Ranges', res.headers.get('content-type') === 'video/mp4' && res.headers.get('accept-ranges') === 'bytes')

  res = await file(new Request(`https://local.test/api/element-video-file?session_id=${ready}`, { headers: { Range: 'bytes=0-1' } }), ctx)
  const part = new Uint8Array(await res.arrayBuffer())
  check(
    "file: 206 for Safari's bytes=0-1 probe",
    res.status === 206 && part.length === 2 && res.headers.get('content-range') === `bytes 0-1/${sample.length}`,
    `${res.status} ${res.headers.get('content-range')}`,
  )

  res = await file(new Request(`https://local.test/api/element-video-file?session_id=${ready}`, { headers: { Range: `bytes=${sample.length}-` } }), ctx)
  check('file: 416 for a range past the end', res.status === 416, String(res.status))

  res = await file(new Request(`https://local.test/api/element-video-file?session_id=${ready}&download=1`), ctx)
  check(
    'file: download=1 sends an attachment named after the sign',
    /^attachment; filename="wuxing-fire-horse-element-video.mp4"$/.test(res.headers.get('content-disposition') ?? ''),
    res.headers.get('content-disposition') ?? '',
  )

  res = await file(new Request(`https://local.test/api/element-video-file?session_id=cs_test_localcheckNOTHERE0001`), ctx)
  check('file: 404 for an order without a video', res.status === 404, String(res.status))
  res = await file(new Request('https://local.test/api/element-video-file?session_id=../../etc'), ctx)
  check('file: 400 for a malformed session id', res.status === 400, String(res.status))
} finally {
  await server.stop()
  rmSync(dir, { recursive: true, force: true })
}

const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
