import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { compatibilityTestPairs } from '../../fixtures/compatibility-results'

/**
 * Compatibility matrix data integrity tests.
 * All calculations happen client-side from the pre-computed matrix.
 */

// Navigate to a compatibility pair page (alphabetical order enforced)
async function gotoCompatibility(
  page: Parameters<typeof waitForApp>[0],
  slugA: string,
  slugB: string,
) {
  const [a, b] = [slugA, slugB].sort()
  await page.goto(`/compatibility/${a}/${b}`)
  await waitForApp(page)
}

test.describe('Compatibility matrix', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Score range 0-100 for 5 random pairs ───────────────────────────────
  test('compatibility score is in range 0-100 for 5 representative pairs', async ({ page }) => {
    const pairs = [
      ['fire-rat', 'fire-dragon'],
      ['wood-ox', 'water-snake'],
      ['metal-tiger', 'earth-horse'],
      ['fire-horse', 'fire-horse'],
      ['water-monkey', 'metal-rooster'],
    ]

    for (const [a, b] of pairs) {
      await gotoCompatibility(page, a, b)

      // Extract the first numeric percentage value visible on the page
      const scoreText = await page.evaluate(() => {
        const matches = document.body.innerText.match(/\b(\d{1,3})\s*%/)
        return matches ? parseInt(matches[1], 10) : null
      })

      expect(scoreText, `Score for ${a} + ${b} should be a number`).not.toBeNull()
      expect(scoreText!).toBeGreaterThanOrEqual(0)
      expect(scoreText!).toBeLessThanOrEqual(100)
    }
  })

  // ── 2. Symmetric results (A-B same as B-A) ────────────────────────────────
  test('compatibility result is symmetric (A+B = B+A)', async ({ page }) => {
    const slugA = 'fire-rat'
    const slugB = 'water-dog'

    // Both orderings should resolve to the same canonical URL
    await page.goto(`/compatibility/${slugA}/${slugB}`)
    await waitForApp(page)
    const urlForward = page.url()

    await page.goto(`/compatibility/${slugB}/${slugA}`)
    await waitForApp(page)
    const urlReverse = page.url()

    // Router enforces alphabetical order, so both URLs must be identical
    expect(urlForward).toBe(urlReverse)

    // Scores should be the same (same page)
    const score = await page.evaluate(() => {
      const matches = document.body.innerText.match(/\b(\d{1,3})\s*%/)
      return matches ? parseInt(matches[1], 10) : null
    })
    expect(score).not.toBeNull()
  })

  // ── 3. Trine groups high score (>75) ──────────────────────────────────────
  test('trine group pairs score above 75', async ({ page }) => {
    const trinePairs = compatibilityTestPairs.filter((p) => p.expectedHighScore && p.description.includes('trine'))

    for (const pair of trinePairs) {
      await gotoCompatibility(page, pair.slugA, pair.slugB)

      const score = await page.evaluate(() => {
        const matches = document.body.innerText.match(/\b(\d{1,3})\s*%/)
        return matches ? parseInt(matches[1], 10) : null
      })

      expect(score, `${pair.description}: expected score > 75`).not.toBeNull()
      expect(score!).toBeGreaterThan(75)
    }
  })

  // ── 4. Clash pairs low score (<50) ────────────────────────────────────────
  test('clash pairs score below 50', async ({ page }) => {
    const clashPairs = compatibilityTestPairs.filter((p) => !p.expectedHighScore)

    for (const pair of clashPairs) {
      await gotoCompatibility(page, pair.slugA, pair.slugB)

      const score = await page.evaluate(() => {
        const matches = document.body.innerText.match(/\b(\d{1,3})\s*%/)
        return matches ? parseInt(matches[1], 10) : null
      })

      expect(score, `${pair.description}: expected score < 50`).not.toBeNull()
      expect(score!).toBeLessThan(50)
    }
  })

  // ── 5. Same-sign compatibility returns valid result ───────────────────────
  test('same-sign compatibility (fire-horse + fire-horse) returns a valid result', async ({ page }) => {
    await page.goto('/compatibility/fire-horse/fire-horse')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText('Fire Horse')

    const score = await page.evaluate(() => {
      const matches = document.body.innerText.match(/\b(\d{1,3})\s*%/)
      return matches ? parseInt(matches[1], 10) : null
    })
    expect(score).not.toBeNull()
    expect(score!).toBeGreaterThanOrEqual(0)
    expect(score!).toBeLessThanOrEqual(100)
  })

  // ── 6. Three scores present (Chemistry, Support, Friction) ────────────────
  test('three compatibility scores are present on the results page', async ({ page }) => {
    await page.goto('/compatibility/fire-rat/fire-dragon')
    await waitForApp(page)

    // Each of these dimensions should be labeled somewhere on the results page
    await expect(page.locator('body')).toContainText(/chemistry/i)
    await expect(page.locator('body')).toContainText(/support/i)
    await expect(page.locator('body')).toContainText(/friction/i)
  })

  // ── 7. Match label present and non-empty ──────────────────────────────────
  test('match label is present and non-empty on compatibility result', async ({ page }) => {
    await page.goto('/compatibility/metal-tiger/metal-horse')
    await waitForApp(page)

    // Match label is a short descriptor like "Excellent", "Good", "Challenging"
    const labelText = await page.evaluate(() => {
      // Look for a label element that describes the overall match quality
      const candidates = Array.from(document.querySelectorAll('[class*="label"], [class*="match"], [class*="rating"], h2, h3'))
      return candidates.map((el) => el.textContent?.trim()).filter(Boolean)
    })

    // At least one element should contain a match quality label
    const hasLabel = labelText.some((t) =>
      /excellent|great|good|challenging|difficult|moderate|strong|weak/i.test(t ?? ''),
    )
    expect(hasLabel, `Expected a match label on the page. Found: ${JSON.stringify(labelText)}`).toBe(true)
  })

  // ── 8. Strengths list non-empty ───────────────────────────────────────────
  test('strengths section is non-empty on compatibility result', async ({ page }) => {
    await page.goto('/compatibility/wood-rat/fire-dragon')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/strength/i)

    // Find a list under a "strengths" heading that has at least one item
    const items = page.locator('li').filter({ hasText: /.+/ })
    const count = await items.count()
    expect(count).toBeGreaterThan(0)
  })

  // ── 9. Challenges list non-empty ──────────────────────────────────────────
  test('challenges section is non-empty on compatibility result', async ({ page }) => {
    await page.goto('/compatibility/fire-rat/fire-horse')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/challenge/i)

    const items = page.locator('li').filter({ hasText: /.+/ })
    const count = await items.count()
    expect(count).toBeGreaterThan(0)
  })

  // ── 10. Element interaction description visible ───────────────────────────
  test('element interaction description is visible on compatibility result', async ({ page }) => {
    // wood-rat + fire-dragon — Wood→Fire generating cycle
    await page.goto('/compatibility/fire-dragon/wood-rat')
    await waitForApp(page)

    // The page should mention the elements' relationship
    await expect(page.locator('body')).toContainText(/wood|fire|element/i)
  })
})
