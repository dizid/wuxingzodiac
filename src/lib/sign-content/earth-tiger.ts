// ============================================
// EARTH TIGER (戊寅) — The Patient Warrior
// ============================================
// The Earth Tiger tempers the Tiger's fierce, impulsive
// nature with grounding stability, creating a powerful
// leader who combines courage with measured judgment.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-tiger',
  profile: getProfileBySlug('earth-tiger')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Tiger is the most grounded and strategically patient expression of the Tiger archetype. While other Tigers charge headlong into battle, the Earth Tiger surveys the terrain, assesses the opposition, and strikes only when victory is assured. The Earth element does not diminish the Tiger's legendary courage or commanding presence — it channels these qualities through a filter of pragmatism and deliberation that makes this sign one of the most effective leaders in the Chinese zodiac.

People born under this sign carry themselves with a quiet authority that commands respect without demanding attention. They possess the Tiger's natural charisma and physical presence, but express it through steady confidence rather than dramatic displays. An Earth Tiger enters a room and people instinctively feel safer — not because of any showy display of power, but because this sign radiates the unmistakable competence of someone who has thought through the contingencies and is prepared for whatever comes.

The Earth Tiger's greatest gift is the ability to combine vision with execution. Where other Tiger variants may inspire grand ambitions but struggle with follow-through, the Earth Tiger builds practical pathways to their goals. They are the generals who not only plan brilliant campaigns but also ensure the supply lines hold, the troops are rested, and the logistics are airtight. This rare combination of strategic boldness and operational thoroughness makes them exceptionally effective in any leadership role.`,

    coreTraits: [
      'Authoritative',
      'Measured',
      'Courageous',
      'Protective',
      'Disciplined',
      'Pragmatic',
    ],

    strengths: [
      {
        trait: 'Strategic Leadership',
        description:
          'Earth Tigers are born leaders who combine the Tiger\'s natural authority with Earth\'s methodical approach. They inspire confidence through competence rather than charisma alone, earning loyalty by consistently making sound decisions under pressure. Their leadership style is inclusive but decisive — they listen carefully, then act with conviction.',
      },
      {
        trait: 'Measured Courage',
        description:
          'The Earth Tiger\'s bravery is not reckless but calculated. They face danger and difficulty with calm resolve, having already assessed the risks and prepared for contingencies. This measured courage makes them far more effective than impulsive heroes — they take the right risks at the right time, dramatically improving the odds of success.',
      },
      {
        trait: 'Protective Strength',
        description:
          'Earth Tigers possess a fierce protective instinct toward those in their care. They create environments of safety and order — whether in families, teams, or communities — and will stand against any threat to the people they have committed to defending. This protective drive is practical rather than performative, expressed through preparation and vigilance.',
      },
      {
        trait: 'Grounded Integrity',
        description:
          'The Earth element gives the Tiger a moral solidity that others find deeply reassuring. Earth Tigers have strong, clearly defined values and they live by them consistently. They do not bend their principles for convenience, popularity, or short-term gain. This integrity creates a foundation of trust that strengthens every relationship and institution they are part of.',
      },
    ],

    challenges: [
      {
        trait: 'Controlling Tendencies',
        description:
          'The Earth Tiger\'s combination of protectiveness and competence can evolve into a need to control every aspect of their environment. They may micromanage, impose their standards on others, or struggle to delegate, believing — often correctly — that they could do it better themselves. This control undermines the very trust they work so hard to build.',
      },
      {
        trait: 'Judgmental Rigidity',
        description:
          'Earth Tigers can be harsh judges of those who fail to meet their high standards. Their strong moral compass, while admirable, can become rigid and unforgiving when applied to others. They may dismiss people too quickly based on perceived shortcomings, missing the potential for growth and the nuance of human imperfection.',
      },
      {
        trait: 'Suppressed Passion',
        description:
          'In their effort to maintain control and composure, Earth Tigers may suppress the very passion and spontaneity that makes the Tiger archetype so magnetic. They can become so focused on being responsible and measured that they lose access to the wild, creative energy that fuels their most inspired moments.',
      },
      {
        trait: 'Difficulty Asking for Help',
        description:
          'Earth Tigers pride themselves on being the protector, the one who handles problems and shields others from difficulty. This self-reliance makes it extremely difficult for them to acknowledge their own vulnerability or ask for help. They carry burdens silently until the weight becomes unsustainable, then feel ashamed of their inability to cope alone.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Tiger is naturally associated with the Wood element — the energy of growth, expansion, and the spring season. When Earth meets this inherently Wood-natured animal, it creates a productive tension between expansion and containment. Wood controls Earth in the destructive cycle, meaning the Tiger's natural impulse to grow and push boundaries constantly tests the Earth element's desire for stability. However, this tension is precisely what makes the Earth Tiger so formidable: the Wood energy provides drive and ambition, while the Earth energy provides the discipline and patience to channel that drive effectively. The Earth Tiger is like a mighty tree with deep roots — able to reach great heights precisely because it is firmly anchored in the ground.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Tiger's compatibility profile favors partners who respect their authority while possessing enough inner strength to be genuine equals. They are drawn to signs that share their values of integrity and loyalty but are repelled by those they perceive as weak, dishonest, or superficial. The ideal Earth Tiger partner is someone who can match their strength without competing for dominance — a companion who stands beside them rather than behind or in front of them.

In traditional Chinese astrology, the Tiger belongs to the Third Trine alongside the Horse and the Dog — three signs united by courage, action, and a strong sense of justice. These natural allies share the Tiger's willingness to fight for what they believe in and communicate through a shared language of honor and directness. The Tiger's most challenging relationship is with the Monkey, where the Tiger's straightforward power clashes with the Monkey's cleverness and trickery.`,

    bestMatches: [
      {
        slug: 'water-horse',
        name: 'Water Horse',
        score: 90,
        summary:
          'A dynamic partnership where the Water Horse\'s adaptability and intuition complement the Earth Tiger\'s measured strength. Both signs value freedom and action, but Water\'s fluidity prevents the power struggles that more rigid pairings create. The Water Horse adds emotional depth and spontaneity to the relationship, while the Earth Tiger provides the stability and protection that allows the Horse to roam freely.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 88,
        summary:
          'Two Earth signs from the same Trine create a partnership of remarkable trust and mutual loyalty. The Earth Dog\'s unwavering faithfulness meets the Earth Tiger\'s protective strength, forming a bond built on shared values and deep respect. Both signs communicate through action rather than words, understanding each other\'s needs intuitively.',
      },
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 82,
        summary:
          'The Fire Pig\'s warmth, generosity, and optimism soften the Earth Tiger\'s sometimes austere demeanor. Fire feeds Earth in the productive cycle, energizing the Tiger without threatening their sense of control. The Pig\'s natural kindness and lack of competitive edge make them one of the few signs that the protective Earth Tiger can fully relax around.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 30,
        summary:
          'The Tiger-Monkey opposition is one of the zodiac\'s most intense rivalries, and the Metal element adds a cutting edge. The Metal Monkey\'s clever manipulation and shape-shifting nature deeply offends the Earth Tiger\'s straightforward integrity. The Tiger sees the Monkey as dishonest; the Monkey sees the Tiger as rigid and humorless. Trust is nearly impossible to establish.',
      },
      {
        slug: 'fire-snake',
        name: 'Fire Snake',
        score: 35,
        summary:
          'The Fire Snake\'s secretive, calculating nature clashes with the Earth Tiger\'s preference for direct, transparent interaction. The Tiger demands honesty; the Snake operates through subtlety and misdirection. While both signs are powerful, their approaches to power are so fundamentally different that mutual respect is difficult to sustain.',
      },
      {
        slug: 'wood-ox',
        name: 'Wood Ox',
        score: 42,
        summary:
          'Two stubborn, strong-willed signs whose determination becomes deadlock in partnership. The Wood Ox\'s slow, methodical pace frustrates the Earth Tiger\'s need for action, while the Tiger\'s assertive authority threatens the Ox\'s quiet independence. Both signs want to lead, but neither wants to follow, creating chronic tension over direction and decision-making.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Wood-natured animal, the Earth Tiger has a complex relationship with the elements. Fire signs are natural energizers — Fire creates Earth in the productive cycle, infusing the Earth Tiger with passion and vitality without threatening their stability. Metal signs benefit from the Earth Tiger's support (Earth creates Metal), creating harmonious partnerships where the Tiger's strength nurtures Metal's ambitions. Water signs can soften and nourish the Earth Tiger, adding emotional depth to their sometimes rigid nature. Wood signs present the most complex dynamic: Wood controls Earth, meaning strong Wood-element partners may challenge the Earth Tiger's authority in ways that are ultimately growthful but initially uncomfortable.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Tigers excel in careers that combine leadership with tangible results. They are natural managers, directors, and commanders — people who thrive when given authority over projects, teams, or operations and held accountable for outcomes. Unlike more theoretical or creative signs, the Earth Tiger measures success in concrete terms: projects delivered, problems solved, people protected, goals achieved.

The ideal Earth Tiger career places them in a position of responsibility where their combination of courage and pragmatism can make a real difference. They are drawn to fields where the stakes are genuine — law enforcement, military leadership, emergency management, corporate operations — and where their measured, decisive nature translates directly into safety, efficiency, and success. They have little patience for purely abstract or decorative work.

Earth Tigers are not suited for subordinate roles, especially under leaders they do not respect. They need either to lead or to work autonomously within a clearly defined domain. The Earth Tiger who finds themselves micromanaged or relegated to a purely advisory capacity will chafe, resist, and eventually leave — they need to be in the arena, not on the sidelines.`,

    idealCareers: [
      'Military Officer',
      'Police Commander',
      'Corporate Operations Director',
      'Construction Company Owner',
      'Emergency Management Director',
      'School Principal',
      'Structural Engineer',
      'Property Developer',
    ],

    financialStyle:
      'Earth Tigers are prudent but not timid with money. They build financial security through steady accumulation and strategic investment in tangible assets — real estate, infrastructure, and established businesses. They are willing to take calculated risks when the potential reward justifies the exposure, but they insist on thorough due diligence first. Their financial weakness is a tendency to overinvest in things they can control directly, undervaluing diversification and passive investment strategies. The Earth Tiger who learns to trust professional financial advisors with a portion of their portfolio while maintaining hands-on control of the rest achieves the best of both worlds.',

    tips: [
      'Seek leadership roles in organizations that value decisive action and accountability. Your strategic patience and practical courage are most valued in environments where results matter more than politics and where leaders are judged by outcomes rather than appearances.',
      'Develop your ability to delegate without micromanaging. Your high standards and protective instincts make it difficult to trust others with important tasks, but effective leadership requires multiplying your impact through empowered teams. Practice graduated trust — start with small delegations and build as confidence grows.',
      'Channel your protective instincts into mentoring. The Earth Tiger makes an exceptional mentor — firm, fair, and genuinely invested in others\' development. Mentoring younger professionals satisfies your need to protect and guide while building a legacy of capable leaders.',
      'Guard against career stagnation driven by comfort. Your love of stability can keep you in a role longer than serves your growth. Evaluate your career trajectory regularly and be willing to take measured risks for advancement, even when your current position feels safe and familiar.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Tiger is a powerful, devoted, and deeply protective partner. They approach relationships with the same measured intensity they bring to everything else — observing carefully, committing deliberately, and defending fiercely. An Earth Tiger in love is a formidable ally: they will move mountains to protect and provide for their partner, standing between their loved ones and any threat with calm, immovable resolve.

The Earth Tiger's romantic style is more quiet devotion than dramatic passion. They express love through consistent presence, practical support, and a protective watchfulness that notices problems before they become crises. They are not naturally effusive with words or gestures of affection, but the depth of their commitment is unmistakable to anyone who understands their language of love.

The greatest challenge in Earth Tiger relationships is the balance between protection and control. Their genuine desire to keep their partner safe can slide into possessiveness and decision-making on their partner's behalf. The healthiest Earth Tiger relationships are those where they learn to protect without dominating — to offer strength as a resource their partner can draw on rather than a cage they must live within.`,

    loveStyle:
      'The Earth Tiger loves with protective devotion and quiet strength. They are not flashy romantics but deeply committed partners who demonstrate love through loyalty, provision, and the creation of a secure, stable home. Their physical affection tends to be grounding rather than fiery — strong embraces, reassuring touch, a steady presence during difficult times. They value honesty and directness in relationships and struggle with partners who play games or withhold their true feelings. For the Earth Tiger, love is a serious commitment — not something to be entered lightly or abandoned when challenges arise.',

    idealPartnerTraits: [
      'Self-Assured',
      'Honest and Direct',
      'Emotionally Mature',
      'Appreciative of Protection',
      'Independent',
    ],

    tips: [
      'Distinguish between protecting and controlling your partner. Ask yourself: am I acting out of genuine concern for their safety, or out of my own need to manage uncertainty? True protection empowers the other person; control diminishes them.',
      'Express vulnerability alongside strength. Your partner needs to see your human side — your fears, uncertainties, and tender moments — not just your capable, commanding exterior. Sharing vulnerability builds deeper intimacy than being perpetually strong.',
      'Respect your partner\'s autonomy in decision-making. Even when you believe your judgment is correct, allow your partner the dignity of making their own choices. Offer counsel when asked, but resist the urge to override their decisions with your authority.',
      'Create rituals of connection that counterbalance your serious nature. Earth Tigers benefit from regular shared activities that are purely fun — cooking together, playing games, exploring new places — that remind both partners that the relationship is a source of joy, not just security.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Tiger possesses a powerful constitution that combines the Tiger's natural physical strength with Earth's enduring stamina. These are people built for sustained effort and physical resilience, capable of maintaining heavy workloads and recovering from setbacks that would sideline less robust signs. However, their very toughness can become a liability when it causes them to ignore early warning signs and push through pain that demands attention.

In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen, while the Tiger's Wood nature connects to the Liver and Gallbladder. This creates a constitution where digestive health and liver function are closely interlinked. Stress, overwork, and suppressed anger — all common Earth Tiger patterns — can manifest as digestive disorders, muscular tension (especially in the shoulders and jaw), and conditions related to Liver Qi stagnation.

The Earth Tiger's health strategy should focus on regular physical outlets for their considerable energy, stress management practices that address their tendency to carry tension silently, and a diet that supports both their digestive system and their need for sustained, powerful energy output.`,

    bodyAreas: ['Stomach', 'Liver', 'Muscles', 'Joints'],

    exercises: [
      'Martial arts',
      'Hiking and mountain climbing',
      'Weight training',
      'Team sports',
    ],

    dietTips: [
      'Build meals around high-quality protein and complex carbohydrates to sustain the Earth Tiger\'s significant energy demands. Lean meats, legumes, whole grains, and root vegetables provide the steady fuel this sign needs for sustained physical and mental output.',
      'Support liver health with bitter greens and cruciferous vegetables. Kale, broccoli, dandelion greens, and artichoke help the liver process the stress hormones that Earth Tigers accumulate through their high-pressure lifestyles.',
      'Moderate alcohol consumption carefully. The Tiger\'s social nature combined with Earth\'s love of comfort can make drinking a habitual stress-relief mechanism. The Earth Tiger\'s liver is particularly susceptible to overload, making moderation essential.',
      'Incorporate warming digestive spices. Turmeric, ginger, fennel, and cinnamon support the Earth element\'s digestive function while their anti-inflammatory properties help manage the muscular tension that Earth Tigers carry chronically.',
    ],

    mentalHealth:
      'The Earth Tiger\'s primary mental health challenge is the accumulated burden of always being the strong one. Their identity is built around competence, control, and protecting others, which makes it extraordinarily difficult for them to acknowledge when they are struggling. Chronic stress, suppressed anger, and emotional isolation are the predictable consequences of a life lived in perpetual warrior mode. Physical activity — particularly martial arts or competitive sports that provide a structured outlet for aggression — is essential for the Earth Tiger\'s psychological balance. They also benefit greatly from close friendships with other strong personalities who can see past their armor and offer support without pity. Therapy can be transformative for Earth Tigers, but they typically resist it until crisis forces their hand. Framing therapy as strategic self-optimization rather than emotional rescue can help overcome their resistance.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Olive Green', 'Gold', 'Brown'],
    direction: 'Northeast',
    gemstones: ['Tiger\'s Eye', 'Jasper', 'Agate'],
    flowers: ['Orchid', 'Bamboo', 'Plum Blossom'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH TIGERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Rudolf Nureyev',
        profession: 'Ballet Dancer',
        birthYear: 1938,
        description:
          'Rudolf Nureyev combined the Tiger\'s fierce physical power with Earth\'s disciplined endurance to become arguably the greatest male ballet dancer in history. His legendary defection from the Soviet Union demonstrated the Tiger\'s fearless courage, while his decades of grueling physical dedication reflected Earth\'s patient persistence.',
      },
      {
        name: 'Kofi Annan',
        profession: 'UN Secretary-General',
        birthYear: 1938,
        description:
          'Nobel Peace Prize laureate Kofi Annan embodied the Earth Tiger\'s ideal expression: measured authority deployed in service of protection and justice. His calm, steady leadership of the United Nations during turbulent times demonstrated the Earth Tiger\'s ability to maintain composure and moral clarity under immense pressure.',
      },
      {
        name: 'Natalia Makarova',
        profession: 'Ballet Dancer',
        birthYear: 1938,
        description:
          'Like Nureyev, Natalia Makarova defected from the Soviet Union to pursue artistic freedom — a quintessential Tiger act of courage. Her subsequent career combined extraordinary technical mastery with deep emotional expressiveness, reflecting the Earth Tiger\'s ability to channel raw power through disciplined, purposeful form.',
      },
      {
        name: 'Christopher Lloyd',
        profession: 'Actor',
        birthYear: 1938,
        description:
          'Christopher Lloyd\'s ability to portray characters of commanding eccentricity — from Doc Brown to Judge Doom — reflects the Earth Tiger\'s combination of powerful presence and grounded discipline. His decades-long career of sustained character work demonstrates the Earth element\'s patient endurance channeled through the Tiger\'s unmistakable intensity.',
      },
      {
        name: 'Jon Voight',
        profession: 'Actor',
        birthYear: 1938,
        description:
          'Jon Voight\'s career exemplifies the Earth Tiger\'s commanding presence and grounded intensity. His Academy Award-winning performance in Coming Home and his portrayal of complex authority figures throughout his career reflect the sign\'s combination of physical power, moral conviction, and patient craftsmanship.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Tiger holds a position of supreme reverence in Chinese mythology as the King of All Beasts — a title earned through courage, power, and the protective ferocity that guards the natural order. In traditional Chinese cosmology, the White Tiger (Baihu) is one of the Four Celestial Guardians, ruling the western sky and the autumn season. The Tiger is associated with bravery, military prowess, and the protection of the innocent from evil forces.

When the Earth element infuses this mighty animal, the mythology takes on dimensions of territorial guardianship and foundational strength. The Earth Tiger is not the marauding predator but the mountain guardian — the sentinel who watches over the land and its people from a position of grounded authority. In Chinese folk religion, Earth Tiger imagery was often placed at the foundations of important buildings and at the gates of villages, combining the Tiger's protective power with Earth's stability to create an unbreachable spiritual defense.`,

    symbolism: `The Earth Tiger symbolizes disciplined power and protective authority. In Wu Xing symbolism, this combination represents the paradox of contained wildness — the tremendous force of nature channeled through stable, purposeful structures. The Tiger's Wood nature pushing against Earth's containment creates a tension that generates extraordinary strength, much as a compressed spring stores far more energy than an uncoiled one.

The Earth Tiger is also a powerful symbol of righteous leadership. Unlike signs that lead through manipulation or charisma, the Earth Tiger leads through example, integrity, and the simple willingness to stand between danger and those who cannot protect themselves. This makes it a symbol revered in military traditions and governance throughout East Asian culture.`,

    modernInterpretation: `In contemporary interpretation, the Earth Tiger archetype resonates with modern ideals of ethical leadership and protective service. In an era where leadership is often associated with self-promotion and political maneuvering, the Earth Tiger represents an older, more grounded model: the leader who earns authority through competence, maintains it through integrity, and uses it in service of those they are responsible for protecting.

The Earth Tiger's modern relevance extends to conversations about sustainable strength. Where our culture often equates power with explosive force or rapid disruption, the Earth Tiger reminds us that the most enduring power is patient, grounded, and disciplined. The most effective leaders, parents, and protectors are not those who react most dramatically to threats, but those who have prepared most thoroughly and respond most calmly when crisis arrives.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
