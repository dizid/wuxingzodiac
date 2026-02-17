// ============================================
// WOOD RABBIT (甲卯) — The Gentle Visionary
// ============================================
// The Wood Rabbit merges the Rabbit's refined sensitivity
// and diplomacy with Wood's creative growth energy,
// creating an artistic peacemaker with quiet determination.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-rabbit',
  profile: getProfileBySlug('wood-rabbit')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Rabbit is the purest expression of the Rabbit's essential nature — refined, creative, and deeply attuned to the emotional currents that flow beneath the surface of human interaction. The Rabbit is natively associated with Wood in Chinese astrology, making this a "double Wood" combination where the element and the animal are in perfect harmony. The result is a personality of extraordinary grace, artistic sensitivity, and quiet but unmistakable strength.

People born under this sign possess an almost preternatural ability to sense what others need and to create environments where those needs can be met. They are the peacemakers, the aesthetes, the diplomats who smooth over conflicts that more aggressive signs cannot resolve. The Wood Rabbit does not impose their will; they cultivate the conditions for harmonious outcomes, guiding situations toward resolution with such subtlety that others rarely notice their influence.

Beneath the Wood Rabbit's gentle exterior lies a core of surprising determination. While they avoid confrontation whenever possible, they are not passive or weak. Their strength is the strength of water wearing away stone — persistent, patient, and ultimately irresistible. When pushed to their limit, the Wood Rabbit reveals a resolve that catches everyone off guard, precisely because it has been so carefully concealed behind layers of diplomacy and grace.`,

    coreTraits: [
      'Diplomatic',
      'Creative',
      'Intuitive',
      'Refined',
      'Compassionate',
      'Perceptive',
    ],

    strengths: [
      {
        trait: 'Artistic Brilliance',
        description:
          'The double Wood energy gives the Wood Rabbit an exceptional aesthetic sensibility. They see beauty where others see ordinariness and create harmony where others create noise. Whether in visual art, music, design, writing, or simply the way they arrange a room, the Wood Rabbit has an instinctive understanding of balance, proportion, and emotional resonance.',
      },
      {
        trait: 'Diplomatic Mastery',
        description:
          'The Wood Rabbit is the zodiac\'s supreme diplomat. They navigate complex social dynamics with effortless grace, finding common ground between opposing parties and resolving conflicts that seem intractable. Their secret is genuine empathy — they truly understand all sides of a disagreement, which allows them to propose solutions that honor everyone\'s core needs.',
      },
      {
        trait: 'Emotional Intelligence',
        description:
          'Wood Rabbits read people with remarkable accuracy. They notice the slight shift in tone, the hesitation before a smile, the unspoken worry behind a cheerful greeting. This perceptiveness makes them exceptional counselors, friends, and partners — the people who always seem to know exactly what to say and when to say it.',
      },
      {
        trait: 'Quiet Resilience',
        description:
          'Despite their gentle appearance, Wood Rabbits possess the resilience of bamboo — flexible enough to bend in any storm but nearly impossible to break. Their ability to endure difficult circumstances without losing their composure or their hope is one of their most underestimated qualities. They survive situations that destroy more outwardly powerful signs.',
      },
    ],

    challenges: [
      {
        trait: 'Conflict Avoidance',
        description:
          'The Wood Rabbit\'s deep aversion to confrontation can become a serious liability. They may tolerate unacceptable situations, accept unfair treatment, or allow problems to fester rather than risk the discomfort of direct disagreement. Important issues go unaddressed because the Wood Rabbit would rather maintain surface harmony than engage in necessary but difficult conversations.',
      },
      {
        trait: 'Indecisiveness',
        description:
          'The Wood Rabbit\'s ability to see all sides of a situation — a strength in diplomacy — becomes a weakness when decisive action is required. They can become paralyzed by the desire to find the perfect solution that pleases everyone, delaying choices until circumstances force their hand or opportunities expire.',
      },
      {
        trait: 'Emotional Vulnerability',
        description:
          'The same sensitivity that makes the Wood Rabbit such an empathetic companion also leaves them exposed to emotional overwhelm. They absorb the moods and feelings of those around them like a sponge, and harsh words, criticism, or conflict can wound them far more deeply than others realize. They need significant recovery time after emotionally demanding encounters.',
      },
      {
        trait: 'Hidden Anxiety',
        description:
          'Beneath the Wood Rabbit\'s composed exterior often churns a sea of worry. They anticipate problems, imagine worst-case scenarios, and carry anxieties they never share. This internal stress can manifest as physical symptoms — digestive issues, insomnia, tension headaches — while the Wood Rabbit continues to project an image of calm control.',
      },
    ],

    elementInfluence: `As a double Wood sign, the Wood Rabbit experiences the Wood element's influence at its most concentrated and harmonious. The Rabbit is inherently the Wood animal in the zodiac — associated with the Earthly Branch Mao (卯), which corresponds to early morning and early spring, when Wood energy is fresh, tender, and full of potential. Adding the Wood element to this foundation does not create tension but intensification: every Wood quality — creativity, compassion, growth, flexibility, and sensitivity — is amplified to its fullest expression. This makes the Wood Rabbit the most "Rabbit-like" of all Rabbit signs, embodying the animal's core essence without the modifying influence of a contrasting element. The gift of this alignment is natural coherence and authenticity; the challenge is the absence of balancing energies that other element-Rabbit combinations naturally possess.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Rabbit's compatibility is defined by their need for harmony, emotional safety, and intellectual connection. They thrive with partners who appreciate subtlety, value peace, and understand that the Wood Rabbit's gentle exterior houses a complex and deeply feeling interior. The Rabbit belongs to the fourth trine alongside the Goat and the Pig — animals that share the Rabbit's love of beauty, comfort, and emotional authenticity.

The double Wood energy makes the Wood Rabbit particularly compatible with Water signs, which nourish their growth, and somewhat challenging with Metal signs, which can feel cutting and harsh. They need relationships that feel like gardens — cultivated, beautiful, and tended with care.`,

    bestMatches: [
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 93,
        summary:
          'An exquisitely harmonious fourth-trine pairing. The Water Pig\'s generous warmth and emotional abundance perfectly nourish the Wood Rabbit\'s sensitive soul — Water feeds Wood in the productive cycle. Both signs share a love of comfort, beauty, and genuine human connection. This relationship feels like coming home: warm, safe, and deeply sustaining for both partners.',
      },
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 88,
        summary:
          'A deeply creative fourth-trine alliance where artistic spirits find mutual inspiration. The Fire Goat\'s passionate creativity ignites the Wood Rabbit\'s aesthetic vision — Wood feeds Fire, creating a productive dynamic where the Rabbit\'s support fuels the Goat\'s artistic expression. Both signs value beauty, harmony, and emotional depth, creating a partnership rich in shared meaning.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 84,
        summary:
          'A complementary partnership where the Earth Dog\'s loyal protection creates the security the Wood Rabbit needs to flourish. The Dog\'s straightforward honesty balances the Rabbit\'s tendency toward evasion, while the Rabbit\'s diplomatic grace smooths the Dog\'s occasionally rough edges. Both share strong moral values and a commitment to doing right by those they love.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 25,
        summary:
          'The Rabbit and Rooster sit in direct opposition on the zodiac wheel, and Metal\'s sharp energy cutting into Wood intensifies this clash. The Metal Rooster\'s blunt criticism and perfectionism devastates the Wood Rabbit\'s sensitive spirit, while the Rabbit\'s indirect communication infuriates the Rooster\'s demand for transparency. This pairing requires enormous effort from both sides to overcome fundamental incompatibilities.',
      },
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 32,
        summary:
          'The Metal Dragon\'s commanding presence and forceful personality overwhelms the Wood Rabbit\'s gentle nature. Metal cuts Wood, creating a dynamic where the Dragon\'s ambition and directness feels abrasive to the Rabbit. The Wood Rabbit\'s subtlety and need for peace clashes with the Dragon\'s explosive energy and need for control.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 40,
        summary:
          'The Fire Tiger\'s bold intensity and need for action creates friction with the Wood Rabbit\'s preference for calm and deliberation. The Tiger\'s directness can feel aggressive to the Rabbit, while the Rabbit\'s cautious approach frustrates the Tiger\'s impatience. Wood feeds Fire, meaning the Rabbit may feel drained by the Tiger\'s consuming energy without receiving enough nurturing in return.',
      },
    ],

    elementAffinity: `As a double Wood sign, the Wood Rabbit has intensified elemental dynamics. Water-element partners are exceptionally nourishing, providing the emotional sustenance and intuitive support that sustains the Wood Rabbit's growth and creativity. Fire-element partners can be stimulating but potentially draining, as Wood feeds Fire — the Rabbit may give more energy than they receive. Earth-element partners provide grounding stability that the airy Wood Rabbit sometimes needs, though the relationship may lack the emotional depth the Rabbit craves. Metal-element partners present the greatest difficulty, as Metal cuts Wood — these relationships can feel emotionally dangerous to the hypersensitive Wood Rabbit.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Rabbit excels in careers that value aesthetics, diplomacy, and nuanced human understanding. They are not built for aggressive, competitive environments — the Wood Rabbit wilts under pressure, hostility, or constant conflict. Instead, they thrive in settings that appreciate their refined sensibilities, their ability to create harmony, and their talent for seeing what others miss.

Their ideal work environment is beautiful, peaceful, and collaborative. Wood Rabbits perform best when given the freedom to work at their own pace, in surroundings that inspire rather than stress them. They are drawn to creative fields, diplomatic roles, and any profession where sensitivity and attention to detail are valued over brute force and speed.

Financially, Wood Rabbits tend toward comfort and security rather than aggressive wealth accumulation. They enjoy quality — fine food, beautiful spaces, elegant clothing — but they are not ostentatious. Their spending reflects their aesthetic values: they would rather own one beautiful thing than ten mediocre ones. Their financial challenge is a tendency to avoid dealing with money matters directly, preferring to delegate financial decisions to partners or advisors.`,

    idealCareers: [
      'Interior Designer',
      'Art Therapist',
      'Diplomat or Mediator',
      'Literary Agent',
      'Museum Curator',
      'Landscape Architect',
      'Psychologist',
      'Fashion Designer',
    ],

    financialStyle:
      'Wood Rabbits have a refined relationship with money — they value quality over quantity and prefer thoughtful purchases to impulsive spending. Their financial style is conservative but aesthetic: they save carefully for things that bring genuine beauty and comfort into their lives. They are not natural risk-takers with investments, preferring stable, reliable returns over speculative ventures. Their financial weakness is avoidance — they may procrastinate on financial planning, ignore uncomfortable financial realities, or delegate money management entirely to avoid the stress of dealing with it directly.',

    tips: [
      'Own your expertise and communicate your value without apology. The Wood Rabbit\'s modesty can become a career liability when others take credit for their work or overlook their contributions. Practice speaking up about your achievements in a way that feels authentic rather than boastful — your diplomatic skills can serve you here.',
      'Seek work environments that match your temperament. Do not force yourself into high-pressure, aggressive corporate cultures hoping you will adapt. You will be far more successful and fulfilled in organizations that value creativity, collaboration, and thoughtfulness.',
      'Build a portfolio or body of work that speaks for itself. The Wood Rabbit\'s best career strategy is to let their work be their advocate. Create a visible, curated collection of your best work that demonstrates your capabilities without requiring you to self-promote aggressively.',
      'Develop financial literacy as a personal project. Your tendency to avoid money matters can leave you vulnerable. Treat learning about personal finance as you would learning any other craft — with curiosity and patience. Once you understand it, you will find it far less stressful than you imagined.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Rabbit in love is tender, devoted, and deeply romantic in the most subtle and beautiful ways. They create relationships that feel like living poetry — attentive to every nuance, careful with every word, and infused with a beauty that transforms ordinary moments into something meaningful. The Wood Rabbit does not love loudly or dramatically; they love with quiet consistency, thoughtful gestures, and an emotional presence that makes their partner feel truly seen.

In relationships, the Wood Rabbit is a nurturer and harmonizer. They create homes that are warm, beautiful, and peaceful — sanctuaries from the harshness of the outside world. They anticipate their partner's needs, smooth over rough edges, and work tirelessly behind the scenes to keep the relationship functioning beautifully. Their love is expressed through atmosphere — the perfectly prepared meal, the thoughtful gift, the carefully chosen words of encouragement.

The Wood Rabbit's challenge in love is their difficulty with direct emotional expression, particularly around negative feelings. They would rather suffer in silence than risk a confrontation that might damage the relationship's harmony. This avoidance can create a slow buildup of unspoken frustration that eventually erupts — or, worse, leads the Wood Rabbit to quietly withdraw without ever explaining why.`,

    loveStyle:
      'The Wood Rabbit loves through beauty, attentiveness, and the creation of harmonious shared spaces. They are deeply romantic but express it through nuance rather than grand gestures — the perfectly timed text, the favorite flower left on the pillow, the intuitive understanding of when their partner needs space or closeness. They seek relationships that feel like a refuge: beautiful, peaceful, and emotionally safe. In return, they need a partner who respects their sensitivity, communicates gently, and creates the security that allows the Wood Rabbit to open their heart fully.',

    idealPartnerTraits: [
      'Emotionally Gentle',
      'Aesthetically Appreciative',
      'Patient and Reassuring',
      'Communicative without Aggression',
      'Values Harmony and Beauty',
    ],

    tips: [
      'Practice expressing discontent before it becomes resentment. Small, honest conversations about minor frustrations prevent the massive, relationship-threatening eruptions that result from years of silent accommodation. Frame concerns as needs rather than complaints.',
      'Let your partner see your full emotional range, not just the pleasant parts. Vulnerability — showing your fears, sadness, and anger — deepens intimacy far more than a perfectly maintained facade of serenity. Your partner fell in love with a person, not a painting.',
      'Resist the urge to create a relationship bubble. Your desire for a beautiful, harmonious partnership can become isolating if it excludes the rest of the world. Maintain friendships, pursue individual interests, and let some beautiful messiness into your shared life.',
      'Choose a partner who is willing to do the emotional heavy lifting you avoid. A partner who can initiate difficult conversations with kindness and patience will unlock depths in your relationship that your avoidant tendencies would otherwise keep sealed.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Rabbit's health profile reflects the double Wood element's deep connection to the liver system in Traditional Chinese Medicine. Their constitution tends toward sensitivity and refinement — they are more susceptible to environmental factors, emotional stress, and dietary influences than heartier signs. However, when properly cared for, the Wood Rabbit's body is capable of remarkable longevity and sustained vitality.

The Wood Rabbit's primary health vulnerability is their nervous system. Their heightened sensitivity to emotional stimuli means that stress, conflict, and emotional turmoil affect them physically more than most. Anxiety, insomnia, digestive disturbances, and tension-related conditions are common when the Wood Rabbit is under sustained emotional pressure. Their body is a faithful mirror of their emotional state.

Prevention for the Wood Rabbit centers on creating a lifestyle that supports their sensitive constitution. Regular routines, beautiful environments, gentle exercise, and conscious stress management are not luxuries but necessities. The Wood Rabbit who prioritizes self-care — and who gives themselves permission to retreat and recharge when needed — maintains their health far better than one who pushes through stress and ignores their body's signals.`,

    bodyAreas: ['Liver', 'Nervous System', 'Digestive System', 'Skin'],

    exercises: [
      'Yoga or pilates',
      'Walking in nature',
      'Dance or barre classes',
      'Swimming or water aerobics',
    ],

    dietTips: [
      'Eat a diet rich in fresh, seasonal vegetables and gentle proteins. The Wood Rabbit\'s sensitive digestive system responds best to clean, whole foods prepared simply. Avoid heavily processed foods, artificial additives, and excessive sugar, which aggravate both their digestive and nervous systems.',
      'Incorporate calming herbs and teas — chamomile, lavender, passionflower, and valerian support the Wood Rabbit\'s nervous system and promote restful sleep. Making tea a daily ritual also provides the structure and beauty this sign craves.',
      'Pay attention to food sensitivities. The Wood Rabbit\'s refined constitution often reacts to foods that other signs tolerate easily. Keep a food diary if you experience unexplained digestive symptoms, skin issues, or mood fluctuations — the culprit may be dietary.',
      'Emphasize foods that support liver health — leafy greens, beets, carrots, and citrus fruits. The double Wood constitution places particular demands on the liver, and dietary support for this organ is essential for the Wood Rabbit\'s overall vitality and emotional equilibrium.',
    ],

    mentalHealth:
      'The Wood Rabbit\'s primary mental health concern is anxiety — a condition to which their sensitive, perceptive nature makes them particularly prone. They absorb emotional information from their environment constantly, processing and worrying about nuances that other signs never notice. This hypervigilance serves them well in diplomatic and creative contexts but can become exhausting and overwhelming in daily life. Cognitive behavioral therapy and mindfulness-based stress reduction are particularly effective for the Wood Rabbit, providing structured tools for managing the anxious thoughts their sensitive mind generates. Creative expression — art, writing, music, or any form that transforms internal experience into external beauty — is profoundly therapeutic. The Wood Rabbit should also guard against isolation, which can feel protective but ultimately amplifies anxiety by removing the social connections that ground them. Maintaining a small circle of trusted, gentle friends who understand their sensitivity provides essential emotional support.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Green', 'Pink', 'Lavender'],
    direction: 'East',
    gemstones: ['Rose Quartz', 'Jade', 'Moonstone'],
    flowers: ['Lily of the Valley', 'Jasmine', 'Wisteria'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD RABBITS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Lionel Messi',
        profession: 'Football Legend',
        birthYear: 1987,
        description:
          'Lionel Messi\'s quiet brilliance, graceful movement, and seemingly effortless mastery embody the Wood Rabbit\'s combination of sensitivity and hidden determination. His gentle demeanor off the pitch belies an iron will on it, reflecting the sign\'s characteristic contrast between outer softness and inner steel.',
      },
      {
        name: 'Hilary Duff',
        profession: 'Actress/Singer',
        birthYear: 1987,
        description:
          'Hilary Duff\'s graceful transition from child star to respected actress and entrepreneur reflects the Wood Rabbit\'s ability to adapt and grow while maintaining authenticity. Her warm public persona and steady career-building demonstrate the sign\'s patient, diplomatic approach to success.',
      },
      {
        name: 'Zac Efron',
        profession: 'Actor',
        birthYear: 1987,
        description:
          'Zac Efron\'s charming screen presence and ability to move between genres with seeming ease reflect the Wood Rabbit\'s adaptability and refined instinct for what audiences want. His carefully curated career path demonstrates the sign\'s strategic patience and aesthetic sensibility.',
      },
      {
        name: 'Sidney Poitier',
        profession: 'Actor/Director',
        birthYear: 1927,
        description:
          'Sidney Poitier broke racial barriers in Hollywood with dignity, grace, and an unwavering commitment to excellence that perfectly embodies the Wood Rabbit\'s quiet determination. His ability to navigate hostile environments with composure and class reflects the sign\'s diplomatic mastery and inner strength.',
      },
      {
        name: 'Kesha',
        profession: 'Singer/Songwriter',
        birthYear: 1987,
        description:
          'Kesha\'s artistic evolution — from pop provocateur to emotionally vulnerable artist — reflects the Wood Rabbit\'s journey toward authentic self-expression. Her resilience through personal and legal battles demonstrates the sign\'s hidden strength beneath a creative, sensitive exterior.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rabbit is the fourth animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Mao (卯) and the early morning hours of 5am to 7am — the time when dawn light is soft, gentle, and full of promise. In Chinese mythology, the Rabbit is closely associated with the Moon, where the Jade Rabbit (玉兔) is said to reside, eternally grinding the elixir of immortality with a mortar and pestle. This lunar connection gives the Rabbit its association with beauty, refinement, and the poetic aspects of existence.

When combined with the Wood element — the Rabbit's native element — this mythological significance is deepened and purified. The Wood Rabbit represents the Jade Rabbit in its most essential form: creative, gentle, and connected to the cycles of nature. In classical Chinese thought, the Wood Rabbit embodies the virtue of ren (仁), or benevolence, in its most refined expression — compassion expressed not through grand heroic acts but through daily kindness, aesthetic beauty, and the patient cultivation of harmony in all relationships.`,

    symbolism: `The Wood Rabbit symbolizes the power of gentleness, the strength of sensitivity, and the creative force that flows when harmony is achieved. In traditional Chinese symbolism, the Rabbit represents longevity, good fortune, and the refined pleasures of civilized life. The Wood element adds growth, creativity, and the vital energy of spring, creating a symbol of flourishing that is gentle rather than forceful.

The double Wood energy gives this sign particular significance as a symbol of natural alignment — being fully and authentically oneself. The Wood Rabbit reminds us that not all power is loud and not all strength is hard. Some of the most profound transformations come not through force but through beauty, patience, and the quiet persistence of growing things.`,

    modernInterpretation: `In contemporary culture, the Wood Rabbit archetype speaks to the growing appreciation for emotional intelligence, aesthetic sensibility, and gentle forms of leadership. In a world that often equates power with aggression and success with dominance, the Wood Rabbit offers an alternative model: one where influence flows from empathy, creativity, and the ability to create environments where everyone can thrive.

The 1987 Wood Rabbit generation has demonstrated the value of this approach across diverse fields. Athletes like Lionel Messi prove that quiet genius can dominate the loudest arenas. Artists and performers born in this year have shown that vulnerability and sensitivity are not weaknesses but sources of profound creative power. For future Wood Rabbit generations, this archetype suggests a continued elevation of emotional intelligence, artistic expression, and the gentle arts of peacemaking and beauty-creation as essential human skills.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
