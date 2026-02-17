<script setup lang="ts">
import type { LoveSection } from '@/types'

defineProps<{
  love: LoveSection
}>()
</script>

<template>
  <section class="space-y-8">
    <!-- Overview -->
    <p class="text-ash-300 text-lg leading-relaxed">
      {{ love.overview }}
    </p>

    <!-- Love Style -->
    <div class="glass rounded-xl p-5 border-l-4 border-[var(--el-500)]">
      <h3 class="element-text font-display text-lg font-semibold mb-2">Love Style</h3>
      <p class="text-ash-300 leading-relaxed">{{ love.loveStyle }}</p>
    </div>

    <!-- Ideal Partner Traits -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Ideal Partner Traits</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="trait in love.idealPartnerTraits"
          :key="trait"
          class="glass rounded-full px-4 py-1.5 text-sm font-medium text-[var(--el-accent)]"
        >
          {{ trait }}
        </span>
      </div>
    </div>

    <!-- Relationship Tips -->
    <div>
      <h3 class="font-display text-xl font-semibold mb-4 text-ash-200">Relationship Tips</h3>
      <ul class="space-y-3">
        <li
          v-for="(tip, i) in love.tips"
          :key="i"
          class="glass rounded-xl p-4 flex gap-3 items-start"
        >
          <span class="shrink-0 w-2 h-2 rounded-full bg-[var(--el-accent)] mt-2" />
          <p class="text-ash-300 leading-relaxed">{{ tip }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
