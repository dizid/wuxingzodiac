// ============================================
// WATER HORSE (壬午) — The Adaptive Nomad
// ============================================
// The Water Horse combines the Horse's restless energy and
// love of freedom with Water's adaptability, emotional depth,
// and intuitive navigation — producing a personality that
// flows through life with remarkable grace and range.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-horse',
  profile: getProfileBySlug('water-horse')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Horse is the most adaptable and emotionally nuanced of all Horse variants. Where the Horse is already defined by its love of freedom, energetic restlessness, and magnetic social presence, the Water element adds a dimension of emotional intelligence, intuitive adaptability, and strategic flexibility that transforms the Horse's characteristic wildness into something more fluid and sustainable. The Water Horse does not merely run — they navigate, reading the terrain with intuitive precision and adjusting their course with a grace that makes their journey look effortless.

What distinguishes the Water Horse from other Horse variants is the element's softening influence on the Horse's sometimes abrasive directness. Water rounds the sharp edges, replacing blunt confrontation with diplomatic charm and replacing rigid independence with flexible collaboration. The Water Horse can work within systems that would suffocate other Horses because they flow around obstacles rather than charging through them. They maintain their essential freedom not by fighting constraints but by finding creative paths that honor both their need for autonomy and the realities of their environment.

Beneath the Water Horse's cheerful, adaptable exterior lies an emotional depth that surprises those who expect nothing more than surface charm. They feel things keenly — the joy of connection, the sting of rejection, the exhilaration of new possibilities — but process these feelings with a fluidity that prevents emotional stagnation. The Water Horse's challenge is not feeling too little but moving too quickly through feelings, skimming across emotional experiences rather than diving deep enough to be genuinely transformed by them.`,

    coreTraits: [
      'Adaptable',
      'Charming',
      'Intuitive',
      'Restless',
      'Communicative',
      'Versatile',
    ],

    strengths: [
      {
        trait: 'Social Intelligence',
        description:
          'The Water Horse navigates social environments with extraordinary skill, reading rooms, adapting their communication style, and building rapport across wildly different groups. They are equally comfortable at a boardroom table and a beach bonfire, adjusting their energy and approach with instinctive precision. This social fluidity makes them invaluable networkers, mediators, and communicators.',
      },
      {
        trait: 'Adaptive Resilience',
        description:
          'Like water flowing around rocks, the Water Horse handles disruption with remarkable composure. Job losses, relationship changes, relocations, and life upheavals that devastate more rigid signs become adventures for the Water Horse. They bounce back quickly and often emerge from difficulty in a better position than before, having found opportunities in chaos that others missed.',
      },
      {
        trait: 'Intuitive Communication',
        description:
          'The Water Horse possesses a natural gift for communication that goes beyond mere eloquence. They sense what their audience needs to hear, how they need to hear it, and when the moment is right. This intuitive communication makes them exceptional storytellers, teachers, salespeople, and public speakers — anyone who has heard a Water Horse speak about something they care about does not easily forget the experience.',
      },
      {
        trait: 'Cultural Fluidity',
        description:
          'The Water Horse moves between cultures, communities, and social contexts with rare ease. They absorb new languages, customs, and ways of thinking naturally, making them exceptional travelers, expatriates, and cross-cultural bridge builders. This fluidity is not superficial tourism but genuine cultural empathy — they do not just visit other worlds, they inhabit them.',
      },
    ],

    challenges: [
      {
        trait: 'Commitment Anxiety',
        description:
          'The Water Horse\'s love of freedom and adaptability can become a crippling fear of commitment. They may avoid long-term relationships, career decisions, and any choice that feels like it closes other doors. This commitment anxiety can keep them in a perpetual state of potential — always about to become something magnificent but never quite arriving because arriving means stopping.',
      },
      {
        trait: 'Emotional Shallowness',
        description:
          'While the Water element adds emotional depth to the Horse\'s nature, the Horse\'s restlessness can prevent genuine emotional engagement. The Water Horse may skim across feelings rather than diving deep, processing pain through distraction rather than confrontation. This emotional shallowness can leave them surrounded by acquaintances but lacking truly intimate relationships.',
      },
      {
        trait: 'Inconsistency',
        description:
          'The Water Horse\'s adaptability, taken to extremes, becomes inconsistency. They may present different versions of themselves to different audiences, shift positions based on their current company, and struggle to maintain a stable identity across contexts. Partners and close friends may wonder which version of the Water Horse is the real one.',
      },
      {
        trait: 'Scattered Energy',
        description:
          'The Water Horse\'s many interests and social connections can diffuse their considerable energy across too many fronts. They start enthusiastically, contribute meaningfully for a while, then drift toward something new before completing what they began. This scattering prevents the depth of mastery and the sustained achievement their talents genuinely merit.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Horse is inherently associated with Fire energy — it is the animal of high noon and midsummer, the peak of yang expression. When Water is layered onto this Fire-natured animal, the combination follows the controlling cycle: Water controls Fire, tempering the Horse's intense, sometimes excessive energy with emotional depth and adaptive patience. This creates a Horse variant that is cooler, more strategic, and significantly more sustainable than Fire-dominant Horses.

The Fire-Water dynamic within the Water Horse creates a personality of fascinating internal complexity. The Horse's natural fire provides the energy, enthusiasm, and warmth that make them so magnetically appealing, while Water's influence prevents that fire from burning out of control. The result is a person who can sustain their energy over long periods because they instinctively regulate their output — burning bright when the moment demands it and cooling down when rest is needed. However, this internal tension can also manifest as emotional ambivalence — the Water Horse may feel pulled between the Horse's desire for passionate action and Water's inclination toward reflection and caution, creating moments of uncharacteristic indecision.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Horse's compatibility is shaped by their need for freedom within connection. They seek partners who are secure enough in themselves to allow the Horse room to roam while providing the emotional depth and consistency the Water element craves. The Horse belongs to the Third Trine alongside the Tiger and the Dog — courageous, action-oriented signs that share the Horse's love of adventure and justice.

The Horse sits in direct opposition to the Rat on the zodiac wheel, and this tension is somewhat moderated for the Water Horse — Water being the Rat's native element means there is an elemental affinity that can bridge the animal opposition, though significant temperamental differences remain.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 91,
        summary:
          'A thrilling partnership of shared adventure and mutual respect for independence. The Wood Tiger\'s courageous spirit and compassionate nature perfectly complement the Water Horse\'s adaptable charm. Both signs value freedom and authenticity, creating a relationship that feels like a shared expedition rather than a domestic arrangement. Water nourishes Wood, meaning the Horse naturally supports the Tiger\'s growth.',
      },
      {
        slug: 'earth-goat',
        name: 'Earth Goat',
        score: 87,
        summary:
          'A surprisingly harmonious pairing of complementary temperaments. The Earth Goat\'s gentle creativity and nurturing nature provide the emotional home base the Water Horse needs without attempting to cage them. The Horse brings excitement and social energy to the Goat\'s life, while the Goat offers the consistent warmth and beauty the Horse finds irresistibly comforting.',
      },
      {
        slug: 'metal-dog',
        name: 'Metal Dog',
        score: 84,
        summary:
          'A partnership built on shared values and complementary strengths. The Metal Dog\'s principled loyalty and structured approach provide the stability the Water Horse secretly craves, while the Horse\'s adaptable energy and social grace keep the Dog\'s world from becoming too rigid. Metal generates Water, naturally supporting the Horse\'s emotional depth.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 35,
        summary:
          'Despite sharing the Water element, the Horse and Rat sit at opposite ends of the zodiac. The Water Rat\'s calculating caution clashes with the Water Horse\'s spontaneous adaptability. The Rat finds the Horse flighty and unreliable; the Horse perceives the Rat as manipulative and overly controlling. The shared Water element creates emotional understanding but cannot fully bridge the fundamental temperamental divide.',
      },
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 38,
        summary:
          'The Ox\'s methodical stubbornness and need for routine collide with the Water Horse\'s restless adaptability. The Ox experiences the Horse as irresponsible and unreliable, while the Horse finds the Ox suffocatingly predictable. Earth contains Water, which in this context feels more like imprisonment than support to the freedom-loving Horse.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 40,
        summary:
          'The Metal Rooster\'s exacting standards and blunt criticism wound the Water Horse\'s sensitive ego. The Rooster demands precision and consistency — qualities the adaptable Horse views as rigidity. The Horse\'s casual approach to commitments triggers the Rooster\'s deep need for reliability, creating a cycle of criticism and withdrawal.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Fire-natured animal, the Water Horse contains an internal tension between spontaneous action (Fire) and reflective adaptation (Water). Metal signs are natural supporters — Metal generates Water, reinforcing the Horse's emotional depth and strategic patience. Wood signs create dynamic, growth-oriented partnerships where the Horse's Water nourishes the partner's development. Earth signs provide grounding that the restless Horse needs but may resist, as Earth dams Water in the controlling cycle. Fire signs activate the Horse's hidden inner fire, creating exciting but potentially volatile partnerships where the Water Horse's carefully maintained balance is disrupted. Water signs create deeply intuitive connections, though double-Water pairings risk excessive emotionality and insufficient grounding.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Horse excels in careers that reward adaptability, communication skills, and the ability to navigate diverse environments with ease. They are natural connectors — people who bridge gaps between worlds, translate between communities, and build relationships across boundaries that more fixed personalities cannot cross. Their combination of social intelligence and intuitive adaptability makes them invaluable in any role that requires understanding and engaging diverse audiences.

The ideal Water Horse career provides variety, social interaction, and the freedom to move. They wilt in static, isolated roles and thrive in environments that change regularly. Travel writing, international business, diplomacy, public relations, teaching, event management, and entertainment all suit the Water Horse's need for stimulation and connection.

The Water Horse's relationship with money reflects their broader approach to life — fluid, optimistic, and sometimes insufficiently structured. They can generate income through their considerable charm and networking skills but may struggle to accumulate wealth due to a tendency toward generous spending, impulsive purchases, and insufficient attention to long-term financial planning.`,

    idealCareers: [
      'Travel Writer',
      'International Sales Director',
      'Public Relations Director',
      'Foreign Correspondent',
      'Event Director',
      'Language Teacher',
      'Tour Operator',
      'Cultural Consultant',
    ],

    financialStyle:
      'The Water Horse approaches money with the same fluid optimism they bring to everything else — sometimes to their detriment. They are excellent at generating income through networking, communication, and seizing timely opportunities, but they tend to spend as freely as they earn. The Water Horse\'s financial growth lies in building automated systems that capture wealth before it flows through their fingers: automatic savings transfers, retirement contributions, and investment allocations that happen before they can redirect funds toward the latest exciting opportunity or generous impulse. The Water Horse who establishes financial structure while maintaining flexibility discovers that security and freedom are not mutually exclusive.',

    tips: [
      'Channel your adaptability into a portfolio career. Rather than forcing yourself into a single role that will eventually feel confining, build a professional life that combines several complementary activities. Consulting, freelancing, and project-based work align with your need for variety while allowing you to build expertise across domains.',
      'Develop your communication skills into a formal asset. Your natural gift for connecting with diverse audiences is enormously valuable — consider training in public speaking, media relations, or cross-cultural communication that amplifies your instinctive talent with professional methodology.',
      'Build a professional anchor. Despite your love of variety, identify one domain or skill set that serves as your professional home base — the thing you are known for, the expertise people seek you out for. This anchor prevents your versatility from diffusing into unfocused drift.',
      'Cultivate follow-through discipline. Your challenge is not starting things but finishing them. Establish accountability partnerships, set clear milestones, and celebrate completion as energetically as you celebrate new beginnings. The Water Horse who finishes what they start achieves at a level that astonishes even themselves.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Horse in love is charming, attentive, and genuinely romantic — with a restless undertone that can either keep the relationship excitingly alive or gradually erode it through inconsistency. When smitten, the Water Horse is an irresistible courtship force: funny, adventurous, emotionally present, and capable of making their chosen person feel like the most fascinating human on the planet. They bring the Horse's natural charisma and passion together with Water's emotional sensitivity, creating romantic experiences that are both thrilling and unexpectedly deep.

The Water Horse's approach to love combines spontaneity with genuine emotional engagement. Unlike more purely Fire-driven Horses, the Water Horse actually wants emotional intimacy — they crave deep conversations, shared vulnerabilities, and the feeling of being truly known. The paradox is that this desire for depth coexists with a restlessness that pulls them toward new experiences, new connections, and new horizons. Managing this tension is the central drama of the Water Horse's romantic life.

The Water Horse's romantic growth depends on choosing a partner who provides enough stimulation to satisfy their restless nature while offering the emotional depth and consistency their Water element craves. The right partner for a Water Horse is not someone who cages them but someone who is interesting enough that coming home always feels like the most exciting option available.`,

    loveStyle:
      'The Water Horse loves with warmth, humor, and a spirit of adventure that keeps the relationship perpetually interesting. They express affection through shared experiences — spontaneous road trips, discovering new restaurants, attending events, and exploring each other\'s worlds. Their emotional expressiveness, enhanced by the Water element, gives their love a depth that surprises those who expect nothing more than charming superficiality. They need a partner who is both a companion in adventure and a safe harbor for genuine emotional connection — someone who can match their pace without losing their own center.',

    idealPartnerTraits: [
      'Adventurous',
      'Emotionally Secure',
      'Intellectually Stimulating',
      'Independent',
      'Warmly Patient',
    ],

    tips: [
      'Choose depth over novelty. When the familiar starts to feel boring, resist the urge to seek excitement elsewhere. Instead, go deeper into the relationship you have — there are always unexplored dimensions in a committed partnership that are more rewarding than the surface excitement of something new.',
      'Be honest about your need for space. Your partner cannot accommodate what they do not know about. Explain your restless nature clearly and early, framing it as a feature of your personality that you manage, not a threat to the relationship.',
      'Develop rituals of return. Create consistent practices that reconnect you with your partner after periods of independence — a weekly date night, a daily check-in call, a shared morning routine. These rituals provide the consistency your partner needs without restricting the freedom you require.',
      'Stay present during difficult conversations. Your instinct when emotional intensity builds is to change the subject, make a joke, or physically move. Practice sitting still with discomfort — the emotional depth available on the other side of that discomfort is exactly what your Water element is seeking.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Horse's constitution combines the Horse's natural Fire vitality with Water's influence on the body's fluid and emotional systems. In Traditional Chinese Medicine, the Horse's Fire nature governs the Heart and circulatory system, while Water governs the Kidneys and the body's foundational reserves. This internal tension between Fire and Water creates a physiology that is dynamic and adaptable but requires careful management to prevent the extremes that either element can produce.

The characteristic Water Horse health pattern reflects their lifestyle: periods of intense activity and social engagement followed by crashes when their energy reserves are depleted. Unlike pure Fire Horses who burn out spectacularly, the Water Horse's crashes tend to be more subtle — a gradual loss of enthusiasm, creeping fatigue, mild depression, and a withdrawal from the social world that normally energizes them. These signals indicate that the Water element's reserves are running low and need replenishment.

Prevention for the Water Horse centers on rhythmic rather than reactive self-care. Regular sleep patterns, consistent exercise, and adequate hydration counter their tendency to operate on adrenaline and social energy until the reserves are empty. The Water Horse who treats self-care as a daily practice rather than a crisis response maintains the vitality and social brilliance their nature is capable of.`,

    bodyAreas: ['Heart', 'Kidneys', 'Circulatory System', 'Bladder'],

    exercises: [
      'Running or cycling for cardiovascular fitness',
      'Swimming for full-body restoration',
      'Group sports for social energy',
      'Horseback riding for natural connection',
    ],

    dietTips: [
      'Support cardiovascular health with heart-protective foods: olive oil, fatty fish, berries, nuts, and dark leafy greens. The Horse\'s Fire nature makes heart health a priority, and these foods provide the antioxidant and omega-3 support that sustains circulatory vitality.',
      'Stay hydrated consistently. The Water Horse\'s active lifestyle and Fire constitution burn through fluids rapidly. Carry water everywhere, set hydration reminders, and include water-rich foods like cucumber, watermelon, and celery in daily meals.',
      'Balance warming and cooling foods. The Water Horse\'s internal Fire-Water dynamic benefits from a diet that includes both warming foods (ginger, cinnamon, cooked grains) and cooling foods (cucumber, mint, green tea) in proportion to their current energy state — more cooling when hyperactive, more warming when depleted.',
      'Eat socially but mindfully. The Water Horse thrives when meals are shared experiences, but the social energy of dining can lead to overeating, excessive alcohol, and poor food choices. Enjoy the social dimension while maintaining awareness of what and how much you consume.',
    ],

    mentalHealth:
      'The Water Horse\'s most significant mental health challenge is the anxiety that arises when their restless nature conflicts with their need for emotional depth. They may feel trapped by commitments that initially excited them, guilty about their desire for freedom, and confused about whether their restlessness reflects a genuine need or a pattern of avoidance. Therapy that explores attachment patterns and commitment anxiety is particularly valuable — helping the Water Horse understand that their restlessness often masks a deeper fear of being truly known and found wanting. Physical exercise is essential for mental balance, as it channels the Horse\'s restless energy constructively and generates the endorphins that stabilize their sometimes volatile mood. Mindfulness practices that emphasize present-moment awareness help the Water Horse resist the urge to mentally gallop toward the future before fully inhabiting the present. The Water Horse who finds peace with stillness — not as a permanent state but as a practiced capability — discovers emotional reserves they did not know they possessed.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 7],
    colors: ['Blue', 'Teal', 'Silver', 'White'],
    direction: 'North',
    gemstones: ['Aquamarine', 'Blue Topaz', 'Selenite'],
    flowers: ['Iris', 'Blue Delphinium', 'Water Hyacinth'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER HORSES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Paul McCartney',
        profession: 'Musician/Songwriter',
        birthYear: 1942,
        description:
          'Paul McCartney\'s extraordinary career — from the Beatles through Wings to a thriving solo career spanning seven decades — exemplifies the Water Horse\'s adaptability, social intelligence, and sustained creative energy. His melodic genius and ability to reinvent himself across musical eras reflect the sign\'s fluid versatility.',
      },
      {
        name: 'Barbra Streisand',
        profession: 'Singer/Actress/Director',
        birthYear: 1942,
        description:
          'Barbra Streisand\'s multifaceted career across music, film, and directing demonstrates the Water Horse\'s remarkable versatility and emotional depth. Her powerful voice carries the Water element\'s emotional resonance, while her successful navigation of Hollywood\'s shifting landscape reflects the Horse\'s adaptable social intelligence.',
      },
      {
        name: 'Muhammad Ali',
        profession: 'Boxing Champion/Activist',
        birthYear: 1942,
        description:
          'Muhammad Ali\'s famous boxing philosophy — "float like a butterfly, sting like a bee" — is a perfect description of the Water Horse in action. His fluid movement, intuitive timing, and masterful communication skills embody the sign\'s combination of physical grace and social brilliance. His lifelong activism reflects the Water Horse\'s genuine emotional depth beneath the charismatic surface.',
      },
      {
        name: 'Harrison Ford',
        profession: 'Actor',
        birthYear: 1942,
        description:
          'Harrison Ford\'s enduring appeal combines the Horse\'s rugged independence with Water\'s quiet emotional depth. His most iconic roles — Han Solo and Indiana Jones — capture the Water Horse\'s adventurous spirit and reluctant heroism, while his famously private personal life reflects the Water element\'s emotional guardedness.',
      },
      {
        name: 'Aretha Franklin',
        profession: 'Singer/Queen of Soul',
        birthYear: 1942,
        description:
          'Aretha Franklin\'s title as the "Queen of Soul" perfectly reflects the Water Horse\'s emotional depth expressed through extraordinary artistic talent. Her powerful voice carried the Water element\'s emotional resonance, demanding respect while conveying the full spectrum of human feeling — from joy to sorrow to righteous indignation.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Horse holds the seventh position in the Chinese zodiac, occupying the pivotal midpoint of the twelve-animal cycle. In the Great Race legend, the Horse was galloping confidently toward the finish line when the Snake, hidden at its hoof, startled it at the last moment — causing the Horse to stumble and claim seventh place instead of sixth. This story encodes the Horse's characteristic tension between speed and awareness: the Horse's powerful forward momentum can be disrupted by threats it does not notice beneath its feet.

When the Water element is paired with the Horse, the mythology gains the dimension of intuitive awareness that addresses this vulnerability. The Water Horse represents the Horse that has learned to sense what lies beneath the surface — to combine the Horse's natural speed and power with Water's perceptive depth. In Chinese mythology, horses associated with water are particularly significant: the legendary "Dragon Horse" (Longma) emerged from the Yellow River bearing the map that would become the basis of the I Ching, connecting the Water Horse to themes of revealed wisdom and the transmission of profound knowledge from hidden sources.

In Chinese military tradition, the Water Horse represents the cavalry commander who wins through strategy and terrain knowledge rather than brute force — the general who understands that rivers, rains, and floods can decide battles more effectively than swords. This association connects the Water Horse to the principle of achieving goals through intelligent adaptation rather than direct confrontation.`,

    symbolism: `The Water Horse symbolizes the dynamic balance between freedom and depth, between movement and reflection. In traditional symbolism, it represents the principle that true freedom comes not from running without direction but from moving with purpose, guided by intuitive understanding of the currents beneath the surface. The Water Horse reminds us that the most effective journey is not always the fastest but the most intelligently navigated.

Water flowing beneath the Horse's galloping hooves carries profound symbolic meaning. It represents the emotional and intuitive currents that guide movement when conscious planning fails — the deep knowledge that reveals the right path when the visible road disappears. The Water Horse symbolizes trust in one's instincts, the courage to move forward without perfect information, and the grace to adjust course when the terrain changes.

In the Wu Xing cycle, Water controlling Fire (the Horse's inherent element) symbolizes the tempering of passion with wisdom — the principle that the most powerful action comes not from raw enthusiasm but from enthusiasm guided by understanding. The Water Horse teaches that moderation is not weakness but mastery.`,

    modernInterpretation: `In contemporary culture, the Water Horse archetype resonates with the increasing value placed on adaptability, cross-cultural competence, and emotional intelligence in a globalized world. The ability to move fluidly between contexts, communicate across cultural boundaries, and build relationships with diverse people — all core Water Horse competencies — has become essential in business, diplomacy, and social life.

The Water Horse also speaks to the modern challenge of finding depth in an age of constant motion. In a culture that rewards busyness, productivity, and perpetual availability, the Water Horse's journey is learning to pause, to go deep, and to find meaning in sustained engagement rather than constant novelty. Their story suggests that the most fulfilling life combines the Horse's love of freedom with Water's need for depth — movement with purpose, variety with meaning.

For those born in Water Horse years, the contemporary world is both playground and challenge. Their natural adaptability and social fluidity are more valuable than ever, but the pace of modern life can amplify their tendency toward scattered energy and shallow engagement. The most successful Water Horses find the discipline to combine their remarkable versatility with genuine depth — becoming not just charming connectors but wise ones.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
