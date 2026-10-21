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
  const spaFallbackIndex = rules.findIndex(rule => rule.from === '/*')

  it('keeps the SPA fallback', () => {
    expect(spaFallbackIndex).toBeGreaterThanOrEqual(0)
    expect(rules[spaFallbackIndex]).toMatchObject({ to: '/index.html', status: '200' })
  })

  it.each(['/shop', '/shop/*'])('%s 301-redirects to /reading, before the SPA fallback', (from) => {
    const index = rules.findIndex(rule => rule.from === from)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(spaFallbackIndex)
    expect(rules[index]).toMatchObject({ to: '/reading', status: '301', force: 'true' })
  })
})
