// ============================================
// METAL DRAGON (庚辰) — The Iron Emperor
// ============================================
// Metal gives the Dragon's cosmic power a cutting edge,
// forging a personality of imperial authority and precision.
// Years: 1940, 2000

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-dragon',
  profile: getProfileBySlug('metal-dragon')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Dragon is the most commanding and structurally powerful expression of the Dragon archetype. Already the most ambitious and magnetic sign in the Chinese zodiac, the Dragon becomes something truly formidable when armored in Metal. This is not the whimsical, fire-breathing Dragon of fantasy but the iron-scaled sovereign — a personality of such concentrated authority, willpower, and strategic vision that they reshape every environment they enter. Metal Dragons do not simply lead; they rule, with a natural assumption of authority that most people accept without question.

What makes the Metal Dragon extraordinary is the marriage of grand vision with tactical precision. Other Dragon variants may dream big but struggle with execution; the Metal Dragon plans with the same scope but implements with the disciplined rigor of a military campaign. They set objectives that would intimidate lesser signs, then pursue them with a methodical, step-by-step determination that transforms the impossible into the inevitable. Their success appears effortless from the outside, but it is actually the product of iron discipline and relentless effort.

Beneath the imperial exterior, Metal Dragons wrestle with the burden of their own expectations. They believe they were meant for greatness — not out of vanity but out of a deep, almost existential conviction — and anything less than extraordinary achievement feels like failure. This internal pressure drives them to remarkable accomplishments but also creates a vulnerability to burnout, isolation, and the particular loneliness of those who hold themselves apart from ordinary human limitations.`,

    coreTraits: [
      'Authoritative',
      'Visionary',
      'Disciplined',
      'Ambitious',
      'Commanding',
      'Relentless',
    ],

    strengths: [
      {
        trait: 'Imperial Presence',
        description:
          'Metal Dragons possess an authority that is felt before it is expressed. They enter rooms and the dynamic shifts — conversations realign, hierarchies reconfigure, and attention gravitates toward them as if drawn by a magnetic force. This is not performative charisma but an innate gravitas that communicates power, competence, and the expectation of respect.',
      },
      {
        trait: 'Strategic Vision',
        description:
          'The Metal Dragon sees the big picture with extraordinary clarity and the detailed path to achieve it with equal precision. They can hold a ten-year vision in mind while making decisions in the present moment that advance it incrementally. This combination of scope and specificity makes them exceptional builders of organizations, empires, and legacies.',
      },
      {
        trait: 'Unshakeable Resolve',
        description:
          'Metal Dragons do not waver once committed. They can endure opposition, setbacks, criticism, and even betrayal without losing their sense of direction. Their determination is not the desperate clinging of insecurity but the calm, absolute certainty of someone who has weighed all possibilities and chosen their path with full conviction.',
      },
      {
        trait: 'Organizational Mastery',
        description:
          'The Metal element gives the Dragon\'s natural leadership an operational dimension. Metal Dragons are not just visionaries — they are builders, architects of systems and structures that function with precision. They understand that great achievement requires not only inspiration but infrastructure, and they build both with equal care.',
      },
    ],

    challenges: [
      {
        trait: 'Domineering Nature',
        description:
          'The Metal Dragon\'s natural authority can become authoritarianism when unchecked. They may impose their will on others not out of malice but out of a genuine belief that they know best — which, while often true, creates environments where dissent is suppressed and subordinates feel diminished. The Metal Dragon must learn that true leadership empowers rather than controls.',
      },
      {
        trait: 'Emotional Inaccessibility',
        description:
          'Metal Dragons guard their emotional life with the same vigilance they apply to their strategic interests. They view vulnerability as a liability and emotional expression as a potential source of weakness. This creates a barrier to genuine intimacy, leaving partners and close friends feeling that they can never fully reach the person behind the armor.',
      },
      {
        trait: 'Perfectionist Standards',
        description:
          'Metal Dragons expect excellence from everyone, including themselves — but particularly from themselves. These impossible standards create chronic dissatisfaction, as no achievement is ever quite enough and no accomplishment is savored before the next target is identified. This relentless drive for more can rob them of the joy their achievements should bring.',
      },
      {
        trait: 'Difficulty Accepting Help',
        description:
          'Metal Dragons believe they should be capable of handling everything alone. Asking for help feels like admitting inadequacy, which conflicts with their self-image. This self-imposed isolation increases their burden and prevents them from building the collaborative relationships that could amplify their already considerable impact.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dragon is an Earth-phase animal, grounded in the stabilizing energy of the center. When Metal overlays this Earth nature, the result is profoundly reinforcing — Earth generates Metal in the productive cycle, meaning the Dragon's natural qualities directly feed and strengthen the Metal element. This creates a personality of extraordinary structural integrity, like a mountain with veins of iron running through its core.

This Earth-Metal synergy gives the Metal Dragon a solidity and permanence that other Dragon variants lack. Where the Fire Dragon burns with passionate intensity or the Water Dragon flows with adaptable power, the Metal Dragon stands immovable — a fixed point around which others orient themselves. However, this same solidity can become rigidity. The Metal Dragon's greatest growth challenge is learning to bend — to accept that their vision, however brilliant, may need adjustment, and that their authority, however earned, must be exercised with humility.

The productive Earth-Metal cycle also means that the Metal Dragon is self-reinforcing in ways that can become self-isolating. Their strength generates more strength, their authority breeds more authority, and without external influences that challenge this cycle, they can become increasingly entrenched in their own perspective.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Dragons need partners who possess genuine inner strength — not partners who compete for dominance, but those secure enough in their own identity to stand beside a personality of such commanding presence without being overwhelmed. They respect intelligence, value loyalty, and need someone who can provide honest counsel without threatening their sense of authority.

The Dragon belongs to the First Trine alongside the Rat and the Monkey — signs that share the Dragon's ambition, energy, and action-oriented approach. These natural alliances are strengthened by the Metal element's emphasis on competence and mutual respect. The Dog sits opposite the Dragon on the zodiac wheel, creating a classic tension between the Dragon's individual ambition and the Dog's collective loyalty.`,

    bestMatches: [
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 90,
        summary:
          'A supremely effective partnership of complementary strengths. The Metal Rat\'s strategic brilliance and social intelligence perfectly support the Metal Dragon\'s grand vision and commanding authority. The Rat provides the tactical finesse and information networks that the Dragon needs, while the Dragon provides the visionary scope and decisive power that the Rat admires. Shared Metal element ensures mutual respect for discipline.',
      },
      {
        slug: 'earth-monkey',
        name: 'Earth Monkey',
        score: 87,
        summary:
          'The Earth Monkey\'s clever adaptability and grounded pragmatism create a dynamic, productive partnership with the Metal Dragon. The Monkey\'s quick thinking and problem-solving abilities complement the Dragon\'s strategic vision, while the Earth element provides shared values of stability and practical achievement. The Monkey is one of the few signs resourceful enough to navigate the Dragon\'s commanding personality without feeling diminished.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 85,
        summary:
          'The Water Snake\'s deep intuition and quiet wisdom provide a counterbalance to the Metal Dragon\'s commanding energy. The Snake\'s insight and patience create a partnership where grand visions are informed by psychological depth. Water\'s cooling influence tempers Metal\'s rigidity, while the Snake\'s strategic mind matches the Dragon\'s in sophistication.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 32,
        summary:
          'The zodiac opposition between Dragon and Dog creates a fundamental clash of values. The Metal Dragon\'s imperial ambition conflicts with the Earth Dog\'s commitment to equality and collective welfare. The Dog\'s moral scrutiny feels like insubordination to the Dragon, while the Dragon\'s authoritarianism feels like tyranny to the Dog. Both are stubborn and principled, making compromise extraordinarily difficult.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 38,
        summary:
          'Two immovable Metal signs competing for control. The Metal Ox\'s steadfast refusal to yield to authority they have not sanctioned creates power struggles with the Metal Dragon\'s expectation of obedience. Neither sign backs down, and both take their positions as matters of principle, making conflict resolution nearly impossible without external mediation.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 40,
        summary:
          'Two alpha personalities battling for supremacy. The Fire Tiger\'s fierce independence and natural authority rival the Metal Dragon\'s own commanding presence. Fire melts Metal, creating a dynamic where the Tiger\'s intensity can breach the Dragon\'s defenses. Both admire strength but struggle to share the throne.',
      },
    ],

    elementAffinity: `The Metal Dragon's Earth-Metal constitution creates particularly strong bonds with signs that complement this powerful combination. Earth element signs share a grounding stability and create harmonious, mutually reinforcing partnerships. Water element signs provide the emotional depth and adaptability that softens the Metal Dragon's rigidity — Metal generates Water, meaning these relationships flow naturally. Other Metal signs create dynamics of mutual respect and shared standards, though two Metal energies can also become competing rigidities. Wood element signs may feel constrained by the Metal Dragon's controlling energy, as Metal cuts Wood. Fire element signs challenge the Metal Dragon directly — Fire melts Metal, threatening the structural control that is central to the Dragon's identity.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Dragons are born for positions of power. They possess the rare combination of grand vision, operational skill, and commanding authority that the highest levels of leadership demand. While other signs may climb organizational hierarchies through political savvy or patient accumulation, the Metal Dragon often appears to simply arrive at the top — their presence and competence making their elevation seem inevitable.

The ideal Metal Dragon career provides a platform commensurate with their ambition. They need scope — the opportunity to build something significant, to leave a lasting mark, and to exercise authority over meaningful decisions. Small roles in large organizations frustrate them; large roles in any organization energize them. They are CEOs, founders, directors, and heads of state — not because they crave titles but because they need the freedom to execute their vision at scale.

Metal Dragons struggle in subordinate roles, collaborative environments where no clear hierarchy exists, and any position that constrains their decision-making authority. They need to lead — and the organizations fortunate enough to have them at the helm benefit from leadership of unusual clarity, determination, and strategic depth.`,

    idealCareers: [
      'CEO/Founder',
      'Architect',
      'Political Leader',
      'Film Director',
      'Chief Financial Officer',
      'University President',
      'Aerospace Engineer',
      'Investment Fund Manager',
    ],

    financialStyle:
      'Metal Dragons approach wealth as both a tool for achieving their vision and a measure of their success. They are bold, strategic investors who think in decades rather than quarters, building financial empires with the same patient determination they bring to everything else. They are willing to take significant calculated risks when the potential reward aligns with their long-term vision. Their challenge is the tendency to over-invest in their own ventures at the expense of diversification, and to view financial setbacks as personal failures rather than strategic learning opportunities.',

    tips: [
      'Cultivate genuine humility. Your natural authority and frequent success can create blind spots. Surround yourself with advisors who are willing to challenge your conclusions, and reward their honesty rather than punishing their dissent.',
      'Invest in developing your successors. Metal Dragons can become so identified with their organizations that they fail to prepare for transition. Your legacy is measured not just by what you build but by whether it endures after you move on.',
      'Balance ambitious goals with present-moment leadership. Your forward-focused mind can make team members feel like instruments rather than individuals. Regular, genuine check-ins with your people build the loyalty that sustains organizations through difficulty.',
      'Accept that some goals require collaboration, not command. The most complex challenges of the modern era — climate change, global health, technological governance — require the kind of distributed leadership that does not come naturally to you. Develop the capacity to lead within networks, not just hierarchies.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Metal Dragon is a grand affair — intense, devoted, and conducted with the same scope of ambition that defines everything else in their life. When a Metal Dragon chooses a partner, they are choosing someone to share their throne — a co-ruler of the empire they intend to build together. This is not casual dating; it is the forging of an alliance that the Metal Dragon intends to last a lifetime.

The Metal Dragon's love is generous, protective, and unwavering. They will move mountains for their partner, defend them against any threat, and invest deeply in creating a life of shared achievement and material abundance. However, their love comes with expectations — high ones. They need a partner who matches their commitment, respects their ambition, and contributes to the shared vision with their own distinctive strengths.

The greatest challenge in Metal Dragon relationships is the balance of power. The Metal Dragon's natural dominance can create a dynamic where their partner feels more like a subject than an equal. The healthiest Metal Dragon relationships are those where the partner commands their own domain of excellence, creating a partnership of mutual respect between two strong individuals.`,

    loveStyle:
      'The Metal Dragon loves with the force and grandeur befitting their imperial nature. They express devotion through ambitious shared goals, material generosity, and fierce protectiveness. Their ideal relationship is a power partnership — two formidable individuals building something extraordinary together. They need a partner who inspires their respect, challenges their thinking, and maintains their own identity within the Dragon\'s considerable gravitational pull.',

    idealPartnerTraits: [
      'Confident',
      'Ambitious',
      'Emotionally Grounded',
      'Intellectually Challenging',
      'Independently Accomplished',
    ],

    tips: [
      'Create space for your partner\'s leadership. A healthy relationship cannot have only one leader. Identify areas where your partner\'s judgment is superior to yours, and defer to them genuinely — not as a performance of humility but as an authentic recognition of their strengths.',
      'Express vulnerability as an act of trust. The Metal Dragon who can tell their partner "I am struggling" or "I need you" builds a deeper bond than any amount of strength and provision can achieve. Vulnerability with someone you trust is not weakness — it is the ultimate act of courage.',
      'Listen to understand, not to solve. When your partner shares difficulties, they do not always want your commanding solution. Sometimes they need your presence, your empathy, and the rare sight of the Iron Emperor simply being human beside them.',
      'Celebrate your partner\'s independent achievements. The Metal Dragon\'s identity can become so dominant that their partner\'s accomplishments are overshadowed. Actively spotlight and celebrate what your partner achieves on their own — it strengthens both them and the relationship.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Dragon possesses formidable physical vitality — their Earth-Metal constitution creates a body of unusual strength and endurance. However, their relentless drive and refusal to acknowledge physical limitations make them vulnerable to the health consequences of chronic overwork and sustained stress.

In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Dragon's Earth nature connects to the Spleen and Stomach. The Metal Dragon's health vulnerabilities center on these systems, with particular susceptibility to stress-related digestive issues, respiratory problems during periods of emotional suppression, and the cardiovascular consequences of sustained high-pressure leadership.

The Metal Dragon's greatest health risk is the belief that they are invulnerable. They push through illness, ignore warning signs, and view rest as a luxury they cannot afford. Their health improves dramatically when they accept that maintaining their physical well-being is not self-indulgence but strategic necessity — the foundation upon which their ambitious life depends.`,

    bodyAreas: ['Lungs', 'Stomach', 'Spine', 'Large Intestine'],

    exercises: [
      'Power lifting and strength training',
      'Dragon boat racing or rowing',
      'Mountain climbing',
      'Tai chi for balance',
    ],

    dietTips: [
      'Support the Spleen-Stomach axis with warm, nourishing foods. Metal Dragons benefit from regular, substantial meals that include root vegetables, whole grains, and quality proteins. Irregular eating patterns — common when absorbed in work — disrupt the Earth element\'s digestive balance.',
      'Incorporate foods that support lung function: pears, radishes, almonds, and white mushrooms. The Metal element\'s connection to the Lungs means respiratory health directly impacts the Dragon\'s energy levels and emotional well-being.',
      'Reduce foods that create internal heat and stagnation. The Metal Dragon\'s intense nature already generates substantial internal heat — rich, heavy meals and excessive alcohol amplify this, potentially leading to inflammation and digestive distress.',
      'Maintain hydration as a non-negotiable priority. The Metal element tends toward dryness, and the Dragon\'s high-output lifestyle accelerates fluid depletion. Adequate water intake, supplemented with herbal teas, supports both respiratory and digestive health.',
    ],

    mentalHealth:
      'The Metal Dragon\'s mental health challenge is the weight of self-imposed expectations. They carry a sense of destiny that, while motivating, creates enormous internal pressure. When reality falls short of their vision — as it inevitably must at times — the Metal Dragon can experience a profound crisis of identity that manifests as depression, rage, or withdrawal. Executive coaching and therapy approaches that respect their need for agency and strategic framing are most effective. The Metal Dragon responds to interventions that feel like optimization rather than treatment — reframing mental health care as performance enhancement rather than crisis management. Physical activity, particularly practices that combine power with mindfulness (tai chi, yoga for athletes, martial arts), provides essential relief from the mental intensity of constant strategic thinking. The most important insight for a Metal Dragon\'s mental well-being is that greatness does not require perfection, and that their worth is not measured solely by their achievements.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 6, 7],
    colors: ['White', 'Gold', 'Silver', 'Gray'],
    direction: 'West',
    gemstones: ['Diamond', 'White Sapphire', 'Platinum Ore'],
    flowers: ['Dragon Orchid', 'White Peony', 'Magnolia'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL DRAGONS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'John Lennon',
        profession: 'Musician/Peace Activist',
        birthYear: 1940,
        description:
          'John Lennon\'s visionary artistry and uncompromising creative authority exemplify the Metal Dragon\'s combination of grand ambition and principled determination. His insistence on using his platform for social change — from "Imagine" to the Montreal Bed-In — reflects the Dragon\'s belief that true power serves a purpose larger than itself.',
      },
      {
        name: 'Bruce Lee',
        profession: 'Martial Artist/Actor',
        birthYear: 1940,
        description:
          'Bruce Lee was the Metal Dragon incarnate — a figure of such concentrated power, discipline, and visionary ambition that he single-handedly transformed both martial arts and cinema. His philosophy of absorbing what is useful and discarding what is not reflects Metal\'s essential nature: cutting away excess to reveal pure, functional form.',
      },
      {
        name: 'Al Pacino',
        profession: 'Actor',
        birthYear: 1940,
        description:
          'Al Pacino\'s commanding screen presence and intensity of performance embody the Metal Dragon\'s imperial authority. His portrayal of powerful, complex characters — from Michael Corleone to Tony Montana — reflects the sign\'s natural affinity for roles of dominance, ambition, and uncompromising will.',
      },
      {
        name: 'Jack Nicklaus',
        profession: 'Professional Golfer',
        birthYear: 1940,
        description:
          'The Golden Bear\'s record 18 major championship victories represent the Metal Dragon\'s relentless pursuit of excellence over decades. Nicklaus\'s strategic approach to golf, his competitive longevity, and his authoritative presence in every tournament reflect the sign\'s combination of visionary ambition and disciplined execution.',
      },
      {
        name: 'Pelé',
        profession: 'Football Legend',
        birthYear: 1940,
        description:
          'Pelé — widely regarded as the greatest footballer of all time — embodied the Metal Dragon\'s extraordinary combination of natural gifts and tireless determination. His three World Cup victories and over 1,200 career goals represent the kind of imperial achievement that defines this sign\'s potential.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dragon is the most exalted creature in Chinese mythology — the only supernatural animal in the zodiac and the symbol of imperial power itself. For millennia, the Dragon was the exclusive emblem of the Chinese emperor, and claiming Dragon symbolism without imperial authority was a capital offense. The Dragon represents the ultimate yang energy: cosmic power, celestial authority, and the ability to command the forces of nature.

When Metal joins this cosmic creature, the result is the most structurally powerful sign in the entire sixty-year cycle. Metal gives the Dragon's celestial power a tangible form — forging heavenly ambition into earthly authority. In traditional Chinese astrology, Metal Dragon years are associated with the rise of empires, the construction of lasting institutions, and decisive moments in the history of civilizations. The 1940 Metal Dragon year, for example, witnessed the early stages of transformations that would reshape the entire global order.

The Metal Dragon's mythological significance extends to the concept of the "Iron Dragon Throne" — the idea that true authority is not inherited or claimed but forged through the combination of heavenly mandate and earthly discipline. The Metal Dragon earns their sovereignty not through birth but through the sheer force of their competence and will.`,

    symbolism: `The Metal Dragon symbolizes forged sovereignty — power that is both cosmic in origin and materially real. In Five Element symbolism, Metal represents the tools of civilization: the blade that harvests, the coin that trades, the armor that protects. Combined with the Dragon's association with celestial authority, the Metal Dragon becomes a symbol of divine power made practical — heaven's mandate executed with earthly precision.

The Dragon's five claws — the mark of the imperial Dragon in Chinese art — take on additional significance when rendered in Metal. They become not just symbols of authority but instruments of it: sharp, precise, and capable of shaping the world through direct action. The Metal Dragon does not merely symbolize power; it exercises it.

In traditional feng shui, the Metal Dragon represents the concentration of authority and prosperity in a single, commanding point. It is the sign associated with the axis of power — the place where vision, discipline, and authority converge to create lasting change.`,

    modernInterpretation: `In contemporary culture, the Metal Dragon archetype resonates with the concept of transformative leadership — the individual whose combination of vision, authority, and operational skill creates institutions and movements that outlast their founder. In business, this is the empire-building CEO; in technology, the platform creator; in culture, the artist who defines an era.

The generation born in the 2000 Metal Dragon year is coming of age in a world that desperately needs structural leadership. As they enter positions of influence, they carry the Metal Dragon's characteristic blend of ambition and discipline into challenges — climate change, technological governance, institutional reform — that require exactly the long-term strategic thinking and decisive authority that this sign embodies.

Modern interpretations increasingly emphasize the Metal Dragon's potential pitfall: the risk that concentrated authority becomes isolated authority. The most effective Metal Dragon leaders of the contemporary era are those who combine their natural command with genuine collaboration, who build diverse leadership teams rather than ruling alone, and who measure their legacy not by personal achievement but by the strength of the systems they leave behind.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
