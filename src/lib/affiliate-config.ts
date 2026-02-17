// ============================================
// AFFILIATE PRODUCT REGISTRY
// Centralized configuration for all affiliate products
// ============================================

import type { AffiliateProduct, AffiliateCategory } from '@/types'

// ============================================
// PRODUCT REGISTRY
// ============================================

export const affiliateProducts: AffiliateProduct[] = [
  // --- Crystals ---
  {
    id: 'crystal-tigers-eye',
    name: "Tiger's Eye Crystal",
    description: 'A powerful protection stone that promotes courage, confidence, and willpower. Traditionally linked to the Tiger sign and Earth element.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'crystals',
  },
  {
    id: 'crystal-jade-pendant',
    name: 'Natural Jade Pendant',
    description: 'Jade has been revered in Chinese culture for millennia as a symbol of purity, harmony, and balance across all five elements.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'crystals',
  },
  {
    id: 'crystal-amethyst-cluster',
    name: 'Amethyst Crystal Cluster',
    description: 'Known for enhancing intuition and spiritual awareness. Associated with the Water element and ideal for Rat, Dragon, and Monkey signs.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'crystals',
  },

  // --- Career Books ---
  {
    id: 'book-astrology-career',
    name: 'Chinese Astrology Career Guide',
    description: 'Discover your ideal career path through the lens of Chinese zodiac wisdom and Wu Xing element theory.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'career-books',
  },
  {
    id: 'book-five-elements-leadership',
    name: 'Five Elements Leadership',
    description: 'Apply the ancient Wu Xing framework to modern leadership and team dynamics for breakthrough results.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'career-books',
  },

  // --- Relationship Services ---
  {
    id: 'service-keen-reading',
    name: 'Keen Psychic Compatibility Reading',
    description: 'Get a personalized compatibility analysis from an experienced Chinese astrology advisor on Keen.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'keen',
    category: 'relationship-services',
  },
  {
    id: 'service-kasamba-reading',
    name: 'Kasamba Compatibility Reading',
    description: 'Speak with a certified astrologer on Kasamba for deep insights into your zodiac relationship dynamics.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'kasamba',
    category: 'relationship-services',
  },

  // --- Astrology Books ---
  {
    id: 'book-chinese-astrology-complete',
    name: 'The Complete Guide to Chinese Astrology',
    description: 'A comprehensive reference covering all 60 zodiac combinations, element cycles, and compatibility charts.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'astrology-books',
  },
  {
    id: 'book-wu-xing-philosophy',
    name: 'Wu Xing: The Philosophy of Five Elements',
    description: 'Explore the ancient system of five elements and their influence on personality, health, and destiny.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'astrology-books',
  },
  {
    id: 'book-chinese-zodiac-secrets',
    name: 'Secrets of Chinese Zodiac Animals',
    description: 'Unlock the hidden traits and destinies of all twelve zodiac animals with traditional and modern interpretations.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'astrology-books',
  },

  // --- Wellness ---
  {
    id: 'wellness-feng-shui-kit',
    name: 'Feng Shui Starter Kit',
    description: 'Complete feng shui kit with compass, crystals, and guide to harmonize your living space according to Wu Xing principles.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'wellness',
  },
  {
    id: 'wellness-meditation-crystals',
    name: 'Five Element Meditation Crystal Set',
    description: 'A curated set of five crystals representing Wood, Fire, Earth, Metal, and Water for balanced meditation practice.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'wellness',
  },

  // --- Jewelry ---
  {
    id: 'jewelry-zodiac-pendant',
    name: 'Chinese Zodiac Animal Pendant',
    description: 'Handcrafted sterling silver pendant featuring your Chinese zodiac animal. Available in all 12 animals.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'jewelry',
  },
  {
    id: 'jewelry-element-bracelet',
    name: 'Wu Xing Element Bracelet',
    description: 'Natural stone bracelet representing your birth element. Each stone is selected for its elemental resonance.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'jewelry',
  },
  {
    id: 'jewelry-zodiac-ring',
    name: 'Chinese Zodiac Signet Ring',
    description: 'Elegant signet ring engraved with your zodiac animal character. Stainless steel with gold plating.',
    url: 'https://amazon.com/dp/PLACEHOLDER',
    program: 'amazon',
    category: 'jewelry',
  },
]

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get all products for a given affiliate category.
 */
export function getProductsByCategory(category: AffiliateCategory): AffiliateProduct[] {
  return affiliateProducts.filter((p) => p.category === category)
}

// Maps sign page section names to relevant affiliate categories
const sectionCategoryMap: Record<string, AffiliateCategory[]> = {
  personality: ['astrology-books', 'crystals'],
  compatibility: ['relationship-services', 'astrology-books'],
  career: ['career-books'],
  love: ['relationship-services', 'jewelry'],
  health: ['wellness', 'crystals'],
  lucky: ['crystals', 'jewelry'],
  famous: ['astrology-books'],
  culture: ['astrology-books'],
  horoscope: ['relationship-services'],
}

/**
 * Get relevant products for a specific sign page section.
 * Maps section names (personality, compatibility, career, etc.) to relevant categories.
 */
export function getProductsForSection(sectionName: string): AffiliateProduct[] {
  const categories = sectionCategoryMap[sectionName.toLowerCase()]
  if (!categories) return []

  return affiliateProducts.filter((p) => categories.includes(p.category))
}
