<script setup lang="ts">
import type { MatchesSection } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<{
  matches: MatchesSection
  slug: string
}>()
</script>

<template>
  <section class="space-y-6">
    <!-- Best Matches -->
    <div>
      <h2 class="element-text font-display text-2xl font-bold mb-4">Best Matches</h2>
      <div class="space-y-3">
        <div
          v-for="match in matches.best"
          :key="match.slug"
          class="glass rounded-xl p-4 hover:element-glow transition-shadow duration-300"
        >
          <div class="flex items-center gap-3 mb-2">
            <span class="text-[var(--el-accent)] text-lg">&#10003;</span>
            <RouterLink
              :to="`/zodiac/${match.slug}`"
              class="text-[var(--el-accent)] font-semibold hover:underline"
            >
              {{ match.name }}
            </RouterLink>
          </div>
          <p class="text-ash-400 text-sm leading-relaxed pl-8">{{ match.reason }}</p>
        </div>
      </div>
    </div>

    <!-- Challenging Matches -->
    <div>
      <h2 class="font-display text-2xl font-bold text-ash-200 mb-4">Challenging Matches</h2>
      <div class="space-y-3">
        <div
          v-for="match in matches.worst"
          :key="match.slug"
          class="glass rounded-xl p-4 hover:bg-ash-800/50 transition-colors duration-300"
        >
          <div class="flex items-center gap-3 mb-2">
            <span class="text-red-400 text-lg">&#10007;</span>
            <RouterLink
              :to="`/zodiac/${match.slug}`"
              class="text-ash-200 font-semibold hover:underline"
            >
              {{ match.name }}
            </RouterLink>
          </div>
          <p class="text-ash-400 text-sm leading-relaxed pl-8">{{ match.reason }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
