<script setup lang="ts">
// After payment (Stripe success_url) and from the "ready" email:
// /element-video/ready?session_id=cs_…
// 1. POST /api/element-video once: makes sure the video is started (re-checks payment with Stripe)
// 2. Polls GET /api/element-video until it is ready, then plays it with Download / Share
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { usePageSeo } from '@/composables/useSignSeo'
import { useAnalytics } from '@/composables/useAnalytics'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import { READING_PATH, READING_PRICE } from '@/lib/reading-offer'
import {
  isCheckoutSessionId,
  ELEMENT_VIDEO_PATH,
  type ElementVideoStatus,
  type ElementVideoStatusResponse,
} from '@/lib/element-video/offer'

usePageSeo('Your Element Video', 'Your Step into your element video from Wu Xing Zodiac.', '/element-video/ready')
// Private post-purchase page (also left out of the sitemap in vite.config.ts)
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })

const { trackEvent } = useAnalytics()
const route = useRoute()

type PageState = 'checking' | 'making' | 'slow' | 'ready' | 'capped' | 'failed' | 'invalid'

const state = ref<PageState>('checking')
const signSlug = ref('')
const progress = ref(0)
const shareNote = ref('')
const canShareFile = ref(false)

const sessionId = computed(() => (typeof route.query.session_id === 'string' ? route.query.session_id : ''))
const signName = computed(() => getProfileBySlug(signSlug.value)?.name ?? 'your sign')
const videoUrl = computed(() => `/api/element-video-file?session_id=${encodeURIComponent(sessionId.value)}`)
const downloadUrl = computed(() => `${videoUrl.value}&download=1`)
const supportMailto = computed(
  () => `mailto:marc@dizid.com?subject=${encodeURIComponent(`Element video, session ${sessionId.value}`)}`,
)

// Payment can take a moment to confirm; Genie + encoding take ~1 minute
const POLL_MS = 3000
const UNPAID_RECHECK_MS = 6000
const MAX_UNCONFIRMED_MS = 3 * 60 * 1000
const EXPECTED_MAKE_MS = 70 * 1000
const MAX_MAKE_MS = 8 * 60 * 1000

let timer: ReturnType<typeof setTimeout> | undefined
let progressTimer: ReturnType<typeof setInterval> | undefined
let startedAt = 0
let makingSince = 0
let retriedFailed = false
let networkErrors = 0

function schedule(fn: () => void, ms: number) {
  clearTimeout(timer)
  timer = setTimeout(fn, ms)
}

async function call(method: 'GET' | 'POST'): Promise<ElementVideoStatusResponse | null> {
  try {
    const res =
      method === 'GET'
        ? await fetch(`/api/element-video?session_id=${encodeURIComponent(sessionId.value)}`, { cache: 'no-store' })
        : await fetch('/api/element-video', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: sessionId.value }),
          })
    if (!res.ok) return null
    networkErrors = 0
    return (await res.json()) as ElementVideoStatusResponse
  } catch {
    return null
  }
}

function startProgress() {
  if (progressTimer) return
  makingSince = Date.now()
  progressTimer = setInterval(() => {
    // Eases toward 95% over the usual making time; the real "ready" jumps to 100
    const elapsed = Date.now() - makingSince
    progress.value = Math.min(95, Math.round((1 - Math.exp(-elapsed / (EXPECTED_MAKE_MS / 2))) * 100))
  }, 500)
}

function apply(status: ElementVideoStatus, viaPost: boolean) {
  switch (status) {
    case 'ready':
      progress.value = 100
      clearInterval(progressTimer)
      state.value = 'ready'
      trackEvent('element_video_ready_view', { sign: signSlug.value })
      return
    case 'pending':
    case 'generating':
      startProgress()
      if (Date.now() - makingSince > MAX_MAKE_MS) {
        state.value = 'slow'
        return
      }
      state.value = 'making'
      schedule(() => void poll(), POLL_MS)
      return
    case 'capped':
      state.value = 'capped'
      return
    case 'failed':
      // One fresh attempt if the server still allows it (it decides; at most 2 per order)
      if (!retriedFailed) {
        retriedFailed = true
        schedule(() => void start(), 1000)
        return
      }
      state.value = 'failed'
      return
    case 'unknown':
      // Payment not confirmed yet (or Stripe still settling): ask again via POST for a while
      if (Date.now() - startedAt > MAX_UNCONFIRMED_MS) {
        state.value = 'slow'
        return
      }
      state.value = 'checking'
      schedule(() => void (viaPost ? start() : poll()), UNPAID_RECHECK_MS)
      return
  }
}

async function handle(result: ElementVideoStatusResponse | null, viaPost: boolean, retry: () => void) {
  if (!result) {
    // Server hiccup or offline for a moment: keep trying a few times
    networkErrors++
    if (networkErrors <= 5) {
      schedule(retry, POLL_MS * 2)
      return
    }
    state.value = 'slow'
    return
  }
  if (result.sign) signSlug.value = result.sign
  apply(result.status, viaPost)
}

async function start() {
  await handle(await call('POST'), true, () => void start())
}

async function poll() {
  await handle(await call('GET'), false, () => void poll())
}

