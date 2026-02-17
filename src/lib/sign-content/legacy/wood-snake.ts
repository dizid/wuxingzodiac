// ============================================
// WOOD SNAKE (甲巳) — The Thoughtful Philosopher
// ============================================
// The Wood Snake blends the Snake's deep wisdom and
// strategic mind with Wood's compassion and creativity,
// producing an insightful thinker who grows through
// understanding rather than force.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-snake',
  profile: getProfileBySlug('wood-snake')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Snake is the most approachable and intellectually generous of all Snake-element combinations. The Snake — naturally mysterious, strategic, and deeply perceptive — gains warmth, openness, and creative vision through the Wood element's influence. Where other Snake types can be secretive and calculating, the Wood Snake channels their formidable intelligence toward understanding, growth, and the cultivation of meaningful connections.

People born under this sign possess a rare combination of profound insight and genuine warmth. They observe the world with the Snake's penetrating gaze but interpret what they see through Wood's compassionate lens. This makes them exceptional philosophers, counselors, and creative thinkers — people who understand not just how things work but why they matter. The Wood Snake does not merely accumulate knowledge; they synthesize it into wisdom that serves both their own growth and the well-being of others.

What distinguishes the Wood Snake is their ability to make the complex accessible. They are natural teachers and communicators who can translate deep insights into language that others understand and benefit from. Their mind works like a root system — quietly, invisibly, but with a penetrating power that reaches into the deepest layers of any subject. When a Wood Snake shares their understanding, it carries an authority born not of position but of genuine depth.`,

    coreTraits: [
      'Philosophical',
      'Perceptive',
      'Compassionate',
      'Strategic',
      'Creative',
      'Wise',
    ],

    strengths: [
      {
        trait: 'Deep Understanding',
        description:
          'The Wood Snake sees beyond surfaces to the fundamental structures beneath. They understand systems, relationships, and human nature with a clarity that borders on the uncanny. This depth of perception, enriched by Wood\'s empathy, makes them exceptional at diagnosing problems, anticipating outcomes, and finding solutions that address root causes rather than symptoms.',
      },
      {
        trait: 'Creative Wisdom',
        description:
          'The Wood element adds creative fertility to the Snake\'s native intelligence, producing a mind that is both analytical and imaginative. The Wood Snake can synthesize information from diverse sources into original frameworks and ideas. Their creativity is not whimsical but purposeful — rooted in deep understanding and directed toward meaningful outcomes.',
      },
      {
        trait: 'Graceful Communication',
        description:
          'The Wood Snake possesses an extraordinary ability to communicate complex ideas with elegance and clarity. Whether through writing, speaking, or artistic expression, they make the profound feel accessible and the difficult feel manageable. Their words carry weight because they emerge from genuine understanding rather than mere rhetoric.',
      },
      {
        trait: 'Patient Strategy',
        description:
          'The Snake\'s natural strategic thinking is enhanced by Wood\'s patience and growth orientation. The Wood Snake plans with a long time horizon, planting seeds of influence and relationships that bear fruit years or even decades later. They rarely rush, and their patience almost always rewards them with outcomes that less disciplined minds could never achieve.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Guardedness',
        description:
          'Despite being more open than other Snake types, the Wood Snake still maintains significant emotional barriers. They share their thoughts freely but guard their hearts carefully, allowing only a select few past their defenses. This guardedness can create relationships that feel intellectually rich but emotionally superficial, leaving partners and friends wanting more depth of connection.',
      },
      {
        trait: 'Analysis Paralysis',
        description:
          'The Wood Snake\'s tendency to think deeply about everything can become a form of avoidance. They may delay action indefinitely, always seeking more information, deeper understanding, or a more elegant solution. Meanwhile, opportunities pass and simpler minds achieve results that the Wood Snake\'s superior intellect should have captured first.',
      },
      {
        trait: 'Quiet Manipulation',
        description:
          'The Snake\'s strategic instinct can subtly corrupt Wood\'s collaborative intentions. The Wood Snake may guide conversations, shape perceptions, and influence decisions so skillfully that others never realize they are being steered. This is not always malicious, but it can erode trust when discovered and create relationships built on influence rather than genuine partnership.',
      },
      {
        trait: 'Jealousy and Possessiveness',
        description:
          'The Snake\'s possessive nature, while softened by Wood\'s generosity, still surfaces in close relationships. The Wood Snake can become quietly jealous of partners\' attention, friends\' successes, or rivals\' recognition. These feelings are rarely expressed directly but may manifest as withdrawal, subtle criticism, or passive-aggressive behavior.',
      },
    ],

    elementInfluence: `Wood's influence on the Snake is deeply enriching. The Snake is inherently associated with the Fire element in Chinese cosmology — it is the sixth earthly branch (巳), corresponding to late morning when the sun is gaining strength. Wood's relationship with Fire is productive: Wood feeds Fire, meaning the Wood element naturally fuels and supports the Snake's native Fire energy. This creates a person whose internal fire — their passion, perception, and transformative power — is constantly nourished by Wood's creative, growth-oriented energy. The result is a Snake who burns with quiet, sustained warmth rather than dangerous intensity. Wood also adds the dimension of compassion and collaborative thinking to the Snake's naturally solitary, strategic mind, making the Wood Snake more socially engaged and genuinely caring than other Snake types.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Snake's compatibility is defined by their need for intellectual depth, emotional safety, and mutual respect for independence. They are not suited to partners who are emotionally demanding, intellectually shallow, or intolerant of the Snake's need for solitude and reflection. The Snake belongs to the second trine alongside the Ox and the Rooster, sharing these animals' thoughtfulness, discipline, and commitment to excellence.

