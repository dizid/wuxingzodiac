import { describe, it, expect } from 'vitest'
import {
  validateReadingInput,
  validateBirthDate,
  toStripeMetadata,
  fromStripeMetadata,
  getProductLabel,
  READING_LIMITS,
  READING_PRODUCT,
} from '../types'
import { getSignForBirthDate, formatIsoDate } from '../sign'

const NOW = new Date('2026-10-13T12:00:00Z')

const validBody = {
  readingType: 'personal',
  names: ['Marc'],
  birthDates: ['1984-06-12'],
  email: 'Test@Example.com ',
  isGift: false,
}

describe('validateReadingInput', () => {
  it('accepts a valid personal reading and normalizes fields', () => {
    const result = validateReadingInput(validBody, NOW)
    expect(result.ok).toBe(true)
    if (!result.ok) return
    expect(result.input).toEqual({
      type: 'personal',
      names: ['Marc'],
      birthDates: ['1984-06-12'],
      email: 'test@example.com',
      isGift: false,
    })
  })

  it('accepts non-Latin names, hyphens and apostrophes', () => {
    for (const name of ['Zoë', "D'Arcy", 'Anne-Marie', '李明', 'José María']) {
      expect(validateReadingInput({ ...validBody, names: [name] }, NOW).ok).toBe(true)
    }
  })

  it('rejects names with markup or symbols', () => {
    for (const name of ['<script>', 'a{b}', '', 'x'.repeat(READING_LIMITS.name + 1), '1234']) {
      expect(validateReadingInput({ ...validBody, names: [name] }, NOW).ok).toBe(false)
    }
  })

  it('rejects unknown types and wrong people counts', () => {
    expect(validateReadingInput({ ...validBody, readingType: 'tarot' }, NOW).ok).toBe(false)
    expect(validateReadingInput({ ...validBody, names: ['A', 'B'] }, NOW).ok).toBe(false)
  })

  it('rejects invalid emails', () => {
    expect(validateReadingInput({ ...validBody, email: 'not-an-email' }, NOW).ok).toBe(false)
  })

  it('defaults the gift recipient to the reading name and keeps the message', () => {
    const result = validateReadingInput(
      { ...validBody, isGift: true, giftMessage: '  Happy birthday!\r\nLove,  Sam ' },
      NOW,
    )
    expect(result.ok).toBe(true)
    if (!result.ok) return
    expect(result.input.recipientName).toBe('Marc')
    expect(result.input.giftMessage).toBe('Happy birthday!\nLove, Sam')
  })

  it('rejects gift messages over the limit', () => {
    const giftMessage = 'x'.repeat(READING_LIMITS.giftMessage + 1)
    expect(validateReadingInput({ ...validBody, isGift: true, giftMessage }, NOW).ok).toBe(false)
  })

  it('drops gift fields when isGift is false', () => {
    const result = validateReadingInput({ ...validBody, recipientName: 'Sam', giftMessage: 'Hi' }, NOW)
    expect(result.ok && result.input.recipientName).toBe(undefined)
    expect(result.ok && result.input.giftMessage).toBe(undefined)
  })
})

describe('validateBirthDate', () => {
  it('rejects impossible, too-old and future dates', () => {
    expect(validateBirthDate('1990-02-30', NOW)).not.toBeNull()
    expect(validateBirthDate('1923-12-31', NOW)).not.toBeNull()
    expect(validateBirthDate('2026-10-14', NOW)).not.toBeNull()
    expect(validateBirthDate('12/06/1984', NOW)).not.toBeNull()
  })

  it('accepts today and the oldest supported date', () => {
    expect(validateBirthDate('2026-10-13', NOW)).toBeNull()
    expect(validateBirthDate('1924-01-01', NOW)).toBeNull()
  })
})

describe('Stripe metadata codec', () => {
  it('round-trips a gift reading', () => {
    const result = validateReadingInput(
      { ...validBody, isGift: true, recipientName: 'Sam', giftMessage: 'For you ❤️' },
      NOW,
    )
    if (!result.ok) throw new Error(result.error)

    const metadata = toStripeMetadata(result.input, 'wood-rat')
    expect(metadata.product).toBe(READING_PRODUCT)
    expect(Object.values(metadata).every((v) => v.length <= 500)).toBe(true)
    expect(fromStripeMetadata(metadata)).toEqual(result.input)
  })

  it('returns null for legacy blueprint sessions', () => {
    expect(fromStripeMetadata({ product: 'elemental_blueprint', sign_slug: 'fire-horse' })).toBeNull()
    expect(fromStripeMetadata(null)).toBeNull()
  })

  it('labels products for analytics', () => {
    expect(getProductLabel({ product: READING_PRODUCT, reading_type: 'personal' })).toBe('Personal Reading')
    expect(getProductLabel({ product: 'elemental_blueprint' })).toBe('Elemental Blueprint')
  })
})

describe('getSignForBirthDate', () => {
  it('uses the lunar new year boundary', () => {
    // Lunar new year 1990 fell on 27 January
    expect(getSignForBirthDate('1990-01-20').slug).toBe('earth-snake')
    expect(getSignForBirthDate('1990-02-20').slug).toBe('metal-horse')
  })

  it('returns profile and archetype details', () => {
    const sign = getSignForBirthDate('1966-06-01')
    expect(sign).toMatchObject({
      slug: 'fire-horse',
      element: 'fire',
      animal: 'horse',
      lunarYear: 1966,
      name: 'Fire Horse',
      archetype: 'The Untamable Spirit',
    })
    expect(sign.chineseName).toBe('丙午')
  })

  it('formats birth dates consistently', () => {
    expect(formatIsoDate('1984-06-12')).toBe('12 June 1984')
  })
})
