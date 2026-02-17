// ============================================
// WATER RABBIT (壬卯) — The Flowing Peacemaker
// ============================================
// The Water Rabbit combines the Rabbit's refined diplomacy
// and gentle wisdom with Water's emotional depth and adaptive
// intelligence — producing a natural healer who brings peace
// to turbulent waters through quiet, persistent grace.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-rabbit',
  profile: getProfileBySlug('water-rabbit')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Rabbit is the most emotionally sensitive and artistically gifted of all Rabbit variants. Where the Rabbit is already renowned for its grace, diplomacy, and aesthetic sensibility, the Water element deepens these qualities into a profound capacity for empathy, creative expression, and intuitive understanding. The Water Rabbit moves through the world with a gentle fluidity that disarms even the most guarded souls, creating spaces of safety and beauty wherever they go.

What sets the Water Rabbit apart is their extraordinary ability to absorb and reflect the emotional states of those around them. They are natural empaths who sense the mood of a room before a word is spoken, adjusting their energy and approach with the subtle precision of water finding its level. This gift makes them invaluable mediators, counselors, and creative collaborators — people instinctively trust the Water Rabbit because they feel genuinely understood in their presence. The Water Rabbit does not judge; they listen, absorb, and gently guide toward resolution.

The shadow of this extraordinary sensitivity is a vulnerability to emotional flooding. The Water Rabbit can become overwhelmed by the intensity of feelings — both their own and those they absorb from others — leading to withdrawal, indecision, and a persistent anxiety about making the wrong choice. Their desire to please everyone and harm no one can paralyze them in situations that require decisive action. The Water Rabbit's lifelong journey is learning to maintain their beautiful sensitivity while developing the emotional boundaries and inner strength necessary to navigate a world that is not always as gentle as they are.`,

    coreTraits: [
      'Empathetic',
      'Graceful',
      'Creative',
      'Diplomatic',
      'Sensitive',
      'Perceptive',
    ],

    strengths: [
      {
        trait: 'Natural Peacemaker',
        description:
          'The Water Rabbit possesses an almost supernatural ability to defuse tension and create harmony. They can sense the underlying needs behind opposing positions and find solutions that honor everyone\'s dignity. In negotiations, family disputes, and workplace conflicts, the Water Rabbit\'s gentle persistence and genuine empathy transform adversaries into collaborators.',
      },
      {
        trait: 'Artistic Sensitivity',
        description:
          'Water amplifies the Rabbit\'s already refined aesthetic sense into genuine artistic brilliance. Water Rabbits perceive beauty in subtleties that others miss — a particular quality of light, an unexpected color combination, the emotional resonance of a melody. This sensitivity, when channeled into creative work, produces art that touches people at a deep, often wordless level.',
      },
      {
        trait: 'Intuitive Wisdom',
        description:
          'The Water Rabbit possesses a quiet wisdom that emerges not from study but from deep observation and empathetic understanding. They know things about people and situations that they cannot logically explain — and their instincts are remarkably accurate. This intuitive intelligence makes them trusted advisors, even among more analytically gifted colleagues.',
      },
      {
        trait: 'Adaptive Grace',
        description:
          'Like water flowing around stones, the Water Rabbit navigates obstacles with remarkable elegance. They find paths of least resistance not through avoidance but through creative flexibility — approaching problems from unexpected angles, building unexpected alliances, and achieving their goals through patience and gentle persistence rather than force.',
      },
    ],

    challenges: [
      {
        trait: 'Conflict Avoidance',
        description:
          'The Water Rabbit\'s desire for harmony can become a crippling avoidance of necessary confrontation. They may sacrifice their own needs, tolerate unacceptable behavior, and allow problems to fester rather than risk the discomfort of direct conflict. This avoidance often makes situations worse over time, creating the very turmoil the Rabbit was trying to prevent.',
      },
      {
        trait: 'Emotional Absorption',
        description:
          'The Water Rabbit absorbs others\' emotions so readily that they can lose track of their own feelings entirely. They may take on a friend\'s depression, a colleague\'s anxiety, or a partner\'s anger without realizing that these feelings are not their own. Over time, this emotional porousness can lead to chronic fatigue, confusion about personal identity, and difficulty maintaining emotional stability.',
      },
      {
        trait: 'Indecisiveness',
        description:
          'The Water Rabbit\'s ability to see every perspective makes decision-making genuinely painful. They understand every option\'s merits and every choice\'s potential to disappoint someone, leading to paralysis that can stall careers, relationships, and personal growth. The Water Rabbit may defer decisions indefinitely, waiting for a perfect option that never arrives.',
      },
      {
        trait: 'People-Pleasing',
        description:
          'The Water Rabbit\'s deep need for approval and fear of rejection can drive them to chronic people-pleasing. They say yes when they mean no, agree when they disagree, and shape-shift to match others\' expectations until they lose touch with their authentic self. This pattern is exhausting, ultimately unsustainable, and corrosive to genuine self-esteem.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rabbit is associated with Wood energy — growth, flexibility, and the gentle persistence of spring. When Water is layered onto this Wood-natured animal, the combination follows the productive cycle: Water nourishes Wood, feeding the Rabbit's natural gifts with emotional depth, intuitive perception, and creative flow. This is a deeply harmonious element-animal pairing that amplifies the Rabbit's finest qualities.

The Water-Wood synergy gives the Water Rabbit extraordinary creative and empathetic resources. Water's depth sustains the Rabbit's gentle strength, providing the emotional resilience necessary to maintain their peacemaking role over time. However, excess Water can overwhelm the Rabbit's delicate Wood nature, leading to emotional waterlogging — a state where feelings become so saturated that clarity, boundaries, and decisive action become impossible. The Water Rabbit benefits from Fire and Earth element influences that provide warmth, structure, and the grounding necessary to channel their considerable sensitivity into constructive action rather than passive absorption.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Rabbit seeks partners who provide emotional warmth, stability, and the freedom to express their sensitive nature without judgment. They are drawn to gentle, supportive personalities who value harmony as deeply as they do while also possessing the decisiveness the Rabbit sometimes lacks. The Rabbit belongs to the Fourth Trine alongside the Goat and the Pig — artistic, compassionate signs that share the Rabbit's love of beauty, comfort, and emotional connection.

The Rabbit sits in opposition to the Rooster on the zodiac wheel, creating tension between the Rabbit's diplomatic softness and the Rooster's blunt perfectionism. For the Water Rabbit, this dynamic is particularly challenging because their emotional sensitivity makes the Rooster's criticism feel personally wounding rather than constructively intended.`,

    bestMatches: [
      {
        slug: 'wood-goat',
        name: 'Wood Goat',
        score: 94,
        summary:
          'A beautifully harmonious partnership of shared values and complementary gifts. The Wood Goat\'s artistic sensibility and gentle nature create a safe haven for the Water Rabbit\'s sensitive soul. Both signs value beauty, comfort, and emotional connection, creating a relationship that feels like a shared sanctuary. Wood and Water work together in the productive cycle, creating natural mutual nourishment.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 90,
        summary:
          'A deeply nurturing bond between two of the zodiac\'s most compassionate signs. The Water Pig\'s generous heart and unconditional acceptance provide exactly the emotional safety the Water Rabbit craves. Together they create a warm, loving environment characterized by mutual support, shared creativity, and a genuine delight in each other\'s company that deepens with time.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 86,
        summary:
          'A grounding, protective partnership that brings out the best in the Water Rabbit. The Earth Dog\'s loyal, principled nature provides the stability and security the Rabbit needs, while the Rabbit\'s gentle warmth and emotional intelligence soften the Dog\'s sometimes anxious vigilance. Earth contains Water in a supportive way, creating healthy emotional boundaries.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 28,
        summary:
          'The Rabbit and Rooster sit at opposite ends of the zodiac, and the element dynamic intensifies this tension. The Metal Rooster\'s sharp criticism and perfectionism wound the Water Rabbit\'s sensitive heart deeply. The Rooster finds the Rabbit evasive and overly emotional; the Rabbit experiences the Rooster as cruel and unfeeling. Bridging this gap requires transformative effort from both sides.',
      },
      {
        slug: 'fire-rat',
        name: 'Fire Rat',
        score: 38,
        summary:
          'The Fire Rat\'s ambitious, fast-moving energy overwhelms the Water Rabbit\'s gentle pace. The Rat\'s directness feels abrasive to the Rabbit, while the Rabbit\'s indirectness frustrates the Rat\'s desire for clear, efficient communication. Fire and Water clash elementally, and the temperamental differences are significant.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 40,
        summary:
          'The Fire Dragon\'s grandiose confidence and explosive energy create a dynamic that the Water Rabbit finds overwhelming and intimidating. The Dragon demands boldness and visibility, while the Rabbit prefers subtlety and privacy. The Dragon may dismiss the Rabbit as timid; the Rabbit perceives the Dragon as insensitive and overbearing.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Wood-natured animal, the Water Rabbit benefits from the productive cycle's nourishing flow. Internally, this creates a naturally harmonious personality where emotional depth (Water) feeds creative expression and gentle strength (Wood). Externally, Metal signs support the Water Rabbit by generating Water energy, providing structure and clarity that helps channel the Rabbit's diffuse sensitivity. Wood signs create vibrant, growth-oriented connections where mutual nourishment feels effortless. Earth signs provide essential grounding, though the controlling dynamic can feel constrictive to the freedom-loving Rabbit. Fire signs present the most challenging dynamic — while some warmth benefits the Water Rabbit's cool nature, too much Fire overwhelms their delicate sensitivity and evaporates the emotional depth they depend on.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Water Rabbits excel in careers that value emotional intelligence, aesthetic sensibility, and the ability to create harmony in complex human systems. They are drawn to professions where their sensitivity is an asset rather than a liability — roles that require understanding people, creating beauty, or facilitating communication across differences. The corporate world's aggressive competitiveness can drain the Water Rabbit, but they thrive in organizational cultures that value collaboration, creativity, and genuine care for stakeholders.

The ideal Water Rabbit career provides a beautiful, harmonious working environment and meaningful interpersonal connection. They excel as therapists, mediators, designers, writers, diplomats, and cultural curators. Their ability to sense what people need and create environments that feel safe and beautiful is a rare professional gift that, once recognized, makes them indispensable to any team or organization.

Financially, the Water Rabbit tends toward security-seeking behavior. They are uncomfortable with risk and prefer stable, predictable income over high-variance entrepreneurial ventures. Their aesthetic tastes can run expensive — the Water Rabbit is drawn to quality and beauty in all things — creating a tension between their desire for financial safety and their attraction to beautiful objects, experiences, and environments.`,

    idealCareers: [
      'Art Therapist',
      'Interior Designer',
      'Diplomat',
      'Marriage Counselor',
      'Museum Curator',
      'Children\'s Author',
      'Mediator',
      'Landscape Architect',
    ],

    financialStyle:
      'The Water Rabbit approaches finances with a cautious, security-oriented mindset that prioritizes stability over growth. They are natural savers who feel anxious when their financial cushion falls below a certain threshold, and they rarely make impulsive purchases — with the notable exception of beautiful objects and experiences that speak to their refined aesthetic sense. The Water Rabbit\'s financial growth edge lies in developing the confidence to invest in themselves — their education, their creative projects, their well-being — rather than hoarding resources out of fear. Money that flows into personal development pays compound returns for the Water Rabbit.',

    tips: [
      'Recognize your sensitivity as professional currency. In a world that increasingly values emotional intelligence, empathy, and the ability to create psychologically safe environments, your natural gifts are enormously valuable. Position yourself in roles and organizations that explicitly value these qualities.',
      'Develop a professional persona that protects your inner sensitivity. You do not need to be someone else at work, but you do need boundaries that prevent your empathetic absorption from depleting you. Practice compassionate detachment — caring genuinely while maintaining enough distance to remain effective.',
      'Build creative practices into your professional life. Whether through design, writing, therapeutic arts, or simply curating beautiful work environments, your creativity is a professional asset that differentiates you from more analytically focused colleagues. Do not dismiss it as frivolous — it is central to your value.',
      'Partner with decisive collaborators. Your strength is vision, empathy, and creative problem-solving. Pair yourself with action-oriented colleagues who can translate your insights into concrete steps, freeing you from the decision fatigue that drains your energy.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Rabbit in love is tender, devoted, and profoundly romantic. They seek a partner who feels like home — someone whose presence creates an atmosphere of safety, warmth, and mutual understanding so complete that the outside world's harshness fades to a distant murmur. When the Water Rabbit finds this person, they bloom with a quiet radiance that transforms both the relationship and the Rabbit themselves.

The Water Rabbit's approach to love is gentle but persistent. They do not overwhelm with grand gestures or aggressive pursuit; instead, they create conditions of comfort and beauty that draw their desired partner naturally toward them. A perfectly prepared meal, a thoughtful gift that reveals deep attention, a conversation of such genuine presence that the other person feels truly heard for perhaps the first time — these are the Water Rabbit's tools of courtship, and they are devastatingly effective.

The Water Rabbit's romantic challenge is maintaining their identity within a relationship. Their empathetic nature and desire to please can cause them to merge so completely with their partner's needs, preferences, and personality that they lose track of their own. The Water Rabbit who learns to maintain their individuality while still giving generously discovers a love that is sustaining rather than consuming.`,

    loveStyle:
      'The Water Rabbit loves with gentle, enveloping warmth that makes their partner feel cherished, safe, and deeply known. They express affection through creating beauty — a lovingly arranged home, a carefully chosen soundtrack for the evening, a gift that reveals months of quiet observation. Their ideal relationship is a private sanctuary where both partners can be fully themselves, free from performance or pretense. They need a partner who values emotional intimacy over external excitement and who reciprocates the Water Rabbit\'s devotion with consistent, reassuring warmth.',

    idealPartnerTraits: [
      'Emotionally Warm',
      'Reliable',
      'Appreciative of Beauty',
      'Gentle but Strong',
      'Communicative',
    ],

    tips: [
      'Maintain your own interests and friendships. Your tendency to merge with your partner feels like devotion but can become codependency. Preserve the parts of yourself that existed before the relationship — your partner fell in love with a whole person, not a mirror.',
      'Practice saying no with love. Setting boundaries is not rejection — it is the foundation of sustainable intimacy. When you agree to things you do not want, you build resentment that eventually poisons the relationship you are trying to protect.',
      'Express disappointment when you feel it. Your instinct to swallow hurt and maintain surface harmony creates invisible emotional debt that accumulates silently. Small, honest expressions of disappointment prevent the buildup that leads to eventual rupture.',
      'Choose a partner who can be strong when you cannot. Your sensitivity is a gift, but it means you will have moments of fragility that require a partner capable of holding space without fixing, judging, or dismissing. Test this capacity early — it is non-negotiable for your well-being.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Rabbit's constitution combines the Rabbit's refined, somewhat delicate physicality with Water's influence on the body's fluid and emotional systems. In Traditional Chinese Medicine, the Rabbit's Wood nature governs the Liver and its associated systems — including the smooth flow of qi, emotional processing, and the tendons and eyes. Water governs the Kidneys, bones, and the body's foundational vitality. This combination creates a person of considerable sensory refinement who must carefully protect their somewhat delicate constitution.

The characteristic Water Rabbit health pattern involves sensitivity — to food, to environmental stimuli, to emotional stress, and to changes in routine. They may experience allergies, digestive sensitivity, and skin reactions more readily than more robust signs. Their nervous system is finely tuned, which gives them their remarkable perceptiveness but also makes them more vulnerable to stress-related conditions: anxiety, insomnia, tension headaches, and irritable digestion.

Prevention for the Water Rabbit centers on creating and maintaining a harmonious environment. Regular routines, a beautiful and calm living space, nourishing food, and adequate rest are not luxuries for this sign but health necessities. The Water Rabbit who prioritizes self-care and environmental harmony discovers that their seemingly fragile constitution is actually quite resilient when properly supported.`,

    bodyAreas: ['Liver', 'Nervous System', 'Skin', 'Kidneys'],

    exercises: [
      'Gentle yoga and stretching',
      'Walking in beautiful natural settings',
      'Tai chi for nervous system regulation',
      'Dance for creative expression and movement',
    ],

    dietTips: [
      'Eat regular, gentle meals that support both liver and digestive function. The Water Rabbit benefits from lightly cooked, easily digestible foods: steamed vegetables, congee, mild soups, and well-prepared grains. Avoid heavy, greasy, or highly processed foods that burden a sensitive digestive system.',
      'Include liver-supporting foods daily: leafy greens, artichokes, beets, lemon water, and gentle herbs like milk thistle and peppermint. The Rabbit\'s Wood constitution makes liver health central to overall well-being, and these foods support the smooth flow of energy that prevents stagnation.',
      'Support the nervous system with magnesium-rich foods: dark chocolate, almonds, avocados, spinach, and pumpkin seeds. The Water Rabbit\'s sensitive nervous system benefits enormously from adequate magnesium, which supports both relaxation and healthy sleep.',
      'Minimize caffeine and stimulants. The Water Rabbit\'s nervous system is already highly reactive, and stimulants amplify anxiety, disrupt sleep, and exacerbate the emotional volatility that this sign is prone to. Replace coffee with calming teas like chamomile, passionflower, and lavender.',
    ],

    mentalHealth:
      'The Water Rabbit\'s most significant mental health vulnerability is anxiety rooted in their extraordinary sensitivity to their environment and relationships. They absorb stress from their surroundings, worry about the well-being of those they love, and ruminate on potential negative outcomes with an imagination that makes these scenarios feel viscerally real. Establishing a regular mindfulness practice is essential — not the aggressive, discipline-heavy kind, but gentle practices like guided meditation, nature walks, and restorative yoga that honor the Rabbit\'s need for softness while building genuine inner stability. Creative expression is also powerful medicine: journaling, painting, music, or any artistic practice that externalizes internal feelings provides relief and perspective. The Water Rabbit benefits enormously from therapeutic relationships — having a skilled, empathetic therapist who provides a safe space for processing absorbed emotions prevents the accumulation that leads to overwhelm. Above all, the Water Rabbit must learn that self-care is not selfish — it is the prerequisite for the compassionate service they are here to provide.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Blue', 'Soft Green', 'Lavender', 'Silver'],
    direction: 'North',
    gemstones: ['Jade', 'Moonstone', 'Pearl'],
    flowers: ['Lily of the Valley', 'Lotus', 'Sweet Pea'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER RABBITS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Michael Jordan',
        profession: 'Basketball Legend',
        birthYear: 1963,
        description:
          'Michael Jordan\'s combination of fluid grace, competitive intensity, and meticulous preparation embodies the Water Rabbit\'s potential for excellence through refined skill and strategic intelligence. His famous ability to perform under pressure reflects the Water Rabbit\'s capacity to channel sensitivity into peak performance.',
      },
      {
        name: 'Johnny Depp',
        profession: 'Actor',
        birthYear: 1963,
        description:
          'Johnny Depp\'s extraordinary range and commitment to unconventional, deeply felt characters showcase the Water Rabbit\'s artistic sensitivity and creative depth. His ability to disappear into roles and create performances of remarkable emotional nuance reflects the sign\'s empathetic perception and transformative artistry.',
      },
      {
        name: 'Brad Pitt',
        profession: 'Actor/Producer',
        birthYear: 1963,
        description:
          'Brad Pitt\'s evolution from Hollywood heartthrob to serious actor-producer demonstrates the Water Rabbit\'s capacity for growth and reinvention. His increasingly nuanced performances and behind-the-scenes production work reflect the sign\'s combination of aesthetic sensitivity and quiet determination.',
      },
      {
        name: 'Whitney Houston',
        profession: 'Singer',
        birthYear: 1963,
        description:
          'Whitney Houston\'s voice — widely regarded as one of the most beautiful in recorded music — exemplifies the Water Rabbit\'s extraordinary aesthetic sensitivity and emotional expressiveness. Her ability to convey profound emotion through vocal performance represents the sign\'s artistic gifts at their most transcendent.',
      },
      {
        name: 'Vivien Leigh',
        profession: 'Actress',
        birthYear: 1913,
        description:
          'Vivien Leigh\'s luminous, emotionally devastating performances in films like Gone with the Wind and A Streetcar Named Desire embody the Water Rabbit\'s combination of refined beauty and profound emotional depth. Her intensity and sensitivity, both on screen and off, reflect the sign\'s characteristic gifts and vulnerabilities.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rabbit holds the fourth position in the Chinese zodiac and occupies a uniquely gentle place in East Asian mythology. In the Great Race legend, the Rabbit crossed the river by leaping across stepping stones and floating logs with characteristic agility and resourcefulness — finishing fourth through cleverness and grace rather than brute strength. This origin story encodes the Rabbit's essential nature: achieving goals through intelligence, timing, and the ability to find elegant solutions to seemingly impossible problems.

In Chinese mythology, the Rabbit is most famously associated with the Moon. The "Jade Rabbit" (玉兔) lives on the Moon, where it eternally pounds the elixir of immortality with a mortar and pestle. This lunar association connects the Rabbit — and especially the Water Rabbit — to themes of intuition, cycles, feminine wisdom, and the hidden knowledge that reveals itself only in reflected light. The Water Rabbit deepens this lunar connection, as Water is itself associated with the Moon, emotions, and the yin principle.

When the Water element pairs with the Rabbit, the mythology emphasizes the power of gentle persistence and emotional wisdom. The Water Rabbit represents the understanding that true transformation happens not through force but through the patient, nurturing application of compassion and beauty. In Buddhist-influenced Chinese folklore, the Rabbit is associated with self-sacrifice and compassion — qualities amplified to their fullest expression in the Water Rabbit.`,

    symbolism: `The Water Rabbit symbolizes the transformative power of gentleness, the strength that lies in sensitivity, and the wisdom that flows from deep empathetic connection. In traditional symbolism, it represents the principle that the softest approaches often achieve what force cannot — that diplomacy outlasts aggression, that beauty disarms hostility, and that genuine understanding creates bonds stronger than any chain.

Water flowing through the Rabbit's moonlit domain carries profound symbolic meaning. It represents the emotional currents that connect all living things — the unseen web of feeling and intuition that the Water Rabbit navigates with such natural grace. In Wu Xing philosophy, Water nourishing Wood (the Rabbit's element) symbolizes the way emotional depth feeds creative growth — the deep inner life that makes authentic artistic expression possible.

The Water Rabbit also symbolizes the healing power of presence. In Chinese medicine and philosophy, the simple act of being fully present with another person — listening without agenda, seeing without judgment — is considered profoundly therapeutic. The Water Rabbit embodies this healing presence, reminding us that sometimes the most powerful thing we can do is simply be with someone in their experience.`,

    modernInterpretation: `In contemporary culture, the Water Rabbit archetype resonates with growing recognition of emotional intelligence, mindfulness, and gentle leadership as powerful forces for positive change. In a world that often equates strength with aggression and success with dominance, the Water Rabbit offers a compelling alternative: the leader who creates lasting change through empathy, the artist who transforms pain into beauty, the healer who helps others simply by being fully present.

The Water Rabbit's gifts are increasingly valued in professional contexts. The rise of design thinking, user experience research, therapeutic approaches in education, and trauma-informed practices across industries all create space for the Water Rabbit's natural talents. Organizations are discovering that the ability to understand people deeply, create psychologically safe environments, and communicate with genuine sensitivity produces better outcomes than traditional command-and-control approaches.

For those born in Water Rabbit years, the contemporary world offers both validation and challenge. Their sensitivity is more appreciated than ever, but the pace, noise, and conflict of modern life can be genuinely overwhelming. The most thriving Water Rabbits find environments and communities that honor their gentle nature while supporting their growth — spaces where they can contribute their remarkable gifts without being consumed by the demands of a world that moves faster and speaks louder than their nature prefers.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
