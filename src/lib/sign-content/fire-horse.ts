// ============================================
// FIRE HORSE (丙午) — The Untamable Spirit
// ============================================
// The flagship sign for 2026. Rich, authoritative content
// covering personality, compatibility, career, love, health,
// lucky attributes, famous people, and cultural significance.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-horse',
  profile: getProfileBySlug('fire-horse')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Horse is widely regarded as the most powerful and dramatic combination in the entire Chinese zodiac. The Horse — already defined by independence, speed, and a fierce love of freedom — is supercharged by the Fire element, producing a personality of extraordinary magnetism, ambition, and intensity. Fire Horses do not enter a room; they ignite it. Their presence is immediately felt, their opinions immediately known, and their energy immediately contagious.

People born under this sign possess a rare blend of charisma and conviction. They are natural leaders who inspire others not through careful persuasion but through sheer force of will and the unmistakable authenticity of their passion. When a Fire Horse commits to a cause, a project, or a relationship, they bring a volcanic intensity that can move mountains — or, if unchecked, burn bridges. They live at full volume and have little patience for half-measures, mediocrity, or the slow grind of bureaucracy.

What truly sets the Fire Horse apart is their refusal to be contained. Convention, tradition, and social expectation hold little sway over them. They chart their own course with a confidence that others find either deeply inspiring or profoundly unsettling. This independence is not mere rebellion — it springs from an innate certainty about who they are and what they want. Fire Horses trust their instincts above all else, and those instincts are remarkably sharp.

Yet this same intensity carries a shadow. Fire Horses can be impulsive, impatient, and prone to spectacular burnout. They may struggle to sustain long-term commitments when the initial excitement fades. Their emotional landscape is one of extremes — soaring highs and crushing lows — and they must learn to temper their fire without extinguishing the very spark that makes them extraordinary.`,

    coreTraits: [
      'Independent',
      'Passionate',
      'Charismatic',
      'Restless',
      'Bold',
      'Unconventional',
    ],

    strengths: [
      {
        trait: 'Natural Leadership',
        description:
          'Fire Horses command attention without trying. Their confidence, decisiveness, and fearlessness in the face of opposition make them instinctive leaders. People rally around them not because they demand loyalty, but because their conviction is infectious and their courage is genuine.',
      },
      {
        trait: 'Magnetic Charisma',
        description:
          'There is something undeniably electric about a Fire Horse. They radiate warmth, humor, and vitality in a way that draws people into their orbit. In social settings, they are often the center of gravity — storytelling, debating, laughing, and making everyone around them feel more alive.',
      },
      {
        trait: 'Fearless Innovation',
        description:
          'Fire Horses are not afraid to challenge the status quo. They see possibilities where others see walls, and they have the audacity to pursue ideas that conventional thinkers dismiss as impossible. Many of history\'s boldest disruptors and pioneers carry this sign\'s energy.',
      },
      {
        trait: 'Boundless Energy',
        description:
          'The Fire element fuels the Horse\'s already considerable stamina, producing a person of remarkable endurance and drive. Fire Horses can outwork, outrun, and outlast most people — at least in short, intense bursts. When something captures their passion, their capacity for sustained effort is extraordinary.',
      },
    ],

    challenges: [
      {
        trait: 'Impulsiveness',
        description:
          'Fire Horses often act before they think, driven by the urgency of the moment rather than careful deliberation. This can lead to hasty decisions, broken commitments, and avoidable conflicts. Learning to pause — even briefly — before reacting is one of their most important life lessons.',
      },
      {
        trait: 'Restlessness',
        description:
          'Stillness is torture for a Fire Horse. They crave constant stimulation, novelty, and movement, which can make it difficult for them to follow through on long-term projects or maintain stable routines. They may abandon promising ventures simply because the initial thrill has worn off.',
      },
      {
        trait: 'Stubbornness',
        description:
          'While their confidence is usually an asset, Fire Horses can become rigidly attached to their own perspective. Once they have formed an opinion, they resist changing it — even in the face of compelling evidence. This stubbornness can isolate them and prevent growth.',
      },
      {
        trait: 'Intensity',
        description:
          'The Fire Horse\'s emotional intensity, while magnetic, can also overwhelm those around them. They experience feelings at maximum volume and may expect the same from others. Partners, friends, and colleagues can find this exhausting, leading to friction in relationships that require sustained emotional balance.',
      },
    ],

    elementInfluence: `In Wu Xing (Five Element) theory, the Horse is already inherently associated with the Fire element — it is the animal of high noon and midsummer, the peak of yang energy. When the Fire element is added on top of this natural fire affinity, the result is a double-fire combination of extraordinary power. This is not merely additive; it is multiplicative. The Fire Horse embodies Fire's purest expression: passion, transformation, illumination, and destruction in equal measure.

