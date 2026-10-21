<script setup lang="ts">
// Call to action for the WuXing Personal Reading. Every variant links to the
// one landing page (/reading), which handles waitlist vs. checkout.
// Copy rules: honest facts only. No urgency or scarcity, and no birth-chart,
// BaZi, expert or master claims.
import { RouterLink } from 'vue-router'
import { useAnalytics } from '@/composables/useAnalytics'
import { READING_PATH, READING_PRICE, READING_PAGE_COUNT } from '@/lib/reading-offer'

const props = withDefaults(defineProps<{
  /** Where the CTA sits, sent with the reading_cta_click event (e.g. 'sign_end') */
  placement: string
  /** full = card with details, compact = one-line banner, button = single hero button */
  variant?: 'full' | 'compact' | 'button'
  /** Sign the visitor is looking at, e.g. 'Fire Horse' (full variant only) */
  signName?: string
  /** Optional plain-text line under the full card (never a button) */
  note?: string
}>(), {
  variant: 'full',
})

const { trackReadingCtaClick } = useAnalytics()

function onClick() {
  trackReadingCtaClick(props.placement)
}

// Matches the sections of the reading PDF
const highlights = [
  'Your five elements and core personality',
  'Strengths, blind spots, love, career and money',
  'Your 2026 Fire Horse year and 5 next steps',
]
</script>

<template>
  <!-- Hero button -->
  <RouterLink
    v-if="variant === 'button'"
    :to="READING_PATH"
    class="text-lg px-8 py-3 border border-ash-500 text-ash-200 hover:border-ash-300 hover:text-ash-100 rounded-lg transition-all"
    @click="onClick"
  >
    Your Personal Reading
  </RouterLink>

  <!-- Compact one-line banner -->
  <aside
    v-else-if="variant === 'compact'"
    class="glass rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
    aria-label="Personal reading"
  >
    <p class="text-ash-300 text-sm md:text-base">
      <span class="element-text font-semibold">Your personal WuXing reading:</span>
      {{ READING_PAGE_COUNT }} pages written for you. {{ READING_PRICE }}
    </p>
    <RouterLink
      :to="READING_PATH"
      class="shrink-0 inline-flex items-center justify-center rounded-full border border-ash-600 px-5 py-2 text-sm font-medium text-ash-200 transition-colors duration-200 hover:border-ash-400 hover:text-ash-100"
      @click="onClick"
    >
      See the reading &rarr;
    </RouterLink>
  </aside>

  <!-- Full card -->
  <section v-else class="glass element-glow rounded-2xl p-6 md:p-8">
    <p class="text-ash-400 text-xs font-semibold uppercase tracking-widest mb-2">
      WuXing Personal Reading
    </p>
    <h2 class="element-text font-display text-2xl md:text-3xl font-bold mb-3">
      {{ READING_PAGE_COUNT }} pages written for you
    </h2>
    <p class="text-ash-300 mb-5">
      A personalized PDF based on your birth-year sign and the five elements, written to you by name
      and delivered by email.
      <template v-if="signName">More depth than the free {{ signName }} profile.</template>
    </p>

    <ul class="space-y-2 mb-6">
      <li
        v-for="highlight in highlights"
        :key="highlight"
        class="flex items-start gap-3"
      >
        <svg class="w-5 h-5 mt-0.5 shrink-0" style="color: var(--el-accent)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span class="text-ash-200 text-sm">{{ highlight }}</span>
      </li>
    </ul>

    <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
      <RouterLink
        :to="READING_PATH"
        class="btn-element text-center px-6 py-3"
        @click="onClick"
      >
        See what&rsquo;s inside
      </RouterLink>
      <p class="text-ash-200 text-center sm:text-left">
        <span class="font-semibold">{{ READING_PRICE }}</span>
        <span class="text-ash-400 text-sm"> &middot; one-time</span>
      </p>
    </div>

    <p v-if="note" class="text-ash-400 text-sm mt-5">{{ note }}</p>
  </section>
</template>
