/// <reference types="vite/client" />
/// <reference types="vite-ssg" />

interface ImportMetaEnv {
  /** "true" switches /reading from the launch waitlist to selling the reading. Build-time, unset = off. */
  readonly READING_LIVE?: string
}

/** Build time as ISO, set by `define` in vite.config.ts */
declare const __BUILD_DATE__: string

// GA4 gtag global
interface Window {
  dataLayer: Record<string, unknown>[]
  gtag: (...args: unknown[]) => void
}
