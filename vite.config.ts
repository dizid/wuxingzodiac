/// <reference types="vite-ssg" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'
import generateSitemap from 'vite-ssg-sitemap'

const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water']

export default defineConfig({
  plugins: [vue(), tailwindcss(), netlify()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    includedRoutes(paths) {
      // Start with auto-discovered static routes
      const allPaths = [...paths]

      // 60 sign pages
      for (const element of ELEMENTS) {
        for (const animal of ANIMALS) {
          allPaths.push(`/zodiac/${element}-${animal}`)
        }
      }

      // 12 animal pages
      for (const animal of ANIMALS) {
        allPaths.push(`/zodiac/animal/${animal}`)
      }

      // 5 element pages
      for (const element of ELEMENTS) {
        allPaths.push(`/zodiac/element/${element}`)
      }

      return allPaths
    },
    onFinished() {
      generateSitemap({ hostname: 'https://wuxingzodiac.me' })
    },
  },
})
