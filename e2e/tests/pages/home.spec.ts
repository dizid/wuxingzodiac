import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

// The 12 animals and 5 elements used for cross-checking card counts
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const
const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Start with a clean slate so personalized section is hidden
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.goto('/')
    await waitForApp(page)
  })

  // ── 1. Hero branding ──────────────────────────────────────────────────────
  test('hero section renders with site branding', async ({ page }) => {
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Wu Xing Zodiac')
  })

  // ── 2. CTA buttons ───────────────────────────────────────────────────────
  test('hero has three CTA buttons: Find Your Sign, Check Compatibility, Browse All Signs', async ({ page }) => {
    const findSign = page.locator('a[href="/calculator"]').first()
    await expect(findSign).toBeVisible()
    await expect(findSign).toContainText('Find Your Sign')

    // There are two "Check Compatibility" links on the page; the hero one is first
    const checkCompat = page.locator('a[href="/compatibility"]').first()
    await expect(checkCompat).toBeVisible()
    await expect(checkCompat).toContainText('Check Compatibility')

    const browseAll = page.locator('a[href="/zodiac"]').first()
    await expect(browseAll).toBeVisible()
    await expect(browseAll).toContainText('Browse All Signs')
  })

  // ── 3. Five element cards ─────────────────────────────────────────────────
  test('five element cards render and link to /zodiac/element/:element', async ({ page }) => {
    for (const element of ELEMENTS) {
      const card = page.locator(`a[href="/zodiac/element/${element}"]`)
      await expect(card).toBeVisible()
    }

    // Exactly 5 element cards in the elements section
    const elementSection = page.locator('section', { hasText: 'The Five Elements' })
    const cards = elementSection.locator('a[href^="/zodiac/element/"]')
    await expect(cards).toHaveCount(5)
  })

  // ── 4. Twelve animal cards ───────────────────────────────────────────────
  test('twelve animal cards render and link to /zodiac/animal/:animal', async ({ page }) => {
    for (const animal of ANIMALS) {
      const card = page.locator(`a[href="/zodiac/animal/${animal}"]`)
      await expect(card).toBeVisible()
    }

    const animalSection = page.locator('section', { hasText: 'The Twelve Animals' })
    const cards = animalSection.locator('a[href^="/zodiac/animal/"]')
    await expect(cards).toHaveCount(12)
  })

  // ── 5. Fire Horse 2026 featured section ───────────────────────────────────
  test('2026 Fire Horse featured section renders', async ({ page }) => {
    const section = page.locator('[data-element="fire"]').first()
    await expect(section).toBeVisible()
    await expect(section).toContainText('2026')
    await expect(section).toContainText('Fire Horse')

    const link = page.locator('a[href="/zodiac/fire-horse"]').first()
    await expect(link).toBeVisible()
  })

  // ── 6. Newsletter form ────────────────────────────────────────────────────
  test('newsletter form renders with email input and submit button', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]').first()
    await expect(emailInput).toBeVisible()

    const submitBtn = page.locator('button[type="submit"]').first()
    await expect(submitBtn).toBeVisible()
  })

  // ── 7. How It Works section ───────────────────────────────────────────────
  test('How It Works section renders with three steps', async ({ page }) => {
    const section = page.locator('section', { hasText: 'How It Works' })
    await expect(section).toBeVisible()

    // Three numbered step cards
    await expect(section.locator('text=Enter Your Birthdate')).toBeVisible()
    await expect(section.locator('text=Discover Your Element')).toBeVisible()
    await expect(section.locator('text=Read Your Complete Profile')).toBeVisible()
  })

  // ── 8. Personalized welcome hidden initially ──────────────────────────────
  test('personalized welcome section is hidden when no sign is saved', async ({ page }) => {
    // localStorage was cleared in beforeEach — no user sign present
    const welcomeBack = page.locator('text=Welcome back')
    await expect(welcomeBack).not.toBeVisible()
  })

  // ── 9. Personalized welcome shows after sign save ─────────────────────────
  test('personalized welcome appears after setting localStorage sign and reloading', async ({ page }) => {
    // Set the sign in localStorage and reload so Vue picks it up
    await page.evaluate(() => localStorage.setItem('wuxing_user_sign', 'fire-horse'))
    await page.reload()
    await waitForApp(page)

    const welcomeBack = page.locator('text=Welcome back')
    await expect(welcomeBack).toBeVisible()

    // Should show the sign name and profile/compatibility links
    await expect(page.locator('text=Fire Horse').first()).toBeVisible()
    await expect(page.locator('a[href="/zodiac/fire-horse"]').first()).toBeVisible()
  })

  // ── 10. firehorse.info external link ─────────────────────────────────────
  test('firehorse.info external link is present', async ({ page }) => {
    const externalLink = page.locator('a[href="https://firehorse.info"]')
    await expect(externalLink).toBeVisible()
    await expect(externalLink).toHaveAttribute('target', '_blank')
    await expect(externalLink).toHaveAttribute('rel', /noopener/)
  })

  // ── 11. Element card names are correct ───────────────────────────────────
  test('element cards display the correct element names', async ({ page }) => {
    const elementSection = page.locator('section', { hasText: 'The Five Elements' })
    await expect(elementSection.locator('text=Wood')).toBeVisible()
    await expect(elementSection.locator('text=Fire')).toBeVisible()
    await expect(elementSection.locator('text=Earth')).toBeVisible()
    await expect(elementSection.locator('text=Metal')).toBeVisible()
    await expect(elementSection.locator('text=Water')).toBeVisible()
  })

  // ── 12. Compatibility section CTA ────────────────────────────────────────
  test('Compatibility section renders with Check Compatibility CTA', async ({ page }) => {
    const compatSection = page.locator('section', { hasText: 'Zodiac Compatibility' })
    await expect(compatSection).toBeVisible()

    const ctaLink = compatSection.locator('a[href="/compatibility"]')
    await expect(ctaLink).toBeVisible()
    await expect(ctaLink).toContainText('Check Compatibility')
  })
})
