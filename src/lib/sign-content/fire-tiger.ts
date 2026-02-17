// ============================================
// FIRE TIGER (丙寅) — The Fearless Inferno
// ============================================
// Fire amplifies the Tiger's natural courage and intensity,
// creating a dazzling, unstoppable leader who blazes trails
// and inspires others through sheer force of personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-tiger',
  profile: getProfileBySlug('fire-tiger')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Tiger is one of the most electrifying combinations in the Chinese zodiac. The Tiger — already the sign of courage, power, and unpredictability — is set ablaze by the Fire element, producing a personality that is as dazzling as it is dangerous. Fire Tigers do not walk into a situation; they burst in, commanding attention through a combination of physical magnetism, fearless confidence, and an intensity that makes it impossible to look away. They are the zodiac's action heroes, living every moment as though it were the climax of an epic story.

What makes the Fire Tiger truly extraordinary is the fusion of the Tiger's instinctive bravery with Fire's passionate conviction. The standard Tiger is courageous by nature — it acts on impulse and trusts its reflexes. The Fire Tiger adds a layer of burning purpose to this courage, transforming raw bravery into a directed force. They do not merely take risks; they take risks for reasons that matter to them, whether that means fighting injustice, pioneering new territory, or defending those who cannot defend themselves.

Yet the Fire Tiger's intensity is a double-edged sword of the sharpest kind. Their energy is so potent that it can overwhelm allies as easily as it overpowers adversaries. They struggle with moderation in all its forms — emotional restraint, patience, diplomacy, and the willingness to let others lead. The Fire Tiger who channels their formidable power with wisdom and selectivity becomes a genuinely transformative force; the one who burns indiscriminately leaves a trail of scorched relationships and missed opportunities.`,

    coreTraits: [
      'Courageous',
      'Magnetic',
      'Impulsive',
      'Protective',
      'Intense',
      'Optimistic',
    ],

    strengths: [
      {
        trait: 'Fearless Leadership',
        description:
          'The Fire Tiger is the sign you want at the front when danger strikes. Their combination of physical courage, quick reflexes, and burning determination makes them natural crisis leaders who thrive when others freeze. They inspire confidence not through careful persuasion but through the unmistakable evidence of their own bravery — leading by example in the most literal sense.',
      },
      {
        trait: 'Irresistible Charisma',
        description:
          'Fire Tigers radiate a warmth and vitality that draws people in like moths to a flame. Their enthusiasm is genuine, their laughter is contagious, and their ability to make others feel brave simply by standing beside them is extraordinary. In social settings, they are magnetic — equally capable of electrifying a crowd of thousands or making a single person feel like the most important being alive.',
      },
      {
        trait: 'Fierce Protectiveness',
        description:
          'The Tiger\'s territorial instincts, amplified by Fire\'s passion, create a protector of exceptional ferocity. Fire Tigers will put themselves in harm\'s way without hesitation to defend those they love. Their protective nature extends beyond personal relationships to causes and communities — they are natural champions of the underdog and enemies of bullies and oppressors.',
      },
      {
        trait: 'Contagious Optimism',
        description:
          'Fire Tigers possess an almost irrational belief that everything will work out — and more remarkably, this belief often proves justified. Their optimism is not naive; it is a self-fulfilling prophecy powered by their willingness to act where others hesitate. Their confidence inspires others to attempt things they would never try alone, creating a collective momentum that makes the impossible probable.',
      },
    ],

    challenges: [
      {
        trait: 'Recklessness',
        description:
          'The Fire Tiger\'s courage can tip into genuine recklessness. They underestimate danger, overestimate their abilities, and leap into situations that more cautious signs correctly avoid. This is not the calculated risk-taking of the Fire Rat; it is the instinctive charge of a predator who has never learned to fear — and that can have devastating consequences.',
      },
      {
        trait: 'Dominance',
        description:
          'Fire Tigers naturally assume command in every situation, and they can be genuinely bewildered when others resist their leadership. Their forceful personality can overshadow quieter but equally capable people, and their impatience with collaborative decision-making can make them difficult team members when they are not explicitly in charge.',
      },
      {
        trait: 'Short Attention Span',
        description:
          'The combination of Tiger restlessness and Fire\'s need for constant excitement creates a sign that struggles with sustained focus. Fire Tigers are brilliant starters but inconsistent finishers, often losing interest in projects once the initial thrill of launch has faded. They need strong support systems to maintain momentum on long-term initiatives.',
      },
      {
        trait: 'Emotional Volatility',
        description:
          'The Fire Tiger experiences emotions with the volume turned to maximum. Joy becomes euphoria, annoyance becomes rage, and affection becomes obsession. This emotional intensity is part of their appeal, but it makes them unpredictable and can exhaust partners, friends, and colleagues who crave stability.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Tiger is associated with the Wood element — growth, expansion, and the vital force of spring. When Fire is added to this Wood-natured animal, the productive cycle activates powerfully: Wood feeds Fire. This means the Tiger's essential nature literally fuels the Fire element, creating a combination of exceptional energy and intensity. The Fire Tiger burns brighter because the Wood within provides endless fuel.

This Wood-Fire productive relationship makes the Fire Tiger one of the most energetic signs in the entire zodiac. Their vitality seems boundless, their enthusiasm inexhaustible, and their capacity for action extraordinary. However, this same dynamic carries a risk: Wood that feeds Fire is eventually consumed by it. The Fire Tiger can burn through their own resources — physical, emotional, and relational — if they do not learn to moderate the flame. The wisest Fire Tigers cultivate Water and Earth influences in their lives to control the burn rate: calming relationships, grounding routines, and reflective practices that prevent the fire from consuming its own fuel.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Tiger's compatibility is shaped by their need for a partner who is strong enough to stand beside them without being scorched. They are drawn to confident, adventurous people who bring their own fire to the relationship — creating a dynamic of equals rather than leader and follower. The worst match for a Fire Tiger is someone who is either too timid to handle their intensity or too controlling to allow their freedom.

Traditional Chinese astrology places the Tiger in the "Fire Triangle" alongside the Horse and the Dog — animals that share the Tiger's courage, restless energy, and fierce loyalty. These three signs form natural alliances built on mutual admiration and shared values of freedom and justice. The Tiger's greatest challenge comes from the Monkey, which sits in opposition and represents the clever, calculating approach that the straightforward Tiger finds frustrating.`,

    bestMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 93,
        summary:
          'A legendary pairing of two of the zodiac\'s most dynamic signs. The Fire Horse\'s fierce independence and love of freedom perfectly matches the Fire Tiger\'s own need for autonomy. Both signs are courageous, passionate, and utterly unwilling to be domesticated. Together, they create a partnership of extraordinary adventure and mutual inspiration — two flames that burn brighter together without trying to contain each other.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 88,
        summary:
          'The Earth Dog\'s unwavering loyalty and principled nature earns the Fire Tiger\'s deep respect. The Dog shares the Tiger\'s commitment to justice and protection but adds a grounding stability that the Tiger often lacks. The Earth element tempers the Dog\'s anxious tendencies, creating a partner who is both supportive and reliable — the calm eye at the center of the Fire Tiger\'s storm.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 82,
        summary:
          'A surprisingly harmonious pairing. The Water Pig\'s warmth, generosity, and emotional depth provides a nurturing environment that the Fire Tiger secretly craves. The Pig is unintimidated by the Tiger\'s intensity and responds to their fire with calm, affectionate acceptance. Water\'s cooling influence prevents the relationship from overheating, while the Pig\'s sensuality matches the Tiger\'s passionate nature.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 32,
        summary:
          'The Metal Monkey\'s calculating intelligence and love of manipulation directly conflicts with the Fire Tiger\'s straightforward, action-oriented nature. The Tiger sees the Monkey as dishonest; the Monkey sees the Tiger as simple. Metal\'s sharp criticism wounds Fire\'s pride, and the resulting conflicts escalate rapidly as neither sign is willing to yield or apologize first.',
      },
      {
        slug: 'earth-snake',
        name: 'Earth Snake',
        score: 38,
        summary:
          'The Earth Snake\'s cautious, strategic approach to life frustrates the Fire Tiger\'s desire for immediate action. The Snake operates through patience and subtle influence; the Tiger charges directly at their target. This fundamental difference in approach creates daily friction, as the Tiger feels held back and the Snake feels bulldozed.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 40,
        summary:
          'Two powerfully stubborn signs locked in a clash of wills. The Metal Ox demands discipline and predictability; the Fire Tiger demands freedom and spontaneity. Both are accustomed to getting their way, and neither possesses the flexibility to gracefully accommodate the other\'s needs. The relationship becomes a grinding battle of attrition that exhausts both partners.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Wood animal, the Fire Tiger experiences the productive cycle within their own nature — Wood naturally feeds Fire, creating abundant energy. In partnerships, Earth element signs provide essential grounding for the Fire Tiger\'s volatile nature (Fire produces Earth in the productive cycle). Water element signs offer necessary cooling and emotional depth, though too much Water can feel threatening to the Tiger\'s fiery spirit. Wood element signs amplify the Fire Tiger\'s already considerable energy, creating exhilarating but potentially exhausting partnerships. Metal element signs present the greatest challenge — Metal is controlled by Fire but also chops Wood, creating a complex dynamic where the Fire Tiger simultaneously dominates and is undermined by Metal partners.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Tiger is made for roles that require courage, decisive action, and the ability to inspire others under pressure. They are natural leaders in high-stakes environments — the general on the battlefield, the firefighter rushing into the blaze, the entrepreneur launching a venture that everyone else considers too risky. They need work that provides adrenaline, purpose, and the freedom to act on their instincts.

The worst career environments for a Fire Tiger are those that demand patience, routine, and careful political navigation. Bureaucratic organizations, slow-moving corporations, and any role that requires suppressing their natural intensity will cause the Fire Tiger to either rebel dramatically or wilt into frustrated mediocrity. They need to feel that their work matters, that their contributions are visible, and that every day brings something worth fighting for.

Financially, Fire Tigers are bold earners and enthusiastic spenders. They are attracted to careers with high earning potential and are willing to take significant financial risks to pursue their ambitions. Their financial weakness is impulsive generosity — they are extraordinarily generous with friends and causes they believe in, sometimes to the detriment of their own security.`,

    idealCareers: [
      'Military or Law Enforcement Officer',
      'Emergency Response Director',
      'Adventure Tourism Operator',
      'Trial Attorney',
      'Sports Athlete or Coach',
      'Film Director',
      'Firefighter',
      'Social Justice Activist',
    ],

    financialStyle:
      'Fire Tigers earn boldly and spend freely. They are attracted to high-risk, high-reward career paths and are often willing to sacrifice financial security for the chance to do work that excites them. Their generosity is legendary — they pick up every check, fund friends\' ventures, and donate impulsively to causes that move them. Building a financial safety net requires conscious effort, as their instinct is to trust that future earnings will cover present expenses. The Fire Tiger who establishes automatic savings and investment structures early in life creates the financial foundation that supports their adventurous nature without the stress of living paycheck to paycheck.',

    tips: [
      'Choose a career that channels your intensity constructively. Your energy needs an outlet — if your job does not provide one, you will create drama in your personal life instead. Find work where your fire is an asset, not a liability.',
      'Develop patience as a tactical skill. You do not need to become patient by nature — that may be impossible — but you can learn to use patience strategically. Sometimes the best way to win is to wait, and the Fire Tiger who masters this gains an enormous advantage over those who expect them to charge blindly.',
      'Build a trusted inner circle. You prefer to act alone, but even the most powerful Tiger needs allies. Cultivate a small team of people whose judgment you respect and whose skills complement your own. Let them handle the details while you focus on the big picture.',
      'Manage your reputation deliberately. Your bold actions generate attention, and not all attention is positive. Learn the difference between courage and showmanship, and ensure that your public image reflects your genuine character rather than your most impulsive moments.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Fire Tiger is an adventure — exhilarating, unpredictable, and never, ever boring. This sign loves with their entire being, bringing the same ferocious intensity to romance that they bring to everything else. When a Fire Tiger is in love, their partner becomes the center of their fiercely protective world, showered with passionate attention, dramatic declarations, and a loyalty that will face down any threat.

The Fire Tiger's romantic energy is extraordinary in the early stages of a relationship. They pursue with a boldness that is simultaneously thrilling and overwhelming — canceling plans, crossing continents, and making grand gestures that would seem absurd from anyone else but feel completely authentic from the Fire Tiger. Their passion is real, their attention is total, and their commitment, once given, is ferocious.

The challenge comes with sustaining this intensity over the long term. Fire Tigers can struggle with the quieter demands of mature relationships — the daily compromises, the mundane routines, the need to listen more than act. They may create conflict unconsciously simply because peace feels like stagnation to their restless spirit. The Fire Tiger who learns that true strength lies in gentleness as much as in ferocity discovers a depth of love that their younger self could not have imagined.`,

    loveStyle:
      'The Fire Tiger loves with fierce, protective passion. They are bold in pursuit, unwavering in commitment, and physically demonstrative in their affection. Their love language combines quality time and physical touch — they want to be present, active, and engaged with their partner, sharing adventures and facing challenges together. They need a partner who is not intimidated by intensity and who understands that the Tiger\'s occasional need for solitude is not withdrawal but recharging.',

    idealPartnerTraits: [
      'Confident',
      'Adventurous',
      'Emotionally Strong',
      'Independent',
      'Honest',
    ],

    tips: [
      'Learn to fight fair. Your natural intensity can turn disagreements into battles, and your competitive instinct makes you want to win every argument. Practice listening to understand rather than to counter, and recognize that your partner\'s perspective is not an attack on your position.',
      'Create space for vulnerability. Your instinct is to appear strong at all times, but true intimacy requires showing your partner the fear, doubt, and tenderness beneath the armor. The Fire Tiger who can be gentle is far more powerful than the one who can only roar.',
      'Respect your partner\'s pace. Not everyone processes emotions at your speed. Give your partner time to think, feel, and respond without pressuring them to match your urgency. Their slower pace is not weakness — it is a different kind of strength.',
      'Invest in the long game. Your attention is brilliant and intense but can be short-lived. Consciously commit to showing up consistently, not just spectacularly. The relationship that survives the Fire Tiger\'s restlessness becomes the greatest adventure of their life.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Tiger possesses one of the most robust constitutions in the zodiac, powered by the productive Wood-Fire cycle that generates exceptional vitality and physical resilience. In Traditional Chinese Medicine, the Tiger's Wood nature governs the Liver and Gallbladder — organs associated with the smooth flow of energy, emotional regulation, and the body's capacity for decisive action. Fire's influence on this foundation creates a metabolism that runs hot and fast.

The Fire Tiger's health risks stem almost entirely from excess. They exercise too hard, eat too much, sleep too little, and burn through their considerable reserves at an unsustainable pace. Their physical courage extends to ignoring pain signals, pushing through injuries, and dismissing symptoms that would send others to the doctor. This "invincible" mindset serves them well in their twenties and thirties but creates accumulated damage that becomes apparent in midlife.

The Fire Tiger's most important health strategy is learning to maintain their body the way a high-performance vehicle requires maintenance — not by waiting for breakdowns but through regular, disciplined care. Their competitive nature can actually be leveraged for health: framing self-care as training, nutrition as fuel optimization, and rest as performance enhancement appeals to the Tiger's athletic mindset far more than traditional health advice.`,

    bodyAreas: ['Liver', 'Gallbladder', 'Tendons and Ligaments', 'Eyes'],

    exercises: [
      'Martial arts and combat sports',
      'Rock climbing',
      'Sprint interval training',
      'Competitive team sports',
    ],

    dietTips: [
      'Support Liver health with green, leafy vegetables, particularly in spring. The Liver is the Fire Tiger\'s constitutional organ, and keeping it functioning optimally requires abundant greens, adequate protein, and minimal processed food.',
      'Moderate alcohol consumption seriously. The Fire Tiger\'s social nature and high energy often lead to heavy social drinking, but their Liver-dominant constitution makes them more vulnerable to alcohol-related damage than they realize. Quality over quantity is the rule.',
      'Eat adequate protein to support muscle recovery and the high physical demands of the Fire Tiger lifestyle. Lean meats, fish, eggs, and legumes provide the building blocks their active body constantly needs.',
      'Include sour foods to support the Liver according to TCM principles. Citrus fruits, fermented foods, and vinegar-based dressings help maintain the smooth flow of Liver qi that the Fire Tiger depends on for their characteristic vitality.',
    ],

    mentalHealth:
      'The Fire Tiger\'s mental health is intimately connected to their sense of agency. They thrive when they feel in control of their destiny and spiral when circumstances strip that control away — during illness, unemployment, or relationship crises where direct action cannot solve the problem. Learning to tolerate uncertainty without acting impulsively is the Fire Tiger\'s most important psychological development. Physical outlets are essential for managing the anxiety that builds when a Fire Tiger cannot act — martial arts, intense exercise, or even vigorous housework can metabolize the nervous energy that otherwise manifests as aggression or reckless behavior. The Fire Tiger also benefits from developing a relationship with a therapist or mentor who is direct, no-nonsense, and unafraid to challenge them — this sign has no patience for passive, reflective therapeutic styles.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 7],
    colors: ['Orange', 'Red', 'Gold'],
    direction: 'South',
    gemstones: ['Ruby', 'Sunstone', 'Fire Opal'],
    flowers: ['Plum Blossom', 'Bird of Paradise', 'Red Carnation'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE TIGERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Robert Pattinson',
        profession: 'Actor',
        birthYear: 1986,
        description:
          'Robert Pattinson\'s transformation from teen heartthrob to acclaimed indie actor embodies the Fire Tiger\'s refusal to be defined by others\' expectations. His bold career choices — rejecting easy blockbuster fame in favor of challenging, unconventional roles — reflect the Fire Tiger\'s instinct to forge their own path, regardless of public opinion.',
      },
      {
        name: 'Usain Bolt',
        profession: 'Olympic Sprinter',
        birthYear: 1986,
        description:
          'Usain Bolt is the Fire Tiger made flesh — explosive speed, magnetic charisma, and an irrepressible joy that transformed athletics into entertainment. His dominance on the track and his larger-than-life personality off it exemplify the Fire Tiger\'s ability to turn raw physical power into cultural impact.',
      },
      {
        name: 'Lady Gaga',
        profession: 'Singer/Actress',
        birthYear: 1986,
        description:
          'Lady Gaga\'s fearless artistic reinvention, passionate advocacy, and uncontainable creative energy are quintessential Fire Tiger traits. Her willingness to shock, provoke, and challenge convention while maintaining genuine emotional depth shows the Fire Tiger at their most powerful — using intensity as a force for artistic and social transformation.',
      },
      {
        name: 'Mel Brooks',
        profession: 'Comedian/Director',
        birthYear: 1926,
        description:
          'Mel Brooks brought Fire Tiger audacity to comedy, fearlessly satirizing taboo subjects with a warmth and intelligence that turned potential offense into liberation. His decades-long career of bold, boundary-pushing humor reflects the Fire Tiger\'s belief that courage and laughter are humanity\'s most powerful weapons.',
      },
      {
        name: 'Drake',
        profession: 'Rapper/Entrepreneur',
        birthYear: 1986,
        description:
          'Drake\'s dominance of the music industry through a combination of emotional vulnerability and strategic brilliance showcases the Fire Tiger\'s dual nature. His willingness to be openly sensitive in a genre that rewards toughness, combined with his fierce competitive drive, reflects the Fire Tiger\'s unique ability to be both soft and powerful.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Tiger holds a place of supreme reverence in Chinese culture, second only to the Dragon in symbolic power. Known as the King of the Mountain, the Tiger represents authority, courage, and the protective force that wards off evil. In Chinese mythology, the White Tiger (Bai Hu) guards the western quadrant of the heavens and is one of the Four Sacred Beasts of the Chinese constellations.

When Fire infuses this already powerful animal, the mythological significance intensifies dramatically. The Fire Tiger appears in legend as the guardian of sacred flames — the fierce protector who stands between humanity and the forces of chaos. In Buddhist mythology adapted to Chinese culture, wrathful deities often take tiger form, using terrifying appearances to frighten demons and protect the faithful. The Fire Tiger embodies this concept of fierce compassion: power used not for domination but for protection.

In Korean shamanistic tradition, the Tiger is the mountain spirit who rules the natural world, and a Tiger born under Fire is considered an especially auspicious and powerful omen — a sign that a period of decisive, transformative change is approaching. The Fire Tiger year is traditionally associated with bold political upheavals and cultural revolutions.`,

    symbolism: `The Fire Tiger symbolizes courage perfected through passion — not the cold bravery of duty but the burning courage that comes from caring so deeply about something that fear becomes irrelevant. In traditional Wu Xing symbolism, the Wood-Fire relationship within the Fire Tiger represents the productive cycle at its most dynamic: growth fueling transformation, potential becoming power, the seed becoming the blaze.

The Fire Tiger is also a potent symbol of righteous anger — the fury that rises in response to injustice and refuses to be suppressed. Unlike destructive anger, the Fire Tiger\'s wrath is directed and purposeful, aimed at protecting the vulnerable and challenging the powerful. This makes the Fire Tiger a symbol of revolution, reform, and the courage to confront systems that harm the innocent.

In the balance of yin and yang, the Fire Tiger represents peak yang energy — aggressive, expansive, bright, and active. This extreme yang carries tremendous power but also demands balance. The Fire Tiger symbol reminds us that the greatest warriors are those who know when to sheathe their weapons, and the brightest flames are those that know how to burn without consuming everything around them.`,

    modernInterpretation: `In contemporary culture, the Fire Tiger archetype appears wherever courage meets creativity. The Fire Tiger years of 1926 and 1986 produced generations of bold innovators and cultural disruptors who reshaped entertainment, athletics, and social norms through sheer force of personality and willingness to take risks.

The 1986 generation of Fire Tigers came of age during the social media revolution and brought their sign's natural charisma to platforms that amplified their presence globally. Athletes like Usain Bolt and artists like Lady Gaga exemplify the Fire Tiger's ability to combine peak performance with magnetic showmanship — not merely excelling but doing so with a flair that captures the world's imagination.

For modern Fire Tigers, the cultural moment is both opportunity and challenge. The digital age rewards the bold self-expression that comes naturally to this sign, but it also creates an environment where intensity can be misread as aggression and courage can be confused with provocation. The most effective modern Fire Tigers learn to channel their natural power through platforms and causes that amplify their impact while maintaining the authenticity that is their most valuable trait — using fire to illuminate rather than simply to burn.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
