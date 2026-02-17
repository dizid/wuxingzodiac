// ============================================
// WU XING ZODIAC TYPE DEFINITIONS
// ============================================

// Core zodiac types (compatible with firehorse.info)
export type ZodiacAnimal =
  | 'rat' | 'ox' | 'tiger' | 'rabbit' | 'dragon' | 'snake'
  | 'horse' | 'goat' | 'monkey' | 'rooster' | 'dog' | 'pig'

export type ZodiacElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water'

export interface ZodiacSign {
  animal: ZodiacAnimal
  element: ZodiacElement
  year: number
}

// ============================================
// SIGN PROFILES (lightweight, loaded eagerly)
// ============================================
export interface SignProfile {
  slug: string           // 'fire-horse'
  animal: ZodiacAnimal
  element: ZodiacElement
  name: string           // 'Fire Horse'
  chineseName: string    // '丙午'
  tagline: string        // 'The Untamable Spirit'
  years: number[]        // [1846, 1906, 1966, 2026, 2086]
}

// ============================================
// SIGN CONTENT (full, lazy-loaded per sign)
// ============================================
export interface SignContent {
  slug: string
  profile: SignProfile
  personality: PersonalitySection
  compatibility: CompatibilitySection
  career: CareerSection
  love: LoveSection
  health: HealthSection
  lucky: LuckySection
  famous: FamousSection
  culture: CultureSection
  horoscope: HoroscopeSection | null // null = placeholder for Phase 2
}

export interface PersonalitySection {
  overview: string
  coreTraits: string[]
  strengths: { trait: string; description: string }[]
  challenges: { trait: string; description: string }[]
  elementInfluence: string
}

export interface CompatibilitySection {
  overview: string
  bestMatches: CompatibilityMatch[]
  challengingMatches: CompatibilityMatch[]
  elementAffinity: string
}

export interface CompatibilityMatch {
  slug: string
  name: string
  score: number
  summary: string
}

export interface CareerSection {
  overview: string
  idealCareers: string[]
  financialStyle: string
  tips: string[]
}

export interface LoveSection {
  overview: string
  loveStyle: string
  idealPartnerTraits: string[]
  tips: string[]
}

export interface HealthSection {
  overview: string
  bodyAreas: string[]
  exercises: string[]
  dietTips: string[]
  mentalHealth: string
}

export interface LuckySection {
  numbers: number[]
  colors: string[]
  direction: string
  gemstones: string[]
  flowers: string[]
  season: string
}

export interface FamousSection {
  people: FamousPerson[]
}

export interface FamousPerson {
  name: string
  profession: string
  birthYear: number
  description: string
}

export interface CultureSection {
  mythology: string
  symbolism: string
  modernInterpretation: string
}

export interface HoroscopeSection {
  daily: string
  monthly: string
  yearly: string
}

// ============================================
// COMPATIBILITY SYSTEM
// ============================================
export interface CompatibilityResult {
  signA: string // slug
  signB: string // slug
  score: number // 0-100
  summary: string
  strengths: string[]
  challenges: string[]
}

export interface AnimalCompatibility {
  base: number
  summary: string
  strengths: string[]
  challenges: string[]
}

// ============================================
// AFFILIATE SYSTEM
// ============================================
export type AffiliateCategory =
  | 'crystals' | 'career-books' | 'relationship-services'
  | 'astrology-books' | 'wellness' | 'jewelry'
  | 'colors' | 'botanicals' | 'fitness' | 'element'

export interface AffiliateProduct {
  id: string
  name: string
  description: string
  url: string
  program: 'amazon' | 'keen' | 'kasamba' | 'astro-charts'
  category: AffiliateCategory
  image?: string
}

// ============================================
// SIGN SHOP (auto-generated per sign)
// ============================================
export interface ShopCategory {
  title: string
  icon: string
  products: AffiliateProduct[]
}

// ============================================
// BLOG
// ============================================
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage?: string
  authorName: string
  publishedAt: string
  tags: string[]
  readTime: number
}

// ============================================
// SIGN CONTENT V2 (Wuxing Master rewrite)
// ============================================
export interface SignContentV2 {
  slug: string
  profile: SignProfile
  archetype: {
    name: string     // e.g., 'The Resourceful Pioneer'
    tagline: string  // e.g., 'The Resourceful Pioneer — Wood Rat'
  }
  atAGlance: AtAGlanceSection
  personality: { body: string }      // ~300 words
  shadow: { body: string }           // ~150 words
  relationships: { body: string }    // ~150 words
  elementBalance: { body: string }   // ~100 words
  matches: MatchesSection
}

export interface AtAGlanceSection {
  element: string       // e.g., 'Wood (Growth, Flexibility)'
  energy: string        // 'Yin' or 'Yang'
  archetype: string     // e.g., 'The Resourceful Pioneer'
  coreStrength: string  // e.g., 'Strategic patience'
  shadow: string        // e.g., 'Analysis paralysis'
  bestMatch: string     // slug, e.g., 'water-dragon'
  worstMatch: string    // slug, e.g., 'fire-horse'
  luckyColor: string    // e.g., 'Forest green'
}

export interface MatchEntry {
  slug: string    // e.g., 'water-dragon'
  name: string    // e.g., 'Water Dragon'
  reason: string  // 1-line reason
}

export interface MatchesSection {
  best: MatchEntry[]   // exactly 3
  worst: MatchEntry[]  // exactly 3
}

// ============================================
// NAVIGATION
// ============================================
export interface NavItem {
  label: string
  to: string
  icon?: string
}
