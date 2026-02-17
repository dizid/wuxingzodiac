// ============================================
// FIRE MONKEY (丙申) — The Daring Catalyst
// ============================================
// Fire supercharges the Monkey's brilliant inventiveness
// and social agility, creating an irresistible innovator
// who turns every room into a laboratory of possibility.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-monkey',
  profile: getProfileBySlug('fire-monkey')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Monkey is the most electrifying and ambitious member of the Monkey family. Where other Monkeys rely on wit, cleverness, and the ability to outthink their competition, the Fire Monkey adds an explosive layer of passionate drive and fearless self-confidence that transforms mere intelligence into something genuinely formidable. They are the Monkey who does not just solve the puzzle — they redesign it, market it, and sell it to the world before anyone else has finished reading the instructions.

What makes the Fire Monkey truly extraordinary is the combination of the Monkey's quicksilver intelligence with Fire's bold leadership energy. The standard Monkey is brilliant but can be scattered, using their gifts for clever tricks rather than meaningful achievement. Fire gives the Monkey direction, ambition, and the burning desire to use their considerable talents for something that matters. The result is a personality of dazzling creativity, infectious enthusiasm, and the restless drive to constantly push boundaries and challenge assumptions.

The Fire Monkey's brilliance, however, comes with a warning label. Their speed of thought and action can leave others feeling outpaced, outmaneuvered, and sometimes disrespected. They can be impatient with slower thinkers, dismissive of conventional approaches, and so confident in their own cleverness that they underestimate the value of other people's contributions. The Fire Monkey who learns to channel their extraordinary gifts through collaborative frameworks — rather than operating as a lone genius — achieves a level of impact that matches their considerable self-image.`,

    coreTraits: [
      'Inventive',
      'Charismatic',
      'Restless',
      'Confident',
      'Quick-Witted',
      'Competitive',
    ],

    strengths: [
      {
        trait: 'Dazzling Innovation',
        description:
          'The Fire Monkey is the zodiac\'s most prolific generator of new ideas. Their mind works at extraordinary speed, making connections between seemingly unrelated concepts and producing solutions that others find genuinely surprising. Fire adds the confidence to pursue unconventional ideas that quieter Monkeys would keep to themselves, resulting in breakthroughs that can reshape entire fields.',
      },
      {
        trait: 'Irresistible Energy',
        description:
          'Fire Monkeys bring a contagious vitality to every environment they enter. Their enthusiasm is genuine, their humor is sharp, and their ability to energize a room full of tired, skeptical people is almost supernatural. They make everything seem possible, exciting, and urgent — a quality that makes them extraordinary leaders of creative teams and entrepreneurial ventures.',
      },
      {
        trait: 'Rapid Adaptation',
        description:
          'The Monkey\'s natural adaptability, accelerated by Fire\'s quick-strike energy, makes the Fire Monkey one of the fastest learners in the zodiac. They pick up new skills, technologies, and concepts at remarkable speed and apply them creatively before others have finished their training. In rapidly changing environments, the Fire Monkey thrives where others struggle.',
      },
      {
        trait: 'Competitive Drive',
        description:
          'Fire transforms the Monkey\'s playful competitiveness into a burning desire to win. The Fire Monkey does not just want to be clever — they want to be the cleverest. This drive pushes them to extraordinary achievement and ensures that they never stop improving, learning, and pushing the boundaries of what is possible.',
      },
    ],

    challenges: [
      {
        trait: 'Arrogant Impatience',
        description:
          'The Fire Monkey\'s exceptional intelligence can breed a contempt for slower thinkers that damages professional and personal relationships. They interrupt, complete other people\'s sentences, dismiss ideas before fully hearing them, and project an air of intellectual superiority that — however justified by their abilities — alienates potential allies and collaborators.',
      },
      {
        trait: 'Unreliable Follow-Through',
        description:
          'The Fire Monkey generates ideas at a pace that far exceeds their capacity to execute them. They start projects with explosive enthusiasm, pursue them until the interesting problems are solved, and then abandon them for the next shiny challenge — leaving a trail of brilliant beginnings and incomplete endings.',
      },
      {
        trait: 'Ethical Flexibility',
        description:
          'The Monkey\'s natural pragmatism combined with Fire\'s ambitious drive can lead to ethical shortcuts. Fire Monkeys may bend rules, exploit loopholes, or rationalize questionable behavior as necessary innovation. Their intelligence makes them skilled at justifying actions that their conscience should question more seriously.',
      },
      {
        trait: 'Attention Deficit',
        description:
          'The Fire Monkey\'s mind moves so quickly that sustained focus on a single task can feel physically uncomfortable. They crave novelty, stimulation, and variety to a degree that can interfere with the deep, concentrated work that many meaningful achievements require. Boredom is their kryptonite.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Monkey is associated with the Metal element — sharp, disciplined, and analytically precise. When Fire is added to this Metal-natured animal, the destructive cycle is activated: Fire melts Metal. This creates a fascinating internal tension. Fire's passionate intensity softens Metal's cold precision, making the Fire Monkey warmer and more approachable than other Monkey variants, but also less disciplined and more prone to emotional decision-making.

This Fire-Metal dynamic gives the Fire Monkey their characteristic blend of brilliant thinking and passionate action. Metal provides the analytical framework; Fire provides the drive to act on that analysis immediately. The risk is that Fire's heat can destabilize Metal's structure, causing the Monkey to lose the methodical precision that makes their intelligence truly effective. The Fire Monkey benefits from Earth element influences, which mediate between Fire and Metal in the productive cycle — Earth is produced by Fire and produces Metal, creating a stabilizing bridge that helps the Fire Monkey maintain both their passionate drive and their analytical edge.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Monkey's compatibility is shaped by their need for a partner who can match their intelligence, keep up with their pace, and tolerate their restless energy without trying to contain it. They are drawn to people who are clever, confident, and interesting — qualities the Fire Monkey values above almost everything else. The worst match for a Fire Monkey is someone who is predictable, intellectually passive, or emotionally needy.

Traditional Chinese astrology places the Monkey in the "Water Trine" alongside the Rat and the Dragon — animals that share the Monkey's ambition, intelligence, and appetite for success. These three signs form powerful alliances based on mutual admiration and complementary capabilities. The Monkey's greatest challenge comes from the Tiger, which sits in direct opposition and represents the straightforward, instinct-driven approach that the cerebral Monkey finds unsophisticated.`,

    bestMatches: [
      {
        slug: 'fire-rat',
        name: 'Fire Rat',
        score: 90,
        summary:
          'A dazzling partnership of two of the zodiac\'s quickest minds. The Fire Rat\'s strategic brilliance and social agility perfectly complements the Fire Monkey\'s inventive creativity. Both signs are fast-thinking, ambitious, and endlessly stimulating to each other. Their conversations are legendary — rapid-fire exchanges of ideas, plans, and possibilities that leave others exhausted but leave these two energized.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 87,
        summary:
          'The Earth Dragon\'s commanding vision and grounded ambition provides the Fire Monkey with a partner worthy of their respect and a project worthy of their talents. The Dragon provides direction and scale; the Monkey provides innovation and execution. Earth\'s stabilizing influence prevents the partnership from overheating while maintaining the ambitious energy both signs crave.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 80,
        summary:
          'The Water Snake\'s strategic depth and emotional intelligence intrigues the Fire Monkey, who values cleverness in all its forms. The Snake\'s patience and long-term thinking complements the Monkey\'s rapid-fire creativity, creating a partnership where brilliant ideas receive the strategic development they need to succeed. Water cools Fire without extinguishing it.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 32,
        summary:
          'The Fire Tiger\'s direct, instinct-driven approach to life fundamentally conflicts with the Fire Monkey\'s cerebral, strategic nature. The Tiger sees the Monkey as devious; the Monkey sees the Tiger as simple. Both are intensely competitive but through incompatible styles, creating power struggles that escalate into genuine hostility. Double Fire ensures maximum dramatic intensity.',
      },
      {
        slug: 'earth-pig',
        name: 'Earth Pig',
        score: 38,
        summary:
          'The Earth Pig\'s straightforward honesty and emphasis on simple pleasures feels boring to the Fire Monkey, while the Monkey\'s constant scheming and restless energy exhausts the peace-loving Pig. The Pig values sincerity and consistency; the Monkey values cleverness and novelty. Their core values are fundamentally misaligned.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 40,
        summary:
          'The Metal Ox\'s rigid discipline and methodical pace drives the rapid-fire Monkey to distraction. The Ox demands thoroughness and consistency; the Monkey demands speed and innovation. Metal\'s critical precision clashes with Fire\'s spontaneous energy, creating a partnership where neither party\'s strengths are appreciated by the other.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Metal animal, the Fire Monkey experiences the destructive cycle within their own nature — Fire melts Metal. This creates internal dynamism but also instability. In partnerships, Earth element signs provide the most beneficial influence, mediating between Fire and Metal and providing the stability that the Fire Monkey needs. Water element signs cool Fire and strengthen Metal (Water is produced by Metal), creating partnerships that bring out the Monkey\'s best analytical qualities. Wood element signs fuel Fire but are chopped by Metal, creating complex dynamics of energy and control. Other Metal element signs may amplify the Monkey\'s analytical gifts but create emotional coldness when Fire\'s warmth is overwhelmed by double Metal\'s precision.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Monkey is built for roles at the cutting edge of innovation. They excel in environments that reward creative problem-solving, rapid learning, and the ability to see possibilities where others see limitations. Traditional career paths bore them; they need work that is constantly evolving, intellectually demanding, and offers the opportunity to be recognized for their brilliance.

The ideal Fire Monkey career combines intellectual challenge with public recognition. They need work that tests their considerable abilities while providing a platform for their talents to be seen and appreciated. Roles buried in bureaucracy, operating in isolation, or focused on routine maintenance are career death for the Fire Monkey. They need to be building something, solving something, or reinventing something at all times.

Financially, Fire Monkeys are capable of generating significant wealth through innovation and entrepreneurship. Their ability to spot trends, learn new skills rapidly, and execute with creative flair makes them natural startup founders and serial entrepreneurs. Their financial risk is the same as their professional risk: overextension, scattered focus, and the tendency to chase novelty over stability.`,

    idealCareers: [
      'Tech Entrepreneur',
      'Product Designer',
      'Stand-Up Comedian',
      'Marketing Innovator',
      'Game Developer',
      'Venture-Backed Founder',
      'Science Communicator',
      'Advertising Creative Director',
    ],

    financialStyle:
      'Fire Monkeys are innovative earners who generate wealth through creativity, timing, and the ability to capitalize on emerging trends. They are attracted to high-growth opportunities and speculative investments that other signs find too risky or too unconventional. Their financial strength is spotting opportunities early; their financial weakness is lack of discipline in managing the wealth they create. The Fire Monkey who establishes automated financial systems — savings, investments, expense tracking — that operate independently of their impulsive tendencies builds lasting wealth from their considerable earning power.',

    tips: [
      'Commit to finishing what you start. Your greatest professional liability is a trail of brilliant, incomplete projects. Before starting something new, require yourself to bring at least one current project to completion. The discipline of finishing is the skill that separates successful Fire Monkeys from brilliant underachievers.',
      'Build complementary teams. Your strengths are idea generation and rapid problem-solving, not sustained execution and detail management. Surround yourself with people whose skills complement your gaps, and trust them to handle the aspects of work that bore you.',
      'Manage your intellectual ego. Your intelligence is genuine, but broadcasting it constantly damages relationships and limits collaboration. Practice asking questions more than making statements, and show genuine curiosity about other people\'s expertise rather than positioning yourself as the smartest person in every room.',
      'Choose one domain to master deeply. Your ability to learn quickly across many domains can prevent you from developing true expertise in any. Pick one field that genuinely excites you and commit to world-class mastery — the Fire Monkey who goes deep while maintaining broad awareness becomes genuinely formidable.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Fire Monkey is an exhilarating adventure of wit, warmth, and constant surprise. They are among the most entertaining and stimulating partners in the zodiac, bringing an endless stream of ideas, jokes, adventures, and creative expressions of affection to their relationships. Being loved by a Fire Monkey means never being bored — and occasionally wishing for five minutes of peace.

The Fire Monkey's approach to romance combines the Monkey's playful charm with Fire's passionate intensity. They court with humor, creativity, and an impressive ability to tailor their approach to exactly what appeals to their potential partner. They are gifted at making people laugh, feel special, and feel alive — a triple threat that makes their romantic pursuit nearly irresistible.

The challenge in Fire Monkey relationships is depth. Their restless intelligence and fear of boredom can prevent them from settling into the quiet, sustained intimacy that deep relationships require. They may use humor to deflect serious conversations, create excitement to avoid mundane reality, or seek novelty outside the relationship when the initial thrill fades. The Fire Monkey who learns to be still, be vulnerable, and be present discovers that depth is the ultimate adventure — the one challenge their clever mind cannot solve but their open heart can embrace.`,

    loveStyle:
      'The Fire Monkey loves through wit, creativity, and shared adventure. They are playful, generous, and endlessly inventive partners who express affection through humor, surprise, and the creation of memorable shared experiences. Their love language is quality time filled with stimulation — they want to explore, learn, laugh, and discover together. They need a partner who can match their intellectual energy and who finds their restless creativity exciting rather than exhausting.',

    idealPartnerTraits: [
      'Intellectually Stimulating',
      'Good Sense of Humor',
      'Emotionally Grounded',
      'Independent',
      'Adventurous',
    ],

    tips: [
      'Develop emotional vocabulary. Your instinct is to intellectualize or joke your way through emotional moments, but your partner needs you to actually feel and express emotions directly. Practice naming your feelings without analyzing them — simple statements like "I feel scared" or "I need you" are more powerful than any clever deflection.',
      'Be present in quiet moments. Not every moment needs to be filled with stimulation. Practice sitting with your partner in comfortable silence, sharing a meal without multitasking, or simply being together without an agenda. This stillness is where deepest intimacy grows.',
      'Follow through on romantic promises. Your enthusiasm generates frequent promises — trips, projects, gestures — that you may forget as your attention shifts to the next exciting idea. Keep a record of what you have promised and honor those commitments, even when newer plans beckon.',
      'Resist the urge to fix your partner. Your problem-solving instinct is powerful, but your partner sometimes needs you to listen and empathize rather than diagnose and prescribe. Ask "Do you want me to help solve this, or just listen?" before launching into solution mode.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Monkey's health profile reflects the internal tension between Fire's expansive energy and Metal's contracting precision. In Traditional Chinese Medicine, the Monkey's Metal element governs the Lungs and Large Intestine — the organs of respiration, elimination, and the body's interface with the external environment. Fire's influence on this Metal constitution creates a metabolism that runs hot and fast, demanding adequate cooling and cleansing to maintain balance.

The Fire Monkey's primary health vulnerability is respiratory and nervous system stress. Their constant mental activity, combined with Fire's heat and Metal's tendency toward dryness, can manifest as respiratory conditions, anxiety disorders, skin dryness, and tension headaches. The Fire Monkey's mind is their most powerful organ but also their most stressed — the ceaseless generation of ideas and analyses places significant demand on the nervous system.

The Fire Monkey's best health strategy leverages their natural curiosity and love of novelty. Varied exercise routines, diverse dietary approaches, and health practices that incorporate learning and stimulation work far better for this sign than rigid, monotonous regimens. The Fire Monkey who treats health optimization as an interesting problem to solve — rather than a boring obligation to endure — achieves excellent results.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Nervous System', 'Skin'],

    exercises: [
      'Varied circuit training',
      'Rock climbing or bouldering',
      'Capoeira or acrobatic arts',
      'High-intensity group fitness classes',
    ],

    dietTips: [
      'Support lung health with moistening, nourishing foods: pear, almond, honey, white fungus, and lily bulb. The Fire Monkey\'s Metal-Lung system is vulnerable to dryness and heat, and these foods provide the moistening quality that balances their constitution.',
      'Include white and light-colored foods that support Metal according to TCM: rice, oats, garlic, onion, and radish. These foods strengthen the Lung-Large Intestine system that forms the Fire Monkey\'s constitutional foundation.',
      'Rotate your diet frequently. The Fire Monkey\'s aversion to monotony extends to food — eating the same meals repeatedly leads to dietary boredom and eventual junk food binges. A varied diet with seasonal ingredients keeps the Fire Monkey interested and well-nourished.',
      'Manage caffeine strategically. The Fire Monkey\'s nervous system is already running at high speed, and excessive caffeine amplifies anxiety without improving performance. Use caffeine deliberately and moderately, and explore alternatives like green tea that provide gentle, sustained energy.',
    ],

    mentalHealth:
      'The Fire Monkey\'s mental health is tied to their sense of intellectual freedom and creative productivity. They thrive when their mind is engaged, challenged, and producing results. Stagnation — in any form — is their greatest psychological threat, and periods of enforced inactivity (illness, unemployment, or relationship constraints) can trigger anxiety, restlessness, and depression that manifests as irritability and compulsive behavior. The Fire Monkey benefits from cognitive-behavioral approaches that channel their analytical strengths toward self-understanding, and from mindfulness practices that teach them the difference between productive thinking and anxious rumination. Physical activities that combine mental engagement with physical challenge — martial arts, climbing, dance — provide the dual stimulation that keeps the Fire Monkey\'s nervous system balanced. The single most important mental health practice for this sign is learning to rest without guilt — recognizing that their mind processes, integrates, and creates even during apparent downtime.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 7, 8],
    colors: ['Red', 'Orange', 'White'],
    direction: 'South',
    gemstones: ['Citrine', 'Fire Agate', 'Peridot'],
    flowers: ['Bird of Paradise', 'Chrysanthemum', 'Allium'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE MONKEYS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Dolly Parton',
        profession: 'Singer/Songwriter/Entrepreneur',
        birthYear: 1956,
        description:
          'Dolly Parton exemplifies the Fire Monkey\'s dazzling combination of creative brilliance, business acumen, and irresistible charm. Her ability to reinvent herself across decades while building a media and philanthropic empire reflects the sign\'s extraordinary versatility and tireless energy. Her wit, warmth, and strategic intelligence are pure Fire Monkey.',
      },
      {
        name: 'Tom Hanks',
        profession: 'Actor/Producer',
        birthYear: 1956,
        description:
          'Tom Hanks\'s remarkable versatility, effortless likability, and ability to inhabit wildly different characters reflects the Fire Monkey\'s adaptive intelligence and warm charisma. His career trajectory — from comedic roles to Oscar-winning dramatic performances to respected producer — shows the Fire Monkey\'s ability to evolve and excel across multiple domains.',
      },
      {
        name: 'Mel Gibson',
        profession: 'Actor/Director',
        birthYear: 1956,
        description:
          'Mel Gibson\'s career demonstrates both the brilliance and the volatility of the Fire Monkey. His extraordinary talent for storytelling and his bold directorial vision coexist with the impulsiveness and controversial behavior that reflect Fire Monkey energy when it lacks the grounding influence of self-discipline and emotional regulation.',
      },
      {
        name: 'Bo Diddley',
        profession: 'Musician',
        birthYear: 1956,
        description:
          'Bo Diddley\'s revolutionary approach to rhythm and his irrepressible showmanship embody the Fire Monkey\'s gift for innovation and performance. His signature beat transformed rock and roll, and his fearless, entertaining stage presence reflected the Fire Monkey\'s ability to captivate audiences through a combination of brilliance and sheer infectious energy.',
      },
      {
        name: 'Joe Montana',
        profession: 'Football Quarterback',
        birthYear: 1956,
        description:
          'Joe Montana\'s legendary composure under pressure, creative improvisation on the field, and reputation for making impossible situations look effortless reflects the Fire Monkey\'s combination of quick thinking, confidence, and the ability to perform at their best when the stakes are highest.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Monkey holds the ninth position in the Chinese zodiac and is one of the most beloved and culturally significant animals in East Asian mythology. The Monkey's prominence is largely due to Sun Wukong, the Monkey King — the protagonist of the classic Chinese novel "Journey to the West" and one of the most recognized characters in world literature. Sun Wukong embodies the Monkey's essential nature: brilliant, mischievous, nearly unstoppable, and ultimately redeemed through discipline and devotion.

When Fire transforms the Monkey, the mythological resonance intensifies dramatically. The Fire Monkey recalls Sun Wukong at the height of his powers — particularly the episode where he survives the Laozi's furnace of Eight Trigrams, emerging not destroyed but strengthened, with eyes that can see through any illusion. This mythological image perfectly captures the Fire Monkey's nature: a being that passes through Fire not to be consumed but to be purified and empowered, emerging with abilities that transcend ordinary limitations.

In Hindu mythology, which deeply influenced Chinese Buddhist tradition, Hanuman — the monkey god of devotion and strength — carries fire on his tail to set Lanka ablaze. The Fire Monkey connects to this archetype of the trickster-hero whose cleverness and courage, when directed by higher purpose, becomes a force of cosmic significance.`,

    symbolism: `The Fire Monkey symbolizes the creative power of intelligence set ablaze — the mind that does not merely think but ignites, sparking ideas, innovations, and transformations that change the landscape of possibility. In traditional Wu Xing symbolism, Fire acting on Metal represents the smelting process: the application of heat to rigid structure that allows it to be reshaped, refined, and forged into new forms. The Fire Monkey embodies this process of creative destruction and reconstruction.

The Fire Monkey is also a symbol of sacred mischief — the understanding that progress often requires breaking rules, challenging authority, and approaching problems with a playfulness that serious minds find uncomfortable. The trickster tradition, present in every culture, recognizes that the most important truths are often delivered through humor, surprise, and the creative disruption of established patterns.

In the cycle of elements, Fire melting Metal represents a controlled destruction — not the annihilation of Metal but its transformation into something more useful and beautiful. The Fire Monkey symbolizes this alchemical truth: that the greatest creations require the courage to unmake the existing before building the new.`,

    modernInterpretation: `In contemporary culture, the Fire Monkey archetype is everywhere in the technology and entertainment industries — the innovator, the disruptor, the creative force that reimagines entire categories and makes the impossible seem obvious in hindsight. The Fire Monkey year of 1956 produced a generation of entertainers and cultural innovators who defined the second half of the twentieth century.

The 1956 cohort brought Fire Monkey energy to Hollywood, music, sports, and entrepreneurship, demonstrating the sign's extraordinary ability to excel across multiple domains. Their careers are characterized by versatility, longevity, and the ability to reinvent themselves — Fire Monkey traits that allowed them to remain relevant across decades of dramatic cultural change.

For modern Fire Monkeys, the digital age is a natural habitat. The internet's emphasis on speed, innovation, creativity, and constant reinvention aligns perfectly with the Fire Monkey's strengths. The challenge for contemporary Fire Monkeys is depth in an age of distraction — learning to apply their extraordinary abilities to projects of lasting significance rather than scattering their brilliance across an ever-expanding array of temporary enthusiasms.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