The Wood element makes this Snake more accessible and emotionally available than other Snake types, expanding their compatibility with signs that might find a pure Metal or Water Snake too cold or calculating. However, the Wood Snake still requires a relationship that respects their inner world and values quality of connection over quantity of interaction.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 90,
        summary:
          'A profoundly harmonious second-trine pairing. The Water Ox\'s depth, reliability, and quiet strength perfectly complement the Wood Snake\'s intellectual richness and strategic patience. Water nourishes Wood, sustaining the Snake\'s growth, while the Ox provides the stability and loyalty that allows the Snake to feel secure enough to lower their guard. This is a partnership of substance, built slowly and lasting indefinitely.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 87,
        summary:
          'A stimulating second-trine alliance where the Fire Rooster\'s precision and passionate honesty energize the Wood Snake\'s philosophical mind. Wood feeds Fire, creating a productive dynamic where the Snake\'s wisdom fuels the Rooster\'s ambitious perfectionism. Both signs value intelligence and quality, creating a partnership of mutual intellectual admiration and shared high standards.',
      },
      {
        slug: 'earth-monkey',
        name: 'Earth Monkey',
        score: 83,
        summary:
          'An unexpected but effective pairing where the Earth Monkey\'s pragmatic cleverness and adaptability complement the Wood Snake\'s deep strategic thinking. The Monkey\'s social energy draws the Snake out of their shell, while the Snake\'s wisdom grounds the Monkey\'s scattered brilliance. Both signs appreciate intelligence and enjoy the mental chess of their interactions.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 28,
        summary:
          'The Snake and Pig sit in direct opposition on the zodiac wheel, creating fundamental tension around trust and communication style. The Fire Pig\'s open-hearted warmth and emotional directness clashes with the Wood Snake\'s guarded, strategic approach. The Pig finds the Snake deceptive; the Snake finds the Pig naive. Trust is extremely difficult to build between these opposed signs.',
      },
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 35,
        summary:
          'Two strong personalities with fundamentally incompatible approaches. The Wood Tiger\'s bold directness and need for transparent action conflicts with the Wood Snake\'s preference for subtlety and careful strategy. The Tiger sees the Snake as evasive; the Snake sees the Tiger as reckless. Both compete for the same Wood element energy, creating tension rather than harmony.',
      },
      {
        slug: 'metal-horse',
        name: 'Metal Horse',
        score: 38,
        summary:
          'The Metal Horse\'s restless, freedom-loving energy overwhelms the Wood Snake\'s preference for depth and stability. Metal cuts Wood, adding a sharp edge to the Horse\'s already challenging energy. The Snake needs quiet depth; the Horse needs constant movement. Neither can provide what the other fundamentally requires.',
      },
    ],

    elementAffinity: `The Wood Snake thrives with Water-element partners, who nourish Wood's growth and provide the emotional depth and intuitive support that sustains the Snake's development. Fire-element partners are energizing — Wood feeds Fire — creating intellectually stimulating partnerships, though the Snake may feel drained if they give too much without receiving. Earth-element partners provide grounding stability that can be deeply comforting. Metal-element partners present challenges, as Metal cuts Wood, potentially creating relationships where the Metal partner's sharp criticism undermines the Wood Snake's confidence. However, the Snake's natural resilience makes this dynamic more manageable than for other Wood signs.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Snake excels in careers that reward deep thinking, strategic planning, and nuanced communication. They are not built for fast-paced, reactive environments — the Wood Snake needs time to observe, analyze, and develop their perspective before acting. Their greatest professional asset is the quality of their thinking: when a Wood Snake finally speaks, people listen, because what they say is almost always worth hearing.

Their ideal work environment values expertise, provides intellectual stimulation, and allows for periods of focused, independent work. Wood Snakes are drawn to fields where depth of understanding creates competitive advantage — research, strategy, counseling, writing, and the arts. They are less effective in purely operational roles where speed matters more than insight.

Financially, the Wood Snake is among the most shrewd and successful signs. They have the Snake's instinct for identifying valuable opportunities and the Wood element's patience to wait for the right moment to act. Their financial style is quietly accumulative — building wealth through careful, informed decisions rather than visible displays of ambition. The Wood Snake's financial weakness is occasional greed disguised as prudence: they may hoard resources beyond reasonable need or resist generosity when it would serve their larger interests.`,

    idealCareers: [
      'Research Scientist',
      'Psychologist or Psychiatrist',
      'Strategic Consultant',
      'Professor or Academic',
      'Author or Journalist',
      'Acupuncturist or TCM Practitioner',
      'Art Director',
      'Investment Analyst',
    ],

    financialStyle:
      'The Wood Snake is a shrewd, patient investor who combines intuitive judgment with thorough research. They rarely make impulsive financial decisions, preferring to study opportunities deeply before committing resources. Their portfolios tend toward concentrated positions in areas they understand well, rather than broad diversification. They are excellent at identifying undervalued assets and have the patience to hold positions until they mature. Their financial weakness is difficulty sharing wealth — the Snake\'s possessive instinct can override Wood\'s generous impulses, leading to unnecessary frugality in personal relationships.',

    tips: [
      'Share your insights more proactively. Your tendency to wait until you have the perfect analysis can mean that others — with less thorough but more timely contributions — receive the credit and influence that should be yours. Perfect is the enemy of good; timely input beats late wisdom.',
      'Build visible credentials for your expertise. The Wood Snake\'s knowledge is often hidden, shared only in private conversations or small settings. Write, speak, publish — create artifacts that make your expertise visible and accessible to a wider audience.',
      'Develop your emotional intelligence alongside your intellectual capacity. Your analytical brilliance is unquestioned, but professional success increasingly depends on the ability to connect with, motivate, and lead people — skills that require vulnerability, not just perception.',
      'Guard against the temptation to manipulate outcomes. Your strategic mind can easily rationalize the subtle steering of people and situations. While effective in the short term, this erodes trust and limits the depth of professional relationships that could serve you over a lifetime.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Snake in love is deeply devoted, intellectually engaging, and quietly passionate. They do not fall in love quickly or easily — the Snake's discerning nature means they evaluate potential partners with care and patience before committing. But once the Wood Snake chooses someone, their devotion is profound, unwavering, and expressed with a subtlety and depth that more expressive signs cannot match.

In relationships, the Wood Snake creates an atmosphere of intellectual intimacy and quiet sensuality. They are the partner who remembers the book you mentioned wanting to read, who notices the shift in your mood before you do, and who creates a home environment of refined beauty and comfort. Their love is expressed through attention — the exquisite, focused attention of someone who truly sees you and values what they see.

The Wood Snake's challenge in love is their difficulty with emotional transparency. They give deeply but reveal cautiously, creating a dynamic where their partner may feel loved but not fully known. The Snake's fear of vulnerability — of being exposed, judged, or abandoned — can keep even the most devoted relationship at arm's length. The Wood Snake who learns to lower their guard discovers a depth of intimacy that their guarded self could never access.`,

    loveStyle:
      'The Wood Snake loves with quiet intensity, intellectual devotion, and refined sensuality. They are attentive, loyal partners who show their love through deep understanding and carefully considered gestures rather than grand displays. Their approach to romance is like their approach to everything else — patient, strategic, and aimed at building something of lasting quality. They need a partner who values depth over drama, who can read between the lines of their reserved expression, and who has the patience to earn the trust that unlocks the Snake\'s most intimate self.',

    idealPartnerTraits: [
      'Intellectually Deep',
      'Emotionally Patient',
      'Respectful of Privacy',
      'Sensually Aware',
      'Trustworthy and Consistent',
    ],

    tips: [
      'Share your inner world, not just your conclusions. Your partner wants to understand how you think and feel, not just what you have decided. Take them on the journey of your reasoning rather than presenting only the polished final product.',
      'Express jealousy directly rather than through withdrawal or passive aggression. Your possessive feelings are natural and manageable when communicated honestly. Unexpressed, they become toxic and corrosive to the trust you value most.',
      'Initiate physical affection more often. The Wood Snake\'s intellectual focus can leave their partner craving more physical connection. A spontaneous embrace, an unexpected kiss, or simply holding hands communicates warmth in ways that your mind-focused approach may overlook.',
      'Trust your partner\'s love even when you cannot fully verify it. Your analytical mind wants certainty before vulnerability, but love requires the leap of faith that terrifies the Snake most. The relationship you build on trust will always be stronger than one you build on verification.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Snake's health profile reflects the complex interplay between Wood's liver-centered energy and the Snake's inherent Fire constitution. This creates a person with strong regenerative capacity — Snakes are famous for their ability to renew and transform — but also specific vulnerabilities around the liver, circulatory system, and emotional well-being.

In Traditional Chinese Medicine, Wood governs the liver and gallbladder, while the Snake's Fire nature connects to the heart and small intestine. The Wood Snake's primary health vulnerability is the accumulation of internal heat and stagnation, particularly when stress, suppressed emotions, or sedentary habits prevent the smooth flow of liver qi. Symptoms may include skin problems, digestive irregularities, headaches, and a general sense of being "stuck" physically and emotionally.

The Wood Snake's health strategy should center on movement, detoxification, and emotional release. Their bodies have remarkable capacity for renewal when given the right conditions — clean food, adequate movement, restful sleep, and conscious stress management. The Snake who honors their body's need for periodic renewal and transformation maintains their health far better than one who suppresses their natural cycles.`,

    bodyAreas: ['Liver', 'Heart', 'Skin', 'Reproductive System'],

    exercises: [
      'Yoga or tai chi',
      'Long meditative walks',
      'Swimming',
      'Pilates or core-focused training',
    ],

    dietTips: [
      'Emphasize detoxifying and liver-supporting foods: leafy greens, beets, turmeric, garlic, and citrus fruits. The Wood Snake\'s constitution benefits from regular, gentle cleansing that supports the liver\'s natural detoxification processes.',
      'Include anti-inflammatory foods to balance the Snake\'s internal Fire: omega-3 rich fish, berries, green tea, and nuts. Reducing inflammation supports cardiovascular health and promotes the clear thinking the Wood Snake depends on.',
      'Eat mindfully and at regular intervals. The Wood Snake\'s tendency to become absorbed in thought can lead to forgotten meals followed by overeating. Establishing a consistent eating rhythm supports both digestive health and emotional stability.',
      'Stay hydrated with warm or room-temperature water and herbal infusions. Cold beverages can impair the Wood Snake\'s digestive fire. Chrysanthemum and peppermint teas are particularly beneficial for cooling internal heat while supporting liver function.',
    ],

    mentalHealth:
      'The Wood Snake\'s primary mental health challenge is the management of their rich but intensely private inner world. They process enormous amounts of emotional and intellectual information internally, rarely sharing the burden with others. Over time, this can create a sense of isolation, rumination, and existential weight that feels increasingly difficult to bear alone. The Wood Snake benefits enormously from one-on-one therapeutic relationships — a skilled therapist provides the safety, confidentiality, and intellectual engagement that the Snake needs to open up. Journaling is another powerful tool, allowing the Snake to process their complex inner landscape without the vulnerability of face-to-face emotional exposure. Creative expression — particularly writing, visual art, or music — provides an outlet for the Snake\'s deep feelings that their guarded personality otherwise conceals. The Wood Snake should also guard against the tendency to intellectualize emotions, using analysis as a defense against actually feeling. True mental health for this sign requires the courage to feel without understanding — to sit with ambiguity and let emotions exist without immediately being categorized and controlled.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 8, 9],
    colors: ['Green', 'Deep Red', 'Black'],
    direction: 'East',
    gemstones: ['Jade', 'Garnet', 'Smoky Quartz'],
    flowers: ['Orchid', 'Cactus Flower', 'Iris'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD SNAKES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Taylor Swift',
        profession: 'Singer/Songwriter',
        birthYear: 1989,
        description:
          'Taylor Swift\'s extraordinary strategic intelligence, narrative craftsmanship, and ability to transform personal experience into universally resonant art perfectly embody the Wood Snake\'s combination of philosophical depth and creative wisdom. Her patient, long-game approach to career management reflects the Snake\'s strategic patience enhanced by Wood\'s growth orientation.',
      },
      {
        name: 'Martin Luther King Jr.',
        profession: 'Civil Rights Leader',
        birthYear: 1929,
        description:
          'Martin Luther King Jr.\'s profound moral philosophy, eloquent communication, and strategic approach to social transformation exemplify the Wood Snake\'s highest expression — deep wisdom channeled through compassionate action. His ability to articulate complex moral truths in language that moved millions reflects the sign\'s gift for graceful, impactful communication.',
      },
      {
        name: 'Audrey Hepburn',
        profession: 'Actress/Humanitarian',
        birthYear: 1929,
        description:
          'Audrey Hepburn embodied the Wood Snake\'s elegance, depth, and quiet compassion. Her evolution from iconic actress to devoted humanitarian reflects the sign\'s journey from personal achievement toward service — the Wood Snake\'s understanding that true wisdom must be shared to fulfill its purpose.',
      },
      {
        name: 'Daniel Radcliffe',
        profession: 'Actor',
        birthYear: 1989,
        description:
          'Daniel Radcliffe\'s thoughtful approach to fame and his careful selection of challenging, unconventional roles after Harry Potter reflect the Wood Snake\'s intellectual depth and strategic career management. His quiet determination to be taken seriously as an artist mirrors the sign\'s patient, deliberate approach to growth.',
      },
      {
        name: 'Jacqueline Kennedy Onassis',
        profession: 'First Lady/Editor',
        birthYear: 1929,
        description:
          'Jacqueline Kennedy\'s legendary poise, aesthetic refinement, and the dignified grace with which she navigated extraordinary public pressures embody the Wood Snake\'s combination of inner strength and outward elegance. Her later career as a book editor reflected the sign\'s deep intellectual engagement and love of ideas.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Snake is the sixth animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Si (巳) and the late morning hours of 9am to 11am — the time when the sun is gaining power and warmth spreads across the land. In Chinese mythology, the Snake is often called the "Little Dragon" and shares the Dragon's mystical associations with wisdom, transformation, and cosmic power, but expressed through subtlety and stealth rather than spectacle.

When combined with the Wood element, the Snake takes on the qualities of the vine or the climbing plant — flexible, persistent, and capable of reaching great heights through patient, organic growth rather than forceful upward thrust. In classical Chinese thought, the Wood Snake represents wisdom that grows through experience and reflection, like a tree that deepens its roots as it reaches toward the sky. The Heavenly Stem Jia (甲) associated with Wood Snake years connects to the hard outer shell of the seed — suggesting that the Wood Snake's greatest treasures are hidden within, revealed only to those patient enough to break through the surface.`,

    symbolism: `The Wood Snake symbolizes hidden wisdom, patient growth, and the transformative power of deep understanding. In traditional Chinese symbolism, the Snake represents rebirth and renewal — its ability to shed its skin is a powerful metaphor for personal transformation. Wood adds the dimension of organic, rooted growth, creating a symbol of wisdom that deepens over time rather than arriving in sudden revelations.

The Wood Snake also symbolizes the kind of intelligence that works beneath the surface — the root system that is invisible but essential, the groundwater that nourishes everything above. In a world that celebrates visible achievement and loud proclamation, the Wood Snake reminds us that the most profound forms of influence are often the quietest.`,

    modernInterpretation: `In contemporary culture, the Wood Snake archetype resonates with the growing appreciation for depth, nuance, and long-term thinking in a world increasingly driven by surface-level content and instant gratification. The Wood Snake represents the strategist, the philosopher, and the artist who values quality over speed and meaning over attention.

The 1989 Wood Snake generation has demonstrated this principle through figures who combine strategic brilliance with creative depth. Taylor Swift's transformation from country ingenue to global cultural force through meticulous strategic planning and narrative craftsmanship is perhaps the most visible expression of Wood Snake energy in contemporary culture. For future Wood Snake generations, this archetype suggests a continued elevation of thoughtfulness, strategic patience, and the quiet power of understanding in an increasingly noisy world.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
