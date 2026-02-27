<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { zodiacElements, zodiacAnimals } from '@/lib/zodiac-data'
import { signProfiles } from '@/lib/sign-content/profiles'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

const props = defineProps<{
  modelValueA: string
  modelValueB: string
}>()

const emit = defineEmits<{
  'update:modelValueA': [value: string]
  'update:modelValueB': [value: string]
  'submit': []
}>()

// Internal state for two-step selection
const elementA = ref<ZodiacElement | null>(null)
const animalA = ref<ZodiacAnimal | null>(null)
const elementB = ref<ZodiacElement | null>(null)
const animalB = ref<ZodiacAnimal | null>(null)

// Resolve current selection display names
function getSignName(element: ZodiacElement | null, animal: ZodiacAnimal | null): string | null {
  if (!element || !animal) return null
  const slug = `${element}-${animal}`
  const profile = signProfiles.find((p) => p.slug === slug)
  return profile?.name ?? null
}

const selectedNameA = computed(() => getSignName(elementA.value, animalA.value))
const selectedNameB = computed(() => getSignName(elementB.value, animalB.value))

// Emit slug when both element + animal are selected
watch([elementA, animalA], ([el, an]) => {
  if (el && an) {
    emit('update:modelValueA', `${el}-${an}`)
  }
})

watch([elementB, animalB], ([el, an]) => {
  if (el && an) {
    emit('update:modelValueB', `${el}-${an}`)
  }
})

// Sync from external v-model (e.g. pre-fill from route)
watch(
  () => props.modelValueA,
  (slug) => {
    if (!slug) return
    const profile = signProfiles.find((p) => p.slug === slug)
    if (profile) {
      elementA.value = profile.element
      animalA.value = profile.animal
    }
  },
  { immediate: true },
)

watch(
  () => props.modelValueB,
  (slug) => {
    if (!slug) return
    const profile = signProfiles.find((p) => p.slug === slug)
    if (profile) {
      elementB.value = profile.element
      animalB.value = profile.animal
    }
  },
  { immediate: true },
)

const canSubmit = computed(() => {
  return props.modelValueA && props.modelValueB && props.modelValueA !== props.modelValueB
})

function swap() {
  const tmpEl = elementA.value
  const tmpAn = animalA.value
  elementA.value = elementB.value
  animalA.value = animalB.value
  elementB.value = tmpEl
  animalB.value = tmpAn
}

// Element color map for ring styling
const elementColors: Record<ZodiacElement, string> = {
  wood: 'ring-wood-500',
  fire: 'ring-fire-500',
  earth: 'ring-earth-500',
  metal: 'ring-metal-400',
  water: 'ring-water-500',
}

const elementBgColors: Record<ZodiacElement, string> = {
  wood: 'bg-wood-500/20',
  fire: 'bg-fire-500/20',
  earth: 'bg-earth-500/20',
  metal: 'bg-metal-400/20',
  water: 'bg-water-500/20',
}

const elementTextColors: Record<ZodiacElement, string> = {
  wood: 'text-wood-400',
  fire: 'text-fire-400',
  earth: 'text-earth-400',
  metal: 'text-metal-300',
  water: 'text-water-400',
}
</script>

<template>
  <div class="glass rounded-2xl p-4 sm:p-6">
    <!-- Sign A picker -->
    <div class="mb-4">
      <div class="flex items-center justify-between mb-2">
        <label class="text-ash-400 text-sm">First Sign</label>
        <span v-if="selectedNameA" class="text-ash-200 text-sm font-medium">{{ selectedNameA }}</span>
      </div>

      <!-- Element icons row -->
      <div class="flex gap-1.5 mb-2">
        <button
          v-for="el in zodiacElements"
          :key="el.element"
          class="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg border transition-all text-center min-w-0"
          :class="elementA === el.element
            ? `${elementBgColors[el.element]} ${elementColors[el.element]} ring-2 border-transparent`
            : 'border-ash-700 hover:border-ash-500 bg-ash-800/50'"
          @click="elementA = el.element; animalA = null; emit('update:modelValueA', '')"
        >
          <span class="text-lg leading-none">{{ el.emoji }}</span>
          <span class="text-[10px] leading-tight" :class="elementA === el.element ? elementTextColors[el.element] : 'text-ash-500'">{{ el.name }}</span>
        </button>
      </div>

      <!-- Animal grid (shown after element selected) -->
      <div v-if="elementA" class="grid grid-cols-4 gap-1">
        <button
          v-for="an in zodiacAnimals"
          :key="an.animal"
          class="flex items-center gap-1 px-2 py-1.5 rounded-lg border transition-all text-left min-w-0"
          :class="animalA === an.animal
            ? `${elementBgColors[elementA]} ${elementColors[elementA]} ring-2 border-transparent`
            : 'border-ash-700/50 hover:border-ash-500 bg-ash-800/30'"
          @click="animalA = an.animal"
        >
          <span class="text-sm leading-none shrink-0">{{ an.emoji }}</span>
          <span class="text-xs truncate" :class="animalA === an.animal ? 'text-ash-100' : 'text-ash-400'">{{ an.name }}</span>
        </button>
      </div>
    </div>

    <!-- Swap button -->
    <div class="flex justify-center my-2">
      <button
        class="p-2 rounded-xl bg-ash-800 border border-ash-700 text-ash-400 hover:text-ash-100 hover:border-ash-500 transition-all"
        title="Swap signs"
        @click="swap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 5a1 1 0 011 1v4.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L7 10.586V6a1 1 0 011-1zm6 10a1 1 0 01-1-1V9.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L13 9.414V14a1 1 0 01-1 1z" />
        </svg>
      </button>
    </div>

    <!-- Sign B picker -->
    <div class="mb-4">
      <div class="flex items-center justify-between mb-2">
        <label class="text-ash-400 text-sm">Second Sign</label>
        <span v-if="selectedNameB" class="text-ash-200 text-sm font-medium">{{ selectedNameB }}</span>
      </div>

      <!-- Element icons row -->
      <div class="flex gap-1.5 mb-2">
        <button
          v-for="el in zodiacElements"
          :key="el.element"
          class="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-lg border transition-all text-center min-w-0"
          :class="elementB === el.element
            ? `${elementBgColors[el.element]} ${elementColors[el.element]} ring-2 border-transparent`
            : 'border-ash-700 hover:border-ash-500 bg-ash-800/50'"
          @click="elementB = el.element; animalB = null; emit('update:modelValueB', '')"
        >
          <span class="text-lg leading-none">{{ el.emoji }}</span>
          <span class="text-[10px] leading-tight" :class="elementB === el.element ? elementTextColors[el.element] : 'text-ash-500'">{{ el.name }}</span>
        </button>
      </div>

      <!-- Animal grid -->
      <div v-if="elementB" class="grid grid-cols-4 gap-1">
        <button
          v-for="an in zodiacAnimals"
          :key="an.animal"
          class="flex items-center gap-1 px-2 py-1.5 rounded-lg border transition-all text-left min-w-0"
          :class="animalB === an.animal
            ? `${elementBgColors[elementB]} ${elementColors[elementB]} ring-2 border-transparent`
            : 'border-ash-700/50 hover:border-ash-500 bg-ash-800/30'"
          @click="animalB = an.animal"
        >
          <span class="text-sm leading-none shrink-0">{{ an.emoji }}</span>
          <span class="text-xs truncate" :class="animalB === an.animal ? 'text-ash-100' : 'text-ash-400'">{{ an.name }}</span>
        </button>
      </div>
    </div>

    <!-- Submit -->
    <div class="text-center">
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
