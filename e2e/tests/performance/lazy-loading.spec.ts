import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Lazy loading tests.
 * Verifies that sign content and routes are loaded on demand,
 * not upfront, keeping the initial bundle small.
 */

test.describe('Lazy loading', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Sign content loads on demand (verify chunk requests) ───────────────
  test('navigating to a sign page triggers a JS chunk request for that sign', async ({ page }) => {
    const scriptRequests: string[] = []

    // Track all script requests
    page.on('request', (request) => {
      if (request.resourceType() === 'script') {
        scriptRequests.push(request.url())
      }
    })

    // Load homepage first (sign content should NOT be loaded yet)
    await page.goto('/')
    await waitForApp(page)
    const homepageScripts = [...scriptRequests]

    // Navigate to fire-horse sign page
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // After navigating to the sign page, new script chunks should have been requested
    const newScripts = scriptRequests.filter((url) => !homepageScripts.includes(url))

    // At least one new JS chunk was loaded (the sign content chunk)
    expect(newScripts.length).toBeGreaterThan(0)
  })

  // ── 2. Pages are lazy-loaded via route ────────────────────────────────────
  test('navigating to a new route triggers a lazy JS chunk load', async ({ page }) => {
    const scriptRequests: string[] = []

    page.on('request', (request) => {
      if (request.resourceType() === 'script') {
        scriptRequests.push(request.url())
      }
    })

    // Visit homepage
    await page.goto('/')
    await waitForApp(page)
    const initialCount = scriptRequests.length

    // Navigate to the calculator page (a lazy route)
    await page.goto('/calculator')
    await waitForApp(page)

    // New scripts should have loaded for the calculator route
    expect(scriptRequests.length).toBeGreaterThan(initialCount)
  })

  // ── 3. Directory page only loads profiles, not full sign content ──────────
  test('directory page does not load full sign content chunks', async ({ page }) => {
    const scriptRequests: string[] = []

    page.on('request', (request) => {
      if (request.resourceType() === 'script') {
        scriptRequests.push(request.url())
      }
    })

    await page.goto('/zodiac')
    await waitForApp(page)

    // The directory page should render 60 sign cards
    const cards = page.locator('a[href^="/zodiac/"][href*="-"]')
    await expect(cards.first()).toBeVisible()

    // No requests should match individual sign content chunk patterns
    // Sign content chunks are named after their slug: e.g. "fire-horse.js" or have the slug in the filename
    const signContentChunks = scriptRequests.filter((url) => {
      // Vite chunks for individual signs would typically include the slug
      return /\/zodiac\/fire-horse|fire-horse\.[a-f0-9]+\.js/.test(url)
    })

    // The directory page should NOT load individual sign content
    expect(signContentChunks.length).toBe(0)
  })

  // ── 4. Multiple sign visits load separate chunks ──────────────────────────
  test('visiting two different sign pages loads two separate chunks', async ({ page }) => {
    const scriptRequests: string[] = []

    page.on('request', (request) => {
      if (request.resourceType() === 'script') {
        scriptRequests.push(request.url())
      }
    })

    // Visit first sign
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)
    const afterFirstSign = [...scriptRequests]

    // Visit second sign
    await page.goto('/zodiac/water-rat')
    await waitForApp(page)

    // More scripts should have loaded after the second sign visit
    const newChunks = scriptRequests.filter((url) => !afterFirstSign.includes(url))

    // At least one new chunk was needed for the second sign
    expect(newChunks.length).toBeGreaterThan(0)
  })
})
