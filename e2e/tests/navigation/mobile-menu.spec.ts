import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'

/**
 * Mobile menu tests — runs at 375x812 viewport (iPhone SE / common mobile size).
 * 8 tests covering hamburger toggle, links, auto-close, aria, and My Sign.
 */

test.use({ viewport: { width: 375, height: 812 } })

test.describe('Mobile menu (375px viewport)', () => {
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

  test('1. Hamburger button is visible and desktop nav links are hidden', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Hamburger: the button with aria-label "Open menu" / "Close menu"
    const hamburger = page.locator('button[aria-label="Open menu"]')
    await expect(hamburger).toBeVisible()

    // Desktop nav container has class "hidden md:flex" — it should not be visible at 375px
    const desktopNav = page.locator('nav .hidden.md\\:flex')
    await expect(desktopNav).not.toBeVisible()
  })

  test('2. Tapping hamburger opens the mobile menu', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Mobile menu panel is not present yet
    const mobileMenu = page.locator('nav .md\\:hidden').filter({ hasText: /all signs/i })
    await expect(mobileMenu).not.toBeVisible()

    // Click hamburger
    const hamburger = page.locator('button[aria-label="Open menu"]')
    await hamburger.click()

    // Mobile menu panel now visible
    const mobileMenuAfter = page.locator('nav div.md\\:hidden.glass-strong')
    await expect(mobileMenuAfter).toBeVisible()
  })

  test('3. Tapping hamburger again closes the mobile menu', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Open
    const hamburger = page.locator('button[aria-label="Open menu"]')
    await hamburger.click()

    const mobileMenuPanel = page.locator('nav div.md\\:hidden.glass-strong')
    await expect(mobileMenuPanel).toBeVisible()

    // The aria-label changes to "Close menu" when open
    const closeButton = page.locator('button[aria-label="Close menu"]')
    await closeButton.click()

    await expect(mobileMenuPanel).not.toBeVisible()
  })

  test('4. Mobile menu links navigate to correct pages', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Open mobile menu
    await page.locator('button[aria-label="Open menu"]').click()

    // Click the "All Signs" link inside the mobile menu panel
    const allSignsLink = page.locator('nav div.md\\:hidden.glass-strong a[href="/zodiac"]')
    await expect(allSignsLink).toBeVisible()
    await allSignsLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/zodiac')
  })

  test('5. Mobile menu auto-closes after navigating', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Open menu
    await page.locator('button[aria-label="Open menu"]').click()
    const mobileMenuPanel = page.locator('nav div.md\\:hidden.glass-strong')
    await expect(mobileMenuPanel).toBeVisible()

    // Click a nav link — closeMobileMenu() is called via @click on RouterLink
    const calcLink = page.locator('nav div.md\\:hidden.glass-strong a[href="/calculator"]')
    await calcLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/calculator')
    // Menu is closed
    await expect(mobileMenuPanel).not.toBeVisible()
  })

  test('6. Hamburger aria-expanded reflects open/closed state', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // aria-expanded is bound to mobileMenuOpen ref in NavBar.vue
    const hamburger = page.locator('button[aria-label="Open menu"]')

    // Closed: aria-expanded="false"
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    // Open menu
    await hamburger.click()

    // The button aria-label changes — re-select by "Close menu"
    const closeButton = page.locator('button[aria-label="Close menu"]')
    await expect(closeButton).toHaveAttribute('aria-expanded', 'true')
  })

  test('7. "My Sign" does not appear in mobile menu when no sign is set', async ({ page }) => {
    await page.goto('/')
    await clearAllStorage(page)
    await page.reload()
    await waitForApp(page)

    // Open mobile menu
    await page.locator('button[aria-label="Open menu"]').click()

    const mobileMenuPanel = page.locator('nav div.md\\:hidden.glass-strong')
    await expect(mobileMenuPanel).toBeVisible()

    // "My Sign" link should not exist in the mobile menu
    const mySignLink = mobileMenuPanel.locator('a', { hasText: /my sign/i })
    await expect(mySignLink).toHaveCount(0)
  })

  test('8. "My Sign" appears in mobile menu after setting localStorage user sign', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Set user sign
    await page.evaluate(() => localStorage.setItem('wuxing_user_sign', 'water-snake'))
    await page.reload()
    await waitForApp(page)

    // Open mobile menu
    await page.locator('button[aria-label="Open menu"]').click()

    const mobileMenuPanel = page.locator('nav div.md\\:hidden.glass-strong')
    await expect(mobileMenuPanel).toBeVisible()

    // "My Sign" link now present in mobile menu
    const mySignLink = mobileMenuPanel.locator('a', { hasText: /my sign/i })
    await expect(mySignLink).toBeVisible()
    await expect(mySignLink).toHaveAttribute('href', '/zodiac/water-snake')
  })
})
