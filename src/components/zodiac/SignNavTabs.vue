<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

interface Tab {
  key: string
  label: string
}

const props = defineProps<{
  activeSection: string
}>()

const emit = defineEmits<{
  'update:activeSection': [value: string]
}>()

const tabs: Tab[] = [
  { key: 'personality', label: 'Personality' },
  { key: 'compatibility', label: 'Compatibility' },
  { key: 'career', label: 'Career' },
  { key: 'love', label: 'Love' },
  { key: 'health', label: 'Health' },
  { key: 'lucky', label: 'Lucky' },
  { key: 'famous', label: 'Famous' },
  { key: 'culture', label: 'Culture' },
  { key: 'horoscope', label: 'Horoscope' },
  { key: 'shop', label: 'Shop' },
]

const tabsContainer = ref<HTMLElement | null>(null)

function selectTab(key: string) {
  emit('update:activeSection', key)
}

// Scroll active tab into view on change
watch(() => props.activeSection, async () => {
  await nextTick()
  const container = tabsContainer.value
  if (!container) return
  const activeBtn = container.querySelector('[data-active="true"]') as HTMLElement | null
  if (activeBtn) {
    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
})
</script>

<template>
  <nav class="sticky top-0 z-30 glass-strong py-2">
    <div
      ref="tabsContainer"
      class="flex gap-1 overflow-x-auto px-4 scrollbar-hide max-w-5xl mx-auto"
    >
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :data-active="activeSection === tab.key"
        class="shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap"
        :class="activeSection === tab.key
          ? 'bg-[var(--el-600)]/20 text-[var(--el-accent)] border border-[var(--el-500)]/30'
          : 'text-ash-400 hover:text-ash-200 hover:bg-ash-800/50'"
        @click="selectTab(tab.key)"
      >
        {{ tab.label }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* Hide scrollbar but keep scroll functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
