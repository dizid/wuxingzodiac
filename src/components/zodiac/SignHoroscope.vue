<script setup lang="ts">
import type { HoroscopeSection } from '@/types'

defineProps<{
  horoscope: HoroscopeSection | null
}>()
</script>

<template>
  <section>
    <!-- Placeholder when no horoscope data -->
    <div v-if="!horoscope" class="glass rounded-xl p-8 text-center">
      <p class="text-ash-400 text-lg mb-2">Horoscope Coming Soon</p>
      <p class="text-ash-500 text-sm">Daily, monthly, and yearly readings will be available in a future update.</p>
    </div>

    <!-- Horoscope content -->
    <div v-else class="space-y-6">
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-xl font-semibold mb-3">Daily Horoscope</h3>
        <p class="text-ash-300 leading-relaxed">{{ horoscope.daily }}</p>
      </div>

      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-xl font-semibold mb-3">Monthly Horoscope</h3>
        <p class="text-ash-300 leading-relaxed">{{ horoscope.monthly }}</p>
      </div>

      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-xl font-semibold mb-3">Yearly Horoscope</h3>
        <p class="text-ash-300 leading-relaxed">{{ horoscope.yearly }}</p>
      </div>
    </div>
  </section>
</template>
