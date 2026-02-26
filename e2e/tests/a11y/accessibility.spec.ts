import { test } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { assertAccessible } from '../../helpers/accessibility'

/**
 * Accessibility tests using axe-core (WCAG 2.0 A + AA).
 * Critical and serious violations fail the test.
 * Known false-positive rules can be disabled per test if needed.
 */

test.describe('Accessibility — axe-core scans', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })
  })

  // ── 1. Homepage passes axe scan ───────────────────────────────────────────
  test('homepage passes axe accessibility scan', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 2. Sign page passes ───────────────────────────────────────────────────
  test('sign page (/zodiac/fire-horse) passes axe accessibility scan', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 3. Calculator passes ──────────────────────────────────────────────────
  test('calculator page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 4. Compatibility picker passes ────────────────────────────────────────
  test('compatibility picker page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/compatibility')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 5. Blog page passes ───────────────────────────────────────────────────
  test('blog page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/blog')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 6. Shop page passes ───────────────────────────────────────────────────
  test('shop page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 7. Result page passes ─────────────────────────────────────────────────
  test('result page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 8. 404 page passes ────────────────────────────────────────────────────
  test('404 page passes axe accessibility scan', async ({ page }) => {
    await page.goto('/this-does-not-exist-404')
    await waitForApp(page)
    await assertAccessible(page)
  })

  // ── 9. Mobile nav open state passes ──────────────────────────────────────
  test('mobile nav open state passes axe accessibility scan', async ({ page }) => {
    // Set a narrow viewport to trigger mobile nav
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    await waitForApp(page)

    // Attempt to open the mobile menu if a toggle exists
    const menuToggle = page.locator(
      '[aria-label*="menu" i], [aria-label*="navigation" i], button:has([class*="hamburger"]), [class*="menu-toggle"]',
    )
    if (await menuToggle.count() > 0) {
      await menuToggle.first().click()
      await page.waitForTimeout(300)
    }

    await assertAccessible(page)
  })

  // ── 10. Cart drawer passes (if applicable) ────────────────────────────────
  test('cart drawer (if present) passes axe accessibility scan', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    // Try to open the cart drawer
    const cartTrigger = page.locator('[aria-label*="cart" i], button:has-text("Cart")').first()
    if (await cartTrigger.count() > 0) {
      await cartTrigger.click()
      await page.waitForTimeout(400)
    }

    // Scan the page whether or not the drawer opened
    await assertAccessible(page)
  })
})
