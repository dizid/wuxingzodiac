// ============================================
// EARTH RABBIT (戊卯) — The Serene Mediator
// ============================================
// The Earth Rabbit combines the Rabbit's diplomatic grace
// and emotional intelligence with Earth's stabilizing,
// nurturing influence, creating an exceptionally balanced
// and harmonious personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-rabbit',
  profile: getProfileBySlug('earth-rabbit')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Rabbit is the most grounded and emotionally secure expression of the Rabbit archetype. Where other Rabbit variants may struggle with indecision and anxiety, the Earth Rabbit possesses a quiet inner stability that allows them to navigate life's complexities with remarkable grace. The Earth element provides a solid foundation for the Rabbit's natural sensitivity, transforming what could be overwhelming emotional awareness into practical wisdom and genuine empathy.

People born under this sign are gifted mediators and peacemakers who create harmony wherever they go — not through avoidance of conflict, but through a genuine understanding of all perspectives and the patience to find solutions that honor everyone's needs. They possess an exceptional ability to read emotional undercurrents in any group, sensing tension, unspoken grievances, and hidden alliances with an accuracy that seems almost supernatural. This emotional intelligence, grounded by Earth's practical wisdom, makes them invaluable in families, workplaces, and communities.

What truly sets the Earth Rabbit apart is their combination of gentleness and strength. They are often underestimated because of their soft-spoken, agreeable demeanor, but beneath that pleasant exterior lies a remarkably resilient core. Earth Rabbits do not assert themselves through confrontation or force of will; they achieve their goals through patience, diplomacy, and an almost imperceptible persistence that gradually shapes situations to their advantage without creating enemies or burning bridges.`,

    coreTraits: [
      'Diplomatic',
      'Nurturing',
      'Perceptive',
      'Serene',
      'Reliable',
      'Tactful',
    ],

    strengths: [
      {
        trait: 'Natural Diplomacy',
        description:
          'Earth Rabbits possess an extraordinary talent for finding common ground between opposing parties. They listen with genuine empathy, validate all perspectives without taking sides prematurely, and propose solutions that allow everyone to feel heard and respected. This makes them exceptional mediators, counselors, and negotiators who resolve conflicts that more forceful personalities only escalate.',
      },
      {
        trait: 'Emotional Grounding',
        description:
          'The Earth element provides a stabilizing anchor for the Rabbit\'s sensitive emotional nature. While other Rabbit variants may be overwhelmed by intense emotions — their own or others\' — the Earth Rabbit can hold space for difficult feelings without being destabilized. This grounded empathy allows them to support others through crisis while maintaining their own equilibrium.',
      },
      {
        trait: 'Quiet Persistence',
        description:
          'Earth Rabbits achieve their goals through a persistence so gentle it is often invisible. They do not force outcomes or create dramatic confrontations; instead, they slowly and steadily shape situations through patient negotiation, strategic positioning, and the gradual building of consensus. By the time anyone notices, the Earth Rabbit has already arrived at their destination.',
      },
      {
        trait: 'Creating Safe Spaces',
        description:
          'Few signs are as gifted at creating environments of comfort and emotional safety. Whether in a home, a workplace, or a social gathering, the Earth Rabbit\'s presence naturally encourages openness and authenticity. People relax around them, share more freely, and feel genuinely cared for — because they are. The Earth Rabbit\'s nurturing quality is not performative but deeply constitutional.',
      },
    ],

    challenges: [
      {
        trait: 'Conflict Avoidance',
        description:
          'Despite their diplomatic skill, Earth Rabbits can take conflict avoidance to unhealthy extremes. They may suppress their own needs, agree to unfavorable terms, or tolerate unacceptable behavior rather than risk the discomfort of confrontation. This peace-at-any-price tendency can lead to resentment, exploitation, and relationships where the Earth Rabbit\'s own voice is systematically silenced.',
      },
      {
        trait: 'Indecisiveness',
        description:
          'The Earth Rabbit\'s ability to see all perspectives can become paralyzing when decisions must be made. Their desire to find solutions that satisfy everyone may prevent them from making necessary choices that inevitably disappoint some parties. In leadership positions, this indecisiveness can frustrate teams that need clear, timely direction.',
      },
      {
        trait: 'Over-Accommodation',
        description:
          'Earth Rabbits frequently prioritize others\' comfort and happiness above their own, sometimes to a self-destructive degree. They may become the person everyone leans on while having no one to lean on themselves. This pattern of over-accommodation eventually depletes their emotional reserves and can lead to quiet resentment or sudden withdrawal.',
      },
      {
        trait: 'Resistance to Intensity',
        description:
          'The Earth Rabbit\'s preference for harmony can make them uncomfortable with intense emotions, passionate people, and situations that demand bold, decisive action. They may retreat from relationships or environments that feel too charged, missing opportunities for deep connection and transformative growth that only come through the willingness to endure discomfort.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rabbit is naturally associated with the Wood element — the energy of growth, flexibility, and spring. When Earth meets this inherently Wood-natured animal, it creates a distinctive dynamic: Wood controls Earth in the destructive cycle, meaning the Rabbit's natural growth energy constantly works against Earth's desire for stillness. However, in the Earth Rabbit, this tension resolves into a remarkable equilibrium. The Wood energy prevents Earth from becoming stagnant, while Earth prevents Wood from overextending. The result is a personality of unusual balance — flexible enough to adapt without losing stability, grounded enough to endure without becoming rigid. The Earth Rabbit embodies the fertile field: Earth nourished by Wood's organic growth, producing abundance through gentle, sustained cultivation rather than forced productivity.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Rabbit's compatibility profile favors partners who provide emotional depth and gentle affection without overwhelming their sensitive nature with intensity or chaos. They are drawn to signs that share their appreciation for harmony, beauty, and emotional intelligence, and they struggle with signs whose aggressive or confrontational energy disrupts the peaceful environment they work so hard to maintain.

In traditional Chinese astrology, the Rabbit belongs to the Fourth Trine alongside the Goat and the Pig — three signs united by sensitivity, creativity, and a deep appreciation for beauty and comfort. These natural allies share the Rabbit's preference for gentle interaction and create relationships of remarkable tenderness and mutual care. The Rabbit's most challenging pairing is with the Rooster, its zodiac opposite, where the Rooster's critical, exacting nature clashes with the Rabbit's need for softness and acceptance.`,

    bestMatches: [
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 92,
        summary:
          'An exceptionally tender and harmonious pairing. The Water Pig\'s generous warmth and genuine kindness create the emotionally safe environment the Earth Rabbit craves. Both signs value peace, comfort, and mutual care, building a relationship that feels like a sanctuary from the harshness of the outside world. Water nourishes Earth gently, adding emotional depth without disrupting stability.',
      },
      {
        slug: 'wood-goat',
        name: 'Wood Goat',
        score: 90,
        summary:
          'Two members of the Fourth Trine united by shared sensitivity and creative vision. The Wood Goat\'s artistic nature and gentle spirit resonate deeply with the Earth Rabbit\'s nurturing temperament. Together they create a world of beauty, comfort, and emotional richness that sustains them both. Wood feeds Earth naturally, creating a productive cycle of mutual support.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 85,
        summary:
          'The Earth Dog\'s loyal, protective nature complements the Earth Rabbit\'s nurturing warmth beautifully. The Dog provides the sense of security the Rabbit needs, while the Rabbit softens the Dog\'s sometimes anxious vigilance. Their shared Earth element creates deep mutual understanding and a practical, stable partnership built on genuine devotion.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 28,
        summary:
          'The zodiac\'s classic opposition at its sharpest. The Metal Rooster\'s piercing criticism and exacting standards wound the Earth Rabbit\'s sensitive soul, while the Rabbit\'s gentle diplomacy frustrates the Rooster\'s need for directness and precision. Metal\'s cutting energy is particularly harsh against the Earth Rabbit\'s nurturing softness, creating a dynamic where both feel misunderstood and undervalued.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 35,
        summary:
          'The Fire Tiger\'s commanding intensity and aggressive confidence overwhelm the Earth Rabbit\'s gentle nature. The Tiger demands bold action and sees the Rabbit\'s caution as weakness; the Rabbit finds the Tiger\'s forcefulness frightening and exhausting. Fire scorches Earth, amplifying the incompatibility between these very different approaches to life.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 40,
        summary:
          'The Fire Dragon\'s grandiose ambition and dramatic energy can feel overwhelming to the Earth Rabbit\'s preference for quiet, steady progress. The Dragon demands center stage; the Rabbit prefers the wings. While the Dragon\'s Fire energy does feed the Earth Rabbit\'s element, the sheer intensity of the Dragon\'s personality often proves too much for the Rabbit\'s sensitive constitution.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Wood-natured animal, the Earth Rabbit has a nuanced relationship with each element. Fire signs can energize the Earth Rabbit (Fire creates Earth), but intense Fire energy may overwhelm their sensitive nature — moderate Fire expression is ideal. Metal signs are naturally supported by the Earth Rabbit (Earth creates Metal), creating relationships where the Rabbit's nurturing energy helps Metal partners achieve their ambitions. Water signs present an interesting dynamic: Water nourishes Wood (the Rabbit's natural element) but is controlled by Earth, creating partnerships that work best when the Earth Rabbit consciously makes space for Water's emotional flow. Wood signs resonate with the Rabbit's natural element but challenge the Earth aspect — these relationships are stimulating but may destabilize the Earth Rabbit's carefully maintained equilibrium.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Rabbits excel in careers that leverage their exceptional emotional intelligence, diplomatic skill, and ability to create harmonious environments. They are not drawn to high-pressure, competitive industries but thrive in roles where their talent for understanding people and facilitating cooperation translates into tangible value. The ideal Earth Rabbit career involves working with people in a supportive, nurturing capacity — whether directly through counseling and education, or indirectly through design, mediation, and community building.

The Earth Rabbit's work style is collaborative, thorough, and quietly effective. They are not the ones who dominate meetings or pursue visibility, but their contributions — smooth team dynamics, resolved conflicts, thoughtful design decisions, well-maintained client relationships — are the invisible infrastructure that allows organizations to function well. Wise managers recognize and protect this contribution; less perceptive ones may overlook the Earth Rabbit's value until they leave and everything falls apart.

Financially, Earth Rabbits are conservative and sensible. They save steadily, spend thoughtfully, and avoid the risky ventures that attract more impulsive signs. Their financial challenge is not recklessness but under-earning — their conflict avoidance and tendency toward accommodation can prevent them from negotiating the compensation they deserve.`,

    idealCareers: [
      'Counselor/Therapist',
      'Interior Designer',
      'Human Resources Director',
      'Mediator/Arbitrator',
      'Kindergarten Teacher',
      'Landscape Architect',
      'Art Curator',
      'Social Worker',
    ],

    financialStyle:
      'Earth Rabbits are careful, sensible money managers who prioritize security and comfort over wealth accumulation. They save consistently, avoid debt, and make thoughtful purchasing decisions based on quality and longevity rather than status or impulse. Their primary financial weakness is under-valuing their own worth — they may accept lower salaries, undercharge for services, or avoid negotiations that could significantly improve their financial position. The Earth Rabbit who develops the confidence to advocate for fair compensation discovers that their skills are far more valuable in the marketplace than their self-deprecating nature assumes.',

    tips: [
      'Seek roles where emotional intelligence is explicitly valued and compensated. Counseling, human resources, mediation, and design fields reward exactly the skills that come naturally to you, allowing you to build a satisfying career without forcing yourself into uncomfortable competitive dynamics.',
      'Practice self-advocacy as a professional skill. Your tendency to accommodate others can lead to being overlooked for promotions and underpaid relative to your contribution. Prepare for salary negotiations in advance, document your accomplishments, and practice stating your value clearly and directly.',
      'Set clear professional boundaries to prevent burnout. Your natural empathy makes you vulnerable to absorbing others\' stress and taking on emotional labor that is not part of your job description. Establish limits on your availability and learn to say no without guilt.',
      'Develop your assertiveness in meetings and group settings. Your insights are valuable, but they only create impact if shared. Practice speaking up early in discussions rather than waiting for the perfect moment — your perspective is needed even when it feels uncomfortable to offer.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Rabbit is a tender, devoted, and deeply nurturing partner who creates relationships of remarkable comfort and emotional richness. They approach romance with the same gentle sensitivity they bring to all their interactions — attentive to their partner's moods, responsive to unspoken needs, and committed to maintaining the harmony that both partners draw sustenance from.

Earth Rabbits fall in love gradually, building trust through small gestures of care and slowly deepening intimacy as they feel increasingly safe. They are not dramatic or impulsive in romance; they are steady, consistent, and profoundly present. The experience of being loved by an Earth Rabbit is like being wrapped in a warm blanket — not thrilling, perhaps, but deeply comforting and genuinely healing.

The Earth Rabbit's primary challenge in love is maintaining their own identity within the relationship. Their natural tendency to prioritize their partner's needs can lead them to lose themselves in the process, becoming so attuned to what the other person wants that they forget what they want themselves. The healthiest Earth Rabbit relationships are those where both partners actively encourage the Rabbit to express their own needs, desires, and boundaries.`,

    loveStyle:
      'The Earth Rabbit loves through attentive care and the creation of a beautiful, harmonious shared life. Their romantic expression is subtle but deeply felt — a perfectly prepared meal, a room arranged for comfort, an intuitive understanding of exactly what their partner needs in any given moment. They are physically affectionate in a gentle, grounding way and value quiet intimacy over dramatic passion. Their ideal relationship is a peaceful partnership built on mutual respect, shared aesthetics, and the daily practice of small, thoughtful kindnesses.',

    idealPartnerTraits: [
      'Gentle',
      'Emotionally Articulate',
      'Appreciative',
      'Protective Without Dominating',
      'Aesthetically Minded',
    ],

    tips: [
      'Practice identifying and expressing your own needs rather than only responding to your partner\'s. Set aside time to ask yourself what you actually want — not just in the relationship, but in life — and share those desires openly even when they feel selfish or inconvenient.',
      'Recognize that healthy conflict strengthens relationships. Your instinct to smooth over disagreements can prevent important issues from being addressed. Learn to sit with temporary discomfort in service of long-term honesty and mutual understanding.',
      'Choose a partner who actively draws you out rather than one who simply enjoys your accommodating nature. The best partner for an Earth Rabbit is someone who notices when you are suppressing your needs and lovingly insists on hearing your true feelings.',
      'Build confidence in your worthiness of love through self-care practices. Earth Rabbits who develop a strong relationship with themselves — through therapy, creative expression, or spiritual practice — become far more capable of maintaining healthy boundaries in partnership.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Rabbit possesses a constitution that is more sensitive than robust, requiring conscious care and gentle management rather than the brute-force approach that more vigorous signs can get away with. In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen, while the Rabbit's Wood nature connects to the Liver and Gallbladder. This creates a constitution where stress and emotional disturbance quickly manifest in digestive and liver-related symptoms.

The most common Earth Rabbit health pattern is a direct connection between emotional state and physical wellbeing. When the Earth Rabbit feels safe, supported, and harmonious, their health thrives. When they are stressed, in conflict, or absorbing others' emotional pain, their digestive system is the first to suffer — manifesting as appetite changes, bloating, food sensitivities, and irritable bowel symptoms.

The Earth Rabbit's health strategy should prioritize stress management, emotional boundaries, and a gentle, nourishing approach to diet and exercise. Harsh, punishing fitness regimens and extreme diets are counterproductive for this sensitive constitution — they need care and consistency rather than intensity.`,

    bodyAreas: ['Stomach', 'Spleen', 'Liver', 'Nervous System'],

    exercises: [
      'Yoga',
      'Gentle walking in nature',
      'Swimming',
      'Pilates',
    ],

    dietTips: [
      'Eat warm, nourishing meals at regular intervals. The Earth Rabbit\'s digestive system thrives on predictability and gentle warmth. Soups, porridges, steamed vegetables, and slow-cooked meals are ideal for this sensitive constitution.',
      'Minimize cold and raw foods, especially during stressful periods. The Earth Rabbit\'s Spleen energy is easily weakened by excessive cold, raw, and damp foods. Save salads and smoothies for warm weather and stable emotional periods.',
      'Pay attention to food sensitivities. Earth Rabbits are more prone to food intolerances than most signs, particularly to dairy, gluten, and highly processed foods. An elimination diet guided by a nutritionist can reveal sensitivities that may be quietly undermining their energy and digestion.',
      'Incorporate gentle digestive herbs. Chamomile tea, fennel, peppermint, and licorice root support the Earth Rabbit\'s sensitive digestive system. Sipping warm herbal tea throughout the day is both physically beneficial and emotionally soothing for this sign.',
    ],

    mentalHealth:
      'The Earth Rabbit\'s primary mental health vulnerability is anxiety rooted in their hyper-awareness of others\' emotional states. They absorb the stress, sadness, and anger of people around them like a sponge, often without realizing that the emotions they are experiencing are not their own. This emotional porousness can lead to chronic anxiety, compassion fatigue, and a pervasive sense of overwhelm. Learning to distinguish between their own emotions and those they have absorbed from others is a foundational mental health skill for this sign. Practices like meditation, journaling, and regular time alone in nature help the Earth Rabbit discharge accumulated emotional energy. Professional therapy — particularly modalities that emphasize emotional boundaries, such as somatic therapy or EMDR — can be profoundly transformative. The Earth Rabbit who develops strong emotional boundaries without losing their empathic gifts discovers a wellspring of inner peace that sustains them through life\'s inevitable turbulence.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 6, 9],
    colors: ['Sage Green', 'Cream', 'Soft Yellow'],
    direction: 'East',
    gemstones: ['Jade', 'Rose Quartz', 'Moonstone'],
    flowers: ['Lily', 'Jasmine', 'White Rose'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH RABBITS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Francis Ford Coppola',
        profession: 'Film Director',
        birthYear: 1939,
        description:
          'Francis Ford Coppola\'s ability to create deeply layered, emotionally rich cinematic worlds reflects the Earth Rabbit\'s exceptional sensitivity and artistic vision. His patient, meticulous approach to filmmaking — spending years developing projects — embodies the Earth element\'s persistence combined with the Rabbit\'s refined aesthetic sensibility.',
      },
      {
        name: 'Marvin Gaye',
        profession: 'Musician',
        birthYear: 1939,
        description:
          'Marvin Gaye\'s extraordinary emotional sensitivity — channeled into some of the most beautiful and socially conscious music of the 20th century — exemplifies the Earth Rabbit\'s ability to transform deep feeling into enduring art. His gentle, soulful voice and empathic songwriting embody the sign\'s core gifts of emotional intelligence and creative expression.',
      },
      {
        name: 'Lee Harvey Oswald',
        profession: 'Historical Figure',
        birthYear: 1939,
        description:
          'A controversial and complex figure whose troubled life illustrates the shadow side of the Earth Rabbit — the isolation and inner turmoil that can result when this sensitive sign fails to find the supportive community and emotional grounding it desperately needs.',
      },
      {
        name: 'Lily Tomlin',
        profession: 'Actress/Comedian',
        birthYear: 1939,
        description:
          'Lily Tomlin\'s career demonstrates the Earth Rabbit\'s gift for understanding and portraying the full spectrum of human experience with empathy and insight. Her ability to inhabit diverse characters with genuine warmth and compassion reflects the sign\'s extraordinary emotional range and grounded authenticity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rabbit holds a special place in Chinese mythology as a symbol of the moon, longevity, and gentle wisdom. According to the most beloved legend, the Jade Rabbit (Yutu) lives on the moon, eternally pounding the elixir of immortality with a mortar and pestle. This lunar association gives the Rabbit a yin quality — receptive, intuitive, and connected to the cycles of nature rather than the assertion of individual will.

When the Earth element infuses this lunar creature, it grounds the Rabbit's ethereal qualities in practical reality. The Earth Rabbit in mythological terms represents the bridge between heaven and earth — the being that translates celestial wisdom into earthly nourishment. In Chinese agricultural tradition, the Earth Rabbit was associated with fertile soil and productive gardens, combining the Rabbit's connection to spring growth with Earth's nurturing, generative power. Earth Rabbit years were considered auspicious for planting, for beginning nurturing endeavors, and for any work that required patience, care, and attention to the subtle rhythms of natural growth.`,

    symbolism: `The Earth Rabbit symbolizes harmony achieved through patient cultivation. In Wu Xing symbolism, this combination represents the gentlest form of productive power — not the force that moves mountains, but the presence that makes gardens grow. The Rabbit's Wood nature working within Earth's stable container creates a metaphor for growth that is sustainable, beautiful, and nourishing rather than explosive or disruptive.

The Earth Rabbit also symbolizes the wisdom of gentleness. In a zodiac system that includes fierce Tigers, mighty Dragons, and cunning Rats, the Rabbit achieves its goals through means so soft they are often overlooked. This makes the Earth Rabbit a powerful symbol for the transformative potential of kindness, patience, and genuine empathy — qualities that the modern world often undervalues but desperately needs.`,

    modernInterpretation: `In contemporary culture, the Earth Rabbit archetype resonates with growing movements toward emotional intelligence, mindful living, and the recognition that soft skills are not soft at all but essential to healthy organizations, relationships, and communities. In an era that has over-indexed on disruption and aggressive ambition, the Earth Rabbit represents a needed correction — the understanding that sustainable success requires empathy, patience, and the ability to create environments where people feel safe enough to do their best work.

The Earth Rabbit's modern relevance extends to the wellness and self-care movement. As the sign most naturally attuned to creating nurturing environments and attending to subtle physical and emotional needs, the Earth Rabbit embodies the principles of holistic health, mindful consumption, and gentle self-care that are increasingly recognized as essential to wellbeing in the modern world.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