async function shareVideo() {
  shareNote.value = ''
  try {
    const res = await fetch(videoUrl.value)
    const blob = await res.blob()
    const file = new File([blob], `wuxing-${signSlug.value || 'element'}-video.mp4`, { type: 'video/mp4' })
    await navigator.share({ files: [file], title: `My ${signName.value} world`, text: 'wuxingzodiac.me' })
    trackEvent('element_video_share', { sign: signSlug.value })
  } catch (error) {
    // AbortError = the person closed the share sheet; nothing to say
    if (error instanceof DOMException && error.name === 'AbortError') return
    shareNote.value = 'Sharing did not work here. Use Download instead.'
  }
}

onMounted(() => {
  if (!isCheckoutSessionId(sessionId.value)) {
    state.value = 'invalid'
    return
  }
  // File sharing exists on most phones (not on most desktops)
  const probe = new File([new Uint8Array(1)], 'probe.mp4', { type: 'video/mp4' })
  canShareFile.value = typeof navigator.canShare === 'function' && navigator.canShare({ files: [probe] })
  startedAt = Date.now()
  void start()
})

onBeforeUnmount(() => {
  clearTimeout(timer)
  clearInterval(progressTimer)
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-16">
    <div class="glass rounded-2xl p-6 md:p-10 max-w-2xl w-full text-center">
      <!-- Confirming payment -->
      <template v-if="state === 'checking'">
        <div class="text-4xl mb-6 animate-pulse" aria-hidden="true">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">Confirming your payment…</h1>
        <p class="text-ash-400">This usually takes a few seconds.</p>
      </template>

      <!-- Making -->
      <template v-else-if="state === 'making'">
        <div class="text-4xl mb-6 animate-pulse" aria-hidden="true">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Painting your {{ signName }} world…
        </h1>
        <p class="text-ash-300 mb-6">
          This takes about a minute. You can close this page: we email you the link when it's ready.
        </p>
        <div
          class="w-full bg-ash-800 rounded-full h-2 overflow-hidden"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Making your video"
        >
          <div
            class="h-full bg-gradient-to-r from-ash-500 to-ash-300 rounded-full transition-all duration-500"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </template>

      <!-- Ready -->
      <template v-else-if="state === 'ready'">
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-5">Your {{ signName }} world</h1>
        <video
          class="w-full rounded-xl border border-ash-800 bg-black aspect-video mb-5"
          :src="videoUrl"
          controls
          playsinline
          autoplay
          muted
          preload="auto"
        ></video>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a :href="downloadUrl" class="btn-element text-lg py-3 px-6" @click="trackEvent('element_video_download', { sign: signSlug })">
            Download video
          </a>
          <button v-if="canShareFile" type="button" class="btn-element text-lg py-3 px-6" @click="shareVideo">
            Share
          </button>
        </div>
        <p v-if="shareNote" class="text-ash-400 text-sm mt-3" role="status">{{ shareNote }}</p>
        <p class="text-ash-500 text-sm mt-4">Tap the video for sound. Download it to keep your own copy.</p>
        <p class="text-ash-400 mt-8">
          Want the words too?
          <RouterLink :to="READING_PATH" class="underline text-ash-200">Your personal reading</RouterLink>
          ({{ READING_PRICE }}) is written for your {{ signName }} sign.
        </p>
      </template>

      <!-- Daily budget ran out just after payment -->
      <template v-else-if="state === 'capped'">
        <div class="text-4xl mb-6" aria-hidden="true">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">Your video is next in line</h1>
        <p class="text-ash-300 mb-3">
          Your payment went through, but today's videos are all made. Keep this page: open it again after
          midnight UTC and your {{ signName }} video is made straight away.
        </p>
        <p class="text-ash-500 text-sm">
          We've been notified. Questions?
          <a :href="supportMailto" class="underline">marc@dizid.com</a>
        </p>
      </template>

      <!-- Taking longer than expected -->
      <template v-else-if="state === 'slow'">
        <div class="text-4xl mb-6" aria-hidden="true">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">This is taking longer than usual</h1>
        <p class="text-ash-300 mb-3">
          You can close this page. When your video is ready we email you the link, or open this page again later.
        </p>
        <p class="text-ash-500 text-sm">
          Not there within an hour? Email <a :href="supportMailto" class="underline">marc@dizid.com</a>.
        </p>
      </template>

      <!-- Failed after the retries -->
      <template v-else-if="state === 'failed'">
        <div class="text-4xl mb-6" aria-hidden="true">&#9888;&#65039;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">We hit a problem making your video</h1>
        <p class="text-ash-300 mb-3">
          We've been notified and will make it or refund you. No need to order again.
        </p>
        <p class="text-ash-500 text-sm">
          Questions? <a :href="supportMailto" class="underline">marc@dizid.com</a>
        </p>
      </template>

      <!-- No or broken session id -->
      <template v-else>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">Video not found</h1>
        <p class="text-ash-300 mb-6">This link is missing its order code. Use the link from your email.</p>
        <RouterLink :to="ELEMENT_VIDEO_PATH" class="underline text-ash-200">Step into your element</RouterLink>
      </template>
    </div>
  </div>
</template>
