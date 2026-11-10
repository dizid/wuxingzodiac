// Product structured data for /reading (T-0240): price and URL come from the shared offer facts
import { describe, it, expect } from 'vitest'
import { readingProductJsonLd, READING_PRICE } from '../reading-offer'

describe('readingProductJsonLd', () => {
  const data = readingProductJsonLd('https://wuxingzodiac.me', 'An 8-page PDF.') as {
    '@type': string
    name: string
    description: string
    offers: { price: string; priceCurrency: string; url: string; availability: string }
  }

  it('is a Product with the page description', () => {
    expect(data['@type']).toBe('Product')
    expect(data.name).toBe('WuXing Personal Reading')
    expect(data.description).toBe('An 8-page PDF.')
  })

  it('offers the same price as the page shows, in USD, at /reading', () => {
    expect(`$${data.offers.price}`).toBe(READING_PRICE)
    expect(data.offers.price).toMatch(/^\d+\.\d{2}$/)
    expect(data.offers.priceCurrency).toBe('USD')
    expect(data.offers.url).toBe('https://wuxingzodiac.me/reading')
    expect(data.offers.availability).toBe('https://schema.org/InStock')
  })
})
