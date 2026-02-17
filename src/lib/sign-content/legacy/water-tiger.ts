// ============================================
// WATER TIGER (壬寅) — The Intuitive Hunter
// ============================================
// The Water Tiger combines the Tiger's fierce courage and
// natural authority with Water's intuition, wisdom, and
// adaptive intelligence — producing a leader who strikes
// with precision guided by deep inner knowing.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-tiger',
  profile: getProfileBySlug('water-tiger')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Tiger is the most intuitive and emotionally perceptive of all Tiger variants. Where the Tiger is already defined by courage, power, and commanding presence, the Water element adds a layer of depth, sensitivity, and strategic patience that transforms raw ferocity into something far more formidable. The Water Tiger does not merely charge — it reads the terrain, senses the moment, and strikes with the precision of a predator who has already seen the outcome before making its move.

What makes the Water Tiger exceptional is the fusion of strength and sensitivity. They possess the Tiger's natural authority and physical magnetism while also carrying Water's gift for reading people, sensing undercurrents, and understanding the emotional dynamics that drive human behavior. This combination produces a leader who inspires not through intimidation but through a deep, almost mystical understanding of what people need and when they need it. The Water Tiger\'s gaze seems to see through surface appearances to the truth beneath.

Beneath the confident exterior, the Water Tiger carries a rich emotional world that they share selectively. They feel the weight of the world more keenly than other Tigers, absorbing the suffering and joy of those around them with a sensitivity that can be both a gift and a burden. When this emotional depth is channeled constructively, it produces extraordinary compassion and visionary leadership. When it overwhelms, the Water Tiger may retreat into solitude, emerging only when they have processed what they have absorbed and found their center again.`,

    coreTraits: [
      'Courageous',
      'Intuitive',
      'Magnetic',
      'Compassionate',
      'Strategic',
      'Independent',
    ],

    strengths: [
      {
        trait: 'Visionary Leadership',
        description:
          'The Water Tiger combines the Tiger\'s natural command authority with Water\'s ability to see beyond the immediate. They lead with a vision that encompasses not just strategic goals but the human dynamics necessary to achieve them. People follow the Water Tiger because they sense a leader who truly understands what is at stake and genuinely cares about those they lead.',
      },
      {
        trait: 'Intuitive Precision',
        description:
          'While other Tigers may rely on raw power, the Water Tiger strikes with surgical accuracy. Their Water-enhanced intuition allows them to sense the right moment, the right approach, and the right words with uncanny precision. This makes them devastatingly effective in negotiations, crisis management, and any situation requiring split-second judgment.',
      },
      {
        trait: 'Empathetic Strength',
        description:
          'The Water Tiger\'s most remarkable quality is their ability to be simultaneously strong and compassionate. They can make difficult decisions without losing sight of the human cost, hold firm boundaries while remaining genuinely caring, and fight fiercely for others without losing their own center. This combination of power and heart is extraordinarily rare.',
      },
      {
        trait: 'Adaptive Courage',
        description:
          'Unlike more rigid Tiger variants that charge straight ahead regardless of circumstances, the Water Tiger adapts its approach to match the situation. They can be thunderously bold when boldness is required and quietly patient when patience serves better. This flexibility makes their courage more effective and sustainable than the brute-force approach of other Tigers.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Overwhelm',
        description:
          'The Water Tiger absorbs emotional energy from their environment like a sponge, and this sensitivity can become overwhelming in chaotic or hostile settings. They may experience sudden mood swings, inexplicable fatigue, or the need to withdraw completely when they have absorbed too much. Learning to distinguish their own emotions from those they have absorbed from others is a critical life skill.',
      },
      {
        trait: 'Trust Issues',
        description:
          'The Water Tiger\'s combination of power and perceptiveness makes them acutely aware of deception and hidden agendas. While this awareness protects them, it can also make them suspicious even when suspicion is unwarranted. They may push away potential allies and partners by demanding proof of loyalty that no one could reasonably provide.',
      },
      {
        trait: 'Brooding Intensity',
        description:
          'When wounded or frustrated, the Water Tiger does not lash out immediately — they withdraw into a brooding intensity that can last days or weeks. During these periods, they replay events obsessively, building narratives of betrayal or failure that may bear little resemblance to reality. Partners and colleagues learn to dread these withdrawals, which feel like emotional abandonment.',
      },
      {
        trait: 'Controlling Tendencies',
        description:
          'The Water Tiger\'s strong instincts and perceptive nature can lead them to believe they always know best. They may attempt to control situations, relationships, and outcomes with an intensity that, while well-intentioned, leaves little room for others\' autonomy. The growth challenge is learning that protecting and controlling are not the same thing.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Tiger is associated with Wood energy — growth, expansion, and the upward thrust of spring. When Water is layered onto this Wood-natured animal, the combination follows the productive cycle: Water nourishes Wood, feeding the Tiger\'s natural vitality with depth, intuition, and emotional intelligence. This is one of the most naturally harmonious element-animal pairings in the zodiac.

The Water-Wood synergy gives the Water Tiger extraordinary internal resources. Water\'s depth fuels the Tiger\'s expansive energy, producing a personality of both substance and dynamism. The Water Tiger can sustain their efforts longer than other Tiger variants because they draw from a deeper well of emotional and intuitive energy. However, this same depth means that when the Water Tiger is depleted — emotionally drained, spiritually exhausted — the recovery process takes longer and requires genuine solitude and reflection. The Water Tiger benefits from practices that maintain the flow between their emotional depth (Water) and their active, outward energy (Wood): meditation paired with vigorous exercise, solitary reflection followed by social engagement.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Tiger's compatibility is shaped by their need for a partner who can match both their strength and their depth. They are drawn to individuals who possess their own center of gravity — people who neither crumble under the Tiger's intensity nor attempt to dominate it. The Tiger belongs to the Third Trine alongside the Horse and the Dog — adventurous, courageous signs that share the Tiger's love of action and justice. These natural allies understand the Water Tiger's need for both independence and meaningful connection.

The Tiger sits in opposition to the Monkey on the zodiac wheel, creating a complex dynamic of attraction and friction. The Water Tiger's emotional depth can either bridge this gap or deepen it, depending on the Monkey variant involved.`,

    bestMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 93,
        summary:
          'An ideal partnership of mutual devotion and complementary strengths. The Earth Dog\'s unwavering loyalty and principled nature resonate deeply with the Water Tiger\'s protective instincts. The Dog provides emotional security without attempting to control, while the Tiger brings excitement and vision to the Dog\'s steady life. Earth contains Water without restricting it, creating natural balance.',
      },
      {
        slug: 'wood-horse',
        name: 'Wood Horse',
        score: 89,
        summary:
          'A dynamic, high-energy partnership built on shared courage and mutual respect for independence. The Wood Horse\'s adventurous spirit and natural optimism perfectly complement the Water Tiger\'s strategic depth. Both signs value freedom and authenticity, creating a relationship where neither feels constrained. Water nourishes Wood, meaning the Tiger naturally supports the Horse\'s growth.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 85,
        summary:
          'A deeply nurturing connection between two Water signs with complementary temperaments. The Water Pig\'s generous, warm-hearted nature provides the emotional safety the Water Tiger craves but rarely admits to needing. The Pig\'s acceptance and lack of judgment allow the Tiger to lower their guard completely — a rare and precious experience for this guarded sign.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 35,
        summary:
          'The Tiger and Monkey sit opposite each other on the zodiac wheel, and the element clash intensifies this natural tension. The Fire Monkey\'s quicksilver mind and playful trickery unsettle the Water Tiger\'s need for authenticity and depth. The Tiger perceives the Monkey as superficial and untrustworthy; the Monkey finds the Tiger overbearing and humorless.',
      },
      {
        slug: 'metal-snake',
        name: 'Metal Snake',
        score: 38,
        summary:
          'Two intensely perceptive signs that read each other too well for comfort. The Metal Snake\'s calculating precision and cool detachment clash with the Water Tiger\'s emotional warmth and protective instincts. Both are secretive and strategic, leading to a relationship built on mutual suspicion rather than trust. Metal cuts through Water, creating a dynamic of control and resistance.',
      },
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 42,
        summary:
          'The Ox\'s methodical stubbornness collides with the Tiger\'s impulsive authority, creating frequent standoffs. The Earth Ox\'s rigid routines frustrate the Water Tiger\'s need for spontaneity, while the Tiger\'s emotional intensity overwhelms the Ox\'s preference for calm stability. Mutual respect for each other\'s strength exists but rarely translates into easy companionship.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Wood-natured animal, the Water Tiger benefits from the productive cycle's most nourishing flow: Water feeds Wood. This internal harmony means the Water Tiger has a naturally balanced relationship with their own energy. Externally, Metal signs support the Water Tiger — Metal generates Water, providing the structure and discipline that channels the Tiger's power effectively. Wood signs create vibrant, growth-oriented partnerships where mutual nourishment occurs naturally. Earth signs provide grounding that the Tiger needs, though the controlling dynamic (Earth dams Water) can feel restrictive. Fire signs present a challenging interaction — Water controls Fire, which can dampen the Fire partner's enthusiasm, while the Tiger's Wood nature feeds Fire, creating a complex push-pull dynamic that requires maturity to navigate.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Tiger excels in careers that demand both courage and emotional intelligence — roles where the ability to read situations, inspire people, and make bold decisions under pressure determines success. They are natural crisis leaders, the people who remain calm and decisive when everyone else is panicking, not because they do not feel the pressure but because their Water depth provides a reservoir of composure that the Tiger's courage can draw upon.

