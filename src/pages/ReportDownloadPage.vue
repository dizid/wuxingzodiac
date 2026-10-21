<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { usePageSeo } from '@/composables/useSignSeo'
import { useAnalytics } from '@/composables/useAnalytics'

usePageSeo(
  'Download Your Reading',
  'Download your personalized Wu Xing Zodiac PDF reading.',
  '/report/download',
)

// Private post-purchase page: keep it out of search results (also excluded from the sitemap in vite.config.ts)
useHead({
  meta: [{ name: 'robots', content: 'noindex' }],
})

const { trackEvent } = useAnalytics()
const route = useRoute()

type PageState = 'loading' | 'race-condition' | 'generating' | 'delivered' | 'ready' | 'downloading' | 'error'

const state = ref<PageState>('loading')
const errorMessage = ref('')
const downloadUrl = ref('')
const signName = ref('')
const productName = ref('Elemental Blueprint')
const maskedEmail = ref('')
const retryCount = ref(0)
const MAX_RETRIES = 3

// Personalized readings take ~1–3 minutes to write, then they're emailed
const GENERATING_POLL_MS = 4000
const MAX_GENERATING_MS = 10 * 60 * 1000
let generatingSince = 0
let pollTimer: ReturnType<typeof setTimeout> | undefined
// Stop polling after MAX_GENERATING_MS — the email still arrives when ready
const slowGeneration = ref(false)

// "Blueprint" for legacy static reports, "Reading" for personalized ones
const productShort = computed(() => (productName.value === 'Elemental Blueprint' ? 'Blueprint' : 'Reading'))
const inbox = computed(() => maskedEmail.value || 'your email')

// session_id: personalized readings (Stripe success_url); session: legacy Blueprint links
function getSessionId(): string {
  const raw = route.query.session_id ?? route.query.session
  return typeof raw === 'string' ? raw : ''
}

function schedule(fn: () => void, ms: number) {
  clearTimeout(pollTimer)
  pollTimer = setTimeout(fn, ms)
}

async function checkOrderStatus() {
  const sessionId = getSessionId()
  if (!sessionId) {
    state.value = 'error'
    errorMessage.value = 'No session ID provided. Please check your email for the download link.'
    return
  }

  try {
    // Step 1: Check order status (returns JSON, doesn't trigger download)
    const res = await fetch(`/api/download-report?session_id=${encodeURIComponent(sessionId)}&action=check`)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))

      // Handle race condition: payment confirmed but webhook not yet processed
      if (res.status === 404 && retryCount.value < MAX_RETRIES) {
        state.value = 'race-condition'
        retryCount.value++
        schedule(checkOrderStatus, 3000)
        return
      }

      throw new Error(data.error || 'Failed to retrieve your report')
    }

    const data = await res.json()
    signName.value = data.signName || 'Your Sign'
    productName.value = data.productName || 'Elemental Blueprint'
    maskedEmail.value = data.email || ''

    // Personalized reading still being written — keep polling until it's emailed
    if (data.status === 'generating') {
      if (!generatingSince) generatingSince = Date.now()
      state.value = 'generating'
      if (Date.now() - generatingSince > MAX_GENERATING_MS) {
        slowGeneration.value = true
        return
      }
      schedule(checkOrderStatus, GENERATING_POLL_MS)
      return
    }

    if (data.status === 'delivered') {
      state.value = 'delivered'
      trackEvent('reading_delivered_view', { session: sessionId, sign: signName.value })
      return
    }

    if (data.status === 'failed') {
      // The owner gets an alert email for every failed paid reading
      throw new Error("We hit a problem writing your reading. We've been notified and will email it to you as soon as it's fixed — no need to order again.")
    }

    // Store the download URL for the actual PDF fetch
    downloadUrl.value = `/api/download-report?session_id=${encodeURIComponent(sessionId)}`
    state.value = 'ready'

    trackEvent('blueprint_download_ready', { session: sessionId, product: productName.value })
  } catch (e) {
    state.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : 'Something went wrong. Please try again.'
  }
}

async function handleDownload() {
  state.value = 'downloading'

  trackEvent('blueprint_download_start', { signName: signName.value, product: productName.value })

  try {
    // Step 2: Fetch actual PDF bytes and trigger browser download
    const res = await fetch(downloadUrl.value)
    if (!res.ok) throw new Error('Download failed')

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `elemental-blueprint-${signName.value.toLowerCase().replace(/\s+/g, '-')}.pdf`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    state.value = 'ready'
    trackEvent('blueprint_download_complete', { signName: signName.value, product: productName.value })
  } catch (e) {
    state.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : 'Download failed. Please try again.'
  }
}

