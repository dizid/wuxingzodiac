// ============================================
// WU XING FIVE-ELEMENT CYCLE UTILITIES
// Shared logic for generating/overcoming relationships
// ============================================

import type { ZodiacElement, WuXingRelationship } from '@/types'

// Generative cycle: Wood -> Fire -> Earth -> Metal -> Water -> Wood
export const GENERATES: Record<ZodiacElement, ZodiacElement> = {
  wood: 'fire',
  fire: 'earth',
  earth: 'metal',
  metal: 'water',
  water: 'wood',
}

// Destructive cycle: Wood -> Earth -> Water -> Fire -> Metal -> Wood
export const DESTROYS: Record<ZodiacElement, ZodiacElement> = {
  wood: 'earth',
  fire: 'metal',
  earth: 'water',
  metal: 'wood',
  water: 'fire',
}

// Reverse lookups
const GENERATED_BY: Record<ZodiacElement, ZodiacElement> = {
  wood: 'water',
  fire: 'wood',
  earth: 'fire',
  metal: 'earth',
  water: 'metal',
}

const OVERCOMED_BY: Record<ZodiacElement, ZodiacElement> = {
  wood: 'metal',
  fire: 'water',
  earth: 'wood',
  metal: 'fire',
  water: 'earth',
}

export const ELEMENTS: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']

export const ELEMENT_LABELS: Record<ZodiacElement, string> = {
  wood: 'Wood',
  fire: 'Fire',
  earth: 'Earth',
  metal: 'Metal',
  water: 'Water',
}

export const ELEMENT_EMOJIS: Record<ZodiacElement, string> = {
  wood: '🌳',
  fire: '🔥',
  earth: '⛰️',
  metal: '⚔️',
  water: '🌊',
}

// Element colors for charts (matching the theme system)
export const ELEMENT_CHART_COLORS: Record<ZodiacElement, string> = {
  wood: '#22c55e',
  fire: '#f97316',
  earth: '#d97706',
  metal: '#94a3b8',
  water: '#3b82f6',
}

/**
 * Get all Wu Xing relationships for an element.
 */
export function getRelationships(element: ZodiacElement): WuXingRelationship {
  return {
    generates: GENERATES[element],
    generatedBy: GENERATED_BY[element],
    overcomes: DESTROYS[element],
    overcomedBy: OVERCOMED_BY[element],
  }
}

/**
 * Describe the relationship between two elements in human-readable form.
 */
export function describeRelationship(from: ZodiacElement, to: ZodiacElement): string {
  const fromLabel = ELEMENT_LABELS[from]
  const toLabel = ELEMENT_LABELS[to]

  if (from === to) return `Same element — deep understanding and natural resonance`
  if (GENERATES[from] === to) return `${fromLabel} feeds ${toLabel} — naturally supportive and nurturing`
  if (GENERATES[to] === from) return `${toLabel} feeds ${fromLabel} — draws strength from ${toLabel}'s energy`
  if (DESTROYS[from] === to) return `${fromLabel} overcomes ${toLabel} — a challenging dynamic requiring compromise`
  if (DESTROYS[to] === from) return `${toLabel} overcomes ${fromLabel} — may feel constrained, but tension drives growth`
  return `${fromLabel} and ${toLabel} have no direct Wu Xing connection`
}

/**
 * Get the relationship type between two elements.
 */
export function getRelationshipType(
  from: ZodiacElement,
  to: ZodiacElement,
): 'same' | 'generates' | 'generated-by' | 'overcomes' | 'overcomed-by' | 'neutral' {
  if (from === to) return 'same'
  if (GENERATES[from] === to) return 'generates'
  if (GENERATES[to] === from) return 'generated-by'
  if (DESTROYS[from] === to) return 'overcomes'
  if (DESTROYS[to] === from) return 'overcomed-by'
  return 'neutral'
}

/**
 * Find the bridging element between two clashing elements.
 * The bridge is the element between them in the generative cycle:
 * If A destroys B, the bridge is what A generates (which also generates B's generator).
 */
export function getBridgingElement(
  elementA: ZodiacElement,
  elementB: ZodiacElement,
): ZodiacElement | null {
  // A destroys B -> bridge is GENERATES[A] (sits between A and B in the creative cycle)
  if (DESTROYS[elementA] === elementB) return GENERATES[elementA]
  // B destroys A -> bridge is GENERATES[B]
  if (DESTROYS[elementB] === elementA) return GENERATES[elementB]
  // No destructive relationship, no bridge needed
  return null
}
