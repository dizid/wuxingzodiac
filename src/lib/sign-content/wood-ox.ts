// ============================================
// WOOD OX (甲丑) — The Steadfast Cultivator
// ============================================
// The Wood Ox blends the Ox's legendary endurance and
// determination with Wood's flexibility and compassion,
// creating a patient builder of lasting legacies.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-ox',
  profile: getProfileBySlug('wood-ox')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Ox is perhaps the most balanced and approachable of all Ox-element combinations. The Ox — famously stubborn, hardworking, and methodical — is mellowed by the Wood element's gift of flexibility, empathy, and openness to new ideas. The result is a person who retains the Ox's extraordinary determination and work ethic while adding a warmth and adaptability that pure Ox types often lack.

People born under this sign are natural cultivators in every sense of the word. They understand that lasting success comes from patient, consistent effort — planting seeds, tending growth, and waiting for the harvest rather than demanding instant results. The Wood Ox builds things that endure: careers, relationships, organizations, and communities rooted in strong values and careful stewardship. They are the people who show up every day, do the work others find tedious, and somehow make the whole enterprise feel more humane in the process.

What makes the Wood Ox particularly compelling is their ability to combine strength with gentleness. They possess the Ox's formidable resolve — once committed to a course, they are nearly impossible to deter — but they pursue their goals with a consideration for others that earns deep respect and loyalty. The Wood Ox does not bulldoze through opposition; they grow around it, finding creative paths that honor both their objectives and the needs of those around them.`,

    coreTraits: [
      'Patient',
      'Dependable',
      'Compassionate',
      'Principled',
      'Resilient',
      'Methodical',
    ],

    strengths: [
      {
        trait: 'Unwavering Reliability',
        description:
          'When a Wood Ox makes a commitment, it is as good as done. Their combination of Ox determination and Wood integrity makes them the most trustworthy sign in the zodiac. Colleagues, friends, and family know that the Wood Ox will follow through — quietly, thoroughly, and without complaint. This reliability is their greatest professional and personal asset.',
      },
      {
        trait: 'Patient Growth',
        description:
          'The Wood Ox understands that meaningful achievements take time. They are comfortable with slow, steady progress when others demand instant gratification. This patience, rooted in Wood\'s connection to natural cycles and the Ox\'s endurance, allows them to build foundations so solid that the structures they support last for generations.',
      },
      {
        trait: 'Ethical Leadership',
        description:
          'Wood Oxen lead by example and principle. They do not seek power for its own sake but accept responsibility when their values demand it. Their leadership style is inclusive, principled, and deeply fair — they consider the impact of decisions on everyone affected, not just the bottom line. Teams led by Wood Oxen feel safe, valued, and motivated.',
      },
      {
        trait: 'Flexible Determination',
        description:
          'The Wood element tempers the Ox\'s legendary stubbornness with adaptability. The Wood Ox can adjust their approach without abandoning their goals — a crucial distinction that makes them far more effective than rigid Ox types. They bend like a young tree in a storm: yielding temporarily while remaining deeply rooted in their purpose.',
      },
    ],

    challenges: [
      {
        trait: 'Excessive Caution',
        description:
          'The Wood Ox\'s preference for careful, methodical progress can become a liability when bold action is required. They may delay important decisions while gathering more information, miss windows of opportunity that demand quick responses, or hold onto safe positions when circumstances call for a leap of faith.',
      },
      {
        trait: 'Difficulty with Change',
        description:
          'Despite being more flexible than other Ox types, the Wood Ox still finds rapid or imposed change deeply unsettling. They prefer evolution over revolution and may resist necessary transformations simply because they disrupt established routines. Learning to embrace productive disruption is an ongoing challenge.',
      },
      {
        trait: 'Suppressed Emotions',
        description:
          'The Ox\'s stoic nature combined with Wood\'s tendency to internalize can create emotional blockages. Wood Oxen may bury frustration, sadness, or resentment beneath a calm exterior until the pressure becomes unsustainable. When they finally express these accumulated emotions, the release can surprise everyone — including themselves.',
      },
      {
        trait: 'Overcommitment',
        description:
          'The Wood Ox\'s reliability and compassion make them the person everyone turns to in a crisis. Their inability to refuse a genuine request for help can lead to an unsustainable burden of obligations. They may take on others\' problems at the expense of their own well-being, burning out slowly and silently.',
      },
    ],

    elementInfluence: `Wood's influence on the Ox is transformative in the most positive sense. The Ox is an Earth-associated animal — grounded, stable, and resistant to change. Wood energy, which represents growth and upward movement, adds vitality and flexibility to the Ox's solid foundation. In the productive cycle, Wood overcomes Earth through the penetrating power of roots breaking through soil — but in the Wood Ox, this dynamic manifests not as conflict but as enrichment. The Wood element softens the Ox's rigidity, opens their heart to compassion, and gives them the ability to grow and adapt while maintaining their essential strength. This combination creates one of the zodiac's most balanced signs: strong without being harsh, flexible without being weak, and nurturing without being passive.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Ox's compatibility is built on a foundation of trust, shared values, and mutual respect. This sign needs a partner who appreciates steady devotion over dramatic passion and who is willing to invest in a relationship that deepens over time rather than burning bright and fast. The Ox belongs to the second trine alongside the Snake and the Rooster, sharing these animals' thoughtfulness, discipline, and commitment to excellence.

The Wood element makes this Ox more emotionally accessible than other Ox types, expanding their compatibility with signs that might find a pure Metal or Earth Ox too rigid. However, the Wood Ox still struggles with partners who are unpredictable, emotionally volatile, or fundamentally opposed to the structured, values-driven life the Wood Ox builds.`,

    bestMatches: [
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 90,
        summary:
          'A deeply harmonious second-trine pairing. The Water Snake\'s intuitive wisdom and quiet depth complement the Wood Ox\'s patient strength beautifully. Water nourishes Wood, creating a relationship where the Snake\'s emotional intelligence and perceptiveness sustain the Wood Ox\'s growth. Both signs value loyalty and substance over flash, building a partnership of profound understanding and mutual support.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 87,
        summary:
          'A productive second-trine alliance where the Fire Rooster\'s passion and precision energize the Wood Ox\'s steady nature. Wood feeds Fire, so the Wood Ox naturally supports and fuels the Rooster\'s ambitions. The Rooster\'s attention to detail complements the Ox\'s work ethic, and their shared commitment to excellence creates a power couple dynamic built on mutual respect.',
      },
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 84,
        summary:
          'The Water Rat\'s social intelligence and adaptability pair wonderfully with the Wood Ox\'s reliability and warmth. Water nourishes Wood, and the Rat\'s resourceful energy keeps the Ox\'s life from becoming too routine. In return, the Wood Ox provides the security and stability that the Rat deeply craves. Their differences complement rather than clash.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 30,
        summary:
          'The Ox and Goat sit in direct opposition on the zodiac wheel, creating fundamental tension around lifestyle and values. The Fire Goat\'s emotional intensity and need for creative freedom clashes with the Wood Ox\'s structured, methodical approach. The Goat finds the Ox stifling; the Ox finds the Goat unreliable. Bridging this divide requires both signs to stretch far beyond their comfort zones.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 32,
        summary:
          'The Fire Horse\'s explosive energy and resistance to routine overwhelms the Wood Ox\'s preference for stability and predictability. The Ox\'s methodical pace frustrates the Horse\'s need for speed and spontaneity. Fire burns Wood, adding an element of energetic friction that makes sustained harmony difficult without significant compromise.',
      },
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 38,
        summary:
          'Two strong-willed signs locked in a battle of wills. The Metal Dragon\'s commanding ambition and need for control collides with the Wood Ox\'s quiet but immovable determination. Metal overcomes Wood in the destructive cycle, meaning the Dragon\'s sharp energy can cut into the Ox\'s gentle nature. Power struggles are frequent unless both consciously yield ground.',
      },
    ],

    elementAffinity: `The Wood Ox thrives with Water-element partners, who nourish Wood's growth and provide emotional sustenance that this sometimes stoic sign desperately needs. Fire-element partners can be energizing — Wood feeds Fire — creating relationships where the Wood Ox's steady support fuels the Fire partner's ambitions. Earth-element partners share the Ox's grounded nature, creating stable but sometimes stagnant pairings that need conscious effort to stay dynamic. Metal-element partners present the greatest challenge, as Metal cuts Wood in the destructive cycle. Relationships with Metal signs may feel restrictive or critical, as if the Wood Ox's natural growth is being pruned against their will.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Ox is the zodiac's most reliable professional. They bring a combination of work ethic, integrity, and collaborative spirit that makes them invaluable in any organization. Unlike flashier signs that burn bright and fade, the Wood Ox builds a career of steadily increasing impact — climbing through consistency, earning trust through demonstrated competence, and leading through principled example.

Their ideal career combines meaningful work with structured progress. Wood Oxen thrive in environments where quality matters more than speed, where relationships are valued over transactions, and where long-term thinking is rewarded. They excel in roles that require both expertise and empathy — positions where technical skill must be combined with the ability to work with diverse teams and stakeholders.

Financially, the Wood Ox is among the most prudent and successful signs. They save diligently, invest conservatively, and build wealth through compound growth rather than speculative bets. Their relationship with money reflects their broader philosophy: slow, steady, and sustainable. The Wood Ox's financial weakness is an occasional reluctance to invest in themselves — they may underspend on professional development, self-care, or tools that would multiply their effectiveness.`,

    idealCareers: [
      'Sustainable Agriculture Manager',
      'Civil Engineer',
      'Healthcare Administrator',
      'Financial Planner',
      'Education Administrator',
      'Environmental Scientist',
      'Real Estate Developer',
      'Nonprofit Program Director',
    ],

    financialStyle:
      'The Wood Ox is a patient, conservative wealth builder who understands the power of compound returns. They save consistently, avoid unnecessary risk, and build financial security methodically over decades. Their portfolios favor stable, value-oriented investments — real estate, index funds, and established companies with strong fundamentals. They are generous with those they love but careful about speculative ventures. Their financial blind spot is under-investing in growth opportunities that require upfront risk — sometimes the safe path leaves significant returns on the table.',

    tips: [
      'Take calculated risks earlier in your career. Your preference for proven paths is an asset later in life, but early career is the time to explore, experiment, and accept the possibility of failure. The Wood Ox who steps outside their comfort zone in their twenties and thirties builds a much more interesting and rewarding career than one who plays it safe from the start.',
      'Develop your communication and presentation skills. Your work speaks for itself, but in competitive environments, being able to articulate your value is essential. Invest in public speaking, writing, or any skill that helps your competence become visible to decision-makers.',
      'Seek mentors who complement your temperament. Look for advisors who are more risk-tolerant, innovative, or unconventional than you naturally are. Their perspective will expand your strategic thinking and help you spot opportunities your cautious nature might overlook.',
      'Build recovery time into your schedule. Your capacity for sustained effort is extraordinary, but you are not immune to burnout. Schedule downtime with the same discipline you apply to work — treat rest as a productive investment, not a guilty indulgence.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Ox approaches love with the same patient, principled determination they bring to everything else. They are not impulsive romantics or dramatic lovers — they are builders of deep, enduring partnerships rooted in mutual respect, shared values, and unwavering commitment. When a Wood Ox chooses a partner, they choose for life, investing steadily in the relationship's growth and weathering difficulties with a quiet strength that less resilient signs cannot match.

In relationships, the Wood Ox is a rock. They provide stability, security, and a reliable presence that their partner can always count on. Their affection is expressed through actions rather than words — they will fix the leaky faucet, handle the finances, remember the anniversary, and show up at every important event without being asked. This practical devotion, while deeply meaningful, can sometimes feel understated to partners who crave more verbal or demonstrative expressions of love.

The Wood element adds a tenderness to the Ox that makes them more emotionally available than other Ox types. They are capable of deep feeling and genuine empathy, even if expressing those emotions does not come naturally. The Wood Ox's greatest romantic growth comes from learning to translate their inner emotional world into outward expressions that their partner can see and feel.`,

    loveStyle:
      'The Wood Ox loves through steadfast presence, practical care, and quiet devotion. They are the partner who builds a life with you — brick by brick, year by year — creating something solid and beautiful through consistent effort. Their loyalty is absolute once committed, and their patience with a partner\'s flaws is extraordinary. They express love through reliability, protection, and the thousand small acts of service that make daily life smoother and warmer. What they need in return is appreciation, patience with their reserved emotional expression, and a partner who values depth over drama.',

    idealPartnerTraits: [
      'Patient and Understanding',
      'Values Stability',
      'Emotionally Expressive',
      'Appreciates Acts of Service',
      'Shares Core Values',
    ],

    tips: [
      'Express your feelings verbally, even when it feels awkward. Your partner cannot always read your devotion from your actions alone. A simple "I love you" or "I appreciate you" spoken aloud carries more weight than you might realize.',
      'Create space for spontaneity in your relationship. Your preference for routine and predictability is comforting, but relationships also need surprise, adventure, and the occasional break from the plan. Say yes to the unexpected invitation.',
      'Address conflicts promptly instead of letting them simmer. Your tendency to absorb frustration silently can lead to resentment that poisons the relationship from within. Honest, timely conversations about disagreements are essential for the long-term health of your partnerships.',
      'Show vulnerability as a strength. Allowing your partner to see your fears, doubts, and insecurities is not weakness — it is the deepest form of trust. The Wood Ox who learns to be emotionally open discovers a level of intimacy that protective stoicism can never achieve.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Ox possesses remarkable natural stamina and physical resilience. Their constitution is fundamentally strong — they can endure physical demands that would exhaust other signs, and they tend to recover well from illness and injury. However, the combination of Wood's liver sensitivity and the Ox's tendency to suppress emotions creates specific health vulnerabilities that require attention.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Ox's Earth nature affects the spleen and digestive system. The Wood Ox is particularly susceptible to conditions arising from stagnant liver qi — a pattern triggered by suppressed anger, frustration, or chronic stress. Symptoms include muscle tension, digestive irregularities, headaches, and irritability that seems disproportionate to its trigger.

The Wood Ox's health strategy should center on movement and emotional flow. Their bodies need regular, moderate exercise to keep energy circulating, and their emotional lives need outlets for the feelings they tend to suppress. The Wood Ox who addresses both physical and emotional stagnation can enjoy extraordinary vitality well into old age.`,

    bodyAreas: ['Liver', 'Spleen and Stomach', 'Tendons and Muscles', 'Lower Back'],

    exercises: [
      'Walking or hiking at a steady pace',
      'Strength training with proper form',
      'Gardening and outdoor physical work',
      'Gentle stretching or restorative yoga',
    ],

    dietTips: [
      'Focus on warming, nourishing foods that support both liver and digestive health. Root vegetables, whole grains, lean proteins, and bone broths provide the sustained energy the Wood Ox\'s hardworking body requires.',
      'Incorporate bitter greens and liver-supporting foods like dandelion, artichoke, and turmeric. These help maintain healthy liver function and prevent the stagnation that the Wood Ox\'s suppressed emotional patterns can create.',
      'Avoid excessive cold, raw foods that can weaken the spleen qi. The Ox\'s Earth-associated digestive system functions best with cooked, warm meals that are easy to assimilate. Save the raw salads for summer.',
      'Eat mindfully and at regular intervals. The Wood Ox\'s tendency to work through meals or eat on autopilot disconnects them from their body\'s signals. Slow, conscious eating improves digestion and helps them stay attuned to their physical needs.',
    ],

    mentalHealth:
      'The Wood Ox\'s central mental health challenge is the management of suppressed emotions, particularly anger and frustration. Their stoic exterior conceals a rich emotional interior that rarely receives adequate expression. Over time, this suppression can manifest as chronic irritability, passive-aggressive behavior, or sudden emotional outbursts that seem to come from nowhere. The Wood Ox benefits enormously from regular practices that encourage emotional release — whether through physical activity, creative expression, or therapeutic conversation. Talk therapy can be transformative for this sign, providing a structured, safe space to explore feelings they find difficult to express spontaneously. Wood Oxen should also guard against the tendency to measure their worth entirely through productivity. Their identity can become dangerously entangled with their work ethic, leading to a pattern where rest feels like failure and personal needs are perpetually deferred. Learning that they are valuable beyond their output is one of the Wood Ox\'s most important emotional journeys.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 5],
    colors: ['Green', 'Brown', 'Ivory'],
    direction: 'East',
    gemstones: ['Moss Agate', 'Jade', 'Emerald'],
    flowers: ['Orchid', 'Peony', 'Clover'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD OXEN
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Bruno Mars',
        profession: 'Singer/Songwriter',
        birthYear: 1985,
        description:
          'Bruno Mars\'s combination of relentless work ethic, genre-spanning versatility, and showmanship reflects the Wood Ox\'s patient mastery and creative flexibility. His meticulous attention to craft and tireless performance schedule demonstrate the Wood Ox\'s endurance and dedication to excellence.',
      },
      {
        name: 'Keira Knightley',
        profession: 'Actress',
        birthYear: 1985,
        description:
          'Keira Knightley\'s career trajectory — steady, principled, and built on consistently excellent work rather than controversy — embodies the Wood Ox\'s values of quality and integrity. Her willingness to take on complex, thoughtful roles reflects the Wood Ox\'s depth and commitment to substance over spectacle.',
      },
      {
        name: 'Cristiano Ronaldo',
        profession: 'Football Legend',
        birthYear: 1985,
        description:
          'Cristiano Ronaldo\'s legendary discipline, physical conditioning, and relentless drive to improve exemplify the Wood Ox\'s determination and endurance. His longevity at the highest level of professional sport is a testament to the patient, methodical approach to growth that defines this sign.',
      },
      {
        name: 'Michael Phelps',
        profession: 'Olympic Swimmer',
        birthYear: 1985,
        description:
          'The most decorated Olympian of all time, Michael Phelps embodied the Wood Ox\'s capacity for sustained, disciplined effort over many years. His willingness to endure grueling training regimens day after day reflects the Ox\'s legendary work ethic, enhanced by Wood\'s flexibility and growth mindset.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Ox holds the position of second animal in the Chinese zodiac, a placement that reflects both its strength and its character. According to legend, the Ox was the most diligent of all the animals in the great race — setting out earliest, plowing steadily through the river, and arriving first by all rights. It was only the Rat's cleverness, hitching a ride and leaping ahead at the finish, that cost the Ox the top position. This myth establishes the Ox as the zodiac's embodiment of honest labor rewarded — and sometimes exploited — by those who are quicker but less principled.

When combined with the Wood element, the Ox takes on the qualities of spring awakening and new growth emerging from solid earth. In classical Chinese thought, the Wood Ox represents the moment when seeds planted in the dark soil of winter finally push through to the light — a metaphor for patient effort yielding visible results. The Heavenly Stem Jia (甲) associated with Wood Ox years signifies the hard outer shell of a seed, containing within it the full potential of the tree it will become.`,

    symbolism: `The Wood Ox symbolizes the marriage of endurance and growth — the idea that the most powerful transformations come not from dramatic upheaval but from steady, rooted effort applied over time. In traditional Chinese symbolism, the Ox represents reliability, agriculture, and the connection between human civilization and the earth. Wood adds the dimension of living growth: the Ox is no longer just plowing the field but nurturing the forest.

This combination carries powerful symbolism around sustainable development and ethical stewardship. The Wood Ox reminds us that true wealth is not extracted from the earth but cultivated in partnership with it — a message that resonates deeply with contemporary concerns about environmental sustainability and responsible growth.`,

    modernInterpretation: `In contemporary culture, the Wood Ox archetype speaks to the growing recognition that sustainable success requires patience, integrity, and genuine care for others. In an era that often celebrates disruption and speed, the Wood Ox offers a counterpoint: the value of steady, principled work that builds lasting foundations rather than chasing viral moments.

The 1985 Wood Ox generation has demonstrated this principle through careers defined by disciplined excellence rather than overnight fame. Athletes like Cristiano Ronaldo and Michael Phelps, performers like Bruno Mars, and countless others born in this year share a common thread of sustained effort, continuous improvement, and a work ethic that borders on the legendary. For future Wood Ox generations, this archetype suggests a continued relevance of craft, patience, and the quiet power of showing up every day with integrity and purpose.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
