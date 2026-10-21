// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { Context } from '@netlify/functions'
import subscribe from '../functions/newsletter-subscribe'

// Lives outside netlify/functions/ so Netlify never mistakes it for a function.
// fetch is always mocked: nothing here talks to Buttondown.

const context = {} as Context

function post(body: Record<string, unknown>) {
  return new Request('http://localhost/api/newsletter/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

function buttondownReply(status: number, body: unknown = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })
}

/** The JSON body and headers of the nth call to Buttondown */
function sentToButtondown(fetchMock: ReturnType<typeof vi.fn>, call = 0) {
  const [, init] = fetchMock.mock.calls[call] as [string, RequestInit]
  return {
    body: JSON.parse(init.body as string) as Record<string, unknown>,
    headers: init.headers as Record<string, string>,
  }
}

describe('newsletter-subscribe function', () => {
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    vi.stubEnv('BUTTONDOWN_API_KEY', 'test-key')
    fetchMock = vi.fn().mockResolvedValue(buttondownReply(201))
    vi.stubGlobal('fetch', fetchMock)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('reading waitlist: adds the reading-waitlist tag and merges into an existing subscriber', async () => {
    const res = await subscribe(post({ email: 'anna@example.com', sign: 'metal-horse', tags: ['reading-waitlist'] }), context)

    expect(res.status).toBe(200)
    expect((await res.json()).message).toBe("You're on the list! We'll email you when the reading launches.")
    const { body, headers } = sentToButtondown(fetchMock)
    expect(body).toEqual({
      email_address: 'anna@example.com',
      type: 'regular',
      tags: ['metal-horse', 'reading-waitlist'],
      metadata: { zodiac_sign: 'metal-horse', reading_waitlist: 'yes' },
    })
    expect(headers['X-Buttondown-Collision-Behavior']).toBe('add')
    expect(headers.Authorization).toBe('Token test-key')
  })

  it('ignores tags that are not on the allowlist', async () => {
    await subscribe(post({ email: 'anna@example.com', tags: ['vip', 'reading-waitlist ', 42] }), context)

    const { body, headers } = sentToButtondown(fetchMock)
    expect(body).toEqual({ email_address: 'anna@example.com', type: 'regular' })
    expect(headers['X-Buttondown-Collision-Behavior']).toBeUndefined()
  })

  it('regular newsletter signup is unchanged', async () => {
    const res = await subscribe(post({ email: 'anna@example.com', sign: 'fire-horse' }), context)

    expect((await res.json()).message).toBe("You're in! Watch your inbox.")
    const { body, headers } = sentToButtondown(fetchMock)
    expect(body).toEqual({
      email_address: 'anna@example.com',
      type: 'regular',
      tags: ['fire-horse'],
      metadata: { zodiac_sign: 'fire-horse' },
    })
    expect(headers['X-Buttondown-Collision-Behavior']).toBeUndefined()
  })

  it('regular duplicate signup still says "already subscribed"', async () => {
    fetchMock.mockResolvedValueOnce(buttondownReply(400, { detail: 'Email already exists' }))
    const res = await subscribe(post({ email: 'anna@example.com' }), context)

    expect(res.status).toBe(200)
    expect((await res.json()).message).toBe("You're already subscribed!")
  })

  it('retries without tags when the Buttondown plan rejects new tags (403)', async () => {
    fetchMock.mockResolvedValueOnce(buttondownReply(403, { code: 'feature_disabled' }))
    const res = await subscribe(post({ email: 'anna@example.com', tags: ['reading-waitlist'] }), context)

    expect(res.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    const retry = sentToButtondown(fetchMock, 1).body
    expect(retry.tags).toBeUndefined()
    expect(retry.metadata).toEqual({ reading_waitlist: 'yes' })
  })

  it('honeypot submissions never reach Buttondown', async () => {
    const res = await subscribe(post({ email: 'bot@example.com', honeypot: 'gotcha', tags: ['reading-waitlist'] }), context)

    expect(res.status).toBe(200)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
