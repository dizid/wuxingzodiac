// ============================================
// READING PDF TEMPLATE — shared building blocks
// ============================================
// Every reading type renders a full HTML document that Playwright prints
// to an A4 PDF. Look & feel mirrors the sign pages: element palettes from
// src/styles/main.css, Cinzel display type, a dark glowing cover.
// Interior pages are light so the PDF prints well and margins stay clean
// (Chromium doesn't paint page backgrounds into @page margins).
//
// SECURITY: all user input and model output must pass through esc()
// before it is placed in HTML — the PDF renderer is a real browser.

import type { ZodiacElement } from '../../../../types'
import type { ReadingContext } from '../context'

export interface ElementPalette {
  50: string
  100: string
  200: string
  500: string
  600: string
  700: string
  900: string
  950: string
  accent: string
  /** "r, g, b" for rgba() glows */
  glowRgb: string
  chinese: string
}

// Values copied from src/styles/main.css (@theme + [data-element] blocks)
export const ELEMENT_PALETTES: Record<ZodiacElement, ElementPalette> = {
  wood: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 900: '#14532d', 950: '#052e16', accent: '#86efac', glowRgb: '34, 197, 94', chinese: '木' },
  fire: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 900: '#7c2d12', 950: '#431407', accent: '#fbbf24', glowRgb: '249, 115, 22', chinese: '火' },
  earth: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 900: '#78350f', 950: '#451a03', accent: '#fbbf24', glowRgb: '217, 119, 6', chinese: '土' },
  metal: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 500: '#64748b', 600: '#475569', 700: '#334155', 900: '#0f172a', 950: '#020617', accent: '#e2e8f0', glowRgb: '148, 163, 184', chinese: '金' },
  water: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 900: '#1e3a8a', 950: '#172554', accent: '#93c5fd', glowRgb: '59, 130, 246', chinese: '水' },
}

// Google Fonts: Noto Sans (body), Noto Sans SC (Chinese), Cinzel (display, as on the site).
// display=block so glyphs never render in a fallback font during printing.
const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+SC:wght@400;700&display=block'

/** Escape text for safe insertion into HTML (content and attributes). */
export function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Escape and keep line breaks (gift messages) */
export function escMultiline(value: string): string {
  return esc(value).replace(/\n/g, '<br>')
}

// ── Reusable blocks ─────────────────────────────

export interface TitledPoint {
  title: string
  detail: string
}

export function sectionHeader(index: number, eyebrow: string, title: string): string {
  const number = String(index).padStart(2, '0')
  return `
    <header class="section-header">
      <div class="eyebrow">${number} · ${esc(eyebrow)}</div>
      <h2>${esc(title)}</h2>
    </header>`
}

export function summaryBox(text: string, label = 'In short'): string {
  return `
    <aside class="summary">
      <div class="summary-label">${esc(label)}</div>
      <p>${esc(text)}</p>
    </aside>`
}

export function bulletList(items: string[], variant: 'dot' | 'check' | 'warn' = 'dot'): string {
  return `<ul class="bullets bullets-${variant}">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`
}

export function pointCards(points: TitledPoint[], variant: 'default' | 'warn' = 'default'): string {
  return `
    <div class="cards cards-${variant}">
      ${points.map((p) => `<div class="card"><h4>${esc(p.title)}</h4><p>${esc(p.detail)}</p></div>`).join('')}
    </div>`
}

export function subheading(text: string): string {
  return `<h3>${esc(text)}</h3>`
}

export function paragraph(text: string): string {
  return `<p class="body">${esc(text)}</p>`
}

// ── Cover ───────────────────────────────────────

export function renderCover(ctx: ReadingContext, productLabel: string): string {
  const person = ctx.people[0]!
  const { sign } = person
  const { input } = ctx

  const gift = input.isGift
    ? `
      <div class="cover-gift">
        <div class="cover-gift-label">A gift for ${esc(input.recipientName ?? person.name)}</div>
        ${input.giftMessage ? `<p>${escMultiline(input.giftMessage)}</p>` : ''}
      </div>`
    : ''

  return `
    <section class="cover">
      <div class="cover-glow"></div>
      <div class="cover-inner">
        <div class="cover-brand">Wu Xing Zodiac · ${esc(productLabel)}</div>
        <div class="cover-hanzi zh">${esc(sign.chineseName)}</div>
        <div class="cover-for">A reading for</div>
        <h1 class="cover-name">${esc(person.name)}</h1>
        <div class="cover-sign">${esc(sign.name)}</div>
        <div class="cover-archetype">${esc(sign.archetype)}</div>
        <div class="cover-meta">Born ${esc(person.birthDateLabel)} · Zodiac year ${sign.lunarYear}</div>
        ${gift}
        <div class="cover-footer">Prepared ${esc(ctx.generatedOnLabel)} · wuxingzodiac.me</div>
      </div>
    </section>`
}

// ── Document shell ──────────────────────────────

export interface DocumentOptions {
  title: string
  element: ZodiacElement
  /** Running header on interior pages, e.g. "Personal Reading · Marc" */
  runningHeader: string
  body: string
}

