// ============================================
// WOOD MONKEY (甲申) — The Inventive Trickster
// ============================================
// The Wood Monkey merges the Monkey's brilliant wit and
// versatility with Wood's compassion and ethical growth,
// creating an inventive mind that uses cleverness to
// build and connect rather than merely to outwit.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-monkey',
  profile: getProfileBySlug('wood-monkey')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Monkey is the most principled and collaborative of all Monkey-element combinations. The Monkey — already renowned for its dazzling intelligence, quick wit, and improvisational genius — gains moral depth, creative purpose, and genuine empathy through the Wood element's influence. Where other Monkey types can be manipulative or self-serving in their cleverness, the Wood Monkey channels their formidable mental agility toward building things that benefit both themselves and their community.

People born under this sign possess an extraordinary combination of inventiveness and integrity. They are the innovators who ask not just "Can we do this?" but "Should we do this?" Their minds work at remarkable speed, generating ideas, spotting patterns, and solving problems with a playful brilliance that makes complex challenges look easy. But the Wood element adds a conscience to this cleverness — the Wood Monkey uses their talents to create, connect, and improve rather than simply to win or impress.

What distinguishes the Wood Monkey is their ability to make serious work feel like play. They approach even the most daunting challenges with humor, curiosity, and a creative energy that transforms obstacles into puzzles and failures into learning opportunities. This lightness is not superficiality — it is a genuine philosophical orientation that believes the best solutions emerge from enjoyment, collaboration, and the willingness to try unconventional approaches.`,

    coreTraits: [
      'Inventive',
      'Witty',
      'Compassionate',
      'Versatile',
      'Principled',
      'Curious',
    ],

    strengths: [
      {
        trait: 'Brilliant Problem-Solving',
        description:
          'The Wood Monkey approaches problems with a unique combination of analytical precision and creative leaps. They see connections that others miss, generate solutions that others would never consider, and execute with a speed and adaptability that keeps them ahead of changing circumstances. Their problem-solving is made even more effective by Wood\'s collaborative instinct — they readily incorporate others\' perspectives into their thinking.',
      },
      {
        trait: 'Ethical Innovation',
        description:
          'Unlike more purely self-interested Monkey types, the Wood Monkey channels their inventive genius toward solutions that create shared value. They are natural social innovators — the entrepreneurs, designers, and thinkers who find ways to solve problems that serve both commerce and community. This ethical dimension gives their work a lasting quality that purely clever solutions lack.',
      },
      {
        trait: 'Magnetic Humor',
        description:
          'The Wood Monkey is genuinely funny — quick, observant, and gifted with timing that turns ordinary moments into comedy. Their humor is inclusive rather than cutting, warm rather than sarcastic, and serves to build connection rather than establish dominance. This quality makes them beloved social figures and effective communicators who can make even difficult messages palatable.',
      },
      {
        trait: 'Adaptive Learning',
        description:
          'The Wood Monkey learns faster than almost any other sign. They absorb new information, master new skills, and adapt to new environments with astonishing speed. The Wood element adds depth to this natural ability — the Wood Monkey does not just skim surfaces but develops genuine understanding, building a body of knowledge that grows richer and more interconnected over time.',
      },
    ],

    challenges: [
      {
        trait: 'Restless Boredom',
        description:
          'The Wood Monkey\'s quick mind demands constant stimulation. When unchallenged — in a routine job, a predictable relationship, or a stable but unstimulating environment — they become restless, irritable, and prone to creating drama simply to generate the excitement they crave. Learning to find depth and meaning in stability is an ongoing challenge.',
      },
      {
        trait: 'Scattered Energy',
        description:
          'The Wood Monkey\'s versatility can become a liability when it prevents them from committing to a single path. They start projects with infectious enthusiasm, then abandon them when something more interesting appears. Wood\'s growth energy amplifies this tendency, as every new direction looks like a promising branch worth exploring.',
      },
      {
        trait: 'Competitive Edge',
        description:
          'Despite their collaborative nature, the Wood Monkey retains the Monkey\'s competitive instinct. They want to be the smartest person in the room, and when they are not, they can become subtly undermining — using humor to diminish rivals, reframing situations to highlight their own contributions, or withdrawing when they feel intellectually outmatched.',
      },
      {
        trait: 'Emotional Deflection',
        description:
          'The Wood Monkey uses humor and intellectual analysis to avoid emotional vulnerability. When conversations turn deeply personal, they redirect with a joke. When they feel hurt, they analyze rather than feel. This deflection protects them from emotional pain but also prevents the deep connections they genuinely desire.',
      },
    ],

    elementInfluence: `Wood's influence on the Monkey is deeply grounding. The Monkey is associated with Metal in Chinese cosmology — sharp, clever, and focused on the material world. Wood's relationship with Metal is challenging: Metal cuts Wood in the destructive cycle, meaning the Monkey's natural Metal energy can work against Wood's compassionate, growth-oriented influence. In the Wood Monkey, this tension manifests as an internal dialogue between cleverness and conscience, ambition and ethics, personal gain and community benefit. When this tension is resolved constructively, the Wood Monkey becomes one of the zodiac's most effective and admirable signs — brilliant and kind, successful and generous, innovative and responsible. The Wood element softens the Monkey's harder edges and provides a moral framework that gives their considerable talents direction and purpose.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Monkey's compatibility profile reflects their need for intellectual stimulation, emotional warmth, and a partner who can keep up with their quick mind while providing the grounding they need. They seek someone who appreciates both their brilliance and their heart — a partner who is smart enough to be a worthy companion and kind enough to create the emotional safety the Wood Monkey rarely admits they need. The Monkey belongs to the first trine alongside the Rat and the Dragon, sharing these animals' ambition, optimism, and action-oriented nature.

