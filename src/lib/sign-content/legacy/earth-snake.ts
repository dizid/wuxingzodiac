// ============================================
// EARTH SNAKE (戊巳) — The Silent Authority
// ============================================
// The Earth Snake combines the Snake's deep intuition and
// strategic mind with Earth's stabilizing, grounding energy,
// creating a quietly powerful figure of exceptional wisdom
// and understated influence.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-snake',
  profile: getProfileBySlug('earth-snake')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Snake is the most grounded and dependable expression of the Snake archetype. Where other Snake variants may be enigmatic, manipulative, or dangerously seductive, the Earth Snake channels the Snake's legendary wisdom and strategic intelligence through a filter of practical reliability that makes them one of the most trustworthy and quietly influential signs in the Chinese zodiac. They possess all of the Snake's depth and perceptiveness, but none of its more unsettling qualities.

People born under this sign carry themselves with a calm, centered authority that requires no announcement. They speak less than most people but observe more, processing information with a thoroughness that allows them to understand situations, people, and systems at a level that others rarely achieve. When an Earth Snake finally offers their assessment, it carries the weight of deep consideration and is almost invariably correct. This combination of patience, perception, and accuracy makes them invaluable advisors and decision-makers.

What distinguishes the Earth Snake from other signs is their ability to combine deep intuitive wisdom with practical, material competence. They are equally comfortable navigating the subtle emotional currents of a complex interpersonal situation and the concrete challenges of a financial analysis or construction project. This versatility — rooted in the Snake's natural depth enhanced by Earth's practical grounding — makes them effective in virtually any domain that rewards careful thinking and patient execution.`,

    coreTraits: [
      'Wise',
      'Patient',
      'Perceptive',
      'Reliable',
      'Discreet',
      'Composed',
    ],

    strengths: [
      {
        trait: 'Deep Perception',
        description:
          'Earth Snakes see what others miss. Their combination of the Snake\'s intuitive awareness and Earth\'s practical observation creates a perception so thorough that it approaches clairvoyance. They read people, situations, and hidden dynamics with extraordinary accuracy, making them exceptional judges of character and invaluable strategic advisors.',
      },
      {
        trait: 'Quiet Authority',
        description:
          'The Earth Snake commands respect through competence and composure rather than volume or position. Their calm, measured presence conveys reliability and wisdom in a way that louder personalities cannot replicate. People instinctively trust the Earth Snake\'s judgment because it is so clearly grounded in careful observation rather than ego or assumption.',
      },
      {
        trait: 'Strategic Patience',
        description:
          'Earth Snakes possess an exceptional ability to wait for the right moment to act. They do not rush decisions or force outcomes, instead allowing situations to develop until the optimal course of action becomes clear. This strategic patience, far from being passive, is an active discipline that consistently produces superior results.',
      },
      {
        trait: 'Material Wisdom',
        description:
          'The Earth element gives the Snake a practical intelligence about money, property, and material resources that other Snake variants may lack. Earth Snakes build wealth quietly and steadily, making sound financial decisions based on thorough analysis. They understand the material world with the same depth they bring to understanding people.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Guardedness',
        description:
          'Earth Snakes protect their inner world with multiple layers of composure and reserve. While this self-containment is a professional asset, it can prevent genuine emotional intimacy in personal relationships. Partners and friends may feel that they never truly know the Earth Snake, who shares observations freely but guards feelings fiercely.',
      },
      {
        trait: 'Excessive Caution',
        description:
          'The Earth Snake\'s thorough approach to decision-making can tip into analysis paralysis. They may delay action indefinitely, waiting for perfect information that never arrives. Their caution, while usually wise, can cause them to miss opportunities that reward bold, timely action over exhaustive preparation.',
      },
      {
        trait: 'Judgmental Detachment',
        description:
          'The Earth Snake\'s perceptive nature can evolve into cold judgment. They may observe others\' weaknesses with such clarity that they lose empathy, viewing people as systems to be analyzed rather than individuals deserving of compassion. This detachment can make them seem calculating and emotionally unavailable.',
      },
      {
        trait: 'Possessive Attachment',
        description:
          'Earth\'s material attachment combined with the Snake\'s territorial nature can produce a possessiveness that extends to relationships, resources, and even information. Earth Snakes may hoard knowledge as a form of power, share resources reluctantly, or become unreasonably jealous of their partner\'s independent relationships.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Snake is inherently associated with the Fire element — it is the animal of high noon and early summer, connected to warmth, transformation, and hidden power. When Earth meets this naturally fiery animal, it creates a contained heat — like magma beneath the earth's surface, immensely powerful but invisible from above. Earth contains and stabilizes the Snake's Fire nature without extinguishing it, creating a personality of remarkable depth and controlled intensity. In the productive cycle, Fire creates Earth, meaning the Snake's intrinsic Fire energy naturally generates the Earth qualities of stability and practicality. The Earth Snake therefore represents a self-reinforcing cycle where intuitive wisdom (Fire) generates practical competence (Earth), which in turn provides the stable platform for even deeper wisdom.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Snake's compatibility profile favors partners who appreciate depth, subtlety, and quiet connection over dramatic displays of emotion or constant excitement. They are drawn to signs that can match their intellectual depth and respect their need for privacy, while offering the emotional warmth that melts their protective reserve without threatening their sense of control.

In traditional Chinese astrology, the Snake belongs to the Second Trine alongside the Ox and the Rooster — three signs united by determination, attention to detail, and a shared preference for order and structure. These natural allies understand each other's methodical approach to life and communicate through a shared language of quiet competence. The Snake's most challenging pairing is with the Pig, its zodiac opposite, where the Pig's open, trusting nature clashes with the Snake's guarded, strategic temperament.`,

    bestMatches: [
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 92,
        summary:
          'An exceptionally deep and stable partnership between two signs that understand the value of patience and quiet strength. The Earth Ox\'s unwavering reliability provides the security the Earth Snake needs to gradually lower their guard, while the Snake\'s perceptive wisdom guides the Ox\'s steady effort toward optimal outcomes. Their shared Earth element creates profound mutual understanding.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 87,
        summary:
          'Two members of the Second Trine united by shared precision and high standards. The Metal Rooster\'s sharp analytical mind resonates with the Earth Snake\'s strategic intelligence, creating a partnership of remarkable intellectual compatibility. Earth supports Metal in the productive cycle, meaning the Snake naturally nurtures the Rooster\'s ambitions while receiving the honesty and directness the Snake secretly values.',
      },
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 83,
        summary:
          'The Water Dragon\'s visionary ambition and natural authority complement the Earth Snake\'s strategic depth and practical wisdom. The Snake serves as the Dragon\'s most trusted advisor — the power behind the throne whose counsel consistently produces superior outcomes. Water nourishes Earth, adding emotional fluidity to the Snake\'s grounded composure.',
      },
    ],

    challengingMatches: [
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 30,
        summary:
          'The zodiac\'s classic opposition intensified by elemental tension. The Wood Pig\'s open, trusting nature feels naive to the strategic Earth Snake, while the Snake\'s guarded, calculating approach offends the Pig\'s belief in straightforward honesty. Wood depletes Earth, potentially leaving the Snake feeling drained, while the Pig feels perpetually suspicious of the Snake\'s hidden motives.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 35,
        summary:
          'The Fire Tiger\'s bold, direct approach to life clashes fundamentally with the Earth Snake\'s subtle, patient strategy. The Tiger demands transparency; the Snake operates through discretion. The Tiger acts on instinct; the Snake plans meticulously. Fire\'s aggressive energy threatens the Earth Snake\'s carefully maintained composure and sense of control.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 38,
        summary:
          'The Fire Horse\'s explosive independence and need for constant movement exhausts the Earth Snake\'s preference for stillness and careful observation. The Horse\'s impulsive nature offends the Snake\'s strategic sensibility, while the Snake\'s reserve feels like rejection to the expressive Horse. Fire overwhelms Earth\'s grounding influence in this pairing.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Fire-natured animal, the Earth Snake has a distinctive elemental profile. Fire signs are natural allies, resonating with the Snake's intrinsic Fire nature while creating Earth through the productive cycle — these partnerships feel energizing and authentic. Metal signs benefit from the Earth Snake's support (Earth creates Metal), creating relationships where the Snake's grounding presence nurtures Metal's structured ambitions. Water signs present an interesting dynamic: Water can nourish the Earth Snake's depth but also threatens to dissolve their carefully constructed boundaries. Wood signs pose the greatest challenge, as Wood depletes Earth and challenges the Snake's control, creating relationships that may be growthful but feel uncomfortable and draining.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Snakes excel in careers that reward deep analysis, strategic thinking, and patient accumulation of expertise. They are not drawn to high-profile, public-facing roles but to positions of quiet influence where their perception and judgment shape outcomes without requiring them to be the visible face of an organization. The ideal Earth Snake career combines intellectual depth with material reward — satisfying both their analytical mind and their practical desire for financial security.

The Earth Snake's work style is thorough, deliberate, and remarkably independent. They prefer to work with minimal supervision, processing complex information at their own pace and producing insights of exceptional quality. They are not team players in the conventional sense — they work best when given a clear objective and the autonomy to pursue it through their own methods. However, their output is so consistently valuable that organizations learn to accommodate their independent style.

Earth Snakes often find their greatest career satisfaction in advisory roles where their wisdom shapes important decisions without requiring them to execute those decisions personally. They are the strategists behind the leaders, the analysts whose reports change corporate direction, and the quiet experts whose judgment is sought when the stakes are highest.`,

    idealCareers: [
      'Investment Strategist',
      'Geologist/Mining Engineer',
      'Forensic Accountant',
      'Intelligence Analyst',
      'Estate Planning Attorney',
      'Antiques Appraiser',
      'Clinical Psychologist',
      'Research Director',
    ],

    financialStyle:
      'Earth Snakes are among the most naturally gifted wealth builders in the zodiac. They combine the Snake\'s instinct for identifying valuable opportunities with Earth\'s patience and practical wisdom, creating a financial approach that is both shrewd and conservative. They favor long-term investments in tangible assets, particularly real estate and land, and they have an almost uncanny ability to identify undervalued properties and resources before the market catches on. Their financial weakness is a tendency toward secrecy — they may maintain hidden accounts, avoid financial transparency with partners, or hoard resources beyond reasonable need.',

    tips: [
      'Leverage your analytical depth in roles where thorough research and strategic insight create measurable value. Finance, consulting, intelligence, and specialized research all reward the Earth Snake\'s patient, perceptive approach to complex problems.',
      'Develop your communication skills to amplify the impact of your insights. Your analysis is often brilliant, but its value depends on your ability to present it clearly and persuasively. Invest in writing and presentation skills that translate your deep understanding into accessible, actionable guidance.',
      'Build a professional reputation deliberately. Earth Snakes tend to let their work speak for itself, but career advancement requires visibility. Cultivate a small number of key professional relationships and ensure that decision-makers know the value of your contributions.',
      'Resist the temptation to hoard information as a source of power. In modern organizations, influence comes from sharing valuable insights, not withholding them. The Earth Snake who becomes known as a generous source of wisdom rather than a gatekeeper of secrets builds far more lasting professional capital.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Snake is a deeply devoted but profoundly private partner. They love with an intensity and depth that few other signs can match, but they express that love through subtle, carefully calibrated actions rather than grand declarations or public displays. The experience of being truly loved by an Earth Snake is unlike any other — a slow, deepening revelation of layers that takes years to fully unfold but rewards patience with a connection of extraordinary intimacy and trust.

Earth Snakes approach romantic relationships with extreme caution. They observe potential partners for extended periods before revealing any vulnerability, testing trustworthiness through subtle, often invisible means before allowing genuine closeness. This guarded approach can frustrate more spontaneous suitors, but those who earn the Earth Snake's trust discover a partner of remarkable loyalty, sensuality, and emotional depth.

The Earth Snake's primary challenge in love is the tension between their desire for deep connection and their fear of vulnerability. They want to be known — truly, completely known — but the prospect of exposing their inner world feels profoundly dangerous. The healthiest Earth Snake relationships are those where trust is built gradually and respected absolutely, allowing the Snake to open at their own pace.`,

    loveStyle:
      'The Earth Snake loves through quiet devotion and deep, private intimacy. They are intensely sensual partners who express affection through physical closeness, thoughtful gifts, and a perceptive attentiveness to their partner\'s unspoken needs. Their love language is quality time and acts of service, expressed with a subtlety that requires an attentive partner to fully appreciate. They are fiercely loyal once committed and expect absolute fidelity in return — betrayal is something the Earth Snake neither forgives nor forgets. In their most fulfilled relationships, they create a private world of shared secrets, deep understanding, and an intimacy so complete that it renders the outside world irrelevant.',

    idealPartnerTraits: [
      'Patient',
      'Perceptive',
      'Trustworthy',
      'Emotionally Mature',
      'Comfortable with Silence',
    ],

    tips: [
      'Practice revealing yourself incrementally rather than maintaining permanent emotional walls. Share one vulnerability, observe that it is received safely, then share another. This gradual approach to openness honors your need for caution while building the intimacy your relationship requires.',
      'Resist the urge to test your partner\'s loyalty through subtle manipulation. Your strategic mind naturally creates tests and scenarios, but genuine trust is built through straightforward communication, not through passed trials. Ask directly for what you need rather than engineering situations to reveal whether your partner will provide it.',
      'Communicate jealousy directly rather than expressing it through withdrawal or passive aggression. Your possessive tendencies are natural but must be managed openly. Naming your feelings honestly gives your partner the opportunity to reassure you, while suppressing them creates a toxic undercurrent.',
      'Create shared rituals of intimacy that honor both your need for depth and your partner\'s need for warmth. Regular, unhurried time together — evening walks, shared meals without devices, quiet conversations before sleep — builds the sustained connection that the Earth Snake relationship thrives on.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Snake possesses a constitution of surprising endurance beneath a deceptively calm exterior. In Traditional Chinese Medicine, the combination of the Snake's Fire nature and the Earth element creates a constitution where the internal heat of Fire is contained by Earth's solid structure — powerful and sustained but prone to overheating from within when stress accumulates without adequate release.

The most common Earth Snake health pattern is the internalization of stress. Their composed exterior masks a rich internal emotional life that generates significant physiological tension when not properly managed. This hidden stress tends to manifest in the digestive system (Earth's domain), the cardiovascular system (Fire's domain), and the musculoskeletal system, particularly as chronic tension in the neck, shoulders, and lower back.

The Earth Snake's health strategy should focus on creating regular outlets for the emotional and physical tension they naturally accumulate. Practices that combine physical movement with mental stillness — tai chi, yoga, swimming — are particularly beneficial, as they address both the body's need for release and the mind's tendency to overthink.`,

    bodyAreas: ['Stomach', 'Heart', 'Lower Back', 'Skin'],

    exercises: [
      'Yoga',
      'Tai chi',
      'Swimming',
      'Leisurely walking',
    ],

    dietTips: [
      'Prioritize foods that support both digestive health and circulation. The Earth Snake\'s dual Earth-Fire constitution benefits from meals that are warm but not overly heating — steamed fish, root vegetables, whole grains, and moderate amounts of warming spices like ginger and turmeric.',
      'Avoid excess rich, heavy foods that aggravate Earth\'s tendency toward dampness. The Earth Snake\'s love of quality can lead to overindulgence in rich cuisine. Balance indulgent meals with lighter days focused on vegetables, clear soups, and simple preparations.',
      'Stay well hydrated to support the Fire aspect of your constitution. The Snake\'s internal Fire burns through fluids quickly, and dehydration exacerbates the tension and circulatory issues this sign is prone to. Herbal teas — particularly green tea and chrysanthemum — provide hydration with additional health benefits.',
      'Eat mindfully and without distraction. The Earth Snake\'s digestive system responds strongly to the emotional state during meals. Eating while stressed, working, or processing difficult information impairs digestion significantly. Make meals a deliberate, calm ritual.',
    ],

    mentalHealth:
      'The Earth Snake\'s primary mental health challenge is the weight of carrying everything internally. Their deep perception means they absorb vast amounts of emotional information from their environment, and their private nature prevents them from releasing this accumulated burden through the normal channels of social sharing and emotional expression. Over time, this internalization can produce chronic anxiety, insomnia, and a pervasive sense of heaviness that the Earth Snake may not even recognize as depression because it has become their normal state. Therapy is exceptionally valuable for Earth Snakes, particularly modalities that create a structured, safe space for emotional expression — psychodynamic therapy, somatic experiencing, or EMDR. The therapist who earns an Earth Snake\'s trust gains access to a profound inner world and can facilitate transformative healing. Regular creative expression — writing, music, visual art — also provides essential outlets for the emotional intensity that the Earth Snake accumulates.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Yellow', 'Tan', 'Deep Brown'],
    direction: 'Southwest',
    gemstones: ['Smoky Quartz', 'Garnet', 'Obsidian'],
    flowers: ['Orchid', 'Iris', 'Lotus'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH SNAKES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Bob Hope',
        profession: 'Comedian/Entertainer',
        birthYear: 1929,
        description:
          'Bob Hope\'s extraordinary seven-decade career demonstrates the Earth Snake\'s remarkable endurance and strategic intelligence. His ability to remain relevant across multiple eras of entertainment, combined with his shrewd business acumen and quiet philanthropy, reflects the Earth Snake\'s gift for sustained influence through patient, strategic positioning.',
      },
      {
        name: 'Audrey Hepburn',
        profession: 'Actress/Humanitarian',
        birthYear: 1929,
        description:
          'Audrey Hepburn embodied the Earth Snake\'s combination of quiet elegance and deep substance. Her graceful exterior concealed a formidable inner strength forged during wartime hardship, and her humanitarian work with UNICEF revealed the Earth Snake\'s capacity for profound, quietly determined service to others.',
      },
      {
        name: 'Martin Luther King Jr.',
        profession: 'Civil Rights Leader',
        birthYear: 1929,
        description:
          'Dr. King\'s strategic brilliance, patient determination, and ability to move millions through carefully crafted words exemplify the Earth Snake\'s gift for quiet, profound influence. His nonviolent philosophy reflected the Earth Snake\'s understanding that the deepest transformations come not through force but through sustained moral authority.',
      },
      {
        name: 'Taylor Swift',
        profession: 'Singer/Songwriter',
        birthYear: 1989,
        description:
          'Taylor Swift\'s remarkable career demonstrates the Earth Snake\'s strategic intelligence and patient empire-building. Her calculated evolution across musical genres, her shrewd business decisions regarding master recordings, and her ability to maintain deep connections with fans all reflect the Earth Snake\'s combination of perceptive wisdom and practical material instinct.',
      },
      {
        name: 'Grace Kelly',
        profession: 'Actress/Princess',
        birthYear: 1929,
        description:
          'Grace Kelly\'s trajectory from Hollywood stardom to European royalty exemplifies the Earth Snake\'s quiet ascent to positions of lasting influence. Her composed elegance, strategic life choices, and ability to command respect through understated grace rather than dramatic assertion are pure Earth Snake qualities.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Snake holds a complex and powerful position in Chinese mythology. Known as the "Little Dragon" (Xiao Long), the Snake is considered the Dragon's earthly counterpart — possessing much of the Dragon's wisdom and transformative power but expressing it through subtlety rather than spectacle. In Chinese folk tradition, the Snake is associated with intelligence, longevity, and the guardian spirits of the home. Snake deities were widely worshipped as protectors of households and keepers of hidden treasures.

When the Earth element infuses this already profound creature, it amplifies the Snake's connection to the hidden powers of the natural world. The Earth Snake in Chinese cosmological tradition represents the wisdom that lies buried beneath the surface — mineral wealth, underground water sources, and the invisible geological forces that shape the landscape from below. Earth Snake imagery was traditionally associated with divination, geomancy, and the practice of reading the earth's hidden messages. The Earth Snake year was considered auspicious for activities involving excavation, discovery, and the revelation of hidden value — mining, archaeology, and the uncovering of long-buried truths.`,

    symbolism: `The Earth Snake symbolizes hidden wisdom and the power of patient observation. In Wu Xing symbolism, this combination represents knowledge that has been refined through long, slow processes — like minerals compressed into gems deep within the earth. The Snake's Fire nature, contained by Earth's solid structure, creates a metaphor for wisdom that is both deeply felt and practically grounded.

The Earth Snake is also a symbol of discretion and the power of silence. In a zodiac system where many animals represent outward qualities — the Tiger's courage, the Horse's freedom, the Dragon's authority — the Snake represents the inward journey. The Earth Snake reminds us that the most profound power often operates invisibly, shaping outcomes through subtle influence rather than dramatic intervention.`,

    modernInterpretation: `In contemporary culture, the Earth Snake archetype resonates with the growing recognition that quiet competence and strategic thinking are more valuable than self-promotion and dramatic action. In an era of loud opinions and rapid reactions, the Earth Snake represents the discipline of deep analysis, patient observation, and carefully considered response — qualities that produce consistently superior outcomes in business, diplomacy, and personal relationships.

The Earth Snake's modern relevance extends to the information age, where the ability to process vast amounts of data and extract meaningful patterns is increasingly valuable. The Earth Snake's natural gift for perceiving hidden connections and underlying truths makes them the archetype of the skilled analyst, the perceptive therapist, and the strategic advisor whose quiet counsel shapes major decisions.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
