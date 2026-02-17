// ============================================
// WATER DRAGON (壬辰) — The Tidal Force
// ============================================
// The Water Dragon combines the Dragon's legendary power
// and visionary ambition with Water's depth, patience, and
// strategic wisdom — producing a force of nature that reshapes
// the world through insight as much as through strength.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-dragon',
  profile: getProfileBySlug('water-dragon')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Dragon is the most strategically brilliant and emotionally complex of all Dragon variants. Where the Dragon is already the zodiac's most powerful and ambitious sign, the Water element channels that raw power through the lens of patience, perception, and deep strategic thinking. The Water Dragon does not merely dominate — they understand, anticipate, and orchestrate outcomes with a subtlety that makes their extraordinary achievements appear almost effortless. They are the tide that reshapes coastlines: immensely powerful, patient beyond measure, and impossible to permanently resist.

What distinguishes the Water Dragon from other Dragons is the element's moderating influence on the Dragon's sometimes overwhelming ego. Water introduces humility, empathy, and a willingness to listen that other Dragon variants often lack. The Water Dragon still possesses the Dragon's legendary confidence and magnetism, but these qualities are expressed through quiet authority rather than flashy displays. They do not need to announce their power — their presence communicates it unmistakably. People sense the depth behind the Water Dragon's calm exterior and respond with a respect that goes beyond mere admiration.

