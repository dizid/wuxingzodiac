<script setup lang="ts">
import { ref } from 'vue'
import type { SignProfile } from '@/types'
import { useAnalytics } from '@/composables/useAnalytics'

const props = defineProps<{
  profile: SignProfile
}>()

const { trackEvent } = useAnalytics()

const loading = ref(false)
const error = ref('')

async function handlePurchase() {
  if (loading.value) return

  loading.value = true
  error.value = ''

  trackEvent('blueprint_purchase_click', {
    slug: props.profile.slug,
    element: props.profile.element,
    animal: props.profile.animal,
  })

  try {
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: props.profile.slug }),
    })

    if (!res.ok) {
      throw new Error('Failed to create checkout session')
    }

    const data = await res.json()
    window.location.href = data.url
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong. Please try again.'
    loading.value = false
  }
}

const features = [
  'Deep personality analysis beyond the free profile',
  'Life path & destiny insights',
  'Complete relationship blueprint',
  'Career & wealth roadmap',
  'Personalized 2026 forecast',
]
</script>

<template>
  <div class="glass element-glow rounded-2xl p-6 md:p-8">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-4">
      <svg class="w-8 h-8 shrink-0" style="color: var(--el-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
      <h3 class="element-text font-display text-xl md:text-2xl font-bold">
        Your Elemental Blueprint
      </h3>
    </div>

    <!-- Description -->
    <p class="text-ash-300 mb-5">
      A premium 15-page PDF report crafted exclusively for <span class="element-text font-semibold">{{ profile.name }}</span> signs.
    </p>

    <!-- Features list -->
    <ul class="space-y-3 mb-6">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-start gap-3"
      >
        <svg class="w-5 h-5 mt-0.5 shrink-0" style="color: var(--el-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span class="text-ash-200 text-sm">{{ feature }}</span>
      </li>
    </ul>

    <!-- CTA Button -->
    <button
      class="btn-element w-full text-center text-lg py-3"
      :disabled="loading"
      @click="handlePurchase"
    >
      <span v-if="loading">Redirecting to checkout...</span>
      <span v-else>Get Your Blueprint &mdash; $9.90</span>
    </button>

    <!-- Error state -->
    <p v-if="error" class="text-red-400 text-sm mt-3 text-center">
      {{ error }}
    </p>

    <!-- Trust signals -->
    <p class="text-ash-600 text-xs text-center mt-4">
      Secure payment via Stripe &middot; Instant PDF download &middot; 30-day access
    </p>
  </div>
</template>
