// Every sign profile's best and worst match must agree with the compatibility tool, scored as
// the pair page shows it (/compatibility/a/b, alphabetical order). T-0318, Nov 2026: 20 AI-written
// profiles contradicted the tool before this check existed.
import { describe, expect, it } from 'vitest'
import { signProfiles, loadSignContent } from '@/lib/sign-content'
import { getEnhancedCompatibility } from '@/lib/compatibility-matrix'

function pageScore(a: string, b: string): number {
  const [x, y] = [a, b].sort()
  const px = signProfiles.find(p => p.slug === x)!
  const py = signProfiles.find(p => p.slug === y)!
  return getEnhancedCompatibility(px.animal, px.element, py.animal, py.element).score
}

describe('sign profile matches', () => {
  it('agree with the compatibility tool for all 60 signs', async () => {
    for (const profile of signProfiles) {
      const { atAGlance, matches } = await loadSignContent(profile.slug)
      const scores = signProfiles.filter(o => o.slug !== profile.slug).map(o => pageScore(profile.slug, o.slug)).sort((a, b) => b - a)
      const best = pageScore(profile.slug, atAGlance.bestMatch)
      const worst = pageScore(profile.slug, atAGlance.worstMatch)
      expect(best, profile.slug).toBeGreaterThan(worst)
      // best match in the tool's top 10, worst match in its bottom 10 (of 59)
      expect(scores.indexOf(best) + 1, `${profile.slug} best ${atAGlance.bestMatch}`).toBeLessThanOrEqual(10)
      expect(scores.length - scores.lastIndexOf(worst), `${profile.slug} worst ${atAGlance.worstMatch}`).toBeLessThanOrEqual(10)
      // The at-a-glance box and the lists agree, and every listed sign exists with its real name
      expect(matches.best[0]!.slug).toBe(atAGlance.bestMatch)
      expect(matches.worst[0]!.slug).toBe(atAGlance.worstMatch)
      for (const match of [...matches.best, ...matches.worst]) {
        expect(signProfiles.find(o => o.slug === match.slug)?.name, `${profile.slug}: ${match.slug}`).toBe(match.name)
        expect(match.slug).not.toBe(profile.slug)
      }
      expect(new Set([...matches.best, ...matches.worst].map(m => m.slug)).size).toBe(6)
      // Not checked yet: places 2 and 3 of the lists (about 21 signs still list a "best" match in the
      // tool's lower half or a "worst" match in its upper half; see output/wuxing-match-mismatch-2026-11-11.md)
    }
  })
})
