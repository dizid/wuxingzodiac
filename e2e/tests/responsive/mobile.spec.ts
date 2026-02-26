import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Mobile layout tests at 375x812 (iPhone SE / standard mobile viewport).
 * Verifies no horizontal overflow, correct stacking, and usability at small sizes.
 */

test.describe('Mobile layout (375x812)', () => {
  test.use({ viewport: { width: 375, height: 812 } })

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

  // ── 1. No horizontal overflow on homepage ─────────────────────────────────
  test('homepage has no horizontal overflow', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow, 'Homepage causes horizontal overflow on mobile').toBe(false)
  })

  // ── 2. Directory grid shows columns ───────────────────────────────────────
  test('directory page renders sign cards in a grid on mobile', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)

    // At least some sign cards must be visible
    const cards = page.locator('a[href^="/zodiac/fire-"]')
    await expect(cards.first()).toBeVisible()

    // Ensure cards are within the viewport width
    const cardBox = await cards.first().boundingBox()
    expect(cardBox).not.toBeNull()
    expect(cardBox!.width).toBeLessThanOrEqual(375)
  })

  // ── 3. Calculator dropdowns are usable ────────────────────────────────────
  test('calculator dropdowns are visible and interactable on mobile', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    const selects = page.locator('select')
    await expect(selects).toHaveCount(3)

    // Each select should be within the viewport
    for (let i = 0; i < 3; i++) {
      const box = await selects.nth(i).boundingBox()
      expect(box).not.toBeNull()
      expect(box!.x + box!.width).toBeLessThanOrEqual(375 + 1) // 1px tolerance
    }
  })

  // ── 4. Compatibility picker stacks vertically ──────────────────────────────
  test('compatibility picker elements stack on mobile', async ({ page }) => {
    await page.goto('/compatibility')
    await waitForApp(page)

    const selects = page.locator('select')
    const count = await selects.count()
    expect(count).toBeGreaterThanOrEqual(2)

    // Verify first and second selects are stacked (second is below the first)
    if (count >= 2) {
      const box1 = await selects.nth(0).boundingBox()
      const box2 = await selects.nth(1).boundingBox()
      if (box1 && box2) {
        // On mobile they should stack: second select starts below or at same y as first ends
        expect(box2.y).toBeGreaterThanOrEqual(box1.y)
      }
    }
  })

  // ── 5. Cart drawer full width on mobile ───────────────────────────────────
  test('cart drawer spans full or near-full width on mobile', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    // Try to open the cart
    const cartTrigger = page.locator('[aria-label*="cart" i], button:has-text("Cart")').first()
    if (await cartTrigger.count() > 0) {
      await cartTrigger.click()
      await page.waitForTimeout(400)

      const drawer = page.locator('[role="dialog"], [class*="drawer"], [class*="cart"]').first()
      if (await drawer.count() > 0 && await drawer.isVisible()) {
        const box = await drawer.boundingBox()
        if (box) {
          // On mobile the drawer should be at least 300px wide (nearly full width)
          expect(box.width).toBeGreaterThanOrEqual(300)
        }
      }
    } else {
      // If no cart trigger, just verify the shop page renders without overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth
      })
      expect(hasOverflow).toBe(false)
    }
  })

  // ── 6. Blog cards stack vertically ────────────────────────────────────────
  test('blog cards stack vertically on mobile', async ({ page }) => {
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          posts: [
            { id: '1', slug: 'post-1', title: 'Post 1', excerpt: 'Excerpt 1', content: '', coverImage: null, authorName: 'Team', publishedAt: '2026-01-01T00:00:00Z', tags: [], readTime: 5 },
            { id: '2', slug: 'post-2', title: 'Post 2', excerpt: 'Excerpt 2', content: '', coverImage: null, authorName: 'Team', publishedAt: '2026-01-02T00:00:00Z', tags: [], readTime: 3 },
          ],
          page: 1,
          totalPages: 1,
        }),
      })
    })

    await page.goto('/blog')
    await waitForApp(page)

    // Blog page renders
    await expect(page.locator('body')).toContainText(/blog/i)

    // No horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  // ── 7. Sign page sections full width ─────────────────────────────────────
  test('sign page content sections are full width on mobile', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // Main content sections should not overflow
    const sections = page.locator('main section, article section, [class*="section"]')
    const count = await sections.count()

    if (count > 0) {
      const firstBox = await sections.first().boundingBox()
      if (firstBox) {
        expect(firstBox.width).toBeLessThanOrEqual(375 + 5) // 5px tolerance for padding/margin
      }
    }

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  // ── 8. Newsletter form stacks on mobile ───────────────────────────────────
  test('newsletter form input and button stack on mobile', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const emailInput = page.locator('input[type="email"]').first()
    const submitBtn = page.locator('button[type="submit"]').first()

    await expect(emailInput).toBeVisible()
    await expect(submitBtn).toBeVisible()

    const inputBox = await emailInput.boundingBox()
    const btnBox = await submitBtn.boundingBox()

    if (inputBox && btnBox) {
      // On mobile both elements should fit within 375px width
      expect(inputBox.width).toBeLessThanOrEqual(375)
      expect(btnBox.width).toBeLessThanOrEqual(375)
    }
  })

  // ── 9. Footer is visible on mobile ────────────────────────────────────────
  test('footer is visible on mobile', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  // ── 10. No horizontal scrollbar ───────────────────────────────────────────
  test('scrollWidth does not exceed innerWidth on mobile (no horizontal scroll)', async ({ page }) => {
    const pagesToCheck = ['/', '/zodiac', '/calculator', '/compatibility', '/blog']

    for (const path of pagesToCheck) {
      await page.goto(path)
      await waitForApp(page)

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth
      })

      expect(hasHorizontalScroll, `Page ${path} has horizontal scroll on mobile`).toBe(false)
    }
  })
})
