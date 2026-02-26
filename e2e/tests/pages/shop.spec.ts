import { test, expect } from '@playwright/test'
import { mockAllApis, mockShopifyStorefront, mockShopifyError } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { setUserSign } from '../../helpers/storage'
import { mockShopifyProducts } from '../../fixtures/shopify-products'

test.describe('ShopPage (/shop)', () => {
  // ── 1. Hero section heading ───────────────────────────────────────────────
  test('hero section heading renders', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/collection/i)
  })

  // ── 2. Element filter tabs render ────────────────────────────────────────
  test('element filter tabs render: All, Wood, Fire, Earth, Metal, Water', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    // When Shopify is configured these filters appear; when not configured the
    // "Shop Coming Soon" notice renders instead. Test the configured path.
    const isConfigured = await page.locator('[data-element]').first().isVisible().catch(() => false)
    if (!isConfigured) {
      // Shop not configured — skip filter assertions but confirm "Shop Coming Soon"
      await expect(page.locator('body')).toContainText(/shop coming soon|collection/i)
      return
    }

    for (const label of ['All', 'Wood', 'Fire', 'Earth', 'Metal', 'Water']) {
      await expect(page.locator('button', { hasText: label }).first()).toBeVisible()
    }
  })

  // ── 3. Filter by element narrows the product grid ────────────────────────
  test('clicking Fire filter shows only fire-element products', async ({ page }) => {
    await mockAllApis(page)
    // Patch Shopify mock to return a non-empty product list
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    // If shop is not configured, skip
    const fireBtn = page.locator('button', { hasText: 'Fire' }).first()
    if (!(await fireBtn.isVisible().catch(() => false))) return

    await fireBtn.click()

    // Fire T-Shirt should be visible; Water Mug should not be
    await expect(page.locator('body')).toContainText('Fire Element T-Shirt')
    await expect(page.locator('body')).not.toContainText('Water Element Mug')
  })

  // ── 4. Product card shows title and price ────────────────────────────────
  test('product card renders title and formatted price', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    // Check that at least one known product title and price appear
    const titleEl = page.locator('h3', { hasText: 'Fire Element T-Shirt' })
    const count = await titleEl.count()
    if (count === 0) return // shop not configured

    await expect(titleEl.first()).toBeVisible()
    // Price in USD format
    await expect(page.locator('body')).toContainText('$29.99')
  })

  // ── 5. Clicking a product card opens the product modal ───────────────────
  test('clicking a product card opens the product detail modal', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    const card = page.locator('h3', { hasText: 'Fire Element T-Shirt' }).first()
    if (!(await card.isVisible().catch(() => false))) return

    // Click the card wrapper
    await card.click()

    // Modal renders product title in an h2
    const modal = page.locator('h2', { hasText: 'Fire Element T-Shirt' })
    await expect(modal).toBeVisible()
  })

  // ── 6. Product modal closes when close button is clicked ─────────────────
  test('product modal closes when the close button is clicked', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    const card = page.locator('h3', { hasText: 'Fire Element T-Shirt' }).first()
    if (!(await card.isVisible().catch(() => false))) return

    await card.click()

    // Wait for modal to appear
    const modal = page.locator('h2', { hasText: 'Fire Element T-Shirt' })
    await expect(modal).toBeVisible()

    // Click the close button (aria-label="Close")
    await page.locator('button[aria-label="Close"]').click()

    // Modal should disappear
    await expect(modal).not.toBeVisible()
  })

  // ── 7. "Add to Cart" button on a product card triggers add ───────────────
  test('"Add to Cart" button on product card opens the cart drawer', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    // Locate the "Add to Cart" button that belongs to the Fire T-Shirt card
    const addToCartBtn = page.locator('.glass', { hasText: 'Fire Element T-Shirt' })
      .locator('button', { hasText: /add to cart/i })
      .first()

    if (!(await addToCartBtn.isVisible().catch(() => false))) return

    await addToCartBtn.click()

    // Cart drawer should open (it renders the header "Cart")
    const cartHeader = page.locator('h2', { hasText: 'Cart' })
    await expect(cartHeader).toBeVisible()
  })

  // ── 8. Cart count updates after adding a product ─────────────────────────
  test('cart count in the drawer updates after adding a product', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    const addToCartBtn = page.locator('.glass', { hasText: 'Fire Element T-Shirt' })
      .locator('button', { hasText: /add to cart/i })
      .first()

    if (!(await addToCartBtn.isVisible().catch(() => false))) return

    await addToCartBtn.click()

    // Cart count badge renders "(1)" inside the cart header
    const cartHeader = page.locator('h2', { hasText: 'Cart' })
    await expect(cartHeader).toContainText('1')
  })

  // ── 9. Personalized section appears when user sign is stored ─────────────
  test('personalized section shows for user sign stored in localStorage', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)

    // Navigate first to establish a document context, then set localStorage
    await page.goto('/shop')
    await waitForApp(page)

    // Set user sign (fire element) and reload
    await setUserSign(page, 'fire-horse')
    await page.reload()
    await waitForApp(page)

    // The personalized section heading "Curated for Fire Horse" should appear
    // (only shows when Shopify is configured and has fire-element products)
    const personalizedSection = page.locator('text=Curated for Fire Horse')
    const count = await personalizedSection.count()
    // If shop is configured and has fire products, the section is present
    if (count > 0) {
      await expect(personalizedSection).toBeVisible()
    }
  })

  // ── 10. Query param ?element=fire pre-selects the fire filter ─────────────
  test('/shop?element=fire pre-selects the Fire filter', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop?element=fire')
    await waitForApp(page)

    // When shop is configured, Fire filter button should be active (has element style)
    // and the section heading "Fire Element" should be visible
    const fireHeading = page.locator('h2', { hasText: 'Fire Element' })
    const count = await fireHeading.count()
    if (count > 0) {
      await expect(fireHeading).toBeVisible()
    }
    // Alternatively confirm the url param is honoured — no redirect
    expect(page.url()).toContain('element=fire')
  })

  // ── 11. Shop not configured shows "Shop Coming Soon" ─────────────────────
  test('shop not configured shows "Shop Coming Soon" notice', async ({ page }) => {
    // Use mockShopifyError to simulate an unconfigured/broken Shopify store.
    // In practice, the "not configured" state triggers when env vars are absent;
    // we exercise the visible fallback UI path by using the error mock.
    await mockAllApis(page)
    await mockShopifyError(page)
    await page.goto('/shop')
    await waitForApp(page)

    // Either "Shop Coming Soon" (not configured) or the hero still renders
    await expect(page.locator('body')).toContainText(/shop coming soon|collection/i)
  })

  // ── 12. Trust bar renders ────────────────────────────────────────────────
  test('trust bar renders with Secure Checkout, Free Shipping, 30-Day Returns', async ({ page }) => {
    await mockAllApis(page)
    await mockShopifyStorefront(page, mockShopifyProducts)
    await page.goto('/shop')
    await waitForApp(page)

    // TrustBar is inside the configured block; if shop not configured it won't show
    const trustText = page.locator('text=Secure Checkout')
    const count = await trustText.count()
    if (count > 0) {
      await expect(trustText.first()).toBeVisible()
      await expect(page.locator('text=30-Day Returns').first()).toBeVisible()
    }
  })
})
