import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import TermsPage from '@/pages/TermsPage.vue'
import { READING_FIX_PROMISE } from '@/lib/reading-offer'

// No friction (Marc, 2026-10-21): never mention refunds, finality or a waiver
const BANNED_POLICY_COPY = /sales are final|refund|withdraw|waive|14-day/i

describe('TermsPage (/terms)', () => {
  it('only promises to fix a broken file, with no refund heading or policy wording', () => {
    const wrapper = mount(TermsPage, {
      global: {
        plugins: [createHead()],
        stubs: { RouterLink: RouterLinkStub },
      },
    })

    expect(READING_FIX_PROMISE).toBe(
      "If something is wrong with your reading file, reply to the email and we'll fix it or send a new one.",
    )
    // A plain bullet: no "Refunds:" label in front of it
    const fixItem = wrapper.findAll('li').find(item => item.text().includes(READING_FIX_PROMISE))
    expect(fixItem?.text().replace(/\s+/g, ' ')).toBe(READING_FIX_PROMISE)
    // Covers headings and labels too
    expect(wrapper.text()).not.toMatch(BANNED_POLICY_COPY)
  })
})
