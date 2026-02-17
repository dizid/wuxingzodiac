// ============================================
// WOOD DRAGON (甲辰) — The Creative Titan
// ============================================
// The Wood Dragon tempers the Dragon's imperial ambition
// with Wood's collaborative creativity, producing a
// visionary builder who inspires rather than commands.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-dragon',
  profile: getProfileBySlug('wood-dragon')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Dragon is the most magnanimous and creatively gifted of all Dragon-element combinations. The Dragon — already the zodiac's most powerful and mythologically significant animal — is enriched by the Wood element's gifts of empathy, collaboration, and organic growth. Where other Dragon types can be autocratic and self-centered, the Wood Dragon channels their formidable energy toward building something greater than themselves.

People born under this sign radiate a warm, expansive charisma that draws others into their orbit. They are natural visionaries who see potential everywhere and possess the rare ability to articulate their vision in ways that make others want to join them. The Wood Dragon does not simply dream big — they create frameworks for those dreams to grow, inviting others to contribute their own talents and perspectives. This collaborative approach to ambition makes the Wood Dragon uniquely effective at building lasting enterprises.

What sets the Wood Dragon apart from other Dragon types is their willingness to share the stage. Pure Dragons crave recognition and dominion; the Wood Dragon craves impact and growth. They derive genuine satisfaction from developing others' talents, watching ideas evolve beyond their original conception, and creating systems that generate value long after the initial spark of inspiration. This generosity of spirit, combined with the Dragon's innate power, produces a figure of enormous influence and lasting legacy.`,

    coreTraits: [
      'Visionary',
      'Magnanimous',
      'Creative',
      'Ambitious',
      'Collaborative',
      'Expansive',
    ],

    strengths: [
      {
        trait: 'Visionary Thinking',
        description:
          'The Wood Dragon sees the big picture with astonishing clarity. They grasp the connections between seemingly unrelated ideas, anticipate trends before they materialize, and envision futures that others cannot yet imagine. This visionary capacity, grounded by Wood\'s practical growth orientation, produces ideas that are both inspiring and achievable.',
      },
      {
        trait: 'Magnetic Generosity',
        description:
          'The Wood Dragon is extraordinarily generous — with resources, credit, opportunities, and emotional support. This generosity is not performative but genuine, rooted in the Wood element\'s natural benevolence and the Dragon\'s abundant energy. People sense this authenticity and respond with deep loyalty and commitment.',
      },
      {
        trait: 'Creative Innovation',
        description:
          'The combination of Dragon power and Wood creativity produces a person capable of genuine innovation. Wood Dragons do not just improve existing ideas; they conceive entirely new paradigms. Their creative thinking is bold, practical, and deeply original — they are the founders, architects, and visionaries who reshape industries and institutions.',
      },
      {
        trait: 'Empowering Leadership',
        description:
          'Unlike more domineering Dragon types, the Wood Dragon leads by empowering others. They identify talent, create opportunities for growth, and build teams where everyone contributes at their highest level. This approach produces results that no single person — no matter how brilliant — could achieve alone.',
      },
    ],

    challenges: [
      {
        trait: 'Overambition',
        description:
          'The Dragon\'s limitless ambition combined with Wood\'s expansive growth energy can produce plans of unrealistic scope. The Wood Dragon may take on projects that are too large, make promises they cannot keep, or set expectations that even their considerable abilities cannot meet. Learning to scale their ambitions to available resources is an ongoing challenge.',
      },
      {
        trait: 'Difficulty with Details',
        description:
          'The Wood Dragon\'s focus on the big picture can leave critical details unattended. They may launch grand initiatives without adequate planning, overlook logistical challenges, or grow impatient with the mundane execution work that turns vision into reality. They need detail-oriented partners to complement their strategic thinking.',
      },
      {
        trait: 'Pride',
        description:
          'Despite their generosity, the Wood Dragon carries the Dragon\'s essential pride. Criticism, even when constructive, can wound them deeply, and they may struggle to acknowledge mistakes or accept help when they are struggling. This pride can isolate them at precisely the moments when they most need support.',
      },
      {
        trait: 'Controlling Tendencies',
        description:
          'The Wood Dragon\'s collaborative spirit has limits. When their vision is challenged or their authority questioned, the Dragon\'s domineering nature can surface, overriding Wood\'s diplomatic instincts. They may subtly steer group decisions toward predetermined outcomes while maintaining the appearance of consensus.',
      },
    ],

    elementInfluence: `Wood's influence on the Dragon is profoundly beneficial. The Dragon is an Earth-associated creature in Chinese cosmology — powerful, commanding, and grounded in authority. Wood's relationship with Earth in the productive cycle is complex: Wood overcomes Earth through the penetrating force of roots. In the Wood Dragon, this manifests not as destructive conflict but as the creative disruption of stagnant structures. The Wood element breaks up the Dragon's tendency toward rigid authority, replacing it with dynamic, organic leadership. Wood adds the dimensions of growth, collaboration, and genuine concern for others' development — qualities that transform the Dragon from a solitary ruler into a community builder. The result is a Dragon who commands not through fear but through inspiration, whose power flows not from dominion but from the living energy of shared purpose.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Dragon's compatibility profile reflects their need for partners who can match their ambition while appreciating their collaborative spirit. They need someone strong enough to stand beside them as an equal, wise enough to temper their overreach, and generous enough to share in both the spotlight and the work. The Dragon belongs to the first trine alongside the Rat and the Monkey, sharing these animals' ambition, optimism, and action-oriented nature.