function handleRetry() {
  state.value = 'loading'
  retryCount.value = 0
  generatingSince = 0
  slowGeneration.value = false
  errorMessage.value = ''
  checkOrderStatus()
}

onMounted(() => {
  checkOrderStatus()
})

onBeforeUnmount(() => {
  clearTimeout(pollTimer)
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-20">
    <div class="glass rounded-2xl p-8 md:p-12 max-w-lg w-full text-center">

      <!-- Loading state -->
      <template v-if="state === 'loading'">
        <div class="text-4xl mb-6">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Preparing Your Report...
        </h1>
        <p class="text-ash-400 mb-6">Verifying your purchase.</p>
        <div class="w-full bg-ash-800 rounded-full h-2 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-ash-500 to-ash-300 rounded-full animate-pulse" style="width: 60%"></div>
        </div>
      </template>

      <!-- Race condition: webhook delay -->
      <template v-else-if="state === 'race-condition'">
        <div class="text-4xl mb-6">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Your payment is being confirmed...
        </h1>
        <p class="text-ash-400 mb-6">
          This usually takes just a few seconds. Checking again automatically...
        </p>
        <div class="w-full bg-ash-800 rounded-full h-2 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-ash-500 to-ash-300 rounded-full animate-pulse" style="width: 80%"></div>
        </div>
        <p class="text-ash-600 text-sm mt-4">Attempt {{ retryCount }} of {{ MAX_RETRIES }}</p>
      </template>

      <!-- Generating: personalized reading is being written, then emailed -->
      <template v-else-if="state === 'generating'">
        <div class="text-4xl mb-6 animate-pulse">&#9775;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Writing Your Reading...
        </h1>
        <p class="text-ash-300 mb-2">
          We're writing your <span class="font-semibold text-ash-100">{{ signName }}</span> reading and designing the PDF.
          It will be emailed to <span class="font-semibold text-ash-100">{{ inbox }}</span>.
        </p>
        <p v-if="slowGeneration" class="text-ash-400 mb-6">
          This is taking longer than usual. You can close this page &mdash; your reading will arrive by email as soon as it's ready.
        </p>
        <p v-else class="text-ash-400 mb-6">This usually takes 1&ndash;3 minutes. You can close this page &mdash; it arrives by email either way.</p>
        <div class="w-full bg-ash-800 rounded-full h-2 overflow-hidden">
          <div class="h-full bg-gradient-to-r from-ash-500 to-ash-300 rounded-full animate-pulse" style="width: 70%"></div>
        </div>
      </template>

      <!-- Delivered: the PDF was emailed (nothing is stored to download) -->
      <template v-else-if="state === 'delivered'">
        <div class="text-5xl mb-6">&#128236;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Your Reading Is in Your Inbox
        </h1>
        <p class="text-ash-300 mb-4">
          We've emailed your {{ productName }} (<span class="font-semibold text-ash-100">{{ signName }}</span>)
          to <span class="font-semibold text-ash-100">{{ inbox }}</span> as a PDF.
        </p>
        <p class="text-ash-500 text-sm">
          Not there in a minute? Check your spam or promotions folder. Keep the email &mdash; it's your only copy.
        </p>
      </template>

      <!-- Ready / downloading -->
      <template v-else-if="state === 'ready' || state === 'downloading'">
        <div class="text-5xl mb-6">&#128220;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Your {{ productShort }} is Ready
        </h1>
        <p class="text-ash-300 mb-8">
          Your personalized {{ productName }} for <span class="font-semibold text-ash-100">{{ signName }}</span> is ready to download.
        </p>
        <button
          v-if="state === 'ready'"
          class="btn-element w-full text-lg py-3"
          @click="handleDownload"
        >
          Download PDF
        </button>
        <button v-else class="btn-element w-full text-lg py-3 opacity-75 cursor-wait" disabled>
          Downloading...
        </button>
        <p class="text-ash-600 text-xs mt-4">
          Your download link is valid for 30 days.
        </p>
      </template>

      <!-- Error state -->
      <template v-else-if="state === 'error'">
        <div class="text-5xl mb-6">&#9888;&#65039;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Something Went Wrong
        </h1>
        <p class="text-red-400 mb-8 break-words">{{ errorMessage }}</p>
        <button
          class="btn-element w-full text-lg py-3"
          @click="handleRetry"
        >
          Try Again
        </button>
        <p class="text-ash-500 text-sm mt-4">
          If the problem persists, please contact support with your session ID.
        </p>
      </template>

    </div>
  </div>
</template>
