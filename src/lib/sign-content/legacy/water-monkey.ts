// ============================================
// WATER MONKEY (壬申) — The Quicksilver Mind
// ============================================
// The Water Monkey combines the Monkey's brilliant
// versatility and mischievous creativity with Water's
// emotional depth and adaptive intelligence — producing
// the zodiac's most intellectually fluid and socially
// gifted personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-monkey',
  profile: getProfileBySlug('water-monkey')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Monkey is the most emotionally perceptive and diplomatically gifted of all Monkey variants. Where the Monkey is already renowned for its dazzling intelligence, irrepressible creativity, and playful charm, the Water element adds a layer of emotional depth, social intuition, and strategic patience that transforms the Monkey's sometimes scattered brilliance into something genuinely formidable. The Water Monkey does not merely think quickly — they think deeply, reading the emotional undercurrents of every situation with an accuracy that gives them an almost unfair advantage in human interaction.

What distinguishes the Water Monkey from other Monkey variants is the element's civilizing influence on the Monkey's sometimes excessive restlessness and trickster tendencies. Water smooths the rough edges, replacing juvenile mischief with sophisticated wit and replacing impulsive self-interest with genuine empathy and collaborative intelligence. The Water Monkey still possesses the Monkey's legendary cleverness, but they deploy it with a subtlety and emotional awareness that earns genuine respect rather than mere amusement.

