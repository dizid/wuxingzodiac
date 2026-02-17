// ============================================
// WOOD GOAT (甲未) — The Artistic Dreamer
// ============================================
// The Wood Goat combines the Goat's artistic sensitivity
// and gentle nature with Wood's creative growth energy,
// producing a deeply imaginative soul who transforms
// inner visions into tangible beauty.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-goat',
  profile: getProfileBySlug('wood-goat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Goat is the most creatively fertile and emotionally generous of all Goat-element combinations. The Goat — already one of the zodiac's most artistic and sensitive animals — is enriched by the Wood element's gifts of growth, compassion, and creative vitality. The result is a personality of extraordinary imagination, warmth, and aesthetic sensibility that transforms everything it touches into something more beautiful.

People born under this sign live in a world of rich inner experience. They see poetry in the mundane, beauty in the imperfect, and meaning in what others dismiss as insignificant. The Wood Goat's imagination is not fantasy or escapism — it is a different way of perceiving reality, one that finds patterns, connections, and emotional truths that more literal minds miss entirely. This imaginative depth, when channeled through artistic expression, produces work of genuine originality and emotional power.

What makes the Wood Goat particularly compelling is their combination of vulnerability and creative courage. They feel everything deeply — joy, sadness, beauty, injustice — and they have the artistic bravery to express those feelings authentically. In a world that often rewards surface and cynicism, the Wood Goat insists on depth and sincerity. Their art, their relationships, and their approach to life all share this quality of genuine, unguarded emotional engagement.`,

    coreTraits: [
      'Artistic',
      'Compassionate',
      'Imaginative',
      'Gentle',
      'Generous',
      'Intuitive',
    ],

    strengths: [
      {
        trait: 'Creative Brilliance',
        description:
          'The Wood Goat possesses one of the most fertile creative imaginations in the entire zodiac. The Wood element\'s growth energy amplifies the Goat\'s natural artistry, producing a person who generates original ideas, beautiful objects, and meaningful experiences with seemingly effortless abundance. Their creativity is not confined to traditional arts — it infuses everything they do, from cooking to conversation to problem-solving.',
      },
      {
        trait: 'Emotional Generosity',
        description:
          'The Wood Goat gives freely — time, attention, compassion, and creative energy. They are the friends who show up with exactly what you need before you ask, the partners who create a home full of warmth and beauty, and the colleagues who bring humanity to sterile professional environments. Their generosity is genuine, not performative, and it creates deep bonds of loyalty and affection.',
      },
      {
        trait: 'Aesthetic Intelligence',
        description:
          'The Wood Goat has an innate understanding of beauty — color, form, proportion, texture, atmosphere. They create environments that feel welcoming, choose gifts that feel personal, and design experiences that touch the heart. This aesthetic intelligence is not superficial but reflects a deep understanding of how external beauty affects internal well-being.',
      },
      {
        trait: 'Empathic Connection',
        description:
          'The Wood Goat connects with others at an emotional level that few signs can match. They feel what others feel — not as projection but as genuine empathic resonance. This capacity for deep emotional connection makes them extraordinary caregivers, artists, and friends, capable of understanding and expressing the human experience in all its complexity.',
      },
    ],

    challenges: [
      {
        trait: 'Dependency',
        description:
          'The Wood Goat\'s gentle nature and discomfort with practical matters can create excessive reliance on others for material security and emotional stability. They may seek partners, patrons, or institutions to handle the harsh realities they find overwhelming, creating a pattern of dependency that limits their autonomy and growth.',
      },
      {
        trait: 'Emotional Fragility',
        description:
          'The same sensitivity that makes the Wood Goat such a profound artist and empathic friend also leaves them vulnerable to emotional overwhelm. Criticism, conflict, and harsh environments can shatter their composure and send them into prolonged periods of withdrawal and self-doubt. Building emotional resilience without sacrificing sensitivity is their lifelong challenge.',
      },
      {
        trait: 'Impracticality',
        description:
          'The Wood Goat\'s rich inner world can disconnect them from practical realities. Bills, deadlines, administrative tasks, and financial planning feel like intrusions into their creative and emotional life. This avoidance of practical matters can create chronic instability that undermines even their creative work.',
      },
      {
        trait: 'Passive Resistance',
        description:
          'When the Wood Goat disagrees or feels pressured, they rarely confront directly. Instead, they resist through inaction — quietly not doing what they do not want to do, agreeing verbally while making no effort to follow through. This passive resistance can be deeply frustrating for those who depend on them and can erode trust over time.',
      },
    ],

    elementInfluence: `Wood's influence on the Goat is profoundly nurturing. The Goat is associated with the Earth element in Chinese cosmology, connected to the late summer season when nature is at its most abundant. Wood's relationship with Earth is complex — Wood overcomes Earth through the penetrating power of roots — but in the Wood Goat, this manifests as creative disruption that breaks through the Goat's tendency toward passivity and complacency. Wood adds vital, upward-moving energy to the Goat's naturally receptive and grounded nature, creating a person who is not merely aesthetically appreciative but actively creative. The Wood element provides the drive and growth energy that transforms the Goat's inner visions into outward expression, giving form to feelings and substance to dreams that might otherwise remain unrealized.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Goat's compatibility is defined by their need for emotional security, creative partnership, and a relationship that feels like a beautiful, shared inner world. They thrive with partners who appreciate their sensitivity, support their creativity, and provide the practical stability that allows them to focus on what they do best. The Goat belongs to the fourth trine alongside the Rabbit and the Pig, sharing these animals' love of beauty, comfort, and emotional authenticity.

The Wood element adds creative energy and a more collaborative spirit to the Goat's compatibility profile, making them more active partners than other Goat types. However, they still need relationships that prioritize emotional safety and aesthetic harmony above all else.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 93,
        summary:
          'An exquisitely harmonious fourth-trine pairing. The Water Rabbit\'s gentle wisdom and refined sensibility create a partnership of profound emotional and aesthetic resonance. Water nourishes Wood, sustaining the Wood Goat\'s creative growth, while both signs share a deep commitment to beauty, harmony, and emotional authenticity. This is a relationship that feels like a living work of art.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 89,
        summary:
          'A warm, nurturing fourth-trine alliance. The Water Pig\'s generous heart and emotional abundance provide exactly the security and support the Wood Goat needs to flourish creatively. Water feeds Wood, and the Pig\'s unconditional warmth dissolves the Goat\'s anxieties. In return, the Wood Goat brings beauty, imagination, and creative depth to the Pig\'s already abundant life.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 84,
        summary:
          'An unexpectedly dynamic pairing where the Fire Horse\'s passionate energy ignites the Wood Goat\'s creative vision. Wood feeds Fire, creating a productive flow where the Goat\'s creativity fuels the Horse\'s ambitions. The Horse provides the excitement and movement the Goat secretly craves, while the Goat offers the emotional depth and beauty that grounds the Horse\'s restless spirit.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 28,
        summary:
          'The Goat and Ox sit in direct opposition on the zodiac wheel, and Metal\'s sharp energy cutting Wood intensifies this clash. The Metal Ox\'s rigid practicality and blunt criticism devastates the Wood Goat\'s sensitive spirit, while the Goat\'s dreamy impracticality infuriates the Ox\'s demand for discipline and order. This pairing requires both signs to fundamentally alter their nature.',
      },
      {
        slug: 'metal-dog',
        name: 'Metal Dog',
        score: 35,
        summary:
          'The Metal Dog\'s sharp moral judgments and confrontational honesty overwhelms the Wood Goat\'s gentle, harmony-seeking nature. Metal cuts Wood, and the Dog\'s critical energy feels like a constant assault on the Goat\'s creative sensitivity. The Goat\'s avoidant tendencies frustrate the Dog\'s need for direct engagement.',
      },
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 38,
        summary:
          'The Metal Rat\'s sharp ambition and calculating nature creates friction with the Wood Goat\'s gentle, idealistic approach. Metal overcomes Wood, and the Rat\'s practical demands feel harsh to the Goat\'s sensitive spirit. The Goat\'s impracticality frustrates the Rat\'s need for partnership in building material security.',
      },
    ],

    elementAffinity: `The Wood Goat thrives with Water-element partners, who nourish their creative growth and provide the emotional sustenance that their sensitive nature requires. Fire-element partners can be stimulating — Wood feeds Fire — though the Goat must be careful not to give more creative energy than they receive. Earth-element partners share the Goat's grounded sensibility and can provide practical stability, though the relationship may lack the creative dynamism the Wood Goat craves. Metal-element partners present the greatest challenge, as Metal cuts Wood — these relationships can feel emotionally harsh and creatively suppressive to the hypersensitive Wood Goat.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Goat excels in careers that value creativity, aesthetic sensibility, and emotional intelligence. They are not built for competitive, aggressive, or purely analytical environments — the Wood Goat needs work that engages their imagination and allows them to create beauty, meaning, or emotional connection. Their ideal role combines artistic expression with human care.

The Wood Goat's greatest professional asset is their ability to create experiences, environments, and works that touch people emotionally. They understand that human decisions are driven by feeling as much as logic, and they bring this understanding to everything from product design to therapeutic practice to culinary arts.

Financially, the Wood Goat tends toward feast-or-famine patterns. They may earn well during creative periods but struggle during dry spells, and their discomfort with financial planning can leave them vulnerable. The most successful Wood Goats either develop their own financial discipline or partner with someone who provides it, freeing them to focus on the creative work that generates their income.`,

    idealCareers: [
      'Fine Artist or Illustrator',
      'Interior or Set Designer',
      'Music Therapist',
      'Chef or Pastry Artist',
      'Florist or Garden Designer',
      'Art Teacher',
      'Creative Writer',
      'Textile or Fashion Designer',
    ],

    financialStyle:
      'The Wood Goat\'s relationship with money is complicated by their preference for beauty and quality over financial accumulation. They spend on what moves them — art, fine materials, beautiful food, aesthetic experiences — and may neglect savings, budgeting, and practical financial planning. Their income tends to be irregular, flowing from creative commissions, seasonal work, or project-based engagements. The Wood Goat who develops even basic financial literacy and establishes automatic saving habits gains enormous peace of mind without sacrificing their creative lifestyle.',

    tips: [
      'Develop a professional structure that supports your creative rhythm. Your best work comes in inspired bursts, not through consistent nine-to-five output. Build a career that accommodates your creative cycles — freelancing, project-based work, or a role with flexible expectations around how and when you deliver results.',
      'Learn to value your creative work commercially without compromising its integrity. Many Wood Goats undercharge for their services because attaching a price to their art feels uncomfortable. Understand that fair compensation enables more and better creative work — undervaluing yourself is not humility but self-sabotage.',
      'Build relationships with practical, business-minded allies. A good agent, manager, or business partner can handle the administrative and financial aspects of your career while you focus on creating. This is not dependency but smart delegation.',
      'Create a financial safety net before you need it. Set aside three to six months of expenses in a savings account that you do not touch. This cushion allows you to take creative risks without the anxiety of financial precariousness, which is one of the biggest obstacles to your best work.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Goat in love is tender, devoted, and deeply romantic. They approach relationships with the same aesthetic sensibility and emotional depth they bring to their creative work — every gesture is meaningful, every moment is curated, and the relationship itself becomes a form of art. The Wood Goat creates a love that feels like a private, beautiful world shared between two people.

In relationships, the Wood Goat is nurturing, attentive, and emotionally generous. They create homes of extraordinary warmth and beauty, prepare meals with love and care, and maintain an atmosphere of romance and tenderness that makes their partner feel cherished. Their love language is unmistakably aesthetic — they express devotion through beauty, from the way they dress to the flowers they choose to the environment they create.

The Wood Goat's challenge in love is their need for emotional security, which can become excessive. They may cling to partners out of fear rather than choice, tolerate treatment they should not accept, or suppress their own needs to maintain the harmony they desperately crave. The healthiest Wood Goat relationships are those where both partners contribute equally to emotional security, rather than one person carrying the burden of the other's anxiety.`,

    loveStyle:
      'The Wood Goat loves through beauty, tenderness, and the creation of a shared aesthetic world. They are deeply romantic partners who express devotion through creative gestures — handmade gifts, beautiful meals, carefully chosen words, and an environment that surrounds their partner with warmth and beauty. They seek relationships that feel safe, beautiful, and emotionally nourishing. In return, they need a partner who provides stability, appreciates their sensitivity, and creates the secure foundation from which the Wood Goat\'s creativity and love can flourish.',

    idealPartnerTraits: [
      'Emotionally Stable',
      'Appreciates Beauty and Art',
      'Protective without Controlling',
      'Patient with Sensitivity',
      'Practically Competent',
    ],

    tips: [
      'Develop your own emotional stability rather than relying entirely on your partner for it. Practices like meditation, journaling, and therapy build internal security that no external relationship can fully provide. A grounded Wood Goat is a better partner and a more fulfilled person.',
      'Communicate your needs directly rather than hoping your partner intuits them. Your sensitivity allows you to read others effortlessly, but not everyone shares this ability. Explicit communication about what you need — emotionally, practically, romantically — prevents the resentment that builds from unspoken expectations.',
      'Maintain your creative identity within the relationship. Your art and imagination are essential parts of who you are — do not sacrifice them for domestic harmony or your partner\'s comfort. The relationship should support your creativity, not replace it.',
      'Set boundaries with the same care you set a table. Your tendency to accommodate can leave you depleted and resentful. Learning to say "this is too much" or "I need space" is an act of love — for yourself and for the relationship.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Goat's health profile reflects the interplay between Wood's liver-centered energy and the Goat's Earth-associated digestive system. Their constitution tends toward sensitivity — they are deeply affected by their environment, their emotions, and the quality of their food and living conditions. When these factors are harmonious, the Wood Goat enjoys gentle but sustained vitality. When they are disrupted, health problems can emerge quickly and feel overwhelming.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Goat's Earth nature connects to the spleen and stomach. The Wood Goat is particularly susceptible to digestive issues triggered by emotional stress — a direct manifestation of Wood overacting on Earth. Anxiety, worry, and emotional turbulence can translate directly into stomach problems, appetite disturbances, and nutritional imbalances.

The Wood Goat's health strategy should emphasize environmental harmony, emotional care, and gentle, consistent routines. They are not built for extreme physical challenges or harsh conditions — their bodies respond best to moderate, regular activity in beautiful, peaceful settings. The Wood Goat who creates a lifestyle that supports their sensitive constitution discovers that their health is more robust than they imagined.`,

    bodyAreas: ['Digestive System', 'Liver', 'Skin', 'Nervous System'],

    exercises: [
      'Gentle yoga or stretching',
      'Nature walks and gardening',
      'Dance or creative movement',
      'Tai chi or qigong',
    ],

    dietTips: [
      'Eat warm, nourishing meals prepared with care. The Wood Goat\'s sensitive digestive system responds best to home-cooked, whole foods served at a comfortable temperature. The act of preparing food mindfully is itself therapeutic for this sign.',
      'Support spleen and digestive health with easily digestible foods: soups, stews, cooked grains, and gentle proteins. Avoid excessive raw food, cold drinks, and heavy meals that overwhelm the Wood Goat\'s delicate digestion.',
      'Include liver-supporting foods — leafy greens, beets, lemon water, and mild bitter herbs — to maintain the smooth flow of liver qi that the Wood element depends on for emotional and physical balance.',
      'Pay attention to the emotional context of eating. The Wood Goat absorbs the energy of their dining environment. Stressful meals, eating while upset, or consuming food prepared without care can directly impair their digestion. Create beautiful, peaceful mealtimes whenever possible.',
    ],

    mentalHealth:
      'The Wood Goat\'s primary mental health concern is anxiety, particularly the kind that stems from feeling unsafe in a harsh, unpredictable world. Their sensitive nature makes them acutely aware of threats, conflicts, and emotional undercurrents that others may not notice, creating a baseline of vigilance that can be exhausting. Art therapy is particularly effective for the Wood Goat, providing a structured creative outlet that transforms anxiety into beauty. Traditional talk therapy also helps, especially approaches that build practical coping skills alongside emotional processing. The Wood Goat should prioritize their living environment — clutter, noise, and aesthetic disharmony affect their mental health more than they realize. Creating a beautiful, peaceful personal space is not indulgence but essential self-care. They should also guard against isolation, which can feel protective but ultimately amplifies their anxiety by removing the social connections that provide perspective and support.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['Green', 'Soft Pink', 'Cream'],
    direction: 'East',
    gemstones: ['Jade', 'Rose Quartz', 'Amethyst'],
    flowers: ['Carnation', 'Primrose', 'Lavender'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD GOATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Ed Sheeran',
        profession: 'Singer/Songwriter',
        birthYear: 1991,
        description:
          'Ed Sheeran\'s emotionally intimate songwriting, gentle public persona, and ability to transform personal experience into universally resonant music perfectly embody the Wood Goat\'s artistic sensitivity and creative generosity. His steady rise through genuine craft rather than spectacle reflects the sign\'s patient, heartfelt approach to success.',
      },
      {
        name: 'James Dean',
        profession: 'Actor',
        birthYear: 1931,
        description:
          'James Dean\'s iconic vulnerability, emotional intensity, and artistic commitment to authenticity embodied the Wood Goat\'s combination of sensitivity and creative courage. His performances channeled raw emotion with a beauty that continues to influence acting decades after his passing.',
      },
      {
        name: 'Anita Ekberg',
        profession: 'Actress/Model',
        birthYear: 1931,
        description:
          'Anita Ekberg\'s legendary beauty and her iconic role in La Dolce Vita embodied the Wood Goat\'s aesthetic sensibility and natural elegance. Her ability to transform a single film scene into an eternal image of beauty reflects the sign\'s gift for creating moments of transcendent aesthetic power.',
      },
      {
        name: 'Sophie Turner',
        profession: 'Actress',
        birthYear: 1991,
        description:
          'Sophie Turner\'s emotionally powerful performances and willingness to portray complex vulnerability on screen reflect the Wood Goat\'s combination of artistic sensitivity and quiet inner strength. Her evolution from young actress to mature artist demonstrates the sign\'s capacity for creative growth through emotional depth.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Goat is the eighth animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Wei (未) and the early afternoon hours of 1pm to 3pm. In Chinese mythology, the Goat is a symbol of peace, filial piety, and artistic refinement. The character for "goat" (羊) appears in the Chinese word for "auspicious" (吉祥) and "beautiful" (美), reflecting the deep cultural association between the Goat and qualities of grace, beauty, and good fortune.

When combined with the Wood element, the Goat takes on the qualities of spring's gentle, nurturing energy. The Wood Goat represents the garden in first bloom — beautiful, tender, and full of quiet promise. In classical Chinese thought, this combination embodies the Confucian aesthetic ideal: beauty that emerges from harmony, art that serves human flourishing, and creativity that connects the inner world of feeling with the outer world of form.`,

    symbolism: `The Wood Goat symbolizes the creative power of gentleness, the strength of beauty, and the profound impact of art on human well-being. In traditional Chinese symbolism, the Goat represents peace and harmony — the pastoral ideal of a life lived in balance with nature and community. Wood adds the dimension of creative growth, transforming the Goat's receptive appreciation of beauty into active creation.

The Wood Goat reminds us that art is not a luxury but a necessity — that beauty, carefully created and shared, has the power to heal, connect, and transform. In a world that often values efficiency and production over meaning and aesthetics, the Wood Goat stands as a living argument for the essential importance of the creative spirit.`,

    modernInterpretation: `In contemporary culture, the Wood Goat archetype speaks to the growing recognition that creativity, emotional intelligence, and aesthetic sensibility are not soft skills but essential human capacities. The Wood Goat represents the artists, designers, and caregivers who create the environments, experiences, and cultural artifacts that make life meaningful.

The 1991 Wood Goat generation has emerged in an era that increasingly values authenticity, emotional expression, and creative entrepreneurship. Artists like Ed Sheeran who succeed through genuine emotional connection rather than manufactured spectacle embody the Wood Goat's promise: that the most powerful art comes not from technical perfection but from the courage to share one's inner world with honesty and beauty.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
