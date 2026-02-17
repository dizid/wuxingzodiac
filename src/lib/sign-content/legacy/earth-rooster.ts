// ============================================
// EARTH ROOSTER (戊酉) — The Diligent Master
// ============================================
// The Earth Rooster combines the Rooster's meticulous
// attention to detail and high standards with Earth's
// stabilizing, practical energy, creating a supremely
// competent and dependable perfectionist.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-rooster',
  profile: getProfileBySlug('earth-rooster')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Rooster is the most balanced and practically effective expression of the Rooster archetype. Where other Rooster variants may alienate people with harsh criticism or exhaust themselves pursuing impossible standards, the Earth Rooster channels their meticulous nature through a filter of warmth and pragmatism that makes their perfectionism productive rather than destructive. They set high standards and consistently meet them, earning respect through demonstrated competence rather than demanding it through vocal self-assertion.

People born under this sign possess an exceptional eye for detail combined with the patience to act on what they observe. They notice everything — the crooked picture frame, the misspelled word, the subtle inefficiency in a workflow, the slight change in a colleague's demeanor — and they address these observations with a quiet, methodical thoroughness that gradually improves every environment they inhabit. The Earth Rooster does not make grand pronouncements about quality; they simply produce it, day after day, through patient, careful work.

What distinguishes the Earth Rooster from other perfectionists is their groundedness. Their standards, while high, are achievable rather than aspirational. They understand the difference between excellence and impossible idealism, and they focus their considerable energy on the former. This pragmatic perfectionism makes them extraordinarily effective professionals, partners, and community members — people whose reliability and quality of work speak louder than any self-promotion ever could.`,

    coreTraits: [
      'Meticulous',
      'Reliable',
      'Hardworking',
      'Honest',
      'Organized',
      'Practical',
    ],

    strengths: [
      {
        trait: 'Practical Excellence',
        description:
          'Earth Roosters achieve a level of quality in their work that sets the standard for everyone around them. Their attention to detail is not obsessive but purposeful — they focus on the details that actually matter, producing results that are both excellent and achievable. This practical excellence earns them enormous professional respect and creates a culture of quality wherever they operate.',
      },
      {
        trait: 'Honest Reliability',
        description:
          'The Earth Rooster is one of the most trustworthy signs in the zodiac. They say what they mean, deliver what they promise, and maintain their standards regardless of external pressure. Their honesty is not tactless but principled — they will tell you the truth because they believe you deserve it, and they will deliver it with as much kindness as the situation allows.',
      },
      {
        trait: 'Systematic Organization',
        description:
          'Earth Roosters bring order to chaos with an almost magical efficiency. They naturally create systems, processes, and structures that make complex operations manageable and consistent. Their organizational skill is not rigid but adaptive — they build systems that work in practice, not just in theory, and they refine them continuously based on real-world feedback.',
      },
      {
        trait: 'Disciplined Work Ethic',
        description:
          'The Earth Rooster\'s capacity for sustained, focused work is remarkable. They do not rely on inspiration or enthusiasm — they show up consistently and produce high-quality output regardless of their emotional state. This disciplined work ethic, combined with their natural skill and attention to detail, makes them among the most productive and valuable professionals in any organization.',
      },
    ],

    challenges: [
      {
        trait: 'Critical Nature',
        description:
          'Despite the Earth element\'s softening influence, Earth Roosters can still be uncomfortably critical. Their sharp eye for imperfection, while professionally valuable, can wound the people around them — particularly partners, children, and subordinates who feel perpetually measured against standards they cannot meet. Learning to modulate their critical voice is an ongoing challenge.',
      },
      {
        trait: 'Inflexibility',
        description:
          'Earth Roosters can become rigidly attached to their methods and standards, resisting alternative approaches even when they might produce better outcomes. Their confidence in their own way of doing things — usually well-founded — can calcify into a closed-mindedness that prevents growth and alienates more creative colleagues.',
      },
      {
        trait: 'Difficulty Accepting Imperfection',
        description:
          'While more realistic than other Rooster variants, Earth Roosters still struggle with the inevitable imperfections of real life. They may spend disproportionate time and energy perfecting things that are already good enough, missing deadlines or neglecting higher priorities in pursuit of marginal improvements that no one else will notice.',
      },
      {
        trait: 'Emotional Restraint',
        description:
          'Earth Roosters tend to prioritize competence over emotional expression, creating a persona of capable efficiency that can feel emotionally distant to those who need warmth and vulnerability. They may not understand why their partner needs verbal affection when their actions already demonstrate commitment, creating a disconnect between what they provide and what is needed.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rooster is inherently associated with the Metal element — the energy of precision, clarity, and structured order. When Earth meets this naturally Metal-natured animal, it creates the same productive harmony as the Earth Monkey: Earth creates Metal in the generative cycle, meaning the Earth element naturally supports and strengthens the Rooster's meticulous nature. However, where the Earth Monkey expresses this synergy through innovative problem-solving, the Earth Rooster expresses it through methodical excellence — the patient refinement of craft, process, and standards until they approach perfection. The Earth Rooster represents Earth's nurturing energy directed toward the creation of order, quality, and lasting structures of practical beauty.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Rooster's compatibility profile favors partners who appreciate quality, share their values of hard work and integrity, and provide the emotional warmth that balances the Rooster's sometimes austere demeanor. They need a partner who respects their standards without feeling judged by them, and who can gently remind them that love requires warmth as well as competence.

In traditional Chinese astrology, the Rooster belongs to the Second Trine alongside the Ox and the Snake — three signs united by determination, attention to detail, and a shared preference for order and reliability. These natural allies understand each other's methodical approach. The Rooster's most challenging pairing is with the Rabbit, its zodiac opposite, where the Rabbit's gentle, conflict-avoidant nature clashes with the Rooster's direct, exacting style.`,

    bestMatches: [
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 90,
        summary:
          'A deeply stable and productive partnership between two signs that share a commitment to hard work, integrity, and building things that last. The Earth Ox\'s patient endurance complements the Earth Rooster\'s meticulous standards, creating a relationship where both partners feel genuinely respected and understood. Their shared Earth element provides a foundation of mutual practicality and trust.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 88,
        summary:
          'The Water Snake\'s deep wisdom and emotional intuition perfectly complement the Earth Rooster\'s practical precision. The Snake provides the emotional depth and subtle perception that the Rooster sometimes lacks, while the Rooster provides the organized reliability that the Snake needs. Water nourishes Earth, adding fluidity and emotional warmth to the relationship.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 82,
        summary:
          'The Earth Dragon\'s visionary ambition provides the grand context that gives the Earth Rooster\'s meticulous work its greatest meaning. The Rooster excels at executing the Dragon\'s plans with precision and care, while the Dragon provides the scope and authority that the Rooster respects. Their shared Earth element creates mutual understanding and practical compatibility.',
      },
    ],

    challengingMatches: [
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 28,
        summary:
          'The zodiac\'s classic opposition at a difficult angle. The Wood Rabbit\'s gentle sensitivity is wounded by the Earth Rooster\'s direct criticism and exacting standards. The Rabbit craves softness and acceptance; the Rooster sees flaws to be corrected. Wood depletes Earth, adding an elemental drain that leaves the Rooster feeling undervalued.',
      },
      {
        slug: 'fire-dog',
        name: 'Fire Dog',
        score: 38,
        summary:
          'The Fire Dog\'s passionate idealism clashes with the Earth Rooster\'s pragmatic perfectionism. The Dog fights for principles; the Rooster fights for standards. While both signs value honesty, they express it very differently — the Dog through emotional conviction, the Rooster through factual precision — creating communication breakdowns that erode mutual respect.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 40,
        summary:
          'The Fire Monkey\'s creative, improvisational approach offends the Earth Rooster\'s methodical sensibilities. The Monkey values clever shortcuts; the Rooster insists on doing things properly. While both are intelligent, their different approaches to problem-solving create friction that undermines collaboration.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Metal-natured animal, the Earth Rooster benefits from the productive cycle (Earth creates Metal), giving them an internal harmony between grounding and precision. Fire signs energize this dynamic further (Fire creates Earth), providing warmth and passion that softens the Rooster's sometimes austere nature. Metal signs resonate with the Rooster's natural element, creating partnerships of shared precision and high standards. Water signs can add emotional depth (Metal creates Water in the productive cycle), offering the Rooster access to feelings they might otherwise neglect. Wood signs present the greatest challenge, as Wood controls Earth, potentially undermining the stability that makes the Earth Rooster so effective.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Roosters excel in careers that reward precision, reliability, and sustained attention to quality. They are natural craftspeople, auditors, and quality controllers — professionals whose work becomes the standard against which others are measured. The ideal Earth Rooster career provides clear standards of excellence and the autonomy to meet them through their own methods and at their own pace.

The Earth Rooster's work style is methodical, thorough, and self-directed. They do not need external motivation or supervision — their own internal standards drive them far more effectively than any manager could. They take genuine pride in the quality of their output and derive deep satisfaction from work that is done correctly, completely, and beautifully. For the Earth Rooster, excellence is not a goal but a way of being.

Earth Roosters often become recognized authorities in their fields because their combination of expertise, reliability, and honest communication makes them natural reference points. Colleagues, clients, and organizations learn to trust their judgment, creating a professional reputation that grows steadily over decades of consistent, high-quality work.`,

    idealCareers: [
      'Quality Assurance Director',
      'Certified Public Accountant',
      'Master Craftsperson',
      'Agricultural Scientist',
      'Building Inspector',
      'Dental Surgeon',
      'Archivist/Curator',
      'Precision Engineer',
    ],

    financialStyle:
      'Earth Roosters are meticulous, conservative financial managers who track every expenditure and optimize every investment with characteristic precision. They maintain detailed budgets, research purchases thoroughly, and build savings with systematic discipline. Their financial weakness is a tendency toward excessive frugality — they may deprive themselves and their families of reasonable comforts in pursuit of financial optimization. The Earth Rooster who learns to balance financial prudence with quality-of-life spending achieves a much healthier relationship with money.',

    tips: [
      'Seek roles where your attention to detail and commitment to quality are recognized and rewarded. Professions in auditing, quality assurance, precision engineering, and specialized crafts leverage your natural strengths while providing the clear standards you thrive on.',
      'Develop your ability to give constructive feedback. Your critical eye is valuable, but its impact depends on how you communicate observations. Practice the skill of pointing out areas for improvement in ways that motivate rather than demoralize — focusing on specific, actionable suggestions rather than general criticism.',
      'Learn to prioritize effectively. Not every detail requires the same level of attention. Developing the judgment to distinguish between details that matter and those that do not allows you to direct your considerable energy toward maximum impact rather than exhaustive perfection.',
      'Build collaborative relationships that complement your individual excellence. Your tendency toward independent work can limit your impact. Partnerships with creative, big-picture thinkers who lack your execution skills can multiply the value of your precision exponentially.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Rooster is a devoted, hardworking partner who expresses affection through practical care and consistent, reliable presence. They are not naturally romantic in the conventional sense — they do not compose love poems or plan surprise getaways — but their love manifests through a steady, tangible commitment to their partner's wellbeing that is, in its own way, deeply romantic.

Earth Roosters approach relationships with the same thoroughness they bring to their professional lives. They are loyal, responsible, and deeply invested in building a stable, well-managed home. Their partner always knows where they stand, because the Earth Rooster's communication is characteristically direct and honest — sometimes painfully so, but always with the underlying intention of building something genuine and lasting.

The Earth Rooster's primary challenge in love is the balance between their standards and their partner's humanity. They must learn that love requires accepting imperfection — in their partner, in themselves, and in the relationship itself. The Earth Rooster who discovers that a "good enough" relationship filled with warmth and acceptance is far more fulfilling than a "perfect" relationship defined by criticism and control finds the deepest happiness their sign can achieve.`,

    loveStyle:
      'The Earth Rooster loves through quality care and practical devotion. They express affection by maintaining a well-ordered home, managing finances wisely, ensuring their partner\'s health and comfort, and showing up reliably through every challenge. Their love language is acts of service performed to a high standard — meals prepared thoughtfully, household responsibilities managed efficiently, problems solved promptly. They value honesty and directness in relationships and struggle with partners who play emotional games or withhold their true feelings. For the Earth Rooster, love is demonstrated through consistent, quality action rather than words or grand gestures.',

    idealPartnerTraits: [
      'Patient',
      'Warm and Affectionate',
      'Appreciative of Quality',
      'Emotionally Secure',
      'Honest',
    ],

    tips: [
      'Practice expressing appreciation more than criticism. Your natural tendency is to notice what could be improved, but your partner needs to hear what they are doing right. For every constructive observation, offer three genuine compliments or expressions of gratitude.',
      'Understand that your partner\'s way of doing things, while different from yours, is not necessarily wrong. Resist the urge to correct, reorganize, or improve your partner\'s approach to tasks. Allow them the autonomy to do things their own way, even when your way is objectively more efficient.',
      'Schedule quality time that is purely about connection, not productivity. Earth Roosters can turn every shared activity into a project to be optimized. Deliberately create time together where there is no task, no agenda, and no standard to meet — just being together.',
      'Express vulnerability as a form of intimacy. Sharing your doubts, fears, and moments of uncertainty with your partner deepens the relationship far more than maintaining a persona of competent efficiency. Let your partner see the human beneath the high standards.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Rooster possesses a constitution that rewards discipline and punishes neglect. In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen, while the Rooster's Metal nature connects to the Lungs and Large Intestine. This creates a constitution where digestive function and respiratory health are closely interlinked, and where both respond strongly to the regularity and quality of daily habits.

The most common Earth Rooster health pattern is stress-related tension manifesting in the digestive and respiratory systems. Their perfectionist nature generates chronic low-level stress that, over time, weakens the Spleen's transformative function and tightens the Lungs' capacity. The Earth Rooster who maintains rigorous health habits thrives; the one who neglects them in pursuit of professional standards deteriorates predictably.

The Earth Rooster's health strategy should leverage their natural discipline by establishing and maintaining regular health routines. They respond exceptionally well to structured approaches — meal schedules, exercise programs, and preventive health regimens — because their methodical nature turns health maintenance into a system they can optimize and perfect.`,

    bodyAreas: ['Lungs', 'Stomach', 'Large Intestine', 'Skin'],

    exercises: [
      'Morning calisthenics routine',
      'Precision sports (archery, golf)',
      'Structured gym programs',
      'Breathing exercises',
    ],

    dietTips: [
      'Build a meal routine based on regular timing and consistent quality. The Earth Rooster\'s digestive system thrives on predictability. Prepare meals at fixed times using quality ingredients, treating nutrition as a craft worthy of the same attention you bring to your professional work.',
      'Support lung health with white foods: pears, white mushrooms, daikon radish, cauliflower, and almonds. The Metal-associated Lung organs benefit from these foods in TCM tradition, and the Earth Rooster\'s respiratory sensitivity makes this dietary focus particularly important.',
      'Avoid processed foods and low-quality ingredients. The Earth Rooster\'s constitution is particularly sensitive to food quality — their system responds noticeably better to whole, fresh, carefully prepared foods than to processed alternatives.',
      'Incorporate fermented foods to support digestive health. Kimchi, sauerkraut, miso, and natural yogurt provide beneficial bacteria that strengthen the Earth Rooster\'s Spleen function and support their Metal-associated Large Intestine.',
    ],

    mentalHealth:
      'The Earth Rooster\'s primary mental health challenge is perfectionist anxiety — the chronic stress that comes from holding oneself and the world to impossibly high standards. This anxiety is often not recognized as such because it presents as "just being thorough" or "caring about quality," but beneath the productive surface lies a fear of failure and judgment that drives relentless self-criticism. The Earth Rooster who learns to distinguish between excellence (a healthy pursuit) and perfectionism (a fear-based compulsion) makes a breakthrough that transforms their mental health. Cognitive behavioral therapy is particularly effective for this sign, as its structured approach to identifying and challenging distorted thinking patterns resonates with their analytical mind. Mindfulness practices that emphasize acceptance — particularly of imperfection — provide a powerful counterbalance to the Rooster\'s critical nature. The Earth Rooster benefits enormously from close relationships with people who model self-acceptance and demonstrate that being loved does not require being perfect.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [5, 7, 8],
    colors: ['Golden Brown', 'Cream', 'Terracotta'],
    direction: 'West',
    gemstones: ['Topaz', 'Tiger\'s Eye', 'Carnelian'],
    flowers: ['Gladiolus', 'Impatiens', 'Cockscomb'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH ROOSTERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Thierry Henry',
        profession: 'Football Legend',
        birthYear: 1969,
        description:
          'Thierry Henry\'s precise, methodical brilliance on the football pitch reflects the Earth Rooster\'s combination of technical mastery and disciplined execution. His meticulous finishing, strategic positioning, and relentless pursuit of perfection in his craft embody the sign\'s commitment to practical excellence at the highest level.',
      },
      {
        name: 'Jay-Z',
        profession: 'Rapper/Entrepreneur',
        birthYear: 1969,
        description:
          'Jay-Z\'s evolution from rapper to billionaire business mogul demonstrates the Earth Rooster\'s gift for systematic excellence and strategic building. His meticulous attention to brand quality, disciplined business expansion, and ability to maintain high standards across diverse ventures reflect the sign\'s characteristic combination of precision and practical ambition.',
      },
      {
        name: 'Jennifer Aniston',
        profession: 'Actress/Producer',
        birthYear: 1969,
        description:
          'Jennifer Aniston\'s enduring career, built on consistent quality work and shrewd professional choices, exemplifies the Earth Rooster\'s patient approach to lasting success. Her maintained relevance across three decades demonstrates the sign\'s ability to sustain high standards and adapt methodically while remaining true to core strengths.',
      },
      {
        name: 'Matthew McConaughey',
        profession: 'Actor',
        birthYear: 1969,
        description:
          'Matthew McConaughey\'s "McConaissance" — a deliberate, strategic reinvention of his career through carefully chosen roles of increasing depth and quality — perfectly illustrates the Earth Rooster\'s capacity for disciplined self-improvement. His methodical transformation from light comedy to Oscar-winning drama reflects the sign\'s belief that excellence is built through patient, purposeful effort.',
      },
      {
        name: 'Gwen Stefani',
        profession: 'Singer/Fashion Designer',
        birthYear: 1969,
        description:
          'Gwen Stefani\'s dual career in music and fashion demonstrates the Earth Rooster\'s meticulous attention to aesthetic detail and practical craftsmanship. Her ability to maintain distinctive quality across multiple creative domains reflects the sign\'s disciplined work ethic and commitment to excellence in everything they produce.',
      },
      {
        name: 'Tyler Perry',
        profession: 'Director/Producer/Actor',
        birthYear: 1969,
        description:
          'Tyler Perry\'s self-made entertainment empire — built through methodical persistence and an unerring understanding of his audience — exemplifies the Earth Rooster\'s practical excellence and disciplined work ethic. His systematic approach to content creation and his hands-on involvement in every aspect of production reflect the sign\'s characteristic thoroughness and quality control.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rooster holds an honored position in Chinese mythology as the herald of dawn — the creature whose cry summons the sun and banishes the darkness. In traditional Chinese cosmology, the Rooster is associated with the earthly branch You (酉), representing the hours of 5-7 PM when the setting sun's golden light resembles the Rooster's magnificent plumage. The Rooster symbolizes punctuality, diligence, and the courage to speak truth — qualities the Chinese cultural tradition has long revered.

When the Earth element grounds this proud, watchful bird, the mythological significance expands to include guardianship of the harvest and the practical fruits of disciplined labor. The Earth Rooster in traditional Chinese thought represented the culmination of the agricultural cycle — the moment when careful, sustained effort produced tangible abundance. Earth Rooster years were considered auspicious for completing projects, harvesting investments, and receiving the rewards of patient, quality work. The Earth Rooster was also associated with ancestral wisdom — the accumulated knowledge of generations of practical experience passed down through careful stewardship.`,

    symbolism: `The Earth Rooster symbolizes diligence rewarded and excellence achieved through disciplined practice. In Wu Xing symbolism, this combination represents the productive synergy between Earth's nurturing stability and Metal's precise order — the fertile ground from which perfectionist craft emerges. The Rooster's call at dawn, grounded by Earth's stability, becomes a metaphor for reliable awakening — the consistent, dependable voice that others can set their lives by.

The Earth Rooster also symbolizes practical beauty — the understanding that the most satisfying aesthetic emerges from functional excellence rather than superficial decoration. A well-built home, a perfectly prepared meal, a meticulously maintained garden — these are the Earth Rooster's expressions of beauty, where form follows function and craftsmanship speaks louder than ornament.`,

    modernInterpretation: `In contemporary culture, the Earth Rooster archetype resonates with the revival of appreciation for craftsmanship, quality, and expertise. In an era of mass production and disposable goods, the Earth Rooster represents the artisan, the specialist, and the professional who maintains standards that others have abandoned in pursuit of speed and scale.

The Earth Rooster's modern relevance extends to conversations about integrity in professional life. As institutions grapple with declining trust and increasing cynicism, the Earth Rooster archetype offers a model of earned credibility — the professional whose reputation is built not on self-promotion or clever branding but on the observable, consistent quality of their work and the absolute reliability of their word.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
