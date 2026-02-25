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
// VISUAL DATA (pentagon chart, power levels)
// ============================================
export interface ElementPercentages {
  wood: number
  fire: number
  earth: number
  metal: number
  water: number
}

export interface TraitScores {
  strategy: number
  compassion: number
  resilience: number
  ambition: number
  sociability: number
  creativity: number
}

export interface SignVisualData {
  elementPercentages: ElementPercentages
  traitScores: TraitScores
}

// ============================================
// ENHANCED COMPATIBILITY SYSTEM
// ============================================
export interface EnhancedCompatibilityResult extends CompatibilityResult {
  chemistry: number        // 0-100, animal relationship
  support: number          // 0-100, element generating/same
  friction: number         // 0-100, element overcoming/destroying
  matchLabel: string       // e.g., 'Soulmate Energy', 'Toxic but Addictive'
  matchCategory: MatchCategory
  frictionPoints: FrictionPoint[]
  remedy: RemedyAdvice | null
}

export type MatchCategory =
  | 'soulmate' | 'power-couple' | 'slow-burn'
  | 'explosive' | 'toxic-addictive' | 'oil-and-water'
  | 'best-friends' | 'steady' | 'neutral'

export interface FrictionPoint {
  category: 'communication' | 'values' | 'lifestyle' | 'emotional' | 'growth'
  intensity: 'spark' | 'friction' | 'clash'
  description: string
}

export interface RemedyAdvice {
  bridgingElement: ZodiacElement
  description: string
}

// ============================================
// WU XING CYCLE RELATIONSHIPS
// ============================================
export interface WuXingRelationship {
  generates: ZodiacElement
  generatedBy: ZodiacElement
  overcomes: ZodiacElement
  overcomedBy: ZodiacElement
}

// ============================================
// MERCH SHOP (Shopify Storefront API)
// ============================================

/** A single product image from Shopify */
export interface MerchImage {
  url: string
  altText: string | null
  width: number
  height: number
}

/** A purchasable variant (size, color, etc.) */
export interface MerchVariant {
  id: string
  title: string
  price: string
  currencyCode: string
  available: boolean
  image: MerchImage | null
}

/** A merch product pulled from Shopify */
export interface MerchProduct {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml: string
  productType: string
  tags: string[]
  images: MerchImage[]
  variants: MerchVariant[]
  /** Lowest variant price */
  priceRange: { min: string; max: string; currencyCode: string }
  /** Extracted from tags: the sign slug this product belongs to (e.g. 'fire-horse') */
  signSlug: string | null
  /** Extracted from tags: the element (e.g. 'fire') */
  element: string | null
  /** Extracted from tags: the animal (e.g. 'horse') */
  animal: string | null
}

/** Cart line item stored client-side */
export interface CartItem {
  variantId: string
  productId: string
  title: string
  variantTitle: string
  price: string
  currencyCode: string
  quantity: number
  image: MerchImage | null
  handle: string
}

/** Shopify Storefront API cart response */
export interface ShopifyCart {
  id: string
  checkoutUrl: string
  lines: CartItem[]
  totalAmount: string
  totalCurrencyCode: string
}

/** Product type filter options */
export type MerchProductType = 't-shirt' | 'hoodie' | 'mug' | 'poster' | 'sticker' | 'tote-bag' | 'all'

// ============================================
// NAVIGATION
// ============================================
export interface NavItem {
  label: string
  to: string
  icon?: string
}
