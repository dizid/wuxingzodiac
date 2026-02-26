import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

test.describe('NotFoundPage (404)', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Unknown route shows 404 ────────────────────────────────────────────
  test('an unknown route shows the 404 page', async ({ page }) => {
    await page.goto('/this-route-does-not-exist-at-all')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('404')
  })

  // ── 2. NavBar remains present on 404 page ────────────────────────────────
  test('NavBar is still present on the 404 page', async ({ page }) => {
    await page.goto('/definitely-not-a-real-page')
    await waitForApp(page)

    // NavBar renders a link back to home
    const homeLink = page.locator('nav a[href="/"]').first()
    await expect(homeLink).toBeVisible()
  })

  // ── 3. Invalid sign slug shows 404 ────────────────────────────────────────
  test('an invalid zodiac sign slug shows the 404 page', async ({ page }) => {
    // "lightning-cat" is not a valid element-animal combination
    await page.goto('/zodiac/lightning-cat')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('404')
  })

  // ── 4. URL is preserved on 404 (no redirect to /404) ─────────────────────
  test('the original URL is preserved — no redirect to /404', async ({ page }) => {
    const targetPath = '/totally-unknown-page-xyz'
    await page.goto(targetPath)
    await waitForApp(page)

    // Vue Router renders the catch-all component in-place without redirecting
    expect(page.url()).toContain(targetPath)
    expect(page.url()).not.toContain('/404')
  })
})
