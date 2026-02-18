<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface CTAButton {
  label: string
  to: string
}

const props = defineProps<{
  primary: CTAButton
  secondary?: CTAButton
}>()
</script>

<template>
  <div class="glass rounded-2xl p-6 md:p-8 text-center">
    <!-- Decorative heading -->
    <div class="flex items-center justify-center gap-3 mb-6">
      <div class="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--el-700)]" />
      <span class="font-display text-sm font-semibold uppercase tracking-widest text-[var(--el-400)]">
        What&rsquo;s Next?
      </span>
      <div class="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--el-700)]" />
    </div>

    <!-- Buttons -->
    <div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <!-- Primary button — element-themed, large -->
      <RouterLink
        :to="props.primary.to"
        class="btn-element w-full px-6 py-3 text-base font-semibold sm:w-auto"
      >
        {{ props.primary.label }}
      </RouterLink>

      <!-- Secondary button — outlined, only rendered when provided -->
      <RouterLink
        v-if="props.secondary"
        :to="props.secondary.to"
        class="inline-flex w-full items-center justify-center rounded-full border border-ash-600 px-5 py-2.5 text-sm font-medium text-ash-300 transition-colors duration-200 hover:border-ash-400 hover:text-ash-100 sm:w-auto"
      >
        {{ props.secondary.label }}
      </RouterLink>
    </div>
  </div>
</template>
