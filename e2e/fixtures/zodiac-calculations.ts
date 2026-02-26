// Birth date → expected sign mappings for zodiac calculation tests
// Format: { year, month, day, expectedElement, expectedAnimal, expectedSlug, description }

export const zodiacCalculationTests = [
  // Iconic Fire Horse years
  { year: 1966, month: 3, day: 1, expectedElement: 'fire', expectedAnimal: 'horse', expectedSlug: 'fire-horse', description: '1966 Fire Horse (after LNY Jan 21)' },
  { year: 2026, month: 2, day: 18, expectedElement: 'fire', expectedAnimal: 'horse', expectedSlug: 'fire-horse', description: '2026 Fire Horse (after LNY Feb 17)' },

  // Lunar New Year boundary tests
  { year: 2026, month: 2, day: 16, expectedElement: 'wood', expectedAnimal: 'snake', expectedSlug: 'wood-snake', description: '2026 before LNY (Feb 17) → 2025 Wood Snake' },
  { year: 2026, month: 2, day: 17, expectedElement: 'fire', expectedAnimal: 'horse', expectedSlug: 'fire-horse', description: '2026 on LNY (Feb 17) → 2026 Fire Horse' },
  { year: 1990, month: 1, day: 26, expectedElement: 'earth', expectedAnimal: 'snake', expectedSlug: 'earth-snake', description: '1990 before LNY (Jan 27) → 1989 Earth Snake' },
  { year: 1990, month: 1, day: 27, expectedElement: 'metal', expectedAnimal: 'horse', expectedSlug: 'metal-horse', description: '1990 on LNY (Jan 27) → Metal Horse' },

  // Y2K
  { year: 2000, month: 2, day: 5, expectedElement: 'metal', expectedAnimal: 'dragon', expectedSlug: 'metal-dragon', description: '2000 on LNY (Feb 5) → Metal Dragon' },
  { year: 2000, month: 2, day: 4, expectedElement: 'earth', expectedAnimal: 'rabbit', expectedSlug: 'earth-rabbit', description: '2000 before LNY (Feb 5) → 1999 Earth Rabbit' },

  // Edge of range
  { year: 1924, month: 2, day: 5, expectedElement: 'wood', expectedAnimal: 'rat', expectedSlug: 'wood-rat', description: 'Earliest year on LNY 1924' },
  { year: 2043, month: 12, day: 31, expectedElement: 'water', expectedAnimal: 'pig', expectedSlug: 'water-pig', description: 'Latest year end 2043' },

  // Year-end (no LNY ambiguity)
  { year: 1999, month: 12, day: 31, expectedElement: 'earth', expectedAnimal: 'rabbit', expectedSlug: 'earth-rabbit', description: 'Year-end 1999 Dec 31' },
  { year: 2000, month: 1, day: 1, expectedElement: 'earth', expectedAnimal: 'rabbit', expectedSlug: 'earth-rabbit', description: 'Year-start 2000 Jan 1 before LNY' },

  // Element verification (last digit mapping)
  { year: 1980, month: 7, day: 1, expectedElement: 'metal', expectedAnimal: 'monkey', expectedSlug: 'metal-monkey', description: '1980 = Metal (last digit 0)' },
  { year: 1982, month: 7, day: 1, expectedElement: 'water', expectedAnimal: 'dog', expectedSlug: 'water-dog', description: '1982 = Water (last digit 2)' },
  { year: 1984, month: 7, day: 1, expectedElement: 'wood', expectedAnimal: 'rat', expectedSlug: 'wood-rat', description: '1984 = Wood (last digit 4)' },
  { year: 1986, month: 7, day: 1, expectedElement: 'fire', expectedAnimal: 'tiger', expectedSlug: 'fire-tiger', description: '1986 = Fire (last digit 6)' },
  { year: 1988, month: 7, day: 1, expectedElement: 'earth', expectedAnimal: 'dragon', expectedSlug: 'earth-dragon', description: '1988 = Earth (last digit 8)' },
] as const

// Tests verifying all 12 animals are reachable
export const allAnimalsTests = [
  { year: 1984, month: 7, day: 1, expectedAnimal: 'rat' },
  { year: 1985, month: 7, day: 1, expectedAnimal: 'ox' },
  { year: 1986, month: 7, day: 1, expectedAnimal: 'tiger' },
  { year: 1987, month: 7, day: 1, expectedAnimal: 'rabbit' },
  { year: 1988, month: 7, day: 1, expectedAnimal: 'dragon' },
  { year: 1989, month: 7, day: 1, expectedAnimal: 'snake' },
  { year: 1990, month: 7, day: 1, expectedAnimal: 'horse' },
  { year: 1991, month: 7, day: 1, expectedAnimal: 'goat' },
  { year: 1992, month: 7, day: 1, expectedAnimal: 'monkey' },
  { year: 1993, month: 7, day: 1, expectedAnimal: 'rooster' },
  { year: 1994, month: 7, day: 1, expectedAnimal: 'dog' },
  { year: 1995, month: 7, day: 1, expectedAnimal: 'pig' },
] as const
