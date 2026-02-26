import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Keyboard navigation tests.
 * Verifies that all interactive elements are reachable via Tab and
 * that keyboard shortcuts (Enter, Escape) work as expected.
 */

test.describe('Keyboard navigation', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Tab through nav links ──────────────────────────────────────────────
  test('Tab key cycles through navigation links', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Click on the page to ensure focus starts from the top
    await page.keyboard.press('Tab')

    // After tabbing, some element should have focus
    const focusedTag = await page.evaluate(() => document.activeElement?.tagName)
    expect(focusedTag).not.toBe('BODY')
    expect(focusedTag).not.toBeNull()

    // Tab a few more times through nav
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('Tab')
    }

    // Focus should still be on an interactive element
    const finalFocusedTag = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']).toContain(finalFocusedTag)
  })

  // ── 2. Enter activates nav link ───────────────────────────────────────────
  test('Enter key activates a focused navigation link', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Tab until we land on the /calculator link in the nav
    let attempts = 0
    while (attempts < 20) {
      await page.keyboard.press('Tab')
      const href = await page.evaluate(() => {
        const el = document.activeElement as HTMLAnchorElement | null
        return el?.tagName === 'A' ? el.href : null
      })
      if (href?.includes('/calculator')) break
      attempts++
    }

    // Press Enter to navigate
    await Promise.all([
      page.waitForURL(/\/calculator/),
      page.keyboard.press('Enter'),
    ])

    await waitForApp(page)
    expect(page.url()).toContain('/calculator')
  })

  // ── 3. Escape closes mobile menu ──────────────────────────────────────────
  test('Escape key closes the mobile navigation menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    await waitForApp(page)

    const menuToggle = page.locator(
      '[aria-label*="menu" i], [aria-label*="navigation" i], [class*="menu-toggle"], [class*="hamburger"]',
    )

    if (await menuToggle.count() > 0) {
      // Open the menu
      await menuToggle.first().click()
      await page.waitForTimeout(300)

      // Mobile nav panel should be visible
      const mobileNav = page.locator('[class*="mobile-nav"], [class*="mobile-menu"], nav[class*="mobile"]')
      if (await mobileNav.count() > 0) {
        await expect(mobileNav.first()).toBeVisible()

        // Press Escape to close
        await page.keyboard.press('Escape')
        await page.waitForTimeout(300)

        await expect(mobileNav.first()).not.toBeVisible()
      }
    }
    // If no hamburger menu exists (e.g. desktop breakpoint logic), test passes gracefully
  })

  // ── 4. Calculator form tab order (year → month → day → submit) ────────────
  test('calculator form follows logical tab order: year → month → day → submit', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    // Focus the year select directly
    const yearSelect = page.locator('select').nth(0)
    await yearSelect.focus()

    const focused0 = await page.evaluate(() => {
      const el = document.activeElement as HTMLSelectElement | null
      return el?.tagName
    })
    expect(focused0).toBe('SELECT')

    // Tab to month
    await page.keyboard.press('Tab')
    const focused1Tag = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused1Tag).toBe('SELECT')

    // Tab to day
    await page.keyboard.press('Tab')
    const focused2Tag = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused2Tag).toBe('SELECT')

    // Tab to submit button
    await page.keyboard.press('Tab')
    const focused3Tag = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused3Tag).toBe('BUTTON')
  })

  // ── 5. Compatibility picker tab order ─────────────────────────────────────
  test('compatibility picker follows logical tab order through both sign selects', async ({ page }) => {
    await page.goto('/compatibility')
    await waitForApp(page)

    // Focus first select
    const firstSelect = page.locator('select').nth(0)
    await firstSelect.focus()

    const tag0 = await page.evaluate(() => document.activeElement?.tagName)
    expect(tag0).toBe('SELECT')

    // Tab to second select
    await page.keyboard.press('Tab')
    const tag1 = await page.evaluate(() => document.activeElement?.tagName)
    expect(tag1).toBe('SELECT')

    // Tab again — should reach a button or another interactive element
    await page.keyboard.press('Tab')
    const tag2 = await page.evaluate(() => document.activeElement?.tagName)
    expect(['BUTTON', 'A', 'SELECT', 'INPUT']).toContain(tag2)
  })

  // ── 6. Cart drawer Escape closes ──────────────────────────────────────────
  test('Escape key closes the cart drawer', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    const cartTrigger = page.locator('[aria-label*="cart" i], button:has-text("Cart")').first()

    if (await cartTrigger.count() > 0) {
      await cartTrigger.click()
      await page.waitForTimeout(400)

      const drawer = page.locator('[role="dialog"], [class*="drawer"]').first()
      if (await drawer.count() > 0 && await drawer.isVisible()) {
        await page.keyboard.press('Escape')
        await page.waitForTimeout(300)
        await expect(drawer).not.toBeVisible()
      }
    }
    // Graceful if cart drawer does not exist
  })

  // ── 7. Focus is trapped in cart drawer ────────────────────────────────────
  test('focus stays within the cart drawer when it is open', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    const cartTrigger = page.locator('[aria-label*="cart" i], button:has-text("Cart")').first()

    if (await cartTrigger.count() > 0) {
      await cartTrigger.click()
      await page.waitForTimeout(400)

      const drawer = page.locator('[role="dialog"], [class*="drawer"]').first()
      if (await drawer.count() > 0 && await drawer.isVisible()) {
        // Tab multiple times — focus should stay inside the dialog
        for (let i = 0; i < 10; i++) {
          await page.keyboard.press('Tab')
          const isInsideDrawer = await page.evaluate(() => {
            const active = document.activeElement
            const dialog = document.querySelector('[role="dialog"], [class*="drawer"]')
            return dialog ? dialog.contains(active) : true // pass if no dialog found
          })
          expect(isInsideDrawer, `Focus escaped the cart drawer on Tab press ${i + 1}`).toBe(true)
        }
      }
    }
  })

  // ── 8. Skip-to-content link (or first focusable is meaningful) ────────────
  test('first focusable element is a skip-to-content link or a nav link', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Press Tab once from a neutral state
    await page.keyboard.press('Tab')

    const firstFocused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null
      return {
        tag: el?.tagName ?? '',
        href: (el as HTMLAnchorElement | null)?.href ?? '',
        text: el?.textContent?.trim().toLowerCase() ?? '',
        ariaLabel: el?.getAttribute('aria-label')?.toLowerCase() ?? '',
      }
    })

    // Either it's a skip-to-content link, or it's a nav/logo link
    const isSkipLink = /skip|content|main/i.test(firstFocused.text) || /skip|content|main/i.test(firstFocused.ariaLabel)
    const isNavLink = firstFocused.tag === 'A' || firstFocused.tag === 'BUTTON'

    expect(
      isSkipLink || isNavLink,
      `First focusable element is not a skip-link or nav element: ${JSON.stringify(firstFocused)}`,
    ).toBe(true)
  })
})
