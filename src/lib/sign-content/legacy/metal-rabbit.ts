// ============================================
// METAL RABBIT (庚卯) — The Polished Strategist
// ============================================
// Metal sharpens the Rabbit's diplomatic instincts into a
// refined instrument of influence, elegance, and quiet power.
// Years: 1951, 2011

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-rabbit',
  profile: getProfileBySlug('metal-rabbit')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Rabbit is the most poised and strategically astute expression of the Rabbit archetype. Where the Rabbit is celebrated for its diplomacy, grace, and keen social awareness, the Metal element refines these qualities into something sharper and more formidable. The Metal Rabbit moves through the world with an elegance that conceals a mind of extraordinary precision — reading rooms, anticipating moves, and positioning themselves with a subtlety that others rarely detect until the outcome has already been decided in the Rabbit's favor.

What distinguishes the Metal Rabbit from other Rabbit variants is the fusion of soft power with hard resolve. Most Rabbits avoid confrontation, preferring to navigate around obstacles through charm and indirection. The Metal Rabbit shares this preference but adds something crucial: when diplomacy fails, they possess a steely determination that can surprise those who mistake their refinement for weakness. The velvet glove conceals an iron hand, and the Metal Rabbit will use it when their core interests — or the well-being of those they love — are genuinely threatened.

