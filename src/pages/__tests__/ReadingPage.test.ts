import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import type { Component } from 'vue'

// Vitest runs from the project root
const PUBLIC_DIR = resolve(process.cwd(), 'public')
// The order form ships with the personal-reading code; it may or may not be on this branch
const INTAKE_FORM_PRESENT = existsSync(resolve(process.cwd(), 'src/components/readings/ReadingIntakeForm.vue'))

// No birth-chart, BaZi, expert or master claims, no fake urgency or scarcity.
// "Birth chart" may only appear in the FAQ line that says it isn't one.
const BIRTH_CHART_DISCLAIMER = "It isn't a full birth chart"
const BANNED_COPY = /bazi|birth[- ]chart|four pillars|expert|master|limited|hurry|last chance|only \d+ left|today only/i

/** Import ReadingPage fresh, so READING_LIVE is re-read from the stubbed env */
async function mountReadingPage(readingLive?: string) {
  vi.resetModules()
  if (readingLive !== undefined) vi.stubEnv('READING_LIVE', readingLive)
  const { default: ReadingPage } = await import('@/pages/ReadingPage.vue') as { default: Component }
  return mount(ReadingPage, {
    global: {
      plugins: [createHead()],
      stubs: { RouterLink: RouterLinkStub },
    },
  })
}

describe('ReadingPage (/reading)', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  describe('READING_LIVE unset (default)', () => {
    beforeEach(() => {
      vi.stubEnv('READING_LIVE', '')
    })

    it('main action is the launch waitlist, not checkout', async () => {
      const wrapper = await mountReadingPage()
      const buttons = wrapper.findAll('button').map(button => button.text())
      expect(buttons).toContain('Get notified when it launches')
      expect(buttons.some(label => label.includes('Get your reading'))).toBe(false)
      expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    })

    it('links the free calculator', async () => {
      const wrapper = await mountReadingPage()
      const calculatorLink = wrapper.findAllComponents(RouterLinkStub).find(link => link.props('to') === '/calculator')
      expect(calculatorLink?.text()).toContain('Try the free sign calculator')
    })

    it('waitlist signup goes through the newsletter endpoint tagged reading-waitlist', async () => {
      const fetchMock = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: true, message: "You're on the list!" }), { status: 200 }),
      )
      vi.stubGlobal('fetch', fetchMock)

      const wrapper = await mountReadingPage()
      await wrapper.find('input[type="email"]').setValue('anna@example.com')
      await wrapper.find('form').trigger('submit')
      await flushPromises()

      expect(fetchMock).toHaveBeenCalledTimes(1)
      const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
      expect(url).toBe('/api/newsletter/subscribe')
      expect(JSON.parse(init.body as string)).toMatchObject({ email: 'anna@example.com', tags: ['reading-waitlist'] })
      expect(wrapper.text()).toContain("You're on the list!")
    })
  })

  it('READING_LIVE=true shows the order button only when the order form exists', async () => {
    const wrapper = await mountReadingPage('true')
    const buttons = wrapper.findAll('button').map(button => button.text())
    if (INTAKE_FORM_PRESENT) {
      expect(buttons.some(label => label.includes('Get your reading'))).toBe(true)
      expect(buttons).not.toContain('Get notified when it launches')
    } else {
      // Without the form there is nothing to buy with, so it stays on the waitlist
      expect(buttons).toContain('Get notified when it launches')
    }
  })

  it('explains the offer honestly: 8 pages, by name, $9.90, email, FAQ and disclaimer', async () => {
    const text = (await mountReadingPage('')).text()
    expect(text).toContain('8-page personalized PDF based on your birth-year sign and the five elements')
    expect(text).toContain('written to you by name')
    expect(text).toContain('$9.90')
    expect(text).toContain('delivered by email')
    expect(text).toContain("What isn't it?")
    expect(text).toContain('Not happy, full refund.')
    expect(text).toContain('for entertainment and self-reflection')
    expect(text).toContain(BIRTH_CHART_DISCLAIMER)
    expect(text.replace(BIRTH_CHART_DISCLAIMER, '')).not.toMatch(BANNED_COPY)
  })

  it('shows 3 sample pages for Anna, each an optimized image in public/', async () => {
    const images = (await mountReadingPage('')).findAll('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      const src = image.attributes('src')!
      expect(src).toMatch(/^\/reading\/sample-anna-.+\.jpg$/)
      expect(image.attributes('alt')).toContain('Anna')
      const file = `${PUBLIC_DIR}${src}`
      expect(existsSync(file)).toBe(true)
      expect(statSync(file).size).toBeLessThan(200 * 1024)
    }
  })
})
