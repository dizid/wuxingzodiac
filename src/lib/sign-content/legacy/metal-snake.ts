// ============================================
// METAL SNAKE (庚巳) — The Calculating Blade
// ============================================
// Metal hones the Snake's deep intuition into laser-focused
// precision, creating a mind of extraordinary analytical power.
// Years: 1941, 2001

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-snake',
  profile: getProfileBySlug('metal-snake')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Snake is the most formidable intellect in the Chinese zodiac. Where the Snake is already celebrated for its depth of thought, psychological acuity, and capacity for strategic patience, the Metal element hones these qualities into an instrument of devastating precision. The Metal Snake's mind operates like a surgical blade — cutting through complexity, deception, and surface appearances to reveal the essential truth beneath. Nothing escapes their observation, and very little surprises them, because they have already considered every possibility before others have finished processing the situation.

What makes the Metal Snake uniquely powerful is the combination of intuitive depth with analytical rigor. Most Snakes rely primarily on intuition — a felt sense of people, situations, and hidden dynamics. The Metal Snake retains this intuitive gift but overlays it with a framework of logical analysis that transforms gut feelings into actionable intelligence. They do not merely sense that something is wrong; they can identify precisely what is wrong, why it happened, and how to exploit or correct it.

Beneath the controlled, analytical exterior, the Metal Snake possesses an emotional depth that they reveal to almost no one. They are profoundly private individuals, guarding their inner world with the same vigilance they apply to their strategic interests. Those who mistake this privacy for coldness misunderstand the Metal Snake entirely — they feel deeply, perhaps more deeply than any other sign, but they have learned that exposing their emotional life invites vulnerability, and vulnerability is something the Metal Snake guards against with every fiber of their being.`,

    coreTraits: [
      'Analytical',
      'Secretive',
      'Perceptive',
      'Patient',
      'Calculating',
      'Self-Contained',
    ],

    strengths: [
      {
        trait: 'Penetrating Intelligence',
        description:
          'The Metal Snake sees what others miss. Their combination of intuitive depth and analytical precision gives them an almost uncanny ability to read people, situations, and systems. They detect patterns, hidden agendas, and strategic opportunities that are invisible to less observant minds. In any field that rewards deep analysis — from research to investigation to strategic planning — the Metal Snake is peerless.',
      },
      {
        trait: 'Strategic Patience',
        description:
          'The Metal Snake can wait longer than any other sign for the right moment to act. Their patience is not passive — it is active, calculated, and purposeful. While they wait, they observe, gather information, and refine their strategy. When they finally move, the action is so precisely timed and perfectly executed that the outcome appears predetermined.',
      },
      {
        trait: 'Psychological Mastery',
        description:
          'Metal Snakes possess an extraordinary understanding of human motivation and behavior. They read emotional cues, body language, and social dynamics with the fluency of a native language. This psychological acuity makes them exceptional therapists, negotiators, investigators, and leaders — anyone who needs to understand what drives people beneath their surface presentation.',
      },
      {
        trait: 'Self-Disciplined Focus',
        description:
          'The Metal element\'s discipline combines with the Snake\'s natural concentration to create a capacity for sustained, deep focus that few can match. Metal Snakes can immerse themselves in complex problems for hours, days, or weeks, pursuing a line of inquiry with tireless precision until they reach a conclusion that satisfies their exacting standards.',
      },
    ],

    challenges: [
      {
        trait: 'Excessive Secrecy',
        description:
          'The Metal Snake\'s instinct for privacy can become pathological isolation. They may withhold information, emotions, and intentions not because secrecy is strategically necessary but because transparency feels inherently unsafe. This excessive guardedness prevents the formation of truly intimate relationships and can create an atmosphere of mistrust.',
      },
      {
        trait: 'Manipulative Tendencies',
        description:
          'The Metal Snake\'s deep understanding of human psychology can be used to influence others in ways that serve the Snake\'s interests at their expense. While many Metal Snakes exercise this power ethically, the temptation to manipulate — particularly when they believe they know what is best for others — is a persistent shadow that requires conscious moral vigilance.',
      },
      {
        trait: 'Emotional Withholding',
        description:
          'Metal Snakes experience profound emotions but express almost none of them. This creates an internal pressure that can manifest as anxiety, depression, or sudden emotional eruptions that shock those who have only ever seen the Snake\'s composed exterior. Their inability to share their emotional life deprives them of the support and connection they need.',
      },
      {
        trait: 'Vengeful Memory',
        description:
          'The Metal Snake never forgets a betrayal. Their combination of deep feeling and strategic patience means they can carry grudges for years, waiting for the precise moment to settle accounts. This capacity for calculated vengeance, while rarely exercised, poisons the Metal Snake\'s inner life by keeping them tethered to past wounds that would be better released.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Snake is a Fire-phase animal, embodying the transformative, illuminating energy of summer. When Metal overlays this Fire nature, it creates the destructive cycle pairing — Fire melts Metal. This internal tension gives the Metal Snake their characteristic intensity: there is a constant internal contest between Fire's desire to transform and express, and Metal's insistence on control and containment.

This Fire-Metal dynamic is the source of both the Metal Snake's power and their suffering. The tension between expression and containment produces extraordinary analytical depth — the Snake's intuitive fire is constantly being refined and focused by Metal's discipline, like a lens concentrating sunlight into a laser. But this same tension creates internal pressure that, if never released, can become corrosive. The Metal Snake must find outlets for their Fire nature — creative expression, physical activity, passionate intellectual pursuit — that allow their internal flame to breathe without compromising their need for control.

The productive cycle offers the Metal Snake their most natural path to balance: Metal generates Water, and the Snake's deep connection to wisdom and hidden knowledge aligns with Water's flowing, adaptable nature. When the Metal Snake allows their sharp intelligence to flow toward wisdom rather than merely analysis, they achieve a state of extraordinary integration.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Snakes are among the most selective and guarded partners in the zodiac. They require a long period of observation and assessment before they will consider someone a genuine candidate for intimacy. Trust, once given, is total — but it is earned slowly and lost permanently.

The Snake belongs to the Second Trine alongside the Ox and the Rooster — signs that share the Snake's appreciation for depth, diligence, and strategic thinking. These natural allies understand the Metal Snake's need for privacy and provide the intellectual engagement this sign craves. The Pig sits opposite the Snake on the zodiac wheel, creating a tension between the Snake's secretive depth and the Pig's open-hearted generosity.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 93,
        summary:
          'The Water Ox provides the deep loyalty, patient understanding, and emotional stability that the Metal Snake needs to feel truly safe. The Ox\'s unwavering commitment creates the security necessary for the Snake to gradually lower their defenses. Water softens both Metal and the Ox\'s natural rigidity, creating a partnership of profound trust and mutual devotion that deepens over decades.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 87,
        summary:
          'The Earth Rooster\'s sharp analytical mind and commitment to honesty resonate with the Metal Snake\'s own values. Both signs appreciate precision, depth, and the pursuit of truth. The Rooster\'s directness balances the Snake\'s tendency toward secrecy, while the Earth element provides grounding stability. Their conversations are intellectually electric.',
      },
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 84,
        summary:
          'The Metal Dragon\'s commanding vision and structural authority complement the Metal Snake\'s strategic depth and psychological insight. Together, they form a partnership of formidable intelligence and combined power. The Dragon leads openly while the Snake advises from the shadows — a dynamic that plays to both signs\' natural strengths.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 28,
        summary:
          'The zodiac opposition between Snake and Pig is sharpened by element tension. The Fire Pig\'s generous openness and emotional expressiveness feel threatening to the Metal Snake\'s need for control and privacy. The Pig finds the Snake cold and secretive; the Snake finds the Pig naively trusting. Fire melts Metal, adding a layer of elemental conflict to the already difficult opposition.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 33,
        summary:
          'The Fire Tiger\'s direct, forceful approach to life is fundamentally incompatible with the Metal Snake\'s preference for subtlety and patience. The Tiger values transparency; the Snake values strategic opacity. Fire\'s intensity threatens to overwhelm Metal\'s carefully maintained control, creating a dynamic where neither feels safe or understood.',
      },
      {
        slug: 'wood-monkey',
        name: 'Wood Monkey',
        score: 42,
        summary:
          'The Wood Monkey\'s playful cleverness initially intrigues but eventually frustrates the deeper Metal Snake. The Monkey\'s restless energy and surface-level charm feel insubstantial to the Snake\'s demand for depth. Metal cuts Wood, creating an undercurrent where the Snake may inadvertently suppress the Monkey\'s natural expressiveness.',
      },
    ],

    elementAffinity: `The Metal Snake's Fire-Metal internal dynamic creates complex interactions with external elements. Water signs offer the most natural harmony, as Metal generates Water and the Snake's wisdom nature resonates with Water's depth — these partnerships feel intuitive and regenerative. Earth signs provide essential grounding that stabilizes the Fire-Metal tension, offering security without demanding the emotional exposure the Snake resists. Other Metal signs create mutual respect for discipline and privacy, though two guarded personalities may struggle to achieve genuine intimacy. Wood signs may feel constrained by Metal's cutting energy. Fire signs amplify the Snake's internal Fire-Metal tension — potentially energizing but also risking the loss of the control the Metal Snake requires for security.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Snakes excel in careers that reward deep analysis, strategic thinking, and the ability to uncover hidden truths. They are the zodiac's natural investigators, researchers, and strategic advisors — thriving in roles where patient observation and penetrating intelligence provide decisive advantages.

