// ============================================
// WATER RAT (壬子) — The Fluid Strategist
// ============================================
// The Water Rat combines the Rat's innate cunning and
// resourcefulness with Water's depth, adaptability, and
// intuitive wisdom — producing a master strategist who
// reads currents others cannot see.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-rat',
  profile: getProfileBySlug('water-rat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Rat is the most perceptive and diplomatically gifted of all Rat variants. Where the Rat is already renowned for its sharp intellect and survival instincts, the Water element deepens these qualities into something approaching genuine wisdom. Water Rats do not merely observe the world — they feel its undercurrents, sense its hidden patterns, and navigate its complexities with an almost preternatural grace. They are the quiet strategists who see three moves ahead while everyone else is still processing the first.

What distinguishes the Water Rat from other Rats is the element's softening influence on the Rat's sometimes abrasive opportunism. Water rounds the sharp edges, replacing blunt self-interest with subtle diplomacy and genuine empathy. The Water Rat can read a room with extraordinary accuracy — sensing moods, anticipating objections, and calibrating their approach with the precision of a master negotiator. They rarely force outcomes; instead, they guide situations toward their desired conclusion so smoothly that others believe it was their own idea.

Beneath this polished exterior lies a deep emotional life that the Water Rat guards carefully. They feel things intensely but reveal only what serves their purposes. This emotional depth gives them remarkable insight into human nature, but it can also lead to periods of melancholy, anxiety, and a persistent sense of being misunderstood. The Water Rat's greatest challenge is learning to be as transparent with those they love as they are strategic with everyone else.`,

    coreTraits: [
      'Perceptive',
      'Diplomatic',
      'Resourceful',
      'Intuitive',
      'Adaptable',
      'Discreet',
    ],

    strengths: [
      {
        trait: 'Strategic Intelligence',
        description:
          'The Water Rat possesses a mind that naturally maps complex systems and identifies leverage points. They see connections between seemingly unrelated events and can anticipate consequences that others miss entirely. This makes them exceptional planners, negotiators, and problem-solvers — the person you want in the room when the situation is genuinely complicated.',
      },
      {
        trait: 'Social Fluidity',
        description:
          'Water Rats move between social circles with remarkable ease, adapting their communication style, energy, and even persona to match their audience. This is not superficiality — it reflects a genuine ability to understand and connect with diverse people. They build networks that span industries, cultures, and social classes, and they maintain these connections with thoughtful, timely gestures.',
      },
      {
        trait: 'Emotional Intelligence',
        description:
          'The Water element grants the Rat an emotional depth that transforms raw cunning into genuine empathy. Water Rats can sense what others are feeling before a word is spoken, making them exceptional counselors, mediators, and leaders. They use this gift not merely for advantage but to create harmony in their environment.',
      },
      {
        trait: 'Resilient Adaptability',
        description:
          'Like water itself, the Water Rat flows around obstacles rather than crashing against them. When plans fail or circumstances shift, they adjust with remarkable speed and composure. This adaptability is not passive — it is a strategic flexibility that allows them to find opportunity in every setback and extract value from every situation.',
      },
    ],

    challenges: [
      {
        trait: 'Overthinking',
        description:
          'The Water Rat\'s powerful analytical mind can become its own trap. They are prone to analysis paralysis — seeing so many possibilities, angles, and risks that they struggle to commit to any single course of action. This endless mental churning can lead to missed opportunities and chronic indecision at precisely the moments that demand boldness.',
      },
      {
        trait: 'Emotional Guardedness',
        description:
          'While the Water Rat feels deeply, they rarely show it. Their instinct for self-preservation creates emotional walls that even close partners struggle to penetrate. This guardedness protects them from vulnerability but also prevents the deep intimacy they secretly crave. Over time, it can lead to isolation and the painful irony of being surrounded by people yet feeling profoundly alone.',
      },
      {
        trait: 'Manipulative Tendencies',
        description:
          'The Water Rat\'s social intelligence and strategic mind can tip from diplomacy into manipulation when they feel threatened or ambitious. They may orchestrate situations, withhold information, or play people against each other — often so subtly that even they do not recognize what they are doing. Learning to lead with honesty rather than strategy is a lifelong growth area.',
      },
      {
        trait: 'Anxiety and Worry',
        description:
          'The same perceptiveness that makes the Water Rat so effective also makes them vulnerable to anxiety. They see threats and risks that others miss, and their active imagination can magnify these into paralyzing worry. The Water Rat\'s mind never fully rests, and without deliberate calming practices, this can erode both mental health and physical vitality.',
      },
    ],

    elementInfluence: `In Wu Xing theory, Water is the Rat's natural element — the Rat is associated with the earthly branch Zi (子), which corresponds to deep winter, midnight, and the most concentrated yin energy in the zodiac. When the Water element is layered onto this already Water-affiliated animal, the result is a "double water" combination of exceptional depth and intuitive power.

This double-water nature amplifies the Rat's innate qualities to their fullest expression. Intelligence becomes wisdom. Cunning becomes strategy. Adaptability becomes fluidity. The Water Rat embodies Water's purest qualities: the ability to find the path of least resistance, to wear down obstacles through persistent gentle pressure, and to reflect the world back with perfect clarity. However, excess water also carries risks — emotional flooding, indecisiveness, and a tendency to drift without firm direction. The Water Rat benefits enormously from Earth and Wood element influences that provide structure and purpose to their considerable talents.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Rat's compatibility profile is shaped by their need for intellectual connection and emotional safety. They are drawn to partners who can match their mental agility while providing the warmth and stability their guarded heart craves. The Rat belongs to the First Trine alongside the Dragon and the Monkey — ambitious, driven signs that share the Rat's competitive intelligence. These natural allies understand the Water Rat's strategic mind without being threatened by it.

Traditional Chinese astrology places the Rat in direct opposition to the Horse on the zodiac wheel. This fundamental tension is particularly pronounced for the Water Rat, whose cautious, calculating approach clashes with the Horse's impulsive, freedom-loving nature. Yet oppositions can also create powerful attractions when both parties are willing to grow.`,

    bestMatches: [
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 92,
        summary:
          'A powerhouse alliance of ambition and vision. The Wood Dragon\'s bold creativity and expansive optimism perfectly complement the Water Rat\'s strategic precision. The Dragon provides the confidence and daring the Rat sometimes lacks, while the Rat grounds the Dragon\'s grand visions with practical intelligence. Wood feeds Water in the productive cycle, creating a naturally nourishing dynamic.',
      },
      {
        slug: 'earth-monkey',
        name: 'Earth Monkey',
        score: 88,
        summary:
          'Two brilliant minds that speak the same language. The Earth Monkey\'s pragmatic ingenuity matches the Water Rat\'s strategic depth, creating a partnership where ideas flow freely and execution follows naturally. The Earth element provides the stability the Water Rat craves, while the Monkey\'s playful energy prevents the relationship from becoming too serious or calculated.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 85,
        summary:
          'A complementary pairing of strategy and strength. The Metal Ox\'s unwavering determination and structured approach provide the anchor the Water Rat needs, while the Rat\'s flexibility and social intelligence soften the Ox\'s rigidity. Metal generates Water in the productive cycle, meaning the Ox naturally supports and strengthens the Rat\'s core nature.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 30,
        summary:
          'The Rat and Horse sit at opposite ends of the zodiac, and the element clash intensifies this tension. The Fire Horse\'s explosive independence and impulsive nature alarm the cautious Water Rat, while the Rat\'s calculated approach frustrates the Horse\'s desire for direct, passionate action. Bridging this gap requires extraordinary patience and mutual respect.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 38,
        summary:
          'The Rabbit\'s desire for harmony and avoidance of conflict clashes with the Water Rat\'s strategic directness. The Rat perceives the Rabbit as evasive and overly passive, while the Rabbit finds the Rat\'s calculating nature unsettling. Earth\'s grounding influence helps somewhat, but the fundamental temperamental difference makes sustained connection difficult.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 42,
        summary:
          'The Rooster\'s blunt perfectionism and the Rat\'s subtle maneuvering create friction. The Fire Rooster demands transparency and order — qualities that conflict with the Water Rat\'s preference for flexibility and strategic ambiguity. Both are intelligent and opinionated, leading to debates that generate more heat than light.',
      },
    ],

    elementAffinity: `As a double-water sign, the Water Rat interacts with other elements in distinctive ways. Metal element signs are natural allies — Metal generates Water in the productive cycle, providing structure and support that strengthens the Water Rat's core nature. Wood element signs create a dynamic partnership where Water feeds Wood, meaning the Water Rat naturally nourishes and empowers Wood-element partners. Earth element signs present a complex dynamic: Earth controls Water in the destructive cycle, which can feel constraining, but skilled Earth-element partners provide exactly the boundaries and stability the Water Rat needs. Fire element signs create the most challenging interactions — Water controls Fire, which can manifest as the Water Rat dampening a Fire partner's enthusiasm, creating resentment and frustration on both sides.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Water Rats excel in careers that reward strategic thinking, interpersonal finesse, and the ability to navigate complex systems. They are the consummate professionals — polished, prepared, and always three steps ahead of the competition. Unlike more flamboyant signs, the Water Rat achieves success through subtlety rather than spectacle, building influence quietly until their position is unassailable.

The ideal Water Rat career combines intellectual stimulation with social interaction. They thrive in roles that require reading people, managing information, and orchestrating outcomes across multiple stakeholders. Corporate strategy, diplomacy, intelligence work, financial analysis, and high-level consulting are all natural fits. They are also drawn to research and academia, where their love of deep analysis and pattern recognition can flourish.

Financially, the Water Rat is among the most shrewd signs in the zodiac. They have an intuitive sense for value, timing, and risk that makes them natural investors and wealth builders. Unlike more impulsive signs, the Water Rat accumulates wealth patiently, diversifying carefully and rarely making moves without thorough analysis. Their challenge is not earning money but spending it — Water Rats can be excessively cautious, missing opportunities for enjoyment or generosity due to deep-seated financial anxiety.`,

    idealCareers: [
      'Diplomat',
      'Financial Analyst',
      'Intelligence Analyst',
      'Corporate Strategist',
      'Research Scientist',
      'Psychologist',
      'Political Consultant',
      'Investment Manager',
    ],

    financialStyle:
      'Water Rats are naturally cautious and strategic with money, preferring steady accumulation over high-risk speculation. They excel at identifying undervalued opportunities and building diversified portfolios that weather market turbulence. Their financial instinct is remarkably sharp — they can sense shifts in economic currents before they become obvious to others. The challenge for Water Rats is overcoming their tendency toward excessive frugality. Their deep-seated need for security can prevent them from enjoying the fruits of their labor or investing in experiences that enrich life beyond the balance sheet.',

    tips: [
      'Leverage your network strategically. Your ability to build and maintain diverse professional relationships is your greatest career asset. Invest time in nurturing connections across industries and hierarchies — the Water Rat who tends their network consistently reaps extraordinary rewards.',
      'Trust your intuition in negotiations. Your ability to read people and sense underlying dynamics gives you a significant advantage in any negotiation. When your gut tells you something is off, investigate — your instincts are usually right.',
      'Avoid the trap of perpetual preparation. Your thorough, analytical nature can lead to over-researching and under-acting. Set clear deadlines for decision-making and force yourself to commit even when you feel you do not have complete information. Perfection is the enemy of progress.',
      'Seek roles with autonomy over process. You work best when you can approach problems in your own way and at your own pace. Environments that micromanage methodology stifle your natural strategic instincts.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Rat approaches love with the same strategic intelligence they bring to everything else — and this is both their greatest strength and most significant vulnerability. They observe potential partners carefully, assessing compatibility with a thoroughness that can feel more like due diligence than romance. Yet beneath this careful exterior beats a deeply romantic heart that craves connection, intimacy, and a partner who can penetrate their carefully constructed defenses.

When a Water Rat finally allows themselves to fall in love, the depth of their devotion is remarkable. They are attentive, thoughtful partners who remember every detail — preferences, stories, meaningful dates — and use this knowledge to create moments of genuine magic. Their emotional intelligence makes them exceptionally attuned to their partner's needs, often anticipating what is wanted before it is expressed.

The challenge for the Water Rat in love is vulnerability. They have spent their entire life building sophisticated emotional defenses, and lowering them — even for someone they deeply trust — feels terrifyingly risky. They may test partners repeatedly, creating small crises to gauge loyalty before fully committing. The Water Rat who learns to lead with their heart rather than their strategy discovers that love, like water, finds its way when you stop trying to control its course.`,

    loveStyle:
      'The Water Rat loves with quiet intensity and thoughtful devotion. They express affection through acts of service, meaningful gifts, and an encyclopedic memory for the details that matter to their partner. Their love language is less about grand public gestures and more about the private moments — a perfectly chosen book, remembering an offhand comment from months ago, anticipating needs before they are voiced. They seek a partner who appreciates depth over drama and can provide the emotional security they need to slowly, tentatively, let down their guard.',

    idealPartnerTraits: [
      'Emotionally Intelligent',
      'Patient',
      'Intellectually Curious',
      'Trustworthy',
      'Independently Secure',
    ],

    tips: [
      'Practice vulnerability in small doses. Share something real about yourself each day — a fear, a hope, a childhood memory. The intimacy you crave cannot exist without the risk you avoid. Start small and build gradually.',
      'Stop testing your partner. Your instinct to probe for weaknesses and gauge loyalty creates unnecessary tension. Choose to trust, and let your partner prove themselves through natural interaction rather than orchestrated trials.',
      'Balance analysis with presence. When you are with your partner, resist the urge to strategize the relationship. Sometimes the most powerful thing you can do is simply be present — fully listening, fully feeling, without agenda.',
      'Communicate your needs directly. Your subtle, indirect style of signaling what you want often leads to misunderstandings. Your partner cannot read currents as well as you can. Say what you need clearly and without apology.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Rat's double-water constitution gives them a fluid, adaptive physiology but also a pronounced vulnerability to conditions associated with excess water and deficient warmth. In Traditional Chinese Medicine, the Water element governs the Kidneys, Bladder, and the body's fluid systems. Water Rats are predisposed to conditions involving these organs, particularly when stress, overwork, or emotional suppression disrupts their delicate internal balance.

The most common Water Rat health pattern is the slow accumulation of tension. Unlike fire signs who burn out spectacularly, Water Rats erode gradually — absorbing stress like a sponge until they reach saturation. Kidney fatigue, lower back pain, urinary issues, fluid retention, and bone density concerns are the body's signals that the Water Rat's reserves are depleted. Anxiety and insomnia are also characteristic, as the endlessly active mind refuses to quiet even when the body desperately needs rest.

Prevention for the Water Rat centers on warmth and movement. Their naturally cool, yin constitution benefits from warming practices — both physical and emotional. Regular exercise that generates internal heat, warm nourishing foods, and genuine emotional expression all help maintain the Water Rat's vitality. The Water Rat who learns to balance their cool, reflective nature with intentional warmth and activity enjoys excellent longevity.`,

    bodyAreas: ['Kidneys', 'Bladder', 'Bones', 'Ears'],

    exercises: [
      'Swimming and water sports',
      'Tai chi and qigong',
      'Yoga with emphasis on hip openers',
      'Brisk walking in nature',
    ],

    dietTips: [
      'Emphasize warming foods to counterbalance excess internal cold: ginger, cinnamon, bone broth, roasted root vegetables, and warm soups. These foods support kidney function and improve circulation in the Water Rat\'s naturally cool constitution.',
      'Support kidney health with black-colored foods valued in TCM: black sesame seeds, black beans, blackberries, seaweed, and dark leafy greens. These foods are traditionally associated with nourishing the Water element\'s primary organ system.',
      'Reduce excessive raw, cold, and damp-producing foods. While the Water Rat may crave cold drinks and raw salads, overconsumption of these can further cool an already yin-dominant constitution, leading to digestive sluggishness and fluid retention.',
      'Stay hydrated mindfully. Despite being a double-water sign, Water Rats benefit from warm or room-temperature water rather than iced drinks. Herbal teas — particularly ginger, cinnamon, and astragalus — provide hydration while supporting kidney warmth.',
    ],

    mentalHealth:
      'The Water Rat\'s greatest mental health challenge is managing their relentless inner monologue. Their strategic mind never stops analyzing, planning, and worrying — a pattern that can escalate into generalized anxiety, insomnia, and obsessive thinking. Mindfulness meditation is particularly beneficial, as it trains the mind to observe thoughts without engaging every one. Water Rats also benefit from journaling, which externalizes the mental chatter and creates clarity from confusion. Social connection is essential medicine — despite their guarded nature, Water Rats who maintain close, honest friendships experience significantly less anxiety than those who isolate. Professional support through cognitive behavioral therapy can be transformative, helping the Water Rat distinguish genuine threats from manufactured worries and develop practical tools for managing their prodigious but sometimes overwhelming mental energy.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 4, 9],
    colors: ['Blue', 'Black', 'Silver', 'White'],
    direction: 'North',
    gemstones: ['Aquamarine', 'Moonstone', 'Labradorite'],
    flowers: ['Lotus', 'Water Lily', 'Jasmine'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER RATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Eminem',
        profession: 'Rapper/Producer',
        birthYear: 1972,
        description:
          'Eminem\'s extraordinary verbal dexterity and strategic reinvention throughout his career embody the Water Rat\'s intellectual sharpness and adaptive survival instincts. His ability to read cultural currents and transform personal pain into commercially dominant art reflects the sign\'s gift for turning depth into power.',
      },
      {
        name: 'Cameron Diaz',
        profession: 'Actress/Entrepreneur',
        birthYear: 1972,
        description:
          'Cameron Diaz navigated Hollywood with the Water Rat\'s characteristic charm and strategic intelligence, building a career that spanned comedy, drama, and action before pivoting to wellness entrepreneurship — demonstrating the sign\'s talent for sensing shifts and adapting accordingly.',
      },
      {
        name: 'Dwayne "The Rock" Johnson',
        profession: 'Actor/Entrepreneur',
        birthYear: 1972,
        description:
          'The Rock\'s masterful transition from professional wrestling to global entertainment empire showcases the Water Rat\'s strategic brilliance and social intelligence. His carefully cultivated public persona and shrewd business decisions reflect the sign\'s ability to build influence systematically and patiently.',
      },
      {
        name: 'Ben Affleck',
        profession: 'Actor/Director',
        birthYear: 1972,
        description:
          'Ben Affleck\'s career arc — from early success to public struggle to critical renaissance as a director — illustrates the Water Rat\'s resilience and adaptive intelligence. His ability to reinvent himself and navigate Hollywood\'s treacherous waters reflects the sign\'s strategic depth and emotional complexity.',
      },
      {
        name: 'Alan Turing',
        profession: 'Mathematician/Cryptographer',
        birthYear: 1912,
        description:
          'Alan Turing, the father of modern computing and the codebreaker who helped win World War II, represents the Water Rat\'s intellectual brilliance at its highest expression. His ability to see patterns invisible to others and solve problems through unconventional thinking is quintessentially Water Rat.',
      },
      {
        name: 'Gene Kelly',
        profession: 'Actor/Dancer',
        birthYear: 1912,
        description:
          'Gene Kelly revolutionized the movie musical with his fluid, athletic dancing style and innovative choreography. His seamless blending of technical precision with emotional expression embodies the Water Rat\'s gift for combining strategic intelligence with genuine artistry.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rat holds the first position in the Chinese zodiac, a placement rooted in the famous myth of the Great Race. According to legend, the Jade Emperor declared that the zodiac animals would be ordered by their arrival at his palace. The clever Rat, knowing it could not outrun the larger animals, hitched a ride on the Ox's back and leapt off at the last moment to cross the finish line first. This origin story perfectly encodes the Rat's essential nature: intelligence triumphing over brute force, strategy over strength.

When the Water element is paired with the Rat, the mythology deepens significantly. Water is the Rat's native element — the Rat corresponds to the earthly branch Zi (子), which represents the deepest point of winter and the hour of midnight. This association connects the Water Rat to themes of renewal, hidden potential, and the mysterious power that lies dormant in darkness. In Taoist philosophy, the Water Rat represents the paradox of strength through yielding — the principle that the softest substance in nature (water) can wear away the hardest stone through patient, persistent action.

In Chinese folklore, the Rat is also associated with wealth, abundance, and fertility. A Water Rat is considered especially auspicious for financial matters, as water symbolizes the flow of prosperity. Traditional belief holds that water must keep moving to remain fresh and life-giving — a metaphor for the Water Rat's need to keep their considerable talents in circulation rather than hoarding them.`,

    symbolism: `The Water Rat symbolizes the union of intellect and intuition, strategy and flow. In traditional Chinese symbolism, it represents the moment when keen observation meets deep understanding — the flash of insight that comes not from forcing an answer but from allowing it to surface naturally. This makes the Water Rat a symbol of wisdom in its most practical form: knowing what to do and when to do it.

Water flowing in the darkness of the Rat's midnight hour carries profound symbolic meaning. It represents the hidden currents that shape events beneath the surface — the unseen forces of influence, timing, and strategic patience. The Water Rat reminds us that the most powerful movements often happen where no one is looking, and that true intelligence reveals itself not in dramatic displays but in quiet, decisive action at the right moment.

In the Wu Xing cycle, Water nourishes Wood — suggesting that the Water Rat's deepest purpose is to cultivate growth in others. Their strategic gifts, emotional intelligence, and adaptive nature serve not just personal ambition but the broader ecosystem of relationships and communities they inhabit.`,

    modernInterpretation: `In contemporary culture, the Water Rat archetype resonates powerfully with the age of information and strategic thinking. In a world where data flows like water and success increasingly depends on reading complex systems, the Water Rat's combination of analytical intelligence and intuitive perception feels almost prophetically relevant. They are the natural data scientists, strategic consultants, and network builders of the modern era.

The Water Rat also represents a modern evolution in how we understand intelligence itself. Where previous generations valued overt displays of knowledge and authority, contemporary culture increasingly recognizes the power of emotional intelligence, adaptive thinking, and strategic influence — all core Water Rat competencies. The quiet strategist who builds consensus, reads rooms, and achieves outcomes through finesse rather than force is now seen not as passive but as sophisticated.

For those born in Water Rat years, this cultural shift is validating. The qualities that might have once been dismissed as indecisiveness or excessive caution are now recognized as exactly the kind of thoughtful, adaptive leadership that complex modern challenges demand. The Water Rat's gift for seeing the whole board, anticipating moves, and flowing around obstacles makes them uniquely suited to navigate an era defined by uncertainty, complexity, and rapid change.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
