// ============================================
// METAL PIG (庚亥) — The Benevolent Stronghold
// ============================================
// Metal fortifies the Pig's generous heart with structural
// strength, creating a force of principled abundance.
// Years: 1911, 1971

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-pig',
  profile: getProfileBySlug('metal-pig')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Pig is the most determined and structurally grounded expression of the Pig archetype. Where the Pig is celebrated for its generosity, warmth, and capacity for enjoyment, the Metal element adds a backbone of resolve and a framework of discipline that transforms the Pig's natural abundance from indulgence into purposeful prosperity. The Metal Pig does not merely enjoy life — they build the foundations that make lasting enjoyment possible, combining the Pig's legendary generosity with Metal's strategic awareness to create wealth, security, and community in equal measure.

What distinguishes the Metal Pig from other Pig variants is the surprising strength beneath their warm exterior. Most Pigs are perceived as soft, trusting, and easily taken advantage of — assumptions that the Metal Pig defies with a quiet but formidable willpower. They are generous, yes, but not naive. They are trusting, but not foolish. The Metal element gives them an internal structure that allows them to be open-hearted without being vulnerable, to give freely without being depleted, and to trust others while maintaining clear boundaries that protect their interests and their family's security.

Beneath the sociable, pleasure-loving exterior, the Metal Pig possesses a depth of conviction that can surprise those who mistake their geniality for lack of substance. When their principles are challenged or their loved ones threatened, the Metal Pig reveals a resolve that is all the more powerful for being unexpected. They are the iron fist in the velvet glove — and those who push past their generosity to find the boundary discover that the boundary is absolute.`,

    coreTraits: [
      'Generous',
      'Determined',
      'Sociable',
      'Principled',
      'Resilient',
      'Warm-Hearted',
    ],

    strengths: [
      {
        trait: 'Principled Generosity',
        description:
          'The Metal Pig\'s generosity is not indiscriminate but purposeful. They give abundantly — their time, resources, energy, and affection — but they do so with an awareness of where their generosity creates genuine value versus where it enables dependency. This principled approach to giving makes them extraordinarily effective philanthropists, community builders, and supporters of those who are working to improve themselves.',
      },
      {
        trait: 'Social Strength',
        description:
          'Metal Pigs possess the rare ability to create genuine warmth and connection in any social environment while maintaining the structural integrity to set and enforce boundaries. They are the life of the party who also knows when the party should end — combining social intelligence with personal discipline in a way that makes them both beloved and respected.',
      },
      {
        trait: 'Resilient Optimism',
        description:
          'The Metal Pig\'s optimism is not naive — it is tempered by Metal\'s awareness of reality\'s harsher aspects. This creates a resilient positivity that acknowledges difficulty without being defeated by it. The Metal Pig can face setbacks, disappointments, and betrayals without losing their fundamental belief that life is good, people are mostly decent, and tomorrow holds genuine promise.',
      },
      {
        trait: 'Wealth-Building Capacity',
        description:
          'The Pig is already associated with prosperity in Chinese culture, and Metal\'s disciplined influence transforms the Pig\'s natural affinity for abundance into genuine wealth-building ability. Metal Pigs combine the Pig\'s instinct for opportunity with Metal\'s strategic discipline, creating a financial profile that generates, preserves, and wisely distributes wealth.',
      },
    ],

    challenges: [
      {
        trait: 'Over-Indulgence',
        description:
          'Despite Metal\'s disciplining influence, the Pig\'s love of pleasure remains a significant temptation. Metal Pigs can overeat, overspend, and overcommit to sensory experiences that provide immediate gratification at the expense of long-term well-being. Their challenge is not eliminating pleasure but moderating it — a balance that the pleasure-loving Pig finds genuinely difficult.',
      },
      {
        trait: 'Stubbornness in Conflict',
        description:
          'When the Metal Pig\'s principles are engaged in a dispute, their normally accommodating nature gives way to an obstinacy that can be disproportionate to the issue at hand. The combination of the Pig\'s emotional conviction and Metal\'s structural rigidity creates a stubbornness that refuses to yield even when compromise would serve everyone — including the Pig — better.',
      },
      {
        trait: 'Difficulty Saying No',
        description:
          'Despite their Metal-reinforced boundaries, Metal Pigs still struggle to refuse requests from people they care about. Their generous nature inclines them to say yes even when doing so overextends their resources, and the resulting accumulation of commitments can create stress, resentment, and the very depletion their Metal boundaries are meant to prevent.',
      },
      {
        trait: 'Naivety About Others\' Motives',
        description:
          'The Metal Pig\'s warm, trusting nature can make them slower than other signs to recognize when someone is taking advantage of their generosity. While Metal provides more protection than other Pig variants enjoy, the fundamental Pig belief in human goodness can still lead to exploitation by those who do not share that belief.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Pig is a Water-phase animal, embodying the flowing, adaptable, and emotionally rich energy of the water element. When Metal overlays this Water nature, the productive cycle is engaged — Metal generates Water — creating an exceptionally harmonious internal dynamic. The Metal Pig benefits from an element pairing where the governing element directly nourishes the animal's intrinsic nature, producing a personality of unusual balance and integrated strength.

This Metal-Water synergy is the source of the Metal Pig's distinctive combination of strength and warmth. Metal provides structure, discipline, and determination; Water provides emotional depth, adaptability, and generosity. The productive relationship between these elements means that the Metal Pig's disciplined side actively feeds their emotional and social nature, rather than constraining it. This is why the Metal Pig can be both principled and warm, both structured and flowing, both strong and generous — their elements work together rather than against each other.

The risk of this harmonious pairing is that it can become too self-reinforcing. The Metal Pig's strengths feed each other so naturally that they may not develop the rougher, more challenging qualities — confrontational honesty, competitive drive, strategic ruthlessness — that other element pairings force their signs to develop. The Metal Pig's growth edge lies in cultivating Fire's passionate assertiveness and Wood's ambitious growth to complement their naturally balanced constitution.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Pigs are among the warmest and most rewarding partners in the zodiac, offering a combination of genuine affection, principled loyalty, and material generosity that creates deeply satisfying relationships. They need partners who appreciate their warmth, respect their values, and can match their emotional generosity without exploiting it.

The Pig belongs to the Fourth Trine alongside the Rabbit and the Goat — signs that share the Pig's love of beauty, harmony, and emotional connection. These natural allies create relationships of extraordinary warmth and mutual care. The Snake sits opposite the Pig on the zodiac wheel, creating tension between the Pig's open trust and the Snake's calculated secrecy.`,

    bestMatches: [
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 93,
        summary:
          'A beautifully harmonious partnership where both signs\' love of beauty, peace, and emotional richness creates a relationship of extraordinary tenderness. The Wood Rabbit\'s gentle refinement complements the Metal Pig\'s warm generosity, and the Wood element nourishes both the Rabbit\'s and the Pig\'s Water intrinsic natures. Together, they create a home of uncommon beauty and genuine love.',
      },
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 88,
        summary:
          'The Water Goat\'s artistic sensitivity and emotional depth resonate with the Metal Pig\'s warmth and appreciation for beauty. Both signs value harmony and emotional connection, creating a partnership where each partner feels genuinely understood and cherished. The shared Water influence deepens emotional intimacy to extraordinary levels.',
      },
      {
        slug: 'earth-tiger',
        name: 'Earth Tiger',
        score: 84,
        summary:
          'The Earth Tiger\'s courageous protectiveness and grounded strength complement the Metal Pig\'s generous warmth. The Tiger provides the security and decisive action that the Pig appreciates, while the Pig offers the warmth and emotional richness that softens the Tiger\'s harder edges. Earth generates Metal, creating a supportive energetic flow.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-snake',
        name: 'Metal Snake',
        score: 28,
        summary:
          'The zodiac opposition between Pig and Snake reaches its sharpest expression when both carry Metal. The Metal Snake\'s secretive, calculating nature directly conflicts with the Metal Pig\'s open, trusting approach to life. The Pig finds the Snake paranoid and dishonest; the Snake finds the Pig dangerously naive. Two Metal wills locked in fundamental disagreement about how to navigate the world.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 35,
        summary:
          'The Fire Monkey\'s clever, strategic approach to relationships feels manipulative to the sincere Metal Pig. The Pig\'s open-hearted directness feels exploitable to the Monkey. While initial attraction may spark from the Monkey\'s wit and the Pig\'s warmth, sustained trust is difficult to build when one partner values sincerity and the other values strategy.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 40,
        summary:
          'The Fire Rooster\'s critical perfectionism clashes with the Metal Pig\'s accepting, pleasure-oriented nature. The Rooster finds the Pig undisciplined and too easily satisfied; the Pig finds the Rooster harsh and impossible to please. Fire melts Metal, adding element tension to a personality mismatch that erodes the Pig\'s natural confidence.',
      },
    ],

    elementAffinity: `The Metal Pig's harmonious Metal-Water internal dynamic creates a personality that connects easily with a wide range of element signs. Water element signs resonate deeply with the Pig's intrinsic nature, creating relationships of exceptional emotional depth and mutual understanding. Earth element signs provide grounding support and generate Metal, reinforcing the Pig's structural strength. Wood element signs are nourished by the Pig's Water nature, creating dynamic, growth-oriented relationships where both partners flourish. Fire element signs offer the passionate intensity that the Metal Pig's balanced nature sometimes lacks but also present the destructive cycle challenge (Fire melts Metal) that can threaten the Pig's equilibrium. Other Metal signs create mutual respect for discipline and principles, with enough warmth from the Pig's Water nature to prevent emotional coldness.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Pigs thrive in careers that combine material reward with genuine service to others. They are motivated by both prosperity and purpose, and the ideal Metal Pig career provides both — allowing them to build wealth while contributing meaningfully to their community, their industry, or the broader world.

The ideal Metal Pig career leverages their natural social warmth, principled determination, and instinct for creating abundance. They excel in hospitality, food and beverage leadership, real estate development, philanthropic management, and any field where building relationships and creating prosperity for a community is the primary objective. They also thrive in roles that require generous leadership — positions where their combination of warmth and structural discipline creates teams that feel both supported and purposeful.

Metal Pigs struggle in cold, competitive environments where individual achievement is valued over collective success. They need to work with and for people, and they need to see the tangible positive impact of their efforts on the lives of those around them.`,

    idealCareers: [
      'Restaurant Owner/Chef',
      'Real Estate Developer',
      'Philanthropic Director',
      'Hospitality Executive',
      'Community Foundation Leader',
      'Wealth Manager',
      'Event Producer',
      'Agricultural Business Owner',
    ],

    financialStyle:
      'Metal Pigs are natural wealth builders whose combination of the Pig\'s prosperity instinct and Metal\'s structural discipline creates genuine financial strength. They earn well, save consistently, and invest with a long-term orientation that builds substantial wealth over time. Their challenge is the tension between accumulation and generosity — the Pig\'s instinct to give freely can conflict with Metal\'s determination to build security. The most financially successful Metal Pigs create formal structures for their giving — charitable foundations, community funds, or designated giving budgets — that allow them to be generous within a disciplined framework.',

    tips: [
      'Set clear professional boundaries around your generosity. Your instinct to help everyone who asks can dilute your professional focus and deplete your energy. Develop criteria for when and how you give your professional support, and communicate those boundaries clearly.',
      'Pursue leadership roles that leverage your natural warmth. Metal Pigs make exceptional leaders because people genuinely trust and like them. Do not shy away from positions of authority — your combination of principled determination and genuine care for your team creates the kind of leadership that organizations desperately need.',
      'Build financial structures before financial temptation. Automate savings, establish investment accounts, and create giving budgets before the money arrives — this prevents the Pig\'s generous and pleasure-loving nature from undermining Metal\'s wealth-building agenda.',
      'Value your emotional intelligence as a professional asset. In a world that often overvalues analytical skill and undervalues interpersonal warmth, the Metal Pig\'s social gifts are a genuine competitive advantage. Your ability to build trust, create community, and make people feel valued generates results that pure strategy cannot.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love is the Metal Pig's most natural element. They are among the zodiac's most generous, attentive, and emotionally present partners — bringing to their relationships a warmth and devotion that makes their chosen person feel genuinely cherished, supported, and secure. The Metal Pig's love is not complicated or conditional; it is abundant, forthright, and expressed through daily acts of care, physical affection, and the creation of a shared life rich in pleasure and meaning.

The Metal element adds a dimension of structural strength to the Pig's naturally open heart. Where other Pig variants may love with abandon and suffer the consequences of giving too much, the Metal Pig maintains boundaries that protect the relationship from the exploitation their generosity can attract. They love freely but not foolishly — and the partner who earns their full trust receives a love of extraordinary quality.

The challenge in Metal Pig relationships is the Pig's tendency to avoid conflict. Their desire for harmony can lead them to suppress grievances, accommodate unreasonable demands, and sacrifice their own needs in service of keeping the peace. The Metal element provides some resistance to this pattern, but the fundamental Pig aversion to confrontation remains a growth edge throughout their romantic life.`,

    loveStyle:
      'The Metal Pig loves with generous abundance — physically affectionate, emotionally present, and materially generous in ways that create a relationship of genuine warmth and comfort. Their love language encompasses all five: words of affirmation, quality time, physical touch, acts of service, and gifts. They express love through shared meals, comfortable homes, abundant affection, and an unwavering commitment to their partner\'s happiness. They need a partner who receives their generosity with genuine appreciation and who reciprocates with equal emotional investment.',

    idealPartnerTraits: [
      'Appreciative',
      'Emotionally Generous',
      'Honest',
      'Physically Affectionate',
      'Loyal',
    ],

    tips: [
      'Address conflicts before they accumulate. Your desire for harmony makes you avoid difficult conversations, but unaddressed issues do not disappear — they ferment into resentment. Develop the practice of raising concerns early, with the same warmth and care you bring to everything else in your relationship.',
      'Maintain your individual identity within the relationship. Metal Pigs can become so focused on their partner\'s happiness that they lose touch with their own desires, friendships, and interests. A healthy relationship requires two complete individuals, not one person serving another.',
      'Trust your Metal instincts about boundary violations. When someone is taking advantage of your generosity, your Metal element sends a signal — a tightening, a resistance, a sense that something is wrong. Listen to this signal rather than overriding it with your Pig nature\'s desire to see the best in everyone.',
      'Accept that you deserve as much as you give. Metal Pigs often unconsciously believe that their role in relationships is to provide while their partner\'s role is to receive. Challenge this assumption. You deserve the same quality of care, attention, and generosity that you offer — and a worthy partner will provide it.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Pig's health profile reflects the harmonious Metal-Water dynamic that characterizes this sign. In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Pig's Water nature connects to the Kidneys and Bladder. This creates a health landscape where the eliminatory and filtration systems — lungs, large intestine, kidneys — are the primary areas requiring attention.

The Metal Pig's primary health pattern is over-indulgence leading to systemic strain. Their love of food, drink, and sensory pleasure can overwhelm the eliminatory systems that the Metal-Water axis depends on. Rich meals, alcohol, and the sedentary social lifestyle the Pig naturally gravitates toward can accumulate into metabolic issues, weight gain, and the chronic conditions that follow.

The Metal Pig's greatest health advantage is their social nature. They are far more likely to maintain health routines that involve other people — group exercise classes, cooking with friends, walking with a companion — than solitary health practices. Leveraging their social instinct for health is the Metal Pig's most effective wellness strategy.`,

    bodyAreas: ['Kidneys', 'Lungs', 'Large Intestine', 'Reproductive System'],

    exercises: [
      'Group fitness classes',
      'Swimming',
      'Tai chi in the park',
      'Social dancing',
    ],

    dietTips: [
      'Practice the art of moderate abundance. The Metal Pig does not thrive on restriction — they thrive on quality over quantity. Choose the best ingredients, prepare them with care, and eat with full attention. One excellent meal satisfies more deeply than three mediocre ones.',
      'Support kidney health with warming, nourishing foods: black beans, walnuts, bone broth, dark berries, and seaweed. The Pig\'s Water nature depends on strong Kidney function, which becomes the foundation of overall vitality.',
      'Include lung-supporting foods for Metal element balance: pears, white radish, garlic, and honey. The Metal connection to the Lungs means that respiratory health directly impacts energy levels and immune function.',
      'Moderate alcohol and rich foods as an investment in longevity. The Metal Pig\'s social nature encourages frequent dining and drinking occasions. Develop the discipline to enjoy these experiences without excess — set clear limits before social events and honor them consistently.',
    ],

    mentalHealth:
      'The Metal Pig\'s mental health is closely tied to the quality of their social connections and their ability to maintain personal boundaries. When they are surrounded by people who appreciate and reciprocate their generosity, they thrive — experiencing a contentment and vitality that radiates outward. When they feel exploited, unappreciated, or isolated from genuine community, they can sink into a heavy depression that is made worse by their tendency to self-soothe through food, drink, or other indulgences. The most effective mental health intervention for the Metal Pig is community — genuine, reciprocal relationships with people who value them for who they are rather than what they provide. Group therapy, community activities, and shared creative endeavors all serve this need. Individual therapy works best when it focuses on boundary-setting and self-worth — helping the Metal Pig recognize that their value is inherent rather than contingent on what they give. The fundamental insight for this sign\'s mental well-being is that taking care of themselves is not selfishness but the prerequisite for the generosity that is their deepest expression of self.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['White', 'Silver', 'Gold', 'Yellow'],
    direction: 'West',
    gemstones: ['White Agate', 'Ruby', 'Lapis Lazuli'],
    flowers: ['Hydrangea', 'Daisy', 'White Magnolia'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL PIGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Ewan McGregor',
        profession: 'Actor',
        birthYear: 1971,
        description:
          'Ewan McGregor\'s warmth on screen and his genuine, unpretentious public persona reflect the Metal Pig\'s combination of generous spirit and principled determination. His diverse career choices — from Trainspotting to Star Wars to long-distance motorcycle journeys — demonstrate the sign\'s love of rich experience guided by a clear personal compass.',
      },
      {
        name: 'Tupac Shakur',
        profession: 'Rapper/Actor/Poet',
        birthYear: 1971,
        description:
          'Tupac\'s extraordinary ability to combine raw emotional generosity with steely determination embodies the Metal Pig at their most powerful. His music expressed the Pig\'s deep care for community alongside Metal\'s unflinching willingness to confront injustice, creating art of both warmth and structural strength.',
      },
      {
        name: 'Snoop Dogg',
        profession: 'Rapper/Entrepreneur',
        birthYear: 1971,
        description:
          'Snoop Dogg\'s evolution from controversial rapper to beloved cultural icon reflects the Metal Pig\'s natural warmth and social intelligence. His ability to build lasting relationships across every domain of entertainment, combined with his entrepreneurial success, demonstrates the sign\'s gift for creating prosperity through genuine connection.',
      },
      {
        name: 'Mark Wahlberg',
        profession: 'Actor/Producer/Entrepreneur',
        birthYear: 1971,
        description:
          'Mark Wahlberg\'s transformation from troubled youth to disciplined actor, producer, and business mogul demonstrates the Metal Pig\'s remarkable capacity for determined self-improvement. His famous early-morning workout discipline, combined with his warm family devotion, reflects the sign\'s union of structural resolve and generous heart.',
      },
      {
        name: 'Lucille Ball',
        profession: 'Comedian/Producer',
        birthYear: 1911,
        description:
          'Lucille Ball\'s extraordinary combination of comedic warmth and business acumen — she was one of the first women to run a major television studio — perfectly embodies the Metal Pig\'s fusion of generosity and structural strength. Her ability to make millions laugh while building a media empire reflects the sign\'s remarkable capacity to create abundance through genuine human connection.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Pig holds the twelfth and final position in the Chinese zodiac, completing the twelve-year cycle with an energy of abundance, fulfillment, and generous conclusion. According to legend, the Pig arrived last to the Great Race not because it was slowest but because it stopped to eat and nap along the way — a myth that establishes the Pig's fundamental values: enjoyment of life's pleasures is not laziness but wisdom.

When Metal combines with the Pig, traditional Chinese astrology describes a sign of structured abundance — prosperity that is not merely accumulated but organized, distributed, and sustained. Metal Pig years are associated with periods of economic growth tempered by fiscal discipline, philanthropic expansion, and the construction of social structures that distribute wealth more equitably. The 1971 Metal Pig year coincided with significant developments in social welfare policy and economic restructuring worldwide.

In Chinese culture, the Pig is a symbol of prosperity and good fortune — pig-shaped banks are found in homes across East Asia, and the Pig year is traditionally considered an auspicious time for business ventures and financial growth. The Metal Pig amplifies this prosperity symbolism with the structural strength needed to preserve and grow wealth across generations.`,

    symbolism: `The Metal Pig symbolizes generous strength — the power that comes not from dominance but from abundance, shared freely and sustained through discipline. In Five Element symbolism, Metal represents the harvest refined into lasting value, while the Pig represents the culmination of the zodiac cycle — the point where experience, wisdom, and accumulated abundance converge. Together, they create a symbol of mature prosperity: wealth that has been earned, refined, and made available for the benefit of the community.

The Pig's round, abundant form takes on new significance when combined with Metal's structural quality. The Metal Pig is not soft but solid — their abundance is not vulnerability but strength. They represent the principle that true wealth is not what you hoard but what you build, share, and sustain. The Metal Pig's symbolism teaches that the most enduring forms of prosperity are those that enrich everyone they touch.

In traditional Chinese art, the Pig is often depicted with gold coins or treasure — symbols of material abundance. The Metal Pig adds to this image the suggestion of a stronghold: a vault, a treasury, a protected space where abundance is not merely displayed but safeguarded for future generations.`,

    modernInterpretation: `In contemporary culture, the Metal Pig archetype resonates with the growing conversation about sustainable prosperity, generous capitalism, and the social responsibility of wealth. In an era of increasing inequality and environmental strain, the Metal Pig offers a model of abundance that is both personally rewarding and socially beneficial — prosperity that is structured to endure and designed to be shared.

The Metal Pig's relevance extends to modern discussions about work-life balance, emotional well-being, and the quality of human connection in an increasingly transactional world. They remind us that the good life is not achieved through relentless accumulation but through the deliberate creation of warmth, community, and shared abundance. In a culture that often mistakes busyness for productivity and wealth for well-being, the Metal Pig stands for a more complete vision of human flourishing.

For those born in Metal Pig years, the contemporary world offers both the opportunity to build genuine prosperity and the challenge of maintaining generosity in an environment that often rewards self-interest. The Metal Pig's greatest contribution to the modern era is the demonstration that strength and warmth, discipline and pleasure, ambition and generosity are not opposites but partners — and that the most successful life is the one that integrates them all.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
