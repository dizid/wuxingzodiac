// ============================================
// EARTH RAT (戊子) — The Grounded Strategist
// ============================================
// The Earth Rat combines the Rat's sharp intelligence and
// resourcefulness with Earth's stabilizing, practical energy,
// producing a uniquely dependable and strategic personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-rat',
  profile: getProfileBySlug('earth-rat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Rat is the most grounded and reliable expression of the Rat archetype. Where other Rat variants dart from opportunity to opportunity with restless cunning, the Earth Rat channels that legendary intelligence into carefully constructed long-term strategies. The Earth element tempers the Rat's natural nervousness and impulsivity, replacing them with patience, pragmatism, and a quiet confidence that comes from knowing exactly where they stand. These are people who think three moves ahead — not out of anxiety, but out of genuine strategic clarity.

People born under this sign possess an exceptional ability to assess risk and reward with almost mathematical precision. They are the planners, the savers, the ones who build wealth slowly and deliberately rather than gambling on windfalls. Their social intelligence — a hallmark of all Rats — is enhanced by Earth's grounding influence, making them warm, approachable, and genuinely caring rather than merely charming. An Earth Rat's friendships tend to be deep and lasting, built on mutual trust rather than superficial networking.

What distinguishes the Earth Rat from other Earth signs is the underlying sharpness of the Rat mind. Beneath that calm, steady exterior lies an extraordinarily perceptive observer who misses nothing. They read people, situations, and markets with uncanny accuracy, but unlike more impulsive Rat variants, they wait for the right moment to act. This combination of patience and intelligence makes the Earth Rat one of the most quietly formidable signs in the Chinese zodiac.`,

    coreTraits: [
      'Pragmatic',
      'Perceptive',
      'Dependable',
      'Resourceful',
      'Patient',
      'Cautious',
    ],

    strengths: [
      {
        trait: 'Strategic Thinking',
        description:
          'Earth Rats possess an extraordinary ability to plan for the long term. They can see patterns and opportunities that others miss, and they have the patience to wait for optimal conditions before acting. This makes them exceptional investors, business strategists, and project managers who consistently deliver results through careful preparation rather than luck.',
      },
      {
        trait: 'Emotional Stability',
        description:
          'The Earth element provides a calming anchor to the Rat\'s naturally anxious temperament. Earth Rats handle stress with remarkable composure, maintaining their effectiveness even when circumstances become chaotic. This stability makes them invaluable in crisis situations, where their cool-headed analysis and steady presence reassure everyone around them.',
      },
      {
        trait: 'Genuine Warmth',
        description:
          'While all Rats are socially skilled, the Earth Rat\'s warmth is uniquely authentic. They genuinely care about the people in their lives and express it through practical support — helping friends move, offering sound financial advice, remembering important dates. Their loyalty is not performative; it is deeply rooted and remarkably consistent.',
      },
      {
        trait: 'Financial Acumen',
        description:
          'The Rat\'s natural affinity for accumulation combines with Earth\'s practical wisdom to create an exceptional financial mind. Earth Rats are among the best savers and most prudent investors in the zodiac. They build wealth methodically, avoid unnecessary risk, and often achieve financial security far earlier than their peers.',
      },
    ],

    challenges: [
      {
        trait: 'Over-Caution',
        description:
          'The Earth Rat\'s careful nature can tip into excessive conservatism. They may miss excellent opportunities because they spend too long analyzing risks or waiting for perfect conditions that never arrive. Learning to act on "good enough" information rather than demanding certainty is an important growth edge for this sign.',
      },
      {
        trait: 'Materialism',
        description:
          'The combination of the Rat\'s hoarding instinct and Earth\'s attachment to security can produce an unhealthy fixation on material accumulation. Earth Rats may equate self-worth with net worth, or cling to possessions and financial reserves long past the point of genuine need. Cultivating generosity and trust in abundance is essential.',
      },
      {
        trait: 'Rigidity',
        description:
          'Earth\'s stabilizing influence can calcify into stubbornness. Earth Rats who become too attached to their plans and routines may resist necessary change, clinging to strategies that have outlived their usefulness. Their challenge is to maintain the flexibility that makes the Rat archetype so adaptable, even as they build stable structures.',
      },
      {
        trait: 'Worry',
        description:
          'Despite their outward calm, Earth Rats carry a deep current of worry beneath the surface. They tend to catastrophize about potential threats to their security — financial setbacks, relationship instability, health concerns — and this chronic low-level anxiety can erode their wellbeing over time if not consciously managed.',
      },
    ],

    elementInfluence: `In Wu Xing theory, Earth represents stability, nourishment, and the center — the grounding force that connects all other elements. When Earth meets the Rat, it fundamentally transforms the Rat's relationship with the world. The Rat is naturally a Water-associated animal, quick-moving and adaptable but prone to anxiety and scattered energy. Earth contains and channels Water, giving the Earth Rat a solidity and focus that other Rat variants lack. This is the productive cycle at work: Fire creates Earth, and Earth in turn creates Metal — meaning the Earth Rat naturally generates the discipline and structure (Metal qualities) that translate ideas into tangible results. The Earth Rat's challenge within the elemental framework is to avoid becoming so grounded that they lose the Rat's essential fluidity and adaptability, which are among this animal's greatest gifts.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Rat's compatibility profile favors partners who appreciate stability without demanding stagnation. They are most drawn to signs that combine emotional depth with practical reliability — partners who share their vision of building something lasting. The Earth Rat's steady nature makes them an excellent anchor for more volatile signs, but they need a partner who respects their need for security and doesn't dismiss their careful approach as timidity.

In traditional Chinese astrology, the Rat belongs to the First Trine alongside the Dragon and the Monkey — three signs united by ambition, charm, and strategic intelligence. These natural allies understand each other's drive and communicate with ease. The Rat's most challenging pairing is with the Horse, its zodiac opposite, where fundamental differences in temperament create friction that requires conscious effort to overcome.`,

    bestMatches: [
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 90,
        summary:
          'A powerhouse partnership built on mutual ambition and complementary strengths. The Water Dragon\'s visionary energy and natural authority combine beautifully with the Earth Rat\'s strategic mind and practical grounding. The Dragon dreams big; the Rat figures out how to make it happen. Water\'s fluidity bridges their different approaches, creating a dynamic where both partners feel respected and energized.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 88,
        summary:
          'A deeply stable and productive partnership. The Metal Ox\'s unwavering determination and disciplined work ethic resonate perfectly with the Earth Rat\'s methodical approach. Both signs value security, loyalty, and long-term planning. The Metal element adds structure and precision, while the Earth Rat contributes strategic flexibility. Together, they build empires — slowly, deliberately, and permanently.',
      },
      {
        slug: 'earth-monkey',
        name: 'Earth Monkey',
        score: 85,
        summary:
          'Two brilliant minds united by shared Earth energy and mutual respect. The Earth Monkey\'s innovative thinking and adaptability perfectly complement the Earth Rat\'s strategic patience. Both are pragmatic problem-solvers who communicate with ease and appreciate each other\'s intelligence. The shared Earth element creates a foundation of mutual understanding and practical compatibility that sustains the relationship through challenges.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 25,
        summary:
          'The zodiac\'s classic opposition is intensified by the element clash. The Fire Horse\'s explosive independence and need for constant excitement overwhelms the Earth Rat\'s preference for careful planning and measured progress. The Rat sees the Horse as reckless; the Horse sees the Rat as suffocating. Fire scorches Earth, making this a pairing that requires extraordinary patience and compromise from both sides.',
      },
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 38,
        summary:
          'The Wood Rabbit\'s gentle, conflict-avoidant nature struggles with the Earth Rat\'s blunt pragmatism. While both value security, they pursue it in incompatible ways — the Rabbit through emotional harmony, the Rat through material accumulation. Wood absorbs Earth\'s nutrients, which can leave the Earth Rat feeling drained and unappreciated in this pairing.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 35,
        summary:
          'The Fire Rooster\'s sharp criticism and perfectionist standards clash with the Earth Rat\'s quiet confidence and strategic approach. Both signs are detail-oriented, but they apply that attention in conflicting ways — the Rooster through outward critique, the Rat through internal analysis. Fire melts the Earth Rat\'s patience, while the Rat\'s reserved nature frustrates the Rooster\'s need for dramatic expression.',
      },
    ],

    elementAffinity: `As an Earth sign, the Earth Rat interacts with other elements through the Wu Xing cycles in distinctive ways. Fire signs are natural allies in the productive cycle — Fire creates Earth — meaning Fire-element partners energize and inspire the Earth Rat without destabilizing them. Metal signs benefit from the Earth Rat's support (Earth creates Metal), creating nurturing partnerships where the Earth Rat provides the foundation for Metal's ambition. Water signs present a complex dynamic: the Rat's intrinsic Water affinity creates rapport, but Earth dams Water in the control cycle, which can manifest as the Earth Rat unconsciously restricting a Water partner's emotional flow. Wood signs pose the greatest challenge, as Wood depletes Earth in the control cycle, potentially leaving the Earth Rat feeling exhausted and undervalued in these relationships.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Rats excel in careers that reward careful analysis, long-term planning, and steady accumulation of expertise. They are not the flashiest performers in the workplace, but they are often the most effective — the ones who consistently deliver results while others chase trends and burn out. Their combination of sharp intelligence and patient execution makes them exceptionally valuable in any organization that values substance over style.

The ideal Earth Rat career provides both intellectual stimulation and material security. They thrive in roles where they can build something lasting — whether that is a financial portfolio, a research program, or a business operation. Unlike more impulsive Rat variants who might jump between industries, the Earth Rat tends to go deep, becoming a recognized authority in their chosen field through years of dedicated, methodical work.

Earth Rats make excellent managers and team leaders because they combine strategic vision with genuine care for the people who work with them. They are not authoritarian; they lead through competence, fairness, and a calm steadiness that inspires trust. Their teams tend to be highly functional and loyal, because the Earth Rat invests in people the same way they invest in everything else — carefully, consistently, and with an eye toward long-term returns.`,

    idealCareers: [
      'Financial Analyst',
      'Real Estate Developer',
      'Supply Chain Manager',
      'Research Scientist',
      'Accountant',
      'Urban Planner',
      'Risk Assessment Specialist',
      'Operations Director',
    ],

    financialStyle:
      'Earth Rats are among the most financially disciplined signs in the zodiac. They are natural savers who build wealth through consistent, methodical investing rather than speculative gambles. They favor tangible assets — real estate, gold, established companies — over volatile instruments. Their financial weakness is excessive conservatism: they may miss growth opportunities by clinging too tightly to safe investments. The most successful Earth Rats learn to allocate a small percentage of their portfolio to higher-risk ventures, trusting their sharp analytical minds to identify calculated risks worth taking.',

    tips: [
      'Leverage your analytical strengths in roles that require long-term strategic thinking. Positions in financial planning, risk management, or operations management allow you to apply your natural talents while building the stable career trajectory you value.',
      'Resist the urge to play it safe in every decision. Your careful nature is an asset, but career growth sometimes requires calculated risks — a new role, a lateral move, or an entrepreneurial venture. Set clear criteria for when risk is justified, then trust your analysis.',
      'Build your network deliberately. Earth Rats tend to keep small social circles, but professional success often depends on relationships. Invest in a few key professional relationships with the same patience and care you bring to your financial investments.',
      'Develop your communication skills to match your analytical abilities. Your insights are valuable, but they only create impact if you can articulate them persuasively. Practice presenting complex ideas simply — it will accelerate your career more than any additional technical skill.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Rat is a devoted, steady, and deeply loyal partner who expresses affection through practical care and unwavering commitment. They are not the most outwardly romantic sign — grand gestures and passionate declarations are not their natural language — but their love runs deep, expressed through consistent presence, reliable support, and a genuine investment in their partner's wellbeing and happiness.

Earth Rats approach relationships with the same careful deliberation they bring to everything else. They do not fall in love quickly or recklessly; instead, they assess compatibility with a thoroughness that can sometimes frustrate more spontaneous suitors. But once an Earth Rat commits, their loyalty is absolute. They are partners who show up — day after day, year after year — with a steadfastness that builds the kind of deep trust that flashier romances rarely achieve.

The Earth Rat's primary challenge in love is vulnerability. Their need for security can make them reluctant to open up emotionally, hiding behind practical competence rather than revealing their fears and desires. The most fulfilling Earth Rat relationships are those where they feel safe enough to lower their guard, trusting that their partner will not exploit the tender uncertainty that lies beneath their composed exterior.`,

    loveStyle:
      'The Earth Rat loves through action rather than words. They show devotion by building a secure, comfortable life for their partner — managing finances wisely, maintaining a warm home, remembering preferences and routines. Their love language is acts of service and quality time rather than verbal affirmation or dramatic gestures. They are deeply sensual partners who value physical closeness as a form of reassurance and connection. In committed relationships, they are remarkably faithful and expect the same in return — betrayal of trust is the one thing an Earth Rat may never fully forgive.',

    idealPartnerTraits: [
      'Emotionally Secure',
      'Appreciative of Consistency',
      'Financially Responsible',
      'Warm and Nurturing',
      'Patient',
    ],

    tips: [
      'Practice emotional vulnerability as a relationship skill. Your partner needs to know what you feel, not just what you think. Sharing fears, hopes, and uncertainties — even when it feels risky — builds the intimacy that sustains long-term love.',
      'Recognize that your partner may express love differently than you do. Not everyone shows devotion through practical acts; some need verbal affirmation, physical affection, or quality time. Learn your partner\'s love language and speak it deliberately.',
      'Guard against turning your relationship into a project to manage. Your organizational instincts are valuable, but love also requires spontaneity, play, and the willingness to let things be imperfect. Schedule unstructured time together where nothing needs to be accomplished.',
      'Address conflict directly rather than retreating into silence. Earth Rats tend to withdraw when hurt, processing emotions internally for days before re-engaging. While you need space to think, communicate that need explicitly so your partner doesn\'t interpret silence as rejection.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Rat's constitution tends toward solidity and endurance rather than explosive energy. In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen — the organs responsible for digestion, nutrient absorption, and the transformation of food into usable energy. Earth Rats are particularly sensitive to digestive health, and their overall vitality is closely linked to the strength of their digestive system.

The most common health pattern for Earth Rats is a tendency toward stagnation. Their preference for routine and comfort can lead to sedentary habits, while their love of good food (the Rat's natural appreciation for abundance amplified by Earth's nurturing quality) can result in overeating or poor dietary choices. Weight management, particularly around the midsection, is a common concern for this sign.

Earth Rats benefit most from regular, moderate exercise and a diet that supports digestive health. They respond well to routine — consistent meal times, regular walking or cycling, and predictable sleep schedules. The key is maintaining movement and flow in a constitution that naturally tends toward stillness and accumulation.`,

    bodyAreas: ['Stomach', 'Spleen', 'Digestive System', 'Muscles'],

    exercises: [
      'Walking and hiking',
      'Swimming',
      'Tai chi',
      'Cycling',
    ],

    dietTips: [
      'Prioritize warm, cooked foods that support digestive function. Soups, stews, steamed vegetables, and whole grains are ideal for the Earth Rat constitution. Avoid excessive raw or cold foods, which can weaken the Spleen energy over time.',
      'Eat regular meals at consistent times. The Earth Rat\'s digestive system thrives on predictability. Skipping meals or eating irregularly disrupts the Spleen\'s rhythmic function and leads to energy crashes and cravings.',
      'Moderate sugar and dairy intake. The Earth element is prone to what TCM calls "dampness" — a condition characterized by sluggishness, bloating, and mental fog. Excess sugar and dairy are the primary dietary contributors to dampness accumulation.',
      'Incorporate bitter and aromatic foods to counterbalance Earth\'s heaviness. Green tea, turmeric, ginger, citrus peel, and leafy greens help stimulate digestion and prevent the stagnation that Earth constitutions are prone to.',
    ],

    mentalHealth:
      'The Earth Rat\'s greatest mental health challenge is chronic worry. Their analytical mind, while a professional asset, can become a liability when turned inward — generating endless scenarios of what could go wrong and undermining their ability to enjoy present contentment. Earth Rats benefit enormously from mindfulness practices that anchor them in the present moment rather than future anxieties. Grounding techniques — walking barefoot, gardening, working with clay or other natural materials — are particularly effective for this sign. They also thrive with routines that include regular social connection, as isolation amplifies their tendency to ruminate. Professional support can be valuable when worry escalates into generalized anxiety, a condition Earth Rats are more susceptible to than most signs.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Yellow', 'Brown', 'Gold'],
    direction: 'Center',
    gemstones: ['Citrine', 'Tiger\'s Eye', 'Yellow Jasper'],
    flowers: ['Marigold', 'Chrysanthemum', 'Sunflower'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH RATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Mikhail Baryshnikov',
        profession: 'Ballet Dancer/Choreographer',
        birthYear: 1948,
        description:
          'Mikhail Baryshnikov combined extraordinary artistic brilliance with disciplined, methodical craft — quintessential Earth Rat qualities. His defection from the Soviet Union demonstrated the Rat\'s strategic courage, while his decades-long career as one of the greatest dancers in history reflects Earth\'s patient dedication to mastery.',
      },
      {
        name: 'Ozzy Osbourne',
        profession: 'Musician',
        birthYear: 1948,
        description:
          'Despite his wild public persona, Ozzy Osbourne has demonstrated remarkable Earth Rat survival instincts throughout a career spanning over five decades. His ability to reinvent himself, manage a business empire through his family, and endure through extraordinary challenges reflects the Earth Rat\'s tenacious resourcefulness.',
      },
      {
        name: 'Prince Charles (King Charles III)',
        profession: 'Monarch',
        birthYear: 1948,
        description:
          'King Charles III embodies the Earth Rat\'s patience and long-term strategic vision. His decades-long wait for the throne, combined with his steady advocacy for environmental causes and organic farming, reflects the Earth Rat\'s ability to play the long game while remaining grounded in practical, nurturing concerns.',
      },
      {
        name: 'Al Gore',
        profession: 'Politician/Environmentalist',
        birthYear: 1948,
        description:
          'Al Gore\'s career trajectory — from methodical political climber to global environmental advocate — perfectly illustrates the Earth Rat\'s combination of strategic ambition and genuine concern for the planet. His systematic approach to climate advocacy reflects the Earth Rat\'s belief that change comes through careful planning and persistent effort.',
      },
      {
        name: 'Donna Summer',
        profession: 'Singer',
        birthYear: 1948,
        description:
          'The Queen of Disco built her legendary career through a combination of extraordinary talent and shrewd professional instincts. Donna Summer\'s ability to navigate the music industry\'s shifting landscape across multiple decades reflects the Earth Rat\'s adaptability within a framework of disciplined, steady output.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `In Chinese mythology, the Rat holds the honored position of the first animal in the zodiac cycle — a placement earned, according to legend, through cleverness rather than strength. The story tells of a great race called by the Jade Emperor to determine the zodiac order. The Rat, too small to compete physically, hitched a ride on the Ox's back and leaped ahead at the finish line. This founding myth establishes the Rat as a symbol of intelligence triumphing over brute force, strategy prevailing over raw power.

When the Earth element infuses this already resourceful animal, it creates a figure rooted in Chinese cosmological tradition as the stabilizer of new beginnings. Earth is the center element, associated with transitions between seasons and the grounding force that holds all other elements in balance. The Earth Rat therefore represents the most stable form of new beginnings — not the explosive start of Fire or the flowing start of Water, but the solid, carefully laid foundation upon which lasting structures are built. In traditional Chinese thought, the Earth Rat year was considered auspicious for establishing new enterprises, purchasing land, and beginning long-term projects that required patience and steady effort.`,

    symbolism: `The Earth Rat symbolizes the marriage of intelligence and stability — the cunning mind anchored by practical wisdom. In traditional Wu Xing symbolism, this combination represents the point where mental agility meets material reality, where clever ideas become tangible results. The Rat's Water nature (quick, adaptive, flowing) contained by Earth (solid, nurturing, stable) creates a powerful metaphor for disciplined creativity.

The Earth Rat is also associated with abundance and provision. The Rat's natural instinct to gather and store resources, enhanced by Earth's nurturing quality, makes this sign a symbol of sustainable prosperity. Unlike the feast-or-famine patterns of more volatile signs, the Earth Rat represents wealth built slowly, shared generously, and preserved wisely.`,

    modernInterpretation: `In contemporary interpretation, the Earth Rat archetype resonates strongly with modern values of sustainable living, careful financial planning, and evidence-based decision-making. In an era of viral trends and get-rich-quick schemes, the Earth Rat's patient, analytical approach offers a compelling alternative — the quiet wealth-builder who outperforms flashier investors over time, the steady professional whose expertise compounds year after year.

The Earth Rat's modern relevance extends to their approach to community and relationships. In a culture increasingly defined by superficial digital connections, the Earth Rat's preference for deep, lasting relationships and genuine acts of care represents a counter-cultural wisdom. They remind us that the most valuable things in life — trust, security, genuine connection — cannot be rushed or hacked, only built through patient, consistent investment.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
