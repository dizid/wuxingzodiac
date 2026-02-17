// ============================================
// FIRE GOAT (丙未) — The Passionate Creator
// ============================================
// Fire transforms the Goat's gentle artistic nature into
// a bold creative force, producing an emotionally expressive
// visionary who turns inner worlds into outer masterpieces.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-goat',
  profile: getProfileBySlug('fire-goat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Goat is the most expressive and creatively ambitious member of the Goat family. Where other Goats tend toward quiet contemplation and gentle artistic sensibility, the Fire Goat broadcasts their creative vision with passionate conviction. Fire transforms the Goat's innate artistic gifts from a private practice into a public calling, producing a personality that is driven to share their unique perspective with the world — not out of ego, but out of a burning belief that beauty and emotional truth matter.

What makes the Fire Goat uniquely compelling is the marriage of the Goat's deep emotional sensitivity with Fire's bold expressiveness. The standard Goat feels everything intensely but often struggles to articulate those feelings to others. The Fire Goat has no such difficulty — they channel their rich inner world into art, performance, advocacy, or any medium that allows them to bridge the gap between internal experience and external expression. They are the poets who read aloud, the painters who exhibit fearlessly, the musicians who pour their souls into every performance.

Yet the Fire Goat carries a particular vulnerability. The Goat's emotional sensitivity does not disappear under Fire's influence — it is amplified. Fire Goats feel criticism like physical pain, experience rejection as existential threat, and can swing between the euphoria of creative triumph and the despair of perceived failure with alarming speed. The Fire Goat's journey is one of learning to sustain their passionate expression without being destroyed by the vulnerability that makes their art authentic.`,

    coreTraits: [
      'Creative',
      'Emotionally Expressive',
      'Idealistic',
      'Sensitive',
      'Generous',
      'Dramatic',
    ],

    strengths: [
      {
        trait: 'Artistic Brilliance',
        description:
          'The Fire Goat possesses the zodiac\'s most potent combination of emotional depth and creative talent. Their art — whatever form it takes — resonates because it emerges from genuine feeling rather than mere technique. Fire adds the courage to share what other Goats would keep private, creating work that strikes audiences with its raw authenticity and emotional power.',
      },
      {
        trait: 'Emotional Generosity',
        description:
          'Fire Goats give themselves fully to the people and causes they care about. Their empathy is not merely intellectual — it is felt in their bones, driving acts of kindness, sacrifice, and support that leave lasting impressions. They create warmth wherever they go, transforming cold environments into spaces where people feel genuinely cared for.',
      },
      {
        trait: 'Inspirational Passion',
        description:
          'When a Fire Goat cares about something, their passion becomes a force that moves others. They do not merely appreciate beauty — they crusade for it. They do not merely feel injustice — they burn to correct it. This passionate engagement with the world inspires those around them to care more deeply and act more boldly.',
      },
      {
        trait: 'Aesthetic Vision',
        description:
          'The Fire Goat possesses an innate understanding of beauty, harmony, and emotional atmosphere that borders on genius. They intuitively know how to create spaces, experiences, and moments that affect people at a deep emotional level — an ability that makes them exceptional designers, artists, performers, and curators of human experience.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Fragility',
        description:
          'The Fire Goat\'s emotional sensitivity, while the source of their artistic gifts, makes them exceptionally vulnerable to criticism, rejection, and the ordinary disappointments of life. They can be devastated by harsh words that other signs would shrug off, and their emotional reactions — though genuine — can seem disproportionate to the triggering event.',
      },
      {
        trait: 'Financial Impracticality',
        description:
          'Fire Goats struggle with the practical aspects of life, particularly financial management. Their focus on beauty, experience, and emotional fulfillment often comes at the expense of financial planning. They spend lavishly on aesthetics, give generously to others, and resist the discipline required for long-term financial stability.',
      },
      {
        trait: 'Dependency',
        description:
          'Despite Fire\'s added independence, the Goat\'s core nature craves security and support. Fire Goats can become emotionally dependent on partners, patrons, or institutions that provide the stability they struggle to create for themselves. This dependency can compromise their creative integrity and personal autonomy.',
      },
      {
        trait: 'Dramatic Temperament',
        description:
          'Fire amplifies the Goat\'s already intense emotional landscape into something that others may experience as drama. The Fire Goat\'s feelings are genuine, but their expression can be so intense that partners and friends develop compassion fatigue or begin to doubt the sincerity of emotional displays that happen too frequently.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Goat is associated with the Earth element — nurturing, stable, and receptive. When Fire is added to this Earth-natured animal, the productive cycle activates: Fire generates Earth. This harmonious relationship means Fire naturally supports and enriches the Goat's core qualities, adding passion and expressiveness to the Goat's innate warmth, creativity, and capacity for care.

This Fire-Earth dynamic gives the Fire Goat a unique quality among Fire signs: their intensity is warm rather than explosive, nurturing rather than demanding. Where other Fire signs can feel aggressive or overwhelming, the Fire Goat's heat feels like a hearth — inviting, comforting, and life-sustaining. However, this same quality can lead to a particular pattern of depletion. The Fire Goat gives warmth so generously that they can empty their own reserves, leaving themselves cold and depleted. The productive cycle that makes them naturally nurturing must be fed in return — through relationships, practices, and environments that replenish the Fire Goat's energy rather than only drawing from it. Wood element influences are particularly valuable, as Wood feeds Fire, providing the fuel that sustains the Fire Goat's generous warmth.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Goat's compatibility is shaped by their need for emotional security, creative appreciation, and practical support. They are drawn to partners who understand and value their artistic nature while providing the stability and groundedness that the Goat struggles to create alone. The ideal partner for a Fire Goat is strong without being harsh, practical without being dismissive of beauty, and emotionally present without being overwhelmed by the Goat's intensity.

Traditional Chinese astrology places the Goat in the "Wood Trine" alongside the Rabbit and the Pig — animals that share the Goat's gentle nature, appreciation for beauty, and preference for harmony. These three signs form natural alliances built on mutual empathy and shared aesthetic values. The Goat's greatest challenge comes from the Ox, which sits in direct opposition and represents the rigid, practical worldview that the creative Goat finds stifling.`,

    bestMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 85,
        summary:
          'The Fire Horse\'s passionate energy and love of freedom creates an exciting, dynamic partnership with the Fire Goat. The Horse\'s confidence draws out the Goat\'s bolder qualities, while the Goat\'s emotional depth and artistic sensibility enriches the Horse\'s intense but sometimes surface-level experience of life. Double Fire creates warmth and shared passion.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 90,
        summary:
          'A beautifully tender partnership of two emotionally sensitive, aesthetically gifted signs. The Water Rabbit\'s gentle nature and refined sensibility mirrors the Fire Goat\'s own values, creating a relationship of deep mutual understanding. Water nourishes the Goat\'s Earth nature while cooling Fire\'s occasional excess, producing a harmonious, nurturing bond.',
      },
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 88,
        summary:
          'The Wood Pig\'s warmth, generosity, and optimistic nature creates a deeply supportive environment for the Fire Goat\'s creative expression. The Pig\'s acceptance of the Goat\'s emotional intensity — without judgment or fatigue — provides the unconditional support this sign craves. Wood feeds Fire in the productive cycle, ensuring the Goat\'s creative flame never runs low on fuel.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-ox',
        name: 'Fire Ox',
        score: 30,
        summary:
          'The Fire Ox\'s rigid discipline and demand for practical productivity directly conflicts with the Fire Goat\'s artistic temperament and need for emotional freedom. The Ox sees the Goat as impractical and unfocused; the Goat sees the Ox as emotionally barren and creatively dead. Double Fire intensifies the fundamental incompatibility between structure and spontaneity.',
      },
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 35,
        summary:
          'The Metal Rat\'s sharp, calculating approach to life wounds the Fire Goat\'s tender sensibility. The Rat values efficiency and strategy; the Goat values beauty and feeling. Metal\'s cutting criticism is devastating to Fire\'s sensitive pride, and the Rat\'s competitive nature creates a dynamic where the Goat feels constantly evaluated rather than unconditionally accepted.',
      },
      {
        slug: 'water-dog',
        name: 'Water Dog',
        score: 42,
        summary:
          'The Water Dog\'s anxiety and need for moral clarity can clash with the Fire Goat\'s emotional fluidity and resistance to rigid ethical frameworks. The Dog demands loyalty expressed through consistent action; the Goat offers loyalty expressed through emotional warmth and creative dedication. Their different love languages create chronic misunderstanding despite genuine mutual care.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Earth animal, the Fire Goat thrives with partners whose elements nourish their combined nature. Wood element signs are ideal — Wood feeds Fire in the productive cycle, providing the fuel that sustains the Goat\'s creative warmth without demanding anything in return. Water element signs nourish the Goat\'s Earth nature while gently cooling Fire\'s occasional excess, creating relationships of emotional depth and mutual sustenance. Earth element signs offer comfortable resonance and shared values but may lack the dynamism the Fire Goat\'s passionate nature craves. Metal element signs, produced by Earth, can provide valuable structure and discipline, but Metal\'s critical nature must be softened to avoid wounding the Goat\'s sensitive constitution.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Goat excels in careers that honor their creative gifts while providing the emotional and practical support structures they need to thrive. They are natural artists, designers, and caretakers who bring an extraordinary combination of aesthetic vision and emotional warmth to their professional environments. Unlike more competitive signs, the Fire Goat advances through the quality and authenticity of their work rather than through self-promotion or political maneuvering.

The ideal Fire Goat career provides creative freedom within a supportive structure. They need the autonomy to express their vision while having someone else handle the business, financial, and administrative aspects of their work. Pure freelancing can be too unstable; rigid corporate environments are too stifling. The sweet spot is a creative role within an organization that values their gifts, or an independent practice supported by a trusted business partner or agent.

Financially, the Fire Goat benefits most from partnership — specifically, finding a financially savvy collaborator who can translate their creative output into sustainable income. Left to their own devices, Fire Goats tend to undervalue their work, spend impulsively on beautiful things, and neglect the practical financial planning that ensures long-term stability.`,

    idealCareers: [
      'Fine Artist or Sculptor',
      'Fashion Designer',
      'Interior Decorator',
      'Music Therapist',
      'Landscape Architect',
      'Chef or Pastry Artist',
      'Children\'s Book Illustrator',
      'Art Educator',
    ],

    financialStyle:
      'Fire Goats approach finances with the same aesthetic sensibility they bring to everything else — which is to say, they prioritize beauty and experience over accumulation and security. They spend generously on quality materials, beautiful environments, and experiences that feed their creative spirit. The challenge is that this spending often outpaces their income, particularly in the early stages of creative careers. The Fire Goat who finds a trusted financial partner or advisor — and surrenders day-to-day financial management to them — frees their creative energy while ensuring that practical needs are met.',

    tips: [
      'Value your creative gifts commercially. Your tendency to see money and art as incompatible undermines your financial stability. Your creative abilities have genuine market value — learn to price your work fairly and resist the impulse to give it away or accept less than it is worth.',
      'Build a support team. Your creative brilliance needs practical support to reach its full potential. Find an agent, manager, business partner, or mentor who handles the commercial aspects of your career while you focus on what you do best.',
      'Create a consistent creative practice. Your inspiration is powerful but unreliable. Establishing a daily creative routine — working whether or not you feel inspired — builds the discipline that transforms occasional brilliance into a sustainable body of work.',
      'Diversify your creative outlets. Your emotional intensity needs multiple channels. Having several creative practices — painting, music, cooking, gardening — ensures that when one outlet is blocked, others remain available, preventing the buildup of unexpressed creative energy that leads to emotional crisis.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Goat is one of the zodiac's most romantic and devoted lovers. They bring an extraordinary combination of emotional depth, creative expression, and passionate warmth to their relationships, creating partnerships that feel like living works of art. When a Fire Goat is in love, their partner becomes both muse and audience for the most beautiful expressions of devotion the zodiac has to offer.

The Fire Goat's romantic nature combines the Goat's legendary tenderness with Fire's passionate intensity. They express love through creative gestures — handwritten letters, handmade gifts, curated experiences, and spontaneous expressions of beauty designed specifically for their partner. Romance is not a phase for the Fire Goat; it is a way of life, a continuous practice of showing love through beauty and attention to emotional detail.

The challenge in Fire Goat relationships is the weight of emotional need. Their capacity for love is extraordinary, but so is their need to be loved in return. They require consistent reassurance, emotional attentiveness, and the knowledge that their partner values them as deeply as they value the relationship. Partners who are emotionally reserved, frequently absent, or dismissive of the Goat's emotional needs will find themselves in a relationship marked by increasing insecurity and dramatic expressions of hurt.`,

    loveStyle:
      'The Fire Goat loves through beauty, devotion, and emotional generosity. They create romantic atmospheres, remember meaningful details, and express their feelings through creative acts that transform everyday life into something extraordinary. Their love language combines quality time with gift-giving — not expensive purchases, but thoughtful, often handmade tokens of affection that demonstrate how deeply they pay attention. They need a partner who reciprocates this emotional investment and who makes them feel safe enough to be fully vulnerable.',

    idealPartnerTraits: [
      'Emotionally Attentive',
      'Appreciative of Beauty',
      'Practically Supportive',
      'Demonstratively Loving',
      'Patient',
    ],

    tips: [
      'Communicate your needs directly rather than hoping your partner will intuit them. Your emotional sensitivity gives you extraordinary perception of others, but not everyone shares this gift. Clear, gentle requests for what you need prevent the resentment that builds when expectations go unspoken.',
      'Build emotional resilience through self-care. Your tendency to make your partner the source of all emotional security creates unsustainable pressure on the relationship. Develop independent sources of emotional nourishment — creative practice, friendships, nature — that sustain you when your partner cannot.',
      'Accept that your partner will not always understand your emotional intensity. Not everyone experiences feelings at the depth you do, and this difference is not a failure of love. Practice appreciating your partner\'s way of loving even when it does not match your own style.',
      'Create practical stability together. Your relationship thrives when daily life is organized and secure, freeing your emotional energy for creative expression rather than anxiety about bills, logistics, and household management. Share practical responsibilities fairly rather than hoping someone else will handle them.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Goat's health profile reflects the tension between their rich emotional life and their body's need for stability and grounding. In Traditional Chinese Medicine, the Goat's Earth nature governs the Spleen and Stomach — the organs responsible for transforming nourishment into usable energy. Fire's influence on this foundation creates a constitution that is warm and vital when properly nourished but quickly depleted when emotional stress disrupts the digestive system's delicate balance.

The Fire Goat's primary health vulnerability is the body-emotion connection. Their emotional sensitivity directly impacts their physical health — stress manifests as digestive disturbance, sadness as fatigue, and anxiety as skin conditions. This psychosomatic pattern means that the Fire Goat's physical health cannot be separated from their emotional well-being; treating one without addressing the other produces only temporary relief.

The Fire Goat's greatest health asset is their natural affinity for self-care practices that nourish both body and soul. They are drawn to beautiful, healing environments, wholesome foods prepared with care, and gentle practices that honor the body's rhythms. When they follow these instincts — rather than ignoring their body's signals during creative immersion or emotional crisis — they maintain excellent health and creative vitality.`,

    bodyAreas: ['Spleen', 'Stomach', 'Immune System', 'Skin'],

    exercises: [
      'Yoga and stretching',
      'Nature walks and forest bathing',
      'Dance and movement therapy',
      'Gentle swimming',
    ],

    dietTips: [
      'Eat warm, nourishing meals that support the Spleen-Stomach system: soups, stews, roasted vegetables, and well-cooked grains. The Fire Goat\'s digestive system is sensitive and responds best to foods that are easy to assimilate.',
      'Avoid eating when emotionally distressed. The Fire Goat\'s tendency to comfort-eat or skip meals entirely during emotional upheaval disrupts the digestive rhythm that their Earth nature depends on. Practice eating at regular times regardless of emotional state.',
      'Include naturally sweet foods that nourish the Earth element: sweet potato, squash, dates, and honey. These foods satisfy the Fire Goat\'s natural sweet tooth while supporting their constitutional health.',
      'Minimize cold, raw foods that challenge the Fire Goat\'s sensitive digestion. Lightly cooked or steamed vegetables are better assimilated than raw salads, and warm beverages support digestion more effectively than iced drinks.',
    ],

    mentalHealth:
      'The Fire Goat\'s mental health is inextricable from their creative expression. When creative energy flows freely — through art, music, writing, or any form of authentic expression — the Fire Goat experiences emotional balance and vitality. When this flow is blocked — by practical demands, unsupportive environments, or creative paralysis — anxiety, depression, and somatic symptoms quickly follow. Art therapy is the single most effective intervention for this sign, as it addresses emotional processing, creative expression, and self-understanding simultaneously. The Fire Goat also benefits from community with other creative people — isolation depletes them faster than any other stressor. Regular connection with people who understand and appreciate the creative temperament provides the emotional sustenance that keeps the Fire Goat\'s flame burning bright.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['Red', 'Warm Brown', 'Apricot'],
    direction: 'South',
    gemstones: ['Carnelian', 'Moonstone', 'Amber'],
    flowers: ['Chrysanthemum', 'Lavender', 'Primrose'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE GOATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Vin Diesel',
        profession: 'Actor/Producer',
        birthYear: 1967,
        description:
          'Vin Diesel\'s passionate commitment to building and protecting the Fast & Furious franchise reflects the Fire Goat\'s fierce devotion to creative projects they love. His emphasis on family — both on and off screen — and his willingness to fight for his creative vision embodies the Fire Goat\'s combination of emotional warmth and artistic determination.',
      },
      {
        name: 'Kurt Cobain',
        profession: 'Musician',
        birthYear: 1967,
        description:
          'Kurt Cobain\'s raw, emotionally devastating music exemplifies the Fire Goat\'s ability to transform personal pain into universal art. His uncompromising creative vision and deep sensitivity, combined with Fire\'s passionate intensity, produced art that defined a generation — while also illustrating the devastating cost of the Fire Goat\'s emotional vulnerability when left unsupported.',
      },
      {
        name: 'Nicole Kidman',
        profession: 'Actress',
        birthYear: 1967,
        description:
          'Nicole Kidman\'s extraordinary range and willingness to inhabit emotionally complex characters reflects the Fire Goat\'s deep emotional intelligence and artistic courage. Her ability to convey vulnerability and strength simultaneously embodies the sign\'s fundamental nature: tender feeling expressed through bold creative choices.',
      },
      {
        name: 'Frida Kahlo',
        profession: 'Artist',
        birthYear: 1907,
        description:
          'Frida Kahlo is perhaps the ultimate Fire Goat — an artist who transformed intense personal suffering into paintings of extraordinary beauty and emotional power. Her unapologetic self-expression, fierce creative independence, and ability to make private pain into public art exemplify everything the Fire Goat represents at their most authentic.',
      },
      {
        name: 'Julia Roberts',
        profession: 'Actress',
        birthYear: 1967,
        description:
          'Julia Roberts\'s luminous warmth and ability to convey genuine emotional depth on screen made her the defining movie star of her generation. Her Fire Goat nature is visible in the combination of vulnerability and radiance that characterizes her best performances — the ability to be simultaneously open and powerful.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Goat holds the eighth position in the Chinese zodiac and is associated with peace, creativity, and the gentle power of nourishment. In Chinese mythology, the Goat is linked to the legend of the Five Rams of Guangzhou — celestial beings who descended from heaven carrying stalks of rice, blessing the land with abundance and fertility. This origin story connects the Goat to themes of divine generosity and the nourishing power of beauty.

When Fire transforms this gentle creature, the mythological resonance shifts from passive receptivity to active creation. The Fire Goat appears in folk tradition as the sacred artisan — the being who channels divine inspiration into earthly form, transforming raw materials into objects of beauty that elevate the human spirit. In Daoist tradition, the Goat is associated with the balance between heaven and earth, and the Fire Goat specifically represents the moment when celestial fire meets earthly substance to produce art — the sacred act of creation itself.

In Tibetan Buddhist tradition, the Goat (or Sheep) is associated with compassion and gentleness, and Fire adds the transformative power of passionate practice. The Fire Goat in this context represents the bodhisattva path — the commitment to transforming personal suffering into wisdom that serves all beings.`,

    symbolism: `The Fire Goat symbolizes creative passion refined through emotional sensitivity — the alchemical process of turning feeling into form. In traditional Wu Xing symbolism, Fire feeding Earth represents the productive cycle of creation: passion generating substance, inspiration becoming material reality, the intangible becoming tangible through the sustained heat of creative effort.

The Fire Goat is also a symbol of generous warmth — the kind of fire that sustains rather than destroys. Unlike the volcanic intensity of the Fire Dragon or the consuming blaze of the Fire Horse, the Fire Goat\'s heat is the warmth of a kiln that transforms clay into pottery, or the gentle fire that cooks nourishing food. This domestic, nurturing expression of Fire reminds us that creation and destruction are not Fire\'s only modes — Fire also serves, heals, and transforms through patient, loving application.

In the cycle of seasons, the Goat is associated with late summer — the time of harvest, abundance, and the fullness of earth\'s gifts. Fire\'s influence on this seasonal energy suggests the passionate gratitude and generous sharing that characterizes the Fire Goat: the feast prepared with love, the harvest celebrated with beauty, the abundance shared freely with all.`,

    modernInterpretation: `In contemporary culture, the Fire Goat archetype resonates wherever emotional authenticity meets creative courage. The Fire Goat years of 1907 and 1967 produced generations of artists, performers, and cultural innovators whose work was defined by passionate self-expression and emotional vulnerability.

The 1967 cohort came of age during the era of confessional art, alternative music, and emotionally raw cinema — cultural movements that perfectly suited the Fire Goat's need to transform personal experience into shared meaning. Artists like Kurt Cobain, Nicole Kidman, and Julia Roberts exemplify different expressions of the Fire Goat archetype: the tormented artist, the versatile emotional performer, and the luminous star whose warmth transcends the screen.

For modern Fire Goats, the key insight is that their emotional sensitivity — often experienced as a vulnerability — is in fact their greatest creative and interpersonal asset. In a cultural moment that increasingly values authenticity, emotional intelligence, and creative originality, the Fire Goat's natural gifts are more relevant than ever. The challenge is building the practical and emotional support structures that allow these gifts to flourish sustainably rather than burning out in spectacular but unsustainable displays of creative passion.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
