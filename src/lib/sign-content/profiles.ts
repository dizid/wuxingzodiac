// ============================================
// ALL 60 SIGN PROFILES — Wu Xing Zodiac
// ============================================
// Ordered by element (wood, fire, earth, metal, water)
// then by traditional animal sequence within each element.
//
// Chinese names use the Heavenly Stem (yang) + Earthly Branch:
//   Stems:  Wood=甲  Fire=丙  Earth=戊  Metal=庚  Water=壬
//   Branches: Rat=子 Ox=丑 Tiger=寅 Rabbit=卯 Dragon=辰 Snake=巳
//             Horse=午 Goat=未 Monkey=申 Rooster=酉 Dog=戌 Pig=亥
//
// Year calculation:
//   Element by last digit: 0,1=metal  2,3=water  4,5=wood  6,7=fire  8,9=earth
//   Animal by year%12: 4=rat 5=ox 6=tiger 7=rabbit 8=dragon 9=snake
//                      10=horse 11=goat 0=monkey 1=rooster 2=dog 3=pig
//   Each combo repeats every 60 years. Range: 1804-2103.

import type { SignProfile, ZodiacAnimal, ZodiacElement } from '@/types'

// -- Lookup tables for year calculation --

const ELEMENT_BY_DIGIT: Record<number, ZodiacElement> = {
  0: 'metal', 1: 'metal',
  2: 'water', 3: 'water',
  4: 'wood',  5: 'wood',
  6: 'fire',  7: 'fire',
  8: 'earth', 9: 'earth',
}

const ANIMAL_BY_MOD: Record<number, ZodiacAnimal> = {
  4: 'rat',    5: 'ox',      6: 'tiger',  7: 'rabbit',
  8: 'dragon', 9: 'snake',  10: 'horse', 11: 'goat',
  0: 'monkey', 1: 'rooster', 2: 'dog',    3: 'pig',
}

/** Compute the matching years for an element-animal pair in range 1804-2103. */
function computeYears(element: ZodiacElement, animal: ZodiacAnimal): number[] {
  const years: number[] = []
  for (let y = 1804; y <= 2103; y++) {
    const lastDigit = y % 10
    const animalMod = y % 12
    if (ELEMENT_BY_DIGIT[lastDigit] === element && ANIMAL_BY_MOD[animalMod] === animal) {
      years.push(y)
    }
  }
  return years
}

// -- Heavenly stems & earthly branches for Chinese name --

const YANG_STEMS: Record<ZodiacElement, string> = {
  wood: '甲', fire: '丙', earth: '戊', metal: '庚', water: '壬',
}

const EARTHLY_BRANCHES: Record<ZodiacAnimal, string> = {
  rat: '子',    ox: '丑',     tiger: '寅',  rabbit: '卯',
  dragon: '辰', snake: '巳',  horse: '午',  goat: '未',
  monkey: '申', rooster: '酉', dog: '戌',   pig: '亥',
}

function chineseName(element: ZodiacElement, animal: ZodiacAnimal): string {
  return YANG_STEMS[element] + EARTHLY_BRANCHES[animal]
}

function displayName(element: ZodiacElement, animal: ZodiacAnimal): string {
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
  return `${cap(element)} ${cap(animal)}`
}

function slug(element: ZodiacElement, animal: ZodiacAnimal): string {
  return `${element}-${animal}`
}

// -- Taglines for all 60 signs --

