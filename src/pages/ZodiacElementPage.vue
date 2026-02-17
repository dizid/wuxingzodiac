<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProfilesByElement } from '@/lib/sign-content/profiles'
import { zodiacElements, zodiacAnimals } from '@/lib/zodiac-data'
import type { ZodiacElement } from '@/types'

const route = useRoute()
const element = computed(() => route.params.element as ZodiacElement)

// Find matching element data
const elementData = computed(() => zodiacElements.find(e => e.element === element.value))

// Get all 12 animal variants for this element
const variants = computed(() => getProfilesByElement(element.value))

// Animal emoji lookup
const animalEmoji: Record<string, string> = Object.fromEntries(
  zodiacAnimals.map(a => [a.animal, a.emoji])
)

// Wu Xing cycle relationships
interface WuXingInfo {
  description: string
  generates: ZodiacElement
  generatesLabel: string
  overcomes: ZodiacElement
  overcomesLabel: string
  color: string
  season: string
  direction: string
}

const wuXingInfo: Record<ZodiacElement, WuXingInfo> = {
  wood: {
    description: 'Wood represents growth, vitality, and new beginnings. Like a tree pushing through soil, Wood energy is expansive, flexible, and full of creative potential. Wood signs are visionary, compassionate, and driven by a desire to grow and make the world better.',
    generates: 'fire',
    generatesLabel: 'Wood feeds Fire',
    overcomes: 'earth',
    overcomesLabel: 'Wood breaks Earth (roots split soil)',
    color: 'Green',
    season: 'Spring',
    direction: 'East',
  },
  fire: {
    description: 'Fire represents passion, transformation, and illumination. It is the most yang of all elements — dynamic, energetic, and impossible to ignore. Fire signs burn with ambition, inspire others with their warmth, and possess an intensity that drives them to greatness.',
    generates: 'earth',
    generatesLabel: 'Fire creates Earth (ash becomes soil)',
    overcomes: 'metal',
    overcomesLabel: 'Fire melts Metal',
    color: 'Red / Orange',
    season: 'Summer',
    direction: 'South',
  },
  earth: {
    description: 'Earth represents stability, nourishment, and centeredness. It is the grounding force that connects all other elements. Earth signs are reliable, practical, and possess deep reserves of patience and wisdom. They build foundations that last generations.',
    generates: 'metal',
    generatesLabel: 'Earth produces Metal (minerals form in rock)',
    overcomes: 'water',
    overcomesLabel: 'Earth absorbs Water (dams and riverbanks)',
    color: 'Yellow / Brown',
    season: 'Late Summer',
    direction: 'Center',
  },
  metal: {
    description: 'Metal represents precision, strength, and determination. Like refined ore, Metal energy is focused, disciplined, and cutting. Metal signs possess sharp intellect, unwavering principles, and the resilience to endure any hardship.',
    generates: 'water',
    generatesLabel: 'Metal collects Water (condensation on metal)',
    overcomes: 'wood',
    overcomesLabel: 'Metal cuts Wood (axe fells the tree)',
    color: 'White / Silver / Gold',
    season: 'Autumn',
    direction: 'West',
  },
  water: {
    description: 'Water represents wisdom, adaptability, and depth. It flows around obstacles, finding the path of least resistance while wearing down the hardest stone. Water signs are intuitive, perceptive, and possess an emotional depth that connects them to the world around them.',
    generates: 'wood',
    generatesLabel: 'Water nourishes Wood (rain feeds the forest)',
    overcomes: 'fire',
    overcomesLabel: 'Water extinguishes Fire',
    color: 'Blue / Black',
    season: 'Winter',
    direction: 'North',
  },
}

const elementInfo = computed(() => wuXingInfo[element.value])

// Element emoji for the cycle display
const elementEmoji: Record<ZodiacElement, string> = {
  wood: '\u{1F333}',
  fire: '\u{1F525}',
  earth: '\u{1F30D}',
  metal: '\u{1FA99}',
  water: '\u{1F30A}',
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 max-w-5xl mx-auto" :data-element="element">
    <!-- Header -->
    <div class="text-center mb-12" v-if="elementData">
      <div class="text-6xl mb-4">{{ elementData.emoji }}</div>
      <h1 class="element-text font-display text-4xl md:text-5xl font-bold mb-2">
        {{ elementData.name }} Element
      </h1>
      <div class="text-ash-500 text-2xl mb-4">{{ elementData.chinese }}</div>
      <p class="text-ash-400 max-w-2xl mx-auto leading-relaxed">
        {{ elementInfo.description }}
      </p>
    </div>

    <!-- Wu Xing Info -->
    <div class="glass element-glow rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
      <h2 class="element-text font-display text-2xl font-bold mb-6 text-center">
        Wu Xing Relationships
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-ash-900/50 rounded-xl p-4">
          <div class="text-ash-500 text-sm mb-1">Generates</div>
          <div class="text-ash-200 font-medium">
            {{ elementEmoji[elementInfo.generates] }} {{ capitalize(elementInfo.generates) }}
          </div>
          <div class="text-ash-500 text-xs mt-1">{{ elementInfo.generatesLabel }}</div>
        </div>
        <div class="bg-ash-900/50 rounded-xl p-4">
          <div class="text-ash-500 text-sm mb-1">Overcomes</div>
          <div class="text-ash-200 font-medium">
            {{ elementEmoji[elementInfo.overcomes] }} {{ capitalize(elementInfo.overcomes) }}
          </div>
          <div class="text-ash-500 text-xs mt-1">{{ elementInfo.overcomesLabel }}</div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-ash-900/50 rounded-xl p-4 text-center">
          <div class="text-ash-500 text-xs mb-1">Color</div>
          <div class="text-ash-200 text-sm font-medium">{{ elementInfo.color }}</div>
        </div>
        <div class="bg-ash-900/50 rounded-xl p-4 text-center">
          <div class="text-ash-500 text-xs mb-1">Season</div>
          <div class="text-ash-200 text-sm font-medium">{{ elementInfo.season }}</div>
        </div>
        <div class="bg-ash-900/50 rounded-xl p-4 text-center">
          <div class="text-ash-500 text-xs mb-1">Direction</div>
          <div class="text-ash-200 text-sm font-medium">{{ elementInfo.direction }}</div>
        </div>
      </div>
    </div>

    <!-- 12 Animal Variants -->
    <h2 class="font-display text-2xl font-bold text-ash-200 text-center mb-6">
      12 {{ elementData?.name }} Signs
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <RouterLink
        v-for="profile in variants"
        :key="profile.slug"
        :to="`/zodiac/${profile.slug}`"
        :data-element="profile.element"
        class="glass rounded-xl p-5 transition-transform hover:scale-[1.03] block"
      >
        <div class="flex items-center gap-2 mb-2">
          <span class="text-2xl">{{ animalEmoji[profile.animal] }}</span>
          <span class="element-text font-display font-bold">{{ profile.name }}</span>
        </div>
        <div class="text-ash-500 text-sm mb-1">{{ profile.chineseName }}</div>
        <div class="text-ash-400 text-sm italic mb-2">{{ profile.tagline }}</div>
        <div class="text-ash-600 text-xs">
          {{ profile.years.filter(y => y >= 1924 && y <= 2043).join(', ') }}
        </div>
      </RouterLink>
    </div>

    <!-- Back link -->
    <div class="text-center mt-12">
      <RouterLink to="/zodiac" class="text-ash-400 hover:text-ash-200 transition-colors">
        &larr; Back to All Signs
      </RouterLink>
    </div>
  </div>
</template>
