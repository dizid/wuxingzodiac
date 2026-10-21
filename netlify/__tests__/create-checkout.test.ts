// @vitest-environment node
import { describe, it, expect, vi } from 'vitest'
import type { Context } from '@netlify/functions'
import createCheckout from '../functions/create-checkout'

// Lives outside netlify/functions/ so Netlify never mistakes it for a function.
// Stripe is always mocked: nothing here talks to Stripe.
const { createSession } = vi.hoisted(() => ({ createSession: vi.fn() }))
vi.mock('stripe', () => ({
  default: vi.fn(() => ({ checkout: { sessions: { create: createSession } } })),
}))

const context = {} as Context

function post(body: Record<string, unknown>) {
  return new Request('http://localhost/api/create-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('create-checkout function (old Elemental Blueprint offer)', () => {
  it('refuses a valid Blueprint checkout with a clear 410 while the offer is off', async () => {
    const res = await createCheckout(post({ slug: 'fire-horse' }), context)

    expect(res.status).toBe(410)
    expect(await res.json()).toEqual({ error: 'The Elemental Blueprint is no longer available for purchase.' })
    expect(createSession).not.toHaveBeenCalled()
  })

  it('still answers 405 for non-POST requests', async () => {
    const res = await createCheckout(new Request('http://localhost/api/create-checkout'), context)
    expect(res.status).toBe(405)
  })
})