Beneath the composed surface, the Water Dragon experiences a rich inner life of considerable complexity. They process the world through both intellect and emotion, creating an internal landscape of remarkable depth. This emotional intelligence gives them a significant advantage in leadership and relationships, but it also creates vulnerability: the Water Dragon feels defeats, betrayals, and disappointments with an intensity that their composed exterior conceals. Learning to process these deep feelings rather than suppressing them beneath an ocean of stoic competence is the Water Dragon's most important personal work.`,

    coreTraits: [
      'Visionary',
      'Patient',
      'Commanding',
      'Perceptive',
      'Ambitious',
      'Wise',
    ],

    strengths: [
      {
        trait: 'Strategic Vision',
        description:
          'The Water Dragon sees the long game with extraordinary clarity. Where other Dragon variants charge toward immediate objectives, the Water Dragon maps entire landscapes of possibility, identifying opportunities and threats that will not materialize for years. This foresight, combined with the Dragon\'s natural ambition, produces leaders who build empires that outlast their founders.',
      },
      {
        trait: 'Quiet Authority',
        description:
          'The Water Dragon commands respect without demanding it. Their calm, measured demeanor carries an unmistakable weight of competence and conviction that draws people into their orbit. They lead through influence rather than coercion, and their composed certainty during crises inspires confidence in everyone around them.',
      },
      {
        trait: 'Diplomatic Power',
        description:
          'Water grants the Dragon an ability to negotiate, persuade, and build coalitions that other Dragon variants achieve only through force of personality. The Water Dragon reads opposing positions with intuitive accuracy, finds creative compromises that preserve everyone\'s dignity, and builds alliances that serve their vision while genuinely benefiting all parties. This diplomatic skill makes them formidable in any arena.',
      },
      {
        trait: 'Emotional Depth',
        description:
          'The Water element gives the Dragon access to a rich emotional world that transforms raw charisma into genuine connection. The Water Dragon forms bonds of remarkable depth with those they trust, offering loyalty, protection, and support that goes far beyond strategic alliance. When a Water Dragon cares about you, you feel it in your bones.',
      },
    ],

    challenges: [
      {
        trait: 'Hidden Pride',
        description:
          'While the Water Dragon appears more humble than other Dragon variants, their pride runs just as deep — it is simply better concealed. They may react with disproportionate intensity to perceived slights, nurse grudges with patient tenacity, and withdraw their considerable support from anyone who wounds their dignity. This hidden pride can undermine relationships that the Water Dragon values deeply.',
      },
      {
        trait: 'Emotional Suppression',
        description:
          'The Water Dragon\'s composed exterior masks a rich, sometimes turbulent emotional world. They suppress feelings in the name of maintaining their authoritative presence, creating internal pressure that can manifest as physical tension, sudden outbursts, or periods of inexplicable withdrawal. Partners and close associates may feel they never truly know the Water Dragon because so much remains hidden beneath the surface.',
      },
      {
        trait: 'Perfectionist Control',
        description:
          'The Water Dragon\'s combination of vision and competence can lead them to believe they should control every significant outcome. They may micromanage projects, dominate decisions, and resist delegating to anyone they perceive as less capable — which, given their high standards, includes nearly everyone. This controlling tendency limits their scalability and exhausts their considerable but finite energy.',
      },
      {
        trait: 'Isolation at the Top',
        description:
          'The Water Dragon\'s natural authority and emotional guardedness can create an isolation they do not recognize until it becomes painful. They may have many admirers but few genuine friends, surrounded by people who respect their power but do not know their heart. The Water Dragon\'s growth depends on learning that vulnerability is not weakness but the prerequisite for the deep connection they secretly need.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dragon is associated with Earth energy — powerful, transformative, and connected to the center of all things. When Water is layered onto this Earth-natured creature, the combination follows the controlling cycle: Earth dams and contains Water, while Water erodes and reshapes Earth. This creates a personality of productive internal tension — the Dragon's ambitious Earth nature provides the vision and drive, while Water's depth and patience provide the strategic intelligence and emotional nuance to realize that vision effectively.

This Earth-Water dynamic makes the Water Dragon uniquely effective among Dragons. Earth provides the ambition and stability; Water provides the flexibility and wisdom. Together, they create a leader who can dream big (Earth) and execute patiently (Water), command respect (Dragon) and earn trust (Water). The risk lies in the controlling cycle's tension: too much Earth can dam the Water, leading to emotional suppression, while too much Water can erode the Earth, undermining the confidence and drive that power the Dragon's achievements. The Water Dragon's well-being depends on maintaining the dynamic balance between these two mighty forces.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Dragon's compatibility profile reflects their need for partners who can match their depth without competing for dominance. They seek individuals of substance — people with their own vision, strength, and emotional intelligence who can stand beside the Dragon as equals rather than orbiting as satellites. The Dragon belongs to the First Trine alongside the Rat and the Monkey — ambitious, strategic signs that share the Dragon's drive for achievement. These natural allies understand the Water Dragon's intensity without being intimidated by it.

The Dragon sits in opposition to the Dog on the zodiac wheel, creating tension between the Dragon's expansive ambition and the Dog's principled vigilance. For the Water Dragon, this dynamic is softened somewhat by Water's diplomatic influence, but the core friction between Dragon grandiosity and Dog groundedness remains.`,

    bestMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 92,
        summary:
          'A powerhouse partnership of shared ambition and strategic brilliance. The Water Rat\'s perceptive intelligence perfectly complements the Water Dragon\'s visionary leadership. Both Water signs, they share emotional depth and intuitive communication. The Rat provides the tactical precision the Dragon\'s grand vision needs, while the Dragon provides the bold direction the Rat\'s strategy serves.',
      },
      {
        slug: 'earth-monkey',
        name: 'Earth Monkey',
        score: 89,
        summary:
          'A dynamic alliance of vision and versatility. The Earth Monkey\'s innovative problem-solving and adaptable brilliance complement the Water Dragon\'s strategic depth. The Monkey provides creative energy and humor that prevent the Dragon from becoming too serious, while Earth\'s grounding influence creates stability the Water Dragon appreciates.',
      },
      {
        slug: 'wood-snake',
        name: 'Wood Snake',
        score: 86,
        summary:
          'A sophisticated partnership of mutual fascination and complementary wisdom. The Wood Snake\'s philosophical depth and refined intelligence intrigue the Water Dragon, creating a bond built on genuine intellectual and emotional respect. Water nourishes Wood, meaning the Dragon naturally supports the Snake\'s growth, while the Snake\'s perceptiveness provides the Dragon with rare honest feedback.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 35,
        summary:
          'The Dragon and Dog sit at opposite ends of the zodiac, creating fundamental tension between the Dragon\'s grand ambition and the Dog\'s skeptical vigilance. The Earth Dog questions the Water Dragon\'s authority, which the Dragon experiences as disrespect. The Dog finds the Dragon arrogant and insufficiently concerned with ordinary people\'s needs.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 40,
        summary:
          'Two powerful, commanding signs that struggle to share the throne. The Fire Tiger\'s fierce independence and competitive intensity create power struggles with the Water Dragon\'s need for strategic control. Both are natural leaders; neither yields easily. Water\'s cooling effect on Fire adds frustration rather than harmony in this context.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 42,
        summary:
          'The Metal Ox\'s rigid determination and methodical pace clash with the Water Dragon\'s expansive vision and strategic flexibility. The Ox demands predictability; the Dragon demands room to maneuver. Metal and Water interact productively in theory, but the fundamental temperamental gap between these two stubborn signs requires significant mutual accommodation.',
      },
    ],

    elementAffinity: `As a Water-element sign with an Earth-natured animal, the Water Dragon navigates a complex internal and external elemental landscape. Metal signs are powerful allies — Metal generates Water, reinforcing the Dragon's strategic depth while providing the structural discipline their ambitious nature benefits from. Water signs create deeply intuitive connections with shared emotional wavelength. Wood signs receive natural nourishment from the Water Dragon (Water feeds Wood), creating partnerships where the Dragon's depth supports others' growth. Fire signs present a challenging dynamic — Water controls Fire, potentially dampening a Fire partner's enthusiasm, though the Dragon's Earth nature feeds Fire, creating a complex, push-pull relationship. Earth signs offer stability but may create excessive heaviness when combined with the Dragon's own Earth nature, leading to stubbornness and stagnation.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Dragon is built for leadership at the highest levels. They excel in careers that require long-term strategic thinking, the ability to manage complex organizations, and the authority to make consequential decisions. Unlike more flamboyant Dragon variants, the Water Dragon leads from a position of deep competence rather than charismatic display — their authority derives from their track record, their strategic vision, and the quiet confidence that comes from genuinely understanding the terrain.

The ideal Water Dragon career places them at the intersection of power and purpose. They are drawn to roles where their decisions shape outcomes that matter — building organizations, guiding policy, managing significant resources, or advancing causes they believe in. Corporate leadership, government, strategic consulting, venture capital, academic leadership, and large-scale project management all suit the Water Dragon's combination of ambition, patience, and strategic intelligence.

The Water Dragon's financial instincts are among the strongest in the zodiac. They understand power dynamics, long-term value creation, and the patience required to build lasting wealth. Their approach to money mirrors their approach to everything: strategic, disciplined, and oriented toward building something enduring rather than chasing quick returns.`,

    idealCareers: [
      'CEO or Executive Director',
      'Venture Capitalist',
      'Government Minister',
      'Strategic Consultant',
      'University President',
      'Film Director',
      'Architect',
      'Foundation Director',
    ],

    financialStyle:
      'The Water Dragon approaches wealth building with the same strategic patience they bring to all their endeavors. They think in decades, not quarters, making investment decisions based on long-term value creation rather than short-term market movements. Their financial instincts are sharp — they can assess the fundamental strength of an opportunity with remarkable accuracy. The Water Dragon\'s financial challenge is their tendency to tie too much of their identity to material success. While they are gifted wealth builders, they must guard against the belief that their worth as a person is measured by their net worth. The Water Dragon who separates self-esteem from financial performance makes clearer decisions and enjoys their prosperity more fully.',

    tips: [
      'Delegate with genuine trust. Your high standards and strategic vision make delegation feel risky, but your inability to scale personally is your greatest leadership limitation. Develop talent deliberately, invest in people\'s growth, and accept that 80% of your quality executed by someone else frees you to focus on the 20% only you can do.',
      'Build a kitchen cabinet of honest advisors. Surround yourself with people who will tell you the truth rather than what you want to hear. Your authority naturally discourages pushback, so you must actively create spaces where dissent is safe and valued.',
      'Balance ambition with presence. Your strategic mind is always scanning the horizon, which can prevent you from appreciating what you have already built. Schedule regular reflection on accomplishments, not just future goals. The Water Dragon who celebrates milestones sustains motivation far longer than the one who only sees what remains undone.',
      'Invest in relationships outside your professional sphere. Your tendency to evaluate every connection through a strategic lens can leave you surrounded by useful people but lacking genuine friends. Cultivate relationships with people who have nothing to offer you professionally — their honest companionship is priceless.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Dragon in love is a formidable and deeply rewarding partner — for those strong enough to stand beside them. They bring the Dragon's legendary passion and generosity to their romantic relationships, but Water adds a depth of emotional engagement and strategic patience that makes their love more sustainable and nuanced than the explosive romances other Dragon variants tend to create.

When a Water Dragon commits to a partner, they invest with characteristic thoroughness. They study their partner's needs, anticipate their desires, and create a relationship environment of remarkable security and ambition. The Water Dragon's partner benefits from their considerable resources — not just material, but emotional and strategic. Being loved by a Water Dragon means having a powerful ally who will champion your growth, protect your interests, and hold your hand through difficulty with calm, unwavering strength.

The Water Dragon's romantic challenge is relinquishing control. Their strategic mind and protective instincts can lead them to manage the relationship rather than participate in it — directing rather than collaborating, providing rather than sharing. The Water Dragon who learns to be vulnerable, to receive as well as give, and to follow as well as lead discovers a depth of intimacy that even their considerable imagination had not anticipated.`,

    loveStyle:
      'The Water Dragon loves with measured intensity — a deep, steady flame rather than a wildfire. They express affection through protection, provision, and strategic support, ensuring their partner has everything they need to thrive. Their love language combines quality time with acts of service: they want to spend meaningful time together and demonstrate their devotion through tangible actions. They need a partner who appreciates their depth rather than demanding constant verbal reassurance, and who has the strength to push back when the Dragon\'s protective instincts become controlling.',

    idealPartnerTraits: [
      'Intellectually Substantial',
      'Emotionally Independent',
      'Honest',
      'Ambitious in Their Own Right',
      'Warm and Expressive',
    ],

    tips: [
      'Let your partner lead sometimes. Your instinct to direct every significant decision limits your partner\'s growth and creates a dynamic of dependence rather than partnership. Actively step back on decisions that are primarily their domain, and trust their judgment as you would want them to trust yours.',
      'Express emotions before they become strategic analyses. When you feel something, share the feeling — not your assessment of the feeling. "I feel hurt" is more connecting than "I have identified a pattern in our communication that requires adjustment." Let your partner see the human beneath the strategist.',
      'Accept imperfection in your partner and yourself. Your high standards, applied to love, can make your partner feel they are being evaluated rather than cherished. Love requires accepting the full person, including the parts that do not meet your standards of excellence.',
      'Create space for playfulness. Your serious, strategic nature needs the leavening influence of genuine play. Laugh together, be silly together, do things that serve no purpose other than shared joy. The Water Dragon who learns to play discovers a lightness that makes their considerable strength even more attractive.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Dragon's constitution combines the Dragon's powerful, somewhat excessive vitality with Water's influence on the body's deep reserves and fluid systems. In Traditional Chinese Medicine, the Dragon's Earth nature governs the Spleen and Stomach — the body's center of digestion and energy transformation — while the Water element governs the Kidneys, which store foundational vitality. This combination creates a person of remarkable endurance whose health depends on maintaining the balance between output and replenishment.

The characteristic Water Dragon health pattern is the gradual depletion of deep reserves through sustained, high-level output. Unlike signs that burn out suddenly, the Water Dragon can maintain extraordinary productivity for years, drawing on kidney jing (foundational energy) when their daily reserves are exhausted. The danger is that this deep reserve, once depleted, takes significant time and effort to restore. Warning signs include persistent lower back pain, declining libido, difficulty recovering from illness, and a subtle but progressive loss of the drive and vitality that characterize the Dragon at their best.

Prevention for the Water Dragon centers on sustainable pacing and deep restoration. Regular periods of genuine rest — not just reduced activity, but actual withdrawal from the demands of leadership and achievement — allow the kidneys to replenish the foundational energy the Water Dragon depends on. The Water Dragon who builds rest into their strategy rather than treating it as weakness enjoys the remarkable longevity their constitution is designed for.`,

    bodyAreas: ['Kidneys', 'Digestive System', 'Lower Back', 'Adrenals'],

    exercises: [
      'Swimming for full-body, low-impact conditioning',
      'Qigong for energy cultivation',
      'Weight training with adequate recovery',
      'Hiking in mountainous terrain',
    ],

    dietTips: [
      'Support kidney vitality with nourishing, mineral-rich foods: bone broth, organ meats, shellfish, seaweed, and black sesame seeds. These foods replenish the deep reserves the Water Dragon draws upon and support the foundational energy that powers their ambitious lifestyle.',
      'Maintain digestive health with warm, well-cooked meals. The Dragon\'s Earth nature makes the digestive system central to overall well-being. Avoid skipping meals during intense work periods — consistent nourishment prevents the energy crashes that force reliance on deep reserves.',
      'Include adaptogenic herbs that support adrenal function: ashwagandha, reishi mushroom, cordyceps, and ginseng. These herbs help the Water Dragon sustain their high output without depleting foundational energy, bridging the gap between ambition and sustainable performance.',
      'Balance rich, nourishing foods with lighter fare to prevent digestive stagnation. The Water Dragon\'s tendency toward power meals can overwhelm the digestive system. Alternate between substantial, restorative meals and lighter, easier-to-digest options to maintain optimal metabolic function.',
    ],

    mentalHealth:
      'The Water Dragon\'s most significant mental health challenge is the isolation that accompanies their natural authority and emotional guardedness. They carry the weight of leadership with characteristic stoicism, rarely sharing their doubts, fears, or vulnerabilities with anyone. Over time, this isolation can evolve into a chronic loneliness that their busy, productive exterior conceals effectively. The Water Dragon benefits enormously from at least one relationship of complete emotional transparency — a partner, friend, or therapist with whom they can remove the armor entirely. Executive coaching that addresses not just performance but emotional well-being is particularly effective for this sign. Physical practices that release stored tension — massage, acupuncture, martial arts, or intensive swimming — help discharge the physical manifestations of emotional suppression. The Water Dragon who learns that seeking support is a sign of wisdom rather than weakness discovers that their considerable strength is actually magnified, not diminished, by the honest acknowledgment of their human needs.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 6, 7],
    colors: ['Blue', 'Black', 'Silver', 'Gold'],
    direction: 'North',
    gemstones: ['Black Pearl', 'Sapphire', 'Amethyst'],
    flowers: ['Blue Hydrangea', 'Water Lotus', 'Dragon Flower'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER DRAGONS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Vladimir Putin',
        profession: 'Russian President',
        birthYear: 1952,
        description:
          'Vladimir Putin exemplifies the Water Dragon\'s combination of strategic patience, quiet authority, and long-term vision. His calculated approach to power, ability to project calm authority, and decades-long grip on leadership reflect the sign\'s characteristic blend of ambition, patience, and deep strategic intelligence.',
      },
      {
        name: 'Robin Williams',
        profession: 'Actor/Comedian',
        birthYear: 1952,
        description:
          'Robin Williams\' extraordinary talent contained the Water Dragon\'s full spectrum — boundless creative energy, deep emotional intelligence, and a generosity of spirit that touched millions. His brilliant comedic performances masked a profound emotional depth that reflected the Water Dragon\'s hidden inner complexity.',
      },
      {
        name: 'Patrick Swayze',
        profession: 'Actor/Dancer',
        birthYear: 1952,
        description:
          'Patrick Swayze\'s combination of physical grace, emotional depth, and quiet intensity embodied the Water Dragon\'s rare fusion of power and sensitivity. His most beloved performances channeled the sign\'s ability to be simultaneously strong and vulnerable.',
      },
      {
        name: 'Liam Neeson',
        profession: 'Actor',
        birthYear: 1952,
        description:
          'Liam Neeson\'s commanding screen presence and ability to convey quiet authority with emotional depth reflect the Water Dragon\'s essential nature. His career trajectory from theatrical classicist to action star demonstrates the sign\'s adaptability and enduring vitality.',
      },
      {
        name: 'Mr. T',
        profession: 'Actor/Wrestler',
        birthYear: 1952,
        description:
          'Mr. T\'s transformation from bodyguard to cultural icon demonstrates the Water Dragon\'s ability to build a powerful personal brand through a combination of physical presence and strategic self-presentation. His signature style and memorable persona reflect the Dragon\'s instinct for making an unforgettable impression.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dragon is the fifth and most revered animal in the Chinese zodiac — the only mythical creature in the sequence and the symbol of imperial power, divine authority, and cosmic transformation. In Chinese mythology, the Dragon is not a fearsome monster but a benevolent guardian who controls rain, rivers, and the water cycle itself. The Dragon's association with Water is thus deeply rooted in Chinese cosmology: the Dragon is the master of water in all its forms, from gentle rain to raging floods.

When the Water element is explicitly paired with the Dragon, this mythological connection reaches its fullest expression. The Water Dragon represents the Dragon in its most natural and powerful state — the cosmic serpent fully immersed in its native element. Classical Chinese texts describe the Water Dragon as the most auspicious of all Dragon combinations, embodying the union of supreme power with supreme wisdom. The Water Dragon was associated with the emperor at his wisest — ruling not through force but through understanding, not through intimidation but through the natural authority that comes from deep knowledge and genuine care for the realm.

In Chinese rain-making traditions, the Water Dragon is the deity invoked during drought — the being capable of releasing the life-giving waters that sustain civilization. This mythological role connects the Water Dragon to themes of abundance, renewal, and the responsible use of power for the benefit of all.`,

    symbolism: `The Water Dragon symbolizes the ultimate expression of power refined by wisdom. In traditional symbolism, it represents the principle that true sovereignty comes not from the ability to destroy but from the ability to nourish — like the dragon who brings rain to parched fields rather than fire to helpless villages. This benevolent interpretation of power is the Water Dragon's essential teaching.

In the Wu Xing cycle, the Water Dragon embodies the dynamic tension between Earth (the Dragon's nature) and Water (its element). Earth contains Water; Water shapes Earth. This symbolizes the productive relationship between ambition and patience, between the drive to build and the wisdom to know when to wait. The Water Dragon reminds us that the greatest achievements are built by those who can hold their vision firmly (Earth) while adapting their approach fluidly (Water).

The Water Dragon also symbolizes hidden depth — the vast reservoir of power, wisdom, and emotional richness that lies beneath a calm, authoritative surface. Like the ocean that appears serene on the surface while containing unfathomable depth and power below, the Water Dragon represents the understanding that the most powerful forces are often the least visible.`,

    modernInterpretation: `In contemporary culture, the Water Dragon archetype resonates with evolving understanding of what effective leadership looks like in an increasingly complex world. The command-and-control leadership model is giving way to approaches that value strategic patience, emotional intelligence, and the ability to build consensus across diverse stakeholders — all core Water Dragon competencies. The Water Dragon\'s natural style is increasingly recognized as the most sustainable and effective form of leadership.

The Water Dragon also speaks to the modern appreciation for leaders who combine vision with humility. In a world weary of ego-driven leadership, the Water Dragon\'s quiet authority and genuine strategic depth offer a compelling alternative. They build organizations and movements that outlast individual charisma because their leadership is rooted in substance rather than spectacle.

For those born in Water Dragon years, the contemporary world offers extraordinary scope for their considerable talents. The global challenges of the twenty-first century — climate change, geopolitical complexity, technological disruption — demand exactly the combination of long-term vision, strategic patience, and empathetic authority that the Water Dragon naturally provides. The question for the Water Dragon is not whether they have the capability to lead on the global stage, but whether they have the wisdom to do so without losing their humanity in the process.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