The Wood element makes the Wood Monkey more emotionally accessible and collaborative than other Monkey types, expanding their compatibility with signs that might find a pure Metal or Water Monkey too sharp or detached.`,

    bestMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 92,
        summary:
          'A brilliant first-trine pairing of two exceptionally clever minds. The Water Rat\'s strategic depth and emotional intelligence complement the Wood Monkey\'s inventive brilliance — Water nourishes Wood, sustaining the Monkey\'s growth. Both signs share a love of intellectual play, social engagement, and building networks of mutual benefit. Their conversations are legendary.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 88,
        summary:
          'A powerful first-trine alliance where the Earth Dragon\'s grounded ambition provides a stable platform for the Wood Monkey\'s creative energy. The Dragon\'s visionary leadership is perfectly complemented by the Monkey\'s inventive problem-solving. Together, they dream big and have the combined intelligence and drive to turn those dreams into reality.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 84,
        summary:
          'An intellectually stimulating partnership where the Water Snake\'s deep wisdom and strategic patience balance the Wood Monkey\'s quick, inventive energy. Water nourishes Wood, and the Snake\'s perceptive nature helps the Monkey focus their scattered brilliance. Both signs respect intelligence and enjoy the mental chess of their interactions.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 30,
        summary:
          'The Monkey and Tiger sit in opposition on the zodiac wheel, and Fire\'s consuming energy intensifies this clash. The Fire Tiger\'s direct, action-oriented approach conflicts with the Wood Monkey\'s indirect, playful style. The Tiger sees the Monkey as evasive and unreliable; the Monkey sees the Tiger as impulsive and inflexible. Trust is difficult to build between these fundamentally different temperaments.',
      },
      {
        slug: 'metal-pig',
        name: 'Metal Pig',
        score: 35,
        summary:
          'The Metal Pig\'s earnest sincerity and straightforward emotional expression clashes with the Wood Monkey\'s wit-driven communication style. Metal cuts Wood, and the Pig\'s blunt honesty can wound the Monkey\'s pride. The Monkey\'s playful approach to life feels flippant to the Pig, who values seriousness and authenticity above cleverness.',
      },
      {
        slug: 'earth-snake',
        name: 'Earth Snake',
        score: 40,
        summary:
          'Two strategic minds that compete rather than collaborate. The Earth Snake\'s secretive, patient approach fundamentally conflicts with the Wood Monkey\'s transparent, rapid-fire style. Each suspects the other of hidden agendas, and their different tempos — the Monkey\'s speed versus the Snake\'s patience — create friction that erodes mutual respect.',
      },
    ],

    elementAffinity: `The Wood Monkey thrives with Water-element partners, who nourish their growth and provide emotional depth that softens their intellectual edges. Fire-element partners are stimulating — Wood feeds Fire — creating exciting partnerships, though both must guard against burning too hot. Earth-element partners provide grounding stability that the scattered Monkey often needs. Metal-element partners present a complex dynamic: while the Monkey is naturally Metal-affiliated, the Wood element creates tension with Metal energy that can feel like an internal conflict between their clever instincts and their compassionate ideals.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Monkey is built for careers that reward creativity, adaptability, and innovative thinking. They excel in environments that change rapidly, value clever solutions, and provide the intellectual stimulation their restless mind demands. The Wood Monkey is the colleague who sees the angle no one else considered, the entrepreneur who finds opportunity in chaos, and the leader who keeps the team engaged through humor and inspiration.

