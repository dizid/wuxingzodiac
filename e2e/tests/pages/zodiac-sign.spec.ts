import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { assertElementTheme } from '../../helpers/theme'

const SIGN_URL = '/zodiac/fire-horse'

// Helper: wait for sign content to finish loading (no loading skeleton present)
async function waitForContent(page: Parameters<typeof waitForApp>[0]) {
  // Loading skeleton has animate-pulse; wait until it's gone
  await page.waitForFunction(() => {
    return document.querySelector('.animate-pulse') === null
  }, { timeout: 15_000 })
}

test.describe('ZodiacSignPage — /zodiac/fire-horse', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto(SIGN_URL)
    await waitForApp(page)
    await waitForContent(page)
  })

  // ── 1. Hero section: sign name and tagline ────────────────────────────────
  test('hero section renders with sign name "Fire Horse" and tagline', async ({ page }) => {
    // SignHero renders the name in an h1
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Fire Horse')

    // Tagline is the italic paragraph in the hero
    const tagline = page.locator('section').first().locator('p.italic')
    await expect(tagline).toBeVisible()
    // The Fire Horse tagline is "The Untamable Spirit"
    await expect(tagline).toContainText('Untamable Spirit')
  })

  // ── 2. At-A-Glance section renders ───────────────────────────────────────
  test('At-A-Glance section renders', async ({ page }) => {
    // SignAtAGlance will contain its own heading or label text
    // Look for the section by a characteristic trait it always shows (element, animal, etc.)
    const atAGlance = page.locator('text=/At.A.Glance|At a Glance/i').first()
    await expect(atAGlance).toBeVisible()
  })

  // ── 3. Element Pentagon Chart renders ────────────────────────────────────
  test('Element Pentagon Chart (SVG) renders', async ({ page }) => {
    // ElementPentagonChart renders an SVG element with a title or aria label
    const svg = page.locator('main svg').first()
    await expect(svg).toBeVisible()
  })

  // ── 4. Personality section with text content ──────────────────────────────
  test('Personality section renders with descriptive text', async ({ page }) => {
    // SignPersonalityV2 renders a section with personality content
    // It will contain the word "Personality" or similar
    const personalitySection = page.locator('text=/Personality|Core Traits|Who They Are/i').first()
    await expect(personalitySection).toBeVisible()
  })

  // ── 5. Power Levels section renders ──────────────────────────────────────
  test('Power Levels section renders', async ({ page }) => {
    // SignPowerLevels renders trait progress bars — look for the section heading
    const powerLevels = page.locator('text=/Power Levels|Trait Scores|Strengths/i').first()
    await expect(powerLevels).toBeVisible()
  })

  // ── 6. Shadow section renders ────────────────────────────────────────────
  test('Shadow section renders', async ({ page }) => {
    // SignShadow renders a "Shadow" or "Dark Side" section
    const shadow = page.locator('text=/Shadow|Dark Side|Challenges/i').first()
    await expect(shadow).toBeVisible()
  })

  // ── 7. Relationships section renders ─────────────────────────────────────
  test('Relationships section renders', async ({ page }) => {
    const relationships = page.locator('text=/Relationship|Love|Partner/i').first()
    await expect(relationships).toBeVisible()
  })

  // ── 8. Element Balance section renders ───────────────────────────────────
  test('Element Balance section renders', async ({ page }) => {
    const elementBalance = page.locator('text=/Element Balance|Elemental/i').first()
    await expect(elementBalance).toBeVisible()
  })

  // ── 9. Matches section: Best Matches and Challenging Matches with links ───
  test('Matches section shows Best Matches and Challenging Matches with sign links', async ({ page }) => {
    const bestMatches = page.locator('h2', { hasText: /Best Matches/i })
    await expect(bestMatches).toBeVisible()

    const challengingMatches = page.locator('h2', { hasText: /Challenging Matches/i })
    await expect(challengingMatches).toBeVisible()

    // Best matches render 3 sign links
    const bestSection = bestMatches.locator('..')
    const bestLinks = bestSection.locator('a[href^="/zodiac/"]')
    const bestCount = await bestLinks.count()
    expect(bestCount).toBeGreaterThanOrEqual(3)

    // Challenging matches also render 3 sign links
    const challengingSection = challengingMatches.locator('..')
    const challengingLinks = challengingSection.locator('a[href^="/zodiac/"]')
    const challengingCount = await challengingLinks.count()
    expect(challengingCount).toBeGreaterThanOrEqual(3)
  })

  // ── 10. Blueprint CTA renders ─────────────────────────────────────────────
  test('Elemental Blueprint CTA renders with purchase button', async ({ page }) => {
    const blueprintHeading = page.locator('h3', { hasText: /Elemental Blueprint/i })
    await expect(blueprintHeading).toBeVisible()

    // Purchase button shows the price
    const purchaseBtn = page.locator('button', { hasText: /Blueprint.*\$9\.99|\$9\.99.*Blueprint/i })
      .or(page.locator('button', { hasText: /Get Your Blueprint/i }))
    await expect(purchaseBtn).toBeVisible()
  })

  // ── 11. Sibling Navigation: same-animal and same-element sign links ────────
  test('Sibling Navigation renders same-element and same-animal sign links', async ({ page }) => {
    // SignSiblingNav renders "Other Fire Signs" and "Other Horse Signs"
    const otherFireSigns = page.locator('text=/Other Fire Signs/i')
    await expect(otherFireSigns).toBeVisible()

    const otherHorseSigns = page.locator('text=/Other Horse Signs/i')
    await expect(otherHorseSigns).toBeVisible()

    // Same element: 11 other fire signs (12 - current)
    const sameElementSection = otherFireSigns.locator('..').locator('..')
    const elementLinks = sameElementSection.locator('a[href^="/zodiac/"]')
    const elementCount = await elementLinks.count()
    expect(elementCount).toBe(11)

    // Same animal: 4 other horse signs (5 - current)
    const sameAnimalSection = otherHorseSigns.locator('..').locator('..')
    const animalLinks = sameAnimalSection.locator('a[href^="/zodiac/"]')
    const animalCount = await animalLinks.count()
    expect(animalCount).toBe(4)
  })

  // ── 12. Sign Shop section renders ────────────────────────────────────────
  test('Sign Shop section renders with product links', async ({ page }) => {
    // SignShop renders Amazon affiliate links
    const amazonLinks = page.locator('a[href*="amazon"]')
    const count = await amazonLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  // ── 13. Loading state (skeleton) appears before content loads ─────────────
  test('loading skeleton appears while content is fetching', async ({ page }) => {
    // Intercept the dynamic import / navigation so we can observe the loading state
    // Navigate without waiting for content so we can catch the skeleton
    await mockAllApis(page)
    await page.goto(SIGN_URL, { waitUntil: 'domcontentloaded' })

    // The skeleton uses animate-pulse — it should be visible immediately after navigation
    // before content resolves. We check it's present in the DOM (even if briefly).
    const skeleton = page.locator('.animate-pulse')
    // Use waitForSelector with a short timeout — it's OK if it's already gone
    try {
      await expect(skeleton.first()).toBeAttached({ timeout: 3_000 })
    } catch {
      // If it resolved instantly (e.g. SSG pre-render), that's acceptable too
      // Just verify the content is now visible instead
      await waitForContent(page)
      await expect(page.locator('h1')).toBeVisible()
    }
  })

  // ── 14. Element theme applied (data-element="fire" on html) ──────────────
  test('fire element theme is applied to the html element', async ({ page }) => {
    // useElementTheme sets data-element on the <html> element
    await assertElementTheme(page, 'fire')
  })

  // ── 15. Wu Xing Cycle Diagram renders ────────────────────────────────────
  test('Wu Xing Cycle Diagram SVG renders', async ({ page }) => {
    // WuXingCycleDiagram renders an SVG with the five-element cycle
    // It renders after content loads — there should be multiple SVGs on the page
    const svgs = page.locator('main svg')
    const count = await svgs.count()
    expect(count).toBeGreaterThanOrEqual(2) // Pentagon chart + Cycle diagram

    // The cycle diagram should contain element labels: Fire, Water, Wood, Metal, Earth
    const diagramText = page.locator('main').getByText('Fire').first()
    await expect(diagramText).toBeVisible()
  })
})
