// Browser-only feature flag for "Step into your element" (kept apart from
// offer.ts, which server functions import and where import.meta.env doesn't exist).
//
// Netlify env ELEMENT_VIDEO_LIVE=true (builds + functions), then redeploy.
// Off: the product page shows the sample and "not on sale yet" with no buy
// button, sign pages show no video card, and the checkout function refuses (410).
export const ELEMENT_VIDEO_LIVE: boolean = import.meta.env.ELEMENT_VIDEO_LIVE === 'true'
