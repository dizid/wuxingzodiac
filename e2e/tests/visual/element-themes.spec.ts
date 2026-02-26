import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Visual regression tests using Playwright's built-in toHaveScreenshot().
 * Screenshots are stored in e2e/tests/visual/__screenshots__ on first run
 * and compared on subsequent runs.
 *
 * Run with: `npm run test:e2e -- --update-snapshots` to update baselines.
 */

test.describe('Visual regression — element themes', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Use a fixed viewport for consistent screenshots
    await page.setViewportSize({ width: 1280, height: 800 })
    // Disable animations for stable screenshots
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0ms !important;
          transition-duration: 0ms !important;
        }
      `,
    })
  })

  // ── 1. Wood element sign page (wood-rat) ──────────────────────────────────
  test('wood-rat sign page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac/wood-rat')
    await waitForApp(page)
    await page.waitForTimeout(500) // settle animations

    await expect(page).toHaveScreenshot('wood-rat-sign-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 2. Fire element sign page (fire-horse) ────────────────────────────────
  test('fire-horse sign page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('fire-horse-sign-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 3. Earth element sign page (earth-dragon) ─────────────────────────────
  test('earth-dragon sign page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac/earth-dragon')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('earth-dragon-sign-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 4. Metal element sign page (metal-tiger) ──────────────────────────────
  test('metal-tiger sign page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac/metal-tiger')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('metal-tiger-sign-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 5. Water element sign page (water-snake) ──────────────────────────────
  test('water-snake sign page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac/water-snake')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('water-snake-sign-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 6. Homepage screenshot ────────────────────────────────────────────────
  test('homepage screenshot matches baseline', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)
    // Clear personalization for consistent screenshot
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('homepage.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 7. Compatibility results screenshot ───────────────────────────────────
  test('compatibility pair results page screenshot matches baseline', async ({ page }) => {
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('compatibility-results.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 8. Calculator result screenshot ───────────────────────────────────────
  test('calculator result screenshot matches baseline', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    // Fill in the calculator for a consistent result
    const selects = page.locator('select')
    await selects.nth(0).selectOption('1990')
    await selects.nth(1).selectOption('6')
    await selects.nth(2).selectOption('15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()
    await page.waitForTimeout(800)

    await expect(page).toHaveScreenshot('calculator-result.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 9. Directory page screenshot ──────────────────────────────────────────
  test('directory page screenshot matches baseline', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('directory-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })

  // ── 10. Shop page screenshot ──────────────────────────────────────────────
  test('shop page screenshot matches baseline', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('shop-page.png', {
      maxDiffPixelRatio: 0.02,
    })
  })
})
