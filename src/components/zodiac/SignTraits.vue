<script setup lang="ts">
import type { PersonalitySection } from '@/types'

defineProps<{
  personality: PersonalitySection
}>()
</script>

<template>
  <section class="space-y-8">
    <!-- Overview -->
    <p class="text-ash-300 text-lg leading-relaxed">
      {{ personality.overview }}
    </p>

    <!-- Core Traits -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Core Traits</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="trait in personality.coreTraits"
          :key="trait"
          class="glass rounded-full px-4 py-1.5 text-sm font-medium text-[var(--el-accent)]"
        >
          {{ trait }}
        </span>
      </div>
    </div>

    <!-- Strengths -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Strengths</h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="s in personality.strengths"
          :key="s.trait"
          class="glass rounded-xl p-4"
        >
          <h4 class="text-[var(--el-accent)] font-semibold mb-1">{{ s.trait }}</h4>
          <p class="text-ash-400 text-sm leading-relaxed">{{ s.description }}</p>
        </div>
      </div>
    </div>

    <!-- Challenges -->
    <div>
      <h3 class="font-display text-xl font-semibold mb-4 text-ash-200">Challenges</h3>
      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="c in personality.challenges"
          :key="c.trait"
          class="glass rounded-xl p-4"
        >
          <h4 class="text-ash-200 font-semibold mb-1">{{ c.trait }}</h4>
          <p class="text-ash-400 text-sm leading-relaxed">{{ c.description }}</p>
        </div>
      </div>
    </div>

    <!-- Element Influence -->
    <div class="glass rounded-xl p-5 border-l-4 border-[var(--el-500)]">
      <h3 class="element-text font-display text-lg font-semibold mb-2">Element Influence</h3>
      <p class="text-ash-300 leading-relaxed">{{ personality.elementInfluence }}</p>
    </div>
  </section>
</template>
