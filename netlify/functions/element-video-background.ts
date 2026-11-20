import type { Context } from '@netlify/functions'
import { isCheckoutSessionId, ELEMENT_VIDEO_READY_PATH } from '../../src/lib/element-video/offer'
import { getProfileBySlug } from '../../src/lib/sign-content/profiles'
import { makeElementVideo } from '../../src/lib/element-video/server/make-video'
import { sendElementVideoEmail } from '../../src/lib/element-video/server/email'
import { claimAndReserve } from '../../src/lib/element-video/server/fulfil'
import { sendOwnerAlert } from '../../src/lib/readings/server/email'
import {
  videoStore,
  videoKey,
  startJob,
  finishJob,
  adjustSpend,
  MAX_ATTEMPTS,
  RESERVE_PER_VIDEO_USD,
} from '../../src/lib/element-video/server/store'

// Pause before a second attempt (transient Genie/network trouble usually clears)
const RETRY_DELAY_MS = 20_000

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Background function (responds 202 at once, 15-minute limit): makes the
 * "Step into your element" video for one paid order and stores the MP4 in Blobs.
 *
 * Started only by fulfil.ts (Stripe webhook or the ready page) with
 * { sessionId, token }. The URL is public, so it trusts nothing else: the job
 * must be "pending" with the same secret token, which fulfil.ts only creates
 * after Stripe confirmed payment and today's dollar cap had room. A direct
 * call with a made-up token exits before any Genie spend.
 *
 * A failed attempt is retried once in-process (Netlify doesn't reliably retry
 * background functions); after the last one the owner (SUPPORT_EMAIL) is alerted.
 */
export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') return

  const body: unknown = await req.json().catch(() => null)
  const fields = body && typeof body === 'object' ? (body as Record<string, unknown>) : {}
  const sessionId = fields.sessionId
  const firstToken = fields.token
  if (!isCheckoutSessionId(sessionId) || typeof firstToken !== 'string' || firstToken.length > 64) return
  // Each attempt has its own token (a retry claims a new one)
  let token: string = firstToken

  const store = videoStore()
  const siteUrl = process.env.SITE_URL || 'https://wuxingzodiac.me'

  for (;;) {
    const job = await startJob(store, sessionId, token)
    if (!job) return
    const profile = getProfileBySlug(job.sign)
    const apiKey = process.env.GEMINI_API_KEY

    try {
      if (!profile) throw new Error(`unknown sign ${job.sign}`)
      if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

      const video = await makeElementVideo(job.sign, apiKey)
      await store.set(videoKey(sessionId), new Blob([new Uint8Array(video.mp4)], { type: 'video/mp4' }), {
        metadata: { sign: job.sign, createdAt: new Date().toISOString(), costUsd: video.costUsd },
      })
      await finishJob(store, sessionId, token, { status: 'ready', costUsd: video.costUsd })
      // Settle the reservation to what Genie really billed
      await adjustSpend(store, video.costUsd - RESERVE_PER_VIDEO_USD, job.day)

      if (job.email) {
        const pageUrl = `${siteUrl}${ELEMENT_VIDEO_READY_PATH}?session_id=${encodeURIComponent(sessionId)}`
        await sendElementVideoEmail(job.email, profile.name, pageUrl).catch((error: unknown) => {
          // The video is on the page already; a lost email isn't worth failing the order
          console.error('element-video: ready email failed:', error instanceof Error ? error.message : error)
        })
      }
      return
    } catch (error) {
      const reason = error instanceof Error ? error.message.slice(0, 300) : 'unknown error'
      console.error(`element-video-background: attempt ${job.attempts} failed for ${sessionId}: ${reason}`)
      // Nothing billed when the key is missing; otherwise the reservation stays
      // counted (a failed session may still have been billed for its frames)
      if (!apiKey) await adjustSpend(store, -RESERVE_PER_VIDEO_USD, job.day)
      await finishJob(store, sessionId, token, { status: 'failed', error: reason })

      if (job.attempts < MAX_ATTEMPTS && apiKey && profile) {
        await sleep(RETRY_DELAY_MS)
        const next = await claimAndReserve(store, { sessionId, sign: job.sign, email: job.email })
        if ('token' in next) {
          token = next.token
          continue
        }
        return // capped (owner alerted) or another request took over
      }

      await sendOwnerAlert(
        'Element video failed',
        [
          `A paid "Step into your element" video failed after ${job.attempts} attempt(s).`,
          `Session: ${sessionId}`,
          `Sign: ${job.sign}`,
          `Customer email: ${job.email ?? '(unknown)'}`,
          `Last error: ${reason}`,
          '',
          'Fix the cause, then refund in Stripe or make it by hand:',
          `  GEMINI_API_KEY=... npx tsx scripts/generate-sample-element-video.ts --sign ${job.sign} --yes`,
        ].join('\n'),
      )
      return
    }
  }
}
