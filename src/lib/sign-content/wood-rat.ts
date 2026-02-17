// ============================================
// WOOD RAT (甲子) — The Resourceful Pioneer
// ============================================
// The Wood Rat combines the Rat's sharp intelligence and
// resourcefulness with Wood's growth-oriented compassion,
// creating a visionary who builds lasting foundations.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-rat',
  profile: getProfileBySlug('wood-rat')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Rat is one of the most charming and strategically gifted combinations in the Chinese zodiac. The Rat — already renowned for its quick wit, resourcefulness, and social intelligence — is softened and expanded by the Wood element, which brings compassion, creativity, and a genuine desire to help others grow. Where other Rat types can be calculating or self-serving, the Wood Rat channels its considerable cleverness toward building something meaningful for the wider community.

People born under this sign possess an unusual blend of sharp analytical thinking and warm emotional intelligence. They read rooms with uncanny accuracy, understanding not just what people say but what they need. This makes them exceptional networkers, mediators, and collaborators. The Wood Rat does not simply accumulate resources for personal gain — though they are certainly capable of that — they invest in relationships, ideas, and ventures that create shared prosperity.

What distinguishes the Wood Rat from other Rat-element combinations is their expansive vision. While the Rat's natural instinct is to secure its immediate territory, the Wood element stretches that horizon outward. Wood Rats think in terms of growth, development, and long-term cultivation. They plant seeds — in business, in friendships, in creative projects — with the patient understanding that the greatest returns come from nurturing something over time rather than harvesting too early.`,

    coreTraits: [
      'Resourceful',
      'Compassionate',
      'Adaptable',
      'Visionary',
      'Sociable',
      'Strategic',
    ],

    strengths: [
      {
        trait: 'Creative Problem-Solving',
        description:
          'The Wood Rat approaches obstacles with a unique combination of analytical precision and creative thinking. Where others see dead ends, the Wood Rat sees detours. The Wood element adds lateral thinking and imaginative leaps to the Rat\'s already formidable mental agility, producing solutions that are both clever and elegant.',
      },
      {
        trait: 'Empathetic Leadership',
        description:
          'Unlike more dominant leadership styles, the Wood Rat leads through understanding and inclusion. They build consensus naturally, making each person feel valued and heard. This creates deep loyalty in teams and organizations, as people sense that the Wood Rat genuinely cares about their well-being — not just their output.',
      },
      {
        trait: 'Networking Mastery',
        description:
          'The Rat is the zodiac\'s supreme networker, and the Wood element elevates this from transactional connection-making to genuine relationship building. Wood Rats maintain vast, carefully tended social networks where favors flow in both directions. They remember birthdays, follow up on conversations, and show up when it matters.',
      },
      {
        trait: 'Adaptive Growth',
        description:
          'Like a tree bending in the wind without breaking, the Wood Rat possesses remarkable flexibility in the face of change. They adapt quickly to new circumstances while maintaining their core values and long-term vision. This resilience makes them particularly effective in volatile environments where rigid thinkers flounder.',
      },
    ],

    challenges: [
      {
        trait: 'Overthinking',
        description:
          'The Wood Rat\'s analytical mind can become a trap when combined with Wood\'s tendency toward deliberation. They may spend too long weighing options, seeking perfect solutions when a good-enough answer would suffice. This analysis paralysis can cause them to miss opportunities that require decisive, immediate action.',
      },
      {
        trait: 'People-Pleasing',
        description:
          'The Wood element\'s compassion can amplify the Rat\'s social sensitivity into a compulsive need to keep everyone happy. Wood Rats may agree to commitments they cannot sustain, avoid necessary confrontations, or dilute their vision to accommodate others. Learning to say no without guilt is a critical growth area.',
      },
      {
        trait: 'Hoarding Tendencies',
        description:
          'The Rat\'s instinct to accumulate and secure resources can conflict with Wood\'s generous nature, creating internal tension. Wood Rats may struggle between their desire to share and their anxiety about scarcity. This can manifest as cluttered spaces, overstuffed schedules, or difficulty letting go of relationships that have run their course.',
      },
      {
        trait: 'Scattered Focus',
        description:
          'Wood\'s expansive energy combined with the Rat\'s curiosity can produce a person who starts many projects but finishes few. The Wood Rat sees potential everywhere and wants to cultivate everything simultaneously. Without discipline, their garden of ideas becomes overgrown, with nothing reaching full maturity.',
      },
    ],

    elementInfluence: `In Wu Xing theory, Wood represents growth, spring, the east, and the virtue of benevolence. When applied to the Rat — the first animal of the zodiac, associated with midnight, new beginnings, and resourceful intelligence — Wood transforms the Rat's survival-oriented cleverness into something more expansive and generous. The Wood element is governed by the liver and gallbladder in Traditional Chinese Medicine, lending the Wood Rat decisiveness tempered by compassion. Wood generates Fire in the productive cycle, meaning the Wood Rat naturally sparks enthusiasm and energy in others. However, Wood is overcome by Metal, so the Wood Rat may struggle against rigid structures, sharp criticism, or environments that demand strict conformity over creative growth.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Rat's compatibility profile reflects its unique blend of social intelligence and nurturing warmth. This sign thrives with partners who appreciate both their cleverness and their compassion — people who can engage in stimulating conversation while also sharing the Wood Rat's desire to build something lasting. The Rat belongs to the first trine alongside the Dragon and the Monkey, sharing these animals' ambition, optimism, and action-oriented nature.

The Wood element adds a layer of flexibility and empathy that makes the Wood Rat more compatible with a wider range of signs than most Rat types. However, they still face challenges with signs that are too emotionally distant, overly competitive, or resistant to the collaborative approach the Wood Rat favors.`,

    bestMatches: [
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 92,
        summary:
          'An exceptional pairing of first-trine allies. The Water Dragon\'s ambitious vision and emotional depth resonate powerfully with the Wood Rat\'s strategic mind and compassionate nature. Water nourishes Wood in the productive cycle, creating a relationship where the Dragon\'s fluid power feeds the Wood Rat\'s growth. Together, they dream big and have the combined intelligence and drive to make those dreams real.',
      },
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 88,
        summary:
          'Two brilliant minds meeting in mutual admiration. The Fire Monkey\'s daring creativity and infectious energy ignite the Wood Rat\'s own inventive spark — Wood feeds Fire in the productive cycle, so the Wood Rat naturally fuels the Monkey\'s ambitions. Their shared first-trine bond ensures deep mutual understanding, while their different elemental energies keep the relationship dynamic and stimulating.',
      },
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 85,
        summary:
          'A grounding, deeply supportive partnership. The Earth Ox provides the stability and reliability the Wood Rat craves, while the Wood Rat brings warmth, social connection, and creative ideas that prevent the Ox\'s life from becoming too predictable. The Ox\'s steadfast loyalty satisfies the Rat\'s need for security, and both signs share a love of building lasting foundations.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 28,
        summary:
          'The Horse and Rat sit in direct opposition on the zodiac wheel, and the Fire element intensifies the clash. The Fire Horse\'s explosive independence and need for constant movement overwhelms the Wood Rat\'s preference for careful cultivation. The Wood Rat seeks stability and collaborative growth; the Fire Horse resists any form of containment. Bridging this gap requires extraordinary patience from both sides.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 35,
        summary:
          'Metal overcomes Wood in the destructive cycle, and the Rooster\'s sharp, critical nature can feel like a constant pruning of the Wood Rat\'s tender growth. The Metal Rooster\'s perfectionism and blunt honesty wound the Wood Rat\'s sensitive spirit, while the Wood Rat\'s indirect communication style frustrates the Rooster\'s demand for transparency.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 40,
        summary:
          'Despite sharing a preference for harmony, these signs clash in fundamental ways. The Earth Rabbit\'s cautious, conflict-avoidant nature frustrates the Wood Rat\'s desire for honest engagement and dynamic growth. Both may retreat into passive-aggressive patterns rather than addressing issues directly, allowing small resentments to compound into larger problems.',
      },
    ],

    elementAffinity: `Wood's position in the productive cycle creates natural harmony with Water signs (Water nourishes Wood) and Fire signs (Wood feeds Fire). The Wood Rat finds deep nourishment in relationships with Water-element partners, who provide emotional depth and intuitive support that sustains the Wood Rat's growth. Fire-element partners energize and inspire the Wood Rat, drawing out their creative potential. Earth signs can be grounding and stabilizing, though the dynamic requires mutual effort. Metal signs present the greatest challenge, as Metal cuts Wood in the destructive cycle — relationships with Metal-element partners may feel restrictive, critical, or fundamentally at odds with the Wood Rat's nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Rat excels in careers that combine intellectual stimulation with meaningful human connection. Unlike pure Rat types who thrive in competitive, high-stakes environments, the Wood Rat adds a collaborative dimension — they want to win, but they want to bring people along with them. This makes them exceptionally effective in roles that require both strategic thinking and relationship management.

Their ideal work environment values innovation, teamwork, and personal growth. They perform best in organizations with flat hierarchies, open communication, and a culture that rewards creative problem-solving over rigid adherence to process. The Wood Rat is the colleague everyone wants on their project — smart enough to see the angles, generous enough to share credit, and diplomatic enough to resolve conflicts before they escalate.

Financially, Wood Rats are natural builders of sustainable wealth. They have the Rat's instinct for spotting opportunities, but the Wood element adds patience and a long-term perspective. They invest in growth — education, relationships, and ventures with compounding returns — rather than chasing quick profits. Their financial weakness is over-generosity: Wood Rats may lend too freely, invest in friends' ventures out of loyalty rather than logic, or neglect their own savings to support others.`,

    idealCareers: [
      'Social Entrepreneur',
      'Human Resources Director',
      'Environmental Consultant',
      'Product Manager',
      'Nonprofit Director',
      'Venture Capitalist',
      'Counselor or Therapist',
      'Urban Planner',
    ],

    financialStyle:
      'Wood Rats are strategic, growth-oriented investors who favor sustainable returns over speculative gambles. They have the Rat\'s sharp eye for value and the Wood element\'s patience for long-term cultivation. Their portfolios tend toward diversified, socially responsible investments — they want their money to grow and to do good. Their financial blind spot is excessive generosity: they may extend loans to friends that become gifts, fund ventures based on personal loyalty rather than business fundamentals, or undercharge for their own services because they feel uncomfortable with profit.',

    tips: [
      'Leverage your networking superpower strategically. Your natural ability to build and maintain relationships is a career asset of extraordinary value — but it needs focus. Identify the five to ten relationships that matter most to your professional growth and invest deeply in those, rather than spreading yourself thin across hundreds of surface-level connections.',
      'Set boundaries around your availability. Your empathetic nature makes you the go-to person for everyone\'s problems, which can consume the time and energy you need for your own projects. Designate specific times for mentoring and collaboration, and protect your deep-work hours fiercely.',
      'Document your contributions. Wood Rats tend to deflect credit and minimize their achievements. In professional settings, this modesty can be a liability. Keep a record of your wins, quantify your impact, and practice communicating your value without apology.',
      'Partner with complementary strengths. Your strategic vision and people skills pair powerfully with partners who bring operational discipline and financial rigor. Seek out Metal or Earth element collaborators who can provide the structure and follow-through that your expansive Wood nature sometimes lacks.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love for the Wood Rat is a deeply invested, carefully cultivated experience. They approach romance with the same combination of strategy and warmth that defines their professional life — attentive, thoughtful, and always thinking several moves ahead. The Wood Rat does not fall in love recklessly; they grow into love, building connection layer by layer until the bond is strong enough to weather any storm.

In relationships, the Wood Rat is remarkably generous — with time, attention, affection, and resources. They are the partner who remembers the small things, anticipates needs, and creates a home environment that feels warm, safe, and full of life. Their love language tends toward acts of service and quality time; they show their devotion through consistent, thoughtful presence rather than grand dramatic gestures.

The challenge for the Wood Rat in love is vulnerability. While they are emotionally attuned to their partner's needs, they can be guarded about their own. The Rat's instinct for self-protection combines with Wood's tendency to give rather than receive, creating a dynamic where the Wood Rat pours energy into the relationship while neglecting their own emotional needs. The healthiest Wood Rat relationships are those where they feel safe enough to receive as much care as they give.`,

    loveStyle:
      'The Wood Rat loves through nurturing, building, and growing alongside their partner. They are attentive, thoughtful partners who invest deeply in creating a relationship that improves with time. Their affection is expressed through consistent care — the daily cup of tea, the remembered conversation, the quietly solved problem. They value intellectual connection as much as physical attraction and need a partner they can talk to about everything from philosophy to grocery lists. In return, they need a partner who can draw them out of their protective shell and create space for mutual vulnerability.',

    idealPartnerTraits: [
      'Emotionally Open',
      'Intellectually Curious',
      'Loyal and Consistent',
      'Appreciative of Subtlety',
      'Growth-Oriented',
    ],

    tips: [
      'Practice receiving love as actively as you give it. Your instinct is to be the caretaker, but true intimacy requires allowing your partner to care for you too. When they offer support, accept it gracefully rather than deflecting with "I\'m fine."',
      'Share your worries, not just your solutions. Your partner wants to know what keeps you up at night, not just hear that you have handled everything. Vulnerability deepens connection in ways that competence alone cannot.',
      'Avoid treating your relationship like a project to optimize. Your strategic mind is an asset in many areas, but love sometimes requires you to stop planning and simply be present. Not everything needs a goal or a timeline.',
      'Choose a partner who challenges your comfort zone. It is tempting to seek someone who fits perfectly into your existing life, but the best relationships for a Wood Rat are those that encourage growth beyond familiar territory.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Rat's health profile is shaped by the Wood element's governance of the liver, gallbladder, tendons, and eyes in Traditional Chinese Medicine. Wood Rats tend to be naturally vital and energetic, with a wiry resilience that allows them to push through demanding periods. However, their tendency to absorb other people's stress, combined with the Rat's anxious disposition, can create a pattern of internalized tension that manifests as liver qi stagnation — a TCM pattern associated with irritability, digestive issues, headaches, and emotional volatility.

The Wood Rat's most common health vulnerability is stress-related tension. They carry worry in their body — tight shoulders, clenched jaw, tension headaches — and may develop digestive problems when anxiety goes unaddressed. Their busy social life and tendency to overcommit can also lead to sleep deprivation, which compounds every other health issue.

Prevention for the Wood Rat centers on movement, emotional expression, and regular decompression. The Wood element thrives when energy flows freely; stagnation — whether physical, emotional, or creative — is the Wood Rat's greatest enemy. Regular exercise, honest emotional communication, and time in nature are not luxuries for this sign but essential maintenance.`,

    bodyAreas: ['Liver', 'Gallbladder', 'Tendons and Ligaments', 'Eyes'],

    exercises: [
      'Yoga or stretching routines',
      'Cycling or swimming',
      'Tai chi or qigong',
      'Nature hiking',
    ],

    dietTips: [
      'Emphasize leafy greens, sprouts, and fresh vegetables that support liver function. The Wood element thrives on the energy of spring foods — light, fresh, and upward-moving. Think salads, steamed greens, and herbal teas over heavy, rich meals.',
      'Reduce alcohol and fatty foods that burden the liver. The Wood Rat\'s social nature often involves dining and drinking with others, but their liver is particularly sensitive to excess. Moderation is the key — enjoy social meals without making them the default.',
      'Incorporate sour flavors in moderation — lemon water, fermented foods, and vinegar-based dressings support liver function according to TCM principles. Sour is the taste associated with Wood and can help regulate liver qi flow.',
      'Eat at regular intervals to maintain stable blood sugar. The Wood Rat\'s busy schedule and tendency to skip meals when focused leads to energy crashes that trigger anxiety and irritability. Consistent nourishment prevents the emotional volatility this sign is prone to.',
    ],

    mentalHealth:
      'The Wood Rat\'s greatest mental health challenge is managing the gap between their empathetic absorption of others\' emotions and their own difficulty expressing vulnerability. They often carry more emotional weight than they acknowledge, functioning as the confidant, mediator, and emotional anchor for their social circle while neglecting their own inner life. This pattern can lead to burnout, resentment, and a creeping sense of emotional depletion. Journaling, therapy, and honest conversations with trusted friends are powerful tools for the Wood Rat. Creative outlets — writing, music, gardening, or any practice that gives form to internal experience — are particularly therapeutic. The Wood Rat should also guard against the Rat\'s tendency toward anxiety and catastrophic thinking, which the Wood element\'s sensitivity can amplify. Mindfulness practices that bring attention to the present moment, rather than spiraling into future worries, are invaluable.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 8],
    colors: ['Green', 'Teal', 'Cream'],
    direction: 'East',
    gemstones: ['Jade', 'Aventurine', 'Peridot'],
    flowers: ['Lily', 'Bamboo', 'Fern'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD RATS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Mark Zuckerberg',
        profession: 'Tech Entrepreneur',
        birthYear: 1984,
        description:
          'The co-founder of Facebook exemplifies the Wood Rat\'s ability to build vast networks and cultivate connections at scale. His strategic vision combined with an instinct for social dynamics reflects the Wood Rat\'s unique blend of analytical intelligence and understanding of human connection.',
      },
      {
        name: 'Scarlett Johansson',
        profession: 'Actress',
        birthYear: 1984,
        description:
          'One of Hollywood\'s most versatile and bankable stars, Scarlett Johansson embodies the Wood Rat\'s adaptability and magnetic charm. Her ability to navigate between blockbuster action roles and nuanced dramatic performances reflects the Wood Rat\'s range and strategic career-building instincts.',
      },
      {
        name: 'LeBron James',
        profession: 'Basketball Legend',
        birthYear: 1984,
        description:
          'LeBron James demonstrates the Wood Rat\'s rare combination of individual brilliance and collaborative leadership. His career-long commitment to building winning teams, investing in communities, and growing his influence beyond basketball reflects the Wood Rat\'s expansive, growth-oriented nature.',
      },
      {
        name: 'Katy Perry',
        profession: 'Singer/Songwriter',
        birthYear: 1984,
        description:
          'Katy Perry\'s reinventive pop career and shrewd brand-building showcase the Wood Rat\'s creativity and strategic adaptability. Her ability to connect with massive audiences while continuously evolving her artistic identity reflects this sign\'s social intelligence and growth mindset.',
      },
      {
        name: 'Avril Lavigne',
        profession: 'Singer/Songwriter',
        birthYear: 1984,
        description:
          'Avril Lavigne carved her own path in the pop-punk world with authenticity and resourcefulness — quintessential Wood Rat traits. Her ability to build a devoted global fanbase and maintain relevance across decades reflects the sign\'s networking instincts and adaptive creativity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rat holds the position of first animal in the Chinese zodiac, a status earned — according to legend — through cleverness rather than strength. In the great race across the river, the Rat hitched a ride on the Ox's back and leaped ahead at the last moment to claim first place. This founding myth establishes the Rat as the zodiac's supreme strategist: resourceful, opportunistic, and always thinking one step ahead. When combined with the Wood element, the Rat's cunning is softened by benevolence. In Chinese cosmology, Wood is associated with the virtue of ren (仁) — humanity, compassion, and kindness. The Wood Rat thus represents the strategist who uses their intelligence not merely for personal gain but for the benefit of the community.

In the sexagenary cycle, the Wood Rat corresponds to the Heavenly Stem Jia (甲) and the Earthly Branch Zi (子), making it the very first combination in the complete 60-year cycle. This gives the Wood Rat a special significance as the sign of beginnings — the seed from which everything else grows. In classical Chinese thought, this position represents pure potential: the moment before dawn, the first day of spring, the initial spark of a new era.`,

    symbolism: `The Wood Rat symbolizes intelligent growth, strategic beginnings, and the power of community building. In traditional symbolism, it represents the marriage of cunning and compassion — the leader who advances not through force or intimidation but through understanding, connection, and the patient cultivation of relationships. The Rat's association with wealth and abundance is enhanced by Wood's connection to growth and fertility, making the Wood Rat a powerful symbol of sustainable prosperity.

As the first sign in the 60-year cycle, the Wood Rat also symbolizes renewal and fresh starts. It is the zodiac's reminder that every great journey begins with a single resourceful step, and that the most enduring empires are built not on brute strength but on strategic generosity and the ability to bring people together around a shared vision.`,

    modernInterpretation: `In contemporary culture, the Wood Rat archetype resonates strongly with the age of social media, network effects, and collaborative innovation. The Wood Rat's natural gifts — building connections, spotting opportunities, nurturing growth in others — are precisely the skills that define success in the modern economy. Many of today's most influential entrepreneurs, creators, and community builders embody Wood Rat energy: they understand that in a networked world, the most powerful resource is not money or technology but relationships.

The 1984 Wood Rat generation came of age alongside the internet revolution, and many of its members have become defining figures of the digital era. This is no coincidence — the Wood Rat's instinct for connection and growth found its perfect medium in platforms that multiply human relationships at unprecedented scale. For future Wood Rat generations, this archetype suggests a continued evolution toward leadership styles that prioritize empathy, sustainability, and collective prosperity over individual dominance.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
