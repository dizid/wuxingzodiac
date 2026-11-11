<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProfilesByAnimal } from '@/lib/sign-content/profiles'
import { zodiacAnimals } from '@/lib/zodiac-data'
import { usePageSeo } from '@/composables/useSignSeo'
import { TRINES, partners, pairChars, relationBetween, type Relation } from '@/lib/branch-relations'
import ReadingCTA from '@/components/readings/ReadingCTA.vue'
import type { ZodiacAnimal, ZodiacElement } from '@/types'

const route = useRoute()
const animal = computed(() => route.params.animal as ZodiacAnimal)

// Find matching animal data
const animalData = computed(() => zodiacAnimals.find(a => a.animal === animal.value))

// Get all 5 element variants for this animal
const variants = computed(() => getProfilesByAnimal(animal.value))

// Traditional relations to the other animals (same data as the relations blog post,
// whose tests check them against the reading engine and the compatibility tool)
const animalName = (other: ZodiacAnimal) => zodiacAnimals.find(a => a.animal === other)?.name ?? other

const trine = computed(() => TRINES.find(t => t.animals.includes(animal.value)))
const relations = computed(() => {
  const pair = (relation: 'secret-friend' | 'clash' | 'harm', suffix: string) => {
    const other = partners(animal.value, relation)[0]!
    return { animal: other, chars: pairChars(animal.value, other) + suffix }
  }
  return {
    allies: partners(animal.value, 'trine'),
    secretFriend: pair('secret-friend', '合'),
    clash: pair('clash', '冲'),
    harm: pair('harm', '害'),
  }
})

// How the 2026 and 2027 year animals relate to this animal (fixed dates, no clock:
// the prerendered HTML and the browser always show the same text)
const YEARS: { year: number; label: string; dates: string; animal: ZodiacAnimal }[] = [
  { year: 2026, label: 'Fire Horse', dates: '17 February 2026 to 5 February 2027', animal: 'horse' },
  { year: 2027, label: 'Fire Goat', dates: 'from 6 February 2027', animal: 'goat' },
]
function yearRelation(yearAnimal: ZodiacAnimal): string {
  const you = animalName(animal.value)
  const them = animalName(yearAnimal)
  const relation: Relation = relationBetween(yearAnimal, animal.value)
  const phrases: Record<Relation, string> = {
    same: `the ${you}'s own zodiac year`,
    trine: `the ${them} and the ${you} are trine allies`,
    'secret-friend': `the ${them} is the ${you}'s secret friend`,
    clash: `the ${you} clashes with the ${them}`,
    harm: `the ${you} and the ${them} are a harm pair`,
    neutral: `the ${you} and the ${them} have no special relation (neutral)`,
  }
  return phrases[relation]
}

// SEO meta tags
watchEffect(() => {
  if (animalData.value) {
    usePageSeo(
      `Year of the ${animalData.value.name} — All Five Element Variants`,
      `Discover all five element variants of the Chinese zodiac ${animalData.value.name}: Wood, Fire, Earth, Metal, and Water. Compare personality traits, compatibility, and characteristics.`,
      `/zodiac/animal/${animal.value}`
    )
  }
})

// Element emoji lookup
const elementEmoji: Record<ZodiacElement, string> = {
  wood: '\u{1F333}',
  fire: '\u{1F525}',
  earth: '\u{1F30D}',
  metal: '\u{1FA99}',
  water: '\u{1F30A}',
}

// General descriptions for each animal
const animalDescriptions: Record<ZodiacAnimal, string> = {
  rat: 'The Rat is the first animal in the Chinese zodiac cycle. Known for quick wit, resourcefulness, and versatility, Rats are natural problem-solvers who thrive in social situations. They are charming, ambitious, and possess an uncanny ability to turn any situation to their advantage.',
  ox: 'The Ox represents diligence, dependability, and determination. As the second zodiac animal, Oxen are the backbone of any endeavor — patient, methodical, and incredibly hardworking. They value tradition and approach life with steady, unwavering resolve.',
  tiger: 'The Tiger symbolizes bravery, competitiveness, and unpredictability. Tigers are natural-born leaders who command respect and attention. Bold and adventurous, they possess magnetic charisma and are driven by a deep sense of justice and courage.',
  rabbit: 'The Rabbit embodies elegance, mercy, and good fortune. Rabbits are gentle diplomats who navigate life with grace and tact. They possess refined taste, strong intuition, and a natural ability to create harmony in their surroundings.',
  dragon: 'The Dragon is the most powerful and auspicious sign in the Chinese zodiac. Dragons are ambitious, energetic, and fearless leaders. They symbolize imperial authority, strength, and good fortune, inspiring awe wherever they go.',
  snake: 'The Snake represents wisdom, mystery, and intuition. Snakes are deep thinkers who observe the world with penetrating intelligence. They are strategic, elegant, and possess a quiet magnetism that draws others in.',
  horse: 'The Horse symbolizes freedom, energy, and adventure. Horses are spirited, independent, and love to travel. They are natural entertainers with infectious enthusiasm and an unwavering desire for personal liberty.',
  goat: 'The Goat (also known as Sheep or Ram) represents creativity, gentleness, and artistic vision. Goats are compassionate dreamers with rich inner worlds. They thrive in environments that nurture their imagination and sensitivity.',
  monkey: 'The Monkey embodies cleverness, curiosity, and mischief. Monkeys are the problem-solvers of the zodiac — inventive, quick-witted, and endlessly adaptable. They approach challenges with playful ingenuity and infectious energy.',
  rooster: 'The Rooster symbolizes confidence, honesty, and hard work. Roosters are observant perfectionists who take pride in their appearance and achievements. They are forthright, punctual, and dedicated to excellence in everything they do.',
  dog: 'The Dog represents loyalty, sincerity, and justice. Dogs are the most faithful companions of the zodiac — honest, reliable, and deeply committed to their values. They possess a strong moral compass and will fight tirelessly for what is right.',
  pig: 'The Pig (also known as Boar) embodies generosity, compassion, and sincerity. Pigs are warm-hearted souls who enjoy the pleasures of life. They are tolerant, optimistic, and bring genuine warmth to every relationship.',
}
</script>

