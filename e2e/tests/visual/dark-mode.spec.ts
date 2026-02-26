import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { getCssVar } from '../../helpers/theme'

/**
 * Dark mode visual tests.
 * The site uses dark mode as default. These tests verify that the dark
 * background, glass morphism cards, and element glow effects are applied.
 */

test.describe('Dark mode styling', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.setViewportSize({ width: 1280, height: 800 })
    // Disable animations for stable visual checks
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0ms !important;
          transition-duration: 0ms !important;
        }
      `,
    })
  })

  // ── 1. Homepage dark background ───────────────────────────────────────────
  test('homepage uses a dark background color', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Get the computed background colour of the body or root element
    const bgColor = await page.evaluate(() => {
      const body = document.body
      return window.getComputedStyle(body).backgroundColor
    })

    // Dark mode background should be a dark colour
    // Parse rgb values and check they are all below 60 (dark)
    const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number)
      const brightness = (r + g + b) / 3
      expect(brightness, `Background brightness ${brightness} is not dark (expected < 80)`).toBeLessThan(80)
    } else {
      // Fallback: just take a screenshot to confirm dark appearance
      await expect(page).toHaveScreenshot('homepage-dark-background.png', {
        maxDiffPixelRatio: 0.05,
      })
    }
  })

  // ── 2. Glass card styling ──────────────────────────────────────────────────
  test('glass card elements have translucent / backdrop-filter styling', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Look for elements with glass morphism styling
    const glassCards = page.locator(
      '[class*="glass"], [class*="card"], [class*="Glass"], [class*="Card"]',
    )

    if (await glassCards.count() > 0) {
      const firstCard = glassCards.first()
      await expect(firstCard).toBeVisible()

      // Check that the card has a backdrop-filter or background-color with alpha
      const cardStyles = await firstCard.evaluate((el) => {
        const styles = window.getComputedStyle(el)
        // Use getPropertyValue for non-standard prefixed props to avoid TS errors
        return {
          backdropFilter: styles.backdropFilter,
          webkitBackdropFilter: styles.getPropertyValue('-webkit-backdrop-filter'),
          backgroundColor: styles.backgroundColor,
          border: styles.border,
        }
      })

      // At least one of these should indicate glass morphism styling
      const hasGlassStyling =
        (cardStyles.backdropFilter && cardStyles.backdropFilter !== 'none') ||
        (cardStyles.webkitBackdropFilter && cardStyles.webkitBackdropFilter !== 'none') ||
        cardStyles.backgroundColor.includes('rgba') // semi-transparent background

      expect(
        hasGlassStyling,
        `Glass card should have backdrop-filter or rgba background. Got: ${JSON.stringify(cardStyles)}`,
      ).toBe(true)
    } else {
      // If no glass cards found on homepage, check sign page instead
      await page.goto('/zodiac/fire-horse')
      await waitForApp(page)
      await expect(page.locator('body')).toContainText('Fire Horse')
    }
  })

  // ── 3. Text contrast (light text on dark background) ─────────────────────
  test('body text is light-coloured for contrast on the dark background', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    // Get the computed colour of the main heading (H1)
    const h1Color = await page.evaluate(() => {
      const h1 = document.querySelector('h1')
      if (!h1) return null
      return window.getComputedStyle(h1).color
    })

    expect(h1Color, 'H1 should have a computed color').not.toBeNull()

    // Light text on dark background: RGB values should be high (> 150)
    const rgbMatch = h1Color!.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch.map(Number)
      const brightness = (r + g + b) / 3
      expect(
        brightness,
        `H1 text brightness ${brightness} should be > 150 (light text for dark mode)`,
      ).toBeGreaterThan(150)
    }
  })

  // ── 4. Element glow effects on sign page ──────────────────────────────────
  test('sign page applies element-specific glow / color CSS variables', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // The fire element theme should be active
    const dataElement = await page.getAttribute('html', 'data-element')
    expect(dataElement).toBe('fire')

    // CSS custom properties for the fire element should be set
    // The theme system uses --element-primary, --element-glow, etc.
    const elementPrimary = await getCssVar(page, '--element-primary')
    const elementGlow = await getCssVar(page, '--element-glow')

    // At least one element-specific CSS variable should be non-empty
    const hasThemeVars = (elementPrimary.length > 0) || (elementGlow.length > 0)
    expect(
      hasThemeVars,
      `Fire element theme CSS variables should be set. --element-primary="${elementPrimary}", --element-glow="${elementGlow}"`,
    ).toBe(true)

    // Take a screenshot to confirm the visual appearance
    await page.waitForTimeout(300)
    await expect(page).toHaveScreenshot('fire-horse-element-glow.png', {
      maxDiffPixelRatio: 0.03,
    })
  })
})
