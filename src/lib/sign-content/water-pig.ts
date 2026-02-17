// ============================================
// WATER PIG (壬亥) — The Boundless Heart
// ============================================
// The Water Pig combines the Pig's generous warmth and
// sensual appreciation of life with Water's emotional depth
// and intuitive wisdom — producing the zodiac's most
// open-hearted and genuinely compassionate personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-pig',
  profile: getProfileBySlug('water-pig')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Pig is the most emotionally generous and intuitively gifted of all Pig variants. Where the Pig is already renowned for its warmth, kindness, and wholehearted approach to life, the Water element deepens these qualities into a capacity for love, compassion, and emotional understanding that is virtually boundless. The Water Pig does not merely like people — they genuinely, unreservedly love them, with a warmth that feels like stepping into sunlight after a long winter. Their presence creates an atmosphere of such complete acceptance that even the most guarded souls find themselves opening up.

What makes the Water Pig extraordinary is the combination of emotional depth and genuine simplicity. They are not naive — the Water element gives them considerable perceptive intelligence and intuitive wisdom — but they choose to lead with their heart rather than their head. They understand human darkness, recognize deception, and perceive manipulation, yet they consistently choose trust over suspicion, generosity over self-protection, and love over fear. This is not foolishness but a courageous philosophical stance that makes the Water Pig one of the zodiac's most genuinely admirable personalities.

