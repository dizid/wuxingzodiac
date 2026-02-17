<script setup lang="ts">
withDefaults(defineProps<{
  glow?: boolean
  padding?: string
  hover?: boolean
}>(), {
  glow: false,
  padding: 'p-6',
  hover: true,
})
</script>

<template>
  <div
    class="glass rounded-2xl transition-all duration-300"
    :class="[
      padding,
      { 'element-glow': glow },
      { 'hover:translate-y-[-2px] hover:shadow-lg hover:border-[rgba(var(--el-glow-rgb),0.3)]': hover },
    ]"
  >
    <slot />
  </div>
</template>
