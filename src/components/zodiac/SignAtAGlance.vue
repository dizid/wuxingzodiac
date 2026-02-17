<script setup lang="ts">
import type { AtAGlanceSection } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<{
  data: AtAGlanceSection
}>()

// Convert a slug like 'water-dragon' to 'Water Dragon'
function slugToName(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
</script>

<template>
  <section class="glass rounded-xl p-6">
    <h2 class="element-text font-display text-2xl font-bold mb-5">At a Glance</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- Element -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Element</span>
        <span class="text-ash-100 text-sm font-medium">{{ data.element }}</span>
      </div>

      <!-- Energy -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Energy</span>
        <span class="text-ash-100 text-sm font-medium">{{ data.energy }}</span>
      </div>

      <!-- Archetype -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Archetype</span>
        <span class="text-[var(--el-accent)] text-sm font-medium">{{ data.archetype }}</span>
      </div>

      <!-- Core Strength -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Core Strength</span>
        <span class="text-ash-100 text-sm font-medium">{{ data.coreStrength }}</span>
      </div>

      <!-- Shadow -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Shadow</span>
        <span class="text-ash-100 text-sm font-medium">{{ data.shadow }}</span>
      </div>

      <!-- Lucky Color -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Lucky Color</span>
        <span class="text-ash-100 text-sm font-medium">{{ data.luckyColor }}</span>
      </div>

      <!-- Best Match -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Best Match</span>
        <RouterLink
          :to="`/zodiac/${data.bestMatch}`"
          class="text-[var(--el-accent)] text-sm font-medium hover:underline"
        >
          {{ slugToName(data.bestMatch) }}
        </RouterLink>
      </div>

      <!-- Worst Match -->
      <div class="flex items-center justify-between">
        <span class="text-ash-400 text-sm">Worst Match</span>
        <RouterLink
          :to="`/zodiac/${data.worstMatch}`"
          class="text-ash-300 text-sm font-medium hover:underline"
        >
          {{ slugToName(data.worstMatch) }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
