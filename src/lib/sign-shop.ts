// ============================================
// SIGN SHOP — Template-based product generator (V2)
// Generates personalized Amazon affiliate product listings
// based on the sign's element and general zodiac interests.
// ============================================

import type { SignContentV2, AffiliateProduct, ShopCategory, ZodiacElement } from '@/types'

// ============================================
// INTERNAL HELPERS
// ============================================

/**
 * Build an Amazon search URL with the affiliate tag baked in.
 */
function buildSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`
}

// Maps element values to display-ready capitalized names and icons.
const ELEMENT_META: Record<ZodiacElement, { label: string; icon: string }> = {
  wood:  { label: 'Wood',  icon: '🌳' },
  fire:  { label: 'Fire',  icon: '🔥' },
  earth: { label: 'Earth', icon: '⛰️' },
  metal: { label: 'Metal', icon: '⚔️' },
  water: { label: 'Water', icon: '🌊' },
}

// ============================================
// CATEGORY BUILDERS
// ============================================

/**
 * "{Element} Element Essentials" — 3 fixed products based on the sign's element.
 */
function buildElementCategory(content: SignContentV2): ShopCategory {
  const { slug, profile } = content
  const element = profile.element
  const meta = ELEMENT_META[element]
  const elementLabel = meta.label
  const signName = profile.name

  const products: AffiliateProduct[] = [
    {
      id:          `shop-${slug}-element-0`,
      name:        `${elementLabel} Element Meditation Set`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`${element} element meditation crystal set`),
      program:     'amazon',
      category:    'element',
    },
    {
      id:          `shop-${slug}-element-1`,
      name:        `${elementLabel} Element Tea Collection`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`${element} element tea set chinese`),
      program:     'amazon',
      category:    'element',
    },
    {
      id:          `shop-${slug}-element-2`,
      name:        `${elementLabel} Zodiac Wall Art`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`chinese zodiac ${element} element wall art`),
      program:     'amazon',
      category:    'element',
    },
  ]

  return { title: `${elementLabel} Element Essentials`, icon: meta.icon, products }
}

/**
 * "Zodiac Reading" — general Chinese astrology books.
 */
function buildBooksCategory(content: SignContentV2): ShopCategory {
  const { slug, profile } = content
  const signName = profile.name
  const animal = profile.animal

  const products: AffiliateProduct[] = [
    {
      id:          `shop-${slug}-books-0`,
      name:        'Chinese Astrology Guide',
      description: `Deepen your understanding of ${signName} and the Wu Xing system.`,
      url:         buildSearchUrl('chinese astrology five elements book'),
      program:     'amazon',
      category:    'astrology-books',
    },
    {
      id:          `shop-${slug}-books-1`,
      name:        `The ${animal.charAt(0).toUpperCase() + animal.slice(1)} in Chinese Zodiac`,
      description: `Explore the ${animal}'s role across all five elements.`,
      url:         buildSearchUrl(`chinese zodiac ${animal} book`),
      program:     'amazon',
      category:    'astrology-books',
    },
  ]

  return { title: 'Zodiac Reading', icon: '📚', products }
}

/**
 * "Wellness & Balance" — generic wellness products.
 */
function buildWellnessCategory(content: SignContentV2): ShopCategory {
  const { slug, profile } = content
  const signName = profile.name

  const products: AffiliateProduct[] = [
    {
      id:          `shop-${slug}-wellness-0`,
      name:        'Meditation Cushion & Guide',
      description: `Support your ${signName} elemental balance through mindful practice.`,
      url:         buildSearchUrl('meditation cushion set guide'),
      program:     'amazon',
      category:    'wellness',
    },
    {
      id:          `shop-${slug}-wellness-1`,
      name:        'Feng Shui Crystal Set',
      description: `Harmonize your space to complement your ${signName} energy.`,
      url:         buildSearchUrl('feng shui crystal set five elements'),
      program:     'amazon',
      category:    'wellness',
    },
  ]

  return { title: 'Wellness & Balance', icon: '🧘', products }
}

// ============================================
// PUBLIC API
// ============================================

/**
 * Generate the full shop product listing for a sign.
 * Returns an ordered array of ShopCategory objects, each containing
 * personalized Amazon affiliate products based on element and animal.
 */
export function generateShopProducts(content: SignContentV2): ShopCategory[] {
  return [
    buildElementCategory(content),
    buildBooksCategory(content),
    buildWellnessCategory(content),
  ]
}
