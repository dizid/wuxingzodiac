// ============================================
// WOOD DOG (甲戌) — The Loyal Guardian
// ============================================
// The Wood Dog combines the Dog's unwavering loyalty
// and moral clarity with Wood's flexible compassion,
// creating a principled protector who fights for justice
// while treating everyone with genuine kindness.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-dog',
  profile: getProfileBySlug('wood-dog')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Dog is the most open-hearted and socially progressive of all Dog-element combinations. The Dog — already defined by loyalty, honesty, and an unwavering commitment to justice — gains warmth, flexibility, and creative vision through the Wood element's influence. Where other Dog types can be rigid in their moralism or anxious in their vigilance, the Wood Dog protects with a generous spirit, advocates with compassion, and upholds their principles while remaining genuinely open to other perspectives.

People born under this sign possess a rare combination of moral conviction and emotional warmth. They are the friends who will drop everything to help, the colleagues who stand up for fair treatment, and the partners who provide both fierce protection and gentle understanding. The Wood Dog does not merely believe in doing the right thing — they embody it in their daily actions, creating ripples of positive influence in every community they touch.

What makes the Wood Dog particularly compelling is their ability to combine idealism with practicality. They dream of a better world, but they also roll up their sleeves and do the work required to build it. Their vision of justice is not abstract philosophy but lived practice — they volunteer, they advocate, they organize, they show up. This combination of principled vision and practical action makes the Wood Dog one of the most genuinely admirable signs in the entire zodiac.`,

    coreTraits: [
      'Loyal',
      'Principled',
      'Compassionate',
      'Generous',
      'Protective',
      'Fair-Minded',
    ],

    strengths: [
      {
        trait: 'Unwavering Loyalty',
        description:
          'When a Wood Dog commits to a person, a cause, or a principle, that commitment is absolute. Their loyalty is not blind obedience but a considered, values-based devotion that endures through difficulty, distance, and time. Once you have earned a Wood Dog\'s trust, you have an ally for life — someone who will defend you, support you, and stand by you when everyone else has gone.',
      },
      {
        trait: 'Moral Leadership',
        description:
          'The Wood Dog leads by moral example rather than authority or charisma. Their consistent integrity inspires others to raise their own standards and act with greater honesty and courage. In organizations and communities, the Wood Dog\'s presence elevates the ethical temperature — people behave better when a Wood Dog is watching, not out of fear but out of respect.',
      },
      {
        trait: 'Generous Spirit',
        description:
          'The Wood element amplifies the Dog\'s natural helpfulness into genuine generosity. The Wood Dog gives freely — time, resources, expertise, emotional support — without keeping score or expecting return. Their generosity is not strategic but instinctive, flowing from a deep well of compassion that sees others\' needs as opportunities to make a difference.',
      },
      {
        trait: 'Flexible Justice',
        description:
          'Unlike more rigid Dog types, the Wood Dog understands that justice requires flexibility. They consider context, circumstances, and individual situations rather than applying rules mechanically. This nuanced approach to fairness makes them exceptional mediators, advisors, and leaders who earn trust from all sides of a dispute.',
      },
    ],

    challenges: [
      {
        trait: 'Chronic Worry',
        description:
          'The Dog\'s natural vigilance combined with Wood\'s emotional sensitivity creates a tendency toward persistent anxiety. The Wood Dog worries about everything — their loved ones\' safety, their community\'s future, the state of the world. This worry, while rooted in genuine care, can become overwhelming and physically exhausting if not consciously managed.',
      },
      {
        trait: 'Self-Neglect',
        description:
          'The Wood Dog\'s generous nature can lead them to consistently prioritize others\' needs over their own. They may skip meals to help a friend, lose sleep worrying about a colleague\'s problems, or postpone their own ambitions to support someone else\'s. Over time, this pattern depletes their reserves and breeds quiet resentment.',
      },
      {
        trait: 'Judgmental Tendencies',
        description:
          'The Dog\'s strong moral compass, even softened by Wood\'s flexibility, can produce harsh judgments of those who fall short of their ethical standards. The Wood Dog may struggle to maintain relationships with people whose values differ from their own, creating a social circle that is loyal but narrow.',
      },
      {
        trait: 'Difficulty Trusting',
        description:
          'The Wood Dog takes time to trust new people and can be hypervigilant for signs of dishonesty or bad faith. This protective instinct, while occasionally justified, can prevent them from forming connections with genuinely good people who simply take longer to reveal their character.',
      },
    ],

    elementInfluence: `Wood's influence on the Dog is profoundly harmonizing. The Dog is associated with the Earth element in Chinese cosmology, connected to the late autumn season when nature prepares for winter. Wood's relationship with Earth is penetrating — Wood overcomes Earth through the force of roots breaking through soil. In the Wood Dog, this manifests as the growth of compassion and flexibility through the Dog's solid moral foundation. Wood adds vitality, creativity, and openness to the Dog's inherent loyalty and principled nature, creating a personality that is both strong and gentle, both protective and nurturing. The result is a Dog who guards not just against threats but for growth — a protector whose ultimate goal is not safety alone but the flourishing of everyone under their care.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Dog's compatibility is defined by their need for trust, shared values, and a partner who appreciates both their protective devotion and their idealistic vision. They need someone honest, emotionally available, and willing to engage with the Wood Dog's deep concern for fairness and justice. The Dog belongs to the third trine alongside the Tiger and the Horse, sharing these animals' courage, energy, and commitment to authenticity.

