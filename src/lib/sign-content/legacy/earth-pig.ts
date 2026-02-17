// ============================================
// EARTH PIG (戊亥) — The Abundant Provider
// ============================================
// The Earth Pig combines the Pig's generous warmth and
// love of abundance with Earth's stabilizing, practical
// energy, creating the most reliable and genuinely
// nurturing personality in the Chinese zodiac.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-pig',
  profile: getProfileBySlug('earth-pig')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Pig is the most grounded and dependably generous expression of the Pig archetype. Where other Pig variants may be indulgent or naive in their generosity, the Earth Pig channels their enormous capacity for kindness through a filter of practical wisdom that ensures their giving actually helps rather than merely pleases. They are the sign that feeds the hungry, not with leftovers but with a carefully prepared meal — and they do it not for praise but because someone needed to be fed.

People born under this sign possess an exceptional warmth that is both genuine and grounding. They radiate an accepting, comfortable energy that makes everyone around them feel welcome, valued, and safe. The Earth Pig does not judge; they nourish. They do not compete; they provide. Their presence in any group — family, workplace, or community — transforms the emotional atmosphere from one of tension and scarcity to one of abundance and ease.

What distinguishes the Earth Pig from other generous signs is the sustainability of their giving. Where other Pigs may give until they are empty, the Earth Pig's grounding influence ensures they maintain their own reserves while sharing abundantly. They understand intuitively that effective generosity requires a stable foundation — that the person who collapses from exhaustion cannot help anyone. This practical wisdom does not diminish their generosity; it makes it lasting and reliable rather than spectacular and unsustainable.`,

    coreTraits: [
      'Generous',
      'Grounded',
      'Warm',
      'Patient',
      'Honest',
      'Abundant',
    ],

    strengths: [
      {
        trait: 'Practical Generosity',
        description:
          'Earth Pigs give in ways that genuinely help. Their generosity is not performative or impulsive but thoughtful and targeted — they notice what people actually need and provide it with quiet efficiency. A meal when someone is hungry, practical advice when someone is lost, financial help when someone is struggling — the Earth Pig\'s giving is precisely calibrated to make a real difference.',
      },
      {
        trait: 'Emotional Groundedness',
        description:
          'The Earth element provides the Pig with a stability that other variants lack. Earth Pigs are not easily swayed by emotional manipulation, panic, or peer pressure. They maintain their equilibrium through crisis, providing a calm, reassuring presence that anchors everyone around them. This groundedness makes their emotional generosity sustainable rather than draining.',
      },
      {
        trait: 'Inclusive Warmth',
        description:
          'Earth Pigs create an atmosphere of belonging wherever they go. They accept people as they are, without judgment or condition, creating spaces where individuals feel safe to be authentic. This inclusive warmth is not naive but principled — the Earth Pig genuinely believes that everyone deserves kindness, and they act on that belief consistently.',
      },
      {
        trait: 'Material Competence',
        description:
          'The Earth element gives the Pig a practical relationship with the material world that other Pig variants sometimes lack. Earth Pigs are good with money, capable with their hands, and effective at building the physical infrastructure of comfortable living. They understand that generosity requires resources, and they build those resources with patient, practical skill.',
      },
    ],

    challenges: [
      {
        trait: 'Excessive Accommodation',
        description:
          'Earth Pigs\' desire to provide for everyone can lead them to accommodate others at their own expense. They may agree to unreasonable requests, tolerate poor treatment, or sacrifice important personal goals to maintain the peace and comfort of those around them. Learning to set boundaries without guilt is their most important growth challenge.',
      },
      {
        trait: 'Stubbornness Beneath Gentleness',
        description:
          'The Earth Pig\'s gentle exterior conceals a surprisingly stubborn core. Once they have formed an opinion or chosen a path, they resist changing it with a passive but immovable determination. This stubbornness is difficult to detect because it expresses through quiet resistance rather than open defiance, but it can silently undermine relationships and prevent necessary adaptation.',
      },
      {
        trait: 'Comfort-Seeking',
        description:
          'The Pig\'s natural love of pleasure, grounded by Earth\'s material orientation, can produce an excessive attachment to comfort. Earth Pigs may avoid necessary challenges, difficult conversations, or uncomfortable growth because they prioritize immediate comfort over long-term development. Their challenge is to embrace productive discomfort as a path to a deeper, more lasting comfort.',
      },
      {
        trait: 'Naive Trust',
        description:
          'Despite their practical wisdom, Earth Pigs can be too trusting of people who do not deserve their generosity. Their fundamental belief in human goodness — usually a strength — can become a vulnerability when exploitative people take advantage of their open-hearted nature. Developing discernment without losing their essential faith in people is a lifelong balancing act.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Pig is inherently associated with the Water element — the energy of depth, emotion, and flowing abundance. When Earth meets this naturally Water-natured animal, it creates a productive containment: Earth dams Water in the control cycle, providing structure and direction to the Pig's emotional and material generosity. This is not suppression but channeling — Earth transforms the Pig's boundless generosity from a flood that dissipates into a reservoir that sustains. The Earth Pig represents Water's abundance contained and directed by Earth's practical wisdom, creating a personality that is both genuinely generous and sustainably grounded. Their challenge within the elemental framework is to maintain the flow — to ensure that Earth's containment does not become stagnation, and that their practical wisdom does not calcify into rigidity.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Pig's compatibility profile favors partners who appreciate and reciprocate their generous nature without exploiting it. They need someone who recognizes the value of what the Earth Pig provides, who actively contributes to the relationship rather than merely consuming, and who brings enough energy and direction to complement the Pig's accommodating, nurturing style.

In traditional Chinese astrology, the Pig belongs to the Fourth Trine alongside the Rabbit and the Goat — three signs united by sensitivity, creativity, and a deep appreciation for comfort and beauty. These natural allies share the Pig's gentle approach to life and create relationships of remarkable warmth. The Pig's most challenging pairing is with the Snake, its zodiac opposite, where the Snake's guarded, strategic nature clashes with the Pig's open, trusting temperament.`,

    bestMatches: [
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 92,
        summary:
          'An exceptionally harmonious pairing between two gentle, generous signs. The Wood Rabbit\'s diplomatic grace and emotional sensitivity perfectly complement the Earth Pig\'s warm, nurturing nature. Both signs value peace, beauty, and mutual care, creating a relationship of extraordinary tenderness and shared comfort. Wood gently stimulates Earth, adding creative growth without disrupting stability.',
      },
      {
        slug: 'earth-tiger',
        name: 'Earth Tiger',
        score: 85,
        summary:
          'The Earth Tiger\'s protective strength and principled leadership complement the Earth Pig\'s generous warmth beautifully. The Tiger provides the decisiveness and direction that the Pig sometimes lacks, while the Pig provides the comfort and emotional nourishment that softens the Tiger\'s sometimes austere nature. Their shared Earth element creates deep mutual understanding.',
      },
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 88,
        summary:
          'Two members of the Fourth Trine create a partnership of extraordinary mutual care and creative richness. The Water Goat\'s artistic sensitivity and emotional depth complement the Earth Pig\'s practical warmth, creating a shared life of beauty and abundance. Water nourishes Earth, adding emotional fluidity to the Pig\'s grounded generosity.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-snake',
        name: 'Fire Snake',
        score: 28,
        summary:
          'The zodiac\'s classic opposition at its most intense. The Fire Snake\'s guarded, calculating nature fundamentally offends the Earth Pig\'s open, trusting approach to relationships. The Pig feels manipulated; the Snake feels suffocated by the Pig\'s emotional transparency. Fire\'s aggressive energy overwhelms the Earth Pig\'s gentle groundedness, creating chronic tension.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 35,
        summary:
          'The Metal Monkey\'s clever, strategic nature clashes with the Earth Pig\'s straightforward honesty. The Pig may feel manipulated by the Monkey\'s tactical communication, while the Monkey may find the Pig\'s directness naive and limiting. Metal cuts through Earth, creating a dynamic where the Pig feels undermined by the Monkey\'s sharper intellect.',
      },
      {
        slug: 'wood-rooster',
        name: 'Wood Rooster',
        score: 40,
        summary:
          'The Wood Rooster\'s critical perfectionism clashes with the Earth Pig\'s accepting, generous nature. The Rooster\'s constant drive for improvement feels like criticism to the comfort-loving Pig, while the Pig\'s casual approach to standards frustrates the Rooster\'s need for order. Wood depletes Earth, draining the Pig\'s grounded stability.',
      },
    ],

    elementAffinity: `As an Earth sign with an inherently Water-natured animal, the Earth Pig navigates a complex elemental landscape. Fire signs are natural allies in the productive cycle (Fire creates Earth), providing the energy and motivation that complement the Pig's nurturing nature. Metal signs are supported by the Earth Pig (Earth creates Metal), creating harmonious partnerships where the Pig's grounding sustains Metal's structured ambitions. Water signs resonate with the Pig's natural element, creating emotionally deep partnerships that must be monitored for excessive dampness and stagnation. Wood signs present the greatest challenge, as Wood controls Earth, potentially draining the Pig's reserves through demands that exceed their considerable but not unlimited capacity for giving.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Pigs excel in careers that combine practical skill with genuine service to others. They are drawn to work that produces tangible comfort, nourishment, or wellbeing for the people they serve — whether that means running a restaurant, managing a healthcare facility, or building homes. The ideal Earth Pig career provides both material security and the deep satisfaction of knowing that their work directly improves people's lives.

The Earth Pig's work style is collaborative, thorough, and quietly dedicated. They are not ambitious for power or status but for quality and impact — they want their work to be genuinely good and genuinely helpful. They thrive in supportive team environments where mutual respect and shared purpose replace competition and political maneuvering.

Earth Pigs often find their greatest career satisfaction in roles that involve feeding, housing, healing, or otherwise providing for people's fundamental needs. Hospitality, healthcare, food production, social services, and community development all align with the Earth Pig's natural drive to create abundance and distribute it generously.`,

    idealCareers: [
      'Restaurant Owner/Chef',
      'Healthcare Administrator',
      'Real Estate Manager',
      'Social Services Director',
      'Farmer/Agricultural Producer',
      'Hospitality Manager',
      'Financial Planner',
      'Charity Director',
    ],

    financialStyle:
      'Earth Pigs are practical, generous money managers who balance accumulation with sharing. They build financial security steadily and sensibly, but they also spend generously on food, comfort, and the people they love. Their financial approach is neither miserly nor reckless — they understand that money is a tool for creating comfort and community, not an end in itself. Their weakness is difficulty saying no to financial requests from people they care about, which can lead to overextension. The Earth Pig who learns to establish a "generosity budget" — a predetermined amount they can give freely without threatening their own security — achieves the optimal balance between their natural impulse to provide and their practical need for stability.',

    tips: [
      'Choose careers that align with your natural drive to provide and nurture. Hospitality, food service, healthcare, and social services all allow you to express your generous nature through work that is both professionally rewarding and personally fulfilling.',
      'Develop your financial boundaries as a professional skill. Your tendency to give more than you should — in time, money, and energy — can undermine your career sustainability. Establish clear limits that protect your resources while still allowing meaningful generosity.',
      'Advocate for your own advancement without guilt. Your modesty and team orientation can cause you to be overlooked for promotions and opportunities. Recognize that advancing your career increases your capacity to help others, and pursue advancement as a form of expanded service.',
      'Guard against becoming the unofficial emotional caretaker of your workplace. Your warmth naturally attracts people who need support, but absorbing colleagues\' emotional burdens is not part of your job and can deplete the energy you need for your actual responsibilities.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Pig is one of the most generous, affectionate, and genuinely devoted partners in the Chinese zodiac. They love with an abundant warmth that transforms everyday life into something rich and nourishing — creating homes that feel like sanctuaries, preparing meals that feel like acts of devotion, and providing a level of steady, unconditional acceptance that is truly rare. Being loved by an Earth Pig is like being wrapped in a warm blanket of care that never wears thin.

Earth Pigs fall in love with open hearts, drawn to partners who make them feel appreciated and who share their vision of a comfortable, abundant life together. They are not looking for drama or intensity but for genuine partnership — someone to share meals with, to build a home with, to laugh with, and to grow old alongside. Their romantic ideal is a life of shared abundance where both partners contribute generously and both feel genuinely cared for.

The Earth Pig's primary challenge in love is maintaining their own identity and needs within the relationship. Their natural tendency to prioritize their partner's comfort can lead to a dynamic where they give everything while their own desires and dreams quietly atrophy. The healthiest Earth Pig relationships are those where the partner actively encourages the Pig to pursue their own passions and express their own needs.`,

    loveStyle:
      'The Earth Pig loves through generous provision and warm, enveloping care. Their romantic expression centers on creating abundance and comfort — lavish meals, a beautiful home, physical affection freely given, and an emotional warmth that makes their partner feel genuinely cherished. They are physically demonstrative, sensual partners who express love through touch, food, and the creation of cozy, intimate spaces. Their love language combines acts of service with physical touch, producing a relationship experience that is both grounding and indulgent. They are faithful, patient, and remarkably forgiving — sometimes to a fault.',

    idealPartnerTraits: [
      'Appreciative and Expressive',
      'Honest',
      'Equally Generous',
      'Respectful of Boundaries',
      'Warm-Hearted',
    ],

    tips: [
      'Express your own needs and desires as clearly as you express your care for your partner. Your tendency to suppress your wishes in favor of your partner\'s comfort creates an imbalance that eventually breeds resentment. Healthy love requires both partners to give and receive.',
      'Choose a partner who gives as generously as you do. The Earth Pig\'s most common relationship mistake is choosing partners who consume their generosity without reciprocating. Look for someone whose giving matches yours in quality if not in style.',
      'Set boundaries around your emotional and material generosity within the relationship. Your partner\'s comfort is important, but not at the expense of your own wellbeing. Practice saying "I need this" with the same warmth you bring to saying "What do you need?"',
      'Maintain interests and friendships outside the relationship. Your natural tendency to make your partner the center of your world can become suffocating for them and impoverishing for you. A rich, independent life makes you a better partner, not a more distant one.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Pig possesses a constitution that tends toward abundance — robust but prone to excess. In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen, while the Pig's Water nature connects to the Kidneys and Bladder. This creates a constitution where digestive health, fluid balance, and kidney function are closely interlinked, and where the primary health risk is the accumulation of excess — weight, dampness, and stagnation.

The most common Earth Pig health pattern is the gradual accumulation of excess driven by their love of comfort, good food, and sedentary social activities. The Pig's natural appreciation for abundance, contained by Earth's material orientation, can produce eating habits that are generous in quality but excessive in quantity. Weight management, metabolic health, and the prevention of dampness-related conditions are primary health concerns.

The Earth Pig's health strategy should focus on maintaining movement and moderation in a constitution that naturally tends toward comfort and abundance. They respond best to gentle, enjoyable forms of exercise and to dietary approaches that honor their love of good food while introducing structure and balance.`,

    bodyAreas: ['Stomach', 'Kidneys', 'Lymphatic System', 'Feet'],

    exercises: [
      'Swimming',
      'Dancing',
      'Leisurely cycling',
      'Cooking as active movement',
    ],

    dietTips: [
      'Honor your love of good food while practicing portion awareness. The Earth Pig does not need to diet — they need to eat well in moderate quantities. Focus on quality over quantity: smaller portions of exceptional food satisfy both the Pig\'s refined palate and the Earth element\'s practical wisdom.',
      'Reduce dampness-producing foods. Excess dairy, sugar, greasy foods, and alcohol contribute to what TCM calls "dampness" — sluggishness, bloating, water retention, and foggy thinking. Replace these with warming, drying foods: ginger, cinnamon, black pepper, and bitter greens.',
      'Support kidney health with adequate hydration and kidney-nourishing foods. Black sesame, walnuts, kidney beans, bone broth, and berries all support the Water-element organs that the Pig\'s constitution depends on for vitality and energy.',
      'Eat communally but mindfully. The Earth Pig thrives on shared meals — they are an essential form of social nourishment. However, social eating often leads to unconscious overconsumption. Practice staying present with your body\'s satiety signals even during enjoyable social meals.',
    ],

    mentalHealth:
      'The Earth Pig\'s primary mental health challenge is a form of depression rooted in self-abandonment. Their pattern of prioritizing everyone else\'s needs while neglecting their own gradually erodes their sense of self, producing a quiet, pervasive sadness that they may not even recognize as depression because it develops so slowly. The Earth Pig who has been giving without receiving for years may wake up one day feeling empty, purposeless, and resentful — not understanding that the deficit has been accumulating for a long time. The most effective mental health intervention for the Earth Pig is permission to prioritize themselves. Therapy that focuses on boundaries, self-worth, and the legitimacy of personal needs can be transformative. Creative activities that are purely for the Pig\'s own enjoyment — not for others\' benefit — help rebuild the sense of self that excessive caregiving erodes. The Earth Pig who learns that self-care is not selfish but necessary discovers a wellspring of vitality that actually enhances their capacity for the generosity they value most.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Golden Yellow', 'Warm Brown', 'Copper'],
    direction: 'Southwest',
    gemstones: ['Citrine', 'Topaz', 'Tiger\'s Eye'],
    flowers: ['Hydrangea', 'Dahlia', 'Peony'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH PIGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Kevin Spacey',
        profession: 'Actor',
        birthYear: 1959,
        description:
          'Kevin Spacey\'s extraordinary ability to inhabit complex characters with depth and precision demonstrated the Earth Pig\'s gift for understanding human nature from the inside. His methodical approach to craft and his sustained excellence across decades reflected the sign\'s combination of natural talent and patient dedication.',
      },
      {
        name: 'Emma Thompson',
        profession: 'Actress/Screenwriter',
        birthYear: 1959,
        description:
          'Emma Thompson exemplifies the Earth Pig\'s rare combination of warmth, intelligence, and practical creativity. Her dual success as actress and Oscar-winning screenwriter reflects the sign\'s ability to channel genuine emotional generosity through disciplined craft, producing work that is both deeply felt and beautifully constructed.',
      },
      {
        name: 'Simon Cowell',
        profession: 'Entertainment Mogul',
        birthYear: 1959,
        description:
          'Simon Cowell\'s career as a talent show judge and entertainment empire builder demonstrates an unusual Earth Pig expression: the practical abundance-creator who builds vast material success through understanding what the public desires. His blunt honesty, while contrasting with the Pig\'s usual gentleness, reflects the sign\'s fundamental commitment to truthfulness.',
      },
      {
        name: 'Jeanette Winterson',
        profession: 'Author',
        birthYear: 1959,
        description:
          'Jeanette Winterson\'s richly emotional, fiercely honest prose embodies the Earth Pig\'s combination of deep feeling and grounded authenticity. Her willingness to draw from personal experience to create universally resonant literature reflects the sign\'s gift for transforming private abundance — emotional, sensory, experiential — into nourishment for others.',
      },
      {
        name: 'Morrissey',
        profession: 'Singer/Songwriter',
        birthYear: 1959,
        description:
          'Morrissey\'s career demonstrates the Earth Pig\'s emotional depth and unwavering commitment to authentic expression. His deeply felt lyrics, his steadfast vegetarianism and animal rights advocacy, and his refusal to compromise his artistic vision reflect the sign\'s principled generosity and stubborn devotion to what they believe is right.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Pig holds the honored position of the twelfth and final animal in the Chinese zodiac cycle — a placement that in Chinese numerology represents completion, abundance, and the fulfillment of all that came before. In the zodiac origin story, the Pig arrived last because it stopped to eat and nap along the way — a founding myth that establishes the Pig's association with enjoyment, abundance, and the wisdom of savoring life rather than rushing through it.

In Chinese mythology, the Pig is most famously represented by Zhu Bajie (Pigsy) from "Journey to the West," a character whose appetites and earthly desires provide comic relief but also embody a genuine, unpretentious humanity that the more spiritual characters lack. When the Earth element grounds this already abundant creature, the mythological significance deepens into themes of material prosperity and sustainable provision. The Earth Pig in traditional Chinese cosmology represented the most abundant expression of earthly blessing — the overflowing granary, the well-stocked pantry, the community that has enough to share. Earth Pig years were considered exceptionally auspicious for harvests, banquets, and the establishment of charitable institutions.`,

    symbolism: `The Earth Pig symbolizes abundant generosity grounded in practical wisdom. In Wu Xing symbolism, this combination represents the most sustainable form of abundance — not the fleeting excess of Fire's spectacular display or the hidden reserves of Water's deep stores, but the visible, tangible, shareable abundance of a well-tended earth producing a generous harvest. The Earth Pig is the banquet table laden with food — not just enough for the family but enough for the neighbors, the travelers, and anyone else who needs to be fed.

The Earth Pig also symbolizes the spiritual value of material generosity. In a tradition that sometimes elevates asceticism over abundance, the Pig reminds us that generosity with physical resources — food, shelter, comfort, warmth — is itself a spiritual practice of the highest order.`,

    modernInterpretation: `In contemporary culture, the Earth Pig archetype resonates with movements toward conscious abundance, community care, and the recognition that generosity is both a personal virtue and a social necessity. In an era of growing inequality and institutional failure, the Earth Pig represents the individual who steps into the gap — the community organizer who feeds the neighborhood, the social entrepreneur who creates systems of shared abundance, the family member who makes sure everyone is cared for.

The Earth Pig's modern relevance extends to the growing philosophy of "enough" — the understanding that true abundance is not endless accumulation but the sufficiency of having what you need and the generosity of sharing what you can. In a culture obsessed with more, the Earth Pig models the radical simplicity of having enough and giving freely, creating a quality of life that no amount of competitive accumulation can match.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
