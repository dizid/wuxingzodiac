<script setup lang="ts">
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const exploreLinks = [
  { label: 'All Signs', to: '/zodiac' },
  { label: 'Compatibility', to: '/compatibility' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'Blog', to: '/blog' },
]

const elementLinks = [
  { label: 'Wood Signs', to: '/zodiac/element/wood', color: 'text-wood-400' },
  { label: 'Fire Signs', to: '/zodiac/element/fire', color: 'text-fire-400' },
  { label: 'Earth Signs', to: '/zodiac/element/earth', color: 'text-earth-400' },
  { label: 'Metal Signs', to: '/zodiac/element/metal', color: 'text-metal-400' },
  { label: 'Water Signs', to: '/zodiac/element/water', color: 'text-water-400' },
]

const animalLinksCol1 = [
  { label: 'Rat', to: '/zodiac/animal/rat' },
  { label: 'Ox', to: '/zodiac/animal/ox' },
  { label: 'Tiger', to: '/zodiac/animal/tiger' },
  { label: 'Rabbit', to: '/zodiac/animal/rabbit' },
  { label: 'Dragon', to: '/zodiac/animal/dragon' },
  { label: 'Snake', to: '/zodiac/animal/snake' },
]

const animalLinksCol2 = [
  { label: 'Horse', to: '/zodiac/animal/horse' },
  { label: 'Goat', to: '/zodiac/animal/goat' },
  { label: 'Monkey', to: '/zodiac/animal/monkey' },
  { label: 'Rooster', to: '/zodiac/animal/rooster' },
  { label: 'Dog', to: '/zodiac/animal/dog' },
  { label: 'Pig', to: '/zodiac/animal/pig' },
]
</script>

<template>
  <footer class="border-t border-ash-800/50 bg-ash-950/80 mt-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <!-- Footer grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
          <RouterLink to="/" class="flex items-center gap-2 text-lg font-display font-bold tracking-wide">
            <span class="text-xl">&#9775;</span>
            <span class="multi-element-text">Wu Xing Zodiac</span>
          </RouterLink>
          <p class="mt-3 text-sm text-ash-500 leading-relaxed">
            Explore the ancient wisdom of Chinese astrology through the lens of the Five Elements.
          </p>
          <!-- Cross-site link -->
          <a
            href="https://firehorse.info"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-4 text-sm text-fire-400 hover:text-fire-300 transition-colors"
          >
            firehorse.info &rarr;
          </a>
        </div>

        <!-- Explore -->
        <div>
          <h3 class="text-sm font-semibold text-ash-300 uppercase tracking-wider mb-3">
            Explore
          </h3>
          <ul class="space-y-2">
            <li v-for="link in exploreLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm text-ash-500 hover:text-ash-200 transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Elements -->
        <div>
          <h3 class="text-sm font-semibold text-ash-300 uppercase tracking-wider mb-3">
            Elements
          </h3>
          <ul class="space-y-2">
            <li v-for="link in elementLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm transition-colors hover:opacity-80"
                :class="link.color"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Animals (2 columns) -->
        <div class="col-span-2 md:col-span-1 lg:col-span-2">
          <h3 class="text-sm font-semibold text-ash-300 uppercase tracking-wider mb-3">
            Animals
          </h3>
          <div class="grid grid-cols-2 gap-x-6">
            <ul class="space-y-2">
              <li v-for="link in animalLinksCol1" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-sm text-ash-500 hover:text-ash-200 transition-colors"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
            <ul class="space-y-2">
              <li v-for="link in animalLinksCol2" :key="link.to">
                <RouterLink
                  :to="link.to"
                  class="text-sm text-ash-500 hover:text-ash-200 transition-colors"
                >
                  {{ link.label }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-ash-800/50 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-sm text-ash-600">
          &copy; {{ currentYear }} Wu Xing Zodiac
        </p>
        <div class="flex items-center gap-4">
          <RouterLink to="/about" class="text-xs text-ash-600 hover:text-ash-400 transition-colors">About</RouterLink>
          <RouterLink to="/privacy" class="text-xs text-ash-600 hover:text-ash-400 transition-colors">Privacy</RouterLink>
          <RouterLink to="/terms" class="text-xs text-ash-600 hover:text-ash-400 transition-colors">Terms</RouterLink>
        </div>
        <p class="text-xs text-ash-700">
          Chinese astrology information is for entertainment purposes only.
        </p>
      </div>
    </div>
  </footer>
</template>
