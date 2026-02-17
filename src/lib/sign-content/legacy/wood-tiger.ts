// ============================================
// WOOD TIGER (甲寅) — The Compassionate Adventurer
// ============================================
// The Wood Tiger merges the Tiger's fearless courage and
// magnetic charisma with Wood's empathy and collaborative
// spirit, creating a natural leader who inspires through
// kindness as much as through boldness.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-tiger',
  profile: getProfileBySlug('wood-tiger')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Tiger is the most approachable and socially gracious of all Tiger-element combinations. The Tiger — already one of the zodiac's most powerful and charismatic animals — gains warmth, flexibility, and genuine concern for others through the Wood element's influence. The result is a natural leader who inspires through compassion as much as courage, and who builds alliances rather than demanding submission.

People born under this sign possess a rare blend of boldness and benevolence. They are the first to charge into uncertain territory, but they look back to make sure everyone is following safely. The Wood Tiger's bravery is not the reckless, self-serving variety — it is deeply connected to a sense of responsibility for others. They fight for causes, champion the underdog, and use their considerable personal power to create space for those who lack the voice or confidence to advocate for themselves.

What makes the Wood Tiger particularly magnetic is their authenticity. They are exactly who they appear to be — no hidden agendas, no political maneuvering, no carefully constructed persona. Their emotions are visible, their intentions are transparent, and their commitment to fairness is genuine. This openness, combined with the Tiger's natural confidence, creates a presence that people instinctively trust and want to follow.`,

    coreTraits: [
      'Courageous',
      'Empathetic',
      'Charismatic',
      'Idealistic',
      'Generous',
      'Adventurous',
    ],

    strengths: [
      {
        trait: 'Inspirational Leadership',
        description:
          'The Wood Tiger leads from the front with a combination of courage and compassion that is genuinely rare. They inspire others not through fear or authority but through the power of their example and the warmth of their encouragement. Teams and communities led by Wood Tigers feel both challenged and supported — pushed to grow while knowing they are valued.',
      },
      {
        trait: 'Moral Courage',
        description:
          'Where others retreat from ethical confrontations, the Wood Tiger steps forward. They possess an unwavering moral compass and the bravery to act on it, even when doing so is costly or unpopular. This is not rigid moralizing but a flexible, compassionate sense of justice that adapts to circumstances while maintaining core principles.',
      },
      {
        trait: 'Creative Vision',
        description:
          'The Wood element\'s connection to growth and creativity combines with the Tiger\'s bold imagination to produce genuinely original thinking. Wood Tigers see possibilities that others miss and have the confidence to pursue unconventional ideas. Their creative ventures are marked by both ambition and heart — they want their work to matter, not just to impress.',
      },
      {
        trait: 'Collaborative Power',
        description:
          'Unlike pure Tiger types who can be domineering, the Wood Tiger understands that the greatest achievements come through cooperation. They are skilled at bringing diverse people together, mediating between opposing viewpoints, and creating shared purpose. Their natural authority makes others willing to collaborate, and their empathy makes that collaboration genuinely productive.',
      },
    ],

    challenges: [
      {
        trait: 'Overextension',
        description:
          'The Wood Tiger\'s desire to help everyone and fight every battle can stretch them dangerously thin. They say yes to too many causes, take on too many responsibilities, and spread their energy across so many fronts that they cannot give their best to any of them. Learning to prioritize is essential for their long-term effectiveness.',
      },
      {
        trait: 'Naivety',
        description:
          'The Wood Tiger\'s trusting nature and belief in others\' goodness can leave them vulnerable to manipulation. They extend trust readily and may be slow to recognize when someone is taking advantage of their generosity. This openness is beautiful but needs to be balanced with discernment and healthy boundaries.',
      },
      {
        trait: 'Emotional Volatility',
        description:
          'The Tiger\'s intensity combined with Wood\'s emotional sensitivity creates a person who feels everything deeply — and whose moods can shift dramatically. Wood Tigers can swing from exuberant optimism to frustrated anger in moments, particularly when they encounter injustice or feel that their trust has been betrayed.',
      },
      {
        trait: 'Impatience with Process',
        description:
          'The Wood Tiger wants to see results now. Their combination of Tiger urgency and Wood\'s desire for growth makes them restless with slow, incremental progress. They may bypass important procedures, skip necessary preparation, or rush into action before a plan is fully formed, trusting their instincts to compensate for lack of planning.',
      },
    ],

    elementInfluence: `Wood's influence on the Tiger is profoundly harmonizing. The Tiger is natively associated with Wood in Chinese astrology — it is the third earthly branch (寅) and corresponds to early spring, the season when Wood energy is at its most dynamic. This means the Wood Tiger is a "pure Wood" sign, where the element and the animal's intrinsic nature are perfectly aligned. The result is a personality of unusual coherence and natural power. Where other element-Tiger combinations create interesting tensions, the Wood Tiger simply amplifies and refines the Tiger's essential qualities: courage becomes more compassionate, independence becomes more collaborative, and boldness becomes more creative. This alignment gives the Wood Tiger a sense of being deeply at home in their own skin — a quiet confidence that comes from internal harmony rather than external achievement.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Tiger's compatibility profile reflects their need for both stimulation and emotional depth. They seek partners who can match their energy and idealism while providing enough emotional grounding to prevent burnout. The Tiger belongs to the third trine alongside the Horse and the Dog — animals that share the Tiger's courage, loyalty, and restless energy. These natural allies form partnerships built on mutual respect, shared adventure, and a common commitment to doing what is right.

The Wood element expands the Tiger's compatibility by adding flexibility and empathy to their interactions. However, the Wood Tiger still struggles with partners who are controlling, emotionally cold, or fundamentally opposed to the open, generous approach to life that defines this sign.`,

    bestMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 92,
        summary:
          'A thrilling third-trine partnership of two fearless spirits. The Fire Horse\'s untamable energy and passion perfectly match the Wood Tiger\'s bold, compassionate nature. Wood feeds Fire, creating a dynamic where the Tiger\'s support fuels the Horse\'s ambitions. Both signs value freedom and authenticity, ensuring neither feels constrained. Together they are a force of nature — adventurous, inspiring, and unforgettable.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 89,
        summary:
          'A deeply loyal third-trine alliance where the Earth Dog\'s principled devotion complements the Wood Tiger\'s compassionate leadership. The Dog\'s unwavering moral compass resonates with the Tiger\'s sense of justice, while the Earth element provides grounding stability. The Tiger inspires the Dog to be bolder; the Dog helps the Tiger follow through on commitments.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 85,
        summary:
          'An unexpectedly beautiful pairing. The Water Pig\'s generous heart and emotional depth nourish the Wood Tiger\'s compassionate spirit — Water feeds Wood in the productive cycle. The Pig\'s warmth and acceptance create a safe haven where the Tiger can rest between adventures, while the Tiger\'s courage and drive add excitement to the Pig\'s life.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 30,
        summary:
          'The Tiger and Monkey sit in opposition, and Metal\'s sharp energy cutting into Wood creates fundamental friction. The Metal Monkey\'s calculating cleverness and competitive instincts clash with the Wood Tiger\'s straightforward honesty and collaborative spirit. The Tiger sees the Monkey as manipulative; the Monkey sees the Tiger as naive. Trust is difficult to establish and easy to break.',
      },
      {
        slug: 'earth-snake',
        name: 'Earth Snake',
        score: 35,
        summary:
          'The Snake\'s secretive, strategic nature fundamentally conflicts with the Wood Tiger\'s transparent, action-oriented approach. The Earth Snake operates through subtlety and patience; the Wood Tiger through directness and urgency. Neither fully understands the other\'s methods, leading to mutual suspicion and frustration that can erode even genuine affection.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 38,
        summary:
          'Two stubborn signs with incompatible approaches to life. The Metal Ox\'s rigid determination and demand for routine clashes with the Wood Tiger\'s need for spontaneity and adventure. Metal cuts Wood, creating a dynamic where the Ox\'s structured expectations feel suffocating to the Tiger\'s free spirit. Both must sacrifice significant parts of their nature for this pairing to work.',
      },
    ],

    elementAffinity: `As a pure Wood sign, the Wood Tiger has particularly strong elemental dynamics. Water-element partners are deeply nourishing — they sustain the Tiger's growth and provide emotional depth that this sometimes surface-level sign needs. Fire-element partners are energizing and passionate, as Wood feeds Fire, creating dynamic partnerships of mutual inspiration. Earth-element partners provide grounding stability, though the Tiger may need to work to prevent the relationship from becoming too settled. Metal-element partners present the greatest challenge, as Metal cuts Wood — these relationships can feel restrictive or antagonistic to the Wood Tiger's expansive nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Tiger is born for roles that combine leadership with purpose. They thrive in careers where they can make a visible, positive difference — championing causes, leading teams, and building organizations that reflect their values. Unlike more calculating signs, the Wood Tiger does not separate professional success from personal meaning; they need their work to align with their beliefs.

Their ideal career offers variety, autonomy, and the opportunity to work with people. Wood Tigers are at their best when they can set the vision, rally support, and drive toward goals that matter. They struggle in rigid hierarchies, micromanaged environments, and roles that feel morally ambiguous. The Wood Tiger who finds the right cause becomes an unstoppable force — their combination of charisma, courage, and genuine compassion creates momentum that sweeps others along.

Financially, Wood Tigers tend to be generous rather than accumulative. They invest in people, experiences, and causes more readily than in traditional financial instruments. Their relationship with money is idealistic — they believe it should be used, shared, and directed toward positive change rather than hoarded. This generosity is noble but requires balancing with practical financial planning.`,

    idealCareers: [
      'Human Rights Lawyer',
      'Emergency Services Director',
      'Documentary Filmmaker',
      'Nonprofit Founder',
      'Athletic Coach',
      'Foreign Correspondent',
      'Environmental Activist',
      'School Principal',
    ],

    financialStyle:
      'Wood Tigers view money as a tool for creating positive change rather than an end in itself. They are generous spenders and donors, often giving away significant portions of their income to causes they believe in. They invest in people — backing friends\' businesses, funding community projects, sponsoring education — with an enthusiasm that can outpace their financial capacity. Their earning potential is high, as their charisma and leadership skills command premium compensation, but their tendency to prioritize meaning over money can create cash flow challenges. The wisest Wood Tigers learn to build a financial foundation first and then direct their generosity from a position of security rather than stretching from a position of scarcity.',

    tips: [
      'Channel your idealism into a specific domain rather than spreading across every cause that moves you. The Wood Tiger who goes deep on one issue — education, environmental conservation, social justice — creates far more impact than one who skims across many. Focus is your force multiplier.',
      'Build systems that outlast your involvement. Your personal energy and charisma can drive extraordinary results, but truly lasting change requires structures that function without you. Invest in training others, documenting processes, and creating institutions that carry your vision forward.',
      'Develop your strategic patience. Your instinct to act immediately is powerful, but some goals require sustained campaigns rather than single charges. Learning to plan multi-year strategies and accept incremental progress will dramatically increase your long-term impact.',
      'Protect your financial independence. Your generous nature can leave you vulnerable if unexpected expenses arise. Establish automatic savings, maintain an emergency fund, and ensure your own stability before extending resources to others. You cannot help anyone if your own foundation crumbles.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Tiger approaches love with the same wholehearted intensity they bring to every aspect of life. When they fall, they fall completely — offering their partner the full force of their passion, loyalty, and protective care. The Wood Tiger in love is generous, devoted, and unwaveringly supportive, creating a relationship that feels like an adventure and a safe haven simultaneously.

Their romantic style combines the Tiger's passionate magnetism with Wood's nurturing warmth. They are the partner who plans surprise getaways, fights fiercely for the relationship during difficult times, and maintains an almost parental protectiveness over their loved one's happiness and well-being. This intensity of care is deeply moving, though it can occasionally tip into possessiveness if the Tiger feels threatened.

The Wood Tiger's greatest strength in love is their authenticity. What you see is what you get — there are no games, no hidden agendas, no strategic withholding of affection. This transparency creates a foundation of trust that many relationships never achieve. Their greatest challenge is learning that not every partner operates with the same openness, and that different love languages require different forms of patience and understanding.`,

    loveStyle:
      'The Wood Tiger loves with bold generosity and fierce devotion. They are passionate, demonstrative partners who show their affection through protective care, shared adventures, and an unwavering commitment to their partner\'s growth and happiness. Their love language combines grand gestures with daily acts of warmth — they are as likely to surprise you with a weekend trip as to hold your hand through a difficult conversation. They need a partner who matches their honesty, appreciates their intensity, and has enough independence to maintain their own identity within the relationship.',

    idealPartnerTraits: [
      'Honest and Transparent',
      'Adventurous Spirit',
      'Emotionally Strong',
      'Supportive of Causes',
      'Independent but Loyal',
    ],

    tips: [
      'Give your partner space to be imperfect. Your protective instincts are beautiful, but constantly trying to fix or shield your partner can feel controlling. Trust that they can handle challenges, and offer support rather than solutions unless asked.',
      'Practice listening without planning your response. Your natural tendency is to hear a problem and immediately spring into action. Sometimes your partner needs to be heard, not rescued. Learn to distinguish between moments that call for action and moments that call for presence.',
      'Maintain your own interests and friendships outside the relationship. The Wood Tiger\'s tendency to focus all their energy on their partner can create an unhealthy dynamic where both people lose their individuality. A strong relationship is built between two whole people, not two halves.',
      'Learn your partner\'s love language and speak it, even if it feels foreign. Your instinct for grand gestures and active devotion may not match what your partner most needs. If they need words of affirmation or quiet companionship, adapting your expression is an act of love in itself.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Tiger possesses extraordinary natural vitality. As a pure Wood sign, their energy is dynamic, expansive, and remarkably self-renewing. They have the constitution of an athlete — strong, flexible, and capable of impressive physical feats — and their mental energy matches their physical capacity. However, this very vitality can become their vulnerability when they push too hard, ignore warning signs, or assume their body can handle whatever they demand of it.

In Traditional Chinese Medicine, the Wood element governs the liver, gallbladder, tendons, sinews, and eyes. The Wood Tiger's primary health risks revolve around excessive liver yang — a pattern of rising, aggressive energy that manifests as headaches, eye problems, muscle tension, and emotional irritability. When the Tiger pushes too hard without adequate rest, their normally smooth-flowing Wood energy becomes constrained and volatile.

The Wood Tiger's health strategy should emphasize flow and balance. Their bodies are designed for dynamic movement and natural environments. Regular vigorous exercise, time outdoors, adequate sleep, and conscious stress management prevent the buildup of stagnant energy that leads to their most common health complaints.`,

    bodyAreas: ['Liver', 'Tendons and Sinews', 'Eyes', 'Nervous System'],

    exercises: [
      'Martial arts or boxing',
      'Trail running or obstacle courses',
      'Rock climbing',
      'Team sports',
    ],

    dietTips: [
      'Favor green, fresh foods that support liver health and match Wood\'s natural affinity with spring energy. Leafy greens, sprouts, herbs, and lightly cooked vegetables should form the foundation of the Wood Tiger\'s diet.',
      'Limit red meat and alcohol, which generate excess heat and burden the liver. The Wood Tiger\'s naturally yang constitution does not need additional heating foods — lean proteins, fish, and plant-based options are better suited to their system.',
      'Include sour foods in moderation to support liver function — citrus fruits, fermented vegetables, and apple cider vinegar help maintain the smooth flow of liver qi that the Wood Tiger depends on for their characteristic vitality.',
      'Stay well-hydrated with room-temperature water and herbal teas. The Wood Tiger\'s active lifestyle and dynamic energy burn through fluids quickly. Chrysanthemum tea is particularly beneficial, as it cools liver heat and supports eye health.',
    ],

    mentalHealth:
      'The Wood Tiger\'s primary mental health challenge is managing the emotional intensity that comes with their passionate, all-in approach to life. They feel anger, frustration, and injustice acutely, and their instinct is to act on these feelings immediately rather than processing them. While this capacity for righteous action is admirable, it can lead to burnout, relationship damage, and a pattern of emotional exhaustion if not managed consciously. The Wood Tiger benefits from physical outlets that channel their aggressive energy constructively — martial arts, intense exercise, and competitive sports provide the release valve this sign needs. Mindfulness practices that build the gap between stimulus and response are also valuable, helping the Tiger choose their battles more wisely. Perhaps most importantly, the Wood Tiger needs to accept that they cannot fix everything and save everyone. Learning to tolerate injustice they cannot immediately address — without becoming cynical or withdrawn — is one of their deepest psychological challenges and greatest opportunities for growth.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 7],
    colors: ['Green', 'Blue', 'Orange'],
    direction: 'East',
    gemstones: ['Malachite', 'Aventurine', 'Tiger\'s Eye'],
    flowers: ['Chrysanthemum', 'Pine', 'Bamboo'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD TIGERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Robert Pattinson',
        profession: 'Actor',
        birthYear: 1986,
        description:
          'Robert Pattinson\'s career trajectory — from teen heartthrob to critically acclaimed actor in challenging independent films — reflects the Wood Tiger\'s courage and artistic integrity. His willingness to take creative risks and defy audience expectations demonstrates the sign\'s bold authenticity.',
      },
      {
        name: 'Usain Bolt',
        profession: 'Olympic Sprinter',
        birthYear: 1986,
        description:
          'The fastest human in recorded history embodies the Wood Tiger\'s explosive energy and natural charisma. Usain Bolt\'s combination of raw athletic power, showmanship, and genuine warmth made him one of the most beloved athletes in history — a quintessential Wood Tiger who dominated with joy rather than intimidation.',
      },
      {
        name: 'Lady Gaga',
        profession: 'Singer/Actress',
        birthYear: 1986,
        description:
          'Lady Gaga\'s fearless creativity, passionate advocacy for outsiders, and willingness to challenge every convention perfectly embody the Wood Tiger\'s compassionate adventurer spirit. Her combination of bold artistic vision and genuine empathy for marginalized communities reflects the sign\'s marriage of courage and compassion.',
      },
      {
        name: 'Megan Fox',
        profession: 'Actress',
        birthYear: 1986,
        description:
          'Megan Fox\'s outspoken nature and refusal to conform to Hollywood expectations reflect the Wood Tiger\'s fierce independence and authenticity. Her willingness to speak her truth regardless of consequences demonstrates the sign\'s characteristic moral courage.',
      },
      {
        name: 'Drake',
        profession: 'Rapper/Entrepreneur',
        birthYear: 1986,
        description:
          'Drake\'s ability to blend vulnerability with confidence, and his talent for building collaborative creative partnerships, reflect the Wood Tiger\'s unique combination of emotional openness and bold leadership. His cultural impact extends beyond music into fashion, business, and community investment.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Tiger is the third animal in the Chinese zodiac and is considered the king of all beasts in Chinese culture — a status equivalent to the lion in Western tradition. In mythology, the Tiger is the guardian of the west and a symbol of courage, power, and protection against evil spirits. Tiger images were painted on walls and worn as talismans to ward off danger, and the Chinese character for "king" (王) is said to derive from the natural markings on the Tiger's forehead.

When combined with the Wood element, the Tiger takes on the qualities of spring's most dynamic energy — the force that drives new growth through frozen earth and pushes life upward toward the light. The Wood Tiger represents yang Wood at its most powerful: the tall, straight tree that grows boldly toward the sky, providing shelter and sustenance to all creatures beneath its canopy. In classical Chinese thought, this combination embodies the Confucian ideal of the benevolent ruler — one whose power is exercised not for personal glory but for the protection and flourishing of all under their care.`,

    symbolism: `The Wood Tiger symbolizes courageous compassion — the idea that true bravery is not the absence of fear but the willingness to act on behalf of others despite it. In traditional Chinese symbolism, the Tiger represents military prowess and protective power, while Wood adds the dimensions of growth, nurturing, and creative force. Together, they create a symbol of leadership that protects through strength while nurturing through kindness.

The Wood Tiger also carries powerful symbolism around natural authority. Just as a great tree commands the landscape without aggression — drawing life toward it through the shelter and sustenance it provides — the Wood Tiger leads through the gravitational pull of their character rather than through force or manipulation. This makes the Wood Tiger a symbol of organic, authentic leadership that contemporary culture increasingly recognizes as the most sustainable and effective form of power.`,

    modernInterpretation: `In contemporary culture, the Wood Tiger archetype resonates with the growing demand for leaders who combine strength with empathy, boldness with compassion, and personal ambition with social responsibility. The Wood Tiger represents a model of leadership that does not sacrifice kindness for effectiveness or authenticity for strategy — a model that is increasingly valued in business, politics, and social movements.

The 1986 Wood Tiger generation has emerged as a cohort of cultural innovators who blend personal expression with social consciousness. Athletes like Usain Bolt who compete with joy, artists like Lady Gaga who use their platform for advocacy, and entrepreneurs who build purpose-driven businesses all reflect the Wood Tiger's integration of personal power with genuine concern for others. This generation demonstrates that the most compelling form of leadership is not dominance but inspiration — the Wood Tiger's natural gift to the world.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
