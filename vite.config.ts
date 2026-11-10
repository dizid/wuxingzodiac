/// <reference types="vite-ssg" />
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'
import generateSitemap from 'vite-ssg-sitemap'

const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water']
const isDev = process.env.NODE_ENV !== 'production'

/** Slugs in src/generated/blog-snapshot.json; none when the snapshot is missing. */
function readBlogSnapshotSlugs(): string[] {
  const file = fileURLToPath(new URL('./src/generated/blog-snapshot.json', import.meta.url))
  if (!existsSync(file)) return []
  const snapshot = JSON.parse(readFileSync(file, 'utf8')) as { posts?: { slug: string }[] }
  return (snapshot.posts ?? []).map(post => post.slug).filter(slug => /^[a-z0-9-]+$/.test(slug))
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), ...(isDev ? [netlify()] : [])],
  // Expose the READING_LIVE feature flag (build-time env var, see src/lib/reading-offer.ts)
  // to client code next to the usual VITE_* vars.
  envPrefix: ['VITE_', 'READING_LIVE'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    // No critical-CSS step (beasties), same as the other Dizid sites. It moved the full
    // stylesheet to the end of <body> and its inlined "critical" subset missed most
    // Tailwind utilities (spacing, font sizes, widths), so phones first drew pages
    // half-styled and then jumped when the stylesheet arrived (/reading: CLS 0.68).
    // The one stylesheet (~15 KB gzipped) now loads normally in <head>.
    beastiesOptions: false,
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

      // Blog posts from the build-time snapshot (scripts/blog-snapshot.mjs runs first)
      for (const slug of readBlogSnapshotSlugs()) {
        allPaths.push(`/blog/${slug}`)
      }

      return allPaths
    },
    // Stamp each prerendered page with its route; src/main.ts only hydrates when it
    // matches the URL (the SPA fallback serves the home HTML for other paths).
    onPageRendered(route: string, renderedHTML: string) {
      return renderedHTML.replace(
        '<div id="app" data-server-rendered="true">',
        `<div id="app" data-server-rendered="true" data-ssg-route="${route.replace(/"/g, '&quot;')}">`,
      )
    },
    onFinished() {
      generateSitemap({
        hostname: 'https://wuxingzodiac.me',
        // Private post-purchase page (noindex), still pre-rendered but not listed
        exclude: ['/report/download'],
      })
    },
  },
})
