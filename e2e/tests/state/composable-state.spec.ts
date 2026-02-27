import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'
import { assertElementTheme, assertNoElementTheme } from '../../helpers/theme'

/**
 * Composable shared-state tests.
 * Verifies that useUserSign and useElementTheme
 * behave correctly across navigation and component boundaries.
 */

// Helper: run the calculator and submit
async function runCalculator(
  page: Parameters<typeof waitForApp>[0],
  year: number,
  month: number,
  day: number,
) {
  await page.goto('/calculator')
  await waitForApp(page)
  const selects = page.locator('select')
  await selects.nth(0).selectOption(String(year))
  await selects.nth(1).selectOption(String(month))
  await selects.nth(2).selectOption(String(day))
  await page.locator('button', { hasText: /Find My Sign/i }).click()
  await page.waitForTimeout(500)
}

test.describe('Composable shared state', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/')
    await clearAllStorage(page)
  })

  // ── 1. useUserSign: calculator → NavBar shows My Sign ─────────────────────
  test('useUserSign: calculating a sign updates the NavBar My Sign link', async ({ page }) => {
    // Calculate metal-horse (1990-06-15)
    await runCalculator(page, 1990, 6, 15)

    // Navigate to homepage where NavBar is always present
    await page.goto('/')
    await waitForApp(page)

    // NavBar should now show a link to /zodiac/metal-horse
    const mySignLink = page.locator('a[href="/zodiac/metal-horse"]')
    await expect(mySignLink.first()).toBeVisible()
  })

  // ── 2. useElementTheme: navigate fire-horse → data-element="fire" ─────────
  test('useElementTheme: navigating to fire-horse sets data-element="fire" on <html>', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    await assertElementTheme(page, 'fire')
  })

  // ── 3. useElementTheme: navigate water-rat → data-element="water" ────────
  test('useElementTheme: navigating to water-rat sets data-element="water" on <html>', async ({ page }) => {
    await page.goto('/zodiac/water-rat')
    await waitForApp(page)

    await assertElementTheme(page, 'water')
  })

  // ── 4. Theme clears on unmount (sign → home → no data-element) ────────────
  test('useElementTheme: data-element is cleared after navigating away from a sign page', async ({ page }) => {
    // First, navigate to a sign page to set the theme
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)
    await assertElementTheme(page, 'fire')

    // Navigate to homepage — no single element should dominate
    await page.goto('/')
    await waitForApp(page)
    await assertNoElementTheme(page)
  })
})
