import { describe, it, expect, vi, afterEach } from 'vitest'
import { flushPromises, mount, RouterLinkStub } from '@vue/test-utils'
import ReadingIntakeForm from '@/components/readings/ReadingIntakeForm.vue'

// No refunds (Marc, 2026-10-21): buyers must waive the EU 14-day right of
// withdrawal with a real, unticked-by-default checkbox before checkout.
const WAIVER_LABEL =
  'I agree that my reading is delivered immediately and I give up my 14-day right of withdrawal. See Terms.'

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

describe('ReadingIntakeForm withdrawal waiver', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('is a required, unticked checkbox with a label linking to the Terms', async () => {
    const wrapper = await mountFilledForm()
    const checkbox = wrapper.find<HTMLInputElement>('#reading-withdrawal-waiver')

    expect(checkbox.attributes('type')).toBe('checkbox')
    expect(checkbox.attributes('required')).toBeDefined()
    expect(checkbox.element.checked).toBe(false)

    const label = wrapper.find('label[for="reading-withdrawal-waiver"]')
    expect(label.text().replace(/\s+/g, ' ')).toBe(WAIVER_LABEL)
    const termsLink = label.findComponent(RouterLinkStub)
    expect(termsLink.props('to')).toBe('/terms')
    expect(termsLink.text()).toBe('Terms')
  })

  it('blocks submit until the box is ticked, even with every field valid', async () => {
    const fetchMock = mockCheckoutFetch()
    const wrapper = await mountFilledForm()
    const submitButton = wrapper.find('button[type="submit"]')

    expect(submitButton.attributes('disabled')).toBeDefined()

    // Any other submit path (e.g. Enter) is refused too, with a clear message
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    expect(fetchMock).not.toHaveBeenCalled()
    expect(wrapper.find('[role="alert"]').text()).toContain('14-day right of withdrawal')

    await wrapper.find('#reading-withdrawal-waiver').setValue(true)
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('sends withdrawalWaiver: true to create-checkout once ticked', async () => {
    const fetchMock = mockCheckoutFetch()
    const wrapper = await mountFilledForm()

    await wrapper.find('#reading-withdrawal-waiver').setValue(true)
    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('/api/create-checkout')
    expect(JSON.parse(init.body as string)).toMatchObject({
      readingType: 'personal',
      names: ['Anna'],
      birthDates: ['1990-05-14'],
      email: 'anna@example.com',
      withdrawalWaiver: true,
    })
  })
})
