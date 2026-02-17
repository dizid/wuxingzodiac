<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getZodiacFromBirthdate, getSignSlug, zodiacAnimals } from '@/lib/zodiac-data'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import { usePageSeo } from '@/composables/useSignSeo'
import type { SignProfile } from '@/types'

usePageSeo(
  'Chinese Zodiac Calculator',
  'Find your Chinese zodiac sign by entering your birth date. Discover your element and animal combination from the 60-year cycle.',
  '/calculator'
)

const birthYear = ref<number | null>(null)
const birthMonth = ref<number>(1)
const birthDay = ref<number>(1)
const result = ref<SignProfile | null>(null)
const hasSearched = ref(false)

// Year range: 1924-2043
const years = Array.from({ length: 2043 - 1924 + 1 }, (_, i) => 2043 - i)
const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
]

// Days in month (simplified, up to 31)
const daysInMonth = computed(() => {
  const m = birthMonth.value
  const y = birthYear.value ?? 2000
  if ([4, 6, 9, 11].includes(m)) return 30
  if (m === 2) {
    const isLeap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)
    return isLeap ? 29 : 28
  }
  return 31
})

const days = computed(() => Array.from({ length: daysInMonth.value }, (_, i) => i + 1))

// Clamp day if month changes
function clampDay() {
  if (birthDay.value > daysInMonth.value) {
    birthDay.value = daysInMonth.value
  }
}

// Animal emoji lookup
const animalEmoji: Record<string, string> = Object.fromEntries(
  zodiacAnimals.map(a => [a.animal, a.emoji])
)

function findSign() {
  if (!birthYear.value) return

  const zodiac = getZodiacFromBirthdate(birthYear.value, birthMonth.value, birthDay.value)
  const slug = getSignSlug(zodiac.animal, zodiac.element)
  const profile = getProfileBySlug(slug)

  if (profile) {
    result.value = profile
  }
  hasSearched.value = true
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 max-w-2xl mx-auto">
    <!-- Header -->
    <h1 class="multi-element-text font-display text-4xl md:text-5xl font-bold text-center mb-3">
      What's My Sign?
    </h1>
    <p class="text-ash-400 text-center mb-10">
      Enter your birth date to discover your Chinese zodiac sign — element and animal combined.
    </p>

    <!-- Input Form -->
    <div class="glass rounded-2xl p-6 md:p-8 mb-8">
      <div class="grid grid-cols-3 gap-4 mb-6">
        <!-- Year -->
        <div>
          <label class="text-ash-400 text-sm block mb-2">Year</label>
          <select
            v-model.number="birthYear"
            class="w-full bg-ash-800 text-ash-100 border border-ash-700 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-ash-500"
            @change="clampDay"
          >
            <option :value="null" disabled>Year</option>
            <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
          </select>
        </div>

        <!-- Month -->
        <div>
          <label class="text-ash-400 text-sm block mb-2">Month</label>
          <select
            v-model.number="birthMonth"
            class="w-full bg-ash-800 text-ash-100 border border-ash-700 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-ash-500"
            @change="clampDay"
          >
            <option v-for="m in months" :key="m.value" :value="m.value">{{ m.label }}</option>
          </select>
        </div>

        <!-- Day -->
        <div>
          <label class="text-ash-400 text-sm block mb-2">Day</label>
          <select
            v-model.number="birthDay"
            class="w-full bg-ash-800 text-ash-100 border border-ash-700 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-ash-500"
          >
            <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>
      </div>

      <button
        class="btn-element w-full text-lg py-3"
        :disabled="!birthYear"
        @click="findSign"
      >
        Find My Sign
      </button>
    </div>

    <!-- Result -->
    <div
      v-if="result"
      :data-element="result.element"
      class="glass element-glow rounded-2xl p-8 text-center"
    >
      <div class="text-6xl mb-4">
        {{ animalEmoji[result.animal] }}
      </div>
      <h2 class="element-text font-display text-3xl md:text-4xl font-bold mb-2">
        You are a {{ result.name }}!
      </h2>
      <div class="text-ash-400 text-lg mb-1">{{ result.chineseName }}</div>
      <div class="text-ash-300 italic mb-4">{{ result.tagline }}</div>
      <div class="text-ash-500 text-sm mb-6">
        Years: {{ result.years.filter(y => y >= 1924 && y <= 2043).join(', ') }}
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <RouterLink
          :to="`/zodiac/${result.slug}`"
          class="btn-element inline-block px-8 py-3 text-lg"
        >
          View Full Profile &rarr;
        </RouterLink>
        <RouterLink
          :to="`/compatibility?sign=${result.slug}`"
          class="inline-block px-8 py-3 text-lg border border-current rounded-lg text-ash-200 hover:text-ash-100 transition-colors"
        >
          Check Compatibility
        </RouterLink>
      </div>
    </div>

    <!-- No result fallback -->
    <div
      v-else-if="hasSearched"
      class="glass rounded-2xl p-8 text-center"
    >
      <p class="text-ash-400">Could not determine your sign. Please check your birth date and try again.</p>
    </div>
  </div>
</template>
