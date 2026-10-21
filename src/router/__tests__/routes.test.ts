import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory, type RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'
import { routes } from '@/router'

// Swap the lazy page components for a stub so navigation only exercises the
// route table and its beforeEnter guards, not the real pages.
const Stub = defineComponent({ render: () => null })

function stubRoutes(records: RouteRecordRaw[]): RouteRecordRaw[] {
  return records.map(record => ({ ...record, component: Stub }) as RouteRecordRaw)
}

/** Navigate a fresh router to `path` and return the name of the route it lands on. */
async function landOn(path: string) {
  const router = createRouter({ history: createMemoryHistory(), routes: stubRoutes(routes) })
  await router.push(path)
  return router.currentRoute.value.name
}

describe('route table', () => {
  it.each(['wood', 'fire', 'earth', 'metal', 'water'])(
    '/zodiac/element/%s opens the element page',
    async (element) => {
      expect(await landOn(`/zodiac/element/${element}`)).toBe('zodiac-element')
    },
  )

  it.each(['rat', 'horse', 'pig'])('/zodiac/animal/%s opens the animal page', async (animal) => {
    expect(await landOn(`/zodiac/animal/${animal}`)).toBe('zodiac-animal')
  })

  it.each(['fire-horse', 'wood-ox', 'water-pig'])('/zodiac/%s opens the sign page', async (slug) => {
    expect(await landOn(`/zodiac/${slug}`)).toBe('zodiac-sign')
  })

  it('compatibility pair pages open the pair page', async () => {
    expect(await landOn('/compatibility/fire-horse/water-rat')).toBe('compatibility-pair')
  })

  it('/reading opens the personal reading page', async () => {
    expect(await landOn('/reading')).toBe('reading')
  })

  // There is no shop: the app doesn't route it, netlify.toml 301s it to /reading
  it.each(['/shop', '/shop/fire-horse-tee'])('%s is not routed in the app', async (path) => {
    expect(await landOn(path)).toBe('not-found')
  })

  it.each([
    '/zodiac/element/plastic',
    '/zodiac/element',
    '/zodiac/animal/unicorn',
    '/zodiac/fire-unicorn',
    '/zodiac/nonsense',
    '/compatibility/fire-horse/fire-unicorn',
    '/result/not-a-sign',
    '/this/path/does/not/exist',
  ])('%s still shows the 404 page', async (path) => {
    expect(await landOn(path)).toBe('not-found')
  })
})
