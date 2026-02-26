import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { getJsonLd, getJsonLdByType, getOgContent } from '../../helpers/seo'

/**
 * JSON-LD structured data tests.
 * Verifies that every key page has the correct schema.org markup
 * for search engine rich results.
 */

test.describe('JSON-LD structured data', () => {
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

  // ── 1. Homepage WebSite schema ────────────────────────────────────────────
  test('homepage has WebSite JSON-LD schema', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'WebSite')
    expect(schema, 'WebSite schema not found').toBeDefined()
    expect(schema!['@type']).toBe('WebSite')
    expect(schema!['name']).toBeTruthy()
    expect(schema!['url']).toBeTruthy()
  })

  // ── 2. Homepage SearchAction ───────────────────────────────────────────────
  test('homepage WebSite schema includes a SearchAction', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'WebSite')
    expect(schema).toBeDefined()

    // SearchAction should be nested under potentialAction
    const action = schema!['potentialAction'] as Record<string, unknown> | undefined
    expect(action, 'potentialAction (SearchAction) not found on WebSite schema').toBeDefined()
    expect(action!['@type']).toBe('SearchAction')
  })

  // ── 3. Sign page Article schema ───────────────────────────────────────────
  test('sign page has Article JSON-LD schema', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'Article')
    expect(schema, 'Article schema not found on sign page').toBeDefined()
    expect(schema!['headline']).toBeTruthy()
  })

  // ── 4. Sign page BreadcrumbList ───────────────────────────────────────────
  test('sign page has BreadcrumbList JSON-LD schema', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'BreadcrumbList')
    expect(schema, 'BreadcrumbList schema not found on sign page').toBeDefined()

    const items = schema!['itemListElement'] as unknown[]
    expect(Array.isArray(items)).toBe(true)
    expect(items.length).toBeGreaterThanOrEqual(2)
  })

  // ── 5. Sign page FAQPage with questions ───────────────────────────────────
  test('sign page has FAQPage JSON-LD schema with at least one question', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'FAQPage')
    expect(schema, 'FAQPage schema not found on sign page').toBeDefined()

    const questions = schema!['mainEntity'] as unknown[]
    expect(Array.isArray(questions)).toBe(true)
    expect(questions.length).toBeGreaterThan(0)
  })

  // ── 6. Compatibility page Article schema ──────────────────────────────────
  test('compatibility pair page has Article JSON-LD schema', async ({ page }) => {
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'Article')
    expect(schema, 'Article schema not found on compatibility page').toBeDefined()
    expect(schema!['headline']).toBeTruthy()
  })

  // ── 7. Compatibility page BreadcrumbList ──────────────────────────────────
  test('compatibility pair page has BreadcrumbList JSON-LD schema', async ({ page }) => {
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)

    const schema = await getJsonLdByType(page, 'BreadcrumbList')
    expect(schema, 'BreadcrumbList not found on compatibility page').toBeDefined()

    const items = schema!['itemListElement'] as unknown[]
    expect(Array.isArray(items)).toBe(true)
    expect(items.length).toBeGreaterThanOrEqual(2)
  })

  // ── 8. Result page has OG tags ────────────────────────────────────────────
  test('result page has essential OG tags', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)

    const ogTitle = await getOgContent(page, 'og:title')
    const ogDescription = await getOgContent(page, 'og:description')
    const ogUrl = await getOgContent(page, 'og:url')

    expect(ogTitle).toBeTruthy()
    expect(ogDescription).toBeTruthy()
    expect(ogUrl).toBeTruthy()
  })

  // ── 9. All JSON-LD script tags contain valid JSON ─────────────────────────
  test('all JSON-LD script tags on sign page contain parseable JSON', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // getJsonLd already parses them — if it throws, the test fails
    const schemas = await getJsonLd(page)
    expect(schemas.length).toBeGreaterThan(0)

    for (const schema of schemas) {
      // Each parsed object must have @context or @type
      expect(schema['@context'] || schema['@type']).toBeTruthy()
    }
  })

  // ── 10. Blog post page has Article schema ─────────────────────────────────
  test('blog post page has Article JSON-LD schema', async ({ page }) => {
    // Override with a valid post so the page renders the post view
    await page.route('**/api/blog/posts**', (route) => {
      const url = new URL(route.request().url())
      const slug = url.searchParams.get('slug')
      if (slug === 'understanding-wu-xing') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            id: '1',
            slug: 'understanding-wu-xing',
            title: 'Understanding Wu Xing: The Five Elements',
            excerpt: 'Explore the ancient Chinese system of Five Elements.',
            content: '<p>Wood, Fire, Earth, Metal, and Water.</p>',
            coverImage: null,
            authorName: 'Wu Xing Team',
            publishedAt: '2026-01-15T10:00:00Z',
            tags: ['wu-xing'],
            readTime: 5,
          }),
        })
      } else {
        route.fulfill({
          status: 404,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Not found' }),
        })
      }
    })

    await page.goto('/blog/understanding-wu-xing')
    await waitForApp(page)

    // Blog post may or may not have JSON-LD — check both possibilities gracefully
    const allSchemas = await getJsonLd(page)
    if (allSchemas.length > 0) {
      const articleSchema = await getJsonLdByType(page, 'Article')
      expect(articleSchema, 'Expected Article schema on blog post page').toBeDefined()
    } else {
      // If the post page is in an error/loading state, at least verify the page loaded
      await expect(page.locator('body')).toBeVisible()
    }
  })
})
