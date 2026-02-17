// ============================================
// EARTH HORSE (戊午) — The Enduring Trailblazer
// ============================================
// The Earth Horse combines the Horse's independent spirit
// and love of freedom with Earth's grounding stability,
// creating a uniquely balanced personality that pursues
// adventure from a foundation of practical reliability.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-horse',
  profile: getProfileBySlug('earth-horse')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Horse is the most balanced and practically effective expression of the Horse archetype. Where other Horse variants may be brilliantly erratic — alternating between manic activity and sudden abandonment — the Earth Horse channels the Horse's extraordinary energy and independent spirit through a framework of stability and follow-through that makes their adventures productive rather than merely exciting. This is the Horse that actually finishes what it starts.

People born under this sign possess an appealing combination of warmth, energy, and dependability that draws others to them naturally. They have the Horse's social magnetism and enthusiasm but without the unreliability that often accompanies it. When an Earth Horse makes a commitment — to a project, a friendship, or a cause — they follow through with a consistency that surprises those who expect the typical Horse's tendency to bolt when things become routine. This reliability, combined with genuine charisma, makes them exceptionally popular.

What distinguishes the Earth Horse from other Earth signs is the underlying restlessness that prevents them from becoming stagnant. While they value stability, they are not content to simply maintain the status quo. They are driven to explore, expand, and improve — but they do so methodically, building each new venture on the solid foundation of the last. The Earth Horse is not the wild mustang racing across open plains; they are the dependable trail horse that covers immense distances day after day, carrying heavy loads to distant destinations without collapsing.`,

    coreTraits: [
      'Dependable',
      'Energetic',
      'Optimistic',
      'Practical',
      'Social',
      'Determined',
    ],

    strengths: [
      {
        trait: 'Grounded Enthusiasm',
        description:
          'Earth Horses bring genuine excitement and positive energy to everything they do, but unlike more volatile Horse variants, their enthusiasm is sustained by practical planning and realistic expectations. They inspire others not with impossible visions but with achievable goals pursued with infectious optimism. This combination of excitement and feasibility makes them exceptional motivators.',
      },
      {
        trait: 'Reliable Independence',
        description:
          'The Earth Horse achieves something rare: they maintain the Horse\'s cherished independence while also being someone others can count on. They will not be controlled or confined, but they honor their commitments faithfully. Partners, employers, and friends learn that the Earth Horse can be trusted to show up and deliver, even while maintaining the personal freedom that is essential to their wellbeing.',
      },
      {
        trait: 'Practical Problem-Solving',
        description:
          'Earth Horses are natural problem-solvers who combine quick thinking with practical knowledge. When obstacles arise, they do not panic or freeze — they assess the situation, identify workable solutions, and act with calm efficiency. Their approach is neither theoretical nor impulsive but grounded in real-world experience and common sense.',
      },
      {
        trait: 'Social Warmth',
        description:
          'The Earth Horse\'s warmth is genuine and inclusive. They remember names, ask about families, and show up for events that matter to their friends. Their social energy is not performative but reflects a real interest in people and a deep understanding that relationships are the foundation of a fulfilling life. They build communities wherever they go.',
      },
    ],

    challenges: [
      {
        trait: 'Restless Stability',
        description:
          'The Earth Horse experiences a constant internal tension between the Horse\'s desire for freedom and Earth\'s pull toward security. They may commit to stable situations — jobs, homes, relationships — then feel trapped by the very stability they chose. Managing this push-pull between adventure and security is the Earth Horse\'s lifelong challenge.',
      },
      {
        trait: 'Over-Commitment',
        description:
          'The Earth Horse\'s combination of social warmth and reliable nature can lead them to take on far more than they can handle. They say yes to too many people, too many projects, and too many obligations, spreading themselves thin rather than disappointing anyone. Learning to say no without guilt is essential for their sustainability.',
      },
      {
        trait: 'Superficial Optimism',
        description:
          'Earth Horses\' natural cheerfulness can sometimes prevent them from engaging with genuinely difficult emotions — their own or others\'. They may gloss over serious problems with relentless positivity, frustrating partners who need their feelings acknowledged rather than solved. Their optimism, while usually an asset, can become a form of emotional avoidance.',
      },
      {
        trait: 'Impatience with Slowness',
        description:
          'Despite their Earth grounding, Earth Horses retain the Horse\'s fundamental impatience. They can become frustrated with people or processes that move more slowly than their natural pace, which can manifest as thinly veiled irritation or premature abandonment of ventures that simply need more time to mature.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Horse is inherently associated with the Fire element — it is the animal of high noon and midsummer, the peak of yang energy. When Earth meets this naturally fiery animal, it creates a productive combination: Fire creates Earth in the generative cycle, meaning the Horse's intrinsic Fire energy naturally produces the stability and groundedness of the Earth element. This is not a tension but a synergy — the Horse's passion and energy are transformed into practical, lasting structures through the Earth element's stabilizing influence. The Earth Horse represents Fire's energy made manifest in the material world: not the flash of the flame but the warmth of the hearth, not the wildfire but the carefully tended furnace that heats the home and forges useful tools.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Horse's compatibility profile favors partners who share their appreciation for both adventure and reliability. They need someone who can keep up with their energy and enthusiasm while also providing the emotional depth and stability that anchors the relationship through life's inevitable challenges. The ideal Earth Horse partner is both a companion for adventures and a source of warm, steady comfort.

In traditional Chinese astrology, the Horse belongs to the Third Trine alongside the Tiger and the Dog — three signs united by courage, action, and a strong sense of justice. These natural allies share the Horse's energy and straightforward communication style. The Horse's most challenging pairing is with the Rat, its zodiac opposite, where the Rat's calculated, cautious approach clashes with the Horse's instinctive, action-oriented nature.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 90,
        summary:
          'A dynamic, energizing partnership between two action-oriented signs. The Wood Tiger\'s adventurous courage complements the Earth Horse\'s practical enthusiasm perfectly. Both signs value freedom and direct communication, creating a relationship free of the games and manipulation that both despise. Wood feeds Fire (the Horse\'s intrinsic element), keeping the energy high and the partnership vibrant.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 88,
        summary:
          'Two Earth signs from the same Trine create a partnership of remarkable trust and mutual support. The Earth Dog\'s loyal, protective nature provides the security the Earth Horse needs to feel free, while the Horse\'s warmth and optimism lightens the Dog\'s sometimes anxious vigilance. Their shared Earth element creates deep mutual understanding.',
      },
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 82,
        summary:
          'The Water Goat\'s gentle creativity and emotional depth complement the Earth Horse\'s practical energy beautifully. The Goat provides the emotional intelligence and artistic sensibility that the Horse sometimes lacks, while the Horse provides the stability and social energy that the Goat needs. Water nourishes Earth, creating a gentle, sustaining dynamic.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 30,
        summary:
          'The classic zodiac opposition creates fundamental friction between these two signs. The Water Rat\'s cautious, calculating approach clashes with the Earth Horse\'s direct, action-oriented nature. The Rat finds the Horse reckless; the Horse finds the Rat manipulative. Water\'s controlling influence on the Horse\'s intrinsic Fire adds an elemental tension that makes compromise difficult.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 35,
        summary:
          'The Metal Ox\'s rigid routines and slow, methodical pace frustrate the Earth Horse\'s need for variety and movement. The Horse craves freedom; the Ox demands predictability. Metal\'s cutting energy wounds the Horse\'s open, optimistic nature, while the Horse\'s restlessness destabilizes the Ox\'s carefully maintained order.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 40,
        summary:
          'While both signs are energetic and social, the Fire Monkey\'s clever, strategic approach to life conflicts with the Earth Horse\'s straightforward directness. The Horse values honesty above all; the Monkey values effectiveness, even when it requires misdirection. This fundamental difference in values creates distrust that excitement alone cannot overcome.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Fire-natured animal, the Earth Horse benefits from a naturally productive elemental cycle. Fire signs resonate with the Horse's intrinsic nature and create Earth through the productive cycle, making these partnerships energizing and harmonious. Metal signs are supported by the Earth Horse (Earth creates Metal), creating relationships where the Horse's practical energy nurtures Metal's structured ambitions. Water signs present the most challenging dynamic — Water controls Fire (the Horse's natural element) and is controlled by Earth, creating a complex push-pull that requires conscious management. Wood signs feed the Horse's inner Fire, creating stimulating partnerships that can sometimes overheat if not balanced.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Horses thrive in careers that combine physical activity, social interaction, and practical problem-solving. They are not suited for desk-bound, purely intellectual work — they need movement, variety, and the satisfaction of tangible results. The ideal Earth Horse career involves working with people, being physically active, and producing outcomes that are clearly visible and measurably valuable.

The Earth Horse's work style is energetic, collaborative, and results-oriented. They are natural team players who contribute enthusiasm, practical skills, and an infectious optimism that lifts the morale of everyone around them. They perform best in environments that balance structure with flexibility — enough organization to provide direction, but enough freedom to pursue their instincts and adapt to changing circumstances.

Earth Horses often find career satisfaction in roles that serve their community or contribute to the practical wellbeing of others. They are drawn to work that makes a visible difference in people's lives — building homes, teaching skills, organizing events, managing properties, training athletes — and they derive genuine fulfillment from seeing the concrete impact of their efforts.`,

    idealCareers: [
      'Physical Therapist',
      'Real Estate Agent',
      'Event Planner',
      'Agricultural Manager',
      'Personal Trainer',
      'Tourism Director',
      'Project Manager',
      'Landscape Designer',
    ],

    financialStyle:
      'Earth Horses are practical, sensible money managers who balance the Horse\'s appetite for experience with Earth\'s instinct for security. They save steadily for long-term goals but also allocate funds for travel, social activities, and the experiences that keep their restless nature satisfied. Their financial approach is neither reckless nor miserly — they spend on things that genuinely improve their quality of life while maintaining a comfortable safety net. Their weakness is impulse spending during periods of restlessness or boredom, when the urge for novelty can override their otherwise sound financial judgment.',

    tips: [
      'Choose careers that allow you to combine your love of people with your practical skills. Roles in real estate, event management, physical therapy, or tourism let you interact socially while producing tangible, satisfying results.',
      'Manage your tendency to overcommit by establishing clear boundaries around your time and energy. Your desire to help everyone can leave you exhausted and resentful. Learn to say no to requests that do not align with your priorities or that push you beyond sustainable limits.',
      'Build variety into your work rather than changing careers when boredom strikes. The Earth Horse who finds ways to diversify their role — taking on new projects, learning new skills, or expanding into adjacent areas — satisfies their restlessness without sacrificing the stability they also need.',
      'Invest in your physical health as a career asset. Your energy and vitality are central to your professional effectiveness. Regular exercise, adequate rest, and attention to nutrition protect the physical capacity that powers your career success.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Horse is a warm, loyal, and genuinely fun partner who brings optimism, energy, and practical devotion to their relationships. They are not the most emotionally complex partners, but they compensate with consistent warmth, physical affection, and a genuine commitment to building a good life together. Being loved by an Earth Horse feels healthy, secure, and joyful — like being with a partner who truly enjoys your company and actively works to make the relationship thrive.

Earth Horses fall in love with relative ease — their social nature and open heart make them naturally receptive to romantic connection. However, their commitment deepens more slowly, as the Earth element introduces a practical assessment of long-term compatibility that the pure Horse might skip. They look for partners who are not just exciting but also reliable, not just attractive but also kind, not just fun but also capable of building a real life together.

The Earth Horse's primary challenge in love is the tension between their need for freedom and their desire for committed partnership. They want both — the adventure and the anchor — and they need a partner who understands that these desires are not contradictory but complementary. The Earth Horse who finds a partner willing to adventure alongside them while also creating a warm, stable home base discovers a love that is both exciting and enduring.`,

    loveStyle:
      'The Earth Horse loves through shared activity and practical devotion. Their ideal relationship is one of genuine companionship — doing things together, exploring together, building together. They express affection physically and actively, through warm embraces, playful touch, and a willingness to help with anything that needs doing. They are not poets or philosophers of love but practitioners of it — showing up every day with energy, warmth, and a cheerful determination to make the relationship work. Their love is robust, healthy, and sustaining rather than dramatic or consuming.',

    idealPartnerTraits: [
      'Active and Adventurous',
      'Emotionally Grounded',
      'Supportive of Independence',
      'Warm and Affectionate',
      'Practical',
    ],

    tips: [
      'Develop your ability to engage with deep emotions rather than deflecting them with cheerfulness. Your partner sometimes needs you to sit with their sadness, anger, or fear rather than immediately trying to fix or brighten the situation. Practice saying "I hear you" before offering solutions.',
      'Communicate your need for freedom as a positive choice rather than an escape from the relationship. Frame your independent activities as something that recharges you for the partnership rather than as time away from a partner who is too much.',
      'Create shared adventures that feed both your need for excitement and your relationship\'s need for connection. Regular travel, new experiences, and physical activities done together satisfy the Earth Horse\'s restlessness while strengthening the bond.',
      'Make time for quiet intimacy alongside active partnership. Earth Horses naturally gravitate toward doing, but relationships also need being — quiet evenings, unhurried conversations, and simply being present with each other without an agenda.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Horse possesses a vigorous, athletic constitution that thrives on movement and fresh air. In Traditional Chinese Medicine, the Horse's Fire nature governs the Heart and circulatory system, while the Earth element rules the Stomach and Spleen. This creates a constitution where cardiovascular and digestive health are closely interlinked — when one system thrives, both benefit; when one struggles, both suffer.

The most common Earth Horse health pattern is the consequence of their active lifestyle: overuse injuries, joint problems, and the cumulative effects of sustained physical demand. Earth Horses are inclined to push through physical discomfort rather than rest, which can transform minor strains into chronic conditions. Their digestive system, governed by the Earth element, is sensitive to irregular eating patterns and the tendency to eat on the go.

The Earth Horse's health strategy should prioritize injury prevention, regular recovery periods, and a diet that supports both their active lifestyle and their Earth-element digestive needs. They respond best to outdoor exercise and activities that combine physical challenge with social connection.`,

    bodyAreas: ['Heart', 'Stomach', 'Legs', 'Joints'],

    exercises: [
      'Horseback riding',
      'Trail running',
      'Cycling',
      'Team sports',
    ],

    dietTips: [
      'Fuel your active lifestyle with balanced, whole-food meals eaten at consistent times. The Earth Horse\'s tendency to eat on the go or skip meals disrupts their Earth-element digestive function. Prioritize sitting down for proper meals even during busy periods.',
      'Support cardiovascular health with omega-3 rich foods. Fatty fish, walnuts, flaxseed, and olive oil protect the heart and circulation that the Earth Horse\'s active lifestyle depends on.',
      'Incorporate anti-inflammatory foods to protect joints from the wear of sustained physical activity. Turmeric, ginger, berries, leafy greens, and fatty fish reduce the chronic inflammation that athletic Earth Horses are prone to developing.',
      'Stay well hydrated, especially during and after physical activity. The Horse\'s Fire constitution burns through fluids quickly, and the Earth element\'s digestive function depends on adequate hydration to process nutrients effectively.',
    ],

    mentalHealth:
      'The Earth Horse\'s primary mental health challenge is restlessness that escalates into anxiety when they feel trapped or restricted. They need movement — both physical and psychological — to maintain emotional equilibrium, and enforced stillness (through injury, illness, or constraining life circumstances) can trigger significant distress. Earth Horses benefit most from mental health approaches that incorporate physical movement: walking therapy, exercise-based mood management, and outdoor mindfulness practices. They also need social connection to stay mentally healthy; isolation is toxic to this naturally gregarious sign. When Earth Horses become uncharacteristically withdrawn or their usual optimism dims, these are significant warning signs that should be addressed promptly through increased social engagement, physical activity, and if necessary, professional support.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 7, 8],
    colors: ['Yellow', 'Ochre', 'Warm Brown'],
    direction: 'South',
    gemstones: ['Citrine', 'Tiger\'s Eye', 'Amber'],
    flowers: ['Sunflower', 'Daisy', 'Calendula'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH HORSES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Nelson Mandela',
        profession: 'President/Activist',
        birthYear: 1918,
        description:
          'Nelson Mandela\'s extraordinary journey — from imprisoned activist to the father of a democratic nation — exemplifies the Earth Horse\'s combination of tireless energy and grounded, patient determination. His ability to endure 27 years of imprisonment without losing his essential warmth, optimism, and vision reflects the Earth Horse\'s remarkable resilience and unbreakable spirit.',
      },
      {
        name: 'Kobe Bryant',
        profession: 'Basketball Player',
        birthYear: 1978,
        description:
          'Kobe Bryant embodied the Earth Horse\'s rare combination of explosive physical talent and disciplined, methodical preparation. His legendary work ethic — arriving hours before teammates for additional practice — reflects Earth\'s grounding influence on the Horse\'s natural athletic gifts. His determination to build a lasting legacy beyond basketball demonstrates the sign\'s drive for enduring impact.',
      },
      {
        name: 'Ashton Kutcher',
        profession: 'Actor/Entrepreneur',
        birthYear: 1978,
        description:
          'Ashton Kutcher\'s evolution from comedic actor to serious tech investor and anti-trafficking activist illustrates the Earth Horse\'s ability to combine social warmth with practical, result-oriented action. His investment portfolio and humanitarian work demonstrate the sign\'s gift for channeling energy and charisma into tangible, lasting impact.',
      },
      {
        name: 'Ingmar Bergman',
        profession: 'Film Director',
        birthYear: 1918,
        description:
          'Ingmar Bergman\'s prolific career — spanning six decades and producing dozens of masterpieces — demonstrates the Earth Horse\'s extraordinary productive endurance. His ability to explore profound emotional and philosophical themes through the practical craft of filmmaking reflects the sign\'s unique combination of depth and pragmatic execution.',
      },
      {
        name: 'Zoe Saldana',
        profession: 'Actress',
        birthYear: 1978,
        description:
          'Zoe Saldana\'s career in physically demanding blockbuster roles demonstrates the Earth Horse\'s athletic vitality and practical determination. Her ability to combine intense physical performance with emotional depth across sustained franchise commitments reflects the sign\'s endurance and reliable, energetic professionalism.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Horse occupies a position of great honor in Chinese mythology and culture as a symbol of speed, freedom, and the martial spirit. In Chinese tradition, the Horse is associated with the earthly branch Wu (午), representing high noon and the peak of summer — the zenith of yang energy. The famous "Heavenly Horses" of Chinese legend were considered divine beings that could carry their riders between heaven and earth, symbolizing the transcendence of physical limitations through courage and vitality.

When the Earth element grounds this celestial animal, it transforms the mythological Horse from a heavenly messenger into a terrestrial guardian — the Horse that tills the fields, carries goods across trade routes, and serves as a reliable companion through the practical challenges of daily life. The Earth Horse in Chinese tradition was associated with prosperous agriculture, successful commerce, and the building of roads and infrastructure that connected communities. Earth Horse years were considered auspicious for travel, trade, and the establishment of new communities — endeavors that required both the Horse's energy and Earth's practical foundation.`,

    symbolism: `The Earth Horse symbolizes freedom made productive and energy made sustainable. In Wu Xing symbolism, this combination represents the transformation of raw vitality (the Horse's Fire nature) into material sustenance (Earth's generative power). It is the energy of the harvest — the moment when the sun's summer intensity is captured in the food that sustains communities through winter.

The Earth Horse also symbolizes the balance between adventure and responsibility. In a zodiac system that often presents these as opposing forces, the Earth Horse demonstrates that they can coexist — that one can be both free and reliable, both adventurous and grounded, both independent and deeply connected to community.`,

    modernInterpretation: `In contemporary culture, the Earth Horse archetype resonates with the ideal of the active, engaged life lived with both enthusiasm and responsibility. In an era where burnout and disconnection are epidemic, the Earth Horse represents a sustainable model of engagement — high energy balanced by practical self-care, social warmth grounded in genuine rather than performative connection, and optimism rooted in realistic assessment rather than denial.

The Earth Horse's modern relevance extends to the growing appreciation for practical skills, community building, and the value of showing up reliably. In a culture that often celebrates disruption and novelty, the Earth Horse reminds us that the most valuable people in any community are often those who combine energy and enthusiasm with the simple, powerful commitment to being dependably present.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
