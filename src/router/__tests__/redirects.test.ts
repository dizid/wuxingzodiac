import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

interface RedirectRule {
  from?: string
  to?: string
  status?: string
  force?: string
}

/** Minimal reader for the [[redirects]] blocks in netlify.toml (in file order) */
function readRedirects(): RedirectRule[] {
  const toml = readFileSync(resolve(process.cwd(), 'netlify.toml'), 'utf8')
  return toml
    .split('[[redirects]]')
    .slice(1)
    .map((block) => {
      const rule: Record<string, string> = {}
      // Stop at the next table header so other sections can't leak in
      for (const line of block.split(/\n\s*\[/)[0]!.split('\n')) {
        const match = line.match(/^\s*(\w+)\s*=\s*"?([^"#]*?)"?\s*(#.*)?$/)
        if (match) rule[match[1]!] = match[2]!
      }
      return rule
    })
}

describe('netlify.toml redirects', () => {
  const rules = readRedirects()
  const SCOPED_FALLBACKS = ['/compatibility/*', '/blog/*']
  const firstFallbackIndex = Math.min(
    ...SCOPED_FALLBACKS.map(from => rules.findIndex(rule => rule.from === from)),
  )

  // Unknown URLs must reach Netlify's dist/404.html (real 404 status), not a copy of
  // the home page with status 200 (soft 404)
  it('has no site-wide SPA fallback', () => {
    expect(rules.some(rule => rule.from === '/*')).toBe(false)
  })

  it.each(SCOPED_FALLBACKS)('keeps the unforced SPA fallback for %s', (from) => {
    const rule = rules.find(r => r.from === from)
    expect(rule).toMatchObject({ to: '/index.html', status: '200' })
    // Forced would shadow the 1,830 prerendered pair pages and the prerendered posts
    expect(rule?.force).toBeUndefined()
  })

  it.each(['/shop', '/shop/*'])('%s 301-redirects to /reading, before the SPA fallbacks', (from) => {
    const index = rules.findIndex(rule => rule.from === from)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(firstFallbackIndex)
    expect(rules[index]).toMatchObject({ to: '/reading', status: '301', force: 'true' })
  })
})
