import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import ZodiacAnimalPage from '@/pages/ZodiacAnimalPage.vue'
import { BRANCH_ORDER, partners } from '@/lib/branch-relations'
import { zodiacAnimals } from '@/lib/zodiac-data'
import type { ZodiacAnimal } from '@/types'

const nameOf = (animal: ZodiacAnimal) => zodiacAnimals.find(item => item.animal === animal)!.name

async function mountAnimalPage(animal: ZodiacAnimal) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/zodiac/animal/:animal', component: ZodiacAnimalPage },
      { path: '/:pathMatch(.*)*', component: { render: () => null } },
    ],
  })
  await router.push(`/zodiac/animal/${animal}`)
  await router.isReady()
  const wrapper = mount(ZodiacAnimalPage, { global: { plugins: [router, createHead()] } })
  await flushPromises()
  return wrapper
}

describe('ZodiacAnimalPage (/zodiac/animal/:animal)', () => {
  it.each(BRANCH_ORDER.map(branch => branch.animal))('%s: friends and frictions match the relations data', async animal => {
    const wrapper = await mountAnimalPage(animal)
    const section = wrapper.find('section')
    expect(section.exists()).toBe(true)
    const items = section.findAll('ul')[0]!.findAll('li').map(li => li.text())
    expect(items).toHaveLength(4)

    const [allyA, allyB] = partners(animal, 'trine')
    expect(items[0]).toContain(`${nameOf(allyA!)} and the ${nameOf(allyB!)}`)
    expect(items[1]).toContain(nameOf(partners(animal, 'secret-friend')[0]!))
    expect(items[2]).toContain(nameOf(partners(animal, 'clash')[0]!))
    expect(items[3]).toContain(nameOf(partners(animal, 'harm')[0]!))

    // Every related animal links to its own animal page
    const links = section.findAll('a').map(a => a.attributes('href'))
    for (const other of [allyA!, allyB!, ...(['secret-friend', 'clash', 'harm'] as const).map(r => partners(animal, r)[0]!)]) {
      expect(links).toContain(`/zodiac/animal/${other}`)
    }
  })

  it('names the 2026 and 2027 year relations (Rat: clash with the Horse, harm with the Goat)', async () => {
    const text = (await mountAnimalPage('rat')).text()
    expect(text).toContain('2026, the Fire Horse year (17 February 2026 to 5 February 2027): the Rat clashes with the Horse.')
    expect(text).toContain('2027, the Fire Goat year (from 6 February 2027): the Rat and the Goat are a harm pair.')
  })

  it("calls the year of its own animal the animal's own zodiac year", async () => {
    expect((await mountAnimalPage('horse')).text()).toContain("2026, the Fire Horse year (17 February 2026 to 5 February 2027): the Horse's own zodiac year.")
    expect((await mountAnimalPage('goat')).text()).toContain("the Horse is the Goat's secret friend")
  })

  it('shows the personal reading offer', async () => {
    const wrapper = await mountAnimalPage('dragon')
    expect(wrapper.text()).toContain('$9.90')
    expect(wrapper.findAll('a').map(a => a.attributes('href'))).toContain('/reading')
  })
})
