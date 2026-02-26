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

// Sized variants (tees and hoodies)
const SIZED_VARIANTS: ShopifyVariant[] = ['S', 'M', 'L', 'XL', '2XL'].map((size) => ({
  id: `demo-${size.toLowerCase()}`,
  title: size,
  price: '0', // overridden per product
  currencyCode: 'USD',
  available: true,
  selectedOptions: [{ name: 'Size', value: size }],
}))

// One-size variant (mugs, posters, totes)
const ONE_SIZE_VARIANT: ShopifyVariant[] = [{
  id: 'demo-one-size',
  title: 'One Size',
  price: '0',
  currencyCode: 'USD',
  available: true,
  selectedOptions: [{ name: 'Size', value: 'One Size' }],
}]

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
  return s[0].toUpperCase() + s.slice(1)
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
      const variants = (spec.hasSizes ? SIZED_VARIANTS : ONE_SIZE_VARIANT).map((v) => ({
        ...v,
        id: `demo-${slug}-${spec.type}-${v.title.toLowerCase()}`,
        price,
      }))

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
      })
    }
  }

  return products
}
