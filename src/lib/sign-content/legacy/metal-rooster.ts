// ============================================
// METAL ROOSTER (庚酉) — The Unyielding Critic
// ============================================
// Metal doubles the Rooster's already exacting nature,
// creating the zodiac's most precise and uncompromising mind.
// Years: 1921, 1981

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-rooster',
  profile: getProfileBySlug('metal-rooster')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Rooster is the most exacting, disciplined, and analytically rigorous expression of the Rooster archetype. Already defined by its sharp eye for detail, its commitment to honesty, and its tireless work ethic, the Rooster becomes something formidable when forged in Metal. This is the zodiac's supreme perfectionist — an individual who holds the world to standards of excellence that most people would consider impossibly high, and who holds themselves to standards even higher still.

What makes the Metal Rooster remarkable is the absolute consistency of their principles. They do not have different standards for different people or different situations. They apply the same rigorous, unflinching analysis to their own work, their colleagues' performance, their partner's behavior, and the quality of every product and service they encounter. This consistency, while exhausting for those around them, is grounded in genuine integrity — the Metal Rooster is not critical for the sake of cruelty but because they genuinely believe that excellence is achievable and that accepting anything less is a form of disrespect to human potential.

Beneath the polished, exacting exterior lies a personality of considerable depth and unexpected vulnerability. Metal Roosters care deeply about being respected, valued, and admired for their contributions. Their critical nature is, in part, a projection of the same demanding lens they turn inward — and the fear that drives their perfectionism is ultimately the fear that they themselves will be found wanting.`,

    coreTraits: [
      'Perfectionist',
      'Honest',
      'Disciplined',
      'Critical',
      'Industrious',
      'Precise',
    ],

    strengths: [
      {
        trait: 'Uncompromising Standards',
        description:
          'The Metal Rooster\'s commitment to excellence is absolute. In any environment where quality matters — manufacturing, surgery, software engineering, financial auditing — their refusal to accept "good enough" drives outcomes to levels that others did not believe possible. They are the quality assurance function made human, and their presence elevates the performance of everyone around them.',
      },
      {
        trait: 'Radical Honesty',
        description:
          'Metal Roosters tell the truth. Not a comfortable, filtered version of the truth, but the full, unvarnished assessment that most people need to hear but no one else is willing to deliver. This honesty, while sometimes painful, makes them invaluable advisors, auditors, and friends — the person you trust to tell you what everyone else is too polite to say.',
      },
      {
        trait: 'Organizational Excellence',
        description:
          'The Metal Rooster\'s combination of analytical precision and tireless work ethic makes them exceptional organizers. They create systems of remarkable efficiency, maintain records of impeccable accuracy, and manage projects with a thoroughness that leaves no detail unaddressed. In roles that require operational excellence, the Metal Rooster is without peer.',
      },
      {
        trait: 'Moral Courage',
        description:
          'Metal Roosters have the courage to stand by their assessments regardless of social pressure. When they identify a problem, a risk, or a failure, they will report it accurately even when the message is unwelcome. This moral courage makes them essential in organizations where groupthink and political correctness might otherwise obscure critical truths.',
      },
    ],

    challenges: [
      {
        trait: 'Excessive Criticism',
        description:
          'The Metal Rooster\'s critical eye, while valuable in professional contexts, can become toxic in personal relationships. Their tendency to identify and comment on every flaw, imperfection, and suboptimal choice creates an atmosphere of constant evaluation that exhausts and demoralizes those around them. Learning when to observe without commenting is one of their most important growth edges.',
      },
      {
        trait: 'Rigidity',
        description:
          'Metal Roosters can become so attached to their methods, standards, and procedures that they lose the ability to adapt. When circumstances change, they may cling to approaches that are no longer effective rather than developing new ones, viewing adaptation as compromise rather than intelligence.',
      },
      {
        trait: 'Need for Recognition',
        description:
          'Beneath their self-assured exterior, Metal Roosters harbor a deep need to be acknowledged and appreciated. When their contributions go unrecognized — or worse, when others take credit for their work — they can become bitter, resentful, and passive-aggressive in ways that damage their professional relationships.',
      },
      {
        trait: 'Social Friction',
        description:
          'The Metal Rooster\'s blunt communication style and exacting standards create friction in virtually every social context. They may struggle to maintain friendships, alienate colleagues with unsolicited feedback, and create tension at social gatherings where their critical assessments are neither wanted nor appreciated.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rooster is a Metal-phase animal by intrinsic nature, making the Metal Rooster a double-Metal sign of extraordinary intensity. Like the Metal Monkey, this double-Metal combination represents the purest expression of Metal's qualities — but where the Monkey expresses Metal through cleverness and adaptability, the Rooster expresses it through precision, judgment, and uncompromising standards.

This double-Metal constitution gives the Metal Rooster an internal coherence that is both their greatest strength and their primary limitation. There is no internal tension between competing elements — everything within the Metal Rooster aligns toward the same goal: perfection. This alignment produces extraordinary focus and consistency, but it also means there is no internal counterbalance to Metal's harsher qualities. Without the softening influence of Water, the warmth of Fire, or the flexibility of Wood, the Metal Rooster can become brittle, cold, and alienating.

The Metal Rooster's path to balance lies in deliberately cultivating relationships and experiences that introduce other elemental qualities into their life. Partners, friends, and activities that provide warmth, spontaneity, and emotional expression are not luxuries for this sign but necessities — essential counterweights to an otherwise all-Metal existence.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Roosters need partners who appreciate honesty, respect high standards, and can provide the emotional warmth that their Metal-heavy nature lacks without being deterred by their critical exterior. The right partner sees through the Metal Rooster's demanding facade to the genuine desire for excellence — and the vulnerability — that drives it.

The Rooster belongs to the Second Trine alongside the Ox and the Snake — signs that share the Rooster's appreciation for diligence, depth, and strategic thinking. These natural allies understand the Metal Rooster's exacting nature without being overwhelmed by it. The Rabbit sits opposite the Rooster on the zodiac wheel, creating tension between the Rooster's blunt directness and the Rabbit's diplomatic sensitivity.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 92,
        summary:
          'The Water Ox\'s patient, dependable nature provides the emotional steadiness that the Metal Rooster needs. The Ox appreciates the Rooster\'s work ethic and shares their commitment to thoroughness, while the Water element softens the interaction enough to prevent the sharpness that two rigid personalities might otherwise create. Their shared respect for honest, sustained effort builds a partnership of extraordinary reliability.',
      },
      {
        slug: 'earth-snake',
        name: 'Earth Snake',
        score: 88,
        summary:
          'The Earth Snake\'s quiet depth and grounded wisdom complement the Metal Rooster\'s precision perfectly. The Snake\'s intuitive intelligence provides a counterpoint to the Rooster\'s analytical approach, creating a partnership where different forms of intelligence enhance each other. The Earth element generates Metal, strengthening the bond and supporting the Rooster\'s natural qualities.',
      },
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 84,
        summary:
          'The Metal Dragon\'s commanding vision provides the grand purpose that the Metal Rooster\'s precision can serve. The Rooster excels at implementing the Dragon\'s ambitious plans with flawless execution, while the Dragon provides the scope and authority that the Rooster respects. The shared Metal element creates mutual appreciation for discipline and excellence.',
      },
    ],

    challengingMatches: [
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 28,
        summary:
          'The zodiac opposition between Rooster and Rabbit is amplified by element tension. The Wood Rabbit\'s gentle, diplomatic nature is shredded by the Metal Rooster\'s blunt criticism — Metal cuts Wood in the destructive cycle, making this a particularly painful dynamic. The Rabbit withdraws from the Rooster\'s directness; the Rooster dismisses the Rabbit\'s sensitivity as weakness.',
      },
      {
        slug: 'fire-dog',
        name: 'Fire Dog',
        score: 35,
        summary:
          'Two principled, opinionated signs whose different approaches to morality create constant friction. The Fire Dog\'s idealistic loyalty clashes with the Metal Rooster\'s pragmatic perfectionism. The Dog judges by intention; the Rooster judges by results. Fire melts Metal, adding destructive element tension to an already difficult personality match.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 40,
        summary:
          'The Fire Horse\'s spontaneous independence collides with the Metal Rooster\'s demand for order and precision. The Horse finds the Rooster controlling and critical; the Rooster finds the Horse undisciplined and unreliable. Fire melts Metal, creating a dynamic where the Horse\'s intensity threatens the Rooster\'s carefully maintained structure.',
      },
    ],

    elementAffinity: `The Metal Rooster's double-Metal constitution creates an acute need for partners who provide elements their own nature lacks. Water element signs are the most naturally beneficial, as Metal generates Water — creating a flow from the Rooster's precision into emotional depth and adaptability that softens their sharper edges. Earth element signs provide grounding support and generate Metal, reinforcing the Rooster's strengths while adding warmth and stability. Fire element signs present a challenging but potentially transformative dynamic — Fire melts Metal, which can feel threatening but also provides the warmth the Metal Rooster desperately needs. Wood element signs often struggle under the Metal Rooster's critical influence, as Metal cuts Wood. Other Metal signs create mutual respect for standards but risk emotional coldness and competitive criticism.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Roosters are the zodiac's supreme quality controllers, auditors, and standards enforcers. They excel in any role that requires meticulous attention to detail, rigorous analysis, and the courage to identify problems that others prefer to ignore. Their combination of analytical precision, tireless work ethic, and uncompromising honesty makes them indispensable in fields where errors have significant consequences.

