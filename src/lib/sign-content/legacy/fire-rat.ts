// ============================================
// FIRE RAT (丙子) — The Blazing Opportunist
// ============================================
// Fire amplifies the Rat's cunning intelligence and social
// agility, creating a charismatic, fast-moving dealmaker
// with a gift for spotting opportunities before anyone else.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-rat',
  profile: getProfileBySlug('fire-rat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Rat is the most dynamic and outwardly expressive member of the Rat family. Where other Rats rely on quiet observation and subtle maneuvering, the Fire Rat operates at full volume — announcing their presence, rallying allies, and charging toward goals with an enthusiasm that can light up an entire room. The Rat's legendary resourcefulness, when ignited by Fire's passion and boldness, produces a personality that is equal parts strategist and showman, capable of reading a room in seconds and commanding it moments later.

What makes the Fire Rat truly formidable is the fusion of emotional intelligence and raw ambition. The Rat already possesses the zodiac's sharpest social instincts — an almost preternatural ability to sense opportunity, read people, and navigate complex social dynamics. Fire adds courage, visibility, and a willingness to take risks that quieter Rats would avoid. The result is someone who doesn't just spot the opportunity; they seize it with theatrical confidence and infectious energy.

Yet the Fire Rat's intensity comes with a cost. The Rat's natural caution — that careful, calculating quality that normally keeps them safe — is partially overridden by Fire's impulsiveness. Fire Rats can overextend themselves, make promises they cannot keep, or burn through relationships when their ambition outpaces their consideration for others. The wisest Fire Rats learn to balance their blazing drive with the Rat's innate shrewdness, using Fire to accelerate their plans rather than incinerate them.`,

    coreTraits: [
      'Charismatic',
      'Ambitious',
      'Resourceful',
      'Impulsive',
      'Sociable',
      'Competitive',
    ],

    strengths: [
      {
        trait: 'Magnetic Sociability',
        description:
          'The Fire Rat is the ultimate networker. They possess an effortless ability to connect with people from all walks of life, combining the Rat\'s social intelligence with Fire\'s warmth and enthusiasm. They remember names, read body language instinctively, and make everyone they meet feel valued — a gift that opens doors others cannot even see.',
      },
      {
        trait: 'Fearless Opportunism',
        description:
          'While other Rats calculate from the shadows, the Fire Rat dives headfirst into opportunities. Their timing is impeccable, and their willingness to take bold risks when others hesitate often puts them ahead of the competition. They trust their instincts and act decisively, a combination that frequently yields spectacular results.',
      },
      {
        trait: 'Adaptable Intelligence',
        description:
          'The Fire Rat combines the Rat\'s native cleverness with Fire\'s quick thinking to become extraordinarily adaptable. They think on their feet, pivot strategies mid-conversation, and turn setbacks into advantages with remarkable speed. In crisis situations, they are often the first to find a path forward.',
      },
      {
        trait: 'Infectious Enthusiasm',
        description:
          'When a Fire Rat is excited about something, that excitement spreads like wildfire. They have a rare ability to inspire others, rally teams, and generate collective momentum around projects or causes. Their passion is genuine and visible, making them natural motivators and coalition builders.',
      },
    ],

    challenges: [
      {
        trait: 'Overextension',
        description:
          'The Fire Rat\'s appetite for opportunity often exceeds their capacity to deliver. They say yes to everything, pursue multiple ventures simultaneously, and spread themselves too thin. This can lead to burnout, broken commitments, and a reputation for starting more than they finish.',
      },
      {
        trait: 'Restless Ambition',
        description:
          'Fire Rats struggle to be content with what they have. There is always a bigger deal, a better connection, a higher rung on the ladder. This relentless drive can erode personal relationships and prevent them from appreciating the success they have already achieved.',
      },
      {
        trait: 'Manipulative Tendencies',
        description:
          'The Rat\'s social intelligence combined with Fire\'s boldness can tip into manipulation. Fire Rats are skilled at influencing others, and under pressure, they may use charm as a weapon — making promises they do not intend to keep or presenting situations in misleadingly favorable terms.',
      },
      {
        trait: 'Emotional Volatility',
        description:
          'Fire amplifies the Rat\'s emotional sensitivity into something more intense and unpredictable. Fire Rats can swing from euphoric confidence to anxious insecurity within hours, and their reactions to perceived slights or setbacks can be disproportionately fierce.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rat is associated with the Water element in its native state — intuitive, flowing, and adaptable. When Fire is layered onto this Water-natured animal, a fascinating tension emerges. Water and Fire exist in a controlling relationship within the five-element cycle: Water overcomes Fire. This means the Fire Rat contains an internal contradiction — the animal's essential nature works to temper the element's excesses, while the element pushes the animal beyond its comfort zone. The result is a sign of remarkable dynamism and internal complexity. The Fire Rat channels this tension productively, using Fire's boldness to amplify the Rat's strategies while relying on the Rat's innate caution as an emergency brake. When balanced, this makes the Fire Rat one of the most effective and versatile signs in the zodiac; when unbalanced, it creates internal conflict that manifests as anxiety, indecision masked by bravado, or self-sabotaging impulsiveness.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Rat's compatibility is shaped by their need for both intellectual stimulation and emotional warmth. They are drawn to partners who can match their energy, appreciate their ambition, and hold their own in the rapid-fire exchanges that define Fire Rat relationships. They need someone who is neither threatened by their intensity nor willing to be steamrolled by it. The ideal partner for a Fire Rat is confident, intelligent, and grounded enough to provide stability without being boring.

Traditional Chinese astrology places the Rat in the "Water Trine" alongside the Dragon and the Monkey — animals that share the Rat's cleverness, adaptability, and appetite for success. These three signs form natural alliances based on mutual admiration and complementary strengths. The Rat's greatest challenge comes from the Horse, which sits in direct opposition on the zodiac wheel, creating a classic tension between the Rat's careful strategy and the Horse's impulsive freedom.`,

    bestMatches: [
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 90,
        summary:
          'A powerhouse alliance. The Earth Dragon\'s commanding presence and visionary ambition perfectly complement the Fire Rat\'s strategic brilliance. Both signs are driven, confident, and unafraid of bold moves. The Earth element grounds the Dragon\'s sometimes grandiose tendencies, creating a partner who shares the Fire Rat\'s appetite for success while providing the stability and follow-through that the Rat occasionally lacks. Together, they build empires.',
      },
      {
        slug: 'wood-monkey',
        name: 'Wood Monkey',
        score: 88,
        summary:
          'A dazzling intellectual partnership. The Wood Monkey\'s creative ingenuity and playful nature delights the Fire Rat, while the Rat\'s strategic mind gives the Monkey\'s ideas practical direction. Both signs are quick-witted, socially adept, and thrive on stimulation. The Wood element adds warmth and flexibility to the Monkey, softening its sometimes sharp edges and creating a companion who keeps the Fire Rat endlessly entertained.',
      },
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 82,
        summary:
          'An unexpectedly complementary pairing. The Water Ox\'s patient determination and emotional depth provide a calming anchor for the Fire Rat\'s restless energy. Where the Rat darts from opportunity to opportunity, the Ox provides focused follow-through. The Water element gives the Ox emotional fluidity that allows them to understand the Fire Rat\'s complex inner world without being overwhelmed by it.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 28,
        summary:
          'A collision of two powerful forces moving in opposite directions. The Fire Horse\'s fierce independence and need for freedom clashes with the Fire Rat\'s desire for closeness and control. Both signs are intense and unwilling to compromise, creating dramatic conflicts that neither can easily resolve. The double-fire combination generates enormous heat but little mutual understanding.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 38,
        summary:
          'The Metal Rooster\'s exacting standards and blunt criticism grate on the Fire Rat\'s sensitive ego. The Rat operates through charm and flexibility; the Rooster demands precision and accountability. Metal\'s rigidity clashes with Fire\'s spontaneity, and both signs can become locked in a cycle of criticism and defensiveness that erodes mutual respect.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 42,
        summary:
          'The Earth Rabbit\'s need for tranquility and predictability is disrupted by the Fire Rat\'s restless energy and constant scheming. The Rabbit finds the Rat exhausting and overly aggressive, while the Rat sees the Rabbit as passive and frustratingly slow to act. Their fundamental rhythms are misaligned, making daily life together a source of friction rather than comfort.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Water animal, the Fire Rat navigates elemental relationships with particular nuance. Earth element signs provide grounding and stability that the Fire Rat needs — Fire feeds Earth in the productive cycle, creating nurturing, balanced partnerships. Wood element signs fuel the Fire Rat's energy (Wood feeds Fire), generating exciting, high-energy connections that stimulate growth. Water element signs resonate with the Rat's inner nature, creating deep understanding but potentially dampening Fire's boldness. Metal element signs present a challenge — Fire melts Metal, which can create relationships where the Fire Rat's intensity feels destructive to Metal's structured order, though the tension can also forge incredibly strong bonds when navigated with mutual respect.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Rat is a natural dealmaker and empire builder. They excel in environments that reward quick thinking, social intelligence, and the ability to spot trends before they become obvious. Unlike signs that prefer to build slowly and methodically, the Fire Rat thrives in fast-paced, high-stakes settings where opportunities appear and vanish in moments. They are the people who close the deal, launch the startup, or orchestrate the merger while others are still reviewing the data.

The ideal Fire Rat career sits at the intersection of people and strategy. They need roles that leverage their extraordinary social skills while satisfying their competitive drive. Pure analytical work bores them; pure socializing without strategic purpose frustrates them. The sweet spot is work where reading people, building networks, and making bold moves directly translates into measurable success.

Financially, Fire Rats are skilled at generating income from multiple sources. Their networking ability and opportunistic instincts create revenue streams that other signs cannot replicate. However, they can be prone to lifestyle inflation and speculative investments that promise quick returns. The most successful Fire Rats develop the discipline to save aggressively during boom times, recognizing that their feast-or-famine tendencies require a financial cushion.`,

    idealCareers: [
      'Investment Banker',
      'Talent Agent',
      'Political Strategist',
      'Sales Director',
      'Startup Founder',
      'Event Producer',
      'Public Relations Executive',
      'Venture Capitalist',
    ],

    financialStyle:
      'Fire Rats are instinctive money-makers with a talent for turning relationships into revenue. They are drawn to speculative investments, business ventures, and deals that offer outsized returns. Their financial acumen is genuine — they understand markets, read trends, and time their moves with impressive accuracy. The risk lies in overconfidence: Fire Rats can double down on losing positions out of pride or pursue flashy investments that do not match their actual risk tolerance. Building a diversified portfolio with a significant conservative base allows them to take the bold swings they love while protecting against the inevitable misses.',

    tips: [
      'Leverage your network deliberately. Your relationships are your greatest asset, but they must be cultivated with genuine care, not just transactional efficiency. The Fire Rat who is known for generosity and follow-through builds a network that produces compounding returns over decades.',
      'Resist the urge to chase every opportunity. Your ability to spot possibilities is extraordinary, but not every opportunity deserves your energy. Develop clear criteria for which ventures warrant your commitment, and practice saying no to the rest.',
      'Partner with detail-oriented executors. Your strength is vision, strategy, and deal-making — not the painstaking follow-through that turns agreements into outcomes. Build a team or find partners who excel at implementation and operations.',
      'Create passive income streams early. Your earning power is high but volatile. Directing a portion of every win into investments that generate steady, passive returns gives you the financial stability to take bigger risks when the right opportunity appears.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Rat approaches love with the same strategic intensity they bring to everything else — but with an added layer of genuine warmth and romantic idealism that can surprise those who see only the ambitious exterior. Beneath the dealmaker's confidence lies a deeply sentimental heart that craves true connection, loyalty, and the feeling of being truly known by another person.

In the early stages of romance, the Fire Rat is an irresistible force. They court with charm, attentiveness, and a seemingly effortless ability to make their partner feel like the most important person alive. They remember details, anticipate needs, and create experiences designed to dazzle. This is not manipulation — it is the Fire Rat's genuine delight in making someone they care about feel special.

The challenge emerges as relationships mature. Fire Rats need constant stimulation and can become restless when the initial excitement settles into routine. They may create drama unconsciously, simply because peacetime feels boring to their fire-driven temperament. The Fire Rat who learns to find richness in everyday intimacy — rather than constantly chasing the next emotional high — discovers that sustained love can be even more rewarding than the thrill of the chase.`,

    loveStyle:
      'The Fire Rat loves with strategic passion — they are attentive, generous, and deeply invested in their partner\'s happiness, but they also need to feel that the relationship is growing, evolving, and heading somewhere meaningful. Stagnation is their greatest relationship fear. They express love through action and quality time, preferring shared adventures and stimulating conversations over quiet domesticity. They need a partner who is both emotionally available and intellectually engaging — someone who can match their wit in conversation and their warmth in private moments.',

    idealPartnerTraits: [
      'Intellectually Sharp',
      'Emotionally Secure',
      'Ambitious',
      'Socially Confident',
      'Loyal',
    ],

    tips: [
      'Resist the urge to "optimize" your relationship. Your strategic mind wants to fix, improve, and advance everything — but love is not a project to be managed. Practice being present without an agenda, and let some conversations simply be about connection rather than progress.',
      'Be vulnerable early and often. Your natural instinct is to project confidence and control, but true intimacy requires showing your partner the anxieties and insecurities beneath the polished surface. The partner who loves your whole self — not just your highlight reel — is the one worth keeping.',
      'Invest in the mundane. Grand gestures come naturally to you, but your partner also needs consistency — the daily text, the reliable presence at dinner, the willingness to do boring errands together. These small acts of loyalty build the trust that sustains a relationship through challenging times.',
      'Give your partner space to lead. Your instinct is to take charge in every situation, but healthy relationships require shared power. Let your partner plan dates, make decisions, and set the pace sometimes. Their autonomy strengthens the partnership.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Rat's health profile reflects the internal tension between Water (the Rat's native element) and Fire (the modifying element). This creates a constitution that is energetic and resilient in the short term but vulnerable to depletion when the balance between drive and rest is not maintained. The Fire Rat's tendency to run at full speed — socially, professionally, and emotionally — places significant demands on their nervous system and cardiovascular health.

In Traditional Chinese Medicine, the Rat is associated with the Water element and the Kidneys, which govern vitality, reproduction, and the body's deep reserves of energy. Fire's influence on this Water foundation creates a dynamic where the Fire Rat constantly draws on these deep reserves to fuel their intense lifestyle. If those reserves are not replenished through adequate rest, nutrition, and stress management, the result is a pattern of adrenal fatigue, insomnia, and immune system weakness.

The Fire Rat's greatest health advantage is their social nature. Strong social connections are one of the most powerful predictors of long-term health, and Fire Rats naturally build extensive, supportive networks. Their challenge is learning to use those networks for genuine emotional support — not just professional advantage — and to recognize when their body is signaling the need to slow down.`,

    bodyAreas: ['Kidneys', 'Nervous System', 'Heart', 'Bladder'],

    exercises: [
      'Swimming and water sports',
      'Dance and movement classes',
      'Tennis or racquet sports',
      'Circuit training',
    ],

    dietTips: [
      'Support kidney health with warming, nourishing foods: bone broth, black sesame seeds, kidney beans, walnuts, and dark leafy greens. These foods replenish the deep reserves that the Fire Rat\'s lifestyle rapidly depletes.',
      'Balance Fire\'s heat with adequate hydration and cooling foods during periods of intense activity. Cucumber, pear, watermelon, and green tea help regulate internal temperature without dampening energy.',
      'Eat protein-rich breakfasts to stabilize blood sugar and prevent the energy crashes that lead to caffeine dependency. The Fire Rat\'s tendency to skip breakfast in favor of coffee and hustle catches up with them by midlife.',
      'Limit alcohol consumption. Fire Rats are social creatures drawn to networking events and celebrations where alcohol flows freely. Their Water-Fire constitution makes them more susceptible to liver stress than they realize.',
    ],

    mentalHealth:
      'The Fire Rat\'s mental health is intimately connected to their sense of forward momentum. When life is moving — deals closing, relationships deepening, projects launching — they feel invincible. When progress stalls, anxiety and restlessness can spiral quickly into depression or compulsive behavior. The Fire Rat benefits enormously from mindfulness practices that teach them to find contentment in the present moment rather than constantly projecting into the future. Cognitive behavioral therapy is particularly effective for this sign, as it appeals to their analytical nature while addressing the thought patterns that drive anxiety. Fire Rats should also be mindful of their tendency to use social activity as a distraction from difficult emotions — sometimes the networking event is not what they need; sometimes they need a quiet evening of genuine self-reflection.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 6],
    colors: ['Red', 'Gold', 'Crimson'],
    direction: 'South',
    gemstones: ['Garnet', 'Ruby', 'Amber'],
    flowers: ['Lily', 'African Violet', 'Orchid'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE RATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Burt Reynolds',
        profession: 'Actor',
        birthYear: 1936,
        description:
          'Burt Reynolds epitomized the Fire Rat\'s magnetic charisma and bold confidence. As one of Hollywood\'s biggest box-office draws in the 1970s and 1980s, his effortless charm, risk-taking career choices, and larger-than-life personality made him an icon of masculine cool — pure Fire Rat energy channeled through the silver screen.',
      },
      {
        name: 'Buddy Holly',
        profession: 'Musician',
        birthYear: 1936,
        description:
          'Buddy Holly revolutionized rock and roll with his innovative songwriting and energetic performances, embodying the Fire Rat\'s fearless creativity and refusal to follow convention. Despite his tragically short career, his influence on popular music was transformative — a testament to the Fire Rat\'s ability to leave an outsized mark in minimal time.',
      },
      {
        name: 'Tom Daley',
        profession: 'Olympic Diver',
        birthYear: 1996,
        description:
          'Tom Daley\'s journey from teenage prodigy to Olympic gold medalist showcases the Fire Rat\'s determination and competitive spirit. His willingness to be publicly authentic about his identity, combined with his relentless drive for athletic excellence, reflects the Fire Rat\'s blend of courage and strategic ambition.',
      },
      {
        name: 'Dennis Hopper',
        profession: 'Actor/Director',
        birthYear: 1936,
        description:
          'Dennis Hopper was the Fire Rat as creative rebel — a brilliant, volatile talent who helped define counterculture cinema with Easy Rider and pushed the boundaries of independent filmmaking. His fearless approach to art and life, marked by intense passion and refusal to play by Hollywood\'s rules, embodies the Fire Rat\'s audacious spirit.',
      },
      {
        name: 'Khamzat Chimaev',
        profession: 'MMA Fighter',
        birthYear: 1996,
        description:
          'Khamzat Chimaev burst onto the UFC scene with a ferocity and confidence that electrified the sport, embodying the Fire Rat\'s explosive competitive drive and fearless self-belief. His rapid ascent through the rankings, fueled by raw talent and an unshakable will to dominate, reflects the Fire Rat\'s ability to seize opportunities with overwhelming force.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rat holds the coveted first position in the Chinese zodiac, a placement earned — according to legend — through cunning rather than speed. In the Great Race that determined the zodiac order, the Rat hitched a ride on the diligent Ox's back and leapt ahead at the last moment to claim first place. This origin story perfectly encapsulates the Rat's essential nature: resourceful, opportunistic, and unafraid to use unconventional methods to achieve their goals.

When Fire is added to this already shrewd and ambitious animal, the mythological significance deepens. In Chinese cosmology, Fire represents the height of yang energy — visibility, passion, and transformative power. The Fire Rat thus becomes a figure of paradox: the hidden strategist made visible, the shadow-dweller illuminated. This combination appears in Chinese folklore as the clever advisor who steps out from behind the throne to lead directly, or the merchant whose secret dealings become public triumphs.

In Japanese and Korean zodiac traditions, the Rat is similarly associated with wealth, fertility, and quick thinking. The Fire Rat specifically is linked to periods of rapid economic change and social upheaval — eras when the cunning and the bold rise while the cautious and conventional are left behind.`,

    symbolism: `The Fire Rat symbolizes the union of intelligence and passion — the mind on fire. In traditional Wu Xing symbolism, this combination represents the moment when careful planning ignites into decisive action, when potential energy converts into kinetic force. The Rat's Water nature and Fire's transformative power create a symbol of steam — invisible force that drives machinery, a quiet power made explosive.

The Fire Rat is also a symbol of abundance and generosity ignited by warmth. While all Rats are associated with resourcefulness and wealth accumulation, the Fire Rat adds a dimension of sharing and display. They are the generous host, the patron of the arts, the benefactor who uses wealth not merely to accumulate but to illuminate and uplift.

In the cycle of elements, Water and Fire represent the fundamental polarity of yin and yang. The Fire Rat embodies this tension as a creative force — the friction between opposites that generates energy, innovation, and forward movement.`,

    modernInterpretation: `In contemporary culture, the Fire Rat archetype resonates strongly with the era of social media entrepreneurship and personal branding. The Fire Rat's combination of social intelligence, bold self-presentation, and strategic ambition maps perfectly onto the modern influencer-entrepreneur who builds empires through personality, networking, and the ability to spot trends before they peak.

The Fire Rat years of 1936 and 1996 produced generations that shaped their respective eras through audacity and social innovation. The 1936 cohort came of age during the post-war economic boom, building careers in entertainment, business, and politics that reflected the Fire Rat's gift for reading public mood and seizing the moment. The 1996 generation is emerging as digital natives who instinctively understand the power of networks, platforms, and personal brand — the Fire Rat's natural habitat in digital form.

For modern Fire Rats, the key insight is that their greatest strength — the ability to connect, persuade, and mobilize — is also their greatest responsibility. In an era of information overload and declining trust, the Fire Rat who uses their gifts for genuine value creation rather than mere self-promotion becomes an invaluable force for positive change.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
