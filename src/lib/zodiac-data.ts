// ============================================
// ZODIAC DATA MODULE
// Core zodiac data, calculations, and helpers
// Ported and expanded from firehorse.info
// ============================================

import type { ZodiacAnimal, ZodiacElement } from '@/types'

// ============================================
// ZODIAC ANIMALS (12-year cycle)
// ============================================

export interface ZodiacAnimalData {
  animal: ZodiacAnimal
  name: string
  emoji: string
  chinese: string
  years: number[]
}

export const zodiacAnimals: ZodiacAnimalData[] = [
  {
    animal: 'rat',
    name: 'Rat',
    emoji: '\u{1F400}',
    chinese: '\u9F20',
    years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032]
  },
  {
    animal: 'ox',
    name: 'Ox',
    emoji: '\u{1F402}',
    chinese: '\u725B',
    years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033]
  },
  {
    animal: 'tiger',
    name: 'Tiger',
    emoji: '\u{1F405}',
    chinese: '\u864E',
    years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034]
  },
  {
    animal: 'rabbit',
    name: 'Rabbit',
    emoji: '\u{1F407}',
    chinese: '\u5154',
    years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035]
  },
  {
    animal: 'dragon',
    name: 'Dragon',
    emoji: '\u{1F409}',
    chinese: '\u9F99',
    years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036]
  },
  {
    animal: 'snake',
    name: 'Snake',
    emoji: '\u{1F40D}',
    chinese: '\u86C7',
    years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037]
  },
  {
    animal: 'horse',
    name: 'Horse',
    emoji: '\u{1F40E}',
    chinese: '\u9A6C',
    years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038]
  },
  {
    animal: 'goat',
    name: 'Goat',
    emoji: '\u{1F410}',
    chinese: '\u7F8A',
    years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039]
  },
  {
    animal: 'monkey',
    name: 'Monkey',
    emoji: '\u{1F412}',
    chinese: '\u7334',
    years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040]
  },
  {
    animal: 'rooster',
    name: 'Rooster',
    emoji: '\u{1F413}',
    chinese: '\u9E21',
    years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041]
  },
  {
    animal: 'dog',
    name: 'Dog',
    emoji: '\u{1F415}',
    chinese: '\u72D7',
    years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042]
  },
  {
    animal: 'pig',
    name: 'Pig',
    emoji: '\u{1F416}',
    chinese: '\u732A',
    years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043]
  }
]

// ============================================
// ZODIAC ELEMENTS (Wu Xing / Five Phases)
// ============================================

export interface ZodiacElementData {
  element: ZodiacElement
  name: string
  color: string
  emoji: string
  chinese: string
}

export const zodiacElements: ZodiacElementData[] = [
  { element: 'wood', name: 'Wood', color: '#22c55e', emoji: '\u{1F333}', chinese: '\u6728' },
  { element: 'fire', name: 'Fire', color: '#f97316', emoji: '\u{1F525}', chinese: '\u706B' },
  { element: 'earth', name: 'Earth', color: '#d97706', emoji: '\u{1F30D}', chinese: '\u571F' },
  { element: 'metal', name: 'Metal', color: '#94a3b8', emoji: '\u{1FA99}', chinese: '\u91D1' },
  { element: 'water', name: 'Water', color: '#3b82f6', emoji: '\u{1F30A}', chinese: '\u6C34' }
]

// ============================================
// ELEMENT CALCULATION
// Based on the last digit of the year:
//   0,1 = Metal
//   2,3 = Water
//   4,5 = Wood
//   6,7 = Fire
//   8,9 = Earth
// ============================================

const lastDigitToElement: Record<number, ZodiacElement> = {
  0: 'metal',
  1: 'metal',
  2: 'water',
  3: 'water',
  4: 'wood',
  5: 'wood',
  6: 'fire',
  7: 'fire',
  8: 'earth',
  9: 'earth'
}

export function getElementForYear(year: number): ZodiacElement {
  const lastDigit = ((year % 10) + 10) % 10
  // All digits 0-9 are covered, so this is always defined
  return lastDigitToElement[lastDigit] as ZodiacElement
}

// ============================================
// ANIMAL CALCULATION
// Based on year % 12:
//   0=monkey, 1=rooster, 2=dog, 3=pig,
//   4=rat, 5=ox, 6=tiger, 7=rabbit,
//   8=dragon, 9=snake, 10=horse, 11=goat
// ============================================

const mod12ToAnimal: ZodiacAnimal[] = [
  'monkey',  // 0
  'rooster', // 1
  'dog',     // 2
  'pig',     // 3
  'rat',     // 4
  'ox',      // 5
  'tiger',   // 6
  'rabbit',  // 7
  'dragon',  // 8
  'snake',   // 9
  'horse',   // 10
  'goat'     // 11
]

export function getAnimalForYear(year: number): ZodiacAnimal {
  const index = ((year % 12) + 12) % 12
  // All indices 0-11 are covered, so this is always defined
  return mod12ToAnimal[index] as ZodiacAnimal
}

// ============================================
// LUNAR NEW YEAR DATES
// [month, day] for each year from 1924-2043
// 1924-2026: exact historical/confirmed dates
// 2027-2043: astronomically calculated dates
// ============================================

