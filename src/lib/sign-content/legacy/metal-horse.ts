// ============================================
// METAL HORSE (庚午) — The Armored Charger
// ============================================
// Metal disciplines the Horse's wild spirit into a focused
// force of unstoppable momentum and principled independence.
// Years: 1930, 1990

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-horse',
  profile: getProfileBySlug('metal-horse')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Horse is the most disciplined and formidable expression of the Horse archetype. Where the Horse is already defined by speed, independence, and an unquenchable love of freedom, the Metal element adds structure, determination, and a cutting edge that transforms wild energy into directed power. The Metal Horse does not merely run — it charges, with purpose, precision, and an armored resolve that makes it nearly impossible to stop once set in motion.

What distinguishes the Metal Horse from other Horse variants is the addition of willpower to the Horse's natural vitality. The typical Horse scatters energy across many interests, abandoning pursuits when boredom strikes. The Metal Horse retains the Horse's characteristic energy and independence but channels it through Metal's demand for results. They set targets and hit them. They make commitments and honor them. They bring to the Horse's freedom-loving nature an unusual capacity for sustained focus that produces tangible, lasting achievements.

Beneath the dynamic exterior, the Metal Horse harbors a complex relationship with vulnerability. They project strength, competence, and self-sufficiency with such consistency that those around them rarely think to ask how they are doing. This suits the Metal Horse's preference for independence but creates a hidden cost — a loneliness that they rarely acknowledge and an emotional self-reliance that, while impressive, prevents them from accessing the deeper connections they need.`,

    coreTraits: [
      'Driven',
      'Independent',
      'Principled',
      'Energetic',
      'Direct',
      'Self-Reliant',
    ],

    strengths: [
      {
        trait: 'Unstoppable Momentum',
        description:
          'Once the Metal Horse commits to a goal, they pursue it with a momentum that is virtually impossible to derail. The combination of the Horse\'s natural energy and Metal\'s structural discipline creates a force that plows through obstacles, resistance, and setbacks with steady, unwavering forward motion. They are the person you want on your team when a project requires relentless drive.',
      },
      {
        trait: 'Principled Independence',
        description:
          'Metal Horses live by a clearly defined code of conduct. Their independence is not mere rebelliousness but a principled commitment to self-determination. They make their own decisions based on their own values, and they hold themselves accountable to those values with impressive consistency. This principled stance earns them deep respect even from those who disagree with them.',
      },
      {
        trait: 'Clear Communication',
        description:
          'The Metal element sharpens the Horse\'s already direct communication style into something remarkably clear and effective. Metal Horses say what they mean, mean what they say, and have little patience for ambiguity or double-speak. In a world of euphemism and evasion, their frankness is refreshing — and their ability to cut to the core of any issue makes them invaluable problem-solvers.',
      },
      {
        trait: 'Physical Vitality',
        description:
          'Metal Horses possess extraordinary physical energy and resilience. They are naturally athletic, drawn to physical challenges, and capable of sustaining intense activity far longer than most people. This vitality extends beyond the physical — they bring the same energy to intellectual and creative pursuits, approaching everything with a vigor that energizes those around them.',
      },
    ],

    challenges: [
      {
        trait: 'Rigidity Under Stress',
        description:
          'While the Horse\'s natural response to difficulty is to adapt and change course, the Metal Horse\'s response is to push harder. This can become a liability when the situation calls for flexibility rather than force. Metal Horses may pursue failing strategies with increasing intensity rather than pausing to reassess, mistaking stubbornness for perseverance.',
      },
      {
        trait: 'Emotional Guardedness',
        description:
          'Metal Horses project strength so consistently that they can forget how to ask for help. Their self-reliance, while admirable, can become a prison — isolating them from the emotional support they need and creating relationships that are based more on mutual independence than genuine intimacy.',
      },
      {
        trait: 'Impatience with Weakness',
        description:
          'The Metal Horse holds themselves to high standards and can struggle to extend patience to those who do not meet those standards. They may become frustrated with colleagues who work more slowly, partners who express needs they consider excessive, or anyone whose pace or commitment does not match their own relentless drive.',
      },
      {
        trait: 'Blunt Directness',
        description:
          'The Metal Horse\'s honest, no-nonsense communication style can cross the line from refreshingly direct into painfully blunt. They may deliver truths that, while accurate, are expressed without sufficient sensitivity to the recipient\'s emotional state. Their forthrightness can wound where they only intended to inform.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Horse is inherently a Fire-phase animal — associated with high noon, midsummer, and the peak of yang energy. When Metal overlays this Fire nature, it creates the destructive cycle pairing — Fire melts Metal. This creates an internal dynamic of considerable tension: the Horse's fiery nature constantly tests the Metal overlay, while Metal's discipline constantly restrains the Horse's desire to burn freely.

This Fire-Metal tension is the engine of the Metal Horse's personality. It produces their characteristic combination of high energy and focused discipline — the fire provides the fuel, and the metal provides the containment vessel. When this dynamic is balanced, the Metal Horse achieves remarkable things: passionate action guided by principled restraint. When imbalanced — when either fire or metal dominates — the result is either burnout (too much fire) or rigid, joyless productivity (too much metal).

The Metal Horse's path to well-being involves honoring both aspects of their nature. They need physical outlets for their fire energy — sport, adventure, creative expression — and they need structured practices that satisfy their metal nature — clear goals, organized environments, and consistent routines. The integration of freedom and discipline is the Metal Horse's lifelong project.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Horses need partners who are strong enough to match their energy but wise enough to give them space. They respect independence, value honesty, and are drawn to people who have their own passions, goals, and sense of self. A partner who tries to tame or domesticate the Metal Horse will find themselves facing a principled resistance that intensifies with every attempt at control.

The Horse belongs to the Third Trine alongside the Tiger and the Dog — signs that share the Horse's courage, independence, and action-oriented approach. These natural alliances are particularly strong for the Metal Horse, whose principled nature resonates with these other justice-seeking signs. The Rat sits opposite the Horse on the zodiac wheel, creating the fundamental tension between the Horse's freedom and the Rat's security-seeking nature.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 92,
        summary:
          'A dynamic, adventurous partnership where both signs celebrate each other\'s independence and courage. The Wood Tiger\'s compassionate boldness complements the Metal Horse\'s principled drive, creating a relationship of mutual respect and shared action. The Wood element feeds the Horse\'s internal fire, energizing the partnership without threatening Metal\'s structure.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 87,
        summary:
          'The Earth Dog\'s grounded loyalty provides the stable foundation the Metal Horse needs without restricting their freedom. The Dog\'s principled nature resonates with the Horse\'s own moral code, creating a partnership built on shared values and mutual trust. The Earth element generates Metal, strengthening the Horse\'s disciplined side.',
      },
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 83,
        summary:
          'An unexpectedly harmonious pairing where the Water Goat\'s gentle creativity softens the Metal Horse\'s harder edges. The Goat provides the emotional warmth and artistic sensibility that the Horse secretly craves, while the Metal Horse offers the security and decisive action that the Goat needs. Water controls Fire without extinguishing it, creating a calming influence.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 30,
        summary:
          'The fundamental Horse-Rat opposition is amplified by conflicting approaches to life. The Water Rat\'s cautious, strategic nature clashes with the Metal Horse\'s direct, action-oriented approach. The Rat seeks security through accumulation; the Horse seeks it through independence. Water douses the Horse\'s internal fire, while the Horse\'s restless energy destabilizes the Rat\'s careful plans.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 35,
        summary:
          'Two rigid Metal signs with incompatible rhythms. The Metal Ox\'s slow, methodical approach frustrates the Metal Horse\'s need for speed and momentum. The Ox demands predictability; the Horse needs variety. Both are principled and stubborn, creating standoffs where neither will yield. The shared Metal element, rather than creating harmony, amplifies their competing rigidities.',
      },
      {
        slug: 'earth-rabbit',
        name: 'Earth Rabbit',
        score: 40,
        summary:
          'The Earth Rabbit\'s need for quiet harmony and measured pace conflicts with the Metal Horse\'s bold energy and blunt communication. The Rabbit finds the Horse overwhelming and insensitive; the Horse finds the Rabbit indecisive and overly cautious. While mutual respect is achievable, the fundamental difference in temperament makes deep connection difficult.',
      },
    ],

    elementAffinity: `The Metal Horse's Fire-Metal internal dynamic creates distinctive compatibility patterns. Earth element signs are often the most naturally harmonious, as Earth mediates between Fire and Metal in the productive cycle — Fire generates Earth, and Earth generates Metal — creating relationships that soothe the Horse's internal tension. Water element signs provide a cooling influence that calms the Horse's fire without threatening their structure. Wood element signs energize the Horse's fire nature, creating passionate, high-energy partnerships that may sometimes become overwhelming. Other Metal signs create relationships of mutual respect for discipline and principles but risk excessive rigidity. Fire element signs amplify the Horse's already considerable internal fire, creating intense but potentially combustible dynamics.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Horses thrive in careers that combine physical or intellectual energy with clear objectives and meaningful independence. They are at their best in roles that require initiative, stamina, and the courage to act decisively in uncertain situations. The Metal element's influence adds a strategic dimension to the Horse's natural dynamism, making them effective not just as individual contributors but as leaders of focused, high-performing teams.

The ideal Metal Horse career provides measurable goals, freedom to determine their own methods, and enough variety to keep their restless mind engaged. They excel in competitive environments where performance is clearly measured and rewarded. Unlike the Fire Horse, who needs excitement for its own sake, the Metal Horse can tolerate routine if it serves a meaningful purpose — but they will never tolerate being micromanaged or constrained by unnecessary rules.

Metal Horses make excellent leaders in fast-paced industries. Their combination of energy, directness, and principled decision-making creates teams that know exactly where they stand and where they are going. Subordinates respect the Metal Horse's fairness and clarity, even when they find their pace demanding.`,

    idealCareers: [
      'Sports Coach/Athletic Director',
      'Sales Director',
      'Military Logistics Officer',
      'Adventure Tourism Operator',
      'Project Manager',
      'Personal Trainer/Fitness Entrepreneur',
      'Foreign Correspondent',
      'Emergency Room Physician',
    ],

    financialStyle:
      'Metal Horses are practical, action-oriented financial managers. They understand money as a tool for freedom and security rather than an end in itself. They earn well through hard work and targeted effort, and they spend decisively on things that enhance their quality of life and independence. Their challenge is impatience with long-term investment strategies — they prefer to see results quickly and may miss the benefits of patient wealth accumulation. The most financially successful Metal Horses balance their desire for action with a disciplined savings strategy that runs on autopilot.',

    tips: [
      'Build systems that sustain momentum. Metal Horses are excellent starters but can lose interest in maintenance. Create automated processes, delegate routine tasks, and build teams that handle the follow-through your restless nature resists.',
      'Temper directness with awareness of context. Your honest communication is valued, but timing and tone matter. Delivering a hard truth in the right moment with the right framing is far more effective than delivering it whenever it occurs to you.',
      'Invest in relationships as career infrastructure. Metal Horses can become so focused on results that they neglect the human connections that enable those results. Regular, genuine relationship maintenance — checking in, offering help, expressing appreciation — compounds over time into an invaluable professional network.',
      'Schedule intentional rest. Your natural energy makes you feel invulnerable, but even the Metal Horse has limits. Build recovery periods into your schedule before your body forces them upon you. Strategic rest is not laziness — it is maintenance of your most valuable asset.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Metal Horse is an adventure in partnership — exciting, honest, and built on a foundation of mutual respect and shared independence. They are generous, passionate lovers who bring the same energy and commitment to their relationships that they bring to their careers. When a Metal Horse chooses a partner, they are choosing someone to run alongside — not someone to carry or be carried by, but a true companion on life's journey.

The Metal Horse's need for independence is the central challenge in their romantic life. They love deeply but need space to breathe, and they can struggle to balance the demands of intimacy with their equally pressing need for autonomy. Partners who understand that the Metal Horse's occasional need for solitude is not rejection but recharging will find themselves with one of the most loyal, exciting, and honest partners in the zodiac.

Metal Horses express love through shared experiences, practical support, and unwavering honesty. They are not naturally romantic in the traditional sense — flowers and poetry feel contrived to them — but their love is expressed through actions of genuine substance: showing up when it counts, speaking the truth when it is needed, and building a life of shared purpose and mutual freedom.`,

    loveStyle:
      'The Metal Horse loves with honest passion and principled devotion. Their love language is freedom granted and trust demonstrated — they show love by trusting their partner with independence and by being completely trustworthy in return. Physical affection is important to them, expressed through energetic activities shared together as much as through quiet intimacy. They need a partner who matches their vitality and respects their boundaries.',

    idealPartnerTraits: [
      'Independent',
      'Honest',
      'Physically Active',
      'Emotionally Secure',
      'Adventurous',
    ],

    tips: [
      'Slow down for emotional conversations. Your instinct is to solve problems quickly and move on, but emotional intimacy requires a different pace. When your partner needs to talk about feelings, resist the urge to fix and simply listen with the same focus you bring to everything else.',
      'Express tenderness alongside strength. Your partner values your energy and decisiveness, but they also need moments of softness. A gentle word, an unhurried embrace, or a moment of quiet vulnerability strengthens your bond far more than any grand adventure.',
      'Communicate your needs instead of withdrawing. When you need space, say so directly rather than pulling away without explanation. Your partner deserves to know that your withdrawal is about recharging, not distancing, and clear communication prevents the anxiety that silence creates.',
      'Create shared rituals that anchor your relationship. Metal Horses can become so focused on the next destination that they neglect the journey. Regular shared practices — morning coffee, weekly adventures, nightly check-ins — create the connective tissue that sustains love through busy seasons.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Horse's constitution combines the Horse's remarkable physical vitality with Metal's structural discipline, creating a body that is naturally strong, resilient, and capable of extraordinary sustained effort. However, the internal Fire-Metal tension — the Horse's fire constantly testing Metal's containment — creates specific health vulnerabilities that center on overexertion, cardiovascular strain, and the physical manifestations of suppressed emotion.

In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Horse's Fire nature connects to the Heart and circulatory system. This creates a health profile where both the respiratory and cardiovascular systems require attention. Metal Horses tend to push themselves physically beyond sensible limits, relying on their natural stamina to carry them through — until it cannot.

The Metal Horse's greatest health risk is the crash that follows prolonged overexertion. They run at high capacity for so long that they convince themselves it is sustainable, ignoring early warning signs until a more serious intervention — illness, injury, or emotional breakdown — forces a stop.`,

    bodyAreas: ['Heart', 'Lungs', 'Muscles and Tendons', 'Adrenal System'],

    exercises: [
      'Long-distance running or cycling',
      'Team sports',
      'High-intensity interval training',
      'Restorative yoga',
    ],

    dietTips: [
      'Fuel for sustained performance. Metal Horses need consistent, high-quality nutrition that supports their active lifestyle: complex carbohydrates, lean proteins, and healthy fats in regular intervals. Skipping meals or relying on caffeine for energy creates the boom-bust cycle that undermines their natural stamina.',
      'Include heart-protective foods: omega-3 rich fish, berries, dark leafy greens, and nuts. The Horse\'s Fire-Heart connection makes cardiovascular health a lifelong priority, and dietary support is the most accessible preventive measure.',
      'Support lung health with white foods and pungent herbs: daikon radish, garlic, ginger, pears, and almonds. The Metal element\'s connection to the Lungs means respiratory capacity directly impacts the Metal Horse\'s energy and endurance.',
      'Hydrate proactively, not reactively. The combination of high physical activity and internal fire means Metal Horses deplete fluids rapidly. Establish a hydration routine that maintains optimal levels throughout the day rather than waiting for thirst signals.',
    ],

    mentalHealth:
      'The Metal Horse\'s mental health challenge is learning to stop. Their identity is so closely tied to action, achievement, and forward movement that stillness feels threatening — as if slowing down might reveal an emptiness they are not prepared to face. This constant motion can become a form of avoidance, preventing them from processing emotions, grief, or existential questions that require quiet reflection. The most effective mental health interventions for Metal Horses are movement-based: running therapy, outdoor adventure therapy, and sport psychology approaches that integrate psychological work with physical activity. Traditional talk therapy can work if the therapist understands the Metal Horse\'s need for action and structures sessions with clear objectives and practical takeaways. The fundamental breakthrough for this sign is the recognition that rest is not the opposite of achievement but its essential complement — that the warrior who recovers strategically outperforms the one who never stops.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 3, 7],
    colors: ['White', 'Silver', 'Purple', 'Yellow'],
    direction: 'West',
    gemstones: ['White Topaz', 'Amethyst', 'Silver'],
    flowers: ['Calla Lily', 'Lavender', 'White Daisy'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL HORSES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Kristen Stewart',
        profession: 'Actress/Director',
        birthYear: 1990,
        description:
          'Kristen Stewart\'s fiercely independent career trajectory — from blockbuster franchise to acclaimed arthouse cinema — embodies the Metal Horse\'s principled refusal to be defined by others\' expectations. Her direct, unapologetic public persona and commitment to authentic self-expression reflect the sign\'s combination of courage and integrity.',
      },
      {
        name: 'Dev Patel',
        profession: 'Actor',
        birthYear: 1990,
        description:
          'Dev Patel\'s career demonstrates the Metal Horse\'s disciplined drive toward excellence. His transition from Skins to Academy Award-nominated films shows the sign\'s characteristic momentum — steady, purposeful, and gaining power with each forward stride.',
      },
      {
        name: 'Clint Eastwood',
        profession: 'Actor/Director',
        birthYear: 1930,
        description:
          'Clint Eastwood\'s legendary career — spanning seven decades of acting and directing — is the Metal Horse story written large. His iconic on-screen persona of the principled loner, combined with his disciplined directorial style and remarkable professional longevity, perfectly embodies the sign\'s union of independence, determination, and sustained productivity.',
      },
      {
        name: 'Neil Armstrong',
        profession: 'Astronaut/Engineer',
        birthYear: 1930,
        description:
          'The first human to walk on the Moon exemplifies the Metal Horse\'s combination of extraordinary courage and quiet discipline. Armstrong\'s calm precision under pressure, his principled humility after achieving history\'s greatest adventure, and his subsequent life of dignified privacy reflect the sign\'s values of action over attention.',
      },
      {
        name: 'Jennifer Lawrence',
        profession: 'Actress',
        birthYear: 1990,
        description:
          'Jennifer Lawrence\'s direct, unfiltered public personality and her reputation for physical commitment to demanding roles reflect the Metal Horse\'s characteristic blend of honest energy and disciplined craft. Her refusal to conform to Hollywood\'s expectations of public femininity embodies the sign\'s principled independence.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Horse holds the seventh position in the Chinese zodiac and is one of the most celebrated animals in Chinese culture. Associated with the earthly branch Wu (午), the hours of 11am-1pm, and the peak of yang energy at high noon, the Horse represents the zenith of active, expressive power. In Chinese military tradition, the Horse was essential to imperial expansion and defense, making it a symbol of both freedom and disciplined service.

When Metal combines with the Horse, traditional Chinese astrology describes a steed of war — the armored charger that carries its rider into battle with both courage and precision. Metal Horse years are associated with decisive action, structural reform, and the forging of new paths through principled effort. The 1930 Metal Horse year saw the rise of leaders and institutions that would shape the century ahead, reflecting the sign's association with consequential forward movement.

In Chinese folklore, the celestial Horse is said to gallop across the sky at the hour of noon, its hooves striking sparks from the heavens. The Metal Horse adds to this image the gleam of armor and the ring of iron — a celestial warrior whose charge across the sky is not random but purposeful, directed toward a destination that has been precisely chosen.`,

    symbolism: `The Metal Horse symbolizes disciplined freedom — the paradoxical fusion of wild independence with principled restraint. In Five Element symbolism, Metal represents the harvest season, when nature's abundance is gathered, processed, and preserved. Combined with the Horse's association with speed, freedom, and noon-time energy, the Metal Horse becomes a symbol of purposeful action: the charge that achieves its objective because it is guided by discipline and direction.

The image of the armored horse is central to Metal Horse symbolism. Unlike the unadorned Horse, which represents raw freedom, the Metal Horse carries the weight of its armor willingly — understanding that true strength includes the discipline to channel power rather than merely release it. The armor does not slow the Metal Horse; it focuses its impact.

In traditional Chinese art, the Metal Horse is often depicted with silver or white trappings, galloping with controlled power through autumn landscapes — a visual metaphor for energy directed by wisdom and refined by experience.`,

    modernInterpretation: `In contemporary culture, the Metal Horse archetype resonates with the concept of sustainable high performance — the ability to maintain extraordinary output over extended periods through the integration of energy and discipline. In a modern world that celebrates hustle culture and constant acceleration, the Metal Horse offers a more sophisticated model: intensity sustained by structure, passion governed by principle.

The generation born in 1990 — Metal Horse individuals now in their mid-thirties — are demonstrating this archetype in action as they reshape industries and cultural expectations. Their combination of digital-native adaptability and Metal's structural discipline positions them as effective builders in an era that desperately needs both innovation and reliability.

Modern interpretations emphasize the Metal Horse's role as a bridge between freedom and responsibility. They demonstrate that independence does not require isolation, that discipline does not require rigidity, and that the most powerful forward motion comes not from running wild but from running with purpose. The Metal Horse at their best is the person who proves that you can be both free and focused, both passionate and principled.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