The ideal Metal Snake career provides intellectual challenge, autonomous working conditions, and the opportunity to develop expertise at extraordinary depth. They are not generalists; they are specialists who pursue mastery in their chosen domain with single-minded focus. Whether in medicine, technology, finance, or intelligence work, the Metal Snake becomes an irreplaceable authority whose knowledge and judgment are trusted implicitly.

Metal Snakes struggle in roles that require constant social interaction, rapid superficial output, or transparent collaboration. They need the space and time to think deeply, and they produce their best work when given autonomy to approach problems in their own methodical, thorough way.`,

    idealCareers: [
      'Research Scientist',
      'Psychologist/Psychiatrist',
      'Intelligence Analyst',
      'Forensic Investigator',
      'Neurosurgeon',
      'Financial Analyst',
      'Cybersecurity Specialist',
      'Strategic Consultant',
    ],

    financialStyle:
      'Metal Snakes are sophisticated, patient wealth builders who approach finance with the same analytical depth they bring to everything else. They excel at identifying undervalued assets and long-term investment opportunities that others overlook. They are naturally frugal, viewing excessive spending as a vulnerability rather than a pleasure. Their challenge is the tendency toward financial secrecy — hoarding information about their wealth even from partners and financial advisors. The most financially successful Metal Snakes maintain transparency with trusted advisors while keeping their strategic decisions private from the broader world.',

    tips: [
      'Share your analytical insights more freely. Metal Snakes often keep their best thinking to themselves, revealing conclusions without the reasoning behind them. In collaborative environments, sharing your thought process builds trust and helps others learn from your exceptional analytical gifts.',
      'Develop visible leadership skills alongside your analytical strengths. Your ability to influence from behind the scenes is valuable, but career advancement often requires visible leadership. Practice communicating your vision clearly and inspiring others rather than simply directing them.',
      'Guard against analysis paralysis. Your desire for complete information before acting is usually an asset, but some decisions must be made with incomplete data. Develop frameworks for "good enough" decisions that allow you to act decisively when perfect information is unavailable.',
      'Build and maintain a professional network. Metal Snakes tend toward professional isolation, preferring to work alone. Cultivate a select group of trusted professional contacts who provide information, opportunities, and perspectives you cannot generate alone.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love is the Metal Snake's most complex arena. They possess a capacity for deep, transformative intimacy that few other signs can match — but accessing it requires navigating layers of protection that the Metal Snake has spent a lifetime constructing. Their love, once fully given, is absolute, consuming, and profoundly loyal. The challenge is getting there.

Metal Snakes observe potential partners for extended periods before making any move, reading patterns of behavior, testing for honesty and depth, and assessing compatibility with a thoroughness that would be clinical if it were not driven by genuine emotional need. They are not cold in love — they are cautious, having learned that their emotional depth makes them particularly vulnerable to betrayal and disappointment.

Once committed, Metal Snakes are intensely devoted partners. Their love is expressed through deep attention, psychological understanding, and a protective possessiveness that reflects the depth of their emotional investment. They remember every detail about their partner — preferences, fears, dreams — and use this knowledge to create a relationship of extraordinary attentiveness.`,

    loveStyle:
      'The Metal Snake loves with the depth and intensity of a still, fathomless pool — calm on the surface but containing extraordinary pressure and complexity beneath. Their love is expressed through profound attention, psychological attunement, and an almost telepathic understanding of their partner\'s needs. They are sensual, devoted, and fiercely protective, but their love comes with a need for emotional exclusivity and trust that, if violated, cannot be restored.',

    idealPartnerTraits: [
      'Deeply Trustworthy',
      'Emotionally Intelligent',
      'Patient',
      'Independently Strong',
      'Comfortable with Silence',
    ],

    tips: [
      'Trust your partner with your vulnerability. The Metal Snake\'s deepest fear in love is exposure, but genuine intimacy requires exactly that. Start by sharing small truths — a worry, a memory, an insecurity — and observe how your partner responds. The right partner will honor your openness with care.',
      'Release the need to know everything about your partner\'s inner life. Your analytical nature may compel you to monitor, question, and investigate — but love requires some mystery. Allow your partner the same privacy you demand for yourself.',
      'Express affection in ways your partner can perceive. Your internal experience of love may be profound, but if it remains entirely internal, your partner cannot feel it. Develop at least one consistent, visible way of expressing the devotion you feel.',
      'Practice forgiveness as a strength, not a weakness. The Metal Snake\'s memory is long and precise, making forgiveness genuinely difficult. But holding past wounds as weapons poisons the relationship and traps you in a cycle of suspicion. Learn to release what does not serve your future together.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Snake's health is intimately connected to their emotional and psychological state. The internal tension between their Fire nature (the Snake's intrinsic element) and the Metal overlay creates a constitution that is simultaneously powerful and pressurized — like a volcano capped by an iron lid. When the internal pressure is managed, the Metal Snake enjoys excellent health and remarkable recuperative powers. When it is not, the consequences can be sudden and dramatic.

In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Snake's Fire nature connects to the Heart and Small Intestine. This creates a health profile where the cardiovascular and respiratory systems are primary areas of vulnerability. The emotional suppression characteristic of this sign means that unexpressed feelings often manifest as physical symptoms — chest tightness, breathing difficulties, and digestive issues that intensify during periods of emotional stress.

The Metal Snake's approach to health tends toward either obsessive self-monitoring or complete neglect — rarely the balanced middle ground. They benefit most from structured wellness routines that satisfy their analytical mind while addressing their need for physical release and emotional processing.`,

    bodyAreas: ['Heart', 'Lungs', 'Small Intestine', 'Reproductive System'],

    exercises: [
      'Yoga and deep stretching',
      'Swimming',
      'Walking meditation',
      'Dance',
    ],

    dietTips: [
      'Balance the Fire-Metal tension through food. Include both cooling foods (cucumber, melon, green tea) and Metal-supportive foods (pears, almonds, white rice). This dual approach addresses both the Snake\'s internal heat and Metal\'s need for respiratory support.',
      'Support the cardiovascular system with omega-3 rich foods: fatty fish, walnuts, flaxseed, and olive oil. The Snake\'s Fire-Heart connection makes cardiovascular health a priority, and these foods provide protection against the stress-related risks this sign faces.',
      'Eat mindfully and regularly. Metal Snakes tend to forget meals when absorbed in thought, then binge when the body\'s demands become impossible to ignore. Consistent, moderate meals stabilize their intense metabolic cycles.',
      'Include warming, aromatic spices — ginger, cinnamon, cardamom — that support digestion without excessive heat. These spices honor the Snake\'s Fire nature while the Metal element benefits from their lung-opening properties.',
    ],

    mentalHealth:
      'The Metal Snake\'s mental health is the most complex in the zodiac, reflecting the depth and intensity of their inner world. Their primary challenge is the accumulation of unexpressed emotion — the constant conversion of feeling into analysis creates a kind of psychological pressure that can manifest as anxiety, obsessive thinking, or periodic depressive episodes that seemingly appear from nowhere. Therapy is highly recommended, but the Metal Snake will only engage with a therapist they respect intellectually and trust completely — a process that may itself take considerable time. Depth-oriented approaches (psychodynamic, Jungian) tend to resonate more than surface-level cognitive interventions, as the Metal Snake craves the same depth in therapy that they bring to everything else. Somatic practices — breathwork, body scanning, acupuncture — are particularly effective because they bypass the Metal Snake\'s tendency to intellectualize their emotions, accessing the body\'s stored tension directly.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 8, 9],
    colors: ['White', 'Silver', 'Red', 'Black'],
    direction: 'West',
    gemstones: ['Garnet', 'Silver Obsidian', 'White Coral'],
    flowers: ['Cactus Flower', 'White Jasmine', 'Bird of Paradise'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL SNAKES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Bob Dylan',
        profession: 'Musician/Nobel Laureate',
        birthYear: 1941,
        description:
          'Bob Dylan\'s enigmatic persona, penetrating lyrical intelligence, and deliberate mystification of his public identity embody the Metal Snake perfectly. His ability to transform popular music through strategic artistic choices — each reinvention precisely calculated for maximum impact — reflects the sign\'s combination of deep artistic vision and strategic precision.',
      },
      {
        name: 'Martha Stewart',
        profession: 'Business Mogul/Media Personality',
        birthYear: 1941,
        description:
          'Martha Stewart\'s meticulous attention to detail, her transformation of domesticity into a media empire, and her resilient comeback after personal crisis all reflect the Metal Snake\'s strategic patience, perfectionism, and formidable willpower. Her ability to maintain control of her narrative through decades of public scrutiny is classic Metal Snake self-containment.',
      },
      {
        name: 'Bernardo Bertolucci',
        profession: 'Film Director',
        birthYear: 1941,
        description:
          'Bertolucci\'s psychologically penetrating films — exploring desire, power, and hidden human motivations — reflect the Metal Snake\'s extraordinary capacity for psychological depth. His masterful control of cinematic narrative mirrors the sign\'s ability to orchestrate complex elements into a unified, powerful vision.',
      },
      {
        name: 'Faye Dunaway',
        profession: 'Actress',
        birthYear: 1941,
        description:
          'Faye Dunaway\'s intense, psychologically complex performances embody the Metal Snake\'s emotional depth and controlled intensity. Her portrayal of powerful, enigmatic women in films like Network and Chinatown reflects the sign\'s natural affinity for characters of hidden complexity and strategic intelligence.',
      },
      {
        name: 'Plácido Domingo',
        profession: 'Opera Singer/Conductor',
        birthYear: 1941,
        description:
          'Plácido Domingo\'s remarkable career longevity, his mastery across multiple operatic disciplines, and his meticulous attention to vocal and dramatic detail reflect the Metal Snake\'s characteristic depth, discipline, and sustained strategic excellence over decades.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Snake holds the sixth position in the Chinese zodiac and carries the most complex mythological legacy of all twelve animals. In Chinese tradition, the Snake is considered a "little dragon" — sharing the Dragon's wisdom and supernatural associations but expressing them through subtlety rather than spectacle. The Snake is associated with the earthly branch Si (巳), the hours of 9-11 am, and the warming energy of late spring transitioning into summer.

When Metal joins the Snake, traditional Chinese astrology describes a sign of extraordinary intellectual power and strategic depth. Metal Snake years are associated with periods of covert transformation — changes that happen beneath the surface, invisible to casual observation but fundamentally restructuring the world's power dynamics. The 1941 Metal Snake year, for instance, saw the covert developments and strategic calculations that shaped the course of World War II.

In Chinese medical mythology, the Snake is associated with healing and transformation — the shedding of skin representing renewal and the release of what is no longer needed. The Metal Snake's mythological role is the precise surgeon: cutting away what is diseased or obsolete with analytical precision, preserving what is healthy, and facilitating transformation through intelligent intervention rather than brute force.`,

    symbolism: `The Metal Snake symbolizes hidden power, analytical precision, and the wisdom that comes from deep observation. In Five Element symbolism, Metal represents the cutting edge of awareness — the ability to distinguish truth from falsehood, signal from noise, essential from superficial. Combined with the Snake's association with hidden knowledge and psychological depth, the Metal Snake becomes a symbol of insight itself — the penetrating intelligence that sees through all deception.

The Snake's characteristic shedding of skin takes on particular significance when combined with Metal. Where other Snake variants shed fluidly and intuitively, the Metal Snake's transformation is deliberate and precise — a calculated release of the old self that has been analyzed, evaluated, and determined to be no longer useful. This makes the Metal Snake a symbol of disciplined self-renewal: the capacity to change fundamentally while maintaining core identity.

In traditional Chinese art, the Metal Snake is often depicted coiled around a precious gem or metallic object — guarding treasure, hoarding knowledge, and protecting what is valuable with patient, unblinking vigilance.`,

    modernInterpretation: `In contemporary culture, the Metal Snake archetype resonates powerfully with the age of information, surveillance, and strategic intelligence. The Metal Snake's core competencies — pattern recognition, psychological acuity, strategic patience, and the ability to synthesize vast amounts of data into actionable insight — are precisely the skills most valued in fields from cybersecurity to behavioral economics to artificial intelligence development.

Modern interpretations of the Metal Snake emphasize the ethical dimensions of this sign's power. The ability to read, predict, and influence human behavior carries profound moral responsibility, and the most admired Metal Snake figures in contemporary culture are those who use their analytical gifts in service of truth, healing, and justice rather than manipulation and control.

For those born in Metal Snake years, the modern world presents an environment uniquely suited to their gifts. The challenge is not finding opportunities to exercise their formidable intelligence but choosing to exercise it wisely — recognizing that the power to see through people comes with the obligation to treat what they see with respect, discretion, and compassion.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
