// Subset of sign profiles for test data — one per element
export const sampleSigns = [
  { slug: 'wood-rat', name: 'Wood Rat', element: 'wood', animal: 'rat', chineseName: '甲子', tagline: 'The Resourceful Pioneer' },
  { slug: 'fire-horse', name: 'Fire Horse', element: 'fire', animal: 'horse', chineseName: '丙午', tagline: 'The Untamable Spirit' },
  { slug: 'earth-dragon', name: 'Earth Dragon', element: 'earth', animal: 'dragon', chineseName: '戊辰', tagline: 'The Grounded Sovereign' },
  { slug: 'metal-tiger', name: 'Metal Tiger', element: 'metal', animal: 'tiger', chineseName: '庚寅', tagline: 'The Unyielding Force' },
  { slug: 'water-snake', name: 'Water Snake', element: 'water', animal: 'snake', chineseName: '壬巳', tagline: 'The Intuitive Strategist' },
] as const

// All 60 valid slugs
export const allElements = ['wood', 'fire', 'earth', 'metal', 'water'] as const
export const allAnimals = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const

export function getAllSlugs(): string[] {
  return allElements.flatMap((e) => allAnimals.map((a) => `${e}-${a}`))
}

// Invalid slugs for negative testing
export const invalidSlugs = [
  'fire-unicorn',
  'lightning-horse',
  'fire-cat',
  'invalid-slug',
  'Fire-Horse', // case sensitive
  'fire horse', // spaces
  '',
] as const