<template>
  <div class="min-h-screen px-4 py-12 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12" v-if="animalData">
      <div class="text-6xl mb-4">{{ animalData.emoji }}</div>
      <h1 class="font-display text-4xl md:text-5xl font-bold text-ash-100 mb-2">
        {{ animalData.name }}
      </h1>
      <div class="text-ash-500 text-xl mb-4">{{ animalData.chinese }}</div>
      <p class="text-ash-400 max-w-2xl mx-auto leading-relaxed">
        {{ animalDescriptions[animal] }}
      </p>
    </div>

    <!-- 5 Element Variants -->
    <h2 class="font-display text-2xl font-bold text-ash-200 text-center mb-6">
      Five Element Variants
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <RouterLink
        v-for="profile in variants"
        :key="profile.slug"
        :to="`/zodiac/${profile.slug}`"
        :data-element="profile.element"
        class="glass element-glow rounded-xl p-6 transition-transform hover:scale-[1.03] block"
      >
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">{{ elementEmoji[profile.element] }}</span>
          <span class="element-text font-display font-bold text-xl">{{ profile.name }}</span>
        </div>
        <div class="text-ash-500 text-sm mb-1">{{ profile.chineseName }}</div>
        <div class="text-ash-300 italic mb-3">{{ profile.tagline }}</div>
        <div class="text-ash-600 text-xs">
          Years: {{ profile.years.join(', ') }}
        </div>
      </RouterLink>
    </div>

    <!-- Friends and frictions: traditional animal relations -->
    <section v-if="animalData && trine" class="glass rounded-2xl p-6 md:p-8 mt-12 max-w-3xl mx-auto">
      <h2 class="font-display text-2xl font-bold text-ash-200 mb-3">
        {{ animalData.name }}: Friends and Frictions
      </h2>
      <p class="text-ash-400 mb-5 leading-relaxed">
        Chinese astrology links the twelve animals in four ways. These are traditional ideas, offered for fun and reflection.
      </p>
      <ul class="space-y-3 text-ash-300 leading-relaxed">
        <li>
          <strong class="text-ash-100">Trine allies (三合):</strong>
          the
          <RouterLink :to="`/zodiac/animal/${relations.allies[0]}`" class="text-ash-200 font-semibold hover:underline">{{ animalName(relations.allies[0]!) }}</RouterLink>
          and the
          <RouterLink :to="`/zodiac/animal/${relations.allies[1]}`" class="text-ash-200 font-semibold hover:underline">{{ animalName(relations.allies[1]!) }}</RouterLink>,
          the {{ trine.element }} trine ({{ trine.chars }})
        </li>
        <li>
          <strong class="text-ash-100">Secret friend (六合):</strong>
          the
          <RouterLink :to="`/zodiac/animal/${relations.secretFriend.animal}`" class="text-ash-200 font-semibold hover:underline">{{ animalName(relations.secretFriend.animal) }}</RouterLink>
          ({{ relations.secretFriend.chars }})
        </li>
        <li>
          <strong class="text-ash-100">Clash (冲):</strong>
          the
          <RouterLink :to="`/zodiac/animal/${relations.clash.animal}`" class="text-ash-200 font-semibold hover:underline">{{ animalName(relations.clash.animal) }}</RouterLink>
          ({{ relations.clash.chars }})
        </li>
        <li>
          <strong class="text-ash-100">Harm (害):</strong>
          the
          <RouterLink :to="`/zodiac/animal/${relations.harm.animal}`" class="text-ash-200 font-semibold hover:underline">{{ animalName(relations.harm.animal) }}</RouterLink>
          ({{ relations.harm.chars }})
        </li>
      </ul>
      <p class="text-ash-400 text-sm mt-5 leading-relaxed">
        The other six animals are neutral. Where these pairs come from:
        <RouterLink to="/blog/chinese-zodiac-trines-secret-friends-clashes" class="text-ash-200 font-semibold hover:underline">Trines, Secret Friends and Clashes</RouterLink>.
        Your element changes the picture too: check a pair with the
        <RouterLink to="/compatibility" class="text-ash-200 font-semibold hover:underline">compatibility tool</RouterLink>.
      </p>

      <h3 class="font-display text-xl font-bold text-ash-200 mt-8 mb-3">
        The {{ animalData.name }} in 2026 and 2027
      </h3>
      <ul class="space-y-2 text-ash-300 leading-relaxed">
        <li v-for="y in YEARS" :key="y.year">
          <strong class="text-ash-100">{{ y.year }}, the {{ y.label }} year</strong> ({{ y.dates }}): {{ yearRelation(y.animal) }}.
        </li>
      </ul>
    </section>

    <!-- Personal reading (compact), as on the sign pages -->
    <div class="mt-10 max-w-3xl mx-auto">
      <ReadingCTA variant="compact" placement="animal_page" />
    </div>

    <!-- Back link -->
    <div class="text-center mt-12">
      <RouterLink to="/zodiac" class="text-ash-400 hover:text-ash-200 transition-colors">
        &larr; Back to All Signs
      </RouterLink>
    </div>
  </div>
</template>