The Wood element adds warmth and flexibility to the Dog's compatibility profile, making them more accepting of different personalities than other Dog types. However, they still require fundamental honesty and moral alignment from their partners — the Wood Dog cannot sustain a relationship with someone whose values they do not respect.`,

    bestMatches: [
      {
        slug: 'water-tiger',
        name: 'Water Tiger',
        score: 91,
        summary:
          'A powerful third-trine pairing of two principled, courageous spirits. The Water Tiger\'s bold leadership and intuitive wisdom complement the Wood Dog\'s loyal devotion beautifully — Water nourishes Wood, sustaining the Dog\'s growth. Both signs share a commitment to justice and fairness, creating a partnership built on deep mutual respect and shared purpose.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 87,
        summary:
          'A dynamic third-trine alliance where the Fire Horse\'s passionate energy and independent spirit are grounded by the Wood Dog\'s stable loyalty. Wood feeds Fire, creating a productive dynamic where the Dog\'s steadfast support fuels the Horse\'s bold ventures. The Dog provides the home base the Horse needs; the Horse brings the excitement the Dog secretly craves.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 84,
        summary:
          'A tender, deeply nurturing pairing. The Water Rabbit\'s gentle wisdom and refined sensibility bring peace to the Wood Dog\'s anxious mind — Water nourishes Wood, providing the emotional sustenance this worried sign desperately needs. The Dog\'s protective devotion creates the security the Rabbit craves, while the Rabbit\'s calming presence soothes the Dog\'s restless vigilance.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 30,
        summary:
          'The Dog and Dragon sit in direct opposition on the zodiac wheel, creating fundamental tension between the Dog\'s skepticism and the Dragon\'s imperial ambition. The Wood Dog questions the Earth Dragon\'s authority and grand claims, while the Dragon finds the Dog\'s watchdog nature irritating and constraining. Building trust between these opposed signs requires significant mutual compromise.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 35,
        summary:
          'The Metal Rooster\'s sharp criticism and perfectionism overwhelms the Wood Dog\'s sensitive, values-driven nature. Metal cuts Wood, creating a dynamic where the Rooster\'s exacting standards feel like an attack on the Dog\'s generous spirit. The Rooster\'s blunt honesty wounds the Dog; the Dog\'s moral judgments irritate the Rooster.',
      },
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 38,
        summary:
          'The Fire Goat\'s emotional intensity and artistic self-focus conflicts with the Wood Dog\'s service-oriented values. The Dog may see the Goat as self-indulgent; the Goat may find the Dog\'s moral earnestness stifling. Fire consumes Wood, meaning the Goat\'s passionate demands can exhaust the Dog\'s resources without adequate reciprocation.',
      },
    ],

    elementAffinity: `The Wood Dog thrives with Water-element partners, who nourish Wood's growth and provide the emotional depth and calm that soothes the Dog's anxious nature. Fire-element partners are energizing — Wood feeds Fire — creating dynamic partnerships, though the Dog must guard against being consumed by the Fire partner's needs. Earth-element partners share the Dog's grounded nature and can provide stability, though the relationship may lack the dynamism the Wood element craves. Metal-element partners present challenges, as Metal cuts Wood — these relationships can feel critical and restrictive to the warm-hearted Wood Dog.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Dog excels in careers that combine service with impact. They are drawn to work that makes a tangible difference in people's lives and that aligns with their strong moral values. The Wood Dog is not motivated primarily by money, status, or power — they are motivated by purpose. When they find work that serves their values, they bring an extraordinary combination of dedication, integrity, and collaborative warmth.

Their ideal work environment is fair, transparent, and committed to making a positive difference. The Wood Dog thrives in organizations with clear ethical standards and a genuine mission. They struggle in environments that prioritize profit over people, tolerate dishonesty, or reward political maneuvering over honest contribution.

Financially, the Wood Dog is responsible and generous. They save consistently, spend thoughtfully, and donate to causes they believe in. Their financial style reflects their broader values: money is a tool for creating security and doing good, not an end in itself. The Wood Dog's financial weakness is their tendency to undercharge for their services or accept below-market compensation because they prioritize mission alignment over financial return.`,

    idealCareers: [
      'Social Worker or Counselor',
      'Veterinarian',
      'Human Rights Advocate',
      'Teacher or Educator',
      'Firefighter or Paramedic',
      'Environmental Conservation Officer',
      'Public Defender',
      'Community Organizer',
    ],

    financialStyle:
      'The Wood Dog is a responsible, values-aligned financial manager who saves consistently and spends with purpose. They are generous donors and willing volunteers, often directing significant portions of their income toward causes they care about. Their investment style is conservative and ethical — they avoid industries that conflict with their values, even at the cost of potential returns. Their financial weakness is chronic underearning: they may accept lower compensation for meaningful work, fail to negotiate raises, or prioritize others\' financial needs above their own.',

    tips: [
      'Negotiate your compensation based on your market value, not your emotional attachment to the mission. You can serve a cause you believe in while also earning what you deserve. Financial security strengthens your ability to contribute; chronic underpaying weakens it.',
      'Set boundaries around your availability for others\' problems. Your instinct to help is noble, but it must be sustainable. Establish clear work hours, learn to say "I can not help with that right now," and protect time for your own projects and rest.',
      'Develop leadership skills rather than remaining in purely supportive roles. Your integrity, fairness, and genuine care for people make you an exceptional leader — but you must claim that role rather than waiting for it to be offered. Step forward; you have earned the right.',
      'Build a career that sustains you, not just one that serves others. Your long-term effectiveness depends on your own well-being, professional development, and financial stability. Treat your career as worthy of the same investment you make in the people and causes you champion.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Dog in love is loyal, protective, and deeply invested in their partner's happiness. They are not flashy romantics — their love is expressed through steady, reliable devotion, emotional availability, and an unwavering willingness to be present through every season of the relationship. When a Wood Dog loves you, you are loved completely — with all their strength, all their tenderness, and all their anxious, watchful care.

In relationships, the Wood Dog creates a sense of profound safety. They are the partner who picks you up when your car breaks down, who sits with you through difficult medical conversations, who defends you fiercely when others speak against you. Their love is protective and practical — expressed through acts of service, emotional support, and the creation of a home that feels like a sanctuary.

The Wood Dog's challenge in love is their anxiety. They worry about their partner's well-being, the relationship's future, and their own adequacy as a partner. This worry, while rooted in love, can become suffocating if it translates into controlling behavior or constant need for reassurance. The healthiest Wood Dog relationships are those where both partners actively build trust through open communication and consistent reliability.`,

    loveStyle:
      'The Wood Dog loves through unwavering loyalty, protective care, and honest emotional engagement. They are devoted partners who show up every day with consistent warmth and reliability. Their love language is acts of service and quality time — they demonstrate their feelings by being there, by helping, and by creating a secure, loving home. They need a partner who values faithfulness, communicates honestly, and understands that the Wood Dog\'s occasional anxiety is not a lack of trust but an excess of care.',

    idealPartnerTraits: [
      'Honest and Transparent',
      'Emotionally Available',
      'Values Loyalty',
      'Patient with Anxiety',
      'Shares Core Values',
    ],

    tips: [
      'Trust your partner\'s love without requiring constant proof. Your anxious mind may seek reassurance repeatedly, which can feel exhausting for your partner. Work on developing internal security that does not depend on external validation.',
      'Allow your partner to take risks without trying to protect them from every possible outcome. Your protective instincts are loving, but they can become controlling if you try to eliminate all risk from your partner\'s life. Trust their judgment and support their autonomy.',
      'Express your love verbally, not just through service. While your actions speak volumes, your partner also needs to hear the words. Tell them they are loved, appreciated, and valued — regularly and without prompting.',
      'Make time for joy and play in your relationship. Your natural seriousness and concern for doing the right thing can make the relationship feel heavy. Balance the earnest conversations with laughter, adventure, and lighthearted connection.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Dog's health profile reflects the interplay between Wood's liver-centered energy and the Dog's Earth-associated digestive and worry patterns. Their constitution is generally sturdy — they have good physical endurance and natural resilience. However, their chronic tendency toward worry and self-neglect can create health problems that are entirely preventable with proper self-care.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Dog's Earth nature connects to the spleen, stomach, and digestive system. The Wood Dog is particularly susceptible to conditions where worry disrupts digestive function — a TCM pattern known as "Wood overacting on Earth." Chronic anxiety literally impairs their ability to digest food and absorb nutrients, creating a downward spiral of worry, poor digestion, fatigue, and more worry.

The Wood Dog's health strategy should center on anxiety management, regular self-care routines, and conscious attention to their own needs. They are excellent at taking care of others but must learn to apply the same devotion to their own well-being. The Wood Dog who establishes a consistent self-care practice discovers that they have far more energy and resilience to offer the world than the self-neglecting version of themselves.`,

    bodyAreas: ['Digestive System', 'Liver', 'Immune System', 'Joints'],

    exercises: [
      'Walking with a canine companion',
      'Group fitness classes',
      'Hiking in nature',
      'Martial arts for confidence',
    ],

    dietTips: [
      'Prioritize warm, easily digestible meals that support both liver and spleen health. Soups, stews, cooked grains, and gentle proteins provide the nourishment the Wood Dog\'s anxiety-affected digestive system can readily absorb.',
      'Include calming foods and herbs: chamomile tea, sweet potato, jujube dates, and oats. These support the nervous system and reduce the chronic stress response that undermines the Wood Dog\'s digestion and immunity.',
      'Eat in calm, pleasant environments. The Wood Dog\'s sensitive digestive system is directly affected by the emotional atmosphere of meals. Stressful eating conditions — arguing at dinner, eating while worrying, rushing through meals — impair digestion noticeably.',
      'Support liver health with leafy greens, lemon water, and bitter herbs like dandelion. The Wood element\'s governance of the liver makes its health essential for the Wood Dog\'s emotional stability and physical vitality.',
    ],

    mentalHealth:
      'The Wood Dog\'s central mental health challenge is anxiety — a condition deeply rooted in their protective, vigilant nature. They scan for threats, anticipate problems, and carry the weight of worry for everyone they love. This baseline anxiety can escalate into generalized anxiety disorder if not managed, manifesting as chronic tension, sleep disturbance, digestive problems, and emotional exhaustion. The Wood Dog benefits enormously from regular anxiety management practices: mindfulness meditation, progressive muscle relaxation, and cognitive behavioral techniques that challenge catastrophic thinking. Physical exercise is also potent medicine for the Wood Dog — it metabolizes the stress hormones their worried mind generates and provides the physical outlet their tension requires. Perhaps most importantly, the Wood Dog needs to accept that they cannot protect everyone from everything. Learning to tolerate uncertainty and trust that the people they love can handle their own challenges is one of the most transformative — and most difficult — psychological journeys available to this deeply caring sign.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Green', 'Red', 'Purple'],
    direction: 'East',
    gemstones: ['Jade', 'Carnelian', 'Turquoise'],
    flowers: ['Rose', 'Orchid', 'Cymbidium'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD DOGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Justin Bieber',
        profession: 'Singer/Songwriter',
        birthYear: 1994,
        description:
          'Justin Bieber\'s evolution from teen phenomenon to emotionally open adult artist reflects the Wood Dog\'s journey toward authentic self-expression. His increasing openness about mental health struggles and his devotion to personal relationships demonstrate the sign\'s combination of vulnerability and loyalty.',
      },
      {
        name: 'Harry Styles',
        profession: 'Singer/Actor',
        birthYear: 1994,
        description:
          'Harry Styles\'s warm, inclusive public persona and his commitment to creating safe, accepting spaces for his fans embody the Wood Dog\'s protective generosity. His willingness to challenge conventional masculinity with gentle confidence reflects the sign\'s combination of moral courage and compassionate flexibility.',
      },
      {
        name: 'Brigitte Bardot',
        profession: 'Actress/Animal Rights Activist',
        birthYear: 1934,
        description:
          'Brigitte Bardot\'s transformation from international film icon to passionate animal rights crusader perfectly embodies the Wood Dog\'s protective instinct and moral conviction. Her decades-long dedication to animal welfare reflects the sign\'s unwavering loyalty to those who cannot protect themselves.',
      },
      {
        name: 'Sophia Loren',
        profession: 'Actress',
        birthYear: 1934,
        description:
          'Sophia Loren\'s enduring warmth, dignified strength, and fierce devotion to her family embody the Wood Dog\'s combination of protective loyalty and genuine grace. Her ability to maintain both professional excellence and deep personal values over a career spanning decades reflects the sign\'s remarkable consistency and integrity.',
      },
      {
        name: 'Dakota Fanning',
        profession: 'Actress',
        birthYear: 1994,
        description:
          'Dakota Fanning\'s thoughtful, quietly determined approach to her career — choosing meaningful roles over commercial spectacle — reflects the Wood Dog\'s principled, values-driven nature. Her ability to navigate Hollywood from childhood to adulthood with grace and integrity demonstrates the sign\'s steady moral compass.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dog is the eleventh animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Xu (戌) and the evening hours of 7pm to 9pm — the time when the Dog takes up its watch over the household, guarding against the dangers of the night. In Chinese mythology, the Dog is a symbol of loyalty, protection, and faithful service. The idiom "loyal dog guards the gate" (忠犬看门) captures the essential nature of this sign: selfless devotion to those under its care.

When combined with the Wood element, the Dog takes on the qualities of the guardian tree — the ancient, sheltering presence that provides protection, sustenance, and shade for all who seek refuge beneath its branches. In classical Chinese thought, the Wood Dog represents the Confucian virtue of ren (仁) expressed through protective action: not abstract benevolence but the concrete, daily practice of caring for others and upholding justice in the community.`,

    symbolism: `The Wood Dog symbolizes loyal protection, principled compassion, and the strength that comes from serving something larger than oneself. In traditional Chinese symbolism, the Dog represents faithfulness, honesty, and the courage to guard what is precious against any threat. Wood adds the dimensions of growth, nurturing, and flexible compassion, creating a symbol of protection that is both strong and gentle.

The Wood Dog reminds us that true loyalty is not passive obedience but active, principled devotion — the willingness to stand guard, to speak truth, and to fight for justice even when it is costly. In a world that often rewards self-interest, the Wood Dog stands as a symbol of the enduring power and beauty of selfless service.`,

    modernInterpretation: `In contemporary culture, the Wood Dog archetype resonates with the growing appreciation for authentic, values-driven leadership and the importance of community service and social justice. The Wood Dog represents the volunteer, the advocate, the first responder — the people who show up when it matters, who put others' needs before their own comfort, and who do the unglamorous work of holding communities together.

The 1994 Wood Dog generation has come of age in an era of increasing social consciousness and activism. Many of its members embody the sign's integration of loyal devotion and progressive values — using their platforms and talents to advocate for inclusion, mental health awareness, and social change. For future Wood Dog generations, this archetype suggests a continued evolution toward leadership that combines fierce protective loyalty with genuine compassion for all.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
