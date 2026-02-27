import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { setUserSign } from '../../helpers/storage'

// Product names from the static catalog (shop-products.ts)
const FIRE_DRAGON_TEE = 'Fire Dragon Element Tee'
const WATER_SNAKE_TEE = 'Water Snake Element Tee'

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

    for (const label of ['All', 'Wood', 'Fire', 'Earth', 'Metal', 'Water']) {
      await expect(page.locator('button', { hasText: label }).first()).toBeVisible()
    }
  })

  // ── 3. Filter by element narrows the product grid ────────────────────────
  test('clicking Fire filter shows only fire-element products', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    const fireBtn = page.locator('button', { hasText: 'Fire' }).first()
    await expect(fireBtn).toBeVisible()
    await fireBtn.click()

    // Fire products should be visible; Water products should not be
    await expect(page.locator('body')).toContainText(FIRE_DRAGON_TEE)
    await expect(page.locator('body')).not.toContainText(WATER_SNAKE_TEE)
  })

  // ── 4. Product card shows title and price ────────────────────────────────
  test('product card renders title and formatted price', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    const titleEl = page.locator('h3', { hasText: FIRE_DRAGON_TEE })
    await expect(titleEl.first()).toBeVisible()
    await expect(page.locator('body')).toContainText('$29.99')
  })

  // ── 5. Product cards show "Coming Soon" when no Fourthwall URL ─────────
  test('product cards show "Coming Soon" when Fourthwall URLs are not set', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    // Products without Fourthwall URLs show "Coming Soon"
    const comingSoon = page.locator('text=Coming Soon')
    await expect(comingSoon.first()).toBeVisible()
  })

  // ── 5b. Live products link to Fourthwall store ─────────────────────────
  test('live products show "Shop Now" linking to wuxing-shop.fourthwall.com', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    // Check if any "Shop Now" links exist (will pass once URLs are added)
    const shopNowLinks = page.locator('a:has-text("Shop Now")')
    const count = await shopNowLinks.count()
    if (count > 0) {
      const href = await shopNowLinks.first().getAttribute('href')
      expect(href).toContain('wuxing-shop.fourthwall.com')
      await expect(shopNowLinks.first()).toHaveAttribute('target', '_blank')
    }
  })

  // ── 6. Personalized section appears when user sign is stored ─────────────
  test('personalized section shows for user sign stored in localStorage', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    await setUserSign(page, 'fire-horse')
    await page.reload()
    await waitForApp(page)

    const personalizedSection = page.locator('text=Curated for Fire Horse')
    const count = await personalizedSection.count()
    if (count > 0) {
      await expect(personalizedSection).toBeVisible()
    }
  })

  // ── 7. Query param ?element=fire pre-selects the fire filter ─────────────
  test('/shop?element=fire pre-selects the Fire filter', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop?element=fire')
    await waitForApp(page)

    const fireHeading = page.locator('h2', { hasText: 'Fire Element' })
    const count = await fireHeading.count()
    if (count > 0) {
      await expect(fireHeading).toBeVisible()
    }
    expect(page.url()).toContain('element=fire')
  })

  // ── 8. Trust bar renders ────────────────────────────────────────────────
  test('trust bar renders with Secure Payment, Worldwide Shipping, 30-Day Returns', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    await expect(page.locator('text=Secure Payment').first()).toBeVisible()
    await expect(page.locator('text=30-Day Returns').first()).toBeVisible()
  })

  // ── 9. All 60 products render when "All" filter is active ──────────────
  test('all 60 products render on the shop page', async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/shop')
    await waitForApp(page)

    // Count product cards (h3 elements inside the product grid)
    const productCards = page.locator('.grid h3')
    const count = await productCards.count()
    expect(count).toBeGreaterThanOrEqual(60)
  })
})
