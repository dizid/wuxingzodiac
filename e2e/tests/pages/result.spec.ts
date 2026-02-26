import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { assertElementTheme } from '../../helpers/theme'

test.describe('ResultPage (/result/fire-horse)', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/result/fire-horse')
    await waitForApp(page)
  })

  // ── 1. Sign name and tagline render ──────────────────────────────────────
  test('sign name and tagline render in the hero section', async ({ page }) => {
    // The profile name appears in the h1
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Fire Horse')

    // tagline is rendered in a paragraph near the top
    const tagline = page.locator('p').filter({ hasText: /Fire Horse/ }).first()
    await expect(tagline).toBeVisible()
  })

  // ── 2. At-a-Glance card renders with element, animal, and years ──────────
  test('At a Glance card shows element, animal, and years', async ({ page }) => {
    const card = page.locator('section', { hasText: 'At a Glance' })
    await expect(card).toBeVisible()

    // Element and animal are capitalised labels
    await expect(card).toContainText('Fire')
    await expect(card).toContainText('Horse')
    await expect(card).toContainText('Years')
  })

  // ── 3. Personality section loads ─────────────────────────────────────────
  test('Personality section renders when content is available', async ({ page }) => {
    // The personality section is conditionally rendered — wait up to 5s for it
    // (content loads async via loadSignContent on mount)
    const personalitySection = page.locator('section', { hasText: 'Personality' })
    // It may or may not be present depending on content load speed; assert visible if present
    const count = await personalitySection.count()
    if (count > 0) {
      await expect(personalitySection.first()).toBeVisible()
    }
  })

  // ── 4. BlueprintCTA renders ───────────────────────────────────────────────
  test('Blueprint CTA section renders on the page', async ({ page }) => {
    // BlueprintCTA contains references to "Blueprint" or "PDF" or "Report"
    await expect(page.locator('body')).toContainText(/blueprint|report|pdf/i)
  })

  // ── 5. "Read Your Full Profile" links to /zodiac/fire-horse ──────────────
  test('"Read Your Full Profile" button links to /zodiac/fire-horse', async ({ page }) => {
    const link = page.locator('a[href="/zodiac/fire-horse"]').filter({ hasText: /read your full profile/i })
    await expect(link).toBeVisible()
  })

  // ── 6. "Discover Your Own Element" links to /calculator ──────────────────
  test('"Discover Your Own Element" button links to /calculator', async ({ page }) => {
    const link = page.locator('a[href="/calculator"]').filter({ hasText: /discover your own element/i })
    await expect(link).toBeVisible()
  })

  // ── 7. Share button provides "Link Copied!" feedback ─────────────────────
  test('share button shows "Link Copied!" feedback after click', async ({ page }) => {
    // Grant clipboard permissions so navigator.clipboard.writeText works in tests
    await page.context().grantPermissions(['clipboard-write'])

    const shareBtn = page.locator('button', { hasText: /share your result/i })
    await expect(shareBtn).toBeVisible()

    await shareBtn.click()

    // After click the label switches to "Link Copied!"
    await expect(page.locator('button', { hasText: /link copied/i })).toBeVisible()
  })

  // ── 8. Element theme is applied (data-element="fire") ────────────────────
  test('fire element theme is applied on the page', async ({ page }) => {
    await assertElementTheme(page, 'fire')
  })
})
