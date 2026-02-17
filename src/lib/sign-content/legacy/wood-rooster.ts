// ============================================
// WOOD ROOSTER (甲酉) — The Principled Craftsman
// ============================================
// The Wood Rooster blends the Rooster's precision and
// high standards with Wood's flexibility and compassion,
// creating a meticulous artisan who builds with both
// excellence and heart.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-rooster',
  profile: getProfileBySlug('wood-rooster')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Rooster is the most balanced and socially graceful of all Rooster-element combinations. The Rooster — naturally sharp-eyed, detail-oriented, and unflinchingly honest — gains warmth, flexibility, and genuine concern for others through the Wood element's influence. Where other Rooster types can be abrasive in their directness, the Wood Rooster delivers truth with compassion, pursues excellence with patience, and maintains high standards without crushing those who fall short.

People born under this sign possess an unusual combination of precision and creativity. They notice every detail — the misaligned margin, the off-key note, the subtle inconsistency in an argument — but they use this perceptiveness constructively rather than critically. The Wood Rooster's goal is not to expose flaws but to improve the whole, working with patient care to bring everything they touch closer to its potential.

What makes the Wood Rooster particularly admirable is their integrity. They hold themselves to the same exacting standards they apply to the world around them, and they are willing to put in the work — the meticulous, unglamorous, day-after-day work — that excellence demands. Their accomplishments may not be flashy, but they are built to last. The Wood Rooster creates things of enduring quality: careers, relationships, creative works, and contributions that stand up to the closest inspection because they were crafted with genuine care.`,

    coreTraits: [
      'Meticulous',
      'Principled',
      'Creative',
      'Honest',
      'Hardworking',
      'Observant',
    ],

    strengths: [
      {
        trait: 'Exacting Craftsmanship',
        description:
          'The Wood Rooster brings an artisan\'s dedication to everything they do. Whether writing a report, designing a room, cooking a meal, or building a career, they pursue excellence with patient, careful attention to every detail. The Wood element adds creative vision to the Rooster\'s natural precision, producing work that is both technically perfect and aesthetically beautiful.',
      },
      {
        trait: 'Compassionate Honesty',
        description:
          'The Wood Rooster is one of the few signs that can deliver hard truths without destroying relationships. They have the Rooster\'s commitment to transparency but Wood\'s sensitivity to how that transparency is received. The result is feedback that is both genuinely helpful and respectfully delivered — a rare and valued quality in personal and professional relationships.',
      },
      {
        trait: 'Ethical Consistency',
        description:
          'The Wood Rooster lives by a clear moral code and applies it consistently — to themselves first, to others second. Their integrity is not performative but deeply held, emerging from a genuine belief that doing the right thing matters more than doing the easy thing. This consistency builds extraordinary trust over time.',
      },
      {
        trait: 'Organizational Excellence',
        description:
          'The Wood Rooster brings order to chaos with natural grace. They organize systems, streamline processes, and create structures that make everyone more effective. The Wood element adds a creative, flexible approach to organization that avoids the rigidity of pure Rooster types — their systems work for people, not against them.',
      },
    ],

    challenges: [
      {
        trait: 'Perfectionism',
        description:
          'The Wood Rooster\'s pursuit of excellence can become a pursuit of perfection — an impossible standard that creates chronic dissatisfaction. They may spend excessive time on details that add marginal value, delay completion while seeking one more improvement, or hold their own work to standards so high that they never feel proud of their achievements.',
      },
      {
        trait: 'Critical Nature',
        description:
          'Despite being gentler than other Rooster types, the Wood Rooster still has a sharp critical eye that can wound. Their observations about others\' shortcomings, however well-intentioned, can feel like judgment rather than help. They may not realize how frequently they offer unsolicited assessments or how deeply those assessments can sting.',
      },
      {
        trait: 'Rigidity Under Stress',
        description:
          'When the Wood Rooster is stressed or threatened, Wood\'s flexibility can evaporate, revealing the Rooster\'s underlying rigidity. They may become inflexible about procedures, intolerant of deviation from plans, and fixated on being right rather than being effective. This stress-triggered rigidity can damage relationships and undermine their natural leadership.',
      },
      {
        trait: 'Difficulty Delegating',
        description:
          'The Wood Rooster\'s high standards make it difficult for them to trust others with important tasks. They believe — often correctly — that they can do things better themselves, which leads to overwork, bottlenecks, and a failure to develop the people around them. Learning to delegate imperfectly is one of their greatest professional challenges.',
      },
    ],

    elementInfluence: `Wood's influence on the Rooster creates a productive tension between expansion and precision. The Rooster is natively associated with the Metal element — sharp, disciplined, and focused on detail. Metal cuts Wood in the destructive cycle, meaning the Rooster's natural Metal energy challenges Wood's softer, more flexible influence. In the Wood Rooster, this manifests as a dynamic interplay between high standards and compassion, between critical precision and creative growth. When this tension is resolved well, the Wood Rooster becomes an exceptional combination: meticulous enough to produce excellent work, flexible enough to adapt to changing circumstances, and compassionate enough to bring people along on the journey toward excellence rather than leaving them behind. The Wood element essentially civilizes the Rooster's sharp edges without dulling them, adding warmth and creative vision to the Rooster's formidable precision and work ethic.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Rooster's compatibility reflects their need for a partner who appreciates quality, values honesty, and can handle their high standards without feeling judged. They need someone who is strong enough to push back when the Rooster's critical nature goes too far, yet secure enough to accept and benefit from their genuine desire to improve everything around them. The Rooster belongs to the second trine alongside the Ox and the Snake, sharing these animals' thoughtfulness, discipline, and commitment to excellence.