Beneath the Water Pig's warm, open exterior lies an emotional ocean of remarkable depth. They feel everything — joy, sorrow, beauty, pain — with an intensity that their cheerful demeanor often conceals. The Water Pig absorbs the emotional atmosphere of every room they enter, and their sensitive constitution can be overwhelmed by prolonged exposure to negativity, conflict, or suffering. Their lifelong challenge is maintaining their beautiful openness while developing the boundaries necessary to protect a heart that, left unguarded, will give itself away completely.`,

    coreTraits: [
      'Generous',
      'Compassionate',
      'Intuitive',
      'Trusting',
      'Sensual',
      'Emotionally Deep',
    ],

    strengths: [
      {
        trait: 'Radical Generosity',
        description:
          'The Water Pig gives with a generosity that is both material and emotional, without calculation or expectation of return. They share their resources, their time, their emotional energy, and their living space with a spontaneity that creates ripples of kindness throughout their community. This generosity is not performative — it flows from a genuine sense that abundance shared is abundance multiplied.',
      },
      {
        trait: 'Emotional Authenticity',
        description:
          'The Water Pig is incapable of emotional pretense. What they feel is written clearly on their face, in their voice, and in their body language — creating a transparency that others find both refreshing and deeply trustworthy. In a world of curated personas and strategic self-presentation, the Water Pig\'s emotional authenticity is a rare and precious gift.',
      },
      {
        trait: 'Intuitive Understanding',
        description:
          'Water\'s depth gives the Pig an intuitive understanding of human nature that goes beyond the Pig\'s natural goodwill. The Water Pig senses what people need — sometimes before they know themselves — and responds with precisely the right gesture, word, or presence. This intuitive understanding makes them extraordinary friends, partners, and healers.',
      },
      {
        trait: 'Joy Creation',
        description:
          'The Water Pig possesses a remarkable ability to create joy in ordinary moments. They transform a simple meal into a celebration, a casual gathering into a memorable evening, and a bad day into an occasion for laughter and comfort. This gift for creating joy is not superficial entertainment but a genuine form of emotional alchemy that enriches every life they touch.',
      },
    ],

    challenges: [
      {
        trait: 'Naivete',
        description:
          'Despite their intuitive intelligence, the Water Pig\'s desire to see the best in everyone can lead to genuine naivete. They may trust untrustworthy people, overlook clear warning signs, and extend second chances that are neither earned nor wise. This naivete is not lack of perception but an emotional override — they see the red flags but choose to believe in the possibility of goodness anyway.',
      },
      {
        trait: 'Overindulgence',
        description:
          'The Water Pig\'s sensual appreciation of life can tip into excessive indulgence — in food, drink, comfort, and pleasure. They use physical pleasure as emotional regulation, turning to comfort eating, shopping, or social excess when stress or sadness threatens their natural cheerfulness. This pattern of overindulgence can lead to health problems and financial strain.',
      },
      {
        trait: 'Boundary Dissolution',
        description:
          'The Water Pig\'s open, generous nature makes boundary-setting extraordinarily difficult. They struggle to say no, to protect their time and energy, and to refuse requests even when compliance comes at significant personal cost. This boundary dissolution leaves them vulnerable to exploitation by people who recognize their inability to refuse.',
      },
      {
        trait: 'Avoidance of Conflict',
        description:
          'The Water Pig\'s desire for harmony can become a debilitating avoidance of any form of conflict. They may suppress their own needs, tolerate unacceptable behavior, and sacrifice their well-being rather than risk the discomfort of confrontation. This avoidance, while motivated by genuine peace-seeking, typically allows problems to grow until they become unavoidable crises.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Pig is associated with Water energy — it is the final animal of the zodiac, corresponding to deep winter, the hours before midnight, and the most concentrated yin energy at the cycle's end. When the Water element is layered onto this already Water-affiliated animal, the result is a "double water" combination of extraordinary emotional depth and intuitive power.

This double-water nature amplifies the Pig's innate qualities to their fullest and most profound expression. Warmth becomes unconditional love. Kindness becomes radical compassion. Generosity becomes selfless giving. The Water Pig embodies Water's purest qualities: the ability to nourish all living things without discrimination, to flow around obstacles with patient persistence, and to mirror the world back with clear, compassionate reflection. However, double water also carries risks — emotional flooding, boundary dissolution, and a tendency to be swept along by others' currents rather than maintaining their own direction. The Water Pig benefits enormously from Earth and Metal element influences that provide structure, boundaries, and the discrimination necessary to protect a heart that might otherwise give itself away entirely.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Pig seeks partners who appreciate their generous nature, reciprocate their warmth, and provide the gentle structure their flowing nature sometimes needs. They are drawn to kind, authentic people who value emotional connection and shared experiences. The Pig belongs to the Fourth Trine alongside the Rabbit and the Goat — gentle, artistic signs that share the Pig's love of beauty, harmony, and genuine human warmth.

The Pig sits in opposition to the Snake on the zodiac wheel, creating tension between the Pig's transparent openness and the Snake's mysterious concealment. For the Water Pig, this opposition is particularly pronounced — their double-water depth craves the kind of emotional honesty that the Snake's guarded nature instinctively withholds.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 92,
        summary:
          'A deeply nurturing partnership of shared gentleness and mutual appreciation. The Water Rabbit\'s refined sensitivity and diplomatic grace harmonize beautifully with the Water Pig\'s generous warmth. Both Water signs, they share an emotional depth that allows communication to flow with intuitive ease. Together they create a sanctuary of beauty, comfort, and unconditional acceptance.',
      },
      {
        slug: 'water-tiger',
        name: 'Water Tiger',
        score: 88,
        summary:
          'A complementary partnership of warmth and strength. The Water Tiger\'s courageous protectiveness and intuitive leadership provide the loving authority the Water Pig needs, while the Pig\'s generous acceptance and emotional warmth soften the Tiger\'s intensity. Both Water signs, they connect on a deep emotional level that transcends surface differences.',
      },
      {
        slug: 'wood-goat',
        name: 'Wood Goat',
        score: 90,
        summary:
          'A beautifully harmonious partnership built on shared values of beauty, kindness, and emotional connection. The Wood Goat\'s artistic sensitivity and gentle nature create a world the Water Pig delights in inhabiting. Water nourishes Wood, meaning the Pig naturally supports the Goat\'s creative growth, while the Goat\'s aesthetic sensibility enriches the Pig\'s sensual appreciation of life.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-snake',
        name: 'Metal Snake',
        score: 30,
        summary:
          'The Pig and Snake sit at opposite ends of the zodiac, and the Metal element intensifies the Snake\'s already formidable guardedness. The Water Pig\'s emotional transparency demands a reciprocity the Metal Snake cannot provide. The Snake perceives the Pig as naive; the Pig experiences the Snake as coldly calculating. Metal cuts through Water, adding sharpness to an already difficult dynamic.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 38,
        summary:
          'The Fire Monkey\'s clever self-interest and restless energy clash with the Water Pig\'s sincere, steady warmth. The Pig\'s trusting nature is vulnerable to the Monkey\'s manipulative tendencies, while the Monkey finds the Pig\'s emotional demands constraining. Fire and Water clash elementally, creating volatility that the peace-seeking Pig finds distressing.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 40,
        summary:
          'The Metal Rooster\'s sharp criticism and rigid perfectionism wound the Water Pig\'s sensitive, accepting nature. The Pig offers unconditional love; the Rooster offers conditional approval. The Pig\'s indulgent tendencies trigger the Rooster\'s judgmental instincts, creating a cycle of criticism and hurt feelings that erodes the relationship\'s warmth.',
      },
    ],

    elementAffinity: `As a double-water sign, the Water Pig interacts with other elements in pronounced ways. Metal signs are natural allies — Metal generates Water in the productive cycle, providing the structure, boundaries, and discriminating intelligence the Water Pig needs to protect their generous nature. Wood signs create dynamic, growth-oriented partnerships where the Pig's Water naturally nourishes the partner's development. Earth signs provide essential grounding and containment — Earth controls Water in the destructive cycle, which the Water Pig actually benefits from, as it provides the boundaries they cannot create themselves. Fire signs present the most challenging dynamic — Water controls Fire, and the Pig's emotional intensity can dampen a Fire partner's enthusiasm, while Fire's demanding energy can feel exhausting to the Pig's peace-seeking nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Pig excels in careers that reward emotional generosity, interpersonal warmth, and the ability to create environments where people feel welcome, valued, and cared for. They are natural hosts, healers, and community builders whose genuine warmth creates spaces that attract and retain people. The competitive, aggressive aspects of corporate culture rarely suit the Water Pig, but they thrive in environments that value collaboration, hospitality, and genuine service.

The ideal Water Pig career provides human connection, creative expression, and the satisfaction of making others happy. Hospitality, culinary arts, social services, healthcare, education, entertainment, and community development all suit the Water Pig's combination of warmth, creativity, and service orientation. Their gift for creating joy makes them natural entertainers, event planners, and restaurateurs.

The Water Pig's relationship with money reflects their generous nature — they earn to share, spend on experiences and relationships, and find the accumulation of wealth for its own sake unappealing. Their financial challenge is the disconnect between their generous spending habits and their modest financial planning, which can create stress in later years when the resources they gave away would have provided security.`,

    idealCareers: [
      'Chef or Restaurateur',
      'Hospice Worker',
      'Event Planner',
      'Pediatric Nurse',
      'Community Organizer',
      'Music Therapist',
      'Hotel Manager',
      'Social Entrepreneur',
    ],

    financialStyle:
      'The Water Pig approaches money as a tool for creating joy and connection rather than security or status. They are generous to a fault — picking up checks, giving gifts, funding others\' ventures, and donating to causes that move their heart. This generosity is beautiful but can create genuine financial vulnerability if not balanced with practical planning. The Water Pig\'s financial growth lies in establishing automatic systems that save and invest before their generous impulses redirect the funds. They benefit from financial partners or advisors who appreciate their values while providing the structural discipline their nature lacks. The Water Pig who builds a secure financial foundation discovers that they can actually be more generous, not less, from a position of stability.',

    tips: [
      'Recognize that your warmth is a professional superpower. In industries built on relationships — hospitality, healthcare, education, community development — your genuine love of people is your most valuable asset. Position yourself in roles that leverage this gift.',
      'Develop assertiveness skills for professional contexts. Your difficulty saying no and setting boundaries can lead to overwork, undercompensation, and exploitation. Practice the phrase "I would love to help, but I cannot commit to that right now" until it feels natural.',
      'Build a financial safety net before expanding your generosity. Your impulse to give everything away leaves you vulnerable during lean times. Establish a financial floor — a savings account, retirement fund, and emergency buffer — that protects your ability to be generous long-term.',
      'Channel your creativity into your career rather than treating it as a hobby. Your natural gift for creating beautiful experiences, nourishing food, and warm environments has genuine market value. Do not undervalue the professional contribution of making people happy.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Pig in love is the zodiac's most open-hearted romantic — generous, passionate, and utterly devoted. When they fall in love, they fall completely, holding nothing back and expecting the same wholehearted investment in return. The Water Pig's partner receives a love that is physically affectionate, emotionally present, and extraordinarily generous — a love that feeds, comforts, celebrates, and accepts with an abundance that can feel like a continuous feast for the soul.

The Water Pig's approach to love is sensual, emotional, and deeply connected to physical experience. They express affection through touch, through shared meals, through creating a home that is warm, beautiful, and welcoming. They want a relationship that engages all the senses — one filled with good food, physical closeness, beautiful surroundings, and the kind of deep, unhurried conversation that only happens when two people feel completely safe with each other.

The Water Pig's romantic challenge is discernment. Their desire to love and be loved can override their better judgment, leading them into relationships with partners who exploit their generosity or fail to reciprocate their wholehearted investment. The Water Pig who learns to love with open eyes — maintaining their generous spirit while protecting themselves from those who would drain it — discovers relationships of extraordinary depth and mutual fulfillment.`,

    loveStyle:
      'The Water Pig loves with full-bodied, sensual devotion that envelops their partner in warmth, comfort, and acceptance. They express affection through physical closeness, nourishing meals, beautiful home environments, and an emotional presence so complete that their partner feels truly known and accepted. Their love language is a fusion of physical touch and acts of service — they want to hold their partner close and take care of their every need. They need a partner who reciprocates their generosity, appreciates their sensual nature, and has the integrity not to exploit the trust they so readily extend.',

    idealPartnerTraits: [
      'Warm and Reciprocal',
      'Honest',
      'Physically Affectionate',
      'Protective Without Controlling',
      'Appreciative of Simple Pleasures',
    ],

    tips: [
      'Trust your intuition about people, not just your hope. Your Water element gives you genuine insight into character — honor those perceptions even when they conflict with what you want to believe. Red flags do not become green because you wish them to.',
      'Set boundaries early in relationships. Your tendency to give everything from the start establishes a dynamic that is unsustainable and attracts people who take without reciprocating. Pace your generosity to match what you receive — not as a transaction but as a practice of healthy self-valuing.',
      'Maintain your friendships and interests outside the relationship. Your tendency to merge completely with your partner can create codependency that suffocates both of you. A rich, independent life makes you a better partner, not a less devoted one.',
      'Speak up when your needs are not being met. Your conflict avoidance means you often absorb disappointment silently, then explode when the accumulation becomes unbearable. Small, regular expressions of what you need prevent the buildup that leads to relationship crisis.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Pig's double-water constitution gives them a deeply yin, receptive physiology that is sensitive, emotionally responsive, and prone to conditions associated with excess dampness and deficient warmth. In Traditional Chinese Medicine, the Water element governs the Kidneys and Bladder — the foundational organ system that stores the body's deepest reserves of vitality. When Water is doubled, these systems are both strengthened and burdened: the Water Pig has considerable energetic reserves but is more vulnerable to the conditions that arise when Water energy becomes stagnant or excessive.

The characteristic Water Pig health pattern involves the accumulation of dampness — a TCM concept describing heaviness, sluggishness, and fluid retention that occurs when the body's Water energy is not adequately transformed and circulated. The Water Pig may experience weight gain (particularly around the midsection), fluid retention, sluggish digestion, joint stiffness, and a persistent sense of heaviness that affects both body and mood. Their generous, indulgent lifestyle can exacerbate these tendencies through excessive eating, insufficient exercise, and the consumption of damp-producing foods.

Prevention for the Water Pig centers on movement and moderation. Regular exercise that generates heat and promotes circulation counteracts the tendency toward stagnation. Dietary moderation — not deprivation, which the sensual Pig finds unsustainable, but mindful enjoyment — prevents the excess accumulation that dampness represents. The Water Pig who finds the balance between enjoyment and restraint discovers that moderation actually enhances their pleasure rather than diminishing it.`,

    bodyAreas: ['Kidneys', 'Bladder', 'Lymphatic System', 'Reproductive System'],

    exercises: [
      'Walking for daily movement and social connection',
      'Swimming for joint-friendly cardiovascular fitness',
      'Dancing for joyful physical expression',
      'Gentle yoga for flexibility and relaxation',
    ],

    dietTips: [
      'Emphasize warm, lightly spiced foods that counteract dampness: ginger, turmeric, cinnamon, cardamom, and aromatic herbs. These warming spices support digestive transformation and prevent the fluid stagnation the double-water constitution is prone to.',
      'Moderate dairy, sugar, and alcohol — the three primary damp-producing food categories in TCM. The Water Pig does not need to eliminate these pleasures entirely but should consume them mindfully, observing how their body responds and adjusting accordingly.',
      'Include bitter and aromatic foods that drain dampness: barley, corn, asparagus, celery, and green tea. These foods support the body\'s ability to transform and eliminate excess fluids, preventing the accumulation that leads to heaviness and sluggishness.',
      'Practice mindful eating as a form of enhanced pleasure rather than restriction. The Water Pig who slows down, savors each bite, and stops when satisfied actually enjoys food more than the one who eats quickly and excessively. Quality of experience over quantity of consumption is the Water Pig\'s dietary key.',
    ],

    mentalHealth:
      'The Water Pig\'s most significant mental health vulnerability is the depression that arises when their generous, trusting nature encounters repeated betrayal, exploitation, or the simple weight of the world\'s suffering. Their double-water constitution makes them deeply absorbent of environmental emotions, and prolonged exposure to negativity can settle into a persistent low mood that dims their natural warmth. The Water Pig benefits from practices that maintain their emotional buoyancy: regular social connection with trustworthy, reciprocal friends; creative expression that channels their rich emotional life into tangible beauty; and physical movement that generates the warmth and energy their cool, yin constitution needs. Therapy that helps them develop boundaries without losing their generosity is particularly valuable — learning that protecting themselves is not selfishness but the prerequisite for sustainable giving. The Water Pig who establishes emotional boundaries actually becomes a more effective source of warmth, not a diminished one — like a fire that burns longer because someone bothered to build a hearth around it.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Blue', 'Black', 'Dark Green', 'Gold'],
    direction: 'North',
    gemstones: ['Lapis Lazuli', 'Blue Topaz', 'Malachite'],
    flowers: ['Hydrangea', 'Sweet Pea', 'Daisy'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER PIGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Amy Winehouse',
        profession: 'Singer/Songwriter',
        birthYear: 1983,
        description:
          'Amy Winehouse\'s raw, emotionally transparent musical artistry embodied the Water Pig\'s extraordinary capacity for feeling and its vulnerability to emotional overwhelm. Her voice carried the sign\'s characteristic depth — the ability to channel intense personal experience into art that resonated universally. Her struggles reflected the Water Pig\'s challenge of protecting a heart that is radically open.',
      },
      {
        name: 'Henry Cavill',
        profession: 'Actor',
        birthYear: 1983,
        description:
          'Henry Cavill\'s warm public persona and genuine enthusiasm for his craft reflect the Water Pig\'s characteristic combination of generous warmth and wholehearted engagement. His reputation for kindness and approachability in an industry that rewards cool detachment embodies the sign\'s insistence on emotional authenticity.',
      },
      {
        name: 'Carrie Underwood',
        profession: 'Country Singer',
        birthYear: 1983,
        description:
          'Carrie Underwood\'s emotionally powerful vocals and her reputation as one of country music\'s most generous and authentic personalities reflect the Water Pig\'s combination of artistic sensitivity and genuine warmth. Her enduring popularity stems from the sign\'s characteristic ability to create emotional connection through honest artistic expression.',
      },
      {
        name: 'Andrew Garfield',
        profession: 'Actor',
        birthYear: 1983,
        description:
          'Andrew Garfield\'s emotionally vulnerable performances and his reputation for genuine kindness embody the Water Pig\'s combination of depth and warmth. His ability to bring authentic emotional truth to roles reflects the sign\'s gift for accessing and expressing the full spectrum of human feeling without pretense.',
      },
      {
        name: 'Maria Callas',
        profession: 'Opera Singer',
        birthYear: 1923,
        description:
          'Maria Callas\'s legendary performances, defined by their overwhelming emotional intensity and dramatic commitment, embodied the Water Pig\'s capacity for feeling at its most transcendent. Her voice channeled the full depth of human emotion with a rawness and generosity that transformed opera and continues to move audiences decades after her death.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Pig holds the twelfth and final position in the Chinese zodiac, completing the great cycle. In the Great Race legend, the Pig arrived last because it stopped to eat and then fell asleep — a charmingly honest origin story that encodes the Pig's essential nature: the prioritization of comfort, pleasure, and the body's genuine needs over competitive urgency. Far from being a story of failure, the Pig's last-place finish reflects a philosophical stance that the journey matters more than the destination, and that genuine enjoyment of life is not laziness but wisdom.

In Chinese culture, the Pig is actually a symbol of good fortune, wealth, and abundance. The Chinese character for "home" (家) contains the character for pig (豕) beneath a roof — reflecting the ancient understanding that a household with a pig was a prosperous one. When paired with the Water element, this association with abundance is deepened by Water's connection to flow, fertility, and the nourishing rains that sustain agriculture. The Water Pig thus represents the most natural and generous form of prosperity — abundance that flows freely, nourishes all, and renews itself through sharing.

The Water Pig also connects to the zodiac cycle's deepest symbolism. As the final sign bearing the final element (Water being the element of endings and renewal), the Water Pig represents the completion of the sixty-year cycle and the accumulated wisdom of the entire journey. In Chinese philosophical tradition, the Water Pig embodies the principle that true wisdom returns to simplicity — that the most profound understanding, after all complexity has been traversed, arrives at the simple truth that love, generosity, and genuine connection are what matter most.`,

    symbolism: `The Water Pig symbolizes the culmination of emotional wisdom — the understanding that the highest expression of intelligence is not cleverness but compassion, not strategy but generosity, not control but acceptance. In traditional symbolism, it represents the principle that abundance flows most freely when it is shared without calculation, that the universe rewards generosity not because of karmic accounting but because generosity creates the conditions for more abundance.

Water flowing through the Pig's domain carries symbolism of completion and renewal. It represents the rivers returning to the sea — the end of the cycle that is simultaneously the beginning of the next. The Water Pig symbolizes the understanding that letting go is not loss but release, that giving is not depletion but investment in the invisible infrastructure of love and trust that sustains communities.

In the Wu Xing cycle, the Water Pig's double-water nature represents the deepest possible immersion in the element of wisdom, intuition, and emotional truth. It is the zodiac's reminder that beneath all the strategic maneuvering, all the competitive ambition, all the clever positioning, the fundamental currency of human life is love — freely given, honestly expressed, and abundant beyond any rational expectation.`,

    modernInterpretation: `In contemporary culture, the Water Pig archetype resonates with growing recognition that genuine connection, emotional generosity, and the simple pleasures of shared human experience are not naive luxuries but essential needs that modern life often fails to provide. In a world optimized for efficiency and productivity, the Water Pig's insistence on slowing down, sharing meals, and truly being present with other human beings feels almost revolutionary.

The Water Pig also speaks to the modern challenge of maintaining genuine warmth and trust in an age that increasingly rewards cynicism and self-protection. As social media creates the illusion of connection while deepening isolation, the Water Pig's old-fashioned, embodied, physically present form of love and generosity offers something that no digital platform can replicate — the experience of being truly seen, accepted, and valued by another human being who is sitting right next to you.

For those born in Water Pig years, the contemporary world offers both validation and vulnerability. Their warmth is desperately needed, but their trusting nature can be exploited by systems and individuals that view generosity as weakness. The most thriving Water Pigs learn to protect their generous hearts without armoring them — maintaining their extraordinary openness while developing the discernment to direct their gifts toward people and causes that honor rather than exploit their profound capacity for love.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