Beneath the Water Monkey's sparkling social exterior lies an emotional world of surprising depth and complexity. They feel things more keenly than their playful demeanor suggests, and they can be wounded by rejection, criticism, or exclusion in ways that their quick recovery conceals. The Water Monkey's lifelong journey is integrating their brilliant intellectual surface with their emotional depths — becoming not just the cleverest person in the room but the wisest.`,

    coreTraits: [
      'Brilliant',
      'Charming',
      'Adaptable',
      'Perceptive',
      'Creative',
      'Emotionally Aware',
    ],

    strengths: [
      {
        trait: 'Intellectual Fluidity',
        description:
          'The Water Monkey\'s mind moves with extraordinary speed and flexibility, making connections between disparate ideas, adapting to new information instantaneously, and solving problems through creative approaches that more linear thinkers cannot conceive. Their thinking is not merely fast but genuinely innovative — they see possibilities that exist between established categories.',
      },
      {
        trait: 'Social Mastery',
        description:
          'The Water element deepens the Monkey\'s already considerable social intelligence into something approaching genuine mastery. The Water Monkey reads social dynamics with extraordinary precision, adapting their communication style, humor, and energy to connect authentically with virtually anyone. This is not superficial charm but a genuine ability to understand and connect with diverse people.',
      },
      {
        trait: 'Creative Problem-Solving',
        description:
          'When confronted with obstacles, the Water Monkey does not force solutions — they flow around problems, finding creative paths that others do not see. Their combination of intellectual creativity and Water\'s adaptive nature makes them exceptional troubleshooters, innovators, and crisis responders. They are the person you want in the room when conventional approaches have failed.',
      },
      {
        trait: 'Emotional Resilience',
        description:
          'The Water Monkey recovers from setbacks with remarkable speed, processing disappointment and failure through their active mind and social connections rather than dwelling in negativity. This resilience is not denial but genuine adaptive processing — they extract the lesson, adjust their approach, and move forward with renewed energy.',
      },
    ],

    challenges: [
      {
        trait: 'Superficiality',
        description:
          'The Water Monkey\'s quick mind and social fluidity can prevent deep engagement with any single topic, relationship, or pursuit. They may skim across life\'s surface, collecting experiences and connections without going deep enough to be genuinely transformed. This superficiality is often invisible to others — the Water Monkey\'s charm masks the depth they have not yet developed.',
      },
      {
        trait: 'Emotional Evasion',
        description:
          'Despite their emotional awareness, the Water Monkey often uses humor, distraction, and mental activity to avoid sitting with difficult feelings. They intellectualize emotions rather than experiencing them, analyzing their sadness or anger with detached curiosity rather than allowing themselves to feel it fully. This evasion prevents the emotional growth their Water element is designed to facilitate.',
      },
      {
        trait: 'Manipulative Charm',
        description:
          'The Water Monkey\'s social intelligence and adaptive charm can tip into manipulation when they want something badly enough. They may use their understanding of people\'s emotional vulnerabilities to steer situations in their favor — often so smoothly that neither party recognizes what is happening. Developing the discipline to use their gifts ethically is a critical growth area.',
      },
      {
        trait: 'Restless Dissatisfaction',
        description:
          'The Water Monkey\'s fertile mind constantly generates new possibilities, which can create a chronic dissatisfaction with whatever they currently have. New projects, new relationships, and new ideas always seem more exciting than existing ones, leading to a pattern of starting brilliantly and finishing poorly. The Water Monkey who masters the art of following through achieves at a level their peers find astonishing.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Monkey is associated with Metal energy — sharp, precise, and brilliant. When Water is layered onto this Metal-natured animal, the combination follows the productive cycle: Metal generates Water, meaning the Monkey's natural Metal energy actively feeds and strengthens the Water element. This is one of the most naturally synergistic element-animal pairings in the zodiac.

The Metal-Water synergy gives the Water Monkey extraordinary intellectual and emotional resources. Metal's precision sharpens Water's intuition into something remarkably accurate. Water's depth gives Metal's brilliance genuine substance. Together, they create a mind that is both analytically precise and emotionally intelligent — a rare combination that makes the Water Monkey exceptionally effective in any domain requiring both IQ and EQ. The risk of this powerful combination is that it can become self-serving; the Water Monkey's formidable intelligence, applied without ethical grounding, can become manipulation of the most sophisticated kind. The Water Monkey's moral development is as important as their intellectual development.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Monkey's compatibility is shaped by their need for intellectual stimulation, emotional connection, and a partner who can keep up with their quick mind without being threatened by it. They seek partners who are both smart and emotionally grounded — people who appreciate the Monkey's brilliance while providing the depth and stability that the Water element craves. The Monkey belongs to the First Trine alongside the Dragon and the Rat — ambitious, strategic signs that share the Monkey's love of mental challenge.

The Monkey sits in opposition to the Tiger on the zodiac wheel, creating a dynamic tension between the Monkey's clever flexibility and the Tiger's courageous directness. For the Water Monkey, this opposition is moderated somewhat by Water's diplomatic influence, but the fundamental temperamental clash remains.`,

    bestMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 92,
        summary:
          'A brilliant partnership of shared intelligence and emotional wavelength. The Water Rat\'s strategic depth perfectly complements the Water Monkey\'s creative versatility. Both Water signs, they communicate with intuitive ease and share a love of intellectual play. The Rat provides the focused strategy the Monkey\'s innovations need, while the Monkey brings creative energy the Rat\'s plans benefit from.',
      },
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 89,
        summary:
          'A dynamic, high-energy alliance of complementary gifts. The Wood Dragon\'s visionary confidence and bold ambition provide the grand stage the Water Monkey\'s talents deserve. The Monkey brings creative problem-solving and adaptive brilliance that helps the Dragon realize their expansive vision. Water nourishes Wood, creating a naturally supportive flow.',
      },
      {
        slug: 'earth-snake',
        name: 'Earth Snake',
        score: 85,
        summary:
          'A sophisticated partnership of mutual fascination and complementary intelligence. The Earth Snake\'s strategic depth and quiet intensity intrigue the Water Monkey, providing the intellectual challenge they crave. The Snake\'s grounding Earth element provides stability, while the Monkey\'s playful energy prevents the relationship from becoming too heavy.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 35,
        summary:
          'The Monkey and Tiger sit at opposite ends of the zodiac, and the element clash intensifies this tension. The Fire Tiger\'s forceful directness and competitive intensity collide with the Water Monkey\'s subtle cleverness. The Tiger sees the Monkey as dishonest and evasive; the Monkey perceives the Tiger as brutish and inflexible. Water controlling Fire adds frustration on both sides.',
      },
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 40,
        summary:
          'The Fire Pig\'s generous emotional openness and need for sincere connection clashes with the Water Monkey\'s more calculated approach to relationships. The Pig demands authenticity that the Monkey\'s adaptive persona may struggle to provide. The Pig feels manipulated; the Monkey feels constrained by emotional demands they experience as excessive.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 42,
        summary:
          'The Metal Ox\'s rigid determination and slow, methodical pace frustrate the Water Monkey\'s quicksilver mind. The Monkey finds the Ox unbearably predictable; the Ox considers the Monkey unreliable and insufficiently serious. Metal generates Water, which helps somewhat, but the fundamental difference in pace and temperament creates persistent friction.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Metal-natured animal, the Water Monkey benefits from the productive cycle's most reinforcing flow: Metal generates Water. This means the Monkey's natural Metal energy actively strengthens and deepens the Water element, creating a personality of remarkable intellectual and emotional capacity. Externally, Earth signs provide grounding that channels the Water Monkey's fluid brilliance into practical achievement. Wood signs create dynamic partnerships where the Monkey's Water nourishes growth. Water signs intensify emotional connection but risk excessive fluidity without sufficient structure. Fire signs create challenging dynamics — Water controls Fire, which can dampen a Fire partner's enthusiasm, while the Monkey's Metal nature is threatened by Fire's transformative power.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Monkey excels in careers that reward quick thinking, creative innovation, and the ability to navigate complex social and intellectual environments. They are natural innovators who thrive at the intersection of ideas and people — roles where understanding human behavior enhances their ability to create, solve, and build. Unlike more solitary intellectual signs, the Water Monkey needs social interaction as fuel for their creative process; they think best in collaboration and dialogue.

