// ============================================
// useReadingYear: the zodiac year the reading covers, for page copy
// ============================================
// Pages are pre-built (vite-ssg), so the first browser render must match the
// HTML made at build time: it starts from the build date (__BUILD_DATE__, set
// in vite.config.ts) and switches to the visitor's date once mounted. A page
// built in December therefore still shows the right year on 1 January.

import { onMounted, shallowRef, type ShallowRef } from 'vue'
import { getReadingYear, type ReadingYear } from '@/lib/readings/reading-year'

/** Build time as ISO; tests and other tools without the Vite define fall back to now. */
function buildDate(): Date {
  return typeof __BUILD_DATE__ === 'string' ? new Date(__BUILD_DATE__) : new Date()
}

export function useReadingYear(): ShallowRef<ReadingYear> {
  const readingYear = shallowRef(getReadingYear(buildDate()))
  onMounted(() => {
    const current = getReadingYear()
    // Only replace when it differs, so a page built this year doesn't re-render
    if (current.year !== readingYear.value.year || current.started !== readingYear.value.started) {
      readingYear.value = current
    }
  })
  return readingYear
}
