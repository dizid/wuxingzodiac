import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

test.describe('Static Pages', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. About page renders ─────────────────────────────────────────────────
  test('/about renders a heading and content', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/about wu xing zodiac/i)

    // At least one paragraph of body content is present
    const content = page.locator('p').first()
    await expect(content).toBeVisible()
  })

  // ── 2. About page contains key body text ─────────────────────────────────
  test('/about contains information about the Wu Xing system', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    // Confirm substantive copy is rendered
    await expect(page.locator('body')).toContainText(/five elements|wu xing|60/i)
  })

  // ── 3. Privacy page renders ───────────────────────────────────────────────
  test('/privacy renders a heading and content', async ({ page }) => {
    await page.goto('/privacy')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/privacy/i)

    // Body has paragraphs
    const paragraphs = page.locator('p')
    await expect(paragraphs.first()).toBeVisible()
  })

  // ── 4. Terms page renders ─────────────────────────────────────────────────
  test('/terms renders a heading and content', async ({ page }) => {
    await page.goto('/terms')
    await waitForApp(page)

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/terms/i)

    // Body has paragraphs
    const paragraphs = page.locator('p')
    await expect(paragraphs.first()).toBeVisible()
  })

  // ── 5. NavBar is present on static pages ─────────────────────────────────
  test('NavBar is present on the About page', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    // NavBar renders a link to the home page
    const homeLink = page.locator('nav a[href="/"]').first()
    await expect(homeLink).toBeVisible()
  })

  // ── 6. About page links to the calculator ────────────────────────────────
  test('/about has a "Go to Calculator" CTA linking to /calculator', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    const ctaLink = page.locator('a[href="/calculator"]').filter({ hasText: /calculator/i })
    await expect(ctaLink).toBeVisible()
  })
})