The ideal Water Monkey career provides intellectual variety, social engagement, and the freedom to approach problems creatively. They wilt in repetitive, isolated roles and thrive in environments that change rapidly. Technology, entertainment, marketing, teaching, diplomacy, and entrepreneurship all suit the Water Monkey's combination of brilliance, charm, and adaptability.

The Water Monkey's relationship with money reflects their resourceful nature — they are excellent at generating income through multiple streams, leveraging their diverse skills and social networks. However, their restless nature can lead to financial inconsistency as they leap between opportunities before fully capitalizing on any single one.`,

    idealCareers: [
      'Technology Innovator',
      'Creative Director',
      'Venture Capital Analyst',
      'Documentary Filmmaker',
      'Professor',
      'Product Designer',
      'Diplomatic Advisor',
      'Comedy Writer',
    ],

    financialStyle:
      'The Water Monkey is resourceful and innovative with money, often generating income through unconventional channels and creative opportunities that more conservative signs would never identify. Their financial intelligence is genuine — they understand market dynamics, social trends, and the timing of opportunities with intuitive accuracy. However, their restless nature and love of novelty can lead to scattered investments, impulsive spending on new ventures, and insufficient commitment to building long-term wealth. The Water Monkey\'s financial breakthrough comes when they learn to pair their innovative instincts with patient execution — staying with opportunities long enough to capture their full value rather than leaping to the next shiny possibility.',

    tips: [
      'Choose depth over breadth in your career. Your versatility is extraordinary, but spreading yourself too thin prevents the mastery that leads to exceptional achievement. Pick two or three domains and develop genuine expertise while using your versatility to create unique intersections between them.',
      'Build collaborative partnerships with execution-focused colleagues. Your strength is ideation and innovation; pair yourself with people who excel at implementation and follow-through. The Water Monkey who builds a great team around their ideas achieves exponentially more than the one who tries to do everything alone.',
      'Develop your emotional intelligence into a professional tool. Your natural ability to read people and navigate social dynamics has enormous professional value — consider formalizing it through training in negotiation, executive coaching, or organizational psychology.',
      'Resist the temptation to leave before the harvest. Your pattern of brilliant starts and premature departures costs you more than you realize. The discipline to stay — through boredom, difficulty, and the inevitable plateau — is what transforms clever ideas into lasting achievements.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Monkey in love is charming, attentive, and genuinely engaging — but also complex and sometimes elusive. They bring their considerable intelligence and emotional perception to relationships, creating romantic experiences that are intellectually stimulating, emotionally resonant, and never boring. The Water Monkey's partner discovers a lover who remembers every detail, anticipates desires, and keeps the relationship alive with creativity and surprise.

The Water Monkey's approach to love combines playful courtship with genuine emotional depth. Unlike more purely cerebral Monkey variants, the Water Monkey actually wants deep emotional connection — they are looking for a partner who engages their heart as well as their mind. The ideal Water Monkey romance is a continuous conversation — an exchange of ideas, feelings, experiences, and discoveries that keeps both partners growing and fascinated.

The Water Monkey's romantic challenge is commitment to a single partner when their active mind and social nature constantly introduce new possibilities. They must learn that the depth of sustained intimacy offers rewards that the excitement of novelty cannot match — that the most fascinating person in any room might be the one they have chosen to build a life with.`,

    loveStyle:
      'The Water Monkey loves with playful depth — a combination that keeps partners both entertained and genuinely connected. They express affection through intellectual engagement, emotional attunement, and creative surprises that reveal how carefully they have been paying attention. Their love language combines quality time and words of affirmation — they want to spend meaningful time together and communicate their feelings with the eloquence their verbal gifts allow. They need a partner who can match their mental agility, appreciate their humor, and provide the emotional grounding that prevents their quicksilver nature from becoming evasive.',

    idealPartnerTraits: [
      'Intellectually Engaging',
      'Emotionally Stable',
      'Sense of Humor',
      'Secure in Themselves',
      'Patient with Complexity',
    ],

    tips: [
      'Stop performing and start being. Your social gifts can make you a brilliant partner, but they can also create a performance that prevents genuine intimacy. Let your partner see the unedited version of you — the one who is uncertain, vulnerable, and imperfect. They will love that version more, not less.',
      'Follow through on romantic promises. Your quick mind generates wonderful ideas — surprise trips, thoughtful gifts, meaningful conversations — but your restless nature sometimes moves on before execution. The romantic gesture that actually happens is worth more than ten brilliant ideas that do not.',
      'Invest in one relationship fully before starting another. Your tendency to keep options open — maintaining flirtatious connections, staying in touch with exes, keeping emotional escape routes available — undermines the depth of commitment your Water element actually craves. Close the back doors and invest fully in what is in front of you.',
      'Listen more than you speak. Your verbal brilliance is impressive, but the deepest intimacy comes from receiving, not performing. Practice the discipline of genuine listening — the kind where you absorb without planning your response. Your partner has depths you have not explored; give them space to reveal them.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Monkey's constitution combines the Monkey's Metal-natured energy with Water's influence on the body's emotional and fluid systems. In Traditional Chinese Medicine, the Monkey's Metal nature governs the Lungs and Large Intestine — the organs of breath, elimination, and the body's boundary between inside and outside. Water governs the Kidneys, which store foundational vitality. The productive flow from Metal to Water in this sign creates a constitution that is generally resilient but vulnerable to respiratory issues, nervous system overstimulation, and the depletion that comes from sustained mental overactivity.

The characteristic Water Monkey health pattern reflects their lifestyle: intense mental activity, constant social engagement, and insufficient rest. Their quicksilver mind burns through energy at a remarkable rate, and their social nature keeps them engaged long past the point of healthy fatigue. The result is a pattern of functioning at high capacity until the system crashes — respiratory infections, nervous exhaustion, digestive disruption, and the kind of sudden, complete fatigue that forces a stop they were unwilling to choose voluntarily.

Prevention for the Water Monkey centers on mental rest and respiratory health. Practices that quiet the mind — meditation, breathing exercises, time in nature — counteract the constant mental activity that depletes their energy. Protecting the lungs through clean air, deep breathing practices, and appropriate rest during illness prevents the respiratory vulnerability this sign is prone to.`,

    bodyAreas: ['Lungs', 'Kidneys', 'Nervous System', 'Large Intestine'],

    exercises: [
      'Climbing and gymnastics for agile movement',
      'Swimming for lung capacity and relaxation',
      'Yoga with breathwork emphasis',
      'Team sports for social energy',
    ],

    dietTips: [
      'Support respiratory health with lung-nourishing foods: pears, white mushrooms, radishes, honey, and ginger. The Monkey\'s Metal nature makes lung health a priority, and these foods in TCM tradition strengthen the lung qi that powers both breathing and immune defense.',
      'Nourish the kidneys to sustain mental energy: walnuts (which resemble the brain), black sesame seeds, bone broth, and mineral-rich seaweed. The Water element\'s foundational organ system needs consistent support to fuel the Water Monkey\'s intensive mental activity.',
      'Include foods that calm the nervous system: chamomile tea, magnesium-rich foods like dark chocolate and almonds, and adaptogenic herbs like ashwagandha and rhodiola. The Water Monkey\'s overactive mind benefits from nutritional support for nervous system regulation.',
      'Eat regular, balanced meals despite your tendency to snack erratically. The Water Monkey often eats on the run, skipping meals during intense mental activity and then overeating when the crash comes. Consistent meal timing supports both digestive function and sustained mental performance.',
    ],

    mentalHealth:
      'The Water Monkey\'s most significant mental health challenge is the restless anxiety that arises from a mind that never stops generating thoughts, ideas, and possibilities. Their constant mental activity can evolve from creative brilliance into obsessive thinking, particularly during periods of stress or uncertainty. The Water Monkey benefits from meditation practices that specifically address mental overactivity — not the kind that demands perfect stillness (which tortures the Monkey mind) but practices that redirect mental energy rather than suppressing it, such as walking meditation, creative visualization, or mantra repetition. Social connection is both medicine and potential toxin for the Water Monkey — they need genuine human interaction but must distinguish between connections that nourish and those that merely stimulate. Therapy that engages their intellectual nature while gently directing them toward emotional processing is particularly effective — cognitive behavioral therapy appeals to their analytical mind while facilitating the emotional work their Water element needs.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 7, 8],
    colors: ['Blue', 'Silver', 'White', 'Indigo'],
    direction: 'North',
    gemstones: ['Blue Sapphire', 'Clear Quartz', 'Fluorite'],
    flowers: ['Chrysanthemum', 'Orchid', 'Bird of Paradise'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER MONKEYS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Miley Cyrus',
        profession: 'Singer/Actress',
        birthYear: 1992,
        description:
          'Miley Cyrus\'s constant artistic reinvention and fearless public experimentation embody the Water Monkey\'s creative versatility and refusal to be categorized. Her ability to shed personas, adapt to shifting cultural currents, and maintain public fascination reflects the sign\'s quicksilver adaptability and emotional expressiveness.',
      },
      {
        name: 'Selena Gomez',
        profession: 'Singer/Actress/Entrepreneur',
        birthYear: 1992,
        description:
          'Selena Gomez\'s evolution from child star to multifaceted entrepreneur and mental health advocate demonstrates the Water Monkey\'s capacity for genuine growth beneath a charming public surface. Her emotional openness about personal struggles reflects the Water element\'s depth working through the Monkey\'s typically guarded exterior.',
      },
      {
        name: 'Cardi B',
        profession: 'Rapper/Entertainer',
        birthYear: 1992,
        description:
          'Cardi B\'s irrepressible personality, quick wit, and street-smart intelligence exemplify the Water Monkey\'s combination of charm, cleverness, and emotional authenticity. Her ability to navigate the entertainment industry while maintaining her distinctive voice reflects the sign\'s social mastery and adaptive resilience.',
      },
      {
        name: 'Elizabeth Taylor',
        profession: 'Actress',
        birthYear: 1932,
        description:
          'Elizabeth Taylor\'s legendary beauty, fierce intelligence, and emotionally powerful performances embodied the Water Monkey\'s combination of surface brilliance and hidden depth. Her humanitarian work and fearless advocacy for AIDS research revealed the sign\'s capacity for using social influence in service of genuine compassion.',
      },
      {
        name: 'Johnny Cash',
        profession: 'Musician',
        birthYear: 1932,
        description:
          'Johnny Cash\'s genre-defying career and profound emotional authenticity demonstrate the Water Monkey\'s potential for depth beneath versatility. His ability to connect with audiences across cultural boundaries through raw, honest storytelling reflects the sign\'s combination of social intelligence and emotional resonance.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Monkey holds the ninth position in the Chinese zodiac and is among the most beloved and culturally significant animals in Chinese mythology. Its mythological prominence owes much to Sun Wukong — the Monkey King — from the classic novel Journey to the West. Sun Wukong is the trickster hero par excellence: brilliantly clever, impossibly powerful, irrepressibly playful, and ultimately transformed through spiritual discipline into a being of genuine wisdom. The Monkey King's journey from chaos to enlightenment is the Monkey sign's essential story.

When the Water element is paired with the Monkey, this mythological narrative gains the dimension of emotional and intuitive depth. The Water Monkey represents the Monkey King after his transformation — not the raw, chaotic trickster but the being who has integrated cleverness with compassion, power with wisdom, and restlessness with purpose. Water's association with wisdom and the unconscious mind suggests a Monkey whose brilliance flows from deep sources rather than surface cleverness alone.

In Chinese folklore, the Water Monkey also connects to river and water spirits — beings of quicksilver intelligence who can be either helpful or dangerous depending on how they are approached. This dual nature reflects the Water Monkey's essential character: their formidable intelligence can serve healing or harm, creation or destruction, depending on the moral direction they choose.`,

    symbolism: `The Water Monkey symbolizes the highest expression of adaptive intelligence — the mind that combines analytical precision with emotional wisdom, that solves problems not just through logic but through understanding the human context in which problems exist. In traditional symbolism, it represents the principle that true cleverness serves connection rather than manipulation — that the most intelligent use of intelligence is building bridges between people rather than exploiting the gaps between them.

Water flowing through the Monkey's domain carries symbolism of purification and playful transformation. It represents the cleansing of cleverness from self-serving trickery into genuine wisdom — the journey from being the smartest person in the room to being the wisest. In the Wu Xing cycle, Metal (the Monkey's nature) generating Water symbolizes the way sharp intelligence, when directed inward, produces emotional depth and genuine understanding.

The Water Monkey also symbolizes the joy of intellectual discovery — the pure delight of understanding something new, solving a puzzle, or making a connection that illuminates a previously dark corner of knowledge. This joy of discovery, when shared generously rather than hoarded competitively, becomes the Water Monkey's most beautiful gift to the world.`,

    modernInterpretation: `In contemporary culture, the Water Monkey archetype resonates powerfully with the information age's demand for people who can process rapidly, communicate effectively across diverse audiences, and innovate creatively in response to constantly shifting conditions. The Water Monkey's natural talents — intellectual agility, social fluidity, creative problem-solving — align precisely with the skill set that modern organizations most urgently need.

The Water Monkey also speaks to the contemporary challenge of maintaining depth in an age of distraction. In a world that rewards constant content creation, social media engagement, and rapid-fire communication, the Water Monkey's journey is learning that their greatest contribution comes not from their speed but from their depth — not from producing more but from producing what matters.

For those born in Water Monkey years, the contemporary world is a natural habitat. Their digital fluency, social adaptability, and creative versatility are more valued than ever. The challenge is channeling these gifts toward genuine impact rather than dispersing them across the infinite attention-grabbing opportunities the modern world provides. The Water Monkey who finds their purpose — the cause or craft that deserves their full creative commitment — achieves at a level that leaves even their own considerable ambition astonished.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