const TAGLINES: Record<string, string> = {
  // Wood (甲)
  'wood-rat':     'The Resourceful Pioneer',
  'wood-ox':      'The Steadfast Cultivator',
  'wood-tiger':   'The Compassionate Adventurer',
  'wood-rabbit':  'The Gentle Visionary',
  'wood-dragon':  'The Creative Titan',
  'wood-snake':   'The Thoughtful Philosopher',
  'wood-horse':   'The Free-Spirited Wanderer',
  'wood-goat':    'The Artistic Dreamer',
  'wood-monkey':  'The Inventive Trickster',
  'wood-rooster': 'The Principled Craftsman',
  'wood-dog':     'The Loyal Guardian',
  'wood-pig':     'The Generous Soul',

  // Fire (丙)
  'fire-rat':     'The Blazing Opportunist',
  'fire-ox':      'The Relentless Forge',
  'fire-tiger':   'The Fearless Inferno',
  'fire-rabbit':  'The Radiant Diplomat',
  'fire-dragon':  'The Celestial Blaze',
  'fire-snake':   'The Mesmerizing Flame',
  'fire-horse':   'The Untamable Spirit',
  'fire-goat':    'The Passionate Creator',
  'fire-monkey':  'The Daring Catalyst',
  'fire-rooster': 'The Bold Perfectionist',
  'fire-dog':     'The Fierce Protector',
  'fire-pig':     'The Warm-Hearted Champion',

  // Earth (戊)
  'earth-rat':    'The Grounded Strategist',
  'earth-ox':     'The Immovable Mountain',
  'earth-tiger':  'The Patient Warrior',
  'earth-rabbit': 'The Serene Mediator',
  'earth-dragon': 'The Sovereign Builder',
  'earth-snake':  'The Silent Authority',
  'earth-horse':  'The Enduring Trailblazer',
  'earth-goat':   'The Nurturing Architect',
  'earth-monkey': 'The Pragmatic Innovator',
  'earth-rooster':'The Diligent Master',
  'earth-dog':    'The Unwavering Sentinel',
  'earth-pig':    'The Abundant Provider',

  // Metal (庚)
  'metal-rat':    'The Sharp-Witted Survivor',
  'metal-ox':     'The Iron Pillar',
  'metal-tiger':  'The Steel Enforcer',
  'metal-rabbit': 'The Polished Strategist',
  'metal-dragon': 'The Iron Emperor',
  'metal-snake':  'The Calculating Blade',
  'metal-horse':  'The Armored Charger',
  'metal-goat':   'The Refined Artisan',
  'metal-monkey': 'The Cunning Alchemist',
  'metal-rooster':'The Unyielding Critic',
  'metal-dog':    'The Resolute Knight',
  'metal-pig':    'The Benevolent Stronghold',

  // Water (壬)
  'water-rat':    'The Fluid Strategist',
  'water-ox':     'The Deep Current',
  'water-tiger':  'The Intuitive Hunter',
  'water-rabbit': 'The Flowing Peacemaker',
  'water-dragon': 'The Tidal Force',
  'water-snake':  'The Enigmatic Depths',
  'water-horse':  'The Adaptive Nomad',
  'water-goat':   'The Empathic Healer',
  'water-monkey': 'The Quicksilver Mind',
  'water-rooster':'The Perceptive Observer',
  'water-dog':    'The Faithful Tide',
  'water-pig':    'The Boundless Heart',
}

// -- Build all 60 profiles --

const ELEMENTS: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
const ANIMALS: ZodiacAnimal[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
]

function buildProfiles(): SignProfile[] {
  const profiles: SignProfile[] = []

  for (const element of ELEMENTS) {
    for (const animal of ANIMALS) {
      const s = slug(element, animal)
      profiles.push({
        slug: s,
        animal,
        element,
        name: displayName(element, animal),
        chineseName: chineseName(element, animal),
        tagline: TAGLINES[s] ?? '',
        years: computeYears(element, animal),
      })
    }
  }

  return profiles
}

export const signProfiles: SignProfile[] = buildProfiles()

// -- Helper functions --

/** Find a profile by its URL slug (e.g. 'fire-horse'). */
export function getProfileBySlug(slug: string): SignProfile | undefined {
  return signProfiles.find((p) => p.slug === slug)
}

/** Get all 5 profiles for a given animal (one per element). */
export function getProfilesByAnimal(animal: ZodiacAnimal): SignProfile[] {
  return signProfiles.filter((p) => p.animal === animal)
}

/** Get all 12 profiles for a given element (one per animal). */
export function getProfilesByElement(element: ZodiacElement): SignProfile[] {
  return signProfiles.filter((p) => p.element === element)
}
