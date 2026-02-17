// ============================================
// EARTH OX (戊丑) — The Immovable Mountain
// ============================================
// The Earth Ox doubles down on Earth energy — the Ox is
// naturally an Earth-associated animal — creating the most
// stable, enduring, and unshakable sign in the zodiac.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-ox',
  profile: getProfileBySlug('earth-ox')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Ox is arguably the most solid and dependable personality in the entire Chinese zodiac. The Ox — already renowned for patience, determination, and tireless work ethic — is reinforced by the Earth element, creating a double-earth combination of extraordinary stability and endurance. Where other signs adapt, innovate, or reinvent, the Earth Ox endures. They are the bedrock upon which families, organizations, and communities are built, and their reliability is not merely habitual but deeply constitutional.

People born under this sign possess an almost geological patience. They do not rush, they do not cut corners, and they do not abandon commitments when the going gets tough. This makes them exceptional in any endeavor that requires sustained effort over long periods — building a business over decades, raising a family with unwavering consistency, or mastering a craft through thousands of hours of dedicated practice. The Earth Ox's success is never flashy, but it is remarkably durable.

Beneath this steady exterior lies a surprisingly warm and nurturing nature. The Earth element's association with nourishment and care softens the Ox's sometimes austere temperament, creating a person who expresses love through practical devotion. An Earth Ox may not say "I love you" often, but they will show it every day through acts of service, financial provision, and a protective loyalty that never wavers. They are the person who always shows up, always keeps their word, and always puts the needs of those they love above their own comfort.`,

    coreTraits: [
      'Steadfast',
      'Patient',
      'Reliable',
      'Practical',
      'Nurturing',
      'Determined',
    ],

    strengths: [
      {
        trait: 'Unshakable Reliability',
        description:
          'When an Earth Ox makes a commitment, it is as good as done. Their word is their bond, and they take promises with a seriousness that borders on sacred. In a world of broken commitments and shifting priorities, the Earth Ox stands as a pillar of absolute dependability. This quality makes them invaluable in both personal relationships and professional settings.',
      },
      {
        trait: 'Extraordinary Endurance',
        description:
          'The Earth Ox can sustain effort long after others have given up. They possess a deep reservoir of physical and mental stamina that allows them to power through challenges that would break more volatile signs. This endurance is not driven by passion or adrenaline but by a fundamental stubbornness that simply refuses to quit.',
      },
      {
        trait: 'Practical Wisdom',
        description:
          'Earth Oxen possess a grounded intelligence rooted in real-world experience rather than abstract theory. They understand how things actually work — systems, people, money, materials — and they apply this understanding with a common sense that more intellectual signs often lack. Their advice is reliable precisely because it comes from observation and experience, not speculation.',
      },
      {
        trait: 'Protective Loyalty',
        description:
          'The Earth Ox\'s loyalty to family and close friends is fierce and unconditional. They create a zone of safety and stability around the people they love, shielding them from hardship through practical means — financial security, physical protection, and the simple reassurance of constant, unwavering presence. Their loved ones feel genuinely safe.',
      },
    ],

    challenges: [
      {
        trait: 'Excessive Stubbornness',
        description:
          'The double-earth combination amplifies the Ox\'s already legendary stubbornness to extreme levels. Once an Earth Ox has formed an opinion or chosen a path, changing their mind requires an almost superhuman effort. They may persist with failing strategies, resist beneficial changes, or maintain positions long after evidence has shifted against them.',
      },
      {
        trait: 'Resistance to Change',
        description:
          'Earth Oxen can become so attached to routine and established patterns that they experience genuine distress when forced to adapt. New technologies, new methods, new social norms — all can feel threatening rather than exciting. This resistance to change can leave them behind in rapidly evolving environments and create friction with more progressive partners and colleagues.',
      },
      {
        trait: 'Emotional Repression',
        description:
          'The Earth Ox tends to bury emotions beneath layers of practical stoicism. They may view vulnerability as weakness and emotional expression as indulgence, leading to a buildup of unprocessed feelings that eventually manifests as physical tension, resentment, or sudden outbursts that shock those who assumed everything was fine.',
      },
      {
        trait: 'Possessiveness',
        description:
          'The Earth element\'s attachment to material security, combined with the Ox\'s territorial instinct, can produce a possessive streak that extends to relationships, property, and even ideas. Earth Oxen may struggle to share, delegate, or let go — holding on to things, people, and patterns well past the point where release would serve everyone better.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Ox is inherently associated with the Earth element — it is the animal of late winter transitioning to spring, connected to the soil, agriculture, and the patient work of cultivation. When the Earth element is added to this naturally earthy animal, the result is a double-earth combination of exceptional density and stability. This is not merely an amplification; it represents Earth in its most concentrated expression — the mountain rather than the field, the foundation rather than the topsoil. The Earth Ox embodies Earth's deepest qualities: permanence, nourishment, and the quiet power of geological time. Their challenge lies in the shadow side of double-earth: heaviness, rigidity, and resistance to the natural cycles of change that all living things require for growth.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Ox's compatibility profile favors partners who appreciate depth, stability, and commitment over excitement and novelty. They form their strongest bonds with signs that share their values of loyalty and hard work, and they struggle most with signs that demand constant change, spontaneity, or emotional intensity. The ideal Earth Ox partner understands that still waters run deep — that beneath the Ox's calm, steady exterior lies a profoundly loving heart that simply expresses itself through action rather than words.

In traditional Chinese astrology, the Ox belongs to the Second Trine alongside the Snake and the Rooster — three signs united by determination, attention to detail, and a shared preference for order over chaos. These allies form highly productive partnerships characterized by mutual respect and complementary strengths. The Ox's most challenging relationship is with the Goat, its zodiac opposite, where fundamentally different approaches to life create ongoing tension.`,

    bestMatches: [
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 92,
        summary:
          'An exceptionally harmonious pairing where the Water Snake\'s depth and intuition perfectly complement the Earth Ox\'s stability and strength. The Snake\'s wisdom and emotional intelligence soften the Ox\'s stoic exterior, while the Ox provides the security the Snake craves. Water nourishes Earth in this relationship, creating a fertile ground for mutual growth and deep, lasting intimacy.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 88,
        summary:
          'Two members of the Second Trine united by shared values of hard work, integrity, and attention to detail. The Metal Rooster\'s precision and high standards complement the Earth Ox\'s patient thoroughness. Earth supports Metal in the productive cycle, meaning the Ox naturally nurtures the Rooster\'s ambitions. Both value loyalty and commitment, creating a partnership of exceptional durability.',
      },
      {
        slug: 'earth-rat',
        name: 'Earth Rat',
        score: 85,
        summary:
          'A deeply practical and mutually supportive partnership. The Earth Rat\'s strategic intelligence combines beautifully with the Earth Ox\'s unwavering determination. Both signs value security, loyalty, and long-term planning, creating a relationship built on solid common ground. The Rat brings adaptability and social skill that complement the Ox\'s steadfast nature.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 30,
        summary:
          'The zodiac\'s classic opposition is sharpened by the element clash. The Fire Goat\'s emotional expressiveness, artistic temperament, and need for spontaneity clash fundamentally with the Earth Ox\'s practical stoicism and love of routine. Fire scorches Earth, and the Goat\'s free-spirited nature feels threatening to the Ox\'s need for order and predictability.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 32,
        summary:
          'The Fire Horse\'s explosive independence and need for constant excitement overwhelms the Earth Ox\'s steady, methodical nature. The Ox demands routine and predictability; the Horse craves spontaneity and freedom. This pairing creates power struggles where neither sign is willing to adapt to the other\'s fundamental needs.',
      },
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 40,
        summary:
          'The Wood Dragon\'s ambitious, expansive energy clashes with the Earth Ox\'s conservative, cautious approach. The Dragon seeks glory and grand gestures; the Ox values humility and steady progress. Wood depletes Earth in the control cycle, potentially leaving the Earth Ox feeling drained by the Dragon\'s relentless demands for bigger, faster, more.',
      },
    ],

    elementAffinity: `As a double-earth sign, the Earth Ox has a distinctive relationship with each element. Fire signs provide warmth and energy in the productive cycle (Fire creates Earth), offering the Earth Ox much-needed vitality and passion without threatening their stability. Metal signs are natural beneficiaries of the Earth Ox's support (Earth creates Metal), creating harmonious partnerships where the Ox's grounding presence nurtures Metal's ambitions. Water signs are controlled by Earth in the destructive cycle, which can create a dynamic where the Earth Ox unconsciously restricts a Water partner's emotional expression — though this same dynamic can also provide welcome structure for Water signs who struggle with boundaries. Wood signs present the greatest challenge, as Wood depletes Earth (Wood controls Earth), potentially leaving the Earth Ox feeling exhausted and undermined.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Oxen are the ultimate workhorse professionals — reliable, methodical, and capable of sustaining effort over periods that would exhaust less tenacious signs. They excel in careers that reward persistence, attention to detail, and the ability to build lasting structures. They are not drawn to glamorous, fast-paced industries but to solid, established fields where their patience and thoroughness translate directly into results.

The ideal Earth Ox career provides clear expectations, measurable progress, and the satisfaction of building something tangible. They thrive in hierarchical organizations where loyalty and seniority are valued, and they are perfectly content to climb the ladder one rung at a time. Unlike more ambitious signs that demand rapid advancement, the Earth Ox understands that lasting success is built through consistent, quality work over many years.

Earth Oxen make exceptional middle and senior managers because they lead by example rather than charisma. Their teams respect them for their fairness, their willingness to roll up their sleeves, and their absolute reliability. They are not visionary leaders but operational excellences — the people who ensure that ambitious plans actually get executed correctly, on time, and within budget.`,

    idealCareers: [
      'Civil Engineer',
      'Agricultural Manager',
      'Bank Manager',
      'Construction Project Manager',
      'Quality Assurance Director',
      'Land Surveyor',
      'Institutional Investor',
      'Manufacturing Operations Manager',
    ],

    financialStyle:
      'Earth Oxen are supremely conservative with money. They save diligently, spend cautiously, and invest in tangible, time-tested assets like property, farmland, and blue-chip stocks. They are deeply uncomfortable with debt and will work extraordinarily hard to pay off mortgages and loans ahead of schedule. Their financial weakness is excessive conservatism — they may miss significant wealth-building opportunities by refusing to venture beyond their comfort zone. The Earth Ox who learns to trust a knowledgeable financial advisor with a small allocation for growth investments will outperform their natural instinct to keep everything in the safest possible instruments.',

    tips: [
      'Embrace your strength as a builder rather than an innovator. Your career is best served by going deep in an established field rather than chasing the latest trend. Choose an industry with staying power and commit to becoming the most knowledgeable, reliable professional in your domain.',
      'Develop flexibility as a career skill. The modern workplace rewards adaptability, and your resistance to change can become a significant liability. Practice saying yes to new methods and tools before your instinct to refuse kicks in — you may find that change is less threatening than anticipated.',
      'Invest in leadership development. Your natural tendency is to lead by doing, but senior roles require the ability to delegate, communicate vision, and inspire others. These skills do not come naturally to the Earth Ox but can be developed through deliberate practice.',
      'Protect yourself from burnout through boundaries, not endurance. Your ability to sustain effort is remarkable, but it can mask the slow accumulation of stress and fatigue. Schedule regular rest and recovery rather than relying on your constitution to carry you through indefinitely.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Ox is a deeply devoted, profoundly loyal partner who builds relationships like they build everything else — slowly, carefully, and with the intention of lasting forever. They are not romantic in the conventional sense; they will not sweep you off your feet with poetic declarations or surprise you with spontaneous adventures. Instead, they will show up every single day, provide unwavering support, and create a home environment of such solidity and comfort that you never want to leave.

Earth Oxen take their time falling in love. They observe, assess, and gradually open up as trust is established. This cautious approach can frustrate more impulsive suitors, but those who earn an Earth Ox's love discover a depth of devotion that is rare and precious. Once committed, the Earth Ox is faithful to an almost martial degree — betrayal is virtually unthinkable, and they expect the same absolute loyalty in return.

The Earth Ox's greatest challenge in love is emotional expression. They feel deeply but struggle to articulate those feelings, often substituting practical acts of care for the verbal and physical affection that partners need. The most fulfilled Earth Oxen are those who learn — often through patient partnership — that vulnerability is not weakness, and that saying "I love you" matters even when your actions already prove it.`,

    loveStyle:
      'The Earth Ox loves through steadfast devotion and practical care. Their approach to romance is old-fashioned in the best sense: they believe in commitment, fidelity, and building a life together brick by brick. Physical affection tends to be private and understated — they are not demonstrative in public but deeply sensual behind closed doors. They express love by providing financial stability, maintaining the home, protecting their family from hardship, and being physically present through every season of life. Their love may lack dramatic highs, but it also lacks the devastating lows that plague more volatile pairings.',

    idealPartnerTraits: [
      'Patient',
      'Loyal',
      'Appreciative of Stability',
      'Emotionally Expressive',
      'Domestic',
    ],

    tips: [
      'Make verbal affection a daily practice. Your partner needs to hear that you love them, even when your actions already demonstrate it. A simple "I appreciate you" or "I\'m glad you\'re in my life" costs nothing but means everything to a partner who craves emotional reassurance.',
      'Create space for your partner\'s need for novelty within your shared routine. You thrive on predictability, but your partner may wilt without occasional surprises. Compromise by planning new experiences together on a regular schedule — it satisfies their need for variety while preserving the structure you require.',
      'Learn to receive help as well as give it. Earth Oxen pride themselves on being the provider, but healthy partnerships require mutual dependence. Allow your partner to support you, especially during difficult times — it deepens intimacy and prevents the resentment that builds when caregiving flows in only one direction.',
      'Address relationship issues promptly rather than enduring them silently. Your tendency to absorb frustration without comment can lead to years of accumulated resentment that eventually erupts in ways that damage the relationship irreparably. Small, regular conversations about needs and concerns prevent large-scale breakdowns.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Ox possesses one of the most robust constitutions in the Chinese zodiac, blessed with natural endurance and a physical resilience that allows them to sustain heavy workloads and recover from illness with impressive determination. However, their double-earth nature makes them particularly susceptible to conditions associated with stagnation, heaviness, and the slow accumulation of stress.

In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen — the digestive organs that transform food into energy. The Earth Ox's health is fundamentally tied to digestive function. When their digestion is strong, they feel energized, clear-headed, and emotionally stable. When it weakens — through poor diet, irregular meals, or chronic stress — they experience a cascade of symptoms including fatigue, weight gain, mental fog, and emotional flatness.

The Earth Ox's health strategy should focus on maintaining movement and flow in a constitution that naturally tends toward heaviness and inertia. Regular physical activity is essential — not intense, explosive exercise, but consistent, moderate movement that prevents the stagnation that is their primary health risk.`,

    bodyAreas: ['Stomach', 'Spleen', 'Joints', 'Lower Back'],

    exercises: [
      'Farming or heavy gardening',
      'Strength training',
      'Long-distance walking',
      'Yoga',
    ],

    dietTips: [
      'Build meals around warm, easily digestible foods. The double-earth constitution needs warmth to maintain digestive fire. Soups, stews, roasted root vegetables, and whole grains are ideal staples that support the Spleen without overtaxing the system.',
      'Avoid excess dairy and raw foods. These are the primary contributors to what TCM calls "dampness" — sluggishness, bloating, and foggy thinking — conditions the Earth Ox is especially prone to. Steam or lightly cook vegetables rather than eating them raw.',
      'Eat moderate portions at regular intervals. The Earth Ox tends to alternate between skipping meals during intense work periods and overeating as a comfort mechanism. Consistent meal timing with moderate portions optimizes their digestive function.',
      'Incorporate pungent and aromatic spices to counteract heaviness. Ginger, black pepper, cinnamon, cardamom, and cumin stimulate sluggish digestion and help prevent the accumulation of excess dampness in the Earth Ox constitution.',
    ],

    mentalHealth:
      'The Earth Ox\'s primary mental health challenge is depression rooted in stagnation and suppressed emotion. Their stoic nature can lead them to internalize stress, grief, and frustration for years, creating a weight that eventually manifests as persistent low mood, loss of motivation, and emotional numbness. Physical movement is the Earth Ox\'s most powerful antidepressant — even a daily walk can dramatically improve their mental state by moving stagnant energy. They also benefit from structured emotional outlets: journaling, trusted friendships where vulnerability is safe, or therapy with a practical, solution-focused approach. The Earth Ox tends to resist seeking help, viewing it as a sign of weakness, so early intervention — before depression deepens — is particularly important for this sign.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 5, 9],
    colors: ['Yellow', 'Ochre', 'Brown', 'Terracotta'],
    direction: 'Southwest',
    gemstones: ['Amber', 'Smoky Quartz', 'Petrified Wood'],
    flowers: ['Chrysanthemum', 'Honeysuckle', 'Lily'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH OXEN
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Meryl Streep',
        profession: 'Actress',
        birthYear: 1949,
        description:
          'Widely regarded as the greatest actress of her generation, Meryl Streep embodies the Earth Ox\'s extraordinary dedication to craft. Her methodical preparation, tireless work ethic, and ability to sustain excellence across five decades reflect the double-earth sign\'s unmatched endurance and commitment to mastery.',
      },
      {
        name: 'Bruce Springsteen',
        profession: 'Musician',
        birthYear: 1949,
        description:
          'The Boss exemplifies the Earth Ox\'s blue-collar determination and unwavering commitment to his craft. His legendary marathon concerts — routinely exceeding three hours of intense performance — demonstrate the Earth Ox\'s extraordinary stamina, while his lifelong dedication to working-class themes reflects the sign\'s grounded, practical worldview.',
      },
      {
        name: 'Sigourney Weaver',
        profession: 'Actress',
        birthYear: 1949,
        description:
          'Sigourney Weaver\'s career-defining role as Ellen Ripley — tough, determined, and absolutely unbreakable under pressure — is pure Earth Ox energy. Her ability to combine physical endurance with emotional depth across a career spanning decades reflects the sign\'s remarkable staying power and quiet strength.',
      },
      {
        name: 'Billy Joel',
        profession: 'Musician/Songwriter',
        birthYear: 1949,
        description:
          'Billy Joel\'s decades-long career and his ability to craft enduring songs that resonate across generations reflect the Earth Ox\'s gift for building things that last. His grounded, storytelling approach to music — rooted in real life rather than fantasy — embodies the sign\'s practical authenticity.',
      },
      {
        name: 'Richard Gere',
        profession: 'Actor/Activist',
        birthYear: 1949,
        description:
          'Richard Gere combines the Earth Ox\'s quiet strength and patience with a deep commitment to humanitarian causes, particularly Tibetan Buddhism and human rights. His steady, principled advocacy over decades — even when it cost him career opportunities — reflects the sign\'s unwavering loyalty to deeply held values.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Ox holds a position of immense respect in Chinese mythology and agricultural civilization. According to legend, the Ox was originally destined to be the first animal in the zodiac — it woke earliest and traveled most steadily toward the Jade Emperor's gate. Only the Rat's cunning trick (riding on the Ox's back and leaping ahead at the last moment) relegated the Ox to second place. This myth establishes the Ox as the embodiment of honest effort and selfless service — qualities that the Earth element amplifies to their fullest expression.

In Chinese agricultural tradition, the Ox was sacred — the essential partner in cultivating the earth that sustained civilization. The Earth Ox therefore occupies a doubly honored position: the animal most associated with the land, infused with the element of the land itself. This combination was traditionally considered one of the most auspicious for farmers, landowners, and anyone whose livelihood depended on the patient cultivation of natural resources. The Earth Ox year was regarded as ideal for establishing homesteads, starting farms, and laying foundations — both literal and metaphorical.`,

    symbolism: `The Earth Ox symbolizes the deepest form of stability and endurance available in the Chinese zodiac. Where other signs represent movement, change, and transformation, the Earth Ox represents permanence — the mountain that weathers all storms, the foundation that supports all structures. In Wu Xing symbolism, this double-earth combination is associated with the Center — the still point around which all other elements and directions revolve.

The Earth Ox is also a powerful symbol of nourishment and provision. Earth is the nurturing element, and the Ox is the animal that feeds civilizations through its labor. Together, they represent the fundamental act of converting raw resources into sustenance — transforming soil into harvest, effort into prosperity, patience into abundance.`,

    modernInterpretation: `In contemporary culture, the Earth Ox archetype resonates with the growing appreciation for sustainability, slow living, and authentic craftsmanship. In an era of planned obsolescence and rapid disruption, the Earth Ox represents the counter-movement: things built to last, work done with integrity, relationships maintained through patient devotion rather than passionate intensity.

The Earth Ox's modern relevance extends to the environmental movement. As the sign most deeply connected to the land itself, the Earth Ox archetype embodies the values of stewardship, conservation, and respect for natural cycles that define contemporary ecological consciousness. The Earth Ox reminds us that the planet does not need more innovation — it needs more patience, more care, and more people willing to do the slow, unglamorous work of building a sustainable future.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
