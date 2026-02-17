import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './styles/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      return savedPosition || { top: 0 }
    },
  },
  ({ router }) => {
    // Reload on chunk load failure (stale cache after deploy)
    router.onError((error, to) => {
      if (error.message.includes('Failed to fetch dynamically imported module') ||
          error.message.includes('Loading chunk')) {
        window.location.href = to.fullPath
      }
    })
  },
)
