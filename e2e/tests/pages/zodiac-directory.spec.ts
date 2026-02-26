import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

// Sign counts
const TOTAL_SIGNS = 60
const SIGNS_PER_ELEMENT = 12
const HORSE_ELEMENT_COUNT = 5 // wood-horse, fire-horse, earth-horse, metal-horse, water-horse

// Selectors based on the ZodiacDirectoryPage template
const SIGN_CARD_SELECTOR = 'a[href^="/zodiac/"]:not([href*="/element/"]):not([href*="/animal/"])'

test.describe('ZodiacDirectoryPage', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/zodiac')
    await waitForApp(page)
  })

  // ── 1. 60 signs render by default ────────────────────────────────────────
  test('renders all 60 sign cards by default', async ({ page }) => {
    const cards = page.locator(SIGN_CARD_SELECTOR)
    await expect(cards).toHaveCount(TOTAL_SIGNS)
  })

  // ── 2. Element filter — Wood → 12 cards ───────────────────────────────────
  test('filtering by Wood shows exactly 12 cards', async ({ page }) => {
    // Click the Wood element filter button
    const woodBtn = page.locator('button', { hasText: /Wood/i }).first()
    await woodBtn.click()

    const cards = page.locator(SIGN_CARD_SELECTOR)
    await expect(cards).toHaveCount(SIGNS_PER_ELEMENT)

    // Verify count label updates
    await expect(page.locator('text=12 signs')).toBeVisible()
  })

  // ── 3. Element filter — Fire → 12 cards ──────────────────────────────────
  test('filtering by Fire shows exactly 12 cards', async ({ page }) => {
    const fireBtn = page.locator('button[data-element="fire"]')
    await fireBtn.click()

    const cards = page.locator(SIGN_CARD_SELECTOR)
    await expect(cards).toHaveCount(SIGNS_PER_ELEMENT)
  })

  // ── 4. Animal filter — Horse → 5 cards ────────────────────────────────────
  test('filtering by Horse animal shows exactly 5 cards', async ({ page }) => {
    // The animal filter is a <select> element
    const animalSelect = page.locator('select').nth(0)
    await animalSelect.selectOption('horse')

    const cards = page.locator(SIGN_CARD_SELECTOR)
    await expect(cards).toHaveCount(HORSE_ELEMENT_COUNT)
  })

  // ── 5. Combined filter — Fire element + Horse animal → 1 card ─────────────
  test('combined Fire + Horse filter shows exactly 1 card (Fire Horse)', async ({ page }) => {
    const fireBtn = page.locator('button[data-element="fire"]')
    await fireBtn.click()

    const animalSelect = page.locator('select').nth(0)
    await animalSelect.selectOption('horse')

    const cards = page.locator(SIGN_CARD_SELECTOR)
    await expect(cards).toHaveCount(1)
    await expect(cards.first()).toContainText('Fire Horse')
  })

  // ── 6. Sort by Animal ────────────────────────────────────────────────────
  test('sorting by Animal reorders cards starting with Rat signs', async ({ page }) => {
    const sortSelect = page.locator('select').nth(1)
    await sortSelect.selectOption('animal')

    // After sorting by animal, the first card should be a Rat sign
    const firstCard = page.locator(SIGN_CARD_SELECTOR).first()
    await expect(firstCard).toContainText('Rat')
  })

  // ── 7. Sort by Element (default) ─────────────────────────────────────────
  test('default sort is by Element (Wood signs appear first)', async ({ page }) => {
    // Default state is element sort — Wood comes first alphabetically and by element order
    const sortSelect = page.locator('select').nth(1)
    await expect(sortSelect).toHaveValue('element')

    // First card should be a Wood sign (Wood Rat is the first in element order)
    const firstCard = page.locator(SIGN_CARD_SELECTOR).first()
    await expect(firstCard).toContainText('Wood')
  })

  // ── 8. Card shows name, Chinese name, and tagline ─────────────────────────
  test('each sign card shows name, Chinese name, and tagline', async ({ page }) => {
    // Check the first card (Wood Rat in default element sort)
    const firstCard = page.locator(SIGN_CARD_SELECTOR).first()

    // Name (e.g. "Wood Rat")
    const name = firstCard.locator('[class*="element-text"], .font-display').first()
    await expect(name).toBeVisible()

    // Chinese name (e.g. "甲子") — rendered in text-ash-500
    const chineseName = firstCard.locator('[class*="text-ash-500"]').first()
    await expect(chineseName).toBeVisible()

    // Tagline — italic text
    const tagline = firstCard.locator('.italic').first()
    await expect(tagline).toBeVisible()
  })

  // ── 9. Card links to the correct sign page ────────────────────────────────
  test('sign card links navigate to the correct zodiac sign page', async ({ page }) => {
    // Click the Fire Horse card specifically
    const fireBtn = page.locator('button[data-element="fire"]')
    await fireBtn.click()

    const animalSelect = page.locator('select').nth(0)
    await animalSelect.selectOption('horse')

    const fireHorseCard = page.locator('a[href="/zodiac/fire-horse"]')
    await expect(fireHorseCard).toBeVisible()
    await fireHorseCard.click()

    await page.waitForURL('**/zodiac/fire-horse')
    expect(page.url()).toContain('/zodiac/fire-horse')
  })

  // ── 10. Reset to All filter clears element and animal filters ─────────────
  test('clicking All resets element filter and shows all 60 cards', async ({ page }) => {
    // First apply a filter
    const fireBtn = page.locator('button[data-element="fire"]')
    await fireBtn.click()

    // Verify filter applied
    await expect(page.locator(SIGN_CARD_SELECTOR)).toHaveCount(SIGNS_PER_ELEMENT)

    // Click "All" button to reset
    const allBtn = page.locator('button', { hasText: /^All$/ })
    await allBtn.click()

    // All 60 cards should be back
    await expect(page.locator(SIGN_CARD_SELECTOR)).toHaveCount(TOTAL_SIGNS)

    // Count label updates
    await expect(page.locator('text=60 signs')).toBeVisible()
  })
})
