import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { setUserSign, clearAllStorage } from '../../helpers/storage'

/**
 * NavBar link tests — verify the desktop navigation works correctly.
 * 10 tests covering logo, nav links, active states, My Sign, and Shop link.
 */

test.describe('NavBar — desktop navigation', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Also mock blog route used by BlogPage
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })
  })

  test('1. Logo links to homepage', async ({ page }) => {
    // Start on a non-home page, then click logo
    await page.goto('/zodiac')
    await waitForApp(page)

    const logo = page.locator('nav a[href="/"]').first()
    await expect(logo).toBeVisible()
    await logo.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/')
  })

  test('2. "All Signs" nav link navigates to /zodiac', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Desktop nav: hidden on mobile, visible on md+
    const allSignsLink = page.locator('nav a[href="/zodiac"]').first()
    await expect(allSignsLink).toBeVisible()
    await allSignsLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/zodiac')
  })

  test('3. "Compatibility" nav link navigates to /compatibility', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const compatLink = page.locator('nav a[href="/compatibility"]').first()
    await expect(compatLink).toBeVisible()
    await compatLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/compatibility')
  })

  test('4. "Shop" nav link navigates to /shop', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const shopLink = page.locator('nav a[href="/shop"]').first()
    await expect(shopLink).toBeVisible()
    await shopLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/shop')
  })

  test('5. "Calculator" nav link navigates to /calculator', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const calcLink = page.locator('nav a[href="/calculator"]').first()
    await expect(calcLink).toBeVisible()
    await calcLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/calculator')
  })

  test('6. "Blog" nav link navigates to /blog', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const blogLink = page.locator('nav a[href="/blog"]').first()
    await expect(blogLink).toBeVisible()
    await blogLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/blog')
  })

  test('7. Active state applied to current page nav link', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)

    // The active class includes a specific text-[var(--el-primary)] class (checked via aria or class)
    // NavBar uses isActive() to apply the active class — we verify the link has a distinguishing class
    const zodiacLink = page.locator('nav a[href="/zodiac"]').first()
    await expect(zodiacLink).toBeVisible()

    // Active link has different styling from inactive ones — check it has the active class
    // The active class from NavBar.vue is: 'text-[var(--el-primary)] bg-[rgba(var(--el-glow-rgb),0.1)]'
    // We check the link has a class containing 'el-primary' (the active indicator)
    const className = await zodiacLink.getAttribute('class')
    expect(className).toContain('el-primary')
  })

  test('8. "My Sign" link is hidden when no user sign is set', async ({ page }) => {
    await page.goto('/')
    await clearAllStorage(page)
    await page.reload()
    await waitForApp(page)

    // No localStorage → userSign is null → "My Sign" not rendered
    const mySignLink = page.locator('nav a', { hasText: /my sign/i })
    await expect(mySignLink).toHaveCount(0)
  })

  test('9. "My Sign" link appears after setting user sign in localStorage', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Set the user sign via localStorage (the key used by useUserSign composable)
    await page.evaluate(() => localStorage.setItem('wuxing_user_sign', 'fire-horse'))

    // Reload so Vue picks up the stored value on mount
    await page.reload()
    await waitForApp(page)

    // "My Sign" link should now appear in the nav
    const mySignLink = page.locator('nav a', { hasText: /my sign/i }).first()
    await expect(mySignLink).toBeVisible()
    await expect(mySignLink).toHaveAttribute('href', '/zodiac/fire-horse')
  })

  test('10. Shop link navigates to /shop', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const shopLink = page.locator('nav a[href="/shop"]').first()
    await expect(shopLink).toBeVisible()
    await shopLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/shop')
  })
})
