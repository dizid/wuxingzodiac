// Known compatibility test pairs for verification
export const compatibilityTestPairs = [
  // Trine group — should score high (>75)
  { slugA: 'fire-rat', slugB: 'fire-dragon', expectedHighScore: true, description: 'Rat-Dragon trine (same element)' },
  { slugA: 'wood-ox', slugB: 'wood-snake', expectedHighScore: true, description: 'Ox-Snake trine (same element)' },
  { slugA: 'metal-tiger', slugB: 'metal-horse', expectedHighScore: true, description: 'Tiger-Horse trine (same element)' },

  // Clash pairs — should score low (<50)
  { slugA: 'fire-rat', slugB: 'fire-horse', expectedHighScore: false, description: 'Rat-Horse clash (same element)' },
  { slugA: 'earth-ox', slugB: 'earth-goat', expectedHighScore: false, description: 'Ox-Goat clash (same element)' },
  { slugA: 'water-tiger', slugB: 'water-monkey', expectedHighScore: false, description: 'Tiger-Monkey clash (same element)' },

  // Same sign
  { slugA: 'fire-horse', slugB: 'fire-horse', expectedHighScore: true, description: 'Fire Horse self-compatibility' },

  // Cross-element — generating cycle (support boost)
  { slugA: 'wood-rat', slugB: 'fire-dragon', expectedHighScore: true, description: 'Wood→Fire generating + Rat-Dragon trine' },

  // Cross-element — destructive cycle (friction)
  { slugA: 'fire-horse', slugB: 'metal-monkey', expectedHighScore: false, description: 'Fire→Metal destructive + Horse-Monkey harm' },
] as const

// Pairs to test alphabetical URL ordering
export const canonicalOrderPairs = [
  { input: ['water-rat', 'earth-dog'], expected: '/compatibility/earth-dog/water-rat' },
  { input: ['fire-horse', 'earth-dragon'], expected: '/compatibility/earth-dragon/fire-horse' },
  { input: ['wood-rat', 'wood-rat'], expected: '/compatibility/wood-rat/wood-rat' },
] as const
