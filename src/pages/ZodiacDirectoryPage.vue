<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { signProfiles, getProfilesByElement } from '@/lib/sign-content/profiles'
import { zodiacElements, zodiacAnimals } from '@/lib/zodiac-data'
import { usePageSeo } from '@/composables/useSignSeo'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

usePageSeo(
  'All 60 Chinese Zodiac Signs',
  'Browse all 60 Chinese zodiac sign combinations across Wood, Fire, Earth, Metal, and Water elements. Find personality traits, compatibility, and more for every sign.',
  '/zodiac'
)

const selectedElement = ref<ZodiacElement | 'all'>('all')
const selectedAnimal = ref<ZodiacAnimal | 'all'>('all')
const sortBy = ref<'element' | 'animal'>('element')

const filteredProfiles = computed(() => {
  let profiles = signProfiles

  if (selectedElement.value !== 'all') {
    profiles = getProfilesByElement(selectedElement.value)
  }

  if (selectedAnimal.value !== 'all') {
    profiles = profiles.filter(p => p.animal === selectedAnimal.value)
  }

  if (sortBy.value === 'animal') {
    const animalOrder: ZodiacAnimal[] = [
      'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
      'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
    ]
    profiles = [...profiles].sort((a, b) => animalOrder.indexOf(a.animal) - animalOrder.indexOf(b.animal))
  }

  return profiles
})

// Element emoji lookup
const elementEmoji: Record<ZodiacElement, string> = {
  wood: '\u{1F333}',
  fire: '\u{1F525}',
  earth: '\u{1F30D}',
  metal: '\u{1FA99}',
  water: '\u{1F30A}',
}

function formatYearsPreview(years: number[]): string {
  // Show up to 3 recent/notable years
  const relevant = years.filter(y => y >= 1940 && y <= 2040)
  return relevant.slice(0, 3).join(', ')
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 max-w-6xl mx-auto">
    <!-- Header -->
    <h1 class="multi-element-text font-display text-4xl md:text-5xl font-bold text-center mb-3">
      All 60 Zodiac Signs
    </h1>
    <p class="text-ash-400 text-center mb-10 max-w-2xl mx-auto">
      Browse the complete collection of Chinese zodiac signs across all five elements and twelve animals.
    </p>

    <!-- Filter Controls -->
    <div class="flex flex-wrap items-center justify-center gap-3 mb-8">
      <!-- Element tabs -->
      <button
        :class="[
          'px-4 py-2 rounded-lg font-medium text-sm transition-all',
          selectedElement === 'all'
            ? 'bg-ash-700 text-ash-100'
            : 'text-ash-400 hover:text-ash-200'
        ]"
        @click="selectedElement = 'all'"
      >
        All
      </button>
      <button
        v-for="el in zodiacElements"
        :key="el.element"
        :data-element="el.element"
        :class="[
          'px-4 py-2 rounded-lg font-medium text-sm transition-all',
          selectedElement === el.element
            ? 'btn-element'
            : 'text-ash-400 hover:text-ash-200'
        ]"
        @click="selectedElement = el.element"
      >
        {{ el.emoji }} {{ el.name }}
      </button>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-4 mb-10">
      <!-- Animal filter -->
      <select
        v-model="selectedAnimal"
        class="bg-ash-800 text-ash-200 border border-ash-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ash-500"
      >
        <option value="all">All Animals</option>
        <option v-for="a in zodiacAnimals" :key="a.animal" :value="a.animal">
          {{ a.emoji }} {{ a.name }}
        </option>
      </select>

      <!-- Sort -->
      <select
        v-model="sortBy"
        class="bg-ash-800 text-ash-200 border border-ash-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-ash-500"
      >
        <option value="element">Sort by Element</option>
        <option value="animal">Sort by Animal</option>
      </select>

      <!-- Count -->
      <span class="text-ash-500 text-sm">
        {{ filteredProfiles.length }} signs
      </span>
    </div>

    <!-- Sign Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <RouterLink
        v-for="profile in filteredProfiles"
        :key="profile.slug"
        :to="`/zodiac/${profile.slug}`"
        :data-element="profile.element"
        class="glass rounded-xl p-5 transition-transform hover:scale-[1.03] block group"
      >
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl">{{ elementEmoji[profile.element] }}</span>
          <span class="element-text font-display font-bold text-lg">{{ profile.name }}</span>
        </div>
        <div class="text-ash-500 text-sm mb-1">{{ profile.chineseName }}</div>
        <div class="text-ash-400 text-sm italic mb-2">{{ profile.tagline }}</div>
        <div class="text-ash-600 text-xs">{{ formatYearsPreview(profile.years) }}</div>
      </RouterLink>
    </div>
  </div>
</template>
