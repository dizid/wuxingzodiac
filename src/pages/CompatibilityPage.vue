<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import CompatibilityPicker from '@/components/compatibility/CompatibilityPicker.vue'
import CompatibilityResults from '@/components/compatibility/CompatibilityResults.vue'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import {
  getCompatibilityScore,
  getElementModifier,
  getElementInteractionDescription,
} from '@/lib/compatibility-matrix'
import { useAnalytics } from '@/composables/useAnalytics'
import { usePageSeo } from '@/composables/useSignSeo'
import { useCompatibilitySeo } from '@/composables/useCompatibilitySeo'
import type { SignProfile, CompatibilityResult } from '@/types'

const route = useRoute()
const router = useRouter()
const { trackCompatibilityCheck } = useAnalytics()

// Picker state
const pickerA = ref('')
const pickerB = ref('')

// Determine mode: results (pair route) or picker (base route)
const isPairMode = computed(() => {
  return route.name === 'compatibility-pair'
})

// Resolve profiles and results for pair mode
const profileA = computed<SignProfile | undefined>(() => {
  if (!isPairMode.value) return undefined
  return getProfileBySlug(route.params.slugA as string)
})

const profileB = computed<SignProfile | undefined>(() => {
  if (!isPairMode.value) return undefined
  return getProfileBySlug(route.params.slugB as string)
})

const result = computed<CompatibilityResult | undefined>(() => {
  if (!profileA.value || !profileB.value) return undefined
  return getCompatibilityScore(
    profileA.value.animal,
    profileA.value.element,
    profileB.value.animal,
    profileB.value.element,
  )
})

const elementInteraction = computed(() => {
  if (!profileA.value || !profileB.value) return undefined
  const modifier = getElementModifier(profileA.value.element, profileB.value.element)
  const description = getElementInteractionDescription(
    profileA.value.element,
    profileB.value.element,
    modifier,
  )
  let type: 'harmonious' | 'challenging' | 'neutral' = 'neutral'
  if (modifier > 0) type = 'harmonious'
  if (modifier < 0) type = 'challenging'
  return { modifier, type, description }
})

// Pre-fill picker when in pair mode
watch(isPairMode, (isPair) => {
  if (isPair && profileA.value && profileB.value) {
    pickerA.value = profileA.value.slug
    pickerB.value = profileB.value.slug
  }
}, { immediate: true })

// Track compatibility check on pair mode entry
watch([profileA, profileB, result], ([a, b, r]) => {
  if (a && b && r) {
    trackCompatibilityCheck(a.slug, b.slug, r.score)
  }
}, { immediate: true })

// Navigate when picker is submitted
function onPickerSubmit() {
  if (!pickerA.value || !pickerB.value) return
  const slugs = [pickerA.value, pickerB.value].sort()
  router.push(`/compatibility/${slugs[0]}/${slugs[1]}`)
}

// SEO
if (isPairMode.value && profileA.value && profileB.value && result.value) {
  useCompatibilitySeo(profileA.value, profileB.value, result.value)
} else if (!isPairMode.value) {
  usePageSeo(
    'Chinese Zodiac Compatibility Checker',
    'Check compatibility between any two Chinese zodiac signs. Discover how the 12 animals and 5 elements interact in love, friendship, and partnership.',
    '/compatibility',
  )
}

// Popular comparison pairs for the picker page
const popularPairs = [
  { slugA: 'fire-dragon', slugB: 'fire-horse', labelA: 'Fire Dragon', labelB: 'Fire Horse' },
  { slugA: 'water-rabbit', slugB: 'wood-goat', labelA: 'Water Rabbit', labelB: 'Wood Goat' },
  { slugA: 'earth-ox', slugB: 'metal-rooster', labelA: 'Earth Ox', labelB: 'Metal Rooster' },
  { slugA: 'fire-monkey', slugB: 'water-rat', labelA: 'Fire Monkey', labelB: 'Water Rat' },
  { slugA: 'wood-tiger', slugB: 'fire-dog', labelA: 'Wood Tiger', labelB: 'Fire Dog' },
  { slugA: 'earth-snake', slugB: 'metal-ox', labelA: 'Earth Snake', labelB: 'Metal Ox' },
]
</script>

<template>
  <div class="min-h-screen px-4 py-12 max-w-3xl mx-auto">
    <!-- Results mode -->
    <template v-if="isPairMode && profileA && profileB && result && elementInteraction">
      <CompatibilityResults
        :profile-a="profileA"
        :profile-b="profileB"
        :result="result"
        :element-interaction="elementInteraction"
      />

      <!-- Try Another Pair -->
      <div class="mt-12">
        <h2 class="font-display text-2xl font-semibold text-ash-100 text-center mb-6">
          Try Another Pair
        </h2>
        <CompatibilityPicker
          v-model:model-value-a="pickerA"
          v-model:model-value-b="pickerB"
          @submit="onPickerSubmit"
        />
      </div>
    </template>

    <!-- Picker mode -->
    <template v-else-if="!isPairMode">
      <div class="text-center mb-10">
        <h1 class="multi-element-text font-display text-4xl sm:text-5xl font-bold mb-4">
          Compatibility Checker
        </h1>
        <p class="text-ash-400 text-lg max-w-xl mx-auto">
          Discover how any two Chinese zodiac signs interact. Select two signs below to explore their
          compatibility across the Wu Xing element system.
        </p>
      </div>

      <CompatibilityPicker
        v-model:model-value-a="pickerA"
        v-model:model-value-b="pickerB"
        @submit="onPickerSubmit"
      />

      <!-- Popular Comparisons -->
      <div class="mt-14">
        <h2 class="font-display text-2xl font-semibold text-ash-100 text-center mb-6">
          Popular Comparisons
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="pair in popularPairs"
            :key="`${pair.slugA}-${pair.slugB}`"
            :to="`/compatibility/${[pair.slugA, pair.slugB].sort()[0]}/${[pair.slugA, pair.slugB].sort()[1]}`"
            class="glass rounded-2xl p-4 text-center hover:translate-y-[-2px] hover:border-ash-500 transition-all block"
          >
            <div class="text-ash-100 font-display font-semibold">
              {{ pair.labelA }}
            </div>
            <div class="text-ash-500 text-sm my-1">vs</div>
            <div class="text-ash-100 font-display font-semibold">
              {{ pair.labelB }}
            </div>
          </RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>
