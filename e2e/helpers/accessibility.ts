// Accessibility testing wrapper using axe-core
import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

// Run axe-core accessibility scan and assert no critical/serious violations
export async function assertAccessible(page: Page, options?: { disableRules?: string[] }) {
  const builder = new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])

  if (options?.disableRules) {
    builder.disableRules(options.disableRules)
  }

  const results = await builder.analyze()

  // Filter for critical and serious violations only
  const violations = results.violations.filter(
    (v) => v.impact === 'critical' || v.impact === 'serious',
  )

  if (violations.length > 0) {
    const summary = violations.map(
      (v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} instances)`,
    ).join('\n')
    expect(violations, `Accessibility violations:\n${summary}`).toHaveLength(0)
  }
}
