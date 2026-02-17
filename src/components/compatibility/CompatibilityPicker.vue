<script setup lang="ts">
import { computed } from 'vue'
import { signProfiles } from '@/lib/sign-content/profiles'
import type { ZodiacElement } from '@/types'

const props = defineProps<{
  modelValueA: string
  modelValueB: string
}>()

const emit = defineEmits<{
  'update:modelValueA': [value: string]
  'update:modelValueB': [value: string]
  'submit': []
}>()

// Group profiles by element for optgroup display
const ELEMENT_ORDER: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']

const groupedProfiles = computed(() => {
  return ELEMENT_ORDER.map((element) => ({
    element,
    label: element.charAt(0).toUpperCase() + element.slice(1),
    profiles: signProfiles.filter((p) => p.element === element),
  }))
})

const canSubmit = computed(() => {
  return props.modelValueA && props.modelValueB && props.modelValueA !== props.modelValueB
})

function swap() {
  const a = props.modelValueA
  const b = props.modelValueB
  emit('update:modelValueA', b)
  emit('update:modelValueB', a)
}
</script>

<template>
  <div class="glass rounded-2xl p-6">
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <!-- Sign A -->
      <div class="w-full sm:flex-1">
        <label class="block text-ash-400 text-sm mb-2">First Sign</label>
        <select
          :value="modelValueA"
          class="w-full bg-ash-800 text-ash-100 rounded-xl px-4 py-3 border border-ash-700 focus:border-ash-500 focus:outline-none transition-colors"
          @change="emit('update:modelValueA', ($event.target as HTMLSelectElement).value)"
        >
          <option value="" disabled>Select a sign...</option>
          <optgroup v-for="group in groupedProfiles" :key="group.element" :label="group.label">
            <option v-for="profile in group.profiles" :key="profile.slug" :value="profile.slug">
              {{ profile.name }}
            </option>
          </optgroup>
        </select>
      </div>

      <!-- Swap button -->
      <button
        class="mt-6 sm:mt-4 p-3 rounded-xl bg-ash-800 border border-ash-700 text-ash-400 hover:text-ash-100 hover:border-ash-500 transition-all shrink-0"
        title="Swap signs"
        @click="swap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 5a1 1 0 011 1v4.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L7 10.586V6a1 1 0 011-1zm6 10a1 1 0 01-1-1V9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L13 9.414V14a1 1 0 01-1 1z" />
        </svg>
      </button>

      <!-- Sign B -->
      <div class="w-full sm:flex-1">
        <label class="block text-ash-400 text-sm mb-2">Second Sign</label>
        <select
          :value="modelValueB"
          class="w-full bg-ash-800 text-ash-100 rounded-xl px-4 py-3 border border-ash-700 focus:border-ash-500 focus:outline-none transition-colors"
          @change="emit('update:modelValueB', ($event.target as HTMLSelectElement).value)"
        >
          <option value="" disabled>Select a sign...</option>
          <optgroup v-for="group in groupedProfiles" :key="group.element" :label="group.label">
            <option v-for="profile in group.profiles" :key="profile.slug" :value="profile.slug">
              {{ profile.name }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>

    <!-- Submit -->
    <div class="mt-6 text-center">
      <button
        class="btn-element px-8 py-3 text-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
        :disabled="!canSubmit"
        @click="emit('submit')"
      >
        Check Compatibility
      </button>
    </div>
  </div>
</template>
