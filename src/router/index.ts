import type { RouteRecordRaw } from 'vue-router'

const VALID_ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const
const VALID_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const

const VALID_SIGN_SLUGS = VALID_ELEMENTS.flatMap(e =>
  VALID_ANIMALS.map(a => `${e}-${a}`),
)

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/zodiac',
    name: 'zodiac-directory',
    component: () => import('@/pages/ZodiacDirectoryPage.vue'),
  },
  {
    path: '/zodiac/animal/:animal',
    name: 'zodiac-animal',
    component: () => import('@/pages/ZodiacAnimalPage.vue'),
    beforeEnter: (to) => {
      if (!VALID_ANIMALS.includes(to.params.animal as typeof VALID_ANIMALS[number])) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
    },
  },
  {
    path: '/zodiac/element/:element',
    name: 'zodiac-element',
    component: () => import('@/pages/ZodiacElementPage.vue'),
    beforeEnter: (to) => {
      if (!VALID_ELEMENTS.includes(to.params.element as typeof VALID_ELEMENTS[number])) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
    },
  },
  {
    path: '/zodiac/:slug',
    name: 'zodiac-sign',
    component: () => import('@/pages/ZodiacSignPage.vue'),
    beforeEnter: (to) => {
      if (!VALID_SIGN_SLUGS.includes(to.params.slug as string)) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
    },
  },
  {
    path: '/compatibility/:slugA/:slugB',
    name: 'compatibility-pair',
    component: () => import('@/pages/CompatibilityPage.vue'),
    beforeEnter: (to) => {
      const slugA = to.params.slugA as string
      const slugB = to.params.slugB as string
      if (!VALID_SIGN_SLUGS.includes(slugA) || !VALID_SIGN_SLUGS.includes(slugB)) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
      // Canonical order: alphabetical
      if (slugA > slugB) {
        return { path: `/compatibility/${slugB}/${slugA}`, replace: true }
      }
    },
  },
  {
    path: '/compatibility',
    name: 'compatibility',
    component: () => import('@/pages/CompatibilityPage.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('@/pages/CalculatorPage.vue'),
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/pages/ShopPage.vue'),
  },
  {
    path: '/shop/:slug',
    name: 'shop-sign',
    component: () => import('@/pages/ShopPage.vue'),
    beforeEnter: (to) => {
      if (!VALID_SIGN_SLUGS.includes(to.params.slug as string)) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/pages/BlogPage.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('@/pages/BlogPostPage.vue'),
  },
  {
    path: '/result/:sign',
    name: 'result',
    component: () => import('@/pages/ResultPage.vue'),
    beforeEnter: (to) => {
      if (!VALID_SIGN_SLUGS.includes(to.params.sign as string)) {
        return { name: 'not-found', params: { pathMatch: to.path.split('/').slice(1) } }
      }
    },
  },
  {
    path: '/report/download',
    name: 'report-download',
    component: () => import('@/pages/ReportDownloadPage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/pages/PrivacyPage.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/pages/TermsPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
]