Their ideal work environment is fast-paced, collaborative, and meritocratic — a place where good ideas win regardless of who generates them. The Wood Monkey struggles in rigid hierarchies, repetitive roles, and environments where political maneuvering matters more than actual talent. They need the freedom to innovate, the autonomy to work in their own style, and the stimulation of problems worth solving.

Financially, the Wood Monkey is resourceful and often quite successful. Their quick mind spots opportunities that others miss, and their versatility allows them to pivot when circumstances change. However, their tendency toward boredom can lead to impulsive financial decisions — chasing the excitement of a new venture rather than nurturing the returns of an established one. The wisest Wood Monkeys learn to balance their love of novelty with the discipline of long-term wealth building.`,

    idealCareers: [
      'Software Developer or Tech Innovator',
      'Creative Director',
      'Science Communicator',
      'Game Designer',
      'Social Enterprise Founder',
      'Comedy Writer or Performer',
      'Innovation Consultant',
      'Renewable Energy Engineer',
    ],

    financialStyle:
      'The Wood Monkey is a resourceful, opportunity-driven earner who combines the Monkey\'s natural financial acuity with Wood\'s growth-oriented perspective. They are attracted to innovative investments, emerging industries, and opportunities that combine financial returns with positive impact. Their portfolio tends to be diversified and forward-looking, reflecting their ability to spot trends before they become mainstream. Their financial weakness is impulsive diversification — chasing too many opportunities simultaneously and failing to concentrate resources where they would generate the greatest returns.',

    tips: [
      'Commit to mastery in one domain. Your versatility is an asset, but deep expertise in a single area creates a foundation for all your other talents to build upon. The Wood Monkey who becomes world-class at one thing while remaining good at many others is unstoppable.',
      'Channel your competitive instinct toward self-improvement rather than outperforming colleagues. You are at your best when competing against your own previous standard rather than trying to be the smartest person in the room. This shift turns competition from a social liability into a growth engine.',
      'Use your humor strategically in professional settings. Your wit is a powerful communication tool, but it needs calibration — too much levity can undermine your credibility on serious matters. Learn to read the room and deploy humor where it builds connection rather than creating distance.',
      'Build systems for follow-through. Your ideas are excellent, but your execution can be inconsistent. Create accountability structures — deadlines, partners, public commitments — that ensure your best ideas survive the initial excitement and reach completion.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Monkey in love is playful, inventive, and more emotionally generous than their wit-first persona might suggest. They approach romance as they approach everything else — with curiosity, humor, and a creative energy that keeps the relationship fresh and stimulating. The Wood Monkey is the partner who plans the unexpected date, invents couple traditions, and finds ways to make even ordinary moments feel like adventures.

In relationships, the Wood Monkey is more devoted than their reputation suggests. While other Monkey types can be fickle and commitment-averse, the Wood element adds depth and loyalty to their romantic nature. Once a Wood Monkey finds a partner who genuinely engages their mind and heart, they become surprisingly constant — still playful and independent, but fundamentally committed to the partnership.

The Wood Monkey's challenge in love is vulnerability. Their default mode is charm and humor — delightful qualities, but ones that can function as armor against deeper emotional engagement. The Wood Monkey who learns to drop the comedy routine and show their genuine feelings — including fear, sadness, and need — discovers a level of intimacy that their entertaining surface could never access.`,

    loveStyle:
      'The Wood Monkey loves through playfulness, intellectual engagement, and creative surprises. They are lively, entertaining partners who keep relationships stimulating and fun. Their affection is expressed through inventive gestures, witty communication, and a genuine interest in their partner\'s inner world. They need a partner who is smart enough to match their banter, patient enough to wait for their emotional vulnerability, and secure enough to enjoy their independence without feeling threatened.',

    idealPartnerTraits: [
      'Intellectually Sharp',
      'Emotionally Secure',
      'Good Sense of Humor',
      'Independent and Confident',
      'Patient with Emotional Walls',
    ],

    tips: [
      'Let your partner see behind the performance. Your wit and charm are genuine, but they can function as a shield that prevents true intimacy. Practice sharing your real feelings — the unsorted, unpolished ones — with your partner. This vulnerability is what transforms a fun relationship into a profound one.',
      'Resist the urge to fix your partner\'s problems with clever solutions. Sometimes the most loving response is simply to listen and empathize rather than to analyze and solve. Your partner needs to feel heard, not debugged.',
      'Stay present in committed relationships rather than mentally exploring alternatives. Your quick mind can generate hypothetical relationship scenarios that undermine your appreciation for what you actually have. Practice gratitude for your partner\'s real qualities rather than imagining perfect theoretical ones.',
      'Create rituals of emotional connection. Regular, predictable moments of genuine intimacy — honest conversations, shared silence, physical closeness without performance — build the emotional foundation that your spontaneous, playful surface needs to rest upon.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Monkey's health profile reflects the tension between Wood's liver-centered energy and the Monkey's inherent Metal constitution. Their bodies are naturally quick, agile, and responsive, but this very responsiveness can make them susceptible to stress-related conditions when their active minds and restless habits push them beyond sustainable limits.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Monkey's Metal association connects to the lungs and large intestine. The Wood Monkey's primary health vulnerability is the strain created when Metal and Wood energies conflict — manifesting as tension between the lungs and liver, or between the need for structural discipline and the desire for creative freedom. Respiratory issues, digestive irregularities, and muscle tension are common when this internal conflict goes unresolved.

The Wood Monkey's health strategy should emphasize balance between activity and rest, between mental stimulation and physical grounding. Their bodies thrive on varied, engaging exercise and a diet that supports both liver and respiratory health. The key is consistency — the Wood Monkey's tendency to oscillate between intense activity and complete neglect undermines the steady, moderate approach their constitution actually needs.`,

    bodyAreas: ['Liver', 'Lungs', 'Nervous System', 'Hands and Wrists'],

    exercises: [
      'Climbing or bouldering',
      'Martial arts or parkour',
      'Tennis or racquet sports',
      'Interval training with variety',
    ],

    dietTips: [
      'Support both liver and lung health with a diet rich in leafy greens, pears, white mushrooms, garlic, and ginger. The Wood Monkey\'s dual Wood-Metal constitution benefits from foods that nourish both organ systems simultaneously.',
      'Include omega-3 fatty acids from fish, walnuts, and flaxseeds to support brain function and reduce inflammation. The Wood Monkey\'s extraordinarily active mind requires high-quality fuel to sustain its performance without burnout.',
      'Eat regular, grounded meals. The Wood Monkey\'s tendency to snack sporadically, eat while multitasking, or skip meals entirely when absorbed in projects undermines their digestive health and energy stability. Seated, mindful meals are medicine for this sign.',
      'Moderate caffeine and stimulants. The Wood Monkey\'s naturally wired nervous system does not need additional stimulation. Excessive coffee, energy drinks, or sugar amplify the restlessness and anxiety they are already prone to.',
    ],

    mentalHealth:
      'The Wood Monkey\'s primary mental health challenge is managing the restless, sometimes anxious energy generated by their overactive mind. They process information at extraordinary speed, which is a gift in professional contexts but can become torturous when that same processing power turns inward — generating worry, self-criticism, or obsessive analysis of social interactions. The Wood Monkey benefits from practices that quiet the mind without requiring stillness — walking meditation, creative flow states, and sports that demand full physical and mental engagement are more effective than traditional sitting meditation for this active sign. They should also be aware of their tendency to use humor as a defense against emotional pain. While this coping mechanism is functional, it can prevent the deeper emotional processing that leads to genuine resilience and growth. Therapy that combines intellectual engagement with emotional exploration — psychodynamic approaches or narrative therapy — tends to resonate with the Wood Monkey\'s cognitive style while gently challenging their emotional avoidance.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 7, 8],
    colors: ['Green', 'White', 'Gold'],
    direction: 'East',
    gemstones: ['Jade', 'Citrine', 'Clear Quartz'],
    flowers: ['Chrysanthemum', 'Allium', 'Bird of Paradise'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD MONKEYS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Miley Cyrus',
        profession: 'Singer/Actress',
        birthYear: 1992,
        description:
          'Miley Cyrus\'s fearless reinvention, versatile talent, and willingness to challenge conventions embody the Wood Monkey\'s inventive spirit and creative courage. Her evolution from child star to boundary-pushing artist reflects the sign\'s refusal to be defined by any single identity.',
      },
      {
        name: 'Johnny Cash',
        profession: 'Singer/Songwriter',
        birthYear: 1932,
        description:
          'Johnny Cash\'s innovative blending of musical genres, his championing of marginalized communities, and his complex personal journey from rebellious outlaw to respected elder perfectly embody the Wood Monkey\'s combination of inventiveness and ethical depth. His "Man in Black" persona reflected the sign\'s wit deployed in service of conscience.',
      },
      {
        name: 'Elizabeth Taylor',
        profession: 'Actress/Activist',
        birthYear: 1932,
        description:
          'Elizabeth Taylor\'s extraordinary versatility, magnetic charisma, and groundbreaking AIDS activism demonstrate the Wood Monkey\'s combination of brilliant talent and compassionate purpose. Her ability to command attention and direct it toward causes that mattered reflects the sign\'s gift for using cleverness in service of the greater good.',
      },
      {
        name: 'Selena Gomez',
        profession: 'Singer/Actress/Entrepreneur',
        birthYear: 1992,
        description:
          'Selena Gomez\'s successful navigation of multiple entertainment domains — music, acting, production, beauty entrepreneurship — reflects the Wood Monkey\'s versatile brilliance and adaptive intelligence. Her openness about mental health challenges demonstrates the sign\'s growing capacity for emotional authenticity.',
      },
      {
        name: 'Cardi B',
        profession: 'Rapper/Entrepreneur',
        birthYear: 1992,
        description:
          'Cardi B\'s rapid rise from social media personality to chart-topping rapper to cultural force embodies the Wood Monkey\'s quick wit, strategic intelligence, and magnetic humor. Her authentic, unfiltered communication style reflects the sign\'s combination of cleverness and genuine emotional engagement.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Monkey is the ninth animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Shen (申) and the late afternoon hours of 3pm to 5pm. The Monkey holds a uniquely prominent position in Chinese mythology through the legendary figure of Sun Wukong — the Monkey King — whose adventures in the classic novel Journey to the West represent one of Chinese literature's most beloved and enduring narratives. Sun Wukong embodies the Monkey's essential nature: brilliant, irrepressible, and ultimately redeemable through the combination of cleverness and conscience.

When combined with the Wood element, the Monkey takes on the qualities of the wise trickster who uses intelligence in service of growth and community. The Wood Monkey represents Sun Wukong after his transformation — still clever, still playful, but now directing his extraordinary talents toward a higher purpose. In classical Chinese thought, this combination embodies the ideal of wisdom gained through experience: the brilliant mind that has learned the difference between being clever and being wise.`,

    symbolism: `The Wood Monkey symbolizes intelligent growth, ethical innovation, and the transformative power of humor and creativity directed toward meaningful ends. In traditional Chinese symbolism, the Monkey represents ingenuity, adaptability, and the irrepressible human spirit. Wood adds the dimensions of compassion, growth, and ethical purpose, creating a symbol of intelligence in service of the community.

The Wood Monkey reminds us that cleverness without conscience is dangerous, but cleverness directed by compassion is one of the most powerful forces for positive change. In an age of technological innovation and ethical complexity, the Wood Monkey archetype offers a model for using intelligence wisely — creating solutions that serve human flourishing, not just human convenience.`,

    modernInterpretation: `In contemporary culture, the Wood Monkey archetype resonates strongly with the emergence of social entrepreneurship, ethical technology, and the growing demand for innovation that serves society as well as shareholders. The Wood Monkey represents the innovator who asks not just "What can we build?" but "What should we build?" — a question of increasing urgency in the age of artificial intelligence, biotechnology, and planetary-scale challenges.

The 1992 Wood Monkey generation has come of age in an era defined by rapid technological change and growing social consciousness. Many of its members embody the sign's integration of inventive brilliance and ethical purpose — building businesses, creating art, and solving problems in ways that reflect both their considerable intelligence and their genuine concern for the world they are inheriting.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
