import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Network request tests.
 * Verifies that pages only make API calls when expected and never duplicate them.
 */

// Patterns for API calls we care about
const API_PATTERNS = [
  /\/api\/blog/,
  /\/api\/newsletter/,
  /\/api\/download-report/,
  /\/api\/create-checkout/,
  /shopify\.com/,
]

function isApiCall(url: string): boolean {
  return API_PATTERNS.some((pattern) => pattern.test(url))
}

test.describe('Network request hygiene', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Static pages make no API calls ─────────────────────────────────────
  test('static pages (about, privacy, terms) make no API calls', async ({ page }) => {
    const staticPages = ['/about', '/privacy', '/terms']

    for (const path of staticPages) {
      const apiCalls: string[] = []

      page.on('request', (request) => {
        if (isApiCall(request.url())) {
          apiCalls.push(request.url())
        }
      })

      await page.goto(path)
      await waitForApp(page)

      expect(
        apiCalls,
        `Static page ${path} should not make API calls. Got: ${apiCalls.join(', ')}`,
      ).toHaveLength(0)

      // Remove listener before next iteration
      page.removeAllListeners('request')
    }
  })

  // ── 2. Sign page makes no API calls ───────────────────────────────────────
  test('sign page makes no API calls (all content is static / pre-rendered)', async ({ page }) => {
    const apiCalls: string[] = []

    page.on('request', (request) => {
      if (isApiCall(request.url())) {
        apiCalls.push(request.url())
      }
    })

    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    expect(
      apiCalls.filter((url) => !url.includes('shopify')), // Shopify is optional for sign shop
      'Sign page should not call blog/newsletter/checkout APIs',
    ).toHaveLength(0)
  })

  // ── 3. Blog page makes API call to fetch posts ────────────────────────────
  test('blog page makes at least one API call to fetch posts', async ({ page }) => {
    const blogApiCalls: string[] = []

    // Track blog API calls specifically
    await page.route('**/api/blog-posts**', (route) => {
      blogApiCalls.push(route.request().url())
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], total: 0, page: 1 }),
      })
    })

    await page.route('**/api/blog/posts**', (route) => {
      blogApiCalls.push(route.request().url())
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })

    await page.goto('/blog')
    await waitForApp(page)

    expect(
      blogApiCalls.length,
      'Blog page should make at least one API call to fetch posts',
    ).toBeGreaterThan(0)
  })

  // ── 4. No duplicate requests on sign page ────────────────────────────────
  test('sign page does not make duplicate requests for the same resource', async ({ page }) => {
    const requestUrls: string[] = []

    page.on('request', (request) => {
      // Track all fetch/XHR requests
      if (request.resourceType() === 'fetch' || request.resourceType() === 'xhr') {
        requestUrls.push(request.url())
      }
    })

    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // Find any URLs that appear more than once
    const urlCounts = requestUrls.reduce<Record<string, number>>((acc, url) => {
      acc[url] = (acc[url] ?? 0) + 1
      return acc
    }, {})

    const duplicates = Object.entries(urlCounts).filter(([, count]) => count > 1)

    expect(
      duplicates,
      `Duplicate requests detected on sign page: ${JSON.stringify(duplicates)}`,
    ).toHaveLength(0)
  })
})
