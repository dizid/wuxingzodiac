<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { usePageSeo } from '@/composables/useSignSeo'

usePageSeo(
  'About Wu Xing Zodiac',
  'Learn about Wu Xing Zodiac — a comprehensive guide to all 60 Chinese zodiac sign combinations through the lens of the Five Elements.',
  '/about',
)
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 class="multi-element-text font-display text-4xl md:text-5xl font-bold mb-8">
        About Wu Xing Zodiac
      </h1>

      <div class="space-y-6 text-ash-300 leading-relaxed">
        <p>
          Wu Xing Zodiac is the most comprehensive guide to Chinese astrology on the web, covering all
          <strong class="text-ash-100">60 unique element-animal combinations</strong> that make up the sexagenary cycle.
          While most zodiac sites stop at the 12 animals, we go deeper — exploring how the Five Elements
          (Wood, Fire, Earth, Metal, and Water) fundamentally transform each animal sign's personality,
          compatibility, career path, and life destiny.
        </p>

        <p>
          The <em>Wu Xing</em> (五行) — literally "Five Phases" — is one of the oldest philosophical frameworks
          in Chinese thought, dating back over 2,000 years. It describes the dynamic interplay of five fundamental
          energies that govern everything from seasons and organs to temperament and fate. A Fire Horse and a Water
          Horse are not merely different shades of the same sign — they are fundamentally different people with
          distinct strengths, challenges, and destinies.
        </p>

        <p>
          This site was created to bring that elemental depth to a wider audience. Every profile on Wu Xing Zodiac
          is crafted to help you understand not just <em>what</em> your sign means, but <em>why</em> — how the
          interaction between your element and animal creates a unique blueprint for personality, relationships,
          and life purpose. We focus on practical insight: elemental balance, compatibility chemistry, career
          alignment, and actionable lifestyle recommendations rooted in traditional Chinese wisdom.
        </p>

        <p>
          Whether you were born in a Year of the Dragon or discovered your sign through our calculator,
          Wu Xing Zodiac is here to help you explore the full picture — not just the animal, but the element
          that shapes everything.
        </p>
      </div>

      <!-- Calculator CTA -->
      <div class="glass rounded-2xl p-8 mt-12 text-center">
        <h2 class="multi-element-text font-display text-2xl md:text-3xl font-bold mb-4">
          Find Your Sign
        </h2>
        <p class="text-ash-400 mb-6">
          Enter your birthdate and discover which of the 60 element-animal combinations is yours.
        </p>
        <RouterLink to="/calculator" class="btn-element inline-block text-lg px-8 py-3">
          Go to Calculator
        </RouterLink>
      </div>
    </div>
  </div>
</template>
