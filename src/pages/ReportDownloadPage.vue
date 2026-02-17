<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePageSeo } from '@/composables/useSignSeo'
import { useAnalytics } from '@/composables/useAnalytics'

usePageSeo(
  'Download Your Elemental Blueprint',
  'Download your personalized Elemental Blueprint PDF report.',
  '/report/download',
)

const { trackEvent } = useAnalytics()
const route = useRoute()

type PageState = 'loading' | 'race-condition' | 'ready' | 'downloading' | 'error'

const state = ref<PageState>('loading')
const errorMessage = ref('')
const downloadUrl = ref('')
const signName = ref('')
const retryCount = ref(0)
const MAX_RETRIES = 3

async function checkOrderStatus() {
  const sessionId = route.query.session as string
  if (!sessionId) {
    state.value = 'error'
    errorMessage.value = 'No session ID provided. Please check your email for the download link.'
    return
  }

  try {
    const res = await fetch(`/api/download-report?session=${encodeURIComponent(sessionId)}`)

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))

      // Handle race condition: payment confirmed but webhook not yet processed
      if (res.status === 404 && retryCount.value < MAX_RETRIES) {
        state.value = 'race-condition'
        retryCount.value++
        setTimeout(checkOrderStatus, 3000)
        return
      }

      throw new Error(data.error || 'Failed to retrieve your report')
    }

    const data = await res.json()
    downloadUrl.value = data.url
    signName.value = data.signName || 'Your Sign'
    state.value = 'ready'

    trackEvent('blueprint_download_ready', { session: sessionId })
  } catch (e) {
    state.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : 'Something went wrong. Please try again.'
  }
}

async function handleDownload() {
  state.value = 'downloading'

  trackEvent('blueprint_download_start', { url: downloadUrl.value })

  try {
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
    trackEvent('blueprint_download_complete', { signName: signName.value })
  } catch (e) {
    state.value = 'error'
    errorMessage.value = e instanceof Error ? e.message : 'Download failed. Please try again.'
  }
}

function handleRetry() {
  state.value = 'loading'
  retryCount.value = 0
  errorMessage.value = ''
  checkOrderStatus()
}

onMounted(() => {
  checkOrderStatus()
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
        <p class="text-ash-400 mb-6">Verifying your purchase and generating your blueprint.</p>
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

      <!-- Ready state -->
      <template v-else-if="state === 'ready'">
        <div class="text-5xl mb-6">&#128220;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Your Blueprint is Ready
        </h1>
        <p class="text-ash-300 mb-8">
          Your personalized Elemental Blueprint for <span class="font-semibold text-ash-100">{{ signName }}</span> is ready to download.
        </p>
        <button
          class="btn-element w-full text-lg py-3"
          @click="handleDownload"
        >
          Download PDF
        </button>
        <p class="text-ash-600 text-xs mt-4">
          Your download link is valid for 30 days.
        </p>
      </template>

      <!-- Downloading state -->
      <template v-else-if="state === 'downloading'">
        <div class="text-5xl mb-6">&#128220;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Your Blueprint is Ready
        </h1>
        <p class="text-ash-300 mb-8">
          Your personalized Elemental Blueprint for <span class="font-semibold text-ash-100">{{ signName }}</span> is ready to download.
        </p>
        <button class="btn-element w-full text-lg py-3 opacity-75 cursor-wait" disabled>
          Downloading...
        </button>
      </template>

      <!-- Error state -->
      <template v-else-if="state === 'error'">
        <div class="text-5xl mb-6">&#9888;&#65039;</div>
        <h1 class="font-display text-2xl md:text-3xl font-bold text-ash-100 mb-4">
          Something Went Wrong
        </h1>
        <p class="text-red-400 mb-8">{{ errorMessage }}</p>
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