/**
 * Quote a value for the @page `content:` property. Hex-escapes backslash,
 * quotes, angle brackets and line breaks so nothing can end the CSS string
 * or the <style> element (names are validated too — this is defense in depth).
 */
function cssString(value: string): string {
  return `"${value.replace(/[\\"'<>\n\r]/g, (c) => `\\${c.charCodeAt(0).toString(16)} `)}"`
}

export function renderDocument(options: DocumentOptions): string {
  const p = ELEMENT_PALETTES[options.element]

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(options.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${FONTS_URL}">
<style>
  :root {
    --el-50: ${p[50]}; --el-100: ${p[100]}; --el-200: ${p[200]}; --el-500: ${p[500]};
    --el-600: ${p[600]}; --el-700: ${p[700]}; --el-900: ${p[900]}; --el-950: ${p[950]};
    --el-accent: ${p.accent}; --el-glow: ${p.glowRgb};
    --ink: #171717; --ink-soft: #404040; --ink-muted: #737373; --line: #e5e5e5;
    --font-body: 'Noto Sans', 'Noto Sans SC', sans-serif;
    --font-display: 'Cinzel', 'Noto Sans SC', serif;
  }

  @page {
    size: A4;
    margin: 16mm 16mm 15mm;
    @top-right { content: ${cssString(options.runningHeader)}; font: 8pt 'Noto Sans', sans-serif; color: #a3a3a3; }
    @bottom-center { content: counter(page); font: 8pt 'Noto Sans', sans-serif; color: #a3a3a3; }
  }
  @page :first {
    margin: 0;
    @top-right { content: none; }
    @bottom-center { content: none; }
  }

  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; font-family: var(--font-body); font-size: 10pt; line-height: 1.5; color: var(--ink); }
  .zh { font-family: 'Noto Sans SC', sans-serif; }

  /* ── Cover (full-bleed, dark, like the sign page hero) ── */
  .cover {
    position: relative; width: 210mm; height: 297mm; overflow: hidden;
    background: #0a0a0a; color: #f5f5f5; break-after: page;
  }
  .cover-glow {
    position: absolute; inset: 0;
    background:
      radial-gradient(circle at 50% 30%, rgba(var(--el-glow), 0.45), transparent 55%),
      radial-gradient(circle at 80% 90%, rgba(var(--el-glow), 0.18), transparent 45%),
      linear-gradient(180deg, var(--el-950) 0%, #0a0a0a 70%);
  }
  .cover-inner {
    position: relative; height: 100%; padding: 28mm 22mm 20mm;
    display: flex; flex-direction: column; align-items: center; text-align: center;
  }
  .cover-brand { font-size: 8.5pt; letter-spacing: 0.28em; text-transform: uppercase; color: #a3a3a3; }
  .cover-hanzi { margin-top: 22mm; font-size: 96pt; font-weight: 700; line-height: 1; color: var(--el-accent); letter-spacing: 0.08em; }
  .cover-for { margin-top: 16mm; font-size: 9pt; letter-spacing: 0.24em; text-transform: uppercase; color: #a3a3a3; }
  .cover-name { margin: 4mm 0 0; font-family: var(--font-display); font-size: 38pt; font-weight: 700; line-height: 1.1; color: #fff; }
  .cover-sign { margin-top: 6mm; font-family: var(--font-display); font-size: 17pt; font-weight: 600; color: var(--el-accent); }
  .cover-archetype { margin-top: 2mm; font-size: 12pt; font-style: italic; color: #d4d4d4; }
  .cover-meta { margin-top: 5mm; font-size: 9.5pt; color: #a3a3a3; }
  .cover-gift {
    margin-top: 12mm; max-width: 130mm; padding: 6mm 8mm; border-radius: 4mm;
    background: rgba(23, 23, 23, 0.7); border: 1px solid rgba(var(--el-glow), 0.35);
  }
  .cover-gift-label { font-size: 8.5pt; letter-spacing: 0.2em; text-transform: uppercase; color: var(--el-accent); }
  .cover-gift p { margin: 3mm 0 0; font-size: 11pt; font-style: italic; color: #e5e5e5; }
  .cover-footer { margin-top: auto; font-size: 8.5pt; color: #737373; letter-spacing: 0.06em; }

  /* ── Interior ── */
  /* Each section starts a new page (merges with the cover's break, no blank page) */
  .section { break-before: page; }
  .section-header { margin-bottom: 5mm; padding-bottom: 2.5mm; border-bottom: 2px solid var(--el-500); }
  .eyebrow { font-size: 8pt; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--el-600); }
  h2 { margin: 1.5mm 0 0; font-family: var(--font-display); font-size: 22pt; font-weight: 700; color: var(--ink); line-height: 1.2; }
  h3 { margin: 5mm 0 2mm; font-size: 11pt; font-weight: 700; color: var(--el-700); break-after: avoid; }
  p.body { margin: 0 0 3mm; color: var(--ink-soft); }
  .basis { margin: 0 0 4mm; font-size: 8.5pt; line-height: 1.45; color: var(--ink-muted); }

  .summary {
    margin: 0 0 4mm; padding: 3.5mm 5mm; border-radius: 3mm; break-inside: avoid;
    background: var(--el-50); border-left: 4px solid var(--el-500);
  }
  .summary-label { font-size: 7.5pt; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--el-700); }
  .summary p { margin: 1.5mm 0 0; font-size: 11pt; font-weight: 500; line-height: 1.45; color: var(--ink); }

  .bullets { margin: 0 0 3mm; padding: 0; list-style: none; }
  .bullets li { position: relative; margin: 0 0 1.5mm; padding-left: 6mm; color: var(--ink-soft); break-inside: avoid; }
  .bullets li::before { position: absolute; left: 0; top: 0; font-weight: 700; color: var(--el-600); }
  .bullets-dot li::before { content: '●'; font-size: 7pt; top: 1.2mm; }
  .bullets-check li::before { content: '✓'; }
  .bullets-warn li::before { content: '!'; color: #b45309; left: 1.2mm; }

  .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5mm; margin-bottom: 3mm; }
  .card {
    padding: 3.5mm 4mm; border-radius: 3mm; break-inside: avoid;
    background: #fff; border: 1px solid var(--line); border-top: 3px solid var(--el-500);
  }
  .cards-warn .card { border-top-color: #a3a3a3; background: #fafafa; }
  .card h4 { margin: 0 0 1.5mm; font-size: 10.5pt; font-weight: 700; color: var(--ink); }
  .card p { margin: 0; font-size: 9.5pt; line-height: 1.5; color: var(--ink-soft); }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }
  .two-col h3 { margin-top: 2mm; }

  .facts { display: grid; gap: 2mm; margin: 0 0 4mm; }
  .fact { padding: 3mm 4mm; border-radius: 2.5mm; border: 1px solid var(--el-200); background: #fff; break-inside: avoid; }
  .fact-label { font-size: 7.5pt; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--el-700); }
  .fact p { margin: 1mm 0 0; font-size: 9.5pt; color: var(--ink-soft); }

  .bars { margin: 0 0 4mm; padding: 3.5mm 5mm; border: 1px solid var(--line); border-radius: 3mm; break-inside: avoid; }
  .bar-row { display: grid; grid-template-columns: 24mm 1fr 14mm; align-items: center; gap: 3mm; margin: 1.5mm 0; }
  .bar-label { font-size: 9.5pt; font-weight: 600; color: var(--ink); }
  .bar-label .zh { margin-right: 1.5mm; font-weight: 700; }
  .bar-track { height: 3mm; border-radius: 2mm; background: #f5f5f5; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 2mm; }
  .bar-value { font-size: 9pt; font-weight: 600; text-align: right; color: var(--ink-soft); }
  .bar-scale { font-size: 7pt; font-weight: 400; color: var(--ink-muted); }
  .bars-title { margin-bottom: 1.5mm; font-size: 7.5pt; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--el-700); }
  .bars-caption { margin: 2mm 0 0; font-size: 8pt; color: var(--ink-muted); }

  .matches { margin: 0 0 3mm; padding: 0; list-style: none; }
  .matches li { margin: 0 0 1.5mm; padding: 2mm 4mm; border-radius: 2.5mm; background: var(--el-50); break-inside: avoid; }
  .matches strong { color: var(--el-700); }
  .matches span { color: var(--ink-soft); font-size: 9.5pt; }

  .theme { margin: 0 0 5mm; text-align: center; }
  .theme-label { font-size: 7.5pt; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink-muted); }
  .theme-text { margin-top: 1.5mm; font-family: var(--font-display); font-size: 18pt; font-weight: 700; color: var(--el-700); }

  .steps { margin: 0 0 4mm; padding: 0; list-style: none; counter-reset: step; }
  .steps li {
    position: relative; margin: 0 0 3.5mm; padding: 3.5mm 4mm 3.5mm 15mm; border-radius: 3mm;
    border: 1px solid var(--line); break-inside: avoid; counter-increment: step;
  }
  .steps li::before {
    content: counter(step); position: absolute; left: 4mm; top: 3.5mm; width: 7mm; height: 7mm; border-radius: 50%;
    background: var(--el-500); color: #fff; font-weight: 700; font-size: 10pt; line-height: 7mm; text-align: center;
  }
  .steps h4 { margin: 0 0 1mm; font-size: 10.5pt; color: var(--ink); }
  .steps p { margin: 0; font-size: 9.5pt; color: var(--ink-soft); }

  .closing { margin-top: 7mm; padding: 5mm 6mm; border-radius: 3mm; background: var(--el-50); font-size: 11pt; font-style: italic; color: var(--ink); break-inside: avoid; }
  .signature { margin-top: 2mm; font-family: var(--font-display); font-style: normal; font-weight: 600; color: var(--el-700); }
  .note { margin-top: 8mm; font-size: 8pt; color: var(--ink-muted); }
</style>
</head>
<body>
${options.body}
</body>
</html>`
}
