/// <reference types="vite/client" />
/// <reference types="vite-ssg" />

// GA4 gtag global
interface Window {
  dataLayer: Record<string, unknown>[]
  gtag: (...args: unknown[]) => void
}
