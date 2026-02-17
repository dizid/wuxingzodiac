// ============================================
// METAL GOAT (庚未) — The Refined Artisan
// ============================================
// Metal gives the Goat's artistic nature a structured edge,
// producing an individual of exquisite taste and quiet resolve.
// Years: 1931, 1991

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-goat',
  profile: getProfileBySlug('metal-goat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Goat is the most structurally grounded and artistically precise expression of the Goat archetype. Where the Goat is celebrated for its creativity, sensitivity, and deep appreciation of beauty, the Metal element provides a framework of discipline and determination that transforms artistic impulse into polished achievement. The Metal Goat does not merely dream of beauty — they create it, with a craftsmanship and attention to detail that elevates their work from pleasant to extraordinary.

What sets the Metal Goat apart from other Goat variants is the surprising core of steel beneath their gentle exterior. Most Goats are perceived as soft, yielding, and dependent — assumptions that the Metal Goat quietly defies through consistent, principled action. They may appear accommodating, but they possess a clear set of personal standards that they will not compromise, no matter how much external pressure is applied. This hidden strength often surprises those who mistake their refinement for fragility.

Beneath the cultivated surface, the Metal Goat carries a tension between their artistic, emotionally rich nature and Metal's demand for structure and control. They feel deeply — moved by beauty, wounded by cruelty, and sensitive to the emotional undercurrents in every environment — but they process these feelings through a filter of restraint that gives them an air of composed elegance. The Metal Goat who cries does so in private; the one who rages does so with such controlled precision that it manifests as cutting clarity rather than explosive emotion.`,

    coreTraits: [
      'Artistic',
      'Determined',
      'Refined',
      'Sensitive',
      'Principled',
      'Meticulous',
    ],

    strengths: [
      {
        trait: 'Artistic Mastery',
        description:
          'The Metal Goat possesses the rare combination of creative vision and technical discipline. While other Goat variants may be equally inspired, the Metal Goat has the patience and precision to execute their vision at the highest level. Their artistic output — whether in visual arts, music, design, or craftsmanship — is characterized by an attention to detail that transforms inspiration into masterwork.',
      },
      {
        trait: 'Quiet Determination',
        description:
          'The Metal Goat\'s resolve is easily underestimated. They do not announce their ambitions or broadcast their goals — they simply pursue them with a steady, focused effort that accumulates into significant achievement over time. This quiet determination is particularly effective because others do not see it coming; by the time they notice, the Metal Goat has already accomplished what was dismissed as unlikely.',
      },
      {
        trait: 'Aesthetic Intelligence',
        description:
          'Metal Goats possess an extraordinary ability to perceive and create harmony in any medium. They intuitively understand proportion, balance, color, and form — applying these principles not just to art but to every aspect of their life, from their personal presentation to their living spaces to the way they structure relationships. This aesthetic intelligence is a genuine form of wisdom.',
      },
      {
        trait: 'Emotional Depth with Composure',
        description:
          'The Metal Goat feels everything deeply but expresses selectively. This gives them access to the full range of human emotion — which enriches their creativity, empathy, and interpersonal connections — while maintaining the composure necessary to function effectively in demanding environments. They are the friend who feels your pain deeply and responds with measured, helpful action rather than overwhelmed sympathy.',
      },
    ],

    challenges: [
      {
        trait: 'Self-Doubt',
        description:
          'Despite their genuine talents, Metal Goats are plagued by an inner critic that Metal\'s perfectionist tendencies amplify. They may second-guess their creative choices, compare themselves unfavorably to others, and struggle to share their work for fear that it will not meet the impossible standards they set for themselves.',
      },
      {
        trait: 'Passive Resistance',
        description:
          'When the Metal Goat disagrees with a course of action, they rarely confront the issue directly. Instead, they employ a sophisticated form of passive resistance — delay, deflection, or quiet non-compliance — that achieves their aim while avoiding the confrontation they dread. This can be effective but erodes trust when others detect the pattern.',
      },
      {
        trait: 'Material Attachment',
        description:
          'The Metal Goat\'s love of beauty and quality can become an unhealthy attachment to material possessions. They may spend beyond their means on beautiful objects, fine experiences, or the maintenance of an aesthetic standard of living that creates financial stress. The line between appreciation of quality and materialism can blur for this sign.',
      },
      {
        trait: 'Emotional Suppression',
        description:
          'The Metal element\'s demand for control can cause the Metal Goat to suppress emotions that they consider messy or undignified. Over time, this creates an internal accumulation of unprocessed feeling that can manifest as mysterious physical ailments, creative blocks, or periods of melancholy that seem disproportionate to external circumstances.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Goat is an Earth-phase animal, grounded in the nurturing, receptive energy of the center. When Metal overlays this Earth nature, the result is productively reinforcing — Earth generates Metal in the productive cycle, meaning the Goat's natural qualities directly feed the Metal element. This creates a personality where artistic sensitivity is naturally channeled into disciplined expression, and creative vision is refined into tangible achievement.

This Earth-Metal synergy gives the Metal Goat a grounded quality that other Goat variants lack. Where the Water Goat might dissolve into empathic fusion with others or the Fire Goat might burn through creative ideas without finishing them, the Metal Goat maintains a structural integrity that grounds their creativity in the real world. Their art is not abstract or impractical — it is beautiful and functional, inspired and achievable.

However, this same Earth-Metal combination can become too dense — too solid, too heavy, too resistant to the spontaneous emotional expression that is the Goat's lifeblood. The Metal Goat must guard against becoming so structured that they lose access to the emotional fluidity that makes their creativity possible in the first place.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Goats seek partners who appreciate beauty, respect sensitivity, and provide emotional security without demanding emotional performance. They need relationships that feel safe — environments where they can lower their composed exterior and reveal the depth of feeling they usually keep private.

The Goat belongs to the Fourth Trine alongside the Rabbit and the Pig — signs that share the Goat's love of beauty, harmony, and emotional connection. These natural allies create relationships of aesthetic and emotional resonance that the Metal Goat finds deeply nourishing. The Ox sits opposite the Goat on the zodiac wheel, creating a tension between the Goat's creative fluidity and the Ox's rigid practicality.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 93,
        summary:
          'An exquisitely harmonious partnership of shared aesthetics and emotional attunement. The Water Rabbit\'s gentle grace and intuitive understanding create the safe, beautiful environment the Metal Goat craves. Water nourishes both signs\' intrinsic natures, and their shared appreciation for harmony produces a relationship of remarkable beauty and mutual tenderness.',
      },
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 88,
        summary:
          'The Wood Pig\'s generous warmth and sincere affection melt the Metal Goat\'s reserved exterior. The Pig\'s unconditional acceptance provides the emotional safety the Goat needs to express their full creative and emotional range. Wood feeds Earth (the Goat\'s intrinsic nature), energizing the partnership with growth and optimism.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 82,
        summary:
          'An unexpectedly vibrant partnership where the Fire Horse\'s dynamic energy ignites the Metal Goat\'s creative inspiration. The Horse\'s independence reassures the Goat that they will not be controlled, while the Goat\'s aesthetic sensibility and emotional depth provide the Horse with a richness their fast-paced life often lacks.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 30,
        summary:
          'The zodiac opposition between Goat and Ox is intensified by two Metal energies competing for different priorities. The Metal Ox\'s rigid practicality dismisses the Metal Goat\'s artistic values as impractical, while the Goat finds the Ox\'s utilitarian worldview spiritually stifling. Both are stubborn in their Metal aspect, making compromise feel like betrayal.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 38,
        summary:
          'The Earth Dog\'s moral rigidity and utilitarian approach to life clash with the Metal Goat\'s aesthetic values and emotional complexity. The Dog views the Goat\'s concern with beauty as superficial; the Goat finds the Dog\'s moral certainty oppressive. While both are Earth-natured, they express that grounding energy in incompatible ways.',
      },
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 42,
        summary:
          'The Water Rat\'s strategic, results-oriented approach feels emotionally cold to the sensitive Metal Goat. The Rat measures value in practical terms that do not account for the beauty and emotional richness the Goat considers essential. The Goat\'s indirect communication frustrates the Rat\'s need for clear, actionable information.',
      },
    ],

    elementAffinity: `The Metal Goat's Earth-Metal constitution creates a preference for relationships that provide warmth, emotional depth, and creative stimulation. Water element signs are particularly nourishing, as Metal generates Water — creating a flow from the Goat's structured creativity into emotional depth and wisdom. Fire element signs can be invigorating, as Fire feeds the Goat's Earth nature, but excessive Fire intensity may overwhelm the Metal Goat's need for composure. Wood element signs provide growth energy that enlivens the Goat's creative impulse. Other Earth signs share a grounding stability but may lack the emotional dynamism the Metal Goat needs. Other Metal signs create mutual respect for quality and discipline but risk emotional coolness.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Goats thrive in careers that honor their artistic vision while providing the structure and security they need to produce their best work. They are not starving artists content to suffer for their craft — the Metal element's practical influence demands that their creative gifts produce tangible, sustainable results.

The ideal Metal Goat career combines aesthetic excellence with professional stability. They excel in design, fine arts, architecture, haute cuisine, luxury craftsmanship, and any field where the pursuit of beauty and quality is the primary objective. They also thrive in roles that require emotional intelligence and refined judgment — art therapy, interior design consultation, and curatorial work all leverage their unique combination of sensitivity and discipline.

Metal Goats struggle in crude, competitive, or utilitarian environments where aesthetic values are dismissed as irrelevant. They need workplaces that respect beauty, value craftsmanship, and provide the emotional safety to take creative risks without fear of harsh judgment.`,

    idealCareers: [
      'Industrial Designer',
      'Fine Arts Painter/Sculptor',
      'Architectural Designer',
      'Pastry Chef',
      'Fashion Designer',
      'Art Therapist',
      'Landscape Architect',
      'Jewelry Designer',
    ],

    financialStyle:
      'Metal Goats have a complex relationship with money. They appreciate quality and beauty, which tends to be expensive, but they also possess Metal\'s practical awareness that financial security is essential. The most financially healthy Metal Goats find ways to earn income through their creative gifts — turning aesthetic talent into professional value — while maintaining a disciplined savings practice that prevents their love of beautiful things from undermining their security. Their challenge is learning to distinguish between investments in quality that appreciate over time and impulse purchases driven by momentary aesthetic desire.',

    tips: [
      'Value your creative gifts as professional assets. Metal Goats often undercharge for their work, viewing their artistic abilities as personal qualities rather than marketable skills. Research market rates for your expertise and charge accordingly — your craft has measurable value.',
      'Create structured creative routines. Your artistic output thrives on consistency rather than inspiration. Build daily creative practices that produce work regardless of mood, and trust that discipline and inspiration are allies, not opposites.',
      'Build a support network that includes both creative and practical minds. Your aesthetic vision needs the balance of business-minded allies who can translate your work into sustainable income. Partnership with complementary skills is the Metal Goat\'s most effective career strategy.',
      'Develop resilience to criticism. Your sensitivity to others\' opinions of your work can paralyze your creative output. Build a practice of evaluating feedback analytically — separating useful critique from noise — and protecting your creative confidence from the inevitable harshness of public judgment.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love is the Metal Goat's most natural and most challenging arena. They are deeply romantic, profoundly sensitive, and capable of creating relationships of extraordinary beauty and emotional richness. When a Metal Goat loves, they transform the relationship into a work of art — curating shared experiences, creating beautiful environments, and attending to their partner's emotional needs with an attentiveness that makes their loved one feel truly seen and cherished.

The challenge is the Metal Goat's vulnerability to emotional disappointment. They invest so deeply in their vision of love that reality's inevitable imperfections can feel devastating. When a partner fails to appreciate a carefully planned gesture, expresses themselves crudely, or prioritizes practicality over beauty, the Metal Goat feels it as a rejection of their deepest values.

The Metal Goat needs a partner who genuinely appreciates beauty, who treats their sensitivity as a gift rather than a burden, and who provides the emotional security that allows the Goat to express their full creative and romantic nature without fear.`,

    loveStyle:
      'The Metal Goat expresses love through the creation of beauty — transforming shared spaces, experiences, and moments into something exquisite. Their love is attentive, artistic, and deeply considerate, expressed through carefully chosen gifts, beautifully prepared meals, and environments designed to nurture connection. They need a partner who appreciates these expressions for what they are: the most authentic language of a heart too refined for ordinary words.',

    idealPartnerTraits: [
      'Appreciative of Beauty',
      'Emotionally Generous',
      'Gentle',
      'Financially Stable',
      'Supportive of Creative Pursuits',
    ],

    tips: [
      'Communicate your needs directly rather than expecting your partner to intuit them. Your emotional sensitivity makes you highly attuned to others\' feelings, but not everyone possesses the same acuity. Tell your partner what you need with the same clarity you bring to your creative work.',
      'Accept imperfection in your partner and your relationship. No human being or partnership can maintain the aesthetic standard your idealized vision demands. Learning to find beauty in the imperfect is not settling — it is the highest expression of your artistic nature.',
      'Build emotional resilience through creative expression. When disappointment or conflict creates emotional turbulence, channel it into art rather than withdrawal. Your creativity is both your greatest gift and your most effective coping mechanism.',
      'Share the financial responsibility. Metal Goats can develop a pattern of dependence on a partner for material security, which undermines the equality that healthy relationships require. Contribute to shared finances through your own earning capacity, even if your creative work follows a different financial rhythm than traditional employment.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Goat's health is deeply connected to their emotional and aesthetic environment. In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Goat's Earth nature connects to the Spleen and Stomach. This creates a health profile where emotional well-being directly impacts digestive and respiratory function — a connection the Metal Goat experiences more acutely than most signs.

Metal Goats are particularly sensitive to their physical environment. Ugly, chaotic, or emotionally toxic spaces literally make them unwell — manifesting as headaches, digestive upset, skin issues, or respiratory complaints. Conversely, beautiful, harmonious environments have a measurably positive impact on their physical health. This is not psychosomatic weakness but a genuine mind-body sensitivity that, when understood and honored, becomes a powerful tool for health management.

The Metal Goat's approach to health responds well to aesthetically pleasing wellness practices. They are more likely to maintain an exercise routine that takes place in a beautiful setting, follow a diet that is presented attractively, and engage with health practices that feel elegant rather than clinical.`,

    bodyAreas: ['Spleen', 'Lungs', 'Skin', 'Digestive System'],

    exercises: [
      'Dance and movement arts',
      'Gentle hiking in nature',
      'Pilates',
      'Swimming in natural water',
    ],

    dietTips: [
      'Nourish the Spleen with warm, gently cooked foods prepared with care and beauty. The Metal Goat\'s digestive system responds to the energy of food preparation as much as to nutritional content. Meals made with intention and presented beautifully are genuinely more nourishing for this sign.',
      'Support Metal element lung health with white and pale foods: pears, white rice, almonds, cauliflower, and white fish. These foods strengthen the respiratory system that is the Metal Goat\'s primary area of vulnerability during emotional stress.',
      'Avoid harsh, stimulating foods during sensitive periods. Caffeine, alcohol, and excessively spicy foods amplify the Metal Goat\'s emotional sensitivity and can trigger digestive distress. Choose calming teas, gentle flavors, and grounding root vegetables during times of stress.',
      'Eat in company when possible. The Goat is inherently communal, and shared meals provide both nutritional and emotional nourishment. Solitary eating, particularly when combined with stress, disrupts the Spleen function that the Metal Goat depends on for stable energy and mood.',
    ],

    mentalHealth:
      'The Metal Goat\'s mental health is inseparable from their creative and emotional life. When they are creating, connecting, and surrounded by beauty, they thrive. When creative expression is blocked, relationships are strained, or their environment becomes ugly or hostile, they are vulnerable to depression, anxiety, and a pervasive sense of disconnection that can be difficult to articulate. Art therapy is an exceptionally effective intervention for this sign, as it addresses their core need — creative expression — while simultaneously processing the emotions that talk therapy often struggles to access. Nature immersion is equally powerful: the Metal Goat\'s Earth nature is literally recharged by contact with the natural world. Regular time in gardens, forests, or near water provides a grounding, healing influence that no indoor practice can replicate. The fundamental insight for the Metal Goat\'s mental well-being is that their sensitivity is not a flaw to be overcome but a gift to be honored — and that the structures they build around it through Metal\'s discipline exist to protect it, not to suppress it.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['White', 'Silver', 'Green', 'Rose'],
    direction: 'West',
    gemstones: ['Jade', 'Moonstone', 'White Opal'],
    flowers: ['Carnation', 'White Gardenia', 'Primrose'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL GOATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Ed Sheeran',
        profession: 'Musician/Singer-Songwriter',
        birthYear: 1991,
        description:
          'Ed Sheeran\'s ability to combine deeply emotional songwriting with disciplined craftsmanship and extraordinary commercial success embodies the Metal Goat\'s fusion of artistic sensitivity and practical achievement. His unpretentious authenticity and meticulous approach to his craft reflect the sign\'s blend of creative depth and structural discipline.',
      },
      {
        name: 'James Dean',
        profession: 'Actor',
        birthYear: 1931,
        description:
          'James Dean\'s intense emotional vulnerability on screen — so carefully channeled into performances of devastating authenticity — perfectly captures the Metal Goat\'s paradox of deep feeling expressed through disciplined art. His enduring cultural impact from just three films demonstrates the sign\'s ability to create work of lasting beauty and emotional resonance.',
      },
      {
        name: 'Anita Ekberg',
        profession: 'Actress/Model',
        birthYear: 1931,
        description:
          'Anita Ekberg\'s iconic presence in La Dolce Vita and her embodiment of aesthetic beauty in mid-century cinema reflect the Metal Goat\'s natural affinity for elegance, artistic expression, and the creation of visually unforgettable moments that transcend their era.',
      },
      {
        name: 'Robert Duvall',
        profession: 'Actor',
        birthYear: 1931,
        description:
          'Robert Duvall\'s extraordinary range — from the menacing Colonel Kilgore to the gentle Mac Sledge — demonstrates the Metal Goat\'s emotional depth channeled through disciplined craft. His meticulous character work and preference for understated authenticity over spectacle reflect the sign\'s commitment to artistic integrity over commercial calculation.',
      },
      {
        name: 'Rita Moreno',
        profession: 'Actress/Singer/Dancer',
        birthYear: 1931,
        description:
          'Rita Moreno — one of the few EGOT winners in entertainment history — exemplifies the Metal Goat\'s combination of artistic versatility and quiet, determined resilience. Her seven-decade career, spanning every major entertainment medium, demonstrates the sign\'s capacity for sustained creative excellence through discipline and emotional authenticity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Goat (also translated as Sheep or Ram) holds the eighth position in the Chinese zodiac and carries associations of peace, harmony, and creative abundance. In Chinese agricultural tradition, the Goat symbolizes pastoral prosperity — flocks grazing on green hillsides represent contentment, sufficiency, and the gentle rewards of patient cultivation. The character for Goat (羊) appears in the Chinese word for auspicious (祥), reinforcing its association with good fortune and benevolence.

When Metal combines with the Goat, traditional Chinese astrology describes a sign of refined creative power. Metal gives the Goat's natural creativity a cutting edge — the ability to shape raw artistic inspiration into polished, enduring work. Metal Goat years are associated with cultural flowering, artistic achievement, and the emergence of beauty from discipline. The creative output of these periods is characterized by technical excellence as much as emotional resonance.

In Chinese folklore, the Goat is associated with filial piety — the young goat kneels to nurse from its mother, symbolizing gratitude and devotion to family. The Metal Goat carries this devotion forward but expresses it through acts of creation: building beautiful spaces, crafting meaningful objects, and transforming love into tangible, lasting art.`,

    symbolism: `The Metal Goat symbolizes beauty forged through discipline — the transformation of raw creative impulse into refined artistic achievement. In Five Element symbolism, Metal represents the harvesting and refining process that turns nature's abundance into preserved, enduring value. Combined with the Goat's association with creativity and emotional depth, the Metal Goat becomes a symbol of the artisan: the individual who transforms feeling into form, inspiration into masterwork.

The Goat's wool — soft, warm, and protective — takes on new significance when combined with Metal. It represents creativity that has been refined into something both beautiful and functional: warmth that is also armor, softness that is also strength. The Metal Goat's symbolism teaches that sensitivity and structure are not opposites but partners in the creation of lasting beauty.

In traditional feng shui, the Metal Goat represents the concentration of creative and aesthetic energy in a harmonious, productive form. It is the sign associated with studios, workshops, and any space where beauty is intentionally created through skilled labor and refined judgment.`,

    modernInterpretation: `In contemporary culture, the Metal Goat archetype resonates with the growing recognition that creativity is not a luxury but an essential human capacity — and that the most powerful creative work combines emotional authenticity with disciplined craft. In an era of rapid digital production and disposable content, the Metal Goat stands for the enduring value of work made with care, attention, and genuine feeling.

The Metal Goat's relevance extends to modern conversations about the creative economy, artisanal production, and the psychological necessity of beauty in daily life. As mass production continues to homogenize the material world, individuals with the Metal Goat's combination of aesthetic sensitivity and productive discipline become increasingly valuable — they are the designers, craftspeople, and creators who insist that what we live with should be worthy of our attention.

For those born in Metal Goat years, the contemporary world offers both opportunity and challenge. The opportunity lies in a global marketplace that increasingly values unique, handcrafted, and emotionally resonant creative work. The challenge lies in maintaining the patience and discipline required to produce such work in a culture that rewards speed and volume over quality and depth.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
