import { computed, watch, onUnmounted, type Ref } from 'vue'
import type { ZodiacElement } from '@/types'

export interface ElementConfig {
  name: string
  chinese: string
  emoji: string
  primary: string
  accent: string
  glowRgb: string
}

const ELEMENT_CONFIGS: Record<ZodiacElement, ElementConfig> = {
  wood: { name: 'Wood', chinese: '木', emoji: '🌳', primary: '#22c55e', accent: '#86efac', glowRgb: '34, 197, 94' },
  fire: { name: 'Fire', chinese: '火', emoji: '🔥', primary: '#f97316', accent: '#fbbf24', glowRgb: '249, 115, 22' },
  earth: { name: 'Earth', chinese: '土', emoji: '🌍', primary: '#d97706', accent: '#fbbf24', glowRgb: '217, 119, 6' },
  metal: { name: 'Metal', chinese: '金', emoji: '🪙', primary: '#94a3b8', accent: '#e2e8f0', glowRgb: '148, 163, 184' },
  water: { name: 'Water', chinese: '水', emoji: '🌊', primary: '#3b82f6', accent: '#93c5fd', glowRgb: '59, 130, 246' },
}

/**
 * Manages the active element theme on the document root.
 * Sets `data-element` attribute which activates CSS custom properties
 * defined in main.css for the corresponding element palette.
 */
export function useElementTheme(element: Ref<ZodiacElement | null>) {
  const config = computed<ElementConfig | null>(() => {
    return element.value ? ELEMENT_CONFIGS[element.value] : null
  })

  function applyTheme(el: ZodiacElement | null) {
    if (typeof document === 'undefined') return

    if (el) {
      document.documentElement.setAttribute('data-element', el)
    } else {
      document.documentElement.removeAttribute('data-element')
    }
  }

  // Watch for element changes and apply theme
  const stopWatch = watch(element, (newElement) => {
    applyTheme(newElement)
  }, { immediate: true })

  // Clean up on unmount: remove attribute and stop watcher
  onUnmounted(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.removeAttribute('data-element')
    }
    stopWatch()
  })

  return {
    config,
    ELEMENT_CONFIGS,
  }
}