Beneath the polished exterior, the Metal Rabbit harbors a perfectionism that can become both their greatest asset and their deepest source of anxiety. They hold themselves to impeccable standards in appearance, behavior, and achievement, creating a seamless public persona that conceals considerable internal pressure. The Metal Rabbit who appears effortlessly composed has likely invested enormous energy in maintaining that composure, and the cost of this performance is a private vulnerability they rarely share.`,

    coreTraits: [
      'Refined',
      'Strategic',
      'Perceptive',
      'Composed',
      'Perfectionist',
      'Resilient',
    ],

    strengths: [
      {
        trait: 'Masterful Diplomacy',
        description:
          'The Metal Rabbit possesses the most sophisticated social intelligence in the zodiac. They navigate complex interpersonal dynamics with an ease that appears effortless but is actually the product of acute observation and strategic thinking. In negotiations, mediations, and any situation requiring tact, the Metal Rabbit is unmatched — finding solutions that satisfy all parties while quietly advancing their own interests.',
      },
      {
        trait: 'Aesthetic Excellence',
        description:
          'Metal Rabbits have an innate sense of beauty, quality, and proportion that elevates everything they touch. Whether curating a living space, crafting a presentation, or choosing the perfect words for a difficult conversation, they bring a standard of elegance that sets them apart. This aesthetic sensibility is not superficial — it reflects a deep appreciation for harmony and order.',
      },
      {
        trait: 'Strategic Patience',
        description:
          'Unlike more impulsive signs, the Metal Rabbit understands that the best outcomes often require time. They can wait — patiently, watchfully, and without anxiety — for the right moment to act. This strategic patience, combined with Metal\'s precision, allows them to execute plans with timing that seems almost prescient.',
      },
      {
        trait: 'Quiet Resilience',
        description:
          'The Metal Rabbit\'s strength is not loud or dramatic, but it is formidable. Beneath their graceful exterior lies a tensile strength — the ability to absorb setbacks, endure criticism, and recover from disappointment without losing their composure or their sense of direction. They bend without breaking, adapting to circumstances while maintaining their essential integrity.',
      },
    ],

    challenges: [
      {
        trait: 'Conflict Avoidance',
        description:
          'While the Metal Rabbit is more willing to confront than other Rabbit variants, they still have a pronounced tendency to avoid direct conflict. This can lead to passive-aggressive behavior, unexpressed resentment, and situations where problems fester because the Rabbit refused to address them openly when they were still manageable.',
      },
      {
        trait: 'Emotional Distance',
        description:
          'The Metal element\'s emphasis on control combines with the Rabbit\'s natural reserve to create significant emotional distance. Metal Rabbits can appear aloof, detached, or inaccessible to those who crave deeper emotional connection. Their composure, while admirable, can become a wall that prevents genuine intimacy.',
      },
      {
        trait: 'Perfectionism',
        description:
          'The Metal Rabbit\'s pursuit of flawlessness can become paralyzing. They may delay projects indefinitely, agonize over minor details, or avoid starting endeavors they cannot guarantee will meet their exacting standards. This perfectionism can also extend to their judgment of others, creating relationships where partners feel perpetually evaluated.',
      },
      {
        trait: 'Over-Reliance on Strategy',
        description:
          'The Metal Rabbit\'s habit of approaching every situation as a strategic puzzle can prevent them from acting spontaneously or authentically. They may calculate when they should simply feel, plan when they should simply respond, and strategize when the situation calls for raw honesty. This over-thinking can exhaust them and frustrate more direct personalities.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rabbit is a Wood-phase animal, embodying the gentle, persistent energy of growth and renewal. When Metal overlays this Wood nature, it creates the same controlling dynamic found in the Metal Tiger — Metal cuts Wood — but with a very different expression. Where the Metal Tiger experiences this tension as constrained power, the Metal Rabbit experiences it as refined precision.

The Metal-Wood dynamic within the Metal Rabbit produces an individual whose natural gentleness is given shape and edge by Metal's discipline. The Rabbit's intuition is sharpened into strategic intelligence; its social grace is refined into calculated diplomacy; its preference for beauty becomes a demand for perfection. This internal tension is less dramatic than the Metal Tiger's but equally consequential — it creates a personality of unusual depth, where softness and strength coexist in constant, creative tension.

The key to the Metal Rabbit's well-being lies in not allowing Metal's cutting influence to completely suppress Wood's natural warmth and spontaneity. When balanced, the Metal Rabbit is the zodiac's most elegant operator — when imbalanced, they become cold, calculating, and emotionally inaccessible.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Metal Rabbit seeks relationships that combine intellectual stimulation with aesthetic harmony and emotional stability. They are drawn to partners who appreciate refinement, who can match their conversational depth, and who understand that the Metal Rabbit's composed exterior conceals a complex and sensitive inner world.

The Rabbit belongs to the Fourth Trine alongside the Goat and the Pig — signs that share the Rabbit's appreciation for beauty, harmony, and emotional connection. These natural allies provide the warmth and creative energy that the Metal Rabbit needs to counterbalance their more controlled tendencies. The Rooster sits opposite the Rabbit on the zodiac wheel, creating a classic tension between the Rabbit's diplomatic subtlety and the Rooster's blunt directness.`,

    bestMatches: [
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 92,
        summary:
          'A beautifully harmonious pairing of shared aesthetics and emotional depth. The Water Goat\'s creative sensitivity and gentle nature resonate with the Metal Rabbit\'s appreciation for beauty and refinement. The Water element nourishes both signs\' Wood nature, creating a relationship of mutual growth and emotional warmth. Together, they create a world of extraordinary elegance and tenderness.',
      },
      {
        slug: 'earth-pig',
        name: 'Earth Pig',
        score: 88,
        summary:
          'The Earth Pig\'s generous warmth and grounded sensuality provide exactly the emotional security the Metal Rabbit needs to lower their guard. The Pig\'s acceptance and unconditional affection melt the Metal Rabbit\'s controlled exterior, while the Rabbit\'s elegance and strategic mind elevate the partnership. The Earth element adds stability that both signs appreciate.',
      },
      {
        slug: 'wood-dog',
        name: 'Wood Dog',
        score: 83,
        summary:
          'The Wood Dog\'s loyalty and moral integrity create a foundation of trust that the cautious Metal Rabbit needs. The Dog\'s protective nature reassures the Rabbit, while the Wood element feeds both the Dog\'s and the Rabbit\'s intrinsic nature. This partnership is built on mutual respect and a shared desire for a peaceful, harmonious life.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 30,
        summary:
          'The zodiac opposition between Rabbit and Rooster is amplified by clashing element energies. The Fire Rooster\'s blunt criticism and need for attention directly conflict with the Metal Rabbit\'s preference for subtlety and discretion. The Rooster finds the Rabbit evasive; the Rabbit finds the Rooster abrasive. Fire\'s intensity overwhelms the Rabbit\'s measured approach.',
      },
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 38,
        summary:
          'The Metal Dragon\'s commanding presence and grandiose energy overwhelm the Metal Rabbit\'s preference for subtlety and understatement. Two Metal signs create a dynamic of competing rigidities — both insist on their approach and neither yields easily. The Dragon\'s need to dominate clashes with the Rabbit\'s need for autonomy expressed through quiet resistance.',
      },
      {
        slug: 'fire-rat',
        name: 'Fire Rat',
        score: 42,
        summary:
          'The Fire Rat\'s aggressive ambition and restless energy unsettle the Metal Rabbit\'s carefully ordered world. The Rat\'s directness can feel intrusive to the privacy-valuing Rabbit, while the Rabbit\'s indirection frustrates the Rat\'s preference for clear communication. The pace mismatch creates ongoing friction.',
      },
    ],

    elementAffinity: `The Metal Rabbit's internal Metal-Wood tension creates distinctive compatibility patterns. Water element signs are particularly beneficial, as Water feeds Wood (the Rabbit's intrinsic nature) and is generated by Metal — creating a harmonious flow of energy that soothes the Metal Rabbit's internal tension. Earth element signs provide grounding stability and generate Metal, supporting the Rabbit's structured side. Other Wood signs resonate with the Rabbit's core nature and encourage warmth and spontaneity. Fire element signs can be challenging, as Fire feeds on the Rabbit's Wood nature — potentially draining their energy — while also threatening Metal's structured approach. Other Metal signs create mutual respect for standards and discipline but risk emotional coldness when two reserved personalities mirror each other's guardedness.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Rabbits excel in careers that reward refined judgment, strategic thinking, and exceptional interpersonal skills. They thrive in environments where quality is valued over quantity, where presentation matters, and where the ability to read complex social dynamics provides a competitive advantage.

The ideal Metal Rabbit career combines aesthetic sensitivity with strategic influence. They are natural fits for diplomatic service, luxury brand management, high-end design, curatorial work, and any field where taste, discretion, and the ability to navigate complex stakeholder relationships are essential. They also excel in advisory roles — consulting, wealth management, and executive coaching — where their combination of analytical thinking and social intelligence creates exceptional value.

Metal Rabbits avoid chaos, crudeness, and environments that prioritize aggression over elegance. They need professional settings that reflect their values: beauty, order, and intelligent discourse. The Metal Rabbit in a toxic, combative workplace is a fish out of water — capable of surviving but never thriving.`,

    idealCareers: [
      'Diplomat',
      'Art Director',
      'Luxury Brand Manager',
      'Interior Designer',
      'Wealth Advisor',
      'Museum Curator',
      'Executive Coach',
      'High-End Real Estate Agent',
    ],

    financialStyle:
      'Metal Rabbits are shrewd, quality-conscious financial managers. They prefer to invest in assets of lasting value — fine art, premium real estate, blue-chip portfolios — rather than speculative opportunities. They have an excellent eye for quality and rarely overpay for anything, combining the Rabbit\'s natural caution with Metal\'s analytical rigor. Their challenge is a tendency toward luxury spending that can erode savings if left unchecked. The most financially successful Metal Rabbits distinguish clearly between investment in quality and indulgence in excess.',

    tips: [
      'Leverage your diplomatic strengths for leadership advancement. Metal Rabbits often underestimate their leadership potential, preferring advisory roles. But your ability to build consensus, manage relationships, and maintain composure under pressure makes you an exceptionally effective leader — one that people choose to follow rather than one who demands obedience.',
      'Address conflict directly when it matters. Your preference for diplomatic workarounds serves you well in most situations, but some professional challenges require head-on confrontation. Develop the ability to have difficult conversations with the same grace you bring to everything else.',
      'Build visibility for your contributions. Metal Rabbits tend to let their work speak for itself, but in competitive environments, strategic self-promotion is necessary. Learn to present your achievements in ways that feel authentic rather than boastful.',
      'Create boundaries around perfectionism. Set clear deadlines and quality thresholds in advance, and commit to delivering when they are met — not when the work achieves an impossible ideal. Perfectionism that delays delivery is not a strength; it is self-sabotage.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Metal Rabbit is an experience of extraordinary refinement and quiet depth. They are among the most attentive, considerate, and aesthetically minded partners in the zodiac — the type who remembers your preferences, anticipates your needs, and creates an environment of beauty and order that makes every shared moment feel curated. Being loved by a Metal Rabbit means being chosen by someone with exacting standards who has decided that you are worthy of their very best.

The challenge in Metal Rabbit relationships is accessing the emotional depth beneath the polished surface. Metal Rabbits are masters of presentation, and their romantic persona — while genuine — is carefully constructed. They reveal their deepest feelings gradually, if at all, and partners who push for emotional intensity too quickly will trigger a retreat behind the Rabbit's impeccably maintained walls.

The Metal Rabbit needs a partner who is patient enough to wait for trust, perceptive enough to read the subtle signals of affection the Rabbit offers, and secure enough not to be threatened by the Rabbit's emotional self-containment.`,

    loveStyle:
      'The Metal Rabbit expresses love through thoughtful gestures, aesthetic experiences, and the creation of harmonious shared spaces. Their affection is demonstrated through quality rather than quantity — a perfectly chosen gift rather than daily declarations, a beautifully planned evening rather than spontaneous passion. They seek a refined, intellectually stimulating partnership where both individuals maintain their dignity and independence while building something genuinely beautiful together.',

    idealPartnerTraits: [
      'Emotionally Patient',
      'Cultured',
      'Respectful of Boundaries',
      'Warm Without Being Overwhelming',
      'Intellectually Engaging',
    ],

    tips: [
      'Allow yourself to be imperfect with your partner. The vulnerability of showing up without your usual polish — tired, uncertain, or simply honest — builds deeper trust than any amount of refined presentation. Your partner wants to know you, not your performance.',
      'Initiate physical affection. Metal Rabbits can become so focused on creating the perfect atmosphere that they neglect the simple power of touch. A spontaneous embrace, a hand held in public, or an unexpected kiss communicates love more directly than the most elegant dinner arrangement.',
      'Communicate needs rather than hinting. Your diplomatic instinct may lead you to suggest, imply, or indirect your way toward what you want. This subtlety, while elegant, often leaves your partner confused. Clear, kind directness is a gift to your relationship.',
      'Accept that love is sometimes messy. The Metal Rabbit\'s desire for a relationship that is always harmonious, always elegant, always under control is impossible to sustain. The most beautiful relationships include conflict, imperfection, and raw emotional moments that defy your preference for composure.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Rabbit's health profile reflects the tension between their controlled exterior and their sensitive inner nature. In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Rabbit's Wood nature connects to the Liver and Gallbladder. This creates a health landscape where stress primarily manifests through the respiratory, digestive, and nervous systems.

Metal Rabbits are particularly susceptible to stress-related conditions that build gradually beneath their composed surface. Anxiety, tension headaches, skin sensitivities, and digestive irregularities are common expressions of the internal pressure they maintain. The Metal-Wood tension can also manifest as muscular tightness, particularly in the jaw, neck, and upper back — areas where suppressed tension accumulates.

The Metal Rabbit's greatest health advantage is their willingness to invest in self-care when they understand its value. They respond well to structured wellness routines, high-quality nutrition, and therapeutic environments that appeal to their aesthetic sensibility. The key is framing health not as a medical obligation but as an extension of the refinement they naturally pursue.`,

    bodyAreas: ['Lungs', 'Liver', 'Nervous System', 'Skin'],

    exercises: [
      'Pilates',
      'Barre and dance',
      'Nature walks',
      'Gentle yoga',
    ],

    dietTips: [
      'Emphasize foods that support both the Lung and Liver systems: leafy greens, pears, celery, white mushrooms, and green tea. This dual support addresses the Metal Rabbit\'s primary organ vulnerabilities while maintaining internal harmony.',
      'Eat in calm, pleasant environments. The Metal Rabbit\'s digestion is closely tied to their emotional state and physical surroundings. Rushed meals in chaotic settings will disrupt their sensitive digestive system far more than they would affect a less refined sign.',
      'Include nervine herbs and foods: chamomile, passionflower, lavender-infused honey, and magnesium-rich foods like dark chocolate, almonds, and spinach. These support the nervous system that bears the brunt of the Metal Rabbit\'s internal tension.',
      'Maintain a consistent relationship with food. Avoid extreme diets and dramatic dietary shifts — the Metal Rabbit\'s system thrives on predictability and quality. Invest in the best ingredients you can afford, and prepare them simply and beautifully.',
    ],

    mentalHealth:
      'The Metal Rabbit\'s mental health challenge centers on the gap between their public persona and their inner experience. Maintaining an appearance of composure and refinement requires constant energy, and when this mask becomes too rigid, the Metal Rabbit can experience anxiety, perfectionism-driven paralysis, and a deep loneliness born from feeling that no one sees their true self. Therapy is most effective when it provides a genuinely safe space — one where the Metal Rabbit feels no pressure to perform or present. Art therapy, journaling, and expressive practices that bypass verbal communication can be particularly powerful, as they allow the Rabbit to access emotions that their controlled verbal processing tends to filter. The single most important intervention for a Metal Rabbit\'s mental health is permission — explicit, repeated permission — to be imperfect, to be struggling, and to be fully human beneath the polish.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['White', 'Silver', 'Pink', 'Lavender'],
    direction: 'West',
    gemstones: ['Moonstone', 'White Pearl', 'Rose Quartz'],
    flowers: ['White Orchid', 'Jasmine', 'Lily of the Valley'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL RABBITS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Sting',
        profession: 'Musician/Actor',
        birthYear: 1951,
        description:
          'Sting\'s career trajectory — from punk energy with The Police to sophisticated solo artistry — perfectly illustrates the Metal Rabbit\'s journey toward refinement. His exploration of world music, jazz, and classical forms reflects the sign\'s insatiable aesthetic curiosity, while his environmental activism demonstrates the Metal Rabbit\'s capacity for principled commitment beneath the polished surface.',
      },
      {
        name: 'Robin Williams',
        profession: 'Actor/Comedian',
        birthYear: 1951,
        description:
          'Robin Williams revealed the Metal Rabbit\'s hidden complexity — brilliant public performance concealing profound inner sensitivity. His quicksilver wit reflected the Rabbit\'s mental agility, while his deeper dramatic roles exposed the emotional depth that Metal Rabbits often keep carefully guarded from the world.',
      },
      {
        name: 'Mark Hamill',
        profession: 'Actor',
        birthYear: 1951,
        description:
          'Mark Hamill\'s enduring connection to the role of Luke Skywalker and his graceful navigation of fame demonstrate the Metal Rabbit\'s strategic patience and quiet resilience. His successful reinvention as a voice actor reflects the sign\'s ability to adapt with elegance when circumstances change.',
      },
      {
        name: 'Kurt Russell',
        profession: 'Actor',
        birthYear: 1951,
        description:
          'Kurt Russell\'s remarkably versatile career — from Disney child star to action hero to acclaimed character actor — demonstrates the Metal Rabbit\'s strategic adaptability and quiet determination. His preference for privacy despite decades of fame reflects the sign\'s essential reserve and self-containment.',
      },
      {
        name: 'Sally Ride',
        profession: 'Astronaut/Physicist',
        birthYear: 1951,
        description:
          'As the first American woman in space, Sally Ride embodied the Metal Rabbit\'s quiet breaking of barriers through competence and determination rather than confrontation. Her subsequent career in science education demonstrated the sign\'s commitment to creating lasting, elegant solutions to systemic problems.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rabbit holds the fourth position in the Chinese zodiac, associated with the Moon, elegance, and quiet wisdom. In Chinese mythology, the Jade Rabbit (Yu Tu) lives on the Moon, eternally pounding the elixir of immortality — a myth that connects the Rabbit to themes of patience, refinement, and the transformation of raw materials into something precious. When Metal joins this lunar creature, it adds the gleam of moonlight made solid — creating a sign of refined beauty with hidden strength.

The Rabbit's mythological association with the Moon places it in a yin, contemplative space that contrasts with the more aggressive zodiac animals. In traditional Chinese astrology, Metal Rabbit years are considered periods of diplomatic advancement, cultural refinement, and the resolution of conflicts through negotiation rather than force. The 1951 Metal Rabbit year coincided with significant diplomatic negotiations worldwide, a pattern traditional astrologers attribute to the sign's influence.

In Japanese mythology, the Moon Rabbit (Tsuki no Usagi) is celebrated for its self-sacrifice and nobility — qualities that resonate with the Metal Rabbit's willingness to maintain composure and sacrifice personal comfort for the greater good. The Metal element adds to this mythology a sense of the precious and enduring: the Moon Rabbit's elixir, when touched by Metal, becomes not just healing but permanent.`,

    symbolism: `The Metal Rabbit symbolizes refined power, diplomatic mastery, and the strength that lies in elegance rather than force. In Five Element symbolism, Metal represents the autumn harvest — the moment when nature's abundance is gathered, refined, and preserved. Combined with the Rabbit's association with the Moon and gentle wisdom, the Metal Rabbit becomes a symbol of civilized power: the victory achieved through persuasion rather than coercion, through beauty rather than brute strength.

The Rabbit's soft fur and gentle demeanor, when combined with Metal's sharpness, create a duality that is the Metal Rabbit's signature: outward grace concealing inward steel. This symbolism has deep roots in Chinese philosophical traditions that value the power of yielding — the recognition that water, the softest element, eventually shapes the hardest stone.

In traditional Chinese art, the Metal Rabbit is often depicted in moonlit scenes of serene beauty — gardens of white flowers, still ponds reflecting silver light. These images capture the sign's essential quality: the creation of beauty as both an aesthetic choice and a strategic act.`,

    modernInterpretation: `In contemporary culture, the Metal Rabbit archetype resonates with the growing recognition that soft power — diplomatic influence, cultural sophistication, and strategic patience — is often more effective than hard force. In an era of increasing polarization and confrontation, the Metal Rabbit offers a model of engagement that achieves results through refinement rather than aggression.

The Metal Rabbit's relevance extends to modern conversations about emotional intelligence, aesthetic influence, and the power of presentation. In fields from design to diplomacy, from brand management to conflict resolution, the Metal Rabbit's core competencies are increasingly recognized as essential rather than secondary. The ability to create beautiful, harmonious experiences — whether in products, spaces, or negotiations — is now understood as a form of leadership in its own right.

For those born in Metal Rabbit years, the contemporary world offers unprecedented opportunities to leverage their natural gifts. The global premium on design thinking, emotional intelligence, and cross-cultural communication aligns perfectly with the Metal Rabbit's inherent strengths. Their challenge — and their growth edge — remains the willingness to reveal the depth beneath the polish, to lead with vulnerability as well as elegance.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
