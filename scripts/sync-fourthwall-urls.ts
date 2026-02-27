/**
 * Sync Fourthwall product URLs into shop-products.ts
 *
 * Fetches all products from the Fourthwall Storefront API and updates
 * the FOURTHWALL_URLS map in src/lib/shop-products.ts.
 *
 * Prerequisites:
 *   1. Publish products on Fourthwall
 *   2. Create a Storefront Token: Dashboard → Developer Settings
 *   3. Add to .env: FOURTHWALL_STOREFRONT_TOKEN=your_token_here
 *
 * Run: npx tsx scripts/sync-fourthwall-urls.ts
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { config } from 'dotenv'

// Load .env
config()

const ROOT = join(import.meta.dirname, '..')
const SHOP_PRODUCTS_PATH = join(ROOT, 'src', 'lib', 'shop-products.ts')
const STORE_DOMAIN = 'wuxing-shop.fourthwall.com'
const API_BASE = 'https://storefront-api.fourthwall.com/v1'

// -- Known sign names → code slugs --
// Maps product title patterns to the slug format used in shop-products.ts

const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water']

const PRODUCT_TYPE_MAP: Record<string, string> = {
  'tee': 'tee',
  't-shirt': 'tee',
  'element tee': 'tee',
  'hoodie': 'hoodie',
  'element hoodie': 'hoodie',
  'mug': 'mug',
  'element mug': 'mug',
  'poster': 'poster',
  'element poster': 'poster',
  'tote': 'tote',
  'element tote': 'tote',
  'tote bag': 'tote',
}

interface FourthwallProduct {
  id: string
  name: string
  slug: string
  url?: string
  variants?: { id: string; name: string }[]
}

/**
 * Try to extract sign slug and product type from a Fourthwall product name.
 * E.g. "Fire Dragon Element Tee" → { signSlug: 'fire-dragon', type: 'tee' }
 */
function parseProductName(name: string): { signSlug: string; type: string } | null {
  const lower = name.toLowerCase()

  // Find element
  const element = ELEMENTS.find((e) => lower.startsWith(e))
  if (!element) return null

  // Find animal
  const animal = ANIMALS.find((a) => lower.includes(a))
  if (!animal) return null

  // Find product type (check longer matches first)
  const sortedTypes = Object.keys(PRODUCT_TYPE_MAP).sort((a, b) => b.length - a.length)
  let type = 'tee' // default
  for (const pattern of sortedTypes) {
    if (lower.includes(pattern)) {
      type = PRODUCT_TYPE_MAP[pattern]
      break
    }
  }

  return { signSlug: `${element}-${animal}`, type }
}

async function fetchProducts(token: string): Promise<FourthwallProduct[]> {
  const url = `${API_BASE}/collections/all/products?storefront_token=${token}`
  console.log(`Fetching products from Fourthwall Storefront API...`)

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Fourthwall API error: ${res.status} ${res.statusText}`)
  }

  const data = await res.json() as { results?: FourthwallProduct[] }

  // The API response structure may vary; try common patterns
  const products = data.results ?? (Array.isArray(data) ? data : [])
  console.log(`Found ${products.length} products on Fourthwall`)

  return products
}

function buildProductUrl(product: FourthwallProduct): string {
  // Fourthwall product URLs follow: https://store.fourthwall.com/USD/product/slug
  if (product.url) return product.url
  return `https://${STORE_DOMAIN}/USD/product/${product.slug}`
}

function updateShopProductsFile(urlMap: Record<string, string>): void {
  const filePath = SHOP_PRODUCTS_PATH
  let content = readFileSync(filePath, 'utf-8')

  // Build the new FOURTHWALL_URLS map content
  const entries = Object.entries(urlMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, url]) => `  '${key}': '${url}',`)
    .join('\n')

  const newMap = `const FOURTHWALL_URLS: Record<string, string> = {\n${entries}\n}`

  // Replace the existing FOURTHWALL_URLS block
  // Match from "const FOURTHWALL_URLS" to the closing "}"
  const mapRegex = /const FOURTHWALL_URLS: Record<string, string> = \{[\s\S]*?\}/
  if (!mapRegex.test(content)) {
    throw new Error('Could not find FOURTHWALL_URLS map in shop-products.ts')
  }

  content = content.replace(mapRegex, newMap)
  writeFileSync(filePath, content, 'utf-8')
  console.log(`\n✓ Updated ${filePath}`)
  console.log(`  ${entries.split('\n').length} product URLs written`)
}

async function main() {
  const token = process.env.FOURTHWALL_STOREFRONT_TOKEN
  if (!token) {
    console.error('Missing FOURTHWALL_STOREFRONT_TOKEN in .env')
    console.error('')
    console.error('To create one:')
    console.error('  1. Go to Fourthwall Dashboard → Developer Settings')
    console.error('  2. Create a Storefront Token')
    console.error('  3. Add to .env: FOURTHWALL_STOREFRONT_TOKEN=your_token_here')
    process.exit(1)
  }

  // Fetch products from Fourthwall
  const products = await fetchProducts(token)

  if (products.length === 0) {
    console.log('No products found. Publish products on Fourthwall first.')
    process.exit(0)
  }

  // Build URL map
  const urlMap: Record<string, string> = {}
  let matched = 0
  let unmatched = 0

  for (const product of products) {
    const parsed = parseProductName(product.name)
    if (parsed) {
      const key = `${parsed.signSlug}-${parsed.type}`
      urlMap[key] = buildProductUrl(product)
      matched++
      console.log(`  ✓ ${product.name} → ${key}`)
    } else {
      unmatched++
      console.log(`  ✗ Could not match: "${product.name}"`)
    }
  }

  console.log(`\nMatched: ${matched}, Unmatched: ${unmatched}`)

  if (matched === 0) {
    console.log('No products matched. Check that product names follow the pattern:')
    console.log('  "[Element] [Animal] Element Tee" (e.g. "Fire Dragon Element Tee")')
    process.exit(1)
  }

  // Update shop-products.ts
  updateShopProductsFile(urlMap)

  console.log('\nNext steps:')
  console.log('  1. npm run build  (verify type-check)')
  console.log('  2. npm run test   (verify e2e tests)')
  console.log('  3. Deploy to production')
}

main().catch((err) => {
  console.error('Sync failed:', err)
  process.exit(1)
})
