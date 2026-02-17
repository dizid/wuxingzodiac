<script setup lang="ts">
import type { LuckySection } from '@/types'

defineProps<{
  lucky: LuckySection
}>()
</script>

<template>
  <section>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Lucky Numbers -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Lucky Numbers</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="n in lucky.numbers"
            :key="n"
            class="w-10 h-10 rounded-full bg-[var(--el-600)]/20 text-[var(--el-accent)] flex items-center justify-center font-bold text-lg"
          >
            {{ n }}
          </span>
        </div>
      </div>

      <!-- Lucky Colors -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Lucky Colors</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="color in lucky.colors"
            :key="color"
            class="flex items-center gap-2 text-ash-300"
          >
            <span
              class="w-4 h-4 rounded-full border border-ash-600"
              :style="{ backgroundColor: color.toLowerCase() }"
            />
            {{ color }}
          </span>
        </div>
      </div>

      <!-- Direction -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Lucky Direction</h3>
        <p class="text-ash-300 text-lg">{{ lucky.direction }}</p>
      </div>

      <!-- Gemstones -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Gemstones</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="gem in lucky.gemstones"
            :key="gem"
            class="glass rounded-full px-3 py-1 text-sm text-[var(--el-accent)]"
          >
            {{ gem }}
          </span>
        </div>
      </div>

      <!-- Flowers -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Flowers</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="flower in lucky.flowers"
            :key="flower"
            class="glass rounded-full px-3 py-1 text-sm text-[var(--el-accent)]"
          >
            {{ flower }}
          </span>
        </div>
      </div>

      <!-- Season -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Lucky Season</h3>
        <p class="text-ash-300 text-lg">{{ lucky.season }}</p>
      </div>
    </div>
  </section>
</template>