The Wood element expands the Dragon's compatibility by adding empathy and flexibility to their interactions. However, the Wood Dragon still needs a partner who can handle their intensity and who respects the grand scale on which they operate.`,

    bestMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 91,
        summary:
          'A powerful first-trine pairing where the Water Rat\'s strategic brilliance complements the Wood Dragon\'s visionary ambition. Water nourishes Wood, creating a relationship where the Rat\'s resourcefulness sustains the Dragon\'s growth. The Rat provides the tactical intelligence the Dragon needs to turn grand visions into reality, while the Dragon offers the Rat a stage worthy of their talents.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 88,
        summary:
          'A dynamic first-trine alliance of two brilliant, ambitious minds. The Fire Monkey\'s inventive daring and quick adaptability energize the Wood Dragon\'s creative vision — Wood feeds Fire, creating a productive flow where the Dragon\'s ideas fuel the Monkey\'s ingenious execution. Both signs thrive on innovation and refuse to accept the status quo.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 85,
        summary:
          'A deeply complementary pairing where the Water Snake\'s intuitive wisdom and strategic patience balance the Wood Dragon\'s expansive ambition. Water nourishes Wood, and the Snake\'s perceptive nature helps the Dragon refine their vision. The Snake provides depth and subtlety that the Dragon admires, while the Dragon offers the Snake a larger purpose and platform.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 30,
        summary:
          'The Dragon and Dog sit in direct opposition on the zodiac wheel, creating fundamental tension between the Dragon\'s ambition and the Dog\'s skepticism. The Earth Dog questions the Wood Dragon\'s grand visions and challenges their authority — behaviors that trigger the Dragon\'s pride. While both signs value loyalty, they define and express it very differently.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 35,
        summary:
          'Two immensely strong-willed signs locked in a struggle for control. The Metal Ox\'s rigid determination and methodical approach clashes with the Wood Dragon\'s dynamic, expansive style. Metal cuts Wood, creating an energetic friction where the Ox\'s structured criticism feels like an attack on the Dragon\'s creative vision.',
      },
      {
        slug: 'metal-rabbit',
        name: 'Metal Rabbit',
        score: 40,
        summary:
          'The Metal Rabbit\'s refined sensibilities and need for peace are overwhelmed by the Wood Dragon\'s intense energy and grand ambitions. Metal overcomes Wood, creating a dynamic where the Rabbit\'s sharp discernment feels critical rather than supportive. The Dragon\'s scale and intensity exhausts the Rabbit\'s delicate constitution.',
      },
    ],

    elementAffinity: `The Wood Dragon thrives with Water-element partners, who nourish their growth and provide the emotional depth and strategic insight that complements the Dragon's visionary nature. Fire-element partners create exciting, productive dynamics — Wood feeds Fire — though both must guard against burning too hot. Earth-element partners can provide grounding, but the relationship may develop power dynamics as Wood overcomes Earth. Metal-element partners present the greatest challenge, as Metal cuts Wood — these relationships can feel combative, with the Metal partner's criticism constantly pruning the Wood Dragon's expansive growth.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Dragon is built for leadership, innovation, and building things at scale. They are not suited for subordinate roles, repetitive work, or environments that punish initiative. The Wood Dragon needs a career that matches the scale of their vision — something that challenges them intellectually, allows them to create and lead, and produces results they can be genuinely proud of.

Their ideal professional environment is one that values innovation, rewards ambition, and provides the resources to pursue significant goals. Wood Dragons excel as founders, creative directors, and organizational leaders — roles where they can set the vision, assemble the team, and drive toward outcomes that change their industry or community. They are less effective in purely administrative or maintenance roles where the exciting work of creation has already been done.

Financially, Wood Dragons are natural wealth creators. Their ambition, vision, and ability to inspire investment create significant earning potential. However, their tendency toward grand gestures and large-scale thinking can also lead to overextension. The wisest Wood Dragons build financial reserves that can sustain them through the inevitable gaps between their great ventures.`,

    idealCareers: [
      'Startup Founder',
      'Creative Director',
      'Architect',
      'Film Director',
      'Tech Innovator',
      'Venture Capital Partner',
      'University Dean',
      'Urban Development Director',
    ],

    financialStyle:
      'Wood Dragons are ambitious, growth-oriented investors who think in terms of building empires rather than accumulating savings. They are attracted to opportunities that combine financial returns with creative or social impact, and they have a natural talent for raising capital and inspiring investment in their vision. Their financial weakness is overextension — they may invest too heavily in their own ventures, take on excessive debt to fund expansion, or neglect personal financial security while building something grand. The most successful Wood Dragons learn to balance their empire-building instincts with disciplined personal finance.',

    tips: [
      'Hire for your weaknesses, not just your needs. Your vision is extraordinary, but you need operational partners who handle the details, finances, and follow-through that your big-picture mind tends to overlook. A strong COO or operations manager is worth their weight in gold to a Wood Dragon.',
      'Practice the art of the minimum viable project. Your instinct is to build everything at maximum scale from the start, but the most successful ventures begin small, test assumptions, and scale based on real results. Launching lean is not a compromise — it is strategic wisdom.',
      'Create structured feedback loops. Your pride can make it difficult for others to give you honest feedback, which deprives you of essential information. Build formal mechanisms — regular reviews, anonymous surveys, trusted advisors — that ensure critical perspectives reach you despite your intimidating presence.',
      'Build personal financial resilience. Your career will involve bold ventures with uncertain outcomes. Having six to twelve months of personal expenses saved, separate from any business funds, gives you the freedom to take big swings without risking your stability.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Dragon in love is generous, devoted, and genuinely invested in their partner's growth and happiness. Unlike more domineering Dragon types who demand admiration, the Wood Dragon seeks a true partnership — a relationship between equals where both people challenge and inspire each other. They want a partner who has their own ambitions, their own passions, and the strength to hold their ground when the Dragon's intensity becomes overwhelming.

In relationships, the Wood Dragon is a grand romantic who expresses love through creation and growth. They build a life with their partner — literally and figuratively — investing in a shared home, shared projects, and a shared vision for the future. Their love is expressed through action: they support their partner's dreams, create opportunities for shared growth, and bring their considerable energy and creativity to the construction of a life together.

The Wood Dragon's challenge in love is learning to be small. Their natural scale is epic — grand gestures, big plans, sweeping declarations — but intimacy often requires smallness: quiet moments, whispered vulnerabilities, the willingness to be ordinary together. The Wood Dragon who learns to be present in the small moments discovers a depth of connection that even their grandest gestures cannot create.`,

    loveStyle:
      'The Wood Dragon loves generously, ambitiously, and with genuine investment in their partner\'s growth. They are romantic builders who express affection through creating a magnificent shared life — beautiful homes, exciting adventures, and a partnership that grows richer over time. Their love is demonstrative and action-oriented: they show devotion through what they build, what they provide, and how they champion their partner\'s dreams. They need a partner who is strong, independent, and capable of both matching their energy and grounding their occasional excess.',

    idealPartnerTraits: [
      'Strong and Independent',
      'Intellectually Ambitious',
      'Emotionally Grounded',
      'Appreciates Grand Gestures',
      'Growth-Oriented',
    ],

    tips: [
      'Make space for your partner\'s vision, not just your own. Your natural tendency is to be the visionary in the relationship, but the healthiest Wood Dragon partnerships are those where both people\'s dreams receive equal attention and support.',
      'Practice being vulnerable about your failures, not just proud of your successes. Your partner needs to see the full you — including the doubt, the fear, and the disappointment that your public persona conceals. This vulnerability is the foundation of true intimacy.',
      'Resist the urge to solve every problem your partner brings to you. Sometimes they need empathy, not strategy. Ask whether they want your advice or your presence before defaulting to fix-it mode.',
      'Create rituals of small, ordinary connection. Daily check-ins, shared meals without screens, weekend walks — these unremarkable moments are where the deepest bonds are built. Not every moment of your relationship needs to be legendary.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Dragon possesses tremendous vitality — their natural energy reserves are among the highest in the zodiac. They can sustain demanding schedules, push through physical challenges, and recover from setbacks with impressive speed. However, their very abundance of energy can become problematic when it is not properly channeled or when they push beyond even their considerable limits.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Dragon's Earth association connects to the spleen and digestive system. The Wood Dragon's primary health vulnerability is liver yang rising — a pattern of excess upward energy that manifests as headaches, high blood pressure, eye strain, irritability, and difficulty sleeping. This pattern is triggered by stress, overwork, and the frustration that arises when the Dragon's grand plans encounter obstacles.

The Wood Dragon's health strategy should emphasize moderation and channeled energy. Their bodies thrive on purposeful activity but suffer from both excess and stagnation. Regular exercise, adequate rest, and conscious stress management keep their powerful engine running smoothly. The Dragon who treats their body with the same strategic care they apply to their professional ventures enjoys extraordinary vitality throughout life.`,

    bodyAreas: ['Liver', 'Eyes', 'Cardiovascular System', 'Musculoskeletal System'],

    exercises: [
      'Swimming or water sports',
      'Dragon boat racing or rowing',
      'Power yoga or dynamic flexibility',
      'Competitive team sports',
    ],

    dietTips: [
      'Balance your naturally yang constitution with cooling, nourishing foods. The Wood Dragon\'s abundant energy generates internal heat that needs regular cooling — incorporate cucumbers, celery, watermelon, and green tea into your daily diet.',
      'Support liver health with cruciferous vegetables, beets, and bitter greens. The liver is the Wood Dragon\'s most important organ, and dietary support prevents the stagnation and excess that trigger their most common health complaints.',
      'Eat regular, balanced meals rather than skipping food during intense work periods. The Wood Dragon\'s tendency to prioritize projects over meals leads to blood sugar crashes that amplify irritability and undermine their natural stamina.',
      'Moderate alcohol consumption carefully. The Wood Dragon\'s social nature and celebratory spirit can lead to regular drinking that burdens the liver. Their powerful constitution masks the damage until it becomes significant — proactive moderation is far wiser than reactive treatment.',
    ],

    mentalHealth:
      'The Wood Dragon\'s primary mental health challenge is managing the gap between their expansive vision and the inevitable limitations of reality. When projects fail, relationships disappoint, or their grand plans encounter immovable obstacles, the Dragon can experience a particular form of despair that is proportional to their ambition — the higher they aimed, the harder the fall. This pattern can manifest as depression, withdrawal, or an escalating cycle of increasingly risky ventures designed to recapture the feeling of momentum. The Wood Dragon benefits from developing a philosophical perspective that accommodates failure as part of the creative process, not as evidence of personal inadequacy. Mindfulness practices, strategic mentorship from experienced leaders, and creative outlets that allow for experimentation without high stakes all support the Wood Dragon\'s psychological resilience. They should also guard against the isolating effects of pride — reaching out for help during difficult periods is not weakness but wisdom.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 6, 7],
    colors: ['Green', 'Gold', 'Azure'],
    direction: 'East',
    gemstones: ['Emerald', 'Amber', 'Citrine'],
    flowers: ['Dragon Tree', 'Lotus', 'Orchid'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD DRAGONS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Adele',
        profession: 'Singer/Songwriter',
        birthYear: 1988,
        description:
          'Adele\'s extraordinary vocal power and emotional depth, combined with her ability to connect with audiences worldwide, exemplifies the Wood Dragon\'s magnetic charisma and creative brilliance. Her willingness to share raw emotional vulnerability through music reflects the Wood element\'s compassionate influence on the Dragon\'s naturally proud nature.',
      },
      {
        name: 'Rihanna',
        profession: 'Singer/Entrepreneur',
        birthYear: 1988,
        description:
          'Rihanna\'s evolution from pop star to global fashion and beauty mogul demonstrates the Wood Dragon\'s visionary ambition and empire-building instincts. Her Fenty brand\'s revolutionary approach to inclusivity reflects the Wood element\'s generous, community-minded spirit applied to the Dragon\'s natural business acumen.',
      },
      {
        name: 'Emma Stone',
        profession: 'Actress',
        birthYear: 1988,
        description:
          'Emma Stone\'s combination of comedic brilliance, dramatic depth, and genuine warmth reflects the Wood Dragon\'s versatile creativity and empathetic charisma. Her Oscar-winning performances demonstrate the sign\'s ability to channel immense talent through emotional authenticity rather than pure technical prowess.',
      },
      {
        name: 'Jesse Eisenberg',
        profession: 'Actor/Playwright',
        birthYear: 1988,
        description:
          'Jesse Eisenberg\'s intense intellectual energy and creative range — from Oscar-nominated performances to published novels and plays — reflect the Wood Dragon\'s combination of ambitious vision and artistic sensitivity. His willingness to take creative risks across multiple disciplines demonstrates the sign\'s expansive creative spirit.',
      },
      {
        name: 'Che Guevara',
        profession: 'Revolutionary Leader',
        birthYear: 1928,
        description:
          'Che Guevara\'s revolutionary vision, magnetic charisma, and unwavering commitment to social transformation exemplify the Wood Dragon\'s combination of idealistic ambition and compassionate purpose. His ability to inspire mass movements through sheer force of conviction reflects the Dragon\'s natural authority channeled through Wood\'s concern for collective welfare.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dragon is the fifth animal of the Chinese zodiac and the only mythical creature among the twelve. In Chinese culture, the Dragon is not the fearsome, treasure-hoarding beast of Western mythology but a divine, benevolent creature associated with imperial authority, cosmic power, and the life-giving force of rain and rivers. The Dragon is the supreme symbol of yang energy — creative, dynamic, and transformative. Emperors claimed the Dragon as their personal symbol, and to be born in a Dragon year is considered the greatest astrological blessing in Chinese tradition.

When combined with the Wood element, the Dragon takes on the qualities of the Green Dragon (青龙), the guardian of the East and the embodiment of spring's creative force. In classical Chinese cosmology, the Green Dragon represents the power of new growth — the force that drives life upward through darkness into light. The Wood Dragon thus embodies creation at its most dynamic: not the static power of established authority, but the explosive energy of emergence, innovation, and the birth of the new.`,

    symbolism: `The Wood Dragon symbolizes creative power in service of growth — the idea that true authority lies not in domination but in the ability to generate new possibilities and nurture them to fruition. In traditional Chinese symbolism, the Dragon represents the highest form of yang energy: transcendent, auspicious, and world-shaping. Wood adds the dimension of organic growth, transforming this cosmic power into something more accessible and collaborative.

The Wood Dragon is also a powerful symbol of generative leadership — the kind that creates not followers but other leaders. Like a great tree whose seeds produce entire forests, the Wood Dragon's influence multiplies through the people they inspire and develop. This makes the Wood Dragon one of the most auspicious signs in the entire 60-year cycle, combining the Dragon's sovereign power with Wood's life-giving creative force.`,

    modernInterpretation: `In contemporary culture, the Wood Dragon archetype resonates with the emergence of a new model of leadership — one that combines ambitious vision with genuine concern for the communities and ecosystems affected by that vision. The Wood Dragon is the social entrepreneur, the purpose-driven founder, the creative director who builds brands that mean something — leadership that creates value for many, not just wealth for one.

The 1988 Wood Dragon generation has produced cultural figures who embody this integration of power and purpose. Artists like Adele and Rihanna have used their Dragon-scale talent not just for personal fame but to create platforms, brands, and movements that empower others. This generation demonstrates the Wood Dragon's promise: that the greatest legacy is not what you build for yourself but what you enable others to become.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
