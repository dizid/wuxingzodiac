import { describe, it, expect } from 'vitest'
import { signProfiles, getProfileBySlug } from '@/lib/sign-content/profiles'

// Expected stem-branch characters for all 60 signs.
// Yang animals (Rat, Tiger, Dragon, Horse, Monkey, Dog) take the yang stem
// (甲 丙 戊 庚 壬); yin animals (Ox, Rabbit, Snake, Goat, Rooster, Pig) take the
// yin stem (乙 丁 己 辛 癸).
const EXPECTED_CHINESE_NAMES: Record<string, string> = {
  'wood-rat': '甲子', 'wood-ox': '乙丑', 'wood-tiger': '甲寅', 'wood-rabbit': '乙卯',
  'wood-dragon': '甲辰', 'wood-snake': '乙巳', 'wood-horse': '甲午', 'wood-goat': '乙未',
  'wood-monkey': '甲申', 'wood-rooster': '乙酉', 'wood-dog': '甲戌', 'wood-pig': '乙亥',

  'fire-rat': '丙子', 'fire-ox': '丁丑', 'fire-tiger': '丙寅', 'fire-rabbit': '丁卯',
  'fire-dragon': '丙辰', 'fire-snake': '丁巳', 'fire-horse': '丙午', 'fire-goat': '丁未',
  'fire-monkey': '丙申', 'fire-rooster': '丁酉', 'fire-dog': '丙戌', 'fire-pig': '丁亥',

  'earth-rat': '戊子', 'earth-ox': '己丑', 'earth-tiger': '戊寅', 'earth-rabbit': '己卯',
  'earth-dragon': '戊辰', 'earth-snake': '己巳', 'earth-horse': '戊午', 'earth-goat': '己未',
  'earth-monkey': '戊申', 'earth-rooster': '己酉', 'earth-dog': '戊戌', 'earth-pig': '己亥',

  'metal-rat': '庚子', 'metal-ox': '辛丑', 'metal-tiger': '庚寅', 'metal-rabbit': '辛卯',
  'metal-dragon': '庚辰', 'metal-snake': '辛巳', 'metal-horse': '庚午', 'metal-goat': '辛未',
  'metal-monkey': '庚申', 'metal-rooster': '辛酉', 'metal-dog': '庚戌', 'metal-pig': '辛亥',

  'water-rat': '壬子', 'water-ox': '癸丑', 'water-tiger': '壬寅', 'water-rabbit': '癸卯',
  'water-dragon': '壬辰', 'water-snake': '癸巳', 'water-horse': '壬午', 'water-goat': '癸未',
  'water-monkey': '壬申', 'water-rooster': '癸酉', 'water-dog': '壬戌', 'water-pig': '癸亥',
}

// Independent check: the sexagenary cycle starts at 甲子 in year 4 (1984 = 甲子).
const HEAVENLY_STEMS = '甲乙丙丁戊己庚辛壬癸'
const EARTHLY_BRANCHES = '子丑寅卯辰巳午未申酉戌亥'

function stemBranchForYear(year: number): string {
  return HEAVENLY_STEMS[(year - 4) % 10]! + EARTHLY_BRANCHES[(year - 4) % 12]!
}

describe('sign profile Chinese names (stem + branch)', () => {
  it('has exactly the 60 expected signs', () => {
    expect(signProfiles).toHaveLength(60)
    expect(signProfiles.map(p => p.slug).sort()).toEqual(Object.keys(EXPECTED_CHINESE_NAMES).sort())
  })

  it.each(Object.entries(EXPECTED_CHINESE_NAMES))('%s is %s', (slug, expected) => {
    expect(getProfileBySlug(slug)?.chineseName).toBe(expected)
  })

  it.each(signProfiles.map(p => [p.slug, p] as const))(
    '%s matches the stem-branch of every one of its years',
    (_slug, profile) => {
      expect(profile.years.length).toBeGreaterThan(0)
      for (const year of profile.years) {
        expect(stemBranchForYear(year)).toBe(profile.chineseName)
      }
    },
  )

  it('matches the examples from the bug report', () => {
    expect(getProfileBySlug('wood-ox')?.chineseName).toBe('乙丑')
    expect(getProfileBySlug('fire-goat')?.chineseName).toBe('丁未')
    expect(getProfileBySlug('fire-horse')?.chineseName).toBe('丙午')
  })
})
