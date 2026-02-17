// ============================================
// EARTH GOAT (戊未) — The Nurturing Architect
// ============================================
// The Earth Goat combines the Goat's creative sensitivity
// and nurturing instinct with Earth's stabilizing, practical
// energy, creating a deeply caring personality with the
// grounding to turn artistic vision into lasting reality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-goat',
  profile: getProfileBySlug('earth-goat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Goat is the most grounded and practically effective expression of the Goat archetype. Where other Goat variants may drift through life on currents of emotion and imagination, the Earth Goat channels their considerable creative and nurturing energies into tangible, lasting contributions. The Earth element does not diminish the Goat's sensitivity and artistic nature — it provides the foundation that allows those gifts to manifest as real-world achievements rather than unrealized potential.

People born under this sign possess a rare combination of aesthetic sensibility and practical competence. They can envision beautiful spaces, harmonious communities, and nourishing environments, and they have the patience and organizational skill to actually create them. The Earth Goat is the person who does not just dream of a beautiful garden but plants, tends, and harvests it; who does not just imagine a welcoming home but designs, builds, and maintains it with loving attention to every detail.

What distinguishes the Earth Goat from other Earth signs is the warmth that permeates everything they do. Their practicality is never cold or mechanical — it is infused with genuine care for the people who will inhabit the spaces they create, use the things they build, and benefit from the systems they maintain. The Earth Goat works not for personal glory or material accumulation but from a deep-seated desire to nourish, protect, and provide for those they love.`,

    coreTraits: [
      'Nurturing',
      'Creative',
      'Reliable',
      'Generous',
      'Patient',
      'Harmonious',
    ],

    strengths: [
      {
        trait: 'Grounded Creativity',
        description:
          'Earth Goats transform creative vision into practical reality with remarkable skill. They possess the Goat\'s natural artistic eye and emotional sensitivity, but channel these gifts through Earth\'s material competence. The result is beautiful, functional creation — homes that are both aesthetically stunning and genuinely comfortable, meals that are both artful and nourishing, spaces that feed the soul while serving practical needs.',
      },
      {
        trait: 'Exceptional Nurturing',
        description:
          'The Earth Goat\'s nurturing capacity is both instinctive and practical. They do not just feel compassion — they act on it, providing tangible support that addresses real needs. Whether caring for children, tending to aging parents, or supporting struggling friends, the Earth Goat\'s care is consistent, concrete, and deeply sustaining.',
      },
      {
        trait: 'Patient Reliability',
        description:
          'Unlike more volatile Goat variants, the Earth Goat can be counted on through thick and thin. They show up consistently, fulfill their commitments quietly, and maintain their contributions over long periods without seeking recognition. This patient reliability makes them the backbone of their families, workplaces, and communities.',
      },
      {
        trait: 'Environmental Harmony',
        description:
          'Earth Goats have an extraordinary ability to create harmonious environments — physical, emotional, and social. They intuitively understand how spaces, people, and energies interact, and they use this understanding to arrange things in ways that promote wellbeing, productivity, and peace. A room designed by an Earth Goat simply feels better.',
      },
    ],

    challenges: [
      {
        trait: 'Self-Neglect',
        description:
          'The Earth Goat\'s nurturing instinct can become so focused on others that they systematically neglect their own needs. They may feed everyone else while forgetting to eat themselves, create beautiful environments for others while living in chaos, or provide emotional support to everyone while having no one to lean on. This self-neglect eventually undermines their ability to care for anyone.',
      },
      {
        trait: 'Conflict Avoidance',
        description:
          'Earth Goats prize harmony so highly that they may tolerate unacceptable situations rather than risk confrontation. They absorb others\' bad behavior, suppress their own grievances, and sacrifice their interests to maintain peace. This avoidance does not eliminate conflict — it drives it underground, where it festers into resentment and passive-aggressive expression.',
      },
      {
        trait: 'Dependency on Appreciation',
        description:
          'Earth Goats derive much of their sense of worth from being needed and appreciated. When their contributions go unrecognized or their care is taken for granted, they can spiral into self-pity and withdrawal. Learning to validate their own worth independently of others\' recognition is a crucial developmental task for this sign.',
      },
      {
        trait: 'Resistance to Change',
        description:
          'Earth\'s stabilizing influence combined with the Goat\'s desire for security can produce a strong resistance to change, even when change is clearly necessary. Earth Goats may cling to familiar routines, outdated arrangements, and dysfunctional relationships rather than face the uncertainty of transformation.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Goat is inherently associated with the Earth element — it is the animal of late summer, connected to the harvest, nurturing, and the transition between seasons. When the Earth element is added to this naturally earthy animal, it creates a double-earth combination with a distinctly different character from the Earth Ox's immovable solidity. The Earth Goat's double-earth expresses as fertile soil — warm, nourishing, and generative. This is Earth in its most maternal expression: the ground that receives seeds, provides nutrients, and sustains growth. The Earth Goat naturally embodies the nurturing function of the Earth element, creating environments where people, projects, and ideas can take root and flourish.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Goat's compatibility profile favors partners who appreciate their nurturing nature without exploiting it, and who provide the emotional depth and reciprocal care that sustains the Goat's generous spirit. They thrive with partners who are strong enough to protect them but sensitive enough to match their emotional wavelength.

In traditional Chinese astrology, the Goat belongs to the Fourth Trine alongside the Rabbit and the Pig — three signs united by sensitivity, creativity, and a deep appreciation for beauty and emotional richness. These natural allies share the Goat's gentle approach to life and create relationships of remarkable tenderness. The Goat's most challenging pairing is with the Ox, its zodiac opposite, where the Ox's rigid practicality clashes with the Goat's emotional needs.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 92,
        summary:
          'An exceptionally harmonious pairing between two deeply sensitive signs. The Water Rabbit\'s gentle nature and emotional intelligence create the safe, nurturing environment the Earth Goat craves. Both signs value beauty, harmony, and emotional connection, building a relationship of remarkable tenderness and mutual understanding. Water nourishes Earth gently, adding depth without disrupting stability.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 85,
        summary:
          'An unexpectedly complementary pairing. The Fire Horse\'s passionate energy and protective instincts complement the Earth Goat\'s nurturing warmth beautifully. Fire creates Earth in the productive cycle, meaning the Horse naturally energizes and sustains the Goat. The Horse provides excitement and protection; the Goat provides comfort and emotional depth.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 88,
        summary:
          'Two members of the Fourth Trine create a partnership of extraordinary generosity and mutual care. The Water Pig\'s open-hearted warmth and abundance perfectly complement the Earth Goat\'s nurturing instincts. Both signs give freely and appreciate the other\'s generosity, creating a virtuous cycle of mutual support and emotional richness.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 30,
        summary:
          'The zodiac\'s classic opposition sharpened by elemental tension. The Metal Ox\'s rigid, unsentimental approach to life clashes fundamentally with the Earth Goat\'s emotional sensitivity and need for warmth. The Ox sees the Goat as impractical; the Goat finds the Ox cold and unfeeling. Metal cuts through Earth, potentially wounding the Goat\'s tender nature.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 35,
        summary:
          'The Metal Rooster\'s sharp criticism and perfectionist standards devastate the Earth Goat\'s fragile confidence. The Rooster\'s direct, sometimes harsh communication style feels like an assault on the Goat\'s sensitive soul. While Earth supports Metal in the productive cycle, this relationship often drains the Goat without adequate reciprocity.',
      },
      {
        slug: 'wood-dog',
        name: 'Wood Dog',
        score: 42,
        summary:
          'Despite shared good intentions, the Wood Dog\'s anxious vigilance and blunt honesty can destabilize the Earth Goat\'s need for peaceful harmony. The Dog\'s tendency to see threats everywhere creates an atmosphere of tension that the Goat finds exhausting. Wood depletes Earth, potentially draining the Goat\'s nurturing reserves.',
      },
    ],

    elementAffinity: `As a double-earth sign, the Earth Goat has distinctive elemental relationships. Fire signs are natural allies — Fire creates Earth in the productive cycle, providing the warmth and energy that sustain the Goat's nurturing nature without overwhelming their sensitivity. Metal signs are supported by the Earth Goat (Earth creates Metal), but these relationships risk draining the Goat's resources without adequate return. Water signs offer emotional depth and fluidity that enrich the Goat's experience, though excessive Water energy can create dampness and heaviness in the Goat's already earthy constitution. Wood signs present the greatest challenge, as Wood depletes Earth, potentially exhausting the Earth Goat's generous reserves.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Goats excel in careers that combine creative expression with practical nurturing. They are drawn to work that makes environments more beautiful, people more comfortable, and communities more harmonious. The ideal Earth Goat career provides both creative satisfaction and the knowledge that their work directly improves the lives of others — a combination that feeds both their artistic soul and their nurturing instinct.

The Earth Goat's work style is collaborative, detail-oriented, and quietly dedicated. They are not driven by ambition for status or power but by genuine satisfaction in creating something beautiful and useful. They work best in environments that value quality over speed, craftsmanship over mass production, and human wellbeing over pure profit.

Earth Goats often find their greatest career satisfaction in roles that blur the line between caring and creating. Interior design, culinary arts, landscape architecture, education, and therapeutic practices all allow the Earth Goat to express their unique combination of aesthetic sensibility and nurturing instinct in work that produces both beautiful and genuinely helpful outcomes.`,

    idealCareers: [
      'Interior Designer',
      'Chef/Pastry Chef',
      'Landscape Architect',
      'Occupational Therapist',
      'Childcare Center Director',
      'Floral Designer',
      'Nutritionist',
      'Ceramic Artist',
    ],

    financialStyle:
      'Earth Goats are generous, practical money managers who prioritize comfort and quality over accumulation. They invest in their home, their family\'s wellbeing, and experiences that nourish their creative spirit. Their financial approach is conservative but not miserly — they save for security while also spending on beauty and quality that improve daily life. Their weakness is difficulty asserting their financial worth in professional settings, often accepting less than they deserve because negotiation feels confrontational. The Earth Goat who develops the confidence to price their work fairly discovers that the market values their unique combination of care and craftsmanship far more than their modesty assumes.',

    tips: [
      'Pursue careers that honor both your creative gifts and your nurturing instinct. Roles that allow you to create beautiful, functional environments — design, culinary arts, landscape architecture — provide the deepest professional satisfaction for your dual nature.',
      'Learn to value your work objectively. Earth Goats chronically undervalue their contributions because their work feels natural and effortless. Seek external benchmarks — market rates, peer feedback, professional assessments — that provide a realistic picture of your work\'s true value.',
      'Establish professional boundaries to prevent burnout. Your desire to help and please can lead to overwork and under-compensation. Define your scope of work clearly, maintain regular hours, and resist the urge to give away your expertise for free.',
      'Develop a professional support network of colleagues who understand and appreciate your work. Earth Goats thrive when they feel part of a caring professional community. Mentorship relationships, professional associations, and collaborative partnerships provide both practical opportunities and the emotional sustenance this sign needs.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Goat is one of the most devoted, nurturing, and emotionally generous partners in the Chinese zodiac. They pour their considerable creative energy into building a beautiful shared life, creating a home environment of warmth, comfort, and aesthetic harmony that becomes a sanctuary for both partners. Being loved by an Earth Goat means being genuinely cared for — not just emotionally but practically, with meals prepared with attention, spaces arranged for comfort, and needs anticipated before they are expressed.

Earth Goats fall in love with their whole being, committing emotionally, practically, and creatively to the partnership. They are not casual about romance; for them, love is a vocation that demands their full investment. Once committed, they demonstrate their love through an endless stream of caring acts — the perfectly chosen gift, the meal prepared exactly to their partner's taste, the room arranged for maximum comfort after a difficult day.

The Earth Goat's primary challenge in love is maintaining their own identity within the partnership. Their tendency to define themselves through caregiving can lead to relationships where they exist solely in relation to their partner, having sacrificed their own interests, friendships, and creative pursuits on the altar of devoted partnership. The healthiest Earth Goat relationships are those where the partner actively encourages the Goat to maintain their independent creative life.`,

    loveStyle:
      'The Earth Goat loves through creation and care. Their romantic expression centers on building a beautiful, comfortable shared world — the perfectly designed home, the lovingly prepared meals, the thoughtful attention to their partner\'s daily comfort. They are physically affectionate in a warm, enveloping way and deeply attentive to their partner\'s emotional states. Their love language combines acts of service with quality time, creating an intimate domestic world that feels like a refuge from the harshness of external life. They are loyal, patient, and endlessly giving — sometimes to a fault.',

    idealPartnerTraits: [
      'Protective',
      'Appreciative',
      'Emotionally Expressive',
      'Supportive of Creativity',
      'Strong Yet Gentle',
    ],

    tips: [
      'Maintain your individual creative pursuits alongside the relationship. Your identity cannot be solely defined by caregiving — you need creative expression, personal friendships, and independent interests to remain a whole, vital person within the partnership.',
      'Ask for what you need rather than waiting for your partner to intuit it. Your talent for reading others\' needs can create an expectation that your partner should reciprocate with equal intuition. They may not. Direct communication about your needs is more effective and fairer than silent resentment.',
      'Set limits on your caregiving that protect your own wellbeing. You cannot pour from an empty cup. Regular self-care — creative time, solitude, personal interests — is not selfish but essential to sustaining the generous love you naturally provide.',
      'Choose a partner who values your contributions rather than taking them for granted. The Earth Goat\'s greatest relationship risk is a partner who consumes their care without reciprocating. Look for someone who notices your efforts, expresses gratitude, and actively works to nurture you in return.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Goat possesses a gentle constitution that reflects their nurturing nature — warm and sustaining but not naturally robust. In Traditional Chinese Medicine, the double-earth constitution places special emphasis on the Stomach and Spleen, the organs responsible for digestion and the transformation of nutrients into usable energy. The Earth Goat's health is intimately connected to their digestive function and their emotional state — stress, worry, and the depletion of over-caregiving directly impact their physical vitality.

The most common Earth Goat health pattern is gradual depletion through excessive giving. They tend to prioritize everyone else's wellbeing while neglecting their own basic needs — irregular eating, insufficient sleep, postponed medical appointments, and chronic low-level stress from absorbing others' problems. Over time, this pattern manifests as persistent fatigue, digestive complaints, weakened immunity, and a general vitality deficit.

The Earth Goat's health strategy should focus on consistent self-nourishment — both literal (regular, nutritious meals) and figurative (creative expression, rest, emotional replenishment). They need to apply their extraordinary nurturing talent to themselves with the same devotion they bring to caring for others.`,

    bodyAreas: ['Stomach', 'Spleen', 'Immune System', 'Skin'],

    exercises: [
      'Yoga',
      'Gentle dance',
      'Gardening',
      'Walking in nature',
    ],

    dietTips: [
      'Nourish yourself with the same care you bring to feeding others. Prepare beautiful, balanced meals for yourself — not just for your family or guests. The Earth Goat who eats well consistently maintains the vitality needed to sustain their generous nature.',
      'Prioritize warm, cooked foods that support Spleen function. The double-earth constitution thrives on soups, stews, roasted vegetables, and whole grains prepared with warming spices. Avoid excessive cold, raw, and damp foods that weaken the already sensitive Earth digestive system.',
      'Address emotional eating patterns consciously. Earth Goats may use food as comfort during periods of stress or when their nurturing instincts are frustrated. Recognizing this pattern and finding non-food sources of comfort — creative expression, warm baths, nature walks — breaks the cycle.',
      'Support immunity with foods rich in vitamins C and D, zinc, and probiotics. The Earth Goat\'s tendency toward immune weakness responds well to consistent nutritional support through citrus fruits, fermented foods, mushrooms, and leafy greens.',
    ],

    mentalHealth:
      'The Earth Goat\'s primary mental health vulnerability is depression rooted in depletion and unrecognized grief. Their pattern of giving without receiving, nurturing without being nurtured, and suppressing their own needs in service of others creates a slowly deepening deficit that eventually manifests as pervasive sadness, loss of motivation, and emotional numbness. Creative expression is the Earth Goat\'s most powerful antidepressant — painting, cooking, gardening, music, or any practice that allows them to create beauty nourishes their soul in ways that caregiving alone cannot. They also benefit enormously from relationships where they receive care rather than only providing it. Professional therapy can be transformative, particularly approaches that help the Earth Goat recognize and grieve the self-abandonment that their nurturing nature sometimes demands. Learning to say "I matter too" — and believing it — is the Earth Goat\'s most important mental health breakthrough.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['Honey Gold', 'Sage Green', 'Cream'],
    direction: 'Southwest',
    gemstones: ['Jade', 'Amber', 'Carnelian'],
    flowers: ['Primrose', 'Lavender', 'Carnation'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH GOATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Jackie Kennedy Onassis',
        profession: 'First Lady/Editor',
        birthYear: 1929,
        description:
          'Jackie Kennedy Onassis epitomized the Earth Goat\'s gift for creating beauty and harmony in every environment she inhabited. From her legendary restoration of the White House to her quiet, dedicated career in publishing, she combined aesthetic excellence with practical devotion — the Earth Goat\'s signature contribution.',
      },
      {
        name: 'Claes Oldenburg',
        profession: 'Sculptor',
        birthYear: 1929,
        description:
          'Claes Oldenburg\'s monumental public sculptures — transforming everyday objects into awe-inspiring art — demonstrate the Earth Goat\'s ability to bridge the aesthetic and the practical. His work embodies the sign\'s gift for taking creative vision and manifesting it in massive, enduring physical form.',
      },
      {
        name: 'Orhan Pamuk',
        profession: 'Nobel Laureate/Writer',
        birthYear: 1979,
        description:
          'Orhan Pamuk\'s richly textured novels, exploring the intersection of cultures and the weight of history, reflect the Earth Goat\'s deep sensitivity and nurturing attention to human experience. His creation of the Museum of Innocence — a physical space manifesting a literary vision — is quintessential Earth Goat energy.',
      },
      {
        name: 'Brandy Norwood',
        profession: 'Singer/Actress',
        birthYear: 1979,
        description:
          'Brandy\'s warm, nurturing vocal style and her dedication to uplifting roles in entertainment reflect the Earth Goat\'s combination of artistic sensitivity and genuine care for community. Her sustained career across music, television, and Broadway demonstrates the sign\'s patient creative persistence.',
      },
      {
        name: 'Heath Ledger',
        profession: 'Actor',
        birthYear: 1979,
        description:
          'Heath Ledger\'s extraordinary ability to inhabit characters with deep emotional truth reflects the Earth Goat\'s profound sensitivity and creative dedication. His transformative performances demonstrated the sign\'s capacity to channel intense feeling into lasting artistic achievement, creating work of enduring beauty and impact.',
      },
      {
        name: 'Adam Levine',
        profession: 'Musician',
        birthYear: 1979,
        description:
          'Adam Levine\'s sustained career as both a musician and cultural figure demonstrates the Earth Goat\'s ability to combine creative artistry with practical commercial success. His warm, accessible style and ability to create music that resonates with broad audiences reflects the sign\'s gift for bridging the artistic and the popular.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Goat (or Sheep/Ram) holds a position of gentle reverence in Chinese mythology as a symbol of peace, filial piety, and the nurturing abundance of the earth. In the zodiac origin story, the Goat arrived eighth, having spent the race helping others along the way — a founding myth that establishes the Goat's identity as the sign of selfless care and communal generosity. The Goat is associated with the earthly branch Wei (未), representing the afternoon hours and the transitional period of late summer when the harvest is gathered.

When the Earth element infuses this already earth-connected animal, it creates a double-earth combination that ancient Chinese astrologers associated with exceptional fertility and nourishment. The Earth Goat in traditional cosmology represented the most maternal expression of the zodiac — the sign most closely connected to the earth's capacity to receive, nurture, and bring forth life. Earth Goat years were considered auspicious for planting, for beginning families, and for any endeavor that required patient cultivation and generous care.`,

    symbolism: `The Earth Goat symbolizes nurturing abundance and the creative power of gentle care. In Wu Xing symbolism, this double-earth combination represents the fertile valley — the protected, nourished space where life flourishes because conditions have been carefully tended. Unlike the Earth Dragon's constructive force or the Earth Ox's immovable stability, the Earth Goat's earth is receptive and generative, creating abundance through patient care rather than powerful action.

The Earth Goat is also a symbol of aesthetic harmony rooted in natural law. Their instinct to create beauty is not arbitrary but reflects a deep attunement to the patterns of nature — the same organic harmony that shapes a flower, a shoreline, or a forest canopy. This makes the Earth Goat a symbol of design that serves life rather than ego.`,

    modernInterpretation: `In contemporary culture, the Earth Goat archetype resonates with movements toward sustainable design, nurturing leadership, and the recognition that caregiving is among the most valuable and undervalued forms of human contribution. In an era that has over-indexed on productivity, disruption, and competitive achievement, the Earth Goat represents the counter-narrative: that creating beautiful, nourishing environments, caring for others with patient devotion, and prioritizing quality of life over quantity of output are not lesser pursuits but essential ones.

The Earth Goat's modern relevance extends to the growing appreciation for artisanal craftsmanship, slow food, and intentional living. As society grapples with the consequences of mass production and disposable culture, the Earth Goat's values — quality over quantity, beauty infused with function, care embedded in creation — offer a compelling alternative vision of how work and life can be organized.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
