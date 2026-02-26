import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Desktop layout tests at 1280x800.
 * Verifies grid columns, max-width constraints, and cart drawer sizing.
 */

test.describe('Desktop layout (1280x800)', () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Directory grid shows 4+ columns at desktop ─────────────────────────
  test('directory grid shows 4 or more columns at 1280px', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)

    const cards = page.locator('a[href^="/zodiac/"][href*="-"]')
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(4)

    // Check that at least 4 cards are in the same row (same Y coordinate within 10px)
    const boxes = await Promise.all(
      Array.from({ length: Math.min(count, 8) }, (_, i) => cards.nth(i).boundingBox()),
    )

    const validBoxes = boxes.filter((b): b is NonNullable<typeof b> => b !== null)
    if (validBoxes.length >= 4) {
      // Group by approximate Y position
      const firstRowY = validBoxes[0].y
      const firstRowCards = validBoxes.filter((b) => Math.abs(b.y - firstRowY) <= 10)
      expect(firstRowCards.length).toBeGreaterThanOrEqual(4)
    }
  })

  // ── 2. Content has max-width constraint ───────────────────────────────────
  test('main content is constrained to a max-width at 1280px (not edge-to-edge)', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // The main content container should not be full viewport width
    const mainContent = page.locator('main, [class*="container"], [class*="max-w"]').first()

    if (await mainContent.count() > 0) {
      const box = await mainContent.boundingBox()
      if (box) {
        // Max-width containers are typically 768px–1400px wide
        // At 1280px viewport, content should be less than 1280px wide (has side margins)
        expect(box.width).toBeLessThan(1280)
        expect(box.width).toBeGreaterThan(700)
      }
    }
  })

  // ── 3. Homepage sections are centred ─────────────────────────────────────
  test('homepage hero section is horizontally centred at 1280px', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const hero = page.locator('h1').first()
    await expect(hero).toBeVisible()

    const heroBox = await hero.boundingBox()
    if (heroBox) {
      // The H1 should be roughly centred: left margin > 50px from viewport edge
      expect(heroBox.x).toBeGreaterThan(50)
      // And right edge should not touch the viewport edge
      expect(heroBox.x + heroBox.width).toBeLessThan(1230)
    }
  })

  // ── 4. Cart drawer has constrained width at desktop ────────────────────────
  test('cart drawer does not span full viewport width at desktop', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    // Open the cart drawer
    const cartTrigger = page.locator('[aria-label*="cart" i], button:has-text("Cart")').first()

    if (await cartTrigger.count() > 0) {
      await cartTrigger.click()
      await page.waitForTimeout(400)

      const drawer = page.locator('[role="dialog"], [class*="drawer"], [class*="cart"]').first()
      if (await drawer.count() > 0 && await drawer.isVisible()) {
        const box = await drawer.boundingBox()
        if (box) {
          // Cart drawer on desktop should be narrower than the viewport (e.g. a side panel)
          expect(box.width).toBeLessThan(1280)
          // But still wide enough to be useful (>= 280px)
          expect(box.width).toBeGreaterThanOrEqual(280)
        }
      }
    } else {
      // No cart trigger visible — just verify the shop page renders correctly
      await expect(page.locator('body')).toContainText(/collection|shop|merch/i)
    }
  })
})
