<script setup lang="ts">
import type { CultureSection } from '@/types'

defineProps<{
  culture: CultureSection
}>()
</script>

<template>
  <section class="space-y-6">
    <!-- Mythology -->
    <div class="glass rounded-xl p-5">
      <h3 class="element-text font-display text-xl font-semibold mb-3">Mythology</h3>
      <p class="text-ash-300 leading-relaxed">{{ culture.mythology }}</p>
    </div>

    <!-- Symbolism -->
    <div class="glass rounded-xl p-5">
      <h3 class="element-text font-display text-xl font-semibold mb-3">Symbolism</h3>
      <p class="text-ash-300 leading-relaxed">{{ culture.symbolism }}</p>
    </div>

    <!-- Modern Interpretation -->
    <div class="glass rounded-xl p-5">
      <h3 class="element-text font-display text-xl font-semibold mb-3">Modern Interpretation</h3>
      <p class="text-ash-300 leading-relaxed">{{ culture.modernInterpretation }}</p>
    </div>
  </section>
</template>
