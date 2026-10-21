// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { Context } from '@netlify/functions'
import createCheckout from '../functions/create-checkout'

// Lives outside netlify/functions/ so Netlify never mistakes it for a function.
// Stripe is always mocked: nothing here talks to Stripe.
const { createSession } = vi.hoisted(() => ({ createSession: vi.fn() }))
// `new Stripe(key)` needs a constructable mock, so a function, not an arrow
vi.mock('stripe', () => ({
  default: vi.fn(function () {
    return { checkout: { sessions: { create: createSession } } }
  }),
}))

const context = {} as Context

function post(body: Record<string, unknown>) {
  return new Request('http://localhost/api/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

const validReading = {
  readingType: 'personal',
  names: ['Anna'],
  birthDates: ['1990-05-14'],
  email: 'anna@example.com',
  isGift: false,
}

beforeEach(() => {
  createSession.mockReset()
  vi.stubEnv('STRIPE_SECRET_KEY', 'sk_test_dummy')
  vi.stubEnv('STRIPE_PRICE_ID', 'price_test_dummy')
  vi.stubEnv('SITE_URL', 'https://wuxingzodiac.me')
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('create-checkout function', () => {
  it('still answers 405 for non-POST requests', async () => {
    const res = await createCheckout(new Request('http://localhost/api/create-checkout'), context)
    expect(res.status).toBe(405)
  })

  describe('READING_LIVE unset (not on sale)', () => {
    it('refuses a valid reading checkout with a clear 410', async () => {
      vi.stubEnv('READING_LIVE', '')
      const res = await createCheckout(post(validReading), context)

      expect(res.status).toBe(410)
      expect(await res.json()).toEqual({ error: 'The personal reading is not on sale yet.' })
      expect(createSession).not.toHaveBeenCalled()
    })
  })

  describe('READING_LIVE=true (on sale)', () => {
    beforeEach(() => {
      vi.stubEnv('READING_LIVE', 'true')
    })

    it('refuses the old Elemental Blueprint body ({ slug }) without calling Stripe', async () => {
      const res = await createCheckout(post({ slug: 'fire-horse' }), context)

      expect(res.status).toBe(400)
      expect(createSession).not.toHaveBeenCalled()
    })

    it('creates a checkout for a valid personal reading and returns its URL', async () => {
      createSession.mockResolvedValue({ url: 'https://checkout.stripe.com/c/pay/cs_test_123' })

      const res = await createCheckout(post(validReading), context)

      expect(res.status).toBe(200)
      expect(await res.json()).toEqual({ url: 'https://checkout.stripe.com/c/pay/cs_test_123' })
      expect(createSession).toHaveBeenCalledTimes(1)

      const params = createSession.mock.calls[0]![0]
      expect(params.line_items).toEqual([{ price: 'price_test_dummy', quantity: 1 }])
      expect(params.customer_email).toBe('anna@example.com')
      expect(params.metadata.product).toBe('personal_reading')
      expect(params.metadata.sign_slug).toBe('metal-horse')
      expect(params.cancel_url).toBe('https://wuxingzodiac.me/reading')
      expect(params.success_url).toBe('https://wuxingzodiac.me/report/download?session_id={CHECKOUT_SESSION_ID}')
    })
  })
})
