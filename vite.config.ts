/// <reference types="vite-ssg" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'
import generateSitemap from 'vite-ssg-sitemap'

const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water']
const isDev = process.env.NODE_ENV !== 'production'

export default defineConfig({
  plugins: [vue(), tailwindcss(), ...(isDev ? [netlify()] : [])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    includedRoutes(paths) {
      // Start with auto-discovered static routes, excluding dynamic/template routes
      const allPaths = paths.filter(p => !p.includes(':'))

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

      // 60 result pages
      for (const element of ELEMENTS) {
        for (const animal of ANIMALS) {
          allPaths.push(`/result/${element}-${animal}`)
        }
      }

      // 1,830 compatibility pair pages (60 choose 2 + 60 same-sign pairs)
      const allSlugs: string[] = []
      for (const element of ELEMENTS) {
        for (const animal of ANIMALS) {
          allSlugs.push(`${element}-${animal}`)
        }
      }
      allSlugs.sort()
      for (let i = 0; i < allSlugs.length; i++) {
        for (let j = i; j < allSlugs.length; j++) {
          allPaths.push(`/compatibility/${allSlugs[i]}/${allSlugs[j]}`)
        }
      }

      return allPaths
    },
    onFinished() {
      generateSitemap({ hostname: 'https://wuxingzodiac.me' })
    },
  },
})