The ideal Water Tiger career combines meaningful impact with personal autonomy. They cannot tolerate work that feels trivial or positions that limit their ability to act on their instincts. Human rights advocacy, emergency management, therapeutic work, investigative journalism, and military or law enforcement leadership all provide the combination of purpose, challenge, and independence that the Water Tiger requires.

The Water Tiger's emotional intelligence also makes them exceptional in people-centered professions. They are remarkably effective therapists, counselors, and coaches — their Tiger authority creates a safe container while their Water empathy allows genuine connection. Unlike more detached practitioners, the Water Tiger brings their full presence to the therapeutic relationship, which clients experience as profoundly healing.`,

    idealCareers: [
      'Crisis Manager',
      'Human Rights Advocate',
      'Trauma Therapist',
      'Investigative Journalist',
      'Emergency Physician',
      'Military Commander',
      'Wildlife Conservation Director',
      'Executive Coach',
    ],

    financialStyle:
      'The Water Tiger approaches finances with the same combination of boldness and intuition they bring to everything else. They are willing to take calculated risks when their instincts signal opportunity, and their Water-enhanced perception often proves remarkably accurate in assessing market timing and value. However, they can be impulsive during emotional periods, making significant financial decisions based on feeling rather than analysis. The Water Tiger\'s financial sweet spot lies in building a diversified foundation of stable investments that satisfies their need for security, while maintaining a smaller "bold moves" allocation that honors their Tiger instinct for opportunistic action.',

    tips: [
      'Channel your protective instincts into advocacy. Your natural drive to defend the vulnerable is not just a personality trait — it is a professional superpower. Careers in human rights, social justice, and community protection align perfectly with your deepest motivations.',
      'Develop your emotional intelligence into a formal skill set. Consider training in coaching, mediation, or counseling methodologies. Your natural ability to read people and create safety is amplified enormously by professional frameworks that give structure to your intuitive gifts.',
      'Build a support team you trust completely. The Water Tiger carries too much alone. Identify two or three colleagues whose judgment and loyalty you trust implicitly, and share the weight of leadership with them. Your effectiveness increases dramatically when you are not operating in isolation.',
      'Schedule regular retreat time. Your Water element needs periodic solitude to process and regenerate. Block time in your calendar for reflection — not as a luxury but as a professional necessity. The Water Tiger who skips this recharging becomes reactive rather than strategic.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Tiger in love is a force of nature — intensely devoted, fiercely protective, and emotionally present in ways that other Tiger variants rarely achieve. When they commit to a partner, they bring the full weight of their Tiger passion and Water depth to the relationship, creating a bond of extraordinary intensity and tenderness. The Water Tiger does not love halfway — they love with everything they have, and they expect the same wholehearted commitment in return.

The early stages of Water Tiger romance are marked by an almost predatory focus. When they identify someone who captures their interest, they pursue with the Tiger's characteristic directness but with a Water-element subtlety that makes the experience feel less like being hunted and more like being drawn into an irresistible current. They pay attention to details, remember everything, and create an atmosphere of such focused presence that their chosen person feels uniquely seen and valued.

The Water Tiger's romantic challenge is balancing protection with trust. Their instinct to shield their partner from harm can slide into controlling behavior, especially when anxiety amplifies their already strong protective drive. The Water Tiger who learns to trust their partner's strength and autonomy — fighting alongside them rather than for them — discovers a love that is both powerful and genuinely free.`,

    loveStyle:
      'The Water Tiger loves with fierce tenderness — a combination that is as paradoxical as it is compelling. They are passionately physical, emotionally intense, and deeply protective of their partner\'s well-being. Their love language is a blend of quality time, physical affection, and acts of protection that communicate: "You are mine, and I will keep you safe." They need a partner who can receive this intensity without feeling smothered, who matches their passion without competing for dominance, and who has the emotional courage to meet the Water Tiger in the depths where they truly live.',

    idealPartnerTraits: [
      'Emotionally Courageous',
      'Independent',
      'Honest',
      'Physically Affectionate',
      'Strong-Willed',
    ],

    tips: [
      'Distinguish between protecting and controlling. Ask yourself regularly: "Am I doing this because my partner needs protection, or because I need to feel in control?" The answer to this question is the difference between love and possession.',
      'Share your vulnerabilities before they become crises. Your instinct to project strength at all times creates emotional distance. Let your partner see your fears, doubts, and wounds — they will love you more for your honesty, not less.',
      'Create rituals of reconnection. Your brooding withdrawals create anxiety in partners who do not understand them. Establish a simple signal or practice that communicates "I need space but I am still here" — preventing your solitude from feeling like rejection.',
      'Celebrate your partner\'s independence. When they succeed without you, handle difficulty without your help, or pursue passions you do not share, resist the urge to feel threatened. A strong partner is not a competitor — they are the only kind of companion worthy of a Tiger.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Tiger's constitution combines the Tiger's explosive physical vitality with Water's influence on the body's deep reserves and fluid systems. In Traditional Chinese Medicine, the Tiger's Wood nature governs the Liver and Gallbladder — the organs of detoxification, anger processing, and smooth energy flow — while the Water element governs the Kidneys, which store the body's foundational vitality (jing). This combination creates a person of remarkable physical power who must carefully manage their deep energy reserves.

The characteristic Water Tiger health pattern involves cycles of intense exertion followed by deep recovery. They can push harder and longer than almost any other sign when motivated, drawing on both the Tiger's explosive power and Water's deep reserves. However, this extraordinary capacity masks a vulnerability: they can deplete their foundational energy (kidney jing) if they consistently push beyond sustainable limits. The signs of depletion are subtle at first — lower back aching, restless sleep, decreased motivation — but escalate if ignored.

Prevention for the Water Tiger centers on sustainable pacing. Their challenge is not finding energy but managing it wisely. Regular exercise that includes both high-intensity and restorative components, adequate sleep, and practices that specifically support liver and kidney function keep the Water Tiger's considerable vitality available for decades rather than burning through it in years.`,

    bodyAreas: ['Liver', 'Kidneys', 'Tendons and Ligaments', 'Eyes'],

    exercises: [
      'Martial arts with meditative components',
      'Trail running in natural environments',
      'Swimming for deep recovery',
      'Dynamic yoga or Pilates',
    ],

    dietTips: [
      'Support liver health with bitter greens and cruciferous vegetables: dandelion greens, arugula, broccoli, and Brussels sprouts. The Tiger\'s Wood nature makes liver support essential, and these foods promote the smooth flow of energy that prevents stagnation and irritability.',
      'Nourish kidney reserves with mineral-rich foods: bone broth, seaweed, nuts, seeds, and dark berries. These foods support the Water element\'s foundational organ system and help replenish the deep energy reserves the Water Tiger draws upon during intense periods.',
      'Moderate alcohol consumption carefully. The liver\'s centrality to the Water Tiger\'s health makes it particularly vulnerable to alcohol\'s effects. Even moderate drinking can disrupt the smooth energy flow this sign depends on, leading to irritability, poor sleep, and emotional volatility.',
      'Include omega-3 rich foods for joint and tendon health: wild-caught fish, walnuts, flaxseeds, and chia seeds. The Tiger\'s active lifestyle places significant demand on connective tissue, and these foods provide the anti-inflammatory support that keeps the Water Tiger mobile and pain-free.',
    ],

    mentalHealth:
      'The Water Tiger\'s most significant mental health challenge is managing the intensity of their emotional absorption. Their combination of Tiger sensitivity and Water depth means they feel everything — their own emotions and those of people around them — at maximum volume. Without conscious management, this can lead to anxiety, emotional exhaustion, and periods of depression following intense social or professional demands. Boundaries are essential medicine for the Water Tiger: learning to distinguish their own feelings from absorbed emotions, limiting exposure to draining environments, and maintaining a daily practice of emotional clearing. Physical exercise is particularly effective for mental health, as it channels the Tiger\'s intense energy while the rhythmic, meditative quality of activities like swimming or running calms Water\'s emotional depths. The Water Tiger who establishes a consistent practice of physical movement, emotional expression, and deliberate solitude maintains the remarkable psychological resilience their sign is capable of.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 7],
    colors: ['Blue', 'Teal', 'Dark Green', 'Black'],
    direction: 'North',
    gemstones: ['Turquoise', 'Aquamarine', 'Blue Tiger\'s Eye'],
    flowers: ['Water Iris', 'Blue Orchid', 'Plum Blossom'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER TIGERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Tom Cruise',
        profession: 'Actor/Producer',
        birthYear: 1962,
        description:
          'Tom Cruise\'s relentless intensity, physical daring, and strategic control over his career embody the Water Tiger\'s combination of courage and calculated precision. His insistence on performing his own stunts reflects the Tiger\'s fearlessness, while his meticulous career management demonstrates Water\'s strategic depth.',
      },
      {
        name: 'Jodie Foster',
        profession: 'Actress/Director',
        birthYear: 1962,
        description:
          'Jodie Foster\'s career trajectory — from child prodigy to Oscar-winning actress to acclaimed director — showcases the Water Tiger\'s rare combination of fierce talent and disciplined, private self-management. Her selective, quality-over-quantity approach reflects Water\'s depth, while her unflinching performances embody the Tiger\'s courage.',
      },
      {
        name: 'Demi Moore',
        profession: 'Actress/Producer',
        birthYear: 1962,
        description:
          'Demi Moore\'s career-defining ability to shatter glass ceilings in Hollywood — becoming the highest-paid actress of her era — reflects the Water Tiger\'s combination of fierce determination and strategic intelligence. Her willingness to take on physically and emotionally demanding roles embodies the sign\'s fearless depth.',
      },
      {
        name: 'Jon Bon Jovi',
        profession: 'Rock Musician',
        birthYear: 1962,
        description:
          'Jon Bon Jovi\'s decades-long career leading one of rock\'s most successful bands demonstrates the Water Tiger\'s rare ability to sustain intensity over time. His combination of charismatic stage presence and shrewd business management reflects the sign\'s fusion of Tiger magnetism and Water strategy.',
      },
      {
        name: 'Beatrix Potter',
        profession: 'Author/Illustrator',
        birthYear: 1902,
        description:
          'Beatrix Potter\'s quiet determination to publish her beloved animal stories despite repeated rejection, and her later transformation into a formidable conservationist and sheep farmer, embody the Water Tiger\'s combination of creative sensitivity and unwavering resolve.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Tiger occupies the third position in the Chinese zodiac and holds a uniquely powerful place in East Asian mythology. Known as the "King of the Beasts" in Chinese tradition (a role held by the lion in Western culture), the Tiger represents the ultimate expression of earthly power, courage, and protective authority. In Chinese folklore, the Tiger is believed to ward off evil spirits, protect children, and guard the gates of the afterlife. Tiger imagery adorns temples, military insignia, and children's clothing throughout East Asia as a symbol of divine protection.

When the Water element is paired with the Tiger, the mythology gains profound depth. Water Tiger years are associated with renewal through intuitive wisdom — periods when raw power is tempered by emotional intelligence and strategic patience. In classical Chinese divination, the Water Tiger represents the rare leader who combines the courage to act with the wisdom to wait, the strength to fight with the sensitivity to heal. This combination was considered particularly auspicious for military strategists and healers — professions where life-or-death decisions require both boldness and deep perception.

In Taoist philosophy, the Water Tiger embodies the principle of wu wei — effortless action. The tiger that strikes at precisely the right moment, guided by deep awareness rather than aggressive impulse, represents the highest expression of martial and spiritual mastery. The Water Tiger does not waste energy on premature action or unnecessary conflict; when it moves, the outcome is already determined.`,

    symbolism: `The Water Tiger symbolizes power refined by wisdom and courage deepened by compassion. In traditional symbolism, it represents the rare convergence of strength and sensitivity — the warrior who fights not from rage but from love, the leader who commands not through fear but through understanding. This duality makes the Water Tiger one of the most complex and admired archetypes in the Chinese zodiac.

Water flowing through the Tiger's domain carries additional symbolic weight. It represents the cleansing and purifying force that prevents power from becoming corrupt — the internal compass of empathy and justice that ensures the Tiger's considerable strength serves others rather than dominating them. In Wu Xing philosophy, Water nourishing Wood (the Tiger's element) symbolizes the deep roots that sustain visible strength — the unseen emotional and spiritual foundations that make courageous action possible.

The Water Tiger is also a symbol of regeneration and healing. In Chinese medicine, the Tiger's Wood energy governs the liver — the organ of transformation and renewal — while Water governs the kidneys, the source of foundational vitality. Together, they represent the body's capacity for deep healing and regeneration.`,

    modernInterpretation: `In contemporary culture, the Water Tiger archetype resonates with evolving ideas about what true leadership looks like. As organizations and societies move away from purely authoritarian models, the Water Tiger's combination of strength and empathy offers a compelling alternative: the leader who can make difficult decisions while genuinely caring about those affected by them. This is the archetype of the crisis leader, the trauma-informed commander, and the executive who builds loyalty through authentic connection rather than positional authority.

The Water Tiger also speaks to the modern recognition that emotional intelligence is not a soft skill but a strategic advantage. In fields from business to medicine to diplomacy, the ability to read people, sense underlying dynamics, and respond with both courage and compassion increasingly determines success. The Water Tiger's natural gifts in these areas position them as the kind of leader the twenty-first century most urgently needs.

For those born in Water Tiger years, contemporary culture offers unprecedented space to express the full range of their gifts. The Tiger's strength is celebrated, and Water's emotional depth is increasingly valued rather than dismissed. The Water Tiger who embraces both dimensions of their nature — fierce and tender, bold and intuitive — finds that the modern world is ready for exactly the kind of leadership they naturally provide.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