This double-fire nature gives the Fire Horse an almost supernatural vitality and presence. They burn hotter and brighter than any other sign in the zodiac. However, it also means they are particularly susceptible to burnout, inflammation (both physical and emotional), and the destructive tendencies of unchecked fire. The key to a Fire Horse's well-being lies in finding cooling, grounding influences — whether through Water or Earth element companions, meditative practices, or environments that provide stability without stifling their essential nature.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Horse's compatibility profile is among the most polarized in the Chinese zodiac. Their intensity and independence create relationships of extraordinary passion with the right partner — or spectacular conflict with the wrong one. Fire Horses need partners who are strong enough to match their energy but wise enough not to try to contain it. The ideal companion celebrates the Fire Horse's wild spirit while providing a grounding presence that prevents burnout.

Traditional Chinese astrology places the Horse in the "Fire Triangle" (or "Third Trine") alongside the Tiger and the Dog — animals that share the Horse's courage, loyalty, and restless energy. These three signs form natural alliances built on mutual respect and shared values. Conversely, the Horse sits in direct opposition to the Rat on the zodiac wheel, creating a classic clash of temperaments that requires significant work to overcome.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 92,
        summary:
          'A thrilling, high-energy partnership. The Wood Tiger\'s adventurous spirit and natural compassion perfectly complement the Fire Horse\'s intensity. Both signs value freedom and independence, so neither feels caged. The Wood element tempers the Tiger\'s aggression with flexibility, creating a partner who can ride alongside the Fire Horse without trying to hold the reins. Together, they are unstoppable — pushing each other toward bold endeavors while maintaining deep mutual respect.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 88,
        summary:
          'The Earth Dog offers something the Fire Horse desperately needs but rarely admits: stability. This loyal, principled sign provides a grounding force that anchors the Fire Horse without constraining them. The Dog\'s unwavering devotion earns the Fire Horse\'s deep trust, while the Earth element adds patience and practicality. In return, the Fire Horse brings excitement, passion, and spontaneity to the Dog\'s life, preventing it from becoming too predictable.',
      },
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 85,
        summary:
          'An unexpectedly harmonious pairing. The Water Goat\'s gentle, intuitive nature provides a soothing counterbalance to the Fire Horse\'s intensity. Water cools Fire without extinguishing it, while the Goat\'s creativity and emotional depth resonate with the Horse\'s passionate soul. The Water Goat is one of the few signs that can calm a Fire Horse during emotional storms, offering empathy and understanding rather than opposition.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 30,
        summary:
          'The Horse and the Rat sit at opposite ends of the zodiac, and this fundamental tension is amplified by the element clash. The Water Rat\'s cautious, calculating nature frustrates the Fire Horse\'s desire for direct action. The Rat sees the Horse as reckless; the Horse sees the Rat as timid. While passion can spark between opposites, sustaining this relationship requires extraordinary compromise from both sides.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 35,
        summary:
          'Two immovable forces colliding. The Metal Ox\'s rigid determination meets the Fire Horse\'s fierce independence, creating power struggles that neither sign is willing to concede. The Ox demands routine and predictability; the Horse craves spontaneity and freedom. Metal\'s sharpness can wound Fire\'s pride, while Fire\'s unpredictability destabilizes the Ox\'s carefully ordered world.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 40,
        summary:
          'The Earth Rabbit\'s need for peace, harmony, and quiet stability clashes with the Fire Horse\'s volatile, high-energy temperament. The Rabbit finds the Horse overwhelming and abrasive, while the Horse finds the Rabbit overly cautious and emotionally avoidant. The Earth element provides some grounding, but the fundamental incompatibility in pace and intensity makes this a difficult match.',
      },
    ],

    elementAffinity: `As a double-fire sign, the Fire Horse interacts with other elements in pronounced ways. Earth element signs (Dog, Ox, Dragon, Goat, Monkey, Rooster) can provide essential grounding — Fire feeds Earth in the productive cycle, meaning Fire Horses naturally nurture and energize Earth-element partners. Wood element signs fuel the Fire Horse's energy (Wood feeds Fire), creating dynamic, high-energy partnerships that can be exhilarating but risk burning too hot. Water element signs present the most complex dynamic: Water controls Fire in the destructive cycle, which can feel threatening to the Fire Horse's autonomy, yet a skilled Water-element partner provides exactly the cooling influence this sign needs. Metal element signs tend to clash — Fire melts Metal, creating relationships where the Fire Horse's intensity can feel destructive to Metal's structured, disciplined nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Fire Horses are born entrepreneurs and trailblazers. They thrive in environments that reward initiative, tolerate risk, and allow for rapid movement. Traditional corporate hierarchies are kryptonite to this sign — the Fire Horse wilts under layers of bureaucracy, micromanagement, and slow decision-making. They need autonomy, variety, and the freedom to pursue their instincts.

The ideal Fire Horse career combines passion with impact. They are drawn to work that feels meaningful, urgent, and — ideally — a little dangerous. Whether building a startup from scratch, leading emergency response teams, or breaking stories as investigative journalists, Fire Horses are at their best when the stakes are high and conventional approaches have failed. They are the people you call when everything is on fire and someone needs to run toward the flames.

Financially, Fire Horses tend toward feast-or-famine patterns. They are capable of generating enormous wealth through bold moves and entrepreneurial instincts, but they can also lose it just as quickly through impulsive spending or high-risk ventures. The most successful Fire Horses learn to partner with a trusted financial advisor — preferably an Earth or Metal sign — who can impose the discipline they naturally lack.`,

    idealCareers: [
      'Entrepreneur',
      'Creative Director',
      'Emergency Medicine',
      'Investigative Journalist',
      'Stunt Coordinator',
      'Startup Founder',
      'Athletic Coach',
      'Political Activist',
    ],

    financialStyle:
      'Fire Horses are bold, instinctive investors who trust their gut over spreadsheets. They are attracted to high-risk, high-reward opportunities and can generate spectacular returns through sheer audacity and timing. However, they tend to overspend during periods of excitement and under-save during lean times. Their financial life benefits enormously from structure — automated savings, trusted advisors, and clear limits on impulse purchases. The Fire Horse who masters financial discipline unlocks an extraordinary capacity for wealth creation.',

    tips: [
      'Seek roles with maximum autonomy. Fire Horses perform worst when micromanaged and best when given a mission and the freedom to execute it their way. Negotiate for independence, not just compensation.',
      'Build a team that complements your weaknesses. Surround yourself with detail-oriented, patient people who can handle the follow-through that your restless nature tends to neglect. Your vision combined with their execution is unstoppable.',
      'Channel restlessness into serial expertise. Instead of abandoning careers when boredom strikes, look for ways to reinvent your role or pivot within your industry. The Fire Horse who goes deep in one domain while constantly innovating within it finds lasting satisfaction.',
      'Create a financial firewall. Automate savings before you can spend them. Establish a "cooling off" period for any purchase or investment above a set threshold. Your future self will thank you for the structure your present self resists.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Fire Horse is not for the faint of heart. This is a sign that loves with the same intensity it brings to everything else — passionately, possessively, and with an all-or-nothing fervor that can be both intoxicating and terrifying. When a Fire Horse falls in love, the world narrows to a single point of blazing focus. They are extraordinarily generous, fiercely loyal (on their own terms), and capable of grand romantic gestures that take a partner's breath away.

However, the Fire Horse's need for freedom creates a fundamental tension in romantic relationships. They want deep, passionate connection — but they also need space to roam. Partners who try to cage them, control them, or domesticate them will find themselves facing a full-blown revolt. The Fire Horse needs a relationship that feels like a partnership between equals, not a surrender of autonomy.

The early stages of Fire Horse romance are legendary. They pursue with irresistible charm, overwhelming attention, and an almost supernatural ability to make their chosen person feel like the most important being in the universe. The challenge comes later, when the initial blaze settles into everyday reality. Fire Horses must learn that sustained love requires tending — small daily acts of care, patience during difficult conversations, and the willingness to stay when every instinct says run.`,

    loveStyle:
      'The Fire Horse loves with volcanic passion and fierce independence. They are romantic idealists who crave a partner capable of matching their intensity while respecting their need for freedom. Their love language tends toward grand gestures and shared adventures rather than quiet domesticity. They express affection through action — spontaneous trips, passionate debates, and an unwavering willingness to fight for those they love. In return, they need a partner who can handle their emotional extremes without trying to suppress them.',

    idealPartnerTraits: [
      'Independent',
      'Adventurous',
      'Emotionally Resilient',
      'Supportive of Freedom',
      'Intellectually Stimulating',
    ],

    tips: [
      'Choose a partner who has their own passions and pursuits. The Fire Horse needs someone who will not become dependent on them for purpose or entertainment. A partner with a rich inner life and independent interests creates the space this sign needs to breathe.',
      'Practice the art of staying. When conflict arises, your instinct is to bolt — physically or emotionally. The deepest growth in Fire Horse relationships comes from learning to sit with discomfort, listen without defending, and repair rather than replace.',
      'Balance grand gestures with daily presence. Your partner needs consistent warmth, not just occasional fireworks. A morning coffee brought without being asked means more than an annual extravagant surprise.',
      'Communicate your need for space directly and early. Partners who understand that your occasional withdrawal is not rejection but recharging will be far more supportive than those left to guess at your emotional landscape.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Horse's double-fire constitution gives them extraordinary energy and vitality — but also a pronounced vulnerability to conditions associated with excess heat and overexertion. In Traditional Chinese Medicine (TCM), the Fire element governs the Heart, Small Intestine, and the circulatory system. Fire Horses are predisposed to conditions involving these organs, particularly when stress, overwork, or emotional turmoil pushes their already blazing internal fire to dangerous levels.

The most common Fire Horse health pattern is the cycle of intense output followed by crash. They push themselves to extraordinary limits — working through the night, training beyond their body's signals, taking on too much — and then collapse when their reserves are depleted. Adrenal fatigue, insomnia, heart palpitations, and inflammatory conditions are the body's way of telling a Fire Horse to cool down.

Prevention is the Fire Horse's greatest health strategy. Rather than waiting for crisis, they benefit enormously from building cooling, calming practices into their daily routine: adequate sleep, hydration, meditation, and regular time in nature (especially near water). The Fire Horse who learns to balance their intense yang energy with intentional yin practices can enjoy remarkable vitality well into old age.`,

    bodyAreas: ['Heart', 'Circulatory System', 'Small Intestine', 'Eyes'],

    exercises: [
      'High-intensity interval training',
      'Martial arts',
      'Horseback riding',
      'Adventure sports',
    ],

    dietTips: [
      'Emphasize cooling foods to counterbalance excess internal heat: cucumber, watermelon, green tea, leafy greens, mint, and bitter melon. These foods help regulate the Fire Horse\'s tendency toward inflammation and overheating.',
      'Reduce stimulants carefully. Fire Horses are drawn to coffee, energy drinks, and spicy food — all of which amplify their already elevated fire. Gradual reduction rather than cold-turkey elimination works best for this impatient sign.',
      'Eat regular, grounding meals. Fire Horses tend to skip meals when absorbed in projects, then overeat when the crash comes. Establishing consistent meal times with whole grains, root vegetables, and quality protein stabilizes their volatile energy.',
      'Stay hydrated obsessively. The double-fire constitution burns through fluids quickly. Fire Horses need significantly more water than average — aim for well above the standard recommendation, especially during intense physical or mental activity.',
    ],

    mentalHealth:
      'The Fire Horse\'s greatest mental health challenge is learning to sit with stillness. Their restless mind craves constant stimulation, which can evolve into anxiety, insomnia, or addictive behaviors when unmanaged. Meditation — particularly movement-based practices like tai chi, walking meditation, or yoga — is profoundly beneficial, as it provides the physical engagement this sign needs while training the mind to slow down. Fire Horses also benefit from creative outlets that channel their emotional intensity constructively: music, writing, painting, or any practice that transforms inner fire into something beautiful rather than destructive. Professional support is especially valuable during periods of burnout or when the Fire Horse\'s characteristic optimism dims into depression — a shift they are often too proud to acknowledge.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 7],
    colors: ['Red', 'Orange', 'Gold', 'Purple'],
    direction: 'South',
    gemstones: ['Ruby', 'Carnelian', 'Citrine'],
    flowers: ['Sunflower', 'Red Rose', 'Marigold'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE HORSES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Sandra Bullock',
        profession: 'Actress',
        birthYear: 1966,
        description:
          'One of Hollywood\'s most bankable and versatile stars, Sandra Bullock embodies the Fire Horse\'s magnetic charisma and fierce independence. Her career trajectory — from action blockbusters to Oscar-winning drama — reflects the sign\'s refusal to be typecast and their ability to reinvent themselves at will.',
      },
      {
        name: 'Adam Sandler',
        profession: 'Actor/Comedian',
        birthYear: 1966,
        description:
          'Adam Sandler\'s career is a masterclass in Fire Horse independence. Rather than conforming to Hollywood\'s expectations, he built his own production empire and consistently defied critics by following his instincts — a quintessential Fire Horse trait that has made him one of the most commercially successful entertainers alive.',
      },
      {
        name: 'Halle Berry',
        profession: 'Actress',
        birthYear: 1966,
        description:
          'Halle Berry broke barriers as the first African-American woman to win the Academy Award for Best Actress, embodying the Fire Horse\'s trailblazing spirit and refusal to accept limitations. Her boldness in choosing complex, challenging roles reflects the sign\'s attraction to intensity and transformation.',
      },
      {
        name: 'Mike Tyson',
        profession: 'Boxing Champion',
        birthYear: 1966,
        description:
          'Few public figures embody the Fire Horse\'s explosive power and volatility as vividly as Mike Tyson. His meteoric rise to become the youngest heavyweight champion in history, followed by spectacular personal and professional turmoil, illustrates both the extraordinary potential and the destructive risks of unchecked Fire Horse energy.',
      },
      {
        name: 'Josephine Baker',
        profession: 'Entertainer/Activist',
        birthYear: 1906,
        description:
          'Josephine Baker was the Fire Horse incarnate — a groundbreaking performer who conquered Paris, defied racism, served as a spy for the French Resistance, and adopted twelve children of different nationalities. Her fearless, boundary-shattering life exemplifies the sign\'s refusal to be contained by any convention.',
      },
      {
        name: 'Leonid Brezhnev',
        profession: 'Soviet Leader',
        birthYear: 1906,
        description:
          'As General Secretary of the Soviet Union for eighteen years, Brezhnev demonstrated the Fire Horse\'s characteristic stubbornness and staying power. His forceful leadership style and resistance to change — for better and worse — reflect the sign\'s iron will and difficulty adapting once committed to a course.',
      },
      {
        name: 'Cindy Crawford',
        profession: 'Supermodel/Entrepreneur',
        birthYear: 1966,
        description:
          'Cindy Crawford leveraged her Fire Horse magnetism into one of the most successful modeling careers in history, then parlayed that fame into a thriving business empire. Her combination of stunning presence, shrewd business instincts, and fierce independence is pure Fire Horse energy.',
      },
      {
        name: 'Janet Jackson',
        profession: 'Singer/Performer',
        birthYear: 1966,
        description:
          'Janet Jackson\'s career is defined by the Fire Horse\'s passion for creative control and reinvention. From breaking free of her famous family\'s shadow to producing groundbreaking albums that pushed musical boundaries, she exemplifies the Fire Horse\'s drive to forge an identity entirely on their own terms.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Fire Horse occupies a unique and charged position in East Asian mythology and folklore. In Chinese tradition, the Horse is the seventh animal of the zodiac, associated with the earthly branch Wu (午) and the hours of 11am to 1pm — the peak of the sun's power. The Horse represents noon, midsummer, and the zenith of yang energy. When combined with the Fire element, this creates what classical Chinese astrologers called a "double fire" (丙午) — a rare intensification where the element and the animal's intrinsic nature reinforce each other to an extreme degree.

In Japan, the Fire Horse year is known as "hinoeuma" (丙午), and it carries one of the most remarkable superstitions in modern demographic history. Japanese folklore holds that women born in hinoeuma years possess an untamable, fierce temperament that brings misfortune to their husbands. This belief is rooted in the legend of Yaoya Oshichi, a grocer's daughter in Edo-period Japan who was said to have committed arson out of obsessive love — and whose birth year was retroactively associated with the Fire Horse. The superstition had a measurable real-world impact: Japan's birth rate dropped by approximately 25% during the 1966 Fire Horse year, as families deliberately avoided conceiving children who would be born under this sign.

The mythology surrounding the Fire Horse reflects humanity's ancient ambivalence toward uncontainable power. The Fire Horse is simultaneously revered and feared — celebrated for its extraordinary vitality and dreaded for its potential destructiveness. This duality runs through every cultural tradition that has grappled with this sign, from Chinese imperial astrology to Japanese folk religion to modern pop culture.`,

    symbolism: `The Fire Horse symbolizes untamed power, radical transformation, and the dangerous beauty of living at full intensity. In traditional symbolism, it represents the moment when fire — already the most volatile of the five elements — finds its most dynamic vessel in the Horse, an animal synonymous with freedom, speed, and wild spirit. Together, they embody the force that burns away the old to make way for the new.

In the productive cycle of Wu Xing, Fire creates Earth through destruction — a profound metaphor for the Fire Horse's role as an agent of transformation. They do not merely change things; they incinerate existing structures so that something new can grow from the ashes. This makes the Fire Horse both a symbol of creative destruction and a reminder that the most powerful transformations are often the most painful.

The Fire Horse is also deeply associated with courage and authenticity. In a zodiac system that values harmony and balance, the Fire Horse stands apart as the sign that refuses to moderate itself for the comfort of others. This makes it a powerful symbol for anyone who has ever felt too intense, too passionate, or too unconventional for the world around them.`,

    modernInterpretation: `In contemporary culture, the Fire Horse has undergone a significant reinterpretation. Where traditional astrology often viewed this sign with wariness — particularly regarding women — modern perspectives increasingly celebrate the Fire Horse as an archetype of empowerment, authenticity, and transformative leadership. The very qualities that once inspired fear — independence, intensity, refusal to conform — are now recognized as essential ingredients of innovation and social progress.

The year 2026 marks the first Fire Horse year since 1966, and it arrives in a cultural moment that is far more receptive to this sign's energy than any previous era. The world of 2026 values disruption, celebrates unconventional thinking, and desperately needs the kind of bold, transformative leadership that Fire Horses naturally embody. Demographers and cultural observers are watching with interest to see whether the Japanese hinoeuma birth rate decline — one of the most striking examples of astrological belief affecting real-world behavior — will repeat in 2026, or whether sixty years of social change have weakened the superstition's grip.

For those born in 2026, the Fire Horse designation carries both a legacy and a promise. They inherit the sign's legendary intensity and independence, arriving in a world that needs those qualities more than ever. The children of the 2026 Fire Horse year are poised to become a generation of disruptors, creators, and leaders — the untamable spirits their sign has always promised.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
