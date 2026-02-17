// ============================================
// EARTH DRAGON (戊辰) — The Sovereign Builder
// ============================================
// The Earth Dragon combines the Dragon's visionary power
// and natural authority with Earth's stabilizing, practical
// energy, creating the most effective and enduring leader
// in the Chinese zodiac.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-dragon',
  profile: getProfileBySlug('earth-dragon')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Dragon is the most grounded and pragmatically powerful expression of the Dragon archetype. Where other Dragons may soar into grandiose visions detached from reality, the Earth Dragon builds empires that stand the test of time. The Earth element channels the Dragon's extraordinary ambition and natural authority through practical wisdom, creating a personality that combines visionary thinking with the discipline and patience to actually manifest those visions in the material world.

People born under this sign possess a commanding presence that is both impressive and approachable. Unlike the more volatile Dragon variants, the Earth Dragon's authority comes not from dramatic displays of power but from a deep, steady confidence rooted in genuine competence. They know their own worth, they know their capabilities, and they communicate both through quiet assurance rather than showmanship. When an Earth Dragon speaks, people listen — not because the Dragon demands attention, but because their track record of thoughtful, effective action has earned universal respect.

What makes the Earth Dragon truly exceptional is their rare ability to think big while building carefully. They set ambitious goals that would intimidate lesser signs, then pursue them through methodical, step-by-step execution that gradually transforms the landscape around them. They are the architects of lasting institutions, the founders of enduring enterprises, and the leaders whose influence shapes their domains for generations. The Earth Dragon does not just dream of greatness — they construct it, stone by stone, year by year.`,

    coreTraits: [
      'Visionary',
      'Authoritative',
      'Methodical',
      'Ambitious',
      'Grounded',
      'Commanding',
    ],

    strengths: [
      {
        trait: 'Visionary Pragmatism',
        description:
          'The Earth Dragon uniquely combines the ability to envision transformative possibilities with the practical intelligence to realize them. They do not just set ambitious goals — they create detailed, realistic plans for achieving them and then execute with disciplined persistence. This rare fusion of vision and pragmatism makes them among the most effective leaders and builders in the zodiac.',
      },
      {
        trait: 'Natural Authority',
        description:
          'Earth Dragons carry an inherent authority that others instinctively recognize and respect. This is not authority demanded or imposed but authority earned through consistent demonstration of competence, fairness, and strength. People naturally defer to the Earth Dragon\'s judgment, not out of fear but out of genuine trust in their ability to lead wisely.',
      },
      {
        trait: 'Institution Building',
        description:
          'No sign in the zodiac is better suited to building organizations, systems, and institutions that outlast their creator. The Earth Dragon thinks in terms of legacy — not personal fame, but the enduring structures that will continue to function and provide value long after they have moved on. This long-term thinking produces enterprises of remarkable durability.',
      },
      {
        trait: 'Generous Leadership',
        description:
          'The Earth element softens the Dragon\'s sometimes imperial temperament with genuine warmth and generosity. Earth Dragons invest heavily in the people around them — mentoring, providing opportunities, and sharing credit. Their leadership style creates loyalty not through intimidation but through the genuine advancement of everyone in their sphere of influence.',
      },
    ],

    challenges: [
      {
        trait: 'Controlling Perfectionism',
        description:
          'The Earth Dragon\'s high standards and strong vision can evolve into a need to control every detail of execution. They may struggle to delegate effectively, insisting on involvement in decisions that should be left to others. This micromanagement, born of genuine competence, paradoxically limits the scale of what they can achieve.',
      },
      {
        trait: 'Stubbornness',
        description:
          'Once an Earth Dragon has committed to a course of action, changing their mind requires evidence of near-catastrophic proportions. Their confidence in their own judgment — usually well-founded — can become a liability when circumstances change and flexibility is required. They may persist with strategies that have ceased to work rather than admitting the need for course correction.',
      },
      {
        trait: 'Emotional Distance',
        description:
          'Earth Dragons can become so focused on building and achieving that they neglect the emotional dimensions of their relationships. They may substitute material provision for emotional intimacy, assuming that providing stability and success is equivalent to providing love. Partners and children may feel well-cared-for but emotionally disconnected.',
      },
      {
        trait: 'Excessive Ambition',
        description:
          'The Dragon\'s natural appetite for greatness, even when grounded by Earth, can drive the Earth Dragon to take on more than is wise. They may overextend — financially, professionally, or physically — in pursuit of visions that exceed their current resources. Their confidence that they can handle anything sometimes collides with the reality that even Earth Dragons have limits.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dragon is inherently associated with the Earth element — it is the animal of late spring, connected to the soil's fertility and the transformative power of the land. When the Earth element is added to this naturally earthy animal, the result is a double-earth combination of extraordinary power and substance. Unlike the Earth Ox's double-earth, which manifests as immovable stability, the Earth Dragon's double-earth expresses as constructive force — the earthquake that reshapes landscapes, the volcanic eruption that creates new land. This is Earth in its most dynamic expression: not passive but actively creative, building new structures and foundations with the Dragon's visionary energy channeled through Earth's material wisdom.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Dragon's compatibility profile favors partners who respect their authority while bringing complementary strengths to the relationship. They need someone strong enough to be a genuine partner rather than a subordinate, but wise enough not to compete for dominance. The ideal Earth Dragon companion provides emotional warmth, social grace, and a grounding presence that prevents the Dragon from losing themselves in their endless projects and ambitions.

In traditional Chinese astrology, the Dragon belongs to the First Trine alongside the Rat and the Monkey — three signs united by ambition, intelligence, and charisma. These natural allies share the Dragon's drive and communicate with ease. The Dragon's most challenging pairing is with the Dog, its zodiac opposite, where the Dog's egalitarian values clash with the Dragon's natural hierarchical authority.`,

    bestMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 90,
        summary:
          'A powerful partnership where the Water Rat\'s strategic intelligence complements the Earth Dragon\'s visionary ambition. The Rat provides the detailed analysis and social navigation that the Dragon sometimes overlooks, while the Dragon provides the scope and authority that the Rat needs to operate at scale. Water nourishes Earth gently, adding flexibility to the Dragon\'s solid foundation.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 87,
        summary:
          'Two brilliant strategists united by mutual admiration and complementary talents. The Metal Monkey\'s ingenuity and adaptability pair perfectly with the Earth Dragon\'s methodical authority. Earth creates Metal in the productive cycle, meaning the Dragon naturally supports the Monkey\'s ambitions. Together, they form a formidable team capable of achieving extraordinary things.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 85,
        summary:
          'The Water Snake\'s deep wisdom and intuitive intelligence make them one of the few signs that can genuinely advise an Earth Dragon. The Snake sees what the Dragon overlooks — subtle dynamics, hidden risks, emotional undercurrents — and communicates these insights with the diplomacy the Dragon respects. This is a partnership of profound mutual respect and complementary perception.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 35,
        summary:
          'The zodiac\'s classic opposition amplified by shared stubbornness. The Earth Dog\'s egalitarian principles clash with the Earth Dragon\'s natural authority. The Dog sees the Dragon as arrogant; the Dragon sees the Dog as insubordinate. Both are deeply principled, but their principles point in different directions — the Dragon toward hierarchy and achievement, the Dog toward fairness and equality.',
      },
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 38,
        summary:
          'The Wood Rabbit\'s gentle, conflict-avoidant nature is overwhelmed by the Earth Dragon\'s commanding presence and high expectations. The Dragon\'s drive for achievement clashes with the Rabbit\'s preference for peace and comfort. Wood depletes Earth, potentially draining the Dragon\'s patience with the Rabbit\'s cautious pace.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 42,
        summary:
          'Two Dragons create a spectacular but volatile partnership. Both demand respect and authority, creating inevitable power struggles over who leads. The Fire Dragon\'s explosive energy clashes with the Earth Dragon\'s methodical approach, and neither is willing to take a subordinate role. Mutual admiration is guaranteed, but so is chronic competition.',
      },
    ],

    elementAffinity: `As a double-earth sign, the Earth Dragon has pronounced elemental dynamics. Fire signs are natural allies in the productive cycle (Fire creates Earth), providing the passion and energy that fuels the Earth Dragon's ambitious projects. Metal signs benefit from the Dragon's support (Earth creates Metal), creating productive mentorship and partnership dynamics. Water signs offer essential balance — Water's emotional depth and adaptability prevent the Earth Dragon from becoming too rigid and materially focused. Wood signs present the greatest challenge, as Wood controls Earth in the destructive cycle, meaning strong Wood personalities may undermine the Earth Dragon's authority in ways that are ultimately growthful but initially threatening.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Dragons are destined for leadership roles in substantial, lasting enterprises. They are not suited for startups that may fizzle or creative ventures without tangible outcomes — they need to build things that matter and that endure. The ideal Earth Dragon career places them at the helm of an organization, project, or institution where their combination of vision and practical execution can reshape an entire domain.

The Earth Dragon's work style is commanding but inclusive. They set clear direction, establish high standards, and expect excellence — but they also invest deeply in the development of their team, share credit generously, and create environments where talent is recognized and rewarded. They lead from the front during crises but from behind during routine operations, trusting their systems and people while maintaining strategic oversight.

Earth Dragons often accumulate significant wealth because their talent for building extends naturally to financial enterprises. They understand the value of assets, the power of compounding, and the importance of infrastructure. Their financial approach is ambitious but disciplined — they take calculated risks backed by thorough analysis, and they build diversified portfolios that reflect their preference for tangible, productive assets.`,

    idealCareers: [
      'CEO/Company Founder',
      'Real Estate Mogul',
      'Government Administrator',
      'University President',
      'Architecture Firm Partner',
      'Infrastructure Developer',
      'Hospital Administrator',
      'Venture Capital Director',
    ],

    financialStyle:
      'Earth Dragons are ambitious, strategic wealth builders who combine the Dragon\'s appetite for greatness with Earth\'s practical financial wisdom. They favor investments in tangible, productive assets — real estate, established businesses, infrastructure — and they have the patience to build wealth over decades rather than gambling on quick returns. Their financial weakness is a tendency toward empire-building that can overextend their resources. The Earth Dragon who maintains a conservative reserve alongside their ambitious investments protects themselves from the over-leverage that is their primary financial risk.',

    tips: [
      'Pursue leadership roles in organizations large enough to challenge your ambitions. The Earth Dragon needs scope — the opportunity to build something substantial and lasting. Small, capped roles will frustrate you; seek positions where your vision can expand as your competence is proven.',
      'Master the art of delegation. Your instinct to control every detail limits the scale of what you can achieve. Invest in developing trusted lieutenants, establish clear standards and processes, then step back and let your people execute. Your legacy is measured by what you built, not what you personally did.',
      'Build a personal advisory board of people who will tell you the truth. Earth Dragons are so accustomed to being right that they can create echo chambers of agreement around themselves. Seek out and protect relationships with people who will challenge your assumptions honestly.',
      'Balance professional ambition with personal relationships. Your drive to build can consume every available hour, leaving partners, children, and friends feeling like secondary priorities. Schedule personal time with the same non-negotiable commitment you bring to professional obligations.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Dragon is a generous, protective, and deeply committed partner who expresses devotion primarily through building a life of substance and security. They are not conventionally romantic — flowers and poetry are not their natural language — but their love manifests through impressive, tangible demonstrations of commitment: the beautiful home, the financial security, the life carefully constructed to provide comfort and opportunity for their family.

Earth Dragons approach relationships with the same seriousness they bring to their professional endeavors. They choose partners deliberately, committing only after thorough assessment of long-term compatibility. Once committed, they are remarkably loyal and generous — sharing their success, opening doors, and providing a standard of living that reflects both their means and their genuine desire to care for those they love.

The Earth Dragon's primary challenge in love is translating their material generosity into emotional intimacy. They may assume that providing well is the same as loving well, overlooking the emotional needs that no amount of success can satisfy. The Earth Dragon who learns to be present — not just successful — in their relationships discovers a depth of connection that enhances rather than competes with their ambitions.`,

    loveStyle:
      'The Earth Dragon loves through building and providing. Their romantic expression is grand in scale but practical in execution — creating a beautiful home, establishing financial security, investing in their partner\'s success and happiness through tangible support. They are physically affectionate but not especially verbal about their feelings, preferring to let their actions speak. They are loyal, protective, and deeply proud of their partner, whom they genuinely view as their equal even if their natural authority sometimes overshadows this belief. The Earth Dragon needs a partner strong enough to claim their own space within the relationship.',

    idealPartnerTraits: [
      'Confident',
      'Socially Graceful',
      'Emotionally Intelligent',
      'Supportive of Ambition',
      'Independent',
    ],

    tips: [
      'Invest in emotional presence, not just material provision. Your partner needs your attention, your listening, and your vulnerability — not just your success. Schedule regular time together where the agenda is connection, not accomplishment.',
      'Express appreciation and admiration verbally. Earth Dragons often assume their feelings are obvious, but your partner needs to hear them articulated. A genuine "I love you" or "I\'m proud of you" carries more weight than you realize.',
      'Share your vulnerabilities as well as your strengths. Your partner fell in love with a human being, not a monument. Allowing them to see your doubts, fears, and uncertainties deepens intimacy and gives them permission to be equally authentic.',
      'Resist the urge to solve your partner\'s problems unless asked. Your competence makes you a natural problem-solver, but sometimes your partner needs empathy, not solutions. Learn to ask "Do you want advice or do you want me to listen?" before responding.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Dragon possesses a robust, powerful constitution that can sustain heavy demands — but their very strength can become a liability when it encourages them to ignore their body's signals. In Traditional Chinese Medicine, the double-earth constitution governs the Stomach, Spleen, and the body's capacity to transform and transport nutrients. Earth Dragons need to be particularly attentive to their digestive health, metabolic function, and the subtle signs of overwork that their powerful constitution masks until problems become serious.

The most common Earth Dragon health pattern is a gradual accumulation of stress-related conditions masked by their impressive stamina. They can work through fatigue, ignore warning signs, and maintain intense output long past the point where their body is signaling distress. This often leads to conditions that seem to arrive suddenly but have actually been building for years — metabolic issues, cardiovascular strain, digestive disorders, and the physical consequences of chronic stress.

The Earth Dragon's health strategy should focus on regular preventive care, stress management, and the humility to acknowledge that even their formidable constitution has limits. Scheduled health assessments, consistent exercise, and genuine rest (not just reduced activity) are essential for maintaining the vitality that their ambitious lifestyle demands.`,

    bodyAreas: ['Stomach', 'Spleen', 'Cardiovascular System', 'Metabolism'],

    exercises: [
      'Golf or tennis',
      'Swimming',
      'Brisk walking',
      'Qigong',
    ],

    dietTips: [
      'Avoid the executive lifestyle diet trap. Earth Dragons often eat rich, heavy meals at business dinners and social events, accumulating excess dampness and weight over time. Prioritize clean, simple meals at home that support digestive function — whole grains, lean proteins, and abundant vegetables.',
      'Manage portion sizes deliberately. The Dragon\'s appetite matches their ambition, and the Earth element\'s love of abundance can lead to consistent overeating. Practice mindful eating with moderate portions, and resist the temptation to equate culinary indulgence with success.',
      'Support metabolic health with regular meal timing. The Earth Dragon\'s busy schedule often leads to irregular eating patterns that strain their digestive system. Prioritize consistent meal times even when professional demands are intense.',
      'Incorporate foods that support cardiovascular health. Fatty fish, olive oil, nuts, berries, and leafy greens protect the heart and circulatory system — the Earth Dragon\'s area of greatest long-term risk given their high-achievement, high-stress lifestyle.',
    ],

    mentalHealth:
      'The Earth Dragon\'s primary mental health risk is the isolation of leadership combined with the relentless pressure of their own ambitions. They may create a persona of invulnerable competence that prevents genuine emotional connection and makes it nearly impossible to ask for help. Over time, this isolation can evolve into a quiet depression masked by continued productivity — the Earth Dragon who seems to have everything but feels empty inside. Executive coaching, peer groups with other high-achievers, and therapy that addresses the emotional costs of sustained leadership can be profoundly valuable. The Earth Dragon who learns that strength includes vulnerability, and that connection is not weakness but a fundamental human need, discovers a more sustainable and fulfilling version of the greatness they were born to pursue.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 6, 8],
    colors: ['Gold', 'Amber', 'Brown'],
    direction: 'Center',
    gemstones: ['Amber', 'Topaz', 'Yellow Sapphire'],
    flowers: ['Peony', 'Orchid', 'Magnolia'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH DRAGONS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Shirley Temple',
        profession: 'Actress/Diplomat',
        birthYear: 1928,
        description:
          'Shirley Temple\'s remarkable trajectory — from the most famous child star in history to a respected U.S. Ambassador — perfectly illustrates the Earth Dragon\'s dual gifts of natural authority and institution-building. Her transition from entertainment to diplomacy reflects the sign\'s ability to channel commanding presence into lasting, substantive achievement.',
      },
      {
        name: 'Che Guevara',
        profession: 'Revolutionary Leader',
        birthYear: 1928,
        description:
          'Che Guevara embodied the Earth Dragon\'s combination of visionary ambition and willingness to build new structures from the ground up. His determination to transform entire societies — for better or worse — reflects the Dragon\'s appetite for greatness channeled through Earth\'s commitment to tangible, material change.',
      },
      {
        name: 'Adele',
        profession: 'Singer/Songwriter',
        birthYear: 1988,
        description:
          'Adele\'s extraordinary career demonstrates the Earth Dragon\'s ability to command global attention through authentic, grounded power. Her music — emotionally rich, technically masterful, and commercially dominant — reflects the Earth Dragon\'s gift for creating things of both substance and massive scale. Her refusal to compromise her artistic vision embodies the sign\'s quiet authority.',
      },
      {
        name: 'Rihanna',
        profession: 'Singer/Entrepreneur',
        birthYear: 1988,
        description:
          'Rihanna exemplifies the Earth Dragon\'s evolution from performer to empire builder. Her Fenty Beauty and Savage X Fenty brands demonstrate the sign\'s exceptional talent for building institutions that outlast any single achievement, combined with a natural authority that commands respect across entertainment, fashion, and business.',
      },
      {
        name: 'Andy Warhol',
        profession: 'Artist',
        birthYear: 1928,
        description:
          'Andy Warhol\'s transformation of contemporary art — building The Factory, redefining the relationship between art and commerce, and creating a cultural institution that reshaped the art world — is quintessential Earth Dragon energy. His ability to combine visionary thinking with practical business acumen reflects the sign\'s unique gift for manifesting ambitious visions in material form.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dragon is the most revered creature in Chinese mythology — the only mythological animal in the zodiac, symbolizing imperial power, divine authority, and the generative forces of nature. Unlike Western dragons, the Chinese Dragon (Long) is a benevolent force associated with rain, rivers, and the fertility of the land. The Dragon was the symbol of the Chinese Emperor, and Dragon imagery was restricted to imperial use for millennia.

When the Earth element infuses this already magnificent creature, it creates what traditional Chinese astrology considered one of the most powerful and auspicious combinations in the entire sixty-year cycle. The Earth Dragon represents the Dragon's power brought fully into the material world — not flying through clouds but shaping the very earth beneath. In Chinese geomancy (feng shui), Earth Dragon energy is associated with powerful landscape features — mountain ranges, fertile valleys, and the invisible energy lines (dragon veins) that determine the fortune of any location built upon them. The Earth Dragon year was traditionally considered ideal for founding cities, establishing dynasties, and beginning any enterprise intended to last for generations.`,

    symbolism: `The Earth Dragon symbolizes sovereign power manifested in material form. Where other Dragon variants represent power in its ethereal aspects — spiritual authority, creative inspiration, celestial force — the Earth Dragon represents power that builds, sustains, and endures. It is the power of the mountain, the foundation, and the institution that outlasts its founder.

In Wu Xing symbolism, the Earth Dragon's double-earth nature makes it the most substantial and grounded expression of Dragon energy. This is the Dragon that does not merely inspire awe but creates lasting value — the difference between a fireworks display and a cathedral. The Earth Dragon reminds us that true greatness is measured not by the brilliance of the moment but by what remains standing when the moment has passed.`,

    modernInterpretation: `In contemporary culture, the Earth Dragon archetype resonates powerfully with the values of sustainable leadership and legacy building. In an era of rapid disruption and short-term thinking, the Earth Dragon represents the counter-narrative: the leader who builds for generations, the entrepreneur who creates lasting value rather than quick exits, the institution that serves its mission decade after decade.

The Earth Dragon's modern relevance is particularly strong in emerging conversations about stakeholder capitalism, sustainable development, and long-term thinking. As the world grapples with challenges that require multi-generational solutions — climate change, institutional decay, social inequality — the Earth Dragon archetype offers a model of leadership that combines the ambition to tackle enormous problems with the patience and pragmatism to build solutions that actually work and actually last.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