The Wood element makes this Rooster warmer and more flexible than other Rooster types, expanding their compatibility with signs that might find a pure Metal or Fire Rooster too intense or demanding.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 90,
        summary:
          'A deeply harmonious second-trine pairing. The Water Ox\'s patient reliability and quiet strength complement the Wood Rooster\'s meticulous nature beautifully. Water nourishes Wood, sustaining the Rooster\'s growth and softening their critical edges. Both signs value quality, integrity, and building things that last, creating a partnership grounded in shared values and mutual respect.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 87,
        summary:
          'A sophisticated second-trine alliance where the Water Snake\'s intuitive wisdom complements the Wood Rooster\'s precise analysis. Water nourishes Wood, and the Snake\'s depth provides the intellectual engagement the Rooster craves. Both signs appreciate quality and refinement, creating a partnership that operates at a high level of shared standards and mutual intellectual admiration.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 83,
        summary:
          'A complementary pairing where the Earth Dragon\'s ambitious vision provides a worthy canvas for the Wood Rooster\'s meticulous craftsmanship. The Dragon dreams big; the Rooster executes flawlessly. The Earth element provides the grounding both signs need, while the Wood Rooster\'s attention to detail ensures the Dragon\'s grand plans are realized with excellence.',
      },
    ],

    challengingMatches: [
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 28,
        summary:
          'The Rooster and Rabbit sit in direct opposition on the zodiac wheel. Despite sharing the Wood element, their fundamental natures clash: the Rooster\'s sharp honesty devastating the Rabbit\'s sensitive spirit, while the Rabbit\'s conflict-avoidant indirectness frustrates the Rooster\'s demand for transparency. Both are Wood signs, but they express Wood energy in incompatible ways.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 35,
        summary:
          'The Fire Horse\'s explosive independence and resistance to criticism overwhelms the Wood Rooster\'s desire for orderly, well-managed partnership. The Rooster\'s attention to detail feels like nagging to the Horse, while the Horse\'s impulsiveness feels like recklessness to the Rooster. Fire burns Wood, adding an element of energetic friction.',
      },
      {
        slug: 'fire-dog',
        name: 'Fire Dog',
        score: 40,
        summary:
          'Despite some compatibility through the Dog\'s loyalty, the Fire Dog\'s idealistic crusading and emotional intensity clashes with the Wood Rooster\'s methodical, standards-driven approach. The Dog demands moral passion; the Rooster demands practical excellence. Fire burns Wood, creating friction where the Dog\'s consuming energy drains the Rooster\'s resources.',
      },
    ],

    elementAffinity: `The Wood Rooster has a complex elemental profile due to the tension between their Wood element and the Rooster's native Metal energy. Water-element partners are exceptionally beneficial, as Water nourishes Wood while also softening Metal, creating balance in the Rooster's internal elemental dynamics. Fire-element partners can be challenging — Wood feeds Fire, potentially draining the Rooster — but they can also bring warmth and passion that the Rooster's precision sometimes lacks. Earth-element partners provide grounding stability and can mediate between the Rooster's Metal and Wood energies. Metal-element partners can amplify the Rooster's critical tendencies, as Metal's sharp energy overwhelms Wood's gentler influence.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Rooster excels in careers that demand precision, integrity, and creative attention to quality. They are the zodiac's master craftspeople — whether their craft is engineering, writing, medicine, or culinary arts. What they produce is invariably excellent because they refuse to release work that does not meet their exacting standards.

Their ideal work environment values quality over speed and rewards meticulous attention to detail. The Wood Rooster thrives in roles where expertise matters, where standards are high, and where their natural inclination toward perfection is appreciated rather than pressured to "ship fast and break things." They are less effective in chaotic, fast-moving environments where volume matters more than quality.

Financially, the Wood Rooster is disciplined and prudent. They research purchases thoroughly, save methodically, and invest carefully in things they understand. Their relationship with money reflects their broader values: they pay for quality and expect lasting value. The Wood Rooster's financial weakness is occasional overspending on items that meet their high aesthetic or functional standards — they would rather pay triple for the best than settle for adequate.`,

    idealCareers: [
      'Quality Assurance Engineer',
      'Surgeon or Specialist Physician',
      'Master Craftsperson or Woodworker',
      'Editor or Literary Critic',
      'Architect',
      'Certified Public Accountant',
      'Watchmaker or Jeweler',
      'Sommelier or Food Critic',
    ],

    financialStyle:
      'The Wood Rooster is a disciplined, quality-focused financial manager who researches thoroughly before investing and values lasting returns over quick gains. They maintain organized financial records, pay bills on time, and build savings with methodical consistency. Their spending reflects their appreciation for quality — they invest in durable goods, expert services, and well-crafted items rather than bargain alternatives. Their financial weakness is the conviction that quality always justifies cost — sometimes the premium they pay for excellence exceeds its practical value.',

    tips: [
      'Learn to distinguish between excellence and perfectionism. Excellence is achievable and valuable; perfectionism is a trap that prevents completion and breeds dissatisfaction. Set clear quality standards before starting a project and hold yourself to those standards — not to an ever-escalating ideal.',
      'Develop your ability to give positive feedback as readily as you identify improvements. People need to hear what they are doing right as much as what they could do better. Make a conscious practice of recognizing excellence in others — it builds loyalty and trust that amplifies your influence.',
      'Delegate based on development, not just current capability. Your reluctance to delegate because others cannot meet your standards prevents your team from growing. Accept that supervised imperfection is better than bottlenecked perfection, and invest in developing others\' skills rather than doing everything yourself.',
      'Build rest and creative play into your schedule. Your work ethic is extraordinary, but it can become compulsive if unchecked. Unstructured time — time without standards, deadlines, or quality metrics — is essential for your long-term creativity and well-being.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Rooster in love is devoted, attentive, and committed to building a relationship of exceptional quality. They approach partnership with the same meticulous care they bring to their craft — investing in every detail, working to improve what can be improved, and maintaining standards that ensure the relationship grows stronger rather than drifting into complacency.

In relationships, the Wood Rooster expresses love through care and quality. They create well-organized homes, plan thoughtful date nights, remember important details about their partner's preferences, and show devotion through consistent, reliable presence. Their attention to detail in love is extraordinary — they notice the new haircut, remember the favorite song, and anticipate needs before they are expressed.

The Wood Rooster's challenge in love is their critical nature. Even when motivated by genuine love and a desire to help, their habit of noticing imperfections and offering improvements can make their partner feel judged rather than accepted. The most important romantic growth for the Wood Rooster is learning that love means accepting someone fully — including the imperfections they cannot help but notice — and expressing that acceptance more often than they express their desire for improvement.`,

    loveStyle:
      'The Wood Rooster loves through meticulous care, devoted attention, and the creation of a well-crafted shared life. They are reliable, honest partners who express affection through quality — the well-planned anniversary, the remembered preference, the carefully maintained home. Their love is demonstrated through consistency and improvement: they want the relationship to be the best version of itself. They need a partner who values their dedication, has the resilience to handle their honesty, and can remind them that love is about acceptance as much as excellence.',

    idealPartnerTraits: [
      'Appreciates Honesty',
      'Emotionally Resilient',
      'Values Quality and Effort',
      'Can Set Boundaries Clearly',
      'Warm and Demonstrative',
    ],

    tips: [
      'Practice unconditional appreciation. For every improvement you suggest to your partner, offer three genuine compliments. This ratio ensures your partner feels valued and loved rather than perpetually evaluated.',
      'Accept that your partner will never meet all your standards — and that this is perfectly fine. Loving a real person means loving their real imperfections. The Wood Rooster who embraces this truth discovers a depth of love that perfectionism can never reach.',
      'Show affection in warm, spontaneous ways rather than only through structured quality. A random "I love you" text, an unexpected hug, or a silly shared moment communicates warmth in ways that your carefully planned gestures cannot.',
      'Listen for what your partner feels, not just what they say. Your analytical mind focuses on the content of conversations, but emotions often live in the spaces between words. Practice paying attention to tone, body language, and emotional subtext.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Rooster's health profile reflects the tension between Wood's liver-centered energy and the Rooster's native Metal constitution governing the lungs and respiratory system. This creates a constitution that is generally robust but susceptible to specific stress-related patterns, particularly when the Wood Rooster's perfectionism drives them to overwork or when suppressed frustration disrupts their internal energy flow.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while Metal governs the lungs, large intestine, skin, and immune system. The Wood Rooster may experience health issues at the intersection of these systems — skin problems triggered by liver congestion, respiratory complaints worsened by suppressed emotions, or immune sensitivity linked to chronic stress.

The Wood Rooster's health strategy should emphasize rhythmic living, clean environments, and conscious stress management. Their bodies respond well to routine, quality nutrition, and regular exercise. The key is maintaining the high standards they naturally apply to their work in their self-care practices as well — treating their body with the same meticulous attention they give to everything else.`,

    bodyAreas: ['Lungs', 'Liver', 'Skin', 'Eyes'],

    exercises: [
      'Precision sports like archery or golf',
      'Structured gym routines',
      'Long-distance running',
      'Breathing exercises and pranayama',
    ],

    dietTips: [
      'Eat clean, well-prepared meals that satisfy both nutritional needs and aesthetic standards. The Wood Rooster thrives on food that is both healthy and beautiful — invest in quality ingredients and take pleasure in their preparation.',
      'Support lung health with foods rich in vitamin C and antioxidants: citrus fruits, bell peppers, berries, and leafy greens. The Rooster\'s Metal-associated respiratory system benefits from consistent immune support.',
      'Include liver-supporting foods to maintain the smooth flow of Wood energy: beets, dandelion greens, turmeric, and artichoke. Liver health is essential for the emotional equanimity the Wood Rooster needs to function at their best.',
      'Avoid eating in stressful or rushed conditions. The Wood Rooster\'s tendency to work through meals or eat at their desk undermines their digestion. Set the table, sit down, and treat meals with the same respect for quality you apply to your work.',
    ],

    mentalHealth:
      'The Wood Rooster\'s primary mental health challenge is managing the perfectionism that drives their excellence but can also trap them in cycles of self-criticism and dissatisfaction. Their internal critic is relentless, applying standards of perfection that no human being can consistently meet. Over time, this creates a baseline of anxiety and a chronic sense of inadequacy that exists alongside genuine accomplishment — a painful paradox that the Wood Rooster may not fully recognize. Cognitive behavioral therapy is particularly effective for this sign, as it provides structured tools for identifying and challenging the perfectionist thinking patterns that drive their distress. The Wood Rooster also benefits from creative practices that emphasize process over product — painting, music, cooking for pleasure rather than performance. These activities build the capacity to enjoy imperfection, a skill that the Wood Rooster desperately needs but rarely develops. Physical exercise that involves flow states rather than precision — dancing, swimming, free-form movement — provides a healthy counterbalance to the Rooster\'s natural tendency toward controlled, evaluated performance.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [5, 7, 8],
    colors: ['Green', 'White', 'Silver'],
    direction: 'East',
    gemstones: ['Jade', 'Pearl', 'Moonstone'],
    flowers: ['Gladiolus', 'Impatiens', 'Celosia'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD ROOSTERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Ariana Grande',
        profession: 'Singer/Actress',
        birthYear: 1993,
        description:
          'Ariana Grande\'s extraordinary vocal precision, meticulous artistic standards, and consistent delivery of polished performances embody the Wood Rooster\'s dedication to craftsmanship. Her evolution from teen actress to one of the most technically accomplished vocalists of her generation reflects the sign\'s patient pursuit of mastery.',
      },
      {
        name: 'Quincy Jones',
        profession: 'Music Producer/Composer',
        birthYear: 1933,
        description:
          'Quincy Jones\'s legendary attention to musical detail, his ability to orchestrate complex collaborations, and his commitment to the highest standards of production perfectly embody the Wood Rooster\'s combination of precision and creative vision. His seven decades of groundbreaking work across genres demonstrate the sign\'s enduring dedication to craft.',
      },
      {
        name: 'Zayn Malik',
        profession: 'Singer',
        birthYear: 1993,
        description:
          'Zayn Malik\'s meticulous approach to vocal artistry and his carefully curated solo career reflect the Wood Rooster\'s high personal standards and creative independence. His willingness to step away from guaranteed commercial success to pursue artistic integrity demonstrates the sign\'s commitment to quality over quantity.',
      },
      {
        name: 'Yoko Ono',
        profession: 'Artist/Activist',
        birthYear: 1933,
        description:
          'Yoko Ono\'s avant-garde artistic vision, precise conceptual thinking, and lifelong commitment to peace activism embody the Wood Rooster\'s combination of meticulous creativity and principled purpose. Her uncompromising artistic standards, maintained over decades of both acclaim and criticism, reflect the sign\'s unwavering commitment to their own vision.',
      },
      {
        name: 'James Brown',
        profession: 'Singer/Musician',
        birthYear: 1933,
        description:
          'The "Godfather of Soul" embodied the Wood Rooster\'s relentless pursuit of perfection in performance. James Brown\'s legendary attention to every detail of his shows — from choreography to musicianship — and his demand for absolute precision from his band exemplify the sign\'s unwavering commitment to excellence in craft.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rooster is the tenth animal in the Chinese zodiac, occupying the position associated with the Earthly Branch You (酉) and the evening hours of 5pm to 7pm — the time when the Rooster calls the world home from the day's labor. In Chinese mythology, the Rooster is a symbol of punctuality, honesty, and the courage to announce the truth even when the world would rather sleep. The Rooster's crow at dawn was believed to dispel evil spirits and demons, making it a guardian figure of considerable importance.

When combined with the Wood element, the Rooster takes on the qualities of the master artisan — the craftsperson who combines natural talent with disciplined practice to produce work of enduring quality. In classical Chinese thought, the Wood Rooster represents the Confucian ideal of the junzi (gentleman) who cultivates virtue through diligent self-improvement: honest in speech, meticulous in action, and dedicated to bringing harmony through the pursuit of excellence.`,

    symbolism: `The Wood Rooster symbolizes principled craftsmanship, honest expression, and the pursuit of excellence in service of beauty and truth. In traditional Chinese symbolism, the Rooster represents reliability, honesty, and the courage to speak truth to power. Wood adds the dimensions of creative growth and compassionate purpose, softening the Rooster's naturally sharp energy into something that builds rather than merely critiques.

The Wood Rooster reminds us that excellence is not elitism — it is a form of love. When someone dedicates themselves to doing their best work, they are offering a gift to everyone who encounters that work. The Wood Rooster's commitment to quality is, at its heart, a commitment to caring deeply about the impact of their contributions on the world.`,

    modernInterpretation: `In contemporary culture, the Wood Rooster archetype speaks to the enduring value of craftsmanship, integrity, and meticulous attention to quality in an age of mass production and rapid iteration. The Wood Rooster represents the artisan, the master, and the perfectionist who reminds us that some things are worth doing slowly, carefully, and very, very well.

The 1993 Wood Rooster generation has emerged in an era that both celebrates and challenges their values. While the speed of digital culture can feel hostile to the Rooster's patient perfectionism, there is a growing counter-movement that values handmade quality, authentic craftsmanship, and the kind of focused excellence the Wood Rooster embodies. For this generation, the challenge and opportunity is finding ways to maintain their commitment to quality in a world that often rewards quantity and speed.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
