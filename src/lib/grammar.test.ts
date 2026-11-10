import { describe, expect, it } from 'vitest'
import { withArticle } from './grammar'

describe('withArticle', () => {
  it('uses "an" before a vowel and "a" otherwise', () => {
    expect(withArticle('Earth Snake')).toBe('an Earth Snake')
    expect(withArticle('Fire Horse')).toBe('a Fire Horse')
    expect(withArticle('Metal Rat')).toBe('a Metal Rat')
    expect(withArticle('Water Ox')).toBe('a Water Ox')
    expect(withArticle('Wood Goat')).toBe('a Wood Goat')
  })
})
