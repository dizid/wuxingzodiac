<script setup lang="ts">
import type { CompatibilitySection } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<{
  compatibility: CompatibilitySection
  slug: string
}>()
</script>

<template>
  <section class="space-y-8">
    <!-- Overview -->
    <p class="text-ash-300 text-lg leading-relaxed">
      {{ compatibility.overview }}
    </p>

    <!-- Best Matches -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Best Matches</h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="match in compatibility.bestMatches"
          :key="match.slug"
          class="glass rounded-xl p-4 hover:element-glow transition-shadow duration-300"
        >
          <div class="flex items-center justify-between mb-2">
            <RouterLink :to="`/zodiac/${match.slug}`" class="text-[var(--el-accent)] font-semibold hover:underline">
              {{ match.name }}
            </RouterLink>
            <span class="text-sm font-bold text-[var(--el-accent)]">{{ match.score }}%</span>
          </div>
          <!-- Score bar -->
          <div class="w-full h-1.5 bg-ash-800 rounded-full mb-3 overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-[var(--el-600)] to-[var(--el-accent)]"
              :style="{ width: `${match.score}%` }"
            />
          </div>
          <p class="text-ash-400 text-sm leading-relaxed mb-2">{{ match.summary }}</p>
          <RouterLink
            :to="`/compatibility/${[slug, match.slug].sort().join('/')}`"
            class="text-sm text-ash-400 hover:text-ash-200 underline"
          >
            See full report &rarr;
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Challenging Matches -->
    <div>
      <h3 class="font-display text-xl font-semibold mb-4 text-ash-200">Challenging Matches</h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="match in compatibility.challengingMatches"
          :key="match.slug"
          class="glass rounded-xl p-4 hover:bg-ash-800/50 transition-colors duration-300"
        >
          <div class="flex items-center justify-between mb-2">
            <RouterLink :to="`/zodiac/${match.slug}`" class="text-ash-200 font-semibold hover:underline">
              {{ match.name }}
            </RouterLink>
            <span class="text-sm font-bold text-ash-400">{{ match.score }}%</span>
          </div>
          <!-- Score bar -->
          <div class="w-full h-1.5 bg-ash-800 rounded-full mb-3 overflow-hidden">
            <div
              class="h-full rounded-full bg-ash-600"
              :style="{ width: `${match.score}%` }"
            />
          </div>
          <p class="text-ash-400 text-sm leading-relaxed mb-2">{{ match.summary }}</p>
          <RouterLink
            :to="`/compatibility/${[slug, match.slug].sort().join('/')}`"
            class="text-sm text-ash-400 hover:text-ash-200 underline"
          >
            See full report &rarr;
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Element Affinity -->
    <div class="glass rounded-xl p-5 border-l-4 border-[var(--el-500)]">
      <h3 class="element-text font-display text-lg font-semibold mb-2">Element Affinity</h3>
      <p class="text-ash-300 leading-relaxed">{{ compatibility.elementAffinity }}</p>
    </div>
  </section>
</template>
