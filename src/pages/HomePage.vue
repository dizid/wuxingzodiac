<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { zodiacElements, zodiacAnimals } from '@/lib/zodiac-data'
import NewsletterForm from '@/components/ui/NewsletterForm.vue'
import { useHomeSeo } from '@/composables/useSignSeo'

useHomeSeo()

const elements = zodiacElements
const animals = zodiacAnimals

const howItWorks = [
  { step: 1, title: 'Enter Your Birthdate', description: 'Provide your date of birth to calculate your lunar zodiac year.' },
  { step: 2, title: 'Discover Your Element + Animal', description: 'Find which of the 60 unique element-animal combinations is yours.' },
  { step: 3, title: 'Read Your Complete Profile', description: 'Explore personality traits, compatibility, career insights, and more.' },
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
      <h1 class="multi-element-text font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
        Wu Xing Zodiac
      </h1>
      <p class="text-ash-400 text-lg md:text-xl max-w-2xl mb-10">
        Discover the ancient wisdom of 60 zodiac sign combinations
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <RouterLink to="/calculator" class="btn-element text-lg px-8 py-3">
          Find Your Sign
        </RouterLink>
        <RouterLink to="/compatibility" class="text-lg px-8 py-3 border border-ash-500 text-ash-200 hover:border-ash-300 hover:text-ash-100 rounded-lg transition-all">
          Check Compatibility
        </RouterLink>
        <RouterLink
          to="/zodiac"
          class="btn-element text-lg px-8 py-3"
          style="background: linear-gradient(135deg, var(--color-ash-700), var(--color-ash-600));"
        >
          Browse All Signs
        </RouterLink>
      </div>
    </section>

    <!-- Element Wheel Section -->
    <section class="px-4 py-12 max-w-5xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-8">
        The Five Elements
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <RouterLink
          v-for="el in elements"
          :key="el.element"
          :to="`/zodiac/element/${el.element}`"
          :data-element="el.element"
          class="glass rounded-xl p-5 text-center element-glow transition-transform hover:scale-105 block"
        >
          <div class="text-4xl mb-2">{{ el.emoji }}</div>
          <div class="element-text font-display font-bold text-lg">{{ el.name }}</div>
          <div class="text-ash-500 text-sm mt-1">{{ el.chinese }}</div>
          <div class="text-ash-400 text-xs mt-2">12 Signs &rarr;</div>
        </RouterLink>
      </div>
    </section>

    <!-- Featured: 2026 Year of the Fire Horse -->
    <section class="px-4 py-12 max-w-4xl mx-auto">
      <div data-element="fire" class="glass element-glow rounded-2xl p-8 md:p-12 text-center">
        <div class="text-5xl mb-4">🐎🔥</div>
        <h2 class="element-text font-display text-3xl md:text-4xl font-bold mb-4">
          2026: Year of the Fire Horse
        </h2>
        <p class="text-ash-300 text-lg mb-6 max-w-2xl mx-auto">
          2026 is the Year of the Fire Horse — the rarest and most powerful sign in the Chinese zodiac.
          Born only once every 60 years, Fire Horses are legendary for their untamable spirit and fierce independence.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/zodiac/fire-horse" class="btn-element px-6 py-3">
            Read About Fire Horse &rarr;
          </RouterLink>
          <a
            href="https://firehorse.info"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-element px-6 py-3"
            style="background: linear-gradient(135deg, var(--color-ash-700), var(--color-ash-600));"
          >
            Visit firehorse.info
          </a>
        </div>
      </div>
    </section>

    <!-- Compatibility Section -->
    <section class="px-4 py-16 text-center">
      <h2 class="multi-element-text font-display text-3xl md:text-4xl font-bold mb-4">
        Zodiac Compatibility
      </h2>
      <p class="text-ash-400 text-lg max-w-2xl mx-auto mb-8">
        Discover how your Chinese zodiac sign pairs with others. Check compatibility scores powered by the Wu Xing five-element system.
      </p>
      <RouterLink to="/compatibility" class="btn-element text-lg px-8 py-3">
        Check Compatibility
      </RouterLink>
    </section>

    <!-- Animal Carousel -->
    <section class="px-4 py-12 max-w-5xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-8">
        The Twelve Animals
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <RouterLink
          v-for="a in animals"
          :key="a.animal"
          :to="`/zodiac/animal/${a.animal}`"
          class="glass rounded-xl p-5 text-center transition-transform hover:scale-105 block"
        >
          <div class="text-4xl mb-2">{{ a.emoji }}</div>
          <div class="font-display font-bold text-ash-100">{{ a.name }}</div>
          <div class="text-ash-500 text-sm">{{ a.chinese }}</div>
        </RouterLink>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="px-4 py-12 max-w-4xl mx-auto">
      <div class="glass rounded-2xl p-8 md:p-12 text-center">
        <h2 class="multi-element-text font-display text-3xl md:text-4xl font-bold mb-4">
          Stay in the Loop
        </h2>
        <p class="text-ash-300 text-lg mb-8 max-w-2xl mx-auto">
          Get zodiac insights, compatibility tips, and 2026 Fire Horse updates delivered to your inbox.
        </p>
        <NewsletterForm />
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="px-4 py-12 pb-20 max-w-4xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-10">
        How It Works
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in howItWorks"
          :key="item.step"
          class="glass rounded-xl p-6 text-center"
        >
          <div class="text-3xl font-display font-bold text-ash-500 mb-3">{{ item.step }}</div>
          <h3 class="font-display font-bold text-ash-100 text-lg mb-2">{{ item.title }}</h3>
          <p class="text-ash-400 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