export const lunarNewYearDates: Record<number, [number, number]> = {
  // 1920s
  1924: [2, 5],
  1925: [1, 24],
  1926: [2, 13],
  1927: [2, 2],
  1928: [1, 23],
  1929: [2, 10],
  // 1930s
  1930: [1, 30],
  1931: [2, 17],
  1932: [2, 6],
  1933: [1, 26],
  1934: [2, 14],
  1935: [2, 4],
  1936: [1, 24],
  1937: [2, 11],
  1938: [1, 31],
  1939: [2, 19],
  // 1940s
  1940: [2, 8],
  1941: [1, 27],
  1942: [2, 15],
  1943: [2, 5],
  1944: [1, 25],
  1945: [2, 13],
  1946: [2, 2],
  1947: [1, 22],
  1948: [2, 10],
  1949: [1, 29],
  // 1950s
  1950: [2, 17],
  1951: [2, 6],
  1952: [1, 27],
  1953: [2, 14],
  1954: [2, 3],
  1955: [1, 24],
  1956: [2, 12],
  1957: [1, 31],
  1958: [2, 18],
  1959: [2, 8],
  // 1960s
  1960: [1, 28],
  1961: [2, 15],
  1962: [2, 5],
  1963: [1, 25],
  1964: [2, 13],
  1965: [2, 2],
  1966: [1, 21],
  1967: [2, 9],
  1968: [1, 30],
  1969: [2, 17],
  // 1970s
  1970: [2, 6],
  1971: [1, 27],
  1972: [2, 15],
  1973: [2, 3],
  1974: [1, 23],
  1975: [2, 11],
  1976: [1, 31],
  1977: [2, 18],
  1978: [2, 7],
  1979: [1, 28],
  // 1980s
  1980: [2, 16],
  1981: [2, 5],
  1982: [1, 25],
  1983: [2, 13],
  1984: [2, 2],
  1985: [2, 20],
  1986: [2, 9],
  1987: [1, 29],
  1988: [2, 17],
  1989: [2, 6],
  // 1990s
  1990: [1, 27],
  1991: [2, 15],
  1992: [2, 4],
  1993: [1, 23],
  1994: [2, 10],
  1995: [1, 31],
  1996: [2, 19],
  1997: [2, 7],
  1998: [1, 28],
  1999: [2, 16],
  // 2000s
  2000: [2, 5],
  2001: [1, 24],
  2002: [2, 12],
  2003: [2, 1],
  2004: [1, 22],
  2005: [2, 9],
  2006: [1, 29],
  2007: [2, 18],
  2008: [2, 7],
  2009: [1, 26],
  // 2010s
  2010: [2, 14],
  2011: [2, 3],
  2012: [1, 23],
  2013: [2, 10],
  2014: [1, 31],
  2015: [2, 19],
  2016: [2, 8],
  2017: [1, 28],
  2018: [2, 16],
  2019: [2, 5],
  // 2020s
  2020: [1, 25],
  2021: [2, 12],
  2022: [2, 1],
  2023: [1, 22],
  2024: [2, 10],
  2025: [1, 29],
  2026: [2, 17],
  2027: [2, 6],
  2028: [1, 26],
  2029: [2, 13],
  // 2030s
  2030: [2, 3],
  2031: [1, 23],
  2032: [2, 11],
  2033: [1, 31],
  2034: [2, 19],
  2035: [2, 8],
  2036: [1, 28],
  2037: [2, 15],
  2038: [2, 4],
  2039: [1, 24],
  // 2040s
  2040: [2, 12],
  2041: [2, 1],
  2042: [1, 22],
  2043: [2, 10]
}

// ============================================
// LUNAR YEAR CALCULATION
// Determines the zodiac year based on birthdate
// accounting for the lunar new year boundary.
// If born before lunar new year, belongs to
// the previous zodiac year.
// ============================================

export function getLunarYear(year: number, month: number, day: number): number {
  const lnyDate = lunarNewYearDates[year]

  // If no lunar new year data for this year, fall back to the calendar year
  if (!lnyDate) {
    return year
  }

  const [lnyMonth, lnyDay] = lnyDate

  // If birthdate is before the lunar new year, use the previous year
  if (month < lnyMonth || (month === lnyMonth && day < lnyDay)) {
    return year - 1
  }

  return year
}

// ============================================
// ZODIAC FROM BIRTHDATE
// Returns the animal, element, and lunar year
// for a given birthdate.
// ============================================

export interface ZodiacResult {
  animal: ZodiacAnimal
  element: ZodiacElement
  lunarYear: number
}

export function getZodiacFromBirthdate(year: number, month: number, day: number): ZodiacResult {
  const lunarYear = getLunarYear(year, month, day)
  return {
    animal: getAnimalForYear(lunarYear),
    element: getElementForYear(lunarYear),
    lunarYear
  }
}

// ============================================
// SIGN SLUG HELPERS
// ============================================

// Returns a slug like 'fire-horse' from animal and element
export function getSignSlug(animal: ZodiacAnimal, element: ZodiacElement): string {
  return `${element}-${animal}`
}

// All 60 possible sign slugs (5 elements x 12 animals)
export function getAllSignSlugs(): string[] {
  const slugs: string[] = []
  const elementOrder: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
  const animalOrder: ZodiacAnimal[] = [
    'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
    'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'
  ]

  for (const element of elementOrder) {
    for (const animal of animalOrder) {
      slugs.push(getSignSlug(animal, element))
    }
  }

  return slugs
}
