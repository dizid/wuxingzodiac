<script setup lang="ts">
import { ref, computed } from 'vue'
import type { MerchProductType } from '@/types/merch'

const props = defineProps<{
  productType: MerchProductType | null
}>()

const open = ref(false)

interface SizeRow {
  size: string
  chest: string
  length: string
  sleeve: string
}

// Bella+Canvas 3001 / standard Printful sizing
const SIZE_DATA: Partial<Record<MerchProductType, SizeRow[]>> = {
  't-shirt': [
    { size: 'S', chest: '36–38', length: '28', sleeve: '8' },
    { size: 'M', chest: '39–41', length: '29', sleeve: '8.5' },
    { size: 'L', chest: '42–44', length: '30', sleeve: '9' },
    { size: 'XL', chest: '45–47', length: '31', sleeve: '9.5' },
    { size: '2XL', chest: '48–50', length: '32', sleeve: '10' },
  ],
  'hoodie': [
    { size: 'S', chest: '38–40', length: '27', sleeve: '24' },
    { size: 'M', chest: '41–43', length: '28', sleeve: '24.5' },
    { size: 'L', chest: '44–46', length: '29', sleeve: '25' },
    { size: 'XL', chest: '47–49', length: '30', sleeve: '25.5' },
    { size: '2XL', chest: '50–52', length: '31', sleeve: '26' },
  ],
}

const rows = computed(() => props.productType ? SIZE_DATA[props.productType] || null : null)
</script>

<template>
  <div v-if="rows">
    <!-- Trigger link -->
    <button
      class="text-xs transition-colors"
      style="color: var(--el-accent);"
      @click.stop="open = true"
    >
      Size Guide
    </button>

    <!-- Size guide popup -->
    <teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="open"
          class="fixed inset-0 z-[73] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          @click="open = false"
        >
          <div
            class="glass-strong rounded-2xl p-6 max-w-sm w-full mx-4"
            @click.stop
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="element-text font-display text-lg font-bold">Size Guide</h3>
              <button
                class="w-7 h-7 flex items-center justify-center rounded-full bg-ash-800 text-ash-400 hover:text-ash-200 transition-colors"
                aria-label="Close size guide"
                @click="open = false"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-ash-400 text-xs uppercase tracking-wider border-b border-ash-700/50">
                    <th class="text-left py-2 pr-3">Size</th>
                    <th class="text-left py-2 pr-3">Chest</th>
                    <th class="text-left py-2 pr-3">Length</th>
                    <th class="text-left py-2">Sleeve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in rows"
                    :key="row.size"
                    class="border-b border-ash-800/50 text-ash-300"
                  >
                    <td class="py-2 pr-3 font-medium text-ash-100">{{ row.size }}</td>
                    <td class="py-2 pr-3">{{ row.chest }}"</td>
                    <td class="py-2 pr-3">{{ row.length }}"</td>
                    <td class="py-2">{{ row.sleeve }}"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p class="text-ash-500 text-xs mt-3">
              Measurements in inches. For a relaxed fit, size up.
            </p>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
