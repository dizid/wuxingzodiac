// ============================================
// EARTH MONKEY (戊申) — The Pragmatic Innovator
// ============================================
// The Earth Monkey combines the Monkey's brilliant
// ingenuity and adaptability with Earth's stabilizing,
// practical energy, creating a uniquely effective
// problem-solver who turns clever ideas into real results.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-monkey',
  profile: getProfileBySlug('earth-monkey')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Monkey is the most grounded and dependable expression of the Monkey archetype. Where other Monkey variants may dazzle with brilliant but impractical schemes, the Earth Monkey channels their considerable intelligence into solutions that actually work in the real world. The Earth element does not dim the Monkey's legendary cleverness — it focuses it, transforming scattered brilliance into concentrated, productive ingenuity that consistently produces tangible results.

People born under this sign possess a rare combination of mental agility and practical reliability. They can brainstorm innovative solutions with the speed and creativity of any Monkey, but they can also follow through on those ideas with a patience and thoroughness that the archetype usually lacks. The Earth Monkey does not just have good ideas — they have good ideas that get built, implemented, and maintained. This makes them extraordinarily valuable in any environment that requires both innovation and execution.

What truly sets the Earth Monkey apart is their sincerity. Where other Monkey variants may use their intelligence for manipulation or self-advancement, the Earth Monkey's grounding influence produces a genuine concern for fairness and practical benefit. They want their cleverness to help people, not just impress them. This combination of intelligence, reliability, and genuine goodwill makes the Earth Monkey one of the most universally well-liked and respected signs in the Chinese zodiac.`,

    coreTraits: [
      'Ingenious',
      'Reliable',
      'Adaptable',
      'Sincere',
      'Analytical',
      'Methodical',
    ],

    strengths: [
      {
        trait: 'Applied Intelligence',
        description:
          'Earth Monkeys excel at translating brilliant ideas into practical solutions. Their mental agility allows them to see innovative possibilities, while their Earth grounding ensures those possibilities are tested, refined, and implemented in ways that actually work. They are the engineers, the product designers, and the problem-solvers who bridge the gap between imagination and reality.',
      },
      {
        trait: 'Trustworthy Adaptability',
        description:
          'The Earth Monkey adapts to changing circumstances with the Monkey\'s characteristic flexibility, but they do so without losing their core reliability. When plans change, they adjust quickly and effectively while maintaining their commitments and principles. This trustworthy adaptability makes them exceptional in dynamic environments where both agility and dependability are essential.',
      },
      {
        trait: 'Social Intelligence',
        description:
          'Earth Monkeys possess the Monkey\'s natural social acuity but express it through genuine warmth rather than calculated charm. They read people accurately, communicate with wit and clarity, and navigate complex social dynamics with ease. Their social skill is grounded in authentic interest rather than strategic manipulation, which earns them lasting trust and affection.',
      },
      {
        trait: 'Systematic Thinking',
        description:
          'The Earth element adds methodical structure to the Monkey\'s quick mind, producing a thinker who can both generate creative ideas and organize them into coherent systems. Earth Monkeys excel at building frameworks, processes, and workflows that capture and multiply the value of individual insights.',
      },
    ],

    challenges: [
      {
        trait: 'Intellectual Restlessness',
        description:
          'Despite their Earth grounding, Earth Monkeys retain the Monkey\'s fundamental need for mental stimulation. They can become bored with routine tasks, even when those tasks are important, and may seek novelty at the expense of consistency. Managing this intellectual restlessness — channeling it into productive innovation rather than distracted wandering — is a lifelong challenge.',
      },
      {
        trait: 'Overthinking',
        description:
          'The combination of the Monkey\'s quick mind and Earth\'s cautious nature can produce paralytic overthinking. Earth Monkeys may analyze problems from so many angles that they lose the ability to act decisively. Their challenge is knowing when analysis has reached diminishing returns and action is required despite remaining uncertainty.',
      },
      {
        trait: 'Subtle Manipulation',
        description:
          'While the Earth Monkey is far more sincere than other Monkey variants, they still possess the archetype\'s innate ability to influence others. In moments of stress or self-interest, they may unconsciously slip into manipulative patterns — presenting information selectively, steering conversations toward predetermined conclusions, or using their social skill to engineer outcomes that serve themselves.',
      },
      {
        trait: 'Difficulty with Emotion',
        description:
          'Earth Monkeys tend to process the world through intellect rather than emotion. They may struggle to access and express their feelings, substituting analysis for authentic emotional engagement. Partners and close friends may feel that the Earth Monkey understands them intellectually but does not truly connect with them emotionally.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Monkey is inherently associated with the Metal element — the energy of precision, logic, and systematic order. When Earth meets this naturally Metal-natured animal, it creates a productive harmony: Earth creates Metal in the generative cycle, meaning the Earth element naturally supports and strengthens the Monkey's analytical gifts. This is not a tension but a nurturing relationship where Earth's practical stability provides the perfect foundation for Metal's intellectual precision. The Earth Monkey therefore operates from a position of elemental synergy — their grounding enhances rather than constrains their cleverness, producing a mind that is both brilliantly agile and practically effective.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Monkey's compatibility profile favors partners who appreciate their intelligence without being intimidated by it, and who provide the emotional depth and warmth that balances the Monkey's intellectual orientation. They need someone who can engage them mentally while also drawing them into the emotional dimensions of life that they might otherwise neglect.

In traditional Chinese astrology, the Monkey belongs to the First Trine alongside the Rat and the Dragon — three signs united by ambition, intelligence, and strategic thinking. These natural allies share the Monkey's quick mind and communicate with ease. The Monkey's most challenging pairing is with the Tiger, its zodiac opposite, where the Tiger's straightforward force clashes with the Monkey's subtle cleverness.`,

    bestMatches: [
      {
        slug: 'earth-rat',
        name: 'Earth Rat',
        score: 90,
        summary:
          'Two brilliant, grounded minds united by shared Earth energy and mutual intellectual respect. The Earth Rat\'s strategic patience complements the Earth Monkey\'s innovative agility, creating a partnership where big ideas are both generated and executed with exceptional effectiveness. Their shared practicality prevents the intellectual grandstanding that plagues less grounded pairings.',
      },
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 87,
        summary:
          'The Water Dragon\'s visionary ambition and natural authority provide the scope and direction that channels the Earth Monkey\'s ingenuity most productively. The Monkey provides tactical brilliance; the Dragon provides strategic vision. Water\'s emotional depth adds the feeling dimension that the Earth Monkey sometimes lacks.',
      },
      {
        slug: 'metal-snake',
        name: 'Metal Snake',
        score: 83,
        summary:
          'A partnership of deep mutual fascination between two of the zodiac\'s sharpest minds. The Metal Snake\'s profound perception and strategic patience complement the Earth Monkey\'s quick innovation and practical execution. Earth supports Metal in the productive cycle, creating a nurturing dynamic where the Monkey\'s grounding enhances the Snake\'s analytical power.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 28,
        summary:
          'The zodiac\'s classic opposition at its most intense. The Fire Tiger\'s direct, forceful approach fundamentally clashes with the Earth Monkey\'s subtle, strategic method. The Tiger sees the Monkey as dishonest; the Monkey sees the Tiger as brutish. Fire overwhelms Earth\'s grounding influence, leaving the Monkey feeling threatened and the Tiger feeling tricked.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 38,
        summary:
          'The Fire Horse\'s impulsive intensity conflicts with the Earth Monkey\'s calculated approach. The Horse acts on instinct; the Monkey needs to analyze first. While both signs are energetic and social, their fundamentally different decision-making processes create chronic friction that erodes mutual respect.',
      },
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 40,
        summary:
          'The Wood Pig\'s trusting, straightforward nature clashes with the Earth Monkey\'s strategic complexity. The Pig may feel manipulated by the Monkey\'s nuanced communication, while the Monkey may find the Pig\'s directness naive. Wood depletes Earth, potentially draining the Monkey\'s practical grounding.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Metal-natured animal, the Earth Monkey benefits from the productive cycle (Earth creates Metal), experiencing a natural internal harmony. Fire signs provide additional support by creating Earth through the productive cycle, adding passion and energy to the Monkey's grounded cleverness. Metal signs resonate with the Monkey's natural element, creating intellectually stimulating partnerships. Water signs can add emotional depth but challenge the Earth element (Water is created by Metal but controls Fire), creating partnerships that require conscious emotional engagement. Wood signs present the greatest challenge, as Wood controls Earth, potentially undermining the stability that makes the Earth Monkey so effective.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Monkeys excel in careers that reward both innovation and reliable execution. They are natural product developers, engineers, and project managers — professionals who can envision better solutions and then build them with practical competence. The ideal Earth Monkey career provides continuous intellectual stimulation within a framework of stable, meaningful work that produces tangible outcomes.

The Earth Monkey's work style is both creative and systematic. They approach problems with the Monkey's characteristic lateral thinking, generating unconventional solutions that others miss, then apply Earth's methodical discipline to test, refine, and implement those solutions rigorously. They are the rare innovator who also excels at operations — equally comfortable brainstorming in a whiteboard session and managing the detailed execution that brings ideas to life.

Earth Monkeys often rise to positions of significant influence because their combination of intelligence, reliability, and social skill makes them universally valued. They are not the loudest voice in the room, but they are frequently the most effective — the person whose contributions consistently make the difference between a project's success and failure.`,

    idealCareers: [
      'Product Engineer',
      'Management Consultant',
      'Software Architect',
      'Industrial Designer',
      'Property Developer',
      'Environmental Scientist',
      'Systems Analyst',
      'Technical Project Manager',
    ],

    financialStyle:
      'Earth Monkeys are clever, disciplined investors who combine innovative thinking with conservative risk management. They excel at identifying undervalued opportunities through careful analysis, then building positions patiently rather than chasing quick returns. Their financial approach balances the Monkey\'s attraction to clever strategies with Earth\'s insistence on tangible, proven value. Their weakness is a tendency to over-optimize — spending so much time finding the perfect investment or deal that they miss good opportunities through analysis paralysis. The Earth Monkey who learns to act on strong-but-imperfect analysis consistently outperforms their own expectations.',

    tips: [
      'Seek roles that challenge your intellect while rewarding practical execution. Product development, engineering, consulting, and systems design all leverage your unique combination of creative thinking and methodical follow-through.',
      'Manage intellectual boredom proactively. Build variety into your role through cross-functional projects, learning initiatives, and innovation time. The Earth Monkey who creates structured channels for their curiosity maintains engagement far longer than one who relies on their job to provide constant novelty.',
      'Develop your emotional intelligence alongside your technical skills. Your analytical ability is exceptional, but career advancement increasingly requires the ability to inspire, empathize, and connect on a human level. Invest in leadership development that builds emotional awareness.',
      'Avoid the trap of being perpetually useful but never indispensable. Your versatility can make you the go-to problem-solver without the positional authority to match your contributions. Advocate for formal recognition of your role and negotiate titles and compensation that reflect your actual impact.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Monkey is a warm, engaging, and genuinely committed partner who brings both intellectual stimulation and practical reliability to the relationship. They are fun, witty companions who keep the relationship lively through their natural curiosity and social energy, while also providing the steady, grounded presence that transforms romantic excitement into lasting partnership.

Earth Monkeys approach love with characteristic thoughtfulness. They observe potential partners carefully, evaluating compatibility through a combination of intellectual analysis and genuine emotional response. They are not impulsive romantics — they fall in love with their minds first, attracted by intelligence, humor, and the kind of practical competence that signals a good long-term partner. But once their heart engages, their commitment is deep and sincere.

The Earth Monkey's primary challenge in love is bridging the gap between intellectual understanding and emotional intimacy. They may understand their partner's feelings perfectly through analysis while failing to connect with those feelings empathically. The Earth Monkey who learns to feel alongside their partner, rather than merely understanding what their partner feels, discovers a depth of connection that transforms their relationship from good to extraordinary.`,

    loveStyle:
      'The Earth Monkey loves through engaged partnership and practical care. They are witty, attentive companions who keep the relationship intellectually stimulating while also handling the practical details of shared life with competent grace. Their love language combines quality time — engaging conversations, shared projects, collaborative problem-solving — with acts of service that demonstrate their commitment through tangible contribution. They are playful, loyal, and genuinely invested in their partner\'s growth and happiness, viewing the relationship as a collaborative project that both partners continuously improve.',

    idealPartnerTraits: [
      'Intellectually Curious',
      'Emotionally Warm',
      'Good-Humored',
      'Independently Capable',
      'Patient with Analytical Minds',
    ],

    tips: [
      'Practice emotional presence alongside intellectual engagement. When your partner shares feelings, resist the urge to analyze, solve, or reframe. Instead, simply be with them in the emotion — hold their hand, make eye contact, and let them know you feel their experience, not just understand it.',
      'Express affection in your partner\'s language, not just your own. Your natural tendency is to show love through practical help and intellectual engagement, but your partner may need verbal affirmation, physical touch, or quality time focused purely on connection rather than activity.',
      'Be honest about your tendency toward emotional avoidance. When conversations become emotionally intense, you may unconsciously deflect through humor, analysis, or changing the subject. Recognize this pattern and consciously choose to stay present even when it feels uncomfortable.',
      'Create space for genuine vulnerability in the relationship. Your composure and competence are attractive, but they can also create distance. Sharing your doubts, fears, and moments of confusion allows your partner to support you and deepens the intimacy between you.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Monkey possesses a resilient, adaptable constitution that responds well to a variety of health approaches. In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen, while the Monkey's Metal nature connects to the Lungs and Large Intestine. This creates a constitution where digestive health and respiratory function are closely interlinked, and where both are strongly influenced by mental and emotional state.

The most common Earth Monkey health pattern is the physical manifestation of mental overactivity. Their busy minds generate significant internal tension that, if not discharged through physical activity and relaxation practices, manifests in digestive complaints, respiratory sensitivity, and muscle tension — particularly in the shoulders, neck, and jaw. The Earth Monkey who "lives in their head" often neglects physical signals until symptoms become impossible to ignore.

The Earth Monkey's health strategy should focus on regular physical activity that engages the mind (preventing boredom), stress management practices that slow mental activity, and a diet that supports both their digestive and respiratory health.`,

    bodyAreas: ['Stomach', 'Lungs', 'Nervous System', 'Hands and Arms'],

    exercises: [
      'Rock climbing',
      'Martial arts',
      'Hiking with problem-solving games',
      'Dance classes',
    ],

    dietTips: [
      'Support digestive function with regular, balanced meals. The Earth Monkey\'s tendency to eat irregularly — skipping meals during intellectual absorption, then overeating during breaks — disrupts their Spleen\'s rhythmic function. Consistent meal timing is essential.',
      'Include foods that support respiratory health. Pears, white mushrooms, almonds, and honey nourish the Lungs (the Monkey\'s Metal-associated organ), while ginger and garlic provide protective warmth during cold and flu season.',
      'Moderate caffeine and stimulants carefully. The Earth Monkey\'s active mind does not need additional stimulation, and excessive caffeine can amplify anxiety, digestive issues, and the restless mental energy that is their primary health challenge.',
      'Incorporate foods rich in magnesium and B vitamins to support nervous system function. Nuts, seeds, whole grains, and dark leafy greens help calm the mental overactivity that drives many of the Earth Monkey\'s physical symptoms.',
    ],

    mentalHealth:
      'The Earth Monkey\'s primary mental health challenge is anxiety driven by mental overactivity. Their quick, analytical minds can become trapped in loops of worry, scenario-planning, and overthinking that generate chronic low-level stress without producing useful outcomes. Unlike more emotional signs whose anxiety feels dramatic, the Earth Monkey\'s anxiety is often rationalized and intellectualized, making it harder to recognize and address. Meditation — particularly structured practices like counting breaths or body scanning that give the analytical mind something to focus on — is highly effective. Physical exercise that demands full mental engagement (rock climbing, martial arts, complex dance) provides temporary relief by forcing the mind out of its loops. Cognitive behavioral therapy is an excellent fit for the Earth Monkey, as its structured, logical approach resonates with their analytical nature while providing tools to interrupt anxious thought patterns.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 7, 8],
    colors: ['Golden Yellow', 'Olive', 'Tan'],
    direction: 'West',
    gemstones: ['Citrine', 'Peridot', 'Agate'],
    flowers: ['Chrysanthemum', 'Allium', 'Bird of Paradise'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH MONKEYS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Will Smith',
        profession: 'Actor/Producer',
        birthYear: 1968,
        description:
          'Will Smith\'s career exemplifies the Earth Monkey\'s combination of quick-witted charm and disciplined execution. His ability to transition seamlessly between comedy and drama, his shrewd business decisions, and his systematic approach to building one of Hollywood\'s most successful careers reflect the sign\'s rare fusion of creative agility and practical determination.',
      },
      {
        name: 'Hugh Jackman',
        profession: 'Actor',
        birthYear: 1968,
        description:
          'Hugh Jackman\'s versatility — excelling in action blockbusters, musicals, and dramatic roles with equal competence — demonstrates the Earth Monkey\'s exceptional adaptability. His genuine warmth and likability, combined with disciplined preparation and physical commitment to his roles, reflect the sign\'s characteristic sincerity and methodical dedication.',
      },
      {
        name: 'Owen Wilson',
        profession: 'Actor/Screenwriter',
        birthYear: 1968,
        description:
          'Owen Wilson\'s career demonstrates the Earth Monkey\'s characteristic combination of sharp wit and grounded warmth. His ability to co-write critically acclaimed screenplays while maintaining a successful acting career reflects the sign\'s rare dual capacity for creative innovation and practical execution.',
      },
      {
        name: 'Celine Dion',
        profession: 'Singer',
        birthYear: 1968,
        description:
          'Celine Dion\'s extraordinary vocal talent combined with her shrewd career management and tireless work ethic embody the Earth Monkey\'s fusion of natural gift and practical discipline. Her decades-long Las Vegas residency demonstrated the sign\'s ability to build sustainable, profitable structures around creative talent.',
      },
      {
        name: 'Daniel Craig',
        profession: 'Actor',
        birthYear: 1968,
        description:
          'Daniel Craig\'s methodical, physically committed approach to reinventing James Bond reflects the Earth Monkey\'s combination of innovative thinking and grounded execution. His strategic career choices — balancing blockbusters with serious drama — demonstrate the sign\'s pragmatic intelligence applied to professional development.',
      },
      {
        name: 'Naomi Watts',
        profession: 'Actress',
        birthYear: 1968,
        description:
          'Naomi Watts\'s career demonstrates the Earth Monkey\'s patient persistence and adaptable intelligence. After years of steady work, her breakout in Mulholland Drive revealed the depth and range that the Earth Monkey develops through methodical dedication to craft, combined with the versatility to transform completely between roles.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Monkey holds a special place in Chinese mythology, most famously through Sun Wukong (the Monkey King) from the classic novel "Journey to the West." Sun Wukong embodies the Monkey archetype's most celebrated qualities: extraordinary intelligence, boundless energy, irrepressible mischief, and ultimately, the capacity for redemption through disciplined service. The Monkey is the ninth animal in the zodiac, associated with cleverness, innovation, and the ability to solve problems that defeat less agile minds.

When the Earth element grounds this quicksilver creature, the mythological significance shifts from the Monkey King's celestial adventures to a more terrestrial wisdom. The Earth Monkey in Chinese cosmological tradition represents practical ingenuity — the inventor who creates useful tools, the engineer who builds lasting infrastructure, and the problem-solver who improves daily life through clever, applied intelligence. Earth Monkey years were traditionally considered auspicious for innovation with practical application — new agricultural techniques, improved trade routes, and the development of technologies that directly served human wellbeing.`,

    symbolism: `The Earth Monkey symbolizes ingenuity grounded in practical service. In Wu Xing symbolism, this combination represents the moment when clever thinking meets material reality — when the flash of insight is tested, refined, and built into something that actually works. The Monkey's Metal nature refined by Earth's stable support creates a metaphor for intelligence that serves rather than merely dazzles.

The Earth Monkey is also a symbol of trustworthy cleverness — a rare quality in a world where intelligence and reliability are often seen as opposing traits. The Earth Monkey demonstrates that one can be both brilliantly creative and solidly dependable, challenging the assumption that the smartest people are necessarily the least reliable.`,

    modernInterpretation: `In contemporary culture, the Earth Monkey archetype resonates powerfully with the values of practical innovation, applied technology, and problem-solving that improves real lives. In an era saturated with brilliant ideas that never get built and startups that disrupt without delivering, the Earth Monkey represents the engineer, the developer, and the designer who actually ships — who transforms clever concepts into working products that people use and benefit from.

The Earth Monkey's modern relevance extends to the growing appreciation for "full-stack" thinking — the ability to conceive ideas and execute them, to strategize and implement, to innovate and maintain. In a professional landscape increasingly divided between visionaries and operators, the Earth Monkey occupies the rare middle ground where both capabilities coexist in a single, remarkably effective individual.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
