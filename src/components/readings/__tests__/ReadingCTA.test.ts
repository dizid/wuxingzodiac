import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ReadingCTA from '@/components/readings/ReadingCTA.vue'

// Claims the reading copy must never make (order 003): no birth-chart, BaZi,
// expert or master claims, and no fake urgency or scarcity.
const BANNED_COPY = /bazi|birth[- ]chart|four pillars|expert|master|limited|hurry|last chance|only \d+ left|today only/i

const VARIANTS = ['full', 'compact', 'button'] as const

function mountCta(props: Record<string, unknown>) {
  return mount(ReadingCTA, {
    props: { placement: 'test_spot', ...props },
    global: { stubs: { RouterLink: RouterLinkStub } },
  })
}

describe('ReadingCTA', () => {
  const gtag = vi.fn()

  beforeEach(() => {
    gtag.mockClear()
    window.gtag = gtag
  })

  afterEach(() => {
    Reflect.deleteProperty(window, 'gtag')
  })

  it.each(VARIANTS)('%s variant has exactly one link, to /reading, and tracks its placement', async (variant) => {
    const wrapper = mountCta({ variant })
    const links = wrapper.findAllComponents(RouterLinkStub)

    expect(links).toHaveLength(1)
    expect(links[0]!.props('to')).toBe('/reading')
    expect(wrapper.find('button').exists()).toBe(false)

    await links[0]!.trigger('click')
    expect(gtag).toHaveBeenCalledWith('event', 'reading_cta_click', { placement: 'test_spot' })
  })

  it.each(VARIANTS)('%s variant copy stays honest', (variant) => {
    expect(mountCta({ variant, signName: 'Fire Horse', note: 'A note.' }).text()).not.toMatch(BANNED_COPY)
  })

  it('full variant states the offer: 8 pages, by name, birth-year sign + five elements, $9.90, by email', () => {
    const text = mountCta({ variant: 'full' }).text()
    expect(text).toContain('8 pages written for you')
    expect(text).toContain('written to you by name')
    expect(text).toContain('birth-year sign and the five elements')
    expect(text).toContain('delivered by email')
    expect(text).toContain('$9.90')
  })

  it('compact variant uses the one-line copy', () => {
    expect(mountCta({ variant: 'compact' }).text()).toContain('Your personal WuXing reading: 8 pages written for you. $9.90')
  })

  it('full variant mentions the sign being viewed', () => {
    expect(mountCta({ signName: 'Wood Ox' }).text()).toContain('More depth than the free Wood Ox profile.')
  })

  it('note is plain text, never an extra link or button', () => {
    const wrapper = mountCta({ note: 'A relationship reading for two people is coming soon.' })
    expect(wrapper.text()).toContain('A relationship reading for two people is coming soon.')
    expect(wrapper.findAllComponents(RouterLinkStub)).toHaveLength(1)
    expect(wrapper.find('button').exists()).toBe(false)
  })
})
