<script setup lang="ts">
import type { SignProfile } from '@/types'
import { useElementTheme } from '@/composables/useElementTheme'
import { computed } from 'vue'

const props = defineProps<{
  profile: SignProfile
  archetype?: { name: string; tagline: string }
}>()

const elementRef = computed(() => props.profile.element)
const { config } = useElementTheme(elementRef)
</script>

<template>
  <section class="relative py-16 px-4 text-center gradient-element-bg">
    <!-- Element badge -->
    <div class="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
      <span class="text-lg">{{ config?.emoji }}</span>
      <span class="text-sm font-medium text-[var(--el-accent)]">{{ config?.name }} Element</span>
    </div>

    <!-- Sign name -->
    <h1 class="element-text font-display text-5xl md:text-7xl font-bold mb-3">
      {{ profile.name }}
    </h1>

    <!-- Archetype (V2 content) -->
    <p v-if="archetype" class="text-lg md:text-xl font-display font-semibold text-[var(--el-accent)] mb-3 tracking-wide">
      {{ archetype.name }}
    </p>

    <!-- Chinese name -->
    <p class="text-3xl md:text-4xl text-ash-500 font-light mb-4 tracking-wider">
      {{ profile.chineseName }}
    </p>

    <!-- Tagline -->
    <p class="text-lg md:text-xl text-ash-300 italic mb-8 max-w-lg mx-auto">
      {{ profile.tagline }}
    </p>

    <!-- Years badges -->
    <div class="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
      <span
        v-for="year in profile.years"
        :key="year"
        class="glass rounded-full px-3 py-1 text-sm font-medium text-ash-200"
      >
        {{ year }}
      </span>
    </div>
  </section>
</template>
