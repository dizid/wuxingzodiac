import { describe, it, expect, vi, afterEach } from 'vitest'
import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import ReadingIntakeForm from '@/components/readings/ReadingIntakeForm.vue'

// No consent box (Marc, 2026-10-21): the order form is name, birth date, email
// and the gift option, and the pay button only waits for a submit in progress.
// Policy wording that must never come back on the form:
const BANNED_POLICY_COPY = /withdrawal|waiver|waive|14-day|full refund/i

async function mountFilledForm() {
  const wrapper = mount(ReadingIntakeForm, {
    global: { stubs: { RouterLink: RouterLinkStub } },
  })
  await wrapper.find('#reading-name').setValue('Anna')
  await wrapper.find('#reading-birthdate').setValue('1990-05-14')
  await wrapper.find('#reading-email').setValue('anna@example.com')
  return wrapper
}

/** fetch mock that answers like a refused checkout, so the form never navigates */
function mockCheckoutFetch() {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(JSON.stringify({ error: 'Test stop' }), { status: 400 }),
  )
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

describe('ReadingIntakeForm without a consent box', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('has no consent checkbox: the gift option is the only checkbox, and no policy wording', async () => {
    const wrapper = await mountFilledForm()

    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect(checkboxes).toHaveLength(1)
    expect(checkboxes[0]!.element.closest('label')?.textContent).toContain('This is a gift')
    expect(wrapper.find('#reading-withdrawal-waiver').exists()).toBe(false)
    expect(wrapper.text()).not.toMatch(BANNED_POLICY_COPY)
  })

  it('enables the pay button without ticking anything', async () => {
    const wrapper = mount(ReadingIntakeForm, {
      global: { stubs: { RouterLink: RouterLinkStub } },
    })
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeUndefined()

    await wrapper.find('#reading-name').setValue('Anna')
    await wrapper.find('#reading-birthdate').setValue('1990-05-14')
    await wrapper.find('#reading-email').setValue('anna@example.com')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('disables the pay button only while the checkout is being created', async () => {
    // Never resolves, so the form stays in its submitting state
    vi.stubGlobal('fetch', vi.fn(() => new Promise<Response>(() => {})))
    const wrapper = await mountFilledForm()

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
    expect(submitButton.text()).toBe('Redirecting to checkout...')
  })

  it('sends the order to create-checkout with no consent field', async () => {
    const fetchMock = mockCheckoutFetch()
    const wrapper = await mountFilledForm()

    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/create-checkout')
    const sentBody = JSON.parse(init.body as string)
    expect(sentBody).toMatchObject({
      readingType: 'personal',
      names: ['Anna'],
      birthDates: ['1990-05-14'],
      email: 'anna@example.com',
      isGift: false,
    })
    expect(sentBody).not.toHaveProperty('withdrawalWaiver')
  })
})
