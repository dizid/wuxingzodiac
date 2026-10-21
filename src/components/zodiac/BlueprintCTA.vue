<script setup lang="ts">
// Upsell card for the personalized PDF reading. The button reveals the
// intake form (name, birth date, email, gift) which then starts checkout.
import { ref } from 'vue'
import type { SignProfile } from '@/types'
import { useAnalytics } from '@/composables/useAnalytics'
import ReadingIntakeForm from '@/components/readings/ReadingIntakeForm.vue'

const props = defineProps<{
  profile: SignProfile
}>()

const { trackEvent } = useAnalytics()

const showForm = ref(false)

function openForm() {
  showForm.value = true
  trackEvent('reading_form_open', {
    slug: props.profile.slug,
    element: props.profile.element,
    animal: props.profile.animal,
  })
}

// Keep claims honest: the reading uses the birth-year sign + five elements + name
// (day/month only set the Lunar New Year cutoff) — no birth chart, BaZi or Four Pillars.
const features = [
  'Written for you by name',
  'Your element balance & core personality',
  'Strengths, blind spots, love, career & money',
  'Your 2026 Fire Horse outlook',
  '5 personal action steps',
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
        Your Personal Reading
      </h3>
    </div>

    <!-- Description -->
    <p class="text-ash-300 mb-5">
      A 6&ndash;8 page PDF reading based on your birth-year sign and the five elements &mdash;
      more depth than the free <span class="element-text font-semibold">{{ profile.name }}</span> profile.
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

    <!-- Intake form (revealed on click) -->
    <ReadingIntakeForm v-if="showForm" reading-type="personal" />

    <!-- CTA Button -->
    <button
      v-else
      class="btn-element w-full text-center text-lg py-3"
      @click="openForm"
    >
      Get Your Personal Reading &mdash; $9.90
    </button>

    <!-- Trust signals -->
    <p class="text-ash-600 text-xs text-center mt-4">
      Secure payment via Stripe &middot; Emailed to you in about 2 minutes &middot; Gift option
    </p>
  </div>
</template>
