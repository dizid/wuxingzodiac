import type { MerchProduct, MerchProductType, ShopifyVariant, ShopifyImage } from '@/types/merch'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

// ============================================
// DEMO PRODUCTS (when Shopify is not configured)
// ============================================
// Returns realistic mock products using existing OG images
// so the shop UI is fully testable before Shopify setup.

// Representative animal per element (most visually striking)
const DEMO_SIGNS: { element: ZodiacElement; animal: ZodiacAnimal }[] = [
  { element: 'wood', animal: 'tiger' },
  { element: 'fire', animal: 'dragon' },
  { element: 'earth', animal: 'ox' },
  { element: 'metal', animal: 'horse' },
  { element: 'water', animal: 'snake' },
]

// Product types with pricing (matches Printful margins)
const PRODUCT_SPECS: { type: MerchProductType; label: string; price: number; hasSizes: boolean }[] = [
  { type: 't-shirt', label: 'Element Tee', price: 29.99, hasSizes: true },
  { type: 'hoodie', label: 'Element Hoodie', price: 49.99, hasSizes: true },
  { type: 'mug', label: 'Zodiac Mug', price: 19.99, hasSizes: false },
  { type: 'poster', label: 'Art Print', price: 24.99, hasSizes: false },
  { type: 'tote', label: 'Tote Bag', price: 22.99, hasSizes: false },
]

// Color names mapped to element themes
const ELEMENT_COLORS: Record<ZodiacElement, { name: string; hex: string }> = {
  wood: { name: 'Forest Green', hex: '#22c55e' },
  fire: { name: 'Crimson', hex: '#ef4444' },
  earth: { name: 'Amber', hex: '#d97706' },
  metal: { name: 'Silver', hex: '#94a3b8' },
  water: { name: 'Ocean Blue', hex: '#3b82f6' },
}

// Element display names and descriptions
const ELEMENT_COPY: Record<ZodiacElement, { mood: string; desc: string }> = {
  wood: {
    mood: 'Growth & Renewal',
    desc: 'Embrace the living energy of the Wood element — growth, flexibility, and creative force.',
  },
  fire: {
    mood: 'Passion & Transformation',
    desc: 'Channel the blazing spirit of the Fire element — passion, courage, and dynamic power.',
  },
  earth: {
    mood: 'Stability & Abundance',
    desc: 'Ground yourself in the Earth element — stability, nurturing strength, and enduring wisdom.',
  },
  metal: {
    mood: 'Precision & Clarity',
    desc: 'Refine your spirit with the Metal element — precision, resilience, and decisive clarity.',
  },
  water: {
    mood: 'Depth & Wisdom',
    desc: 'Flow with the Water element — deep intuition, adaptability, and quiet power.',
  },
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Products that should show low stock for urgency demo
const LOW_STOCK_PRODUCTS = new Set([
  'demo-fire-dragon-t-shirt',
  'demo-metal-horse-hoodie',
  'demo-water-snake-mug',
])

/** Build variants for apparel (size × color matrix) */
function buildApparelVariants(
  slug: string, type: string, price: string, element: ZodiacElement,
): ShopifyVariant[] {
  const sizes = ['S', 'M', 'L', 'XL', '2XL']
  const colors = [
    { name: 'Black', hex: '#171717' },
    ELEMENT_COLORS[element],
  ]
  const variants: ShopifyVariant[] = []
  const productId = `demo-${slug}-${type}`
  const isLowStock = LOW_STOCK_PRODUCTS.has(productId)

  for (const color of colors) {
    for (const size of sizes) {
      // Low-stock items: XL and 2XL get very low inventory
      const isLowVariant = isLowStock && (size === 'XL' || size === '2XL')
      variants.push({
        id: `${productId}-${size.toLowerCase()}-${color.name.toLowerCase().replace(/\s+/g, '-')}`,
        title: `${size} / ${color.name}`,
        price,
        currencyCode: 'USD',
        available: true,
        quantityAvailable: isLowVariant ? (size === '2XL' ? 2 : 3) : 50,
        selectedOptions: [
          { name: 'Size', value: size },
          { name: 'Color', value: color.name },
        ],
      })
    }
  }
  return variants
}

/** Build variants for non-apparel (one-size only) */
function buildOneSizeVariants(
  slug: string, type: string, price: string,
): ShopifyVariant[] {
  const productId = `demo-${slug}-${type}`
  const isLowStock = LOW_STOCK_PRODUCTS.has(productId)
  return [{
    id: `${productId}-one-size`,
    title: 'One Size',
    price,
    currencyCode: 'USD',
    available: true,
    quantityAvailable: isLowStock ? 4 : 50,
    selectedOptions: [{ name: 'Size', value: 'One Size' }],
  }]
}

/** Generate 25 demo products (5 elements × 5 product types) */
export function generateDemoProducts(): MerchProduct[] {
  const products: MerchProduct[] = []

  for (const sign of DEMO_SIGNS) {
    const slug = `${sign.element}-${sign.animal}`
    const elName = capitalize(sign.element)
    const anName = capitalize(sign.animal)
    const copy = ELEMENT_COPY[sign.element]

    // OG image as placeholder thumbnail
    const image: ShopifyImage = {
      url: `/og/${slug}.png`,
      altText: `${elName} ${anName} — Five Elements Collection`,
      width: 1200,
      height: 630,
    }

    for (const spec of PRODUCT_SPECS) {
      const price = spec.price.toFixed(2)
      const variants = spec.hasSizes
        ? buildApparelVariants(slug, spec.type, price, sign.element)
        : buildOneSizeVariants(slug, spec.type, price)

      // Compute total inventory from variant quantities
      const totalInventory = variants.reduce((sum, v) => sum + (v.quantityAvailable || 0), 0)

      products.push({
        id: `demo-${slug}-${spec.type}`,
        handle: `${slug}-${spec.type}`,
        title: `${elName} ${anName} ${spec.label}`,
        description: `${copy.desc} Modern ink wash design on premium ${spec.label.toLowerCase()}.`,
        descriptionHtml: `<p>${copy.desc}</p><p>Modern ink wash design on premium ${spec.label.toLowerCase()}. Part of the Five Elements Collection (五行集).</p>`,
        price: spec.price,
        compareAtPrice: null,
        currency: 'USD',
        image,
        images: [image],
        tags: [`element:${sign.element}`, `animal:${sign.animal}`, `type:${spec.type}`, slug],
        variants,
        element: sign.element,
        animal: sign.animal,
        productType: spec.type,
        totalInventory,
      })
    }
  }

  return products
}
