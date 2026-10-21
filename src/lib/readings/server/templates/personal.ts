// ============================================
// PERSONAL READING — HTML template
// ============================================
// Cover + 7 one-page sections ≈ 8 A4 pages. Each section leads with a
// summary box and uses bullets/cards so nothing reads as a wall of text.

import { READING_TYPES } from '../../types'
import type { ReadingContext } from '../context'
import type { PersonalReadingContent } from '../prompts/personal'
import {
  ELEMENT_PALETTES,
  esc,
  renderCover,
  renderDocument,
  sectionHeader,
  summaryBox,
  bulletList,
  pointCards,
  subheading,
  paragraph,
} from './base'

function elementBars(ctx: ReadingContext): string {
  const rows = ctx.people[0]!.elementBalance.map((score) => {
    const palette = ELEMENT_PALETTES[score.element]
    return `
      <div class="bar-row">
        <span class="bar-label"><span class="zh">${palette.chinese}</span>${esc(score.label)}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${score.strength}%;background:${palette[500]}"></div></div>
        <span class="bar-value">${score.strength}<span class="bar-scale">/100</span></span>
      </div>`
  })
  // Scores are independent strengths (as on the site's pentagon chart), not a pie — say so
  return `
    <div class="bars">
      <div class="bars-title">Element strength</div>
      ${rows.join('')}
      <p class="bars-caption">How strongly each element shows up in your sign (0–100). Each score stands on its own, so they don't add up to 100.</p>
    </div>`
}

function factBox(label: string, text: string): string {
  return `<div class="fact"><div class="fact-label">${esc(label)}</div><p>${esc(text)}</p></div>`
}

export function renderPersonalHtml(ctx: ReadingContext, c: PersonalReadingContent): string {
  const person = ctx.people[0]!
  const [dominant, supporting] = person.elementBalance
  const weakest = person.elementBalance[person.elementBalance.length - 1]!
  const label = READING_TYPES.personal.label
  const bestMatches = person.content.matches.best

  const sections = [
    // 01 — Element balance (with the opening welcome)
    `<section class="section">
      ${sectionHeader(1, 'Element Balance', 'Your Five Elements')}
      ${paragraph(c.opening)}
      <p class="basis">
        How this reading works: it is based on your birth-year sign, ${esc(person.sign.name)} (zodiac year
        ${person.sign.lunarYear}), and the five elements, and written for you by name. Your birth day and month
        only decide which side of the Lunar New Year you fall on.
      </p>
      ${summaryBox(c.elementBalance.summary)}
      ${elementBars(ctx)}
      <div class="facts">
        ${factBox(`Strongest · ${dominant!.label}`, c.elementBalance.dominant)}
        ${factBox(`Supporting · ${supporting!.label}`, c.elementBalance.supporting)}
        ${factBox(`Needs more · ${weakest.label}`, c.elementBalance.needsMore)}
      </div>
      ${subheading(`Bring in more ${weakest.label}`)}
      ${bulletList(c.elementBalance.balancingTips, 'check')}
    </section>`,

    // 02 — Core personality
    `<section class="section">
      ${sectionHeader(2, 'Core Personality', `${person.sign.name}: ${person.sign.archetype}`)}
      ${summaryBox(c.corePersonality.summary)}
      ${paragraph(c.corePersonality.intro)}
      ${subheading('What defines you')}
      ${pointCards(c.corePersonality.traits)}
    </section>`,

    // 03 — Strengths & blind spots
    `<section class="section">
      ${sectionHeader(3, 'Strengths & Blind Spots', 'Your Edge and Your Shadow')}
      ${subheading('Your strengths')}
      ${pointCards(c.strengths)}
      ${subheading('Your blind spots — and the fix')}
      ${pointCards(c.blindSpots, 'warn')}
    </section>`,

    // 04 — Love
    `<section class="section">
      ${sectionHeader(4, 'Love', 'How You Love')}
      ${summaryBox(c.love.summary)}
      <div class="two-col">
        <div>${subheading('Your love style')}${bulletList(c.love.howYouLove)}</div>
        <div>${subheading('What you need')}${bulletList(c.love.whatYouNeed, 'check')}</div>
      </div>
      ${subheading('Your best matches')}
      <ul class="matches">
        ${bestMatches.map((m) => `<li><strong>${esc(m.name)}</strong> — <span>${esc(m.reason)}</span></li>`).join('')}
      </ul>
      ${paragraph(c.love.matchNote)}
      ${subheading('Watch out for')}
      ${bulletList(c.love.watchOuts, 'warn')}
    </section>`,

    // 05 — Career & money
    `<section class="section">
      ${sectionHeader(5, 'Career & Money', 'Work, Wealth and Worth')}
      ${summaryBox(c.careerMoney.summary)}
      ${subheading('Where you thrive')}
      ${bulletList(c.careerMoney.thrivesIn, 'check')}
      ${subheading('Your money style')}
      ${paragraph(c.careerMoney.moneyStyle)}
      ${subheading('Money habits that suit you')}
      ${bulletList(c.careerMoney.moneyTips)}
    </section>`,

    // 06 — 2026 Fire Horse outlook
    `<section class="section">
      ${sectionHeader(6, `${ctx.year.year} Outlook`, `Your ${ctx.year.signName} Year`)}
      <div class="theme">
        <div class="theme-label">Your theme</div>
        <div class="theme-text">${esc(c.outlook2026.theme)}</div>
      </div>
      ${summaryBox(c.outlook2026.summary)}
      <div class="facts">
        ${factBox('The year’s element', ctx.year.elementRelation)}
        ${factBox('The year’s animal', ctx.year.animalRelation)}
      </div>
      <div class="two-col">
        <div>${subheading('Opportunities')}${bulletList(c.outlook2026.opportunities, 'check')}</div>
        <div>${subheading('Cautions')}${bulletList(c.outlook2026.cautions, 'warn')}</div>
      </div>
      ${subheading(`Your focus until ${ctx.year.endsLabel}`)}
      ${paragraph(c.outlook2026.focus)}
    </section>`,

    // 07 — Action tips + closing
    `<section class="section">
      ${sectionHeader(7, 'Your Next Steps', '5 Moves for the Next 90 Days')}
      <ol class="steps">
        ${c.actionTips.map((tip) => `<li><h4>${esc(tip.title)}</h4><p>${esc(tip.detail)}</p></li>`).join('')}
      </ol>
      <div class="closing">
        ${esc(c.closing)}
        <div class="signature">— WuXing Zodiac</div>
      </div>
      <p class="note">
        This reading is based on the Chinese zodiac sign of your birth year (${person.sign.lunarYear}, adjusted for
        the lunar new year) and the Wu Xing five-element cycle. It is for entertainment and self-reflection, not
        medical, financial or legal advice. © wuxingzodiac.me
      </p>
    </section>`,
  ]

  return renderDocument({
    title: `${label} — ${person.name} (${person.sign.name})`,
    element: person.sign.element,
    runningHeader: `${label} · ${person.name}`,
    body: renderCover(ctx, label) + sections.join(''),
  })
}
