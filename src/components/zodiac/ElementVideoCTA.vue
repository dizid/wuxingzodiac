<script setup lang="ts">
// Sign-page card for "Step into your element" (the 20-second AI video world).
// Rendered only while the video is on sale (ELEMENT_VIDEO_LIVE build flag).
import { RouterLink } from 'vue-router'
import { useAnalytics } from '@/composables/useAnalytics'
import { ELEMENT_VIDEO_LIVE } from '@/lib/element-video/live'
import { ELEMENT_VIDEO_PATH, ELEMENT_VIDEO_PRICE, ELEMENT_VIDEO_SECONDS } from '@/lib/element-video/offer'
import { worldSummary } from '@/lib/element-video/worlds'
import type { ZodiacElement } from '@/types'

const props = defineProps<{
  signSlug: string
  signName: string
  element: ZodiacElement
}>()

const { trackEvent } = useAnalytics()
</script>

<template>
  <aside
    v-if="ELEMENT_VIDEO_LIVE"
    class="glass rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
    aria-label="Element video"
  >
    <p class="text-ash-300 text-sm md:text-base">
      <span class="element-text font-semibold">Step into the {{ props.signName }} world:</span>
      a {{ ELEMENT_VIDEO_SECONDS }}-second AI video of {{ worldSummary(props.element) }}, with sound.
      {{ ELEMENT_VIDEO_PRICE }}
    </p>
    <RouterLink
      :to="`${ELEMENT_VIDEO_PATH}?sign=${props.signSlug}`"
      class="shrink-0 inline-flex items-center justify-center rounded-full border border-ash-600 px-5 py-2 text-sm font-medium text-ash-200 transition-colors duration-200 hover:border-ash-400 hover:text-ash-100"
      @click="trackEvent('element_video_cta_click', { sign: props.signSlug })"
    >
      See an example &rarr;
    </RouterLink>
  </aside>
</template>
