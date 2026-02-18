<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ZodiacElement, ZodiacAnimal } from '@/types'
import { signProfiles } from '@/lib/sign-content/profiles'

const props = defineProps<{
  element: ZodiacElement
  animal: ZodiacAnimal
  currentSlug: string
}>()

// Capitalize first letter
function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/** All other signs sharing the same element (11 signs, different animals) */
const sameElementSigns = computed(() =>
  signProfiles.filter(
    (p) => p.element === props.element && p.slug !== props.currentSlug,
  ),
)

/** All other signs sharing the same animal (4 signs, different elements) */
const sameAnimalSigns = computed(() =>
  signProfiles.filter(
    (p) => p.animal === props.animal && p.slug !== props.currentSlug,
  ),
)
</script>

<template>
  <div class="glass rounded-2xl p-5 md:p-6">
    <h2 class="font-display text-lg font-semibold text-ash-200 mb-5">
      Explore Related Signs
    </h2>

    <!-- Same element section -->
    <div class="mb-5">
      <p class="text-xs font-semibold uppercase tracking-widest text-ash-500 mb-3">
        Other {{ cap(element) }} Signs
      </p>
      <div class="flex flex-wrap gap-2">
        <RouterLink
          v-for="profile in sameElementSigns"
          :key="profile.slug"
          :to="`/zodiac/${profile.slug}`"
          class="sibling-pill sibling-pill--element inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200"
        >
          {{ profile.name }}
        </RouterLink>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-ash-800 mb-5" />

    <!-- Same animal section -->
    <div>
      <p class="text-xs font-semibold uppercase tracking-widest text-ash-500 mb-3">
        Other {{ cap(animal) }} Signs
      </p>
      <div class="flex flex-wrap gap-2">
        <RouterLink
          v-for="profile in sameAnimalSigns"
          :key="profile.slug"
          :to="`/zodiac/${profile.slug}`"
          class="inline-flex items-center rounded-full border border-ash-700 px-3 py-1 text-sm font-medium text-ash-300 transition-colors duration-200 hover:border-[var(--el-600)] hover:text-[var(--el-200)] hover:bg-[var(--el-950)]"
        >
          {{ profile.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Element-themed pills — uses CSS custom properties set by useElementTheme on the sign page */
.sibling-pill--element {
  border-color: var(--el-700);
  color: var(--el-300);
}

.sibling-pill--element:hover {
  border-color: var(--el-500);
  color: var(--el-100);
  background-color: color-mix(in srgb, var(--el-900) 60%, transparent);
}
</style>
