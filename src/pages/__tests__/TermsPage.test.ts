import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import TermsPage from '@/pages/TermsPage.vue'
import { READING_REFUND_POLICY } from '@/lib/reading-offer'

describe('TermsPage (/terms)', () => {
  it('states the refund policy as one plain line, with no consent-box wording', () => {
    const wrapper = mount(TermsPage, {
      global: {
        plugins: [createHead()],
        stubs: { RouterLink: RouterLinkStub },
      },
    })

    // Marc, 2026-10-21: just "Refunds:" plus the shared policy line
    const refundItem = wrapper.findAll('li').find(item => item.text().startsWith('Refunds:'))
    expect(refundItem?.text().replace(/\s+/g, ' ')).toBe(`Refunds: ${READING_REFUND_POLICY}`)
    expect(wrapper.text()).not.toMatch(/withdrawal|waiver|waive|14-day|full refund/i)
  })
})
