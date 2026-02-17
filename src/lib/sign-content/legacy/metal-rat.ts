// ============================================
// METAL RAT (庚子) — The Sharp-Witted Survivor
// ============================================
// Metal sharpens the Rat's already keen intellect into a
// formidable instrument of strategy, ambition, and resolve.
// Years: 1900, 1960, 2020

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-rat',
  profile: getProfileBySlug('metal-rat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Rat is the most determined and incisive expression of the Rat archetype. Where the Rat is already celebrated for its quick thinking, resourcefulness, and social adaptability, the Metal element forges these natural gifts into something harder, sharper, and more formidable. Metal Rats do not merely navigate challenges — they cut through them with surgical precision. Their minds operate like finely honed blades, identifying opportunity where others see only obstacles and executing strategies with a decisiveness that leaves competitors scrambling.

What distinguishes the Metal Rat from other Rat-element combinations is an unusual blend of charm and steel. They possess the Rat's legendary social intelligence — the ability to read a room, sense hidden agendas, and position themselves advantageously in any group dynamic — but they wield it with a purposefulness that borders on ruthless efficiency. A Metal Rat rarely wastes a social interaction. Every conversation, every alliance, every favor extended or received is filed away in a mental ledger of extraordinary complexity. This is not cynicism; it is survival instinct elevated to an art form.

Beneath the polished exterior, Metal Rats harbor an intense emotional life that they rarely reveal. The Metal element encourages emotional self-discipline, sometimes to the point of suppression. They project confidence and control even when turbulence rages beneath the surface. This stoic facade can make them appear cold or calculating to those who do not know them well, but those admitted to the Metal Rat's inner circle discover a fiercely loyal, surprisingly sentimental individual who guards their vulnerabilities with the same tenacity they bring to everything else.`,

    coreTraits: [
      'Strategic',
      'Disciplined',
      'Ambitious',
      'Perceptive',
      'Resolute',
      'Self-Reliant',
    ],

    strengths: [
      {
        trait: 'Strategic Brilliance',
        description:
          'Metal Rats possess an extraordinary capacity for long-range planning. They can hold multiple contingencies in mind simultaneously, adapting their approach as circumstances shift without ever losing sight of the ultimate objective. This makes them formidable in business, politics, and any arena where foresight and tactical thinking determine success.',
      },
      {
        trait: 'Unwavering Determination',
        description:
          'Once a Metal Rat commits to a goal, they pursue it with relentless focus. The Metal element gives them a tensile strength that the more mercurial Wood or Water Rats lack — they can endure setbacks, delays, and opposition without abandoning their course. Their persistence is quiet but absolute.',
      },
      {
        trait: 'Financial Acumen',
        description:
          'The Rat is already the zodiac\'s most natural accumulator of wealth, and Metal amplifies this talent considerably. Metal Rats have an instinctive understanding of value — they know when to invest, when to hold, and when to cut their losses. Their financial decisions are driven by logic rather than emotion, giving them a significant edge in wealth building.',
      },
      {
        trait: 'Commanding Presence',
        description:
          'Metal Rats carry themselves with an authority that commands respect. Their combination of sharp intellect, measured speech, and quiet confidence gives them a gravitas that belies their often understated demeanor. In professional settings, they are frequently the person whose opinion carries the most weight — not because they speak the loudest, but because when they speak, they are invariably correct.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Rigidity',
        description:
          'The Metal element\'s emphasis on control can make Metal Rats emotionally inflexible. They may struggle to express vulnerability, process grief, or accept help when they need it. This emotional armor protects them but also isolates them, creating a loneliness they are reluctant to acknowledge.',
      },
      {
        trait: 'Possessiveness',
        description:
          'Metal Rats can become intensely possessive of their resources, relationships, and status. The combination of the Rat\'s accumulative instinct and Metal\'s grip creates a tendency to hold on too tightly — to money, to people, to positions of power — even when letting go would serve them better.',
      },
      {
        trait: 'Excessive Self-Reliance',
        description:
          'Metal Rats pride themselves on not needing anyone, which can become a liability. Their reluctance to delegate, collaborate, or accept support means they frequently shoulder burdens alone that would be better shared. This self-imposed isolation can lead to burnout and missed opportunities for growth.',
      },
      {
        trait: 'Judgmental Tendencies',
        description:
          'The Metal Rat\'s sharp mind is equally sharp in its assessments of others. They can be privately — and sometimes publicly — dismissive of people they perceive as incompetent, lazy, or weak. This critical nature, while often accurate in its observations, can damage relationships and create an atmosphere of intimidation rather than collaboration.',
      },
    ],

    elementInfluence: `In Wu Xing theory, Metal represents discipline, precision, and the energy of autumn — the season of harvesting, refining, and letting go of what is no longer needed. When Metal merges with the Rat, it transforms the Rat's natural adaptability into something more focused and purposeful. The Rat is a Water-phase animal by nature (Water being its fixed element), and since Metal generates Water in the productive cycle, the Metal Rat benefits from an exceptionally harmonious element pairing. Metal feeds the Rat's inherent Water nature, amplifying its intuition, resourcefulness, and ability to flow around obstacles.

This productive relationship between Metal and the Rat's intrinsic Water gives Metal Rats a particular advantage: they combine Metal's clarity and decisiveness with Water's emotional intelligence and adaptability. However, this strength comes with a caveat — when the Metal aspect becomes dominant, it can freeze the Water, creating rigidity where there should be flow. The balanced Metal Rat maintains the fluidity of water within the discipline of metal; the imbalanced one becomes brittle, controlling, and emotionally frozen.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Rats are highly selective in their relationships, approaching compatibility with the same strategic mindset they bring to every other area of life. They need partners who can match their intellectual depth, respect their autonomy, and tolerate their sometimes guarded emotional nature. The Rat belongs to the First Trine alongside the Dragon and the Monkey — signs that share the Rat's ambition, cleverness, and action-oriented approach to life.

Traditional Chinese astrology identifies the Ox as the Rat's most natural partner, a pairing that combines the Rat's strategic mind with the Ox's steadfast reliability. The Horse sits opposite the Rat on the zodiac wheel, creating the classic opposition that generates both attraction and friction.`,

    bestMatches: [
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 90,
        summary:
          'A powerhouse alliance of ambition and vision. The Earth Dragon\'s commanding presence and strategic mind perfectly complement the Metal Rat\'s precision and resourcefulness. Both signs are driven, intelligent, and capable of thinking on a grand scale. The Earth element grounds the Dragon\'s occasionally grandiose tendencies, while Metal sharpens the partnership\'s collective focus. Together, they can build empires.',
      },
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 88,
        summary:
          'An exceptionally stable and productive partnership. The Water Ox\'s patient, dependable nature provides the emotional security that the Metal Rat secretly craves but rarely requests. The Ox\'s loyalty is absolute, and the Water element softens the Ox enough to accommodate the Rat\'s occasional restlessness. In return, the Metal Rat brings strategic vision and social connections that the more reserved Ox lacks.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 85,
        summary:
          'Two brilliant strategists who understand each other instinctively. The Metal Monkey matches the Metal Rat\'s intellectual sharpness move for move, creating a partnership of extraordinary mental synergy. Both signs value cleverness and resourcefulness, and neither is intimidated by the other\'s ambition. The shared Metal element creates mutual respect for discipline and achievement.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 28,
        summary:
          'A fundamental clash of temperaments. The Fire Horse\'s explosive spontaneity and need for absolute freedom directly conflict with the Metal Rat\'s preference for strategic control and careful planning. The Horse finds the Rat calculating and constrictive; the Rat finds the Horse reckless and unreliable. Fire melts Metal, adding an element of destructive tension to an already difficult zodiac opposition.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 35,
        summary:
          'Two critical, exacting personalities that struggle to give each other grace. The Fire Rooster\'s need for admiration clashes with the Metal Rat\'s reluctance to offer praise freely. Both signs can be sharp-tongued and judgmental, creating a dynamic where minor disagreements escalate into battles of ego. Fire\'s intensity overwhelms Metal\'s preference for measured interaction.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 40,
        summary:
          'The Earth Rabbit\'s gentle, harmony-seeking nature finds the Metal Rat\'s directness and ambition overwhelming. The Rabbit retreats from conflict while the Rat pushes forward; the Rabbit values peace while the Rat values results. While mutual respect is possible, the fundamental difference in pace and intensity makes sustained intimacy challenging.',
      },
    ],

    elementAffinity: `Metal Rats interact with other elements through the lens of their naturally harmonious Metal-Water internal dynamic. Water element signs resonate deeply with the Metal Rat, as Metal generates Water — creating relationships that feel effortless and nurturing. Earth element signs provide valuable stability and support (Earth generates Metal), offering the grounding influence that prevents the Metal Rat from becoming too calculating or isolated. Wood element signs can create tension, as Metal controls Wood in the destructive cycle, leading to dynamics where the Metal Rat may inadvertently dominate or stifle their partner. Fire element signs present the greatest challenge — Fire melts Metal, threatening the Metal Rat's carefully constructed defenses and sense of control.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Rats are among the most naturally gifted strategists and wealth-builders in the zodiac. They excel in environments that reward analytical thinking, long-term planning, and the ability to identify and exploit competitive advantages. Unlike the more gregarious Fire or Wood Rats, the Metal Rat is content to work behind the scenes, orchestrating outcomes from positions of quiet influence rather than seeking the spotlight.

The ideal Metal Rat career combines intellectual challenge with tangible rewards. They are drawn to fields where precision matters, where data drives decisions, and where their natural risk assessment abilities can be fully utilized. Finance, law, technology, and strategic consulting are natural fits. They also thrive in any role that requires managing complexity — the more variables, the more engaged the Metal Rat becomes.

Metal Rats make exceptional managers and executives, not because they are warm or charismatic leaders in the traditional sense, but because they are extraordinarily competent. Their teams may not always love them, but they consistently respect them — and they consistently win.`,

    idealCareers: [
      'Investment Banker',
      'Corporate Strategist',
      'Data Scientist',
      'Patent Attorney',
      'Cybersecurity Analyst',
      'Venture Capitalist',
      'Political Advisor',
      'Supply Chain Director',
    ],

    financialStyle:
      'Metal Rats are disciplined, strategic accumulators of wealth. They approach finances with the same analytical rigor they bring to every other domain, building diversified portfolios and maintaining meticulous records. They are not impulsive spenders — every significant purchase is evaluated, compared, and optimized. Their challenge lies in the opposite direction: they can become so focused on accumulation that they fail to enjoy their wealth or share it generously. The most fulfilled Metal Rats learn to balance their natural frugality with strategic generosity and the occasional indulgence.',

    tips: [
      'Leverage your strategic mind but invest in your people skills. The Metal Rat\'s career ceiling is often determined not by competence but by likability. Building genuine warmth into your professional relationships — not just transactional connections — unlocks opportunities that pure strategy cannot.',
      'Resist the urge to control every variable. Your desire for certainty can slow decision-making and frustrate team members who need autonomy. Learn to delegate with trust, accepting that others may achieve results through methods different from your own.',
      'Seek roles with clear metrics and advancement paths. Metal Rats thrive when they can measure their progress objectively. Ambiguous hierarchies and subjective evaluation systems drain your motivation — choose environments where excellence is recognized and rewarded systematically.',
      'Build a personal board of advisors. Your self-reliant nature can create blind spots. Cultivate relationships with mentors and peers who will challenge your thinking and provide perspectives you would not reach on your own.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love is perhaps the arena where the Metal Rat's internal contradictions are most starkly revealed. They crave deep, loyal, enduring partnership — the Rat's fundamental desire for security and belonging — yet they struggle to lower the defenses that the Metal element has so carefully constructed. The result is a lover who is intensely devoted once committed, but who can take an agonizingly long time to reach that commitment in the first place.

Metal Rats approach romance with the same analytical mindset they bring to their careers. They observe, assess, and evaluate potential partners with a thoroughness that can feel clinical to those on the receiving end. This is not heartlessness — it is self-protection. Metal Rats have been burned before (or have observed others being burned) and they are determined not to invest their considerable emotional resources in a partnership that will fail.

Once a Metal Rat commits, however, they are among the most loyal and protective partners in the zodiac. They express love through acts of service, strategic support, and an unwavering commitment to their partner's success and security. Grand romantic gestures are rare, but the steady, reliable presence of a devoted Metal Rat is worth far more than fireworks.`,

    loveStyle:
      'The Metal Rat loves with quiet intensity and unwavering loyalty. They are not demonstrative or effusive — their affection is expressed through consistent presence, practical support, and fierce protectiveness rather than poetic declarations. They need a partner who can read their understated expressions of love and who does not demand constant verbal or physical reassurance. In return, they offer a partnership built on absolute reliability, intellectual companionship, and a devotion that, once given, is nearly impossible to break.',

    idealPartnerTraits: [
      'Emotionally Intelligent',
      'Patient',
      'Intellectually Sharp',
      'Loyal',
      'Self-Sufficient',
    ],

    tips: [
      'Practice vulnerability deliberately. Your instinct is to protect yourself by revealing as little as possible, but true intimacy requires exposure. Start small — share one honest feeling per day — and build from there. The right partner will not weaponize your openness.',
      'Resist the urge to evaluate your partner like an investment. Not everything in a relationship can be optimized or measured. Allow space for inefficiency, spontaneity, and the beautiful messiness of genuine human connection.',
      'Express appreciation verbally. Metal Rats often assume their partner knows they are valued because the Metal Rat has not left. This is insufficient. Tell your partner what you admire about them, what they mean to you, and why you choose them — with words, not just actions.',
      'Accept that love involves risk. Your desire for certainty before commitment can keep you perpetually on the sidelines. At some point, you must leap — knowing that the vulnerability of loving fully is not weakness but the highest form of courage.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal element in Traditional Chinese Medicine governs the Lungs and the Large Intestine — organs associated with respiration, elimination, and the skin. Metal Rats are particularly susceptible to conditions affecting these systems, especially during periods of stress or emotional suppression. The Rat's natural Water affinity adds the Kidneys and Bladder to the picture, creating a health profile that centers on the body's filtering and elimination systems.

Metal Rats tend to internalize stress rather than expressing it, and this suppression manifests physically. Respiratory conditions — from chronic sinusitis to stress-induced asthma — are common. Skin issues, including eczema and stress-related breakouts, often serve as the body's external signal of internal emotional congestion. The Large Intestine connection means that digestive regularity is closely tied to emotional well-being for this sign.

The Metal Rat's greatest health asset is their discipline. Once they understand the connection between their habits and their health outcomes, they can implement and maintain wellness routines with impressive consistency. The challenge is getting them to prioritize health before a crisis forces the issue.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Skin', 'Kidneys'],

    exercises: [
      'Breathwork and pranayama',
      'Swimming',
      'Strength training',
      'Tai chi',
    ],

    dietTips: [
      'Emphasize foods that support lung health and Metal element balance: pears, white radish, garlic, ginger, and fermented foods. These strengthen the respiratory and digestive systems that are most vulnerable in this sign.',
      'Maintain consistent meal timing. Metal Rats tend to skip meals when absorbed in work, then compensate with large, late-night meals. This pattern disrupts the Large Intestine\'s natural rhythm. Regular, moderate meals support both digestion and energy stability.',
      'Increase water intake deliberately. The Metal-Water connection in this sign means hydration is critical. Warm water and herbal teas are particularly beneficial, supporting both the Lung and Kidney systems simultaneously.',
      'Reduce dairy and processed foods during high-stress periods. Metal Rats are prone to mucus accumulation and phlegm when stressed, and these foods exacerbate the pattern. Replace with clear broths, steamed vegetables, and lean proteins.',
    ],

    mentalHealth:
      'The Metal Rat\'s primary mental health challenge is the tendency to intellectualize emotions rather than feeling them. They process grief, disappointment, and fear through analysis rather than expression, which can lead to chronic low-grade anxiety, insomnia, and a pervasive sense of emotional flatness. Therapy — particularly cognitive-behavioral approaches that respect the Metal Rat\'s analytical nature while gently expanding emotional awareness — is highly effective. Breathwork is especially powerful for this sign, as the Lung connection means that deepening the breath literally opens the Metal Rat\'s emotional channels. Regular time in nature, particularly near water, provides a grounding, calming influence that counterbalances the intensity of their inner mental world.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 6],
    colors: ['White', 'Silver', 'Blue', 'Gold'],
    direction: 'West',
    gemstones: ['White Quartz', 'Sapphire', 'Pearl'],
    flowers: ['Lily', 'White Orchid', 'Chrysanthemum'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL RATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Diego Maradona',
        profession: 'Football Legend',
        birthYear: 1960,
        description:
          'Diego Maradona\'s extraordinary strategic intelligence on the pitch — his ability to read the game several moves ahead and exploit openings no one else could see — reflects the Metal Rat\'s sharp-witted, opportunistic nature. His relentless determination to succeed despite humble origins embodies the sign\'s survival instinct and iron will.',
      },
      {
        name: 'Sean Penn',
        profession: 'Actor/Director',
        birthYear: 1960,
        description:
          'Sean Penn\'s career is defined by the Metal Rat\'s intensity, precision, and refusal to compromise. His method acting demands the same thoroughness the Metal Rat brings to every endeavor, while his political activism reveals the sign\'s deep conviction that individual action can reshape systems.',
      },
      {
        name: 'Jean-Claude Van Damme',
        profession: 'Actor/Martial Artist',
        birthYear: 1960,
        description:
          'Van Damme\'s disciplined rise from Brussels to Hollywood action stardom exemplifies the Metal Rat\'s combination of physical determination and strategic ambition. His calculated career moves and relentless self-improvement reflect the sign\'s belief that success is engineered, not accidental.',
      },
      {
        name: 'Bono',
        profession: 'Musician/Activist',
        birthYear: 1960,
        description:
          'As the frontman of U2 and a tireless global activist, Bono demonstrates the Metal Rat\'s rare ability to combine strategic thinking with passionate advocacy. His capacity to navigate the worlds of music, politics, and philanthropy simultaneously reflects the sign\'s multifaceted intelligence and social acumen.',
      },
      {
        name: 'Antonio Banderas',
        profession: 'Actor/Director',
        birthYear: 1960,
        description:
          'Antonio Banderas built an international career by combining the Metal Rat\'s strategic adaptability with undeniable charisma. His successful transition from Spanish cinema to Hollywood blockbusters demonstrates the sign\'s ability to reinvent itself in new environments without losing its essential identity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rat holds the first position in the Chinese zodiac, a placement earned — according to legend — through cunning rather than speed. In the Great Race to determine the zodiac order, the Rat hitched a ride on the Ox's back, then leaped ahead at the finish line to claim first place. This myth perfectly encapsulates the Rat's essence: resourceful, strategic, and willing to use every advantage available.

When the Metal element combines with the Rat, traditional Chinese astrology describes a sign of exceptional sharpness and determination. The Metal Rat years — those ending in 0 (yang Metal) — are considered years of decisive action and structural change. The most recent Metal Rat year, 2020, became one of the most transformative years in modern history, a coincidence that traditional astrologers note aligns with Metal's association with cutting, separation, and radical restructuring.

In Chinese cosmology, Metal Rat years are associated with the energy of new beginnings forged through discipline. The Rat begins the twelve-year cycle, and Metal provides the cutting edge needed to sever ties with the previous cycle's accumulated patterns. This gives the Metal Rat a mythological role as the initiator of change — the sharp point at which one era ends and another begins.`,

    symbolism: `The Metal Rat symbolizes the power of intelligence refined by discipline. In traditional Five Element symbolism, Metal represents the autumn of the cycle — the time of harvesting, refining, and distilling experience into wisdom. Combined with the Rat's position as the initiator of the zodiac cycle, the Metal Rat embodies the paradox of beginning and ending simultaneously: the sharp mind that cuts through the old to initiate the new.

Metal's association with precious minerals — gold, silver, platinum — connects the Metal Rat to themes of value, worth, and the transformation of raw material into something refined and enduring. The Metal Rat is the alchemist of the zodiac: taking the base materials of opportunity, information, and social connection and transmuting them into wealth, influence, and lasting achievement.

The Rat's association with midnight (the zi hour, 11pm-1am) adds a layer of symbolism connected to hidden power. The Metal Rat operates in the spaces between what is visible — in the margins, the overlooked corners, the moments when others are sleeping. Their power is not loud or obvious; it is precise, strategic, and devastatingly effective.`,

    modernInterpretation: `In contemporary interpretation, the Metal Rat archetype resonates powerfully with the age of information and strategic disruption. The Metal Rat's combination of analytical brilliance, social intelligence, and relentless determination maps directly onto the skill set most valued in modern technology, finance, and entrepreneurship.

The 2020 Metal Rat year — which brought the COVID-19 pandemic, global economic disruption, and accelerated digital transformation — demonstrated the Metal Rat's association with radical change and survival under extreme pressure. Those born in that year inherit a legacy of resilience and adaptability, qualities that will serve them as they come of age in a world that their birth year helped reshape.

Modern astrologers emphasize the Metal Rat's potential as a force for systematic improvement. Where traditional interpretations sometimes characterized this sign as merely cunning or self-interested, contemporary perspectives recognize the Metal Rat's capacity for building systems that benefit many — provided they channel their strategic gifts toward purposes larger than personal accumulation. The Metal Rat at their best is not just a survivor but an architect of structures that help others survive and thrive.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
