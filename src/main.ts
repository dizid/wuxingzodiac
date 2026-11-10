import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import { reloadOnStaleChunks } from './lib/stale-chunk-reload'
// Fonts served from our own domain (were a render-blocking Google Fonts stylesheet,
// which also sent every visitor's IP to Google). Same families and weights as before.
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/500.css'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './styles/main.css'

// Hydrate (reuse the prerendered HTML) instead of vite-ssg's default of throwing it away
// and rendering every page a second time in the browser (headline and images re-paint
// after the JavaScript loads). Only when the HTML was prerendered for this exact path
// (vite.config.ts stamps data-ssg-route) and the page's first render doesn't depend on
// the browser: the report download page reads its query string. The blog renders from
// the build-time snapshot (src/lib/blog-snapshot.ts), the same data on server and
// client, so it hydrates too; posts not in the snapshot aren't prerendered at all.
const NO_HYDRATION_ROUTES = /^\/report(\/|$)/

function shouldHydrate(): boolean {
  if (typeof document === 'undefined') return false
  const renderedFor = document.getElementById('app')?.dataset.ssgRoute
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return renderedFor === path && !NO_HYDRATION_ROUTES.test(path)
}

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      return savedPosition || { top: 0 }
    },
  },
  ({ router, isClient }) => {
    // Reload on chunk load failure (stale cache after deploy): Chrome, Safari and Firefox
    // error texts, at most once per 10 s (see src/lib/stale-chunk-reload.ts)
    if (isClient) reloadOnStaleChunks(router)
  },
  { hydration: shouldHydrate() },
)
