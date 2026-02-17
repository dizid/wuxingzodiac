// ============================================
// WATER GOAT (壬未) — The Empathic Healer
// ============================================
// The Water Goat combines the Goat's artistic sensitivity
// and nurturing warmth with Water's emotional depth and
// intuitive wisdom — producing the zodiac's most naturally
// compassionate and creatively inspired personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-goat',
  profile: getProfileBySlug('water-goat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Goat is the most emotionally gifted and artistically inspired of all Goat variants. Where the Goat is already renowned for its gentle nature, aesthetic sensibility, and deep capacity for empathy, the Water element amplifies these qualities into something approaching spiritual sensitivity. The Water Goat does not merely appreciate beauty — they channel it, creating art, environments, and relationships that heal, comfort, and transform. They move through the world as if surrounded by a gentle mist, softening harsh edges and bringing unexpected beauty to ordinary moments.

What makes the Water Goat extraordinary is the depth of their emotional attunement. They perceive the emotional states of those around them with an accuracy that borders on telepathic, responding with precisely the comfort, encouragement, or creative inspiration the moment requires. This is not calculated empathy but genuine, spontaneous compassion that flows from them as naturally as water from a spring. People are drawn to the Water Goat because they feel better in their presence — calmer, more creative, more accepting of themselves.

Beneath this nurturing exterior, the Water Goat carries a rich, sometimes turbulent inner life. They absorb the world's beauty and pain in equal measure, and their sensitive constitution can be overwhelmed by harshness, conflict, and the relentless demands of practical life. The Water Goat's lifelong challenge is building the resilience necessary to navigate a world that is not always as gentle as they are — developing emotional boundaries that protect their sensitivity without walling off the compassionate openness that defines them.`,

    coreTraits: [
      'Compassionate',
      'Creative',
      'Intuitive',
      'Gentle',
      'Nurturing',
      'Emotionally Deep',
    ],

    strengths: [
      {
        trait: 'Healing Presence',
        description:
          'The Water Goat possesses a natural healing quality that operates through presence alone. Their gentle energy, genuine empathy, and willingness to sit with others\' pain without trying to fix it creates an atmosphere of acceptance that is profoundly therapeutic. People instinctively seek them out during emotional crises, knowing they will find compassion without judgment.',
      },
      {
        trait: 'Artistic Brilliance',
        description:
          'Water amplifies the Goat\'s already considerable artistic gifts into genuine creative brilliance. The Water Goat perceives beauty, pattern, and emotional resonance with extraordinary sensitivity, producing creative work that speaks to the soul rather than merely pleasing the eye. Whether through visual art, music, writing, or the art of creating beautiful living spaces, they express the inexpressible.',
      },
      {
        trait: 'Emotional Wisdom',
        description:
          'The Water Goat understands the landscape of human emotions with a depth that comes from lived experience and natural perception. They know that grief is not a problem to solve but a process to honor, that vulnerability is not weakness but courage, and that beauty often emerges from brokenness. This emotional wisdom makes them trusted advisors in the most intimate areas of life.',
      },
      {
        trait: 'Nurturing Generosity',
        description:
          'The Water Goat gives with a generosity that is both material and emotional, creating environments where others feel supported, valued, and free to be themselves. Their homes are sanctuaries, their friendships are havens, and their creative spaces are incubators for others\' growth. This nurturing impulse is not possessive or controlling but genuinely focused on the well-being of those they care about.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Vulnerability',
        description:
          'The Water Goat\'s open, receptive nature makes them deeply vulnerable to emotional injury. Harsh words, conflict, rejection, and even the suffering of strangers can wound them in ways that more resilient signs would barely register. This vulnerability is the shadow side of their empathy — the price they pay for feeling everything so deeply.',
      },
      {
        trait: 'Dependency',
        description:
          'The Water Goat\'s desire for emotional safety and their difficulty with practical demands can create a pattern of dependency on stronger, more decisive partners or friends. They may rely too heavily on others for financial stability, decision-making, and protection from the world\'s harshness, limiting their own growth and placing unsustainable burdens on their relationships.',
      },
      {
        trait: 'Avoidance of Reality',
        description:
          'The Water Goat\'s preference for beauty, harmony, and emotional comfort can lead them to avoid harsh realities that demand engagement. They may ignore financial problems, deny relationship issues, or retreat into fantasy when practical challenges become overwhelming. This avoidance, while temporarily soothing, typically makes problems worse over time.',
      },
      {
        trait: 'Self-Pity',
        description:
          'When the world\'s harshness overwhelms the Water Goat\'s gentle nature, they can spiral into self-pity — a passive suffering that consumes their creative energy and alienates the supportive people they depend on. Learning to transform pain into creative expression rather than dissolving into victimhood is essential to the Water Goat\'s growth.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Goat is associated with Earth energy — nurturing, stable, and connected to the harvest and abundance. When Water is layered onto this Earth-natured animal, the combination follows the controlling cycle: Earth dams and contains Water, while Water erodes and nourishes Earth. This creates a productive internal tension — the Goat's Earth nature provides the warmth and stability that prevents Water's emotional depth from becoming overwhelming, while Water's flow prevents Earth from becoming rigid and dry.

This Earth-Water dynamic gives the Water Goat a unique creative gift: they can contain and shape emotional experience into tangible form. Where pure Water signs may be overwhelmed by feeling and pure Earth signs may suppress it, the Water Goat transforms feeling into beauty — channeling raw emotion through the Earth element's capacity for form into art, environments, and relationships of lasting value. The Water Goat's well-being depends on maintaining this creative flow; when they stop creating, the contained Water has no outlet and begins to flood their inner landscape, leading to the emotional overwhelm and depression this sign is vulnerable to.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Goat seeks partners who provide emotional warmth, practical stability, and genuine appreciation for the beauty and comfort they create. They need a partner who is strong where they are soft — someone who can handle the practical demands of life while honoring the Water Goat's sensitive, artistic nature as a gift rather than a liability. The Goat belongs to the Fourth Trine alongside the Rabbit and the Pig — gentle, artistic signs that share the Goat's love of beauty, harmony, and emotional connection.

The Goat sits in opposition to the Ox on the zodiac wheel, creating tension between the Goat's artistic sensitivity and the Ox's pragmatic determination. For the Water Goat, this opposition is particularly pronounced — the Ox's blunt, no-nonsense approach can feel bruising to the Water Goat's delicate sensibility.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 94,
        summary:
          'A deeply harmonious partnership of shared sensitivity and mutual nurturing. The Water Rabbit\'s gentle diplomacy and aesthetic refinement create a relationship that feels like a shared sanctuary. Both Water signs, they communicate on an intuitive, almost wordless level. Together they create a world of beauty, comfort, and emotional safety that sustains them both.',
      },
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 90,
        summary:
          'A warm, generous partnership built on mutual appreciation and complementary strengths. The Wood Pig\'s enthusiastic optimism and genuine kindness provide the emotional security the Water Goat craves, while the Goat\'s artistic sensitivity and creative vision enrich the Pig\'s life with beauty. Water nourishes Wood, creating a naturally supportive flow.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 85,
        summary:
          'An unexpectedly harmonious pairing of complementary opposites. The Fire Horse\'s bold energy and passionate nature provide the excitement and protection the Water Goat needs, while the Goat\'s gentle, cooling presence soothes the Horse\'s intensity. Water cools Fire without extinguishing it, creating a dynamic balance that deepens over time.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 30,
        summary:
          'The Goat and Ox sit at opposite ends of the zodiac, and the Metal element intensifies the Ox\'s already formidable stubbornness. The Metal Ox\'s rigid pragmatism and blunt communication style wound the Water Goat deeply, while the Goat\'s emotional sensitivity and artistic temperament frustrate the Ox\'s demand for practical contribution. A genuinely difficult pairing.',
      },
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 38,
        summary:
          'The Metal Rat\'s sharp, calculating approach to life unsettles the Water Goat\'s gentle nature. The Rat\'s focus on strategic advantage feels cold and transactional to the Goat, who values emotional authenticity above all. The Goat\'s lack of practical ambition frustrates the Rat\'s expectations of a partner who contributes to shared strategic goals.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 40,
        summary:
          'The Fire Rooster\'s bold perfectionism and direct criticism wound the Water Goat\'s sensitive heart. The Rooster demands precision, accountability, and visible productivity — qualities that conflict with the Goat\'s flowing, intuitive approach to life. The Goat retreats from the Rooster\'s scrutiny; the Rooster interprets this retreat as evasion.',
      },
    ],

    elementAffinity: `As a Water-element sign with an Earth-natured animal, the Water Goat navigates a complex elemental landscape. Metal signs provide support — Metal generates Water, reinforcing the Goat's emotional depth while providing structure that the Goat's gentle Earth nature welcomes. Wood signs create vibrant, growth-oriented partnerships where the Goat's Water nourishes the partner's creative development. Water signs create deeply empathetic connections, though double-Water dynamics risk emotional overwhelm without sufficient grounding. Fire signs provide warmth and energy that the Goat needs but must be moderate — too much Fire overwhelms both the Water element and the Goat's gentle Earth nature. Earth signs provide comfortable familiarity, though double-Earth combined with Water can become overly heavy and stagnant without active effort to maintain movement and inspiration.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Goat excels in careers that value emotional intelligence, artistic sensibility, and the ability to create environments of beauty and healing. They are drawn to work that serves others while allowing creative expression — roles where their sensitivity is a professional asset rather than a personal liability. The competitive corporate world rarely suits the Water Goat's temperament, but they thrive in environments that prioritize human connection, aesthetic quality, and meaningful impact.

The ideal Water Goat career provides a beautiful working environment, meaningful relationships, and the freedom to approach work intuitively rather than mechanistically. They excel as healers, artists, designers, counselors, and caretakers — any role where their natural empathy and creative vision can improve the human experience. Their gift for creating atmosphere makes them exceptional interior designers, event planners, and hospitality professionals.

Financially, the Water Goat's relationship with money is one of their most significant challenges. They tend toward financial anxiety that coexists paradoxically with impractical spending habits — worried about security while unable to resist beautiful objects, generous gestures, and experiences that feed their artistic soul.`,

    idealCareers: [
      'Art Therapist',
      'Interior Designer',
      'Floral Designer',
      'Music Therapist',
      'Hospice Counselor',
      'Children\'s Illustrator',
      'Wellness Retreat Director',
      'Textile Artist',
    ],

    financialStyle:
      'The Water Goat\'s relationship with money is characterized by a tension between their desire for security and their attraction to beauty. They worry about finances but struggle to implement the practical disciplines that would ease that worry. They are generous to a fault with loved ones, attracted to beautiful objects they cannot always afford, and uncomfortable with the assertiveness that high-earning positions typically require. The Water Goat\'s financial growth lies in finding a partner or advisor who can provide practical financial structure while respecting the Goat\'s need for beauty. Automated financial systems that save and invest before the money can be spent on impulse are particularly effective for this sign.',

    tips: [
      'Recognize that your creativity is a professional skill, not a hobby. In an economy that increasingly values design thinking, emotional intelligence, and user experience, your natural gifts have genuine market value. Position yourself in industries that will compensate these abilities fairly.',
      'Build a practical support system. Identify the administrative, financial, and logistical tasks that drain your energy and either delegate them or automate them. Your creative output increases dramatically when you are not consumed by the practical details that deplete you.',
      'Develop financial literacy as an act of self-care. Understanding money does not mean becoming materialistic — it means giving yourself the security that allows your creativity to flourish without anxiety. Take a course, find a mentor, or work with a financial advisor who understands creative professionals.',
      'Create boundaries around your giving. Your generous nature is beautiful but can be exploited. Learn to distinguish between genuine need that you can fulfill sustainably and demands that deplete you without reciprocation. Sustainable generosity requires self-preservation.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Goat in love is tender, devoted, and profoundly romantic. They bring their entire being to a relationship — their creativity, their empathy, their deep capacity for nurturing — creating a love that wraps around their partner like a warm, beautiful blanket. The Water Goat does not simply love their partner; they create a world for them, an intimate universe of shared beauty, inside jokes, tender routines, and emotional understanding so complete that the outside world feels less real than the sanctuary they have built together.

The Water Goat's approach to love is giving, intuitive, and deeply caring. They anticipate their partner's needs with remarkable accuracy, creating comfort and beauty that communicates devotion more eloquently than words. A perfectly prepared home, a thoughtful surprise that references a conversation from weeks ago, the gentle way they adjust their energy to match their partner's mood — these are the Water Goat's love letters, written in the language of attention and care.

The Water Goat's romantic challenge is maintaining their own identity and needs within the relationship. Their desire to please, combined with their genuine empathy, can lead them to merge so completely with their partner that they lose track of their own desires, opinions, and boundaries. The Water Goat who learns to receive as generously as they give discovers a love that sustains rather than depletes them.`,

    loveStyle:
      'The Water Goat loves with warm, enveloping devotion that creates an atmosphere of complete acceptance and beauty. They express affection through nurturing — creating a beautiful home, preparing nourishing meals, anticipating emotional needs, and wrapping their partner in an environment of such comfort that the harshness of the world feels impossibly distant. They need a partner who appreciates this devotion without taking it for granted, who reciprocates with warmth and practical support, and who encourages the Goat to maintain their own identity within the relationship.',

    idealPartnerTraits: [
      'Protective',
      'Appreciative',
      'Practically Capable',
      'Emotionally Warm',
      'Respectful of Sensitivity',
    ],

    tips: [
      'Ask for what you need directly. Your tendency to give silently and hope that your partner will reciprocate intuitively leads to disappointment and resentment. Your partner wants to care for you but needs clear signals about how. Name your needs — it is not selfishness but the foundation of sustainable love.',
      'Maintain your creative life independently. Your art, your creative practices, and your aesthetic pursuits are not just hobbies — they are essential to your identity. A partner who asks you to give them up does not understand you; a partner who encourages them does.',
      'Choose strength in your partner without choosing harshness. You need someone who can handle the practical world, make difficult decisions, and protect your sensitivity — but not someone who dismisses or diminishes your emotional nature. Strength and gentleness can coexist; hold out for someone who embodies both.',
      'Address conflict rather than dissolving into accommodation. When you automatically yield to avoid tension, you do not prevent conflict — you postpone it and add resentment to the bill. Small, honest disagreements are far healthier than the accumulated weight of unspoken capitulation.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Goat's constitution combines the Goat's Earth-natured gentleness with Water's influence on the body's emotional and fluid systems. In Traditional Chinese Medicine, the Goat's Earth nature governs the Spleen and Stomach — the body's center of digestion, nutrient transformation, and the production of qi and blood. Water governs the Kidneys and the body's foundational vitality. This combination creates a person of considerable sensitivity whose health depends heavily on emotional state, diet quality, and environmental harmony.

The characteristic Water Goat health pattern involves the conversion of emotional stress into physical symptoms. More than almost any other sign, the Water Goat experiences a direct connection between emotional well-being and physical health. Worry, sadness, and conflict manifest quickly as digestive problems, fatigue, immune suppression, and skin issues. This mind-body sensitivity is both the Water Goat's vulnerability and their potential gift — when they learn to manage their emotional environment, their physical health responds with remarkable speed.

Prevention for the Water Goat centers on creating and maintaining environmental harmony. A beautiful, calm living space, supportive relationships, nourishing food, and regular creative expression are not luxuries for this sign but genuine health necessities. The Water Goat who prioritizes their emotional and aesthetic environment discovers that their seemingly delicate constitution is actually quite robust when properly supported.`,

    bodyAreas: ['Digestive System', 'Spleen', 'Kidneys', 'Immune System'],

    exercises: [
      'Gentle yoga and restorative stretching',
      'Walking in beautiful natural settings',
      'Swimming for gentle, full-body movement',
      'Creative dance for emotional expression',
    ],

    dietTips: [
      'Prioritize warm, nourishing meals that support digestive function. The Water Goat\'s Earth constitution benefits from foods that are easy to digest and warming: soups, stews, congee, steamed vegetables, and well-cooked grains. Avoid cold, raw, and difficult-to-digest foods that burden the Spleen.',
      'Include immune-supporting foods: mushrooms (shiitake, maitake, reishi), bone broth, fermented foods like miso and kimchi, and vitamin C-rich fruits. The Water Goat\'s sensitive immune system benefits from consistent nutritional support rather than crisis intervention.',
      'Support emotional balance through diet with foods rich in B vitamins and magnesium: whole grains, leafy greens, eggs, and legumes. These nutrients support the nervous system and help prevent the anxiety and mood fluctuations the Water Goat is prone to.',
      'Create beautiful, mindful eating experiences. For the Water Goat, how food is presented and the atmosphere in which it is consumed matters almost as much as its nutritional content. Beautiful table settings, calm environments, and unhurried meals support both digestion and emotional well-being.',
    ],

    mentalHealth:
      'The Water Goat\'s most significant mental health vulnerability is depression triggered by emotional overwhelm, environmental harshness, or the exhaustion of perpetual giving without adequate receiving. Their sensitive nature absorbs the world\'s suffering, and without sufficient outlets and support, this accumulated weight can settle into a persistent low mood that saps their creativity and connection. Creative expression is the Water Goat\'s most powerful mental health tool — painting, music, gardening, cooking, or any practice that transforms internal experience into external beauty provides both relief and meaning. Therapy that honors their emotional sensitivity rather than trying to "toughen them up" is essential — approaches like art therapy, somatic experiencing, and person-centered counseling align with the Water Goat\'s nature. Community is also vital; the Water Goat who isolates during depression deepens it, while the one who reaches out to supportive friends and creative collaborators often finds that shared warmth melts the ice that has formed around their heart.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['Blue', 'Seafoam Green', 'Lavender', 'Silver'],
    direction: 'North',
    gemstones: ['Moonstone', 'Rose Quartz', 'Pearl'],
    flowers: ['Carnation', 'Primrose', 'Water Lily'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER GOATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Mick Jagger',
        profession: 'Rock Musician',
        birthYear: 1943,
        description:
          'Mick Jagger\'s extraordinary artistic longevity and chameleon-like ability to reinvent his stage persona across decades reflects the Water Goat\'s creative adaptability and intuitive connection with audience emotion. His performances channel raw feeling into art with the emotional intensity characteristic of the Water Goat at their most expressive.',
      },
      {
        name: 'Robert De Niro',
        profession: 'Actor',
        birthYear: 1943,
        description:
          'Robert De Niro\'s method acting approach — immersing completely in characters\' emotional worlds — embodies the Water Goat\'s extraordinary empathetic depth. His ability to inhabit diverse emotional landscapes with total authenticity reflects the sign\'s gift for feeling what others feel and transforming that understanding into art.',
      },
      {
        name: 'George Harrison',
        profession: 'Musician/Spiritual Seeker',
        birthYear: 1943,
        description:
          'George Harrison\'s journey from Beatle to spiritual seeker to philanthropist traces the Water Goat\'s natural arc from artistic expression to deeper meaning. His devotion to Eastern spirituality and his creation of the Concert for Bangladesh reflect the sign\'s compassionate nature and desire to use beauty in service of healing.',
      },
      {
        name: 'Joni Mitchell',
        profession: 'Singer/Songwriter',
        birthYear: 1943,
        description:
          'Joni Mitchell\'s deeply personal, emotionally transparent songwriting represents the Water Goat\'s artistic sensitivity at its most refined. Her ability to transform private emotional experience into universally resonant art exemplifies the sign\'s gift for channeling feeling into beauty that heals both creator and audience.',
      },
      {
        name: 'Catherine Deneuve',
        profession: 'Actress',
        birthYear: 1943,
        description:
          'Catherine Deneuve\'s luminous screen presence and her ability to convey complex emotional states with subtle, understated performances reflect the Water Goat\'s refined sensitivity and aesthetic grace. Her enduring elegance and selective approach to roles embody the sign\'s commitment to beauty and quality over quantity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Goat (also known as the Sheep or Ram in various translations) holds the eighth position in the Chinese zodiac. In the Great Race legend, the Goat, Monkey, and Rooster worked together to cross the river on a raft, arriving together and being placed eighth, ninth, and tenth respectively. The Jade Emperor gave the Goat eighth place because the other two acknowledged its gentle, calming presence as essential to their collaboration. This origin story encodes the Goat's fundamental nature: achieving through cooperation, nurturing, and the quiet power of emotional support rather than individual competition.

In Chinese mythology, the Goat is associated with filial piety, peaceful prosperity, and the blessings of a gentle life. The Chinese character for "auspicious" (祥) contains the character for goat/sheep (羊), reflecting the deep cultural association between this animal and good fortune. When paired with the Water element, this auspicious nature is deepened by associations with emotional richness, creative flow, and the healing power of compassionate presence.

The Water Goat also connects to the Chinese cultural ideal of the scholar-artist — the refined intellectual who cultivates beauty, wisdom, and moral virtue as inseparable aspects of a meaningful life. Water's association with wisdom and depth, combined with the Goat's artistic sensitivity, creates an archetype that has been celebrated in Chinese culture for millennia: the person who creates beauty not for fame or profit but as an expression of inner cultivation.`,

    symbolism: `The Water Goat symbolizes the transformative power of gentleness, the creativity that flows from emotional depth, and the healing that occurs when beauty and compassion converge. In traditional symbolism, it represents the principle that the softest forces — water, empathy, beauty — are ultimately more powerful than violence, competition, and force. The Water Goat reminds us that the most enduring human creations are born not from ambition but from love.

Water flowing through the Goat's pastoral domain carries symbolism of abundance and nurturing fertility. It represents the emotional nourishment that sustains communities — the kindness, creative beauty, and compassionate presence that make human life not merely survivable but genuinely beautiful. In the Wu Xing cycle, the relationship between Earth (the Goat's nature) and Water (its element) symbolizes the productive tension between form and feeling — the way emotion needs structure to become art, and structure needs emotion to become meaningful.

The Water Goat also symbolizes the courage of vulnerability. In a zodiac system that celebrates strength, strategy, and power, the Water Goat stands as a reminder that the willingness to be open, to feel deeply, and to create beauty from pain requires its own form of bravery — one that is often more demanding than physical courage.`,

    modernInterpretation: `In contemporary culture, the Water Goat archetype resonates with growing recognition that emotional intelligence, creative expression, and compassionate care are not secondary to traditional markers of success but essential components of a well-functioning society. As mental health awareness increases, the need for healers, artists, and emotionally attuned caregivers has never been more apparent — and the Water Goat's natural gifts have never been more valued.

The Water Goat also speaks to the modern movement toward authentic self-expression and vulnerability. In a culture where social media often rewards curated perfection, the Water Goat's insistence on emotional honesty — their willingness to show their tender underbelly in service of genuine connection — offers a powerful counternarrative. Their art, their relationships, and their way of being in the world all suggest that authenticity, even when it is uncomfortable, creates something more valuable than any polished performance.

For those born in Water Goat years, the contemporary world offers both unprecedented opportunity and significant challenge. Their gifts are more valued than ever, but the pace and harshness of modern life can be genuinely overwhelming for their sensitive constitution. The most thriving Water Goats find environments that honor their gentle nature — creative communities, healing professions, and relationships with partners who protect their sensitivity without trying to eliminate it.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