The ideal Metal Rooster career places them in roles where their exacting standards are valued rather than resented. They thrive in quality assurance, financial auditing, surgical specialties, laboratory research, and any field where precision is not merely preferred but required. They also excel as editors, inspectors, and compliance officers — roles where their natural inclination to find and fix problems is the job description itself.

Metal Roosters struggle in creative environments where experimentation is valued over precision, in collaborative cultures where consensus is prioritized over accuracy, and in any role where expressing criticism is viewed as negativity rather than quality assurance.`,

    idealCareers: [
      'Forensic Accountant',
      'Quality Assurance Director',
      'Surgical Specialist',
      'Laboratory Researcher',
      'Technical Editor',
      'Compliance Officer',
      'Precision Engineer',
      'Food Safety Inspector',
    ],

    financialStyle:
      'Metal Roosters are meticulous, conservative financial managers who approach money with the same precision they bring to everything else. They keep detailed records, monitor expenses closely, and build savings with disciplined consistency. They are natural budgeters, instinctively tracking income against expenditure and identifying inefficiencies in their financial life. Their challenge is occasional pettiness around small amounts — their attention to financial detail can become miserliness that strains relationships. The most financially healthy Metal Roosters maintain their discipline while developing the generosity to spend freely on quality experiences and meaningful gifts.',

    tips: [
      'Learn to deliver feedback constructively. Your observations are usually accurate, but their impact depends on delivery. Frame criticism as investment in improvement rather than judgment of failure, and balance every critique with genuine recognition of what is working well.',
      'Accept that perfection has diminishing returns. In many situations, ninety percent quality delivered on time is more valuable than one hundred percent quality delivered late. Develop the judgment to distinguish between situations that require your absolute best and those that require your effective best.',
      'Build alliances with creative, innovative colleagues. Your precision is most valuable when applied to someone else\'s bold vision. Seek out the dreamers, risk-takers, and visionaries whose ideas need your analytical discipline to become reality.',
      'Take credit for your contributions. Metal Roosters often do extraordinary work behind the scenes that goes unrecognized. Learn to communicate your achievements in ways that feel authentic rather than boastful — the world needs to know what you do, not just benefit from it.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love is the arena where the Metal Rooster's strengths and vulnerabilities collide most dramatically. They bring to relationships the same exacting standards they apply to everything else — which means their partner receives the full force of the Metal Rooster's critical attention. This can be deeply uncomfortable for someone on the receiving end, but it is also, paradoxically, a profound expression of care. The Metal Rooster only invests their analytical energy in things they value, and nothing is valued more highly than a chosen partner.

The Metal Rooster in love is surprisingly devoted, surprisingly generous, and surprisingly vulnerable. Behind the critical facade is a person who wants desperately to be loved, appreciated, and admired — and whose perfectionism is partly driven by the belief that they must be flawless to deserve affection. This hidden insecurity makes the Metal Rooster both more sympathetic and more complicated than they initially appear.

The key to loving a Metal Rooster is understanding that their criticism comes from love, their standards come from hope, and their need for recognition comes from a vulnerability they work very hard to conceal.`,

    loveStyle:
      'The Metal Rooster expresses love through attentive care, practical support, and the relentless pursuit of making everything in their partner\'s life better. Their love is demonstrated through actions of meticulous devotion: maintaining the home to impeccable standards, providing honest counsel, and investing considerable effort in ensuring their partner\'s well-being. They need a partner who appreciates their devotion, tolerates their feedback, and provides the warmth and verbal affirmation they secretly crave.',

    idealPartnerTraits: [
      'Patient',
      'Verbally Affectionate',
      'Appreciative',
      'Thick-Skinned',
      'Emotionally Stable',
    ],

    tips: [
      'Practice appreciation before criticism. For every observation about what could be improved, offer two genuine expressions of what you love about your partner. This is not dishonesty — it is completing the picture that your critical eye tends to crop.',
      'Accept your partner as they are, not as your project. Your instinct to improve everything you care about is well-intentioned but can make your partner feel like a perpetual work-in-progress rather than a beloved person. Choose acceptance over optimization in your relationship.',
      'Express your need for recognition directly. Rather than waiting for your partner to notice your contributions and becoming resentful when they do not, tell them directly what you need: "I worked hard on this and I would appreciate your acknowledgment." Directness is far healthier than the passive-aggressive withdrawal that unmet needs create.',
      'Create romance through your strengths. A perfectly planned dinner, a meticulously organized trip, or a thoughtfully chosen gift plays to your natural abilities. Channel your precision into romantic gestures that delight rather than correct.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Rooster's double-Metal constitution creates a health profile heavily centered on the Metal element's associated organ systems: the Lungs, Large Intestine, and skin. Without the moderating influence of other elements, these systems bear the full weight of the Metal Rooster's intense, high-output lifestyle.

The Metal Rooster's health vulnerabilities are closely tied to their emotional patterns. The chronic tension of maintaining exacting standards, combined with the suppressed frustration of working in a world that rarely meets those standards, creates a pattern of internal constriction that manifests in the body. Respiratory issues — from chronic cough to asthma to frequent upper respiratory infections — are common, as are skin conditions that worsen during periods of stress or suppressed emotion.

The Metal Rooster's approach to health is characteristically precise. Once they decide to address a health concern, they research thoroughly, follow protocols exactly, and monitor outcomes with the same rigor they apply to professional projects. The challenge is getting them to the point of action — they tend to dismiss symptoms as minor until they become impossible to ignore.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Skin', 'Sinuses'],

    exercises: [
      'Precision sports like archery or golf',
      'Structured gym routines',
      'Walking in fresh air',
      'Breathwork practices',
    ],

    dietTips: [
      'Prioritize foods that support lung health and Metal element balance: pears, daikon radish, garlic, onions, almonds, and white mushrooms. The double-Metal constitution makes respiratory health the Metal Rooster\'s primary dietary concern.',
      'Include adequate fiber and fermented foods to support Large Intestine function. The Metal Rooster\'s tendency to internalize stress directly impacts digestive regularity. Sauerkraut, kimchi, miso, and fiber-rich whole grains maintain the elimination pathway that Metal depends on.',
      'Moderate spicy foods and alcohol. While the Metal Rooster may crave both as stress relief, excessive consumption amplifies the drying, heating tendency that double-Metal creates. Choose warming without inflaming: ginger tea over chili, a glass of red wine rather than spirits.',
      'Eat meals at consistent times with mindful attention. The Metal Rooster\'s tendency to eat while working or reviewing information disrupts the calm digestive state their sensitive system requires. Treat meals as a non-negotiable break from productivity.',
    ],

    mentalHealth:
      'The Metal Rooster\'s mental health challenge centers on the exhausting weight of perfectionism. The constant scanning for flaws — in themselves, in others, in every situation — creates a state of perpetual dissatisfaction that can deepen into depression when the gap between their standards and reality becomes unbridgeable. Cognitive-behavioral therapy is particularly effective for this sign, as it provides the structured, analytical framework the Rooster respects while directly addressing the distorted thinking patterns that fuel perfectionism. The key therapeutic insight for the Metal Rooster is distinguishing between excellence (achievable, healthy, satisfying) and perfection (impossible, exhausting, alienating). Gratitude practices are also powerful medicine — deliberately training the attention to notice what is good counterbalances the habitual focus on what could be better. Physical exercise that involves rhythmic, repetitive movement — walking, swimming, cycling — provides a meditative quality that quiets the critical mind without requiring the forced stillness that the Metal Rooster finds intolerable.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [5, 7, 8],
    colors: ['White', 'Gold', 'Silver', 'Brown'],
    direction: 'West',
    gemstones: ['Amber', 'White Topaz', 'Citrine'],
    flowers: ['Gladiolus', 'Impatiens', 'White Cockscomb'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL ROOSTERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Beyoncé',
        profession: 'Singer/Performer/Entrepreneur',
        birthYear: 1981,
        description:
          'Beyoncé\'s legendary perfectionism — her meticulous attention to every detail of performance, production, and presentation — embodies the Metal Rooster\'s uncompromising commitment to excellence. Her demanding rehearsal standards, flawless live performances, and precise brand management reflect the sign\'s belief that nothing short of the best is acceptable.',
      },
      {
        name: 'Roger Federer',
        profession: 'Tennis Champion',
        birthYear: 1981,
        description:
          'Roger Federer\'s graceful precision on the tennis court — widely considered the most technically perfect game in the sport\'s history — is the Metal Rooster archetype expressed through athletics. His disciplined approach to training, his impeccable sportsmanship, and his meticulous attention to every aspect of his game reflect the sign\'s pursuit of flawless execution.',
      },
      {
        name: 'Natalie Portman',
        profession: 'Actress/Director',
        birthYear: 1981,
        description:
          'Natalie Portman\'s combination of intellectual rigor and artistic precision — a Harvard education alongside an Academy Award-winning career — exemplifies the Metal Rooster\'s demand for excellence across multiple domains. Her thorough preparation for roles, including learning new languages and physical skills, reflects the sign\'s refusal to deliver anything less than mastery.',
      },
      {
        name: 'Serena Williams',
        profession: 'Tennis Champion/Entrepreneur',
        birthYear: 1981,
        description:
          'Serena Williams\'s relentless competitive drive, her precise technical execution under pressure, and her outspoken advocacy for equal treatment reflect the Metal Rooster\'s combination of demanding standards and moral courage. Her twenty-three Grand Slam singles titles are a testament to the sign\'s capacity for sustained excellence.',
      },
      {
        name: 'Ivanka Trump',
        profession: 'Businesswoman/Advisor',
        birthYear: 1981,
        description:
          'Ivanka Trump\'s meticulous personal branding, disciplined business approach, and carefully curated public image reflect the Metal Rooster\'s characteristic attention to presentation and strategic self-management. Her systematic approach to building multiple business ventures demonstrates the sign\'s combination of ambition and organizational precision.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rooster holds the tenth position in the Chinese zodiac and carries deep mythological significance as the herald of dawn — the creature whose call banishes darkness and summons the sun. In Chinese tradition, the Rooster is associated with reliability, punctuality, and the courage to announce truth even when the world prefers to sleep. The Rooster's crow was believed to have the power to dispel evil spirits, making it a guardian and purifier.

When Metal combines with the Rooster — Metal being the Rooster's intrinsic element — the mythological significance intensifies. The Metal Rooster represents the purest expression of the dawn-herald energy: absolute clarity, unflinching honesty, and the disciplined precision of a call that rings out at exactly the right moment. In traditional Chinese astrology, Metal Rooster years are associated with periods of rigorous assessment, quality reform, and the uncompromising exposure of truths that previous years had allowed to remain hidden.

The Rooster's association with the western direction and the Metal element connects it to the autumn harvest — the time when nature demands an honest accounting of what has been produced. The Metal Rooster's mythological role is the auditor of the cosmic harvest: the force that separates wheat from chaff with unfailing accuracy.`,

    symbolism: `The Metal Rooster symbolizes truth, precision, and the courage to maintain standards when the world settles for mediocrity. In Five Element symbolism, Metal at its purest represents the distilled essence — the refined product of a process that has eliminated everything unnecessary. The Metal Rooster, as the double-Metal sign alongside the Metal Monkey, embodies this essence through judgment: the ability to distinguish quality from imitation, truth from deception, and excellence from adequacy.

The Rooster's magnificent plumage carries symbolic significance. The meticulous maintenance of appearance represents not vanity but the principle that external presentation should reflect internal standards. The Metal Rooster takes this further — their presentation is a statement of values, a visible commitment to the excellence they demand from themselves and the world.

In traditional Chinese military symbolism, the Rooster represents the warrior who stands guard through the night — vigilant, alert, and ready to sound the alarm at the first sign of danger. The Metal Rooster adds to this the quality of a sentinel armed with a blade of discernment: protecting not through force but through the precision of their observation and the courage of their honesty.`,

    modernInterpretation: `In contemporary culture, the Metal Rooster archetype resonates with the growing demand for accountability, transparency, and genuine quality in every domain. In an era of misinformation, degraded standards, and surface-level performance, the Metal Rooster's insistence on truth and excellence is not merely admirable — it is essential.

The Metal Rooster's relevance extends to modern movements for quality assurance, investigative journalism, regulatory reform, and any effort that requires the courage to identify problems and the precision to document them. In technology, their archetype manifests in the quality engineers and security researchers who find and report vulnerabilities that others would prefer to ignore.

For those born in Metal Rooster years, the modern world is simultaneously aligned with and resistant to their gifts. Society needs their precision and honesty more than ever, but the cultural preference for positivity and consensus can marginalize the critical voice. The Metal Rooster's challenge is finding environments that genuinely value their unique contribution rather than merely tolerating it — and developing the diplomatic skill to deliver their essential truths in ways that invite improvement rather than provoke defensiveness.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
