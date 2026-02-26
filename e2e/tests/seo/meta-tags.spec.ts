import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { getMetaContent, getOgContent } from '../../helpers/seo'

/**
 * SEO meta tag tests.
 * Every public page must have a unique <title>, <meta description>,
 * and appropriate OG / Twitter tags for social sharing.
 */

test.describe('SEO meta tags', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Also route the blog API that BlogPage.vue may use
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })
  })

  // ── 1. Homepage title ─────────────────────────────────────────────────────
  test('homepage title contains "Wu Xing Zodiac"', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const title = await page.title()
    expect(title).toMatch(/wu xing zodiac/i)
  })

  // ── 2. Homepage meta description ──────────────────────────────────────────
  test('homepage has a non-empty meta description', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const description = await getMetaContent(page, 'description')
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(20)
  })

  // ── 3. Sign page title contains sign name ─────────────────────────────────
  test('sign page title contains "Fire Horse"', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const title = await page.title()
    expect(title).toMatch(/fire horse/i)
  })

  // ── 4. Sign page meta description ────────────────────────────────────────
  test('sign page has a non-empty meta description', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const description = await getMetaContent(page, 'description')
    expect(description).toBeTruthy()
    expect(description!.length).toBeGreaterThan(20)
  })

  // ── 5. Sign page OG image ─────────────────────────────────────────────────
  test('sign page has an og:image meta tag', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const ogImage = await getOgContent(page, 'og:image')
    expect(ogImage).toBeTruthy()
    expect(ogImage!.length).toBeGreaterThan(0)
  })

  // ── 6. Sign page OG type = article ───────────────────────────────────────
  test('sign page og:type is "article"', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const ogType = await getOgContent(page, 'og:type')
    expect(ogType).toBe('article')
  })

  // ── 7. Calculator page title ──────────────────────────────────────────────
  test('calculator page has a relevant title', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    const title = await page.title()
    expect(title.length).toBeGreaterThan(5)
    expect(title).toMatch(/sign|calculator|zodiac|what/i)
  })

  // ── 8. Compatibility pair title contains both sign names ──────────────────
  test('compatibility pair page title contains both sign names', async ({ page }) => {
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)

    const title = await page.title()
    expect(title).toMatch(/earth dragon/i)
    expect(title).toMatch(/fire horse/i)
  })

  // ── 9. Result page title ──────────────────────────────────────────────────
  test('result page title is non-empty and relevant', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)

    const title = await page.title()
    expect(title.length).toBeGreaterThan(5)
    expect(title).toMatch(/fire horse|result|sign/i)
  })

  // ── 10. Result page twitter:card = summary_large_image ────────────────────
  test('result page has twitter:card = summary_large_image', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)

    const twitterCard = await getMetaContent(page, 'twitter:card')
    expect(twitterCard).toBe('summary_large_image')
  })

  // ── 11. Blog page title ───────────────────────────────────────────────────
  test('blog page has a relevant title', async ({ page }) => {
    await page.goto('/blog')
    await waitForApp(page)

    const title = await page.title()
    expect(title.length).toBeGreaterThan(5)
    expect(title).toMatch(/blog|wu xing|zodiac/i)
  })

  // ── 12. About page title ──────────────────────────────────────────────────
  test('about page has a relevant title', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    const title = await page.title()
    expect(title.length).toBeGreaterThan(5)
    expect(title).toMatch(/about|wu xing|zodiac/i)
  })
})
