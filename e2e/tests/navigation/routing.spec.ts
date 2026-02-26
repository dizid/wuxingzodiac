import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { sampleSigns } from '../../fixtures/sign-profiles'

/**
 * Routing tests — verify all route types load correctly.
 * 20 tests covering every named route in the router.
 */

test.describe('Routing — all routes load correctly', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Also intercept the blog route used by BlogPage.vue
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })
  })

  // ─── Core pages ─────────────────────────────────────────────────────────────

  test('1. / — homepage renders H1 branding', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    await expect(page.locator('h1').first()).toContainText(/wu xing zodiac/i)
    await expect(page).toHaveURL('/')
  })

  test('2. /zodiac — directory page renders 60-sign heading', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText(/all 60 zodiac signs/i)
    await expect(page).toHaveURL('/zodiac')
  })

  test('3. /zodiac/fire-horse — sign page renders sign name', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText('Fire Horse')
    await expect(page).toHaveURL('/zodiac/fire-horse')
  })

  test('4. /zodiac/animal/horse — animal page renders horse variants', async ({ page }) => {
    await page.goto('/zodiac/animal/horse')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/horse/i)
    await expect(page).toHaveURL('/zodiac/animal/horse')
  })

  test('5. /zodiac/element/fire — element page renders fire variants', async ({ page }) => {
    await page.goto('/zodiac/element/fire')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/fire/i)
    await expect(page).toHaveURL('/zodiac/element/fire')
  })

  // ─── Compatibility ───────────────────────────────────────────────────────────

  test('6. /compatibility — picker page renders two sign selects', async ({ page }) => {
    await page.goto('/compatibility')
    await waitForApp(page)

    const selects = page.locator('select')
    const count = await selects.count()
    expect(count).toBeGreaterThanOrEqual(2)
    await expect(page).toHaveURL('/compatibility')
  })

  test('7. /compatibility/earth-dragon/fire-horse — pair page renders results', async ({ page }) => {
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)

    // Alphabetical: earth-dragon < fire-horse, so URL stays
    await expect(page).toHaveURL('/compatibility/earth-dragon/fire-horse')
    await expect(page.locator('body')).toContainText(/earth dragon|fire horse/i)
  })

  // ─── Calculator ─────────────────────────────────────────────────────────────

  test('8. /calculator — renders birth date form with 3 selects', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText(/what.s my sign/i)
    const selects = page.locator('select')
    await expect(selects).toHaveCount(3)
    await expect(page).toHaveURL('/calculator')
  })

  // ─── Result ─────────────────────────────────────────────────────────────────

  test('9. /result/fire-horse — result page renders sign profile', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText('Fire Horse')
    await expect(page).toHaveURL('/result/fire-horse')
  })

  // ─── Shop ───────────────────────────────────────────────────────────────────

  test('10. /shop — shop page renders', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/collection|shop|merch/i)
    await expect(page).toHaveURL('/shop')
  })

  // ─── Blog ───────────────────────────────────────────────────────────────────

  test('11. /blog — blog page renders', async ({ page }) => {
    await page.goto('/blog')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/blog/i)
    await expect(page).toHaveURL('/blog')
  })

  test('12. /blog/test-slug — blog post page renders (404 from API is handled)', async ({ page }) => {
    await page.goto('/blog/test-slug')
    await waitForApp(page)

    // BlogPostPage renders even for unknown slugs (shows error state or loading)
    await expect(page).toHaveURL('/blog/test-slug')
    await expect(page.locator('body')).toBeVisible()
  })

  // ─── Report download ─────────────────────────────────────────────────────────

  test('13. /report/download?session=test — report download page renders', async ({ page }) => {
    await page.goto('/report/download?session=test')
    await waitForApp(page)

    await expect(page).toHaveURL(/\/report\/download/)
    // Page renders in some state (loading, ready, error, race-condition)
    await expect(page.locator('body')).toBeVisible()
  })

  // ─── Static pages ────────────────────────────────────────────────────────────

  test('14. /about — about page renders', async ({ page }) => {
    await page.goto('/about')
    await waitForApp(page)

    await expect(page).toHaveURL('/about')
    await expect(page.locator('body')).toBeVisible()
  })

  test('15. /privacy — privacy page renders', async ({ page }) => {
    await page.goto('/privacy')
    await waitForApp(page)

    await expect(page).toHaveURL('/privacy')
    await expect(page.locator('body')).toBeVisible()
  })

  test('16. /terms — terms page renders', async ({ page }) => {
    await page.goto('/terms')
    await waitForApp(page)

    await expect(page).toHaveURL('/terms')
    await expect(page.locator('body')).toBeVisible()
  })

  // ─── 404 catch-all ───────────────────────────────────────────────────────────

  test('17. /:pathMatch — 404 catch-all renders 404 page', async ({ page }) => {
    await page.goto('/this/path/does/not/exist')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── One sign per element ────────────────────────────────────────────────────

  test('18. /zodiac/wood-rat — Wood element sign loads', async ({ page }) => {
    const sign = sampleSigns.find((s) => s.slug === 'wood-rat')!
    await page.goto(`/zodiac/${sign.slug}`)
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(sign.name)
    await expect(page).toHaveURL(`/zodiac/${sign.slug}`)
  })

  test('19. /zodiac/earth-dragon — Earth element sign loads', async ({ page }) => {
    const sign = sampleSigns.find((s) => s.slug === 'earth-dragon')!
    await page.goto(`/zodiac/${sign.slug}`)
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(sign.name)
    await expect(page).toHaveURL(`/zodiac/${sign.slug}`)
  })

  test('20. /zodiac/water-snake — Water element sign loads', async ({ page }) => {
    const sign = sampleSigns.find((s) => s.slug === 'water-snake')!
    await page.goto(`/zodiac/${sign.slug}`)
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(sign.name)
    await expect(page).toHaveURL(`/zodiac/${sign.slug}`)
  })
})
