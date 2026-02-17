// ============================================
// FIRE DRAGON (丙辰) — The Celestial Blaze
// ============================================
// Fire supercharges the Dragon's already legendary power
// and ambition, creating a visionary of supreme confidence
// whose presence reshapes everything it touches.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-dragon',
  profile: getProfileBySlug('fire-dragon')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Dragon is the most powerful and awe-inspiring combination in the Chinese zodiac. The Dragon — the only mythical creature in the twelve-animal cycle and already the sign of supreme authority, ambition, and cosmic significance — is elevated to its absolute peak by the Fire element. If the standard Dragon commands a room, the Fire Dragon commands the horizon. Their presence is not merely felt; it is experienced as a force of nature that rearranges the priorities and perspectives of everyone around them.

What distinguishes the Fire Dragon from other Dragon variants is the sheer scale of their vision and the volcanic intensity with which they pursue it. All Dragons dream big, but the Fire Dragon dreams on a civilizational scale — and possesses the charisma, energy, and absolute self-belief to rally others to their cause. They do not ask for permission, wait for consensus, or limit their ambitions to what seems reasonable. The Fire Dragon operates from a fundamental conviction that they are destined for extraordinary things, and this conviction, far from being mere arrogance, is often validated by results that lesser signs could never achieve.

Yet this same magnitude carries proportional risks. The Fire Dragon's supreme confidence can harden into tyrannical self-importance. Their refusal to accept limitations can lead to catastrophic overreach. And their inability to tolerate contradiction can isolate them from the honest counsel they desperately need. The Fire Dragon's journey is one of learning that true power is not the ability to dominate but the wisdom to know when to lead, when to listen, and when to step aside — a lesson that this sign finds profoundly difficult to learn.`,

    coreTraits: [
      'Visionary',
      'Commanding',
      'Ambitious',
      'Charismatic',
      'Proud',
      'Decisive',
    ],

    strengths: [
      {
        trait: 'Visionary Leadership',
        description:
          'The Fire Dragon sees possibilities that are invisible to others. Their ability to envision grand outcomes — and to communicate those visions with such conviction that others believe them too — is unmatched in the zodiac. They do not merely set goals; they define eras, establish movements, and create legacies that outlast their own involvement.',
      },
      {
        trait: 'Supreme Confidence',
        description:
          'The Fire Dragon possesses a self-belief so total and unwavering that it functions as a gravitational force, pulling resources, opportunities, and people into their orbit. This is not performative confidence; it radiates from their core. In crisis situations, the Fire Dragon\'s absolute composure and certainty becomes the anchor that prevents collective panic.',
      },
      {
        trait: 'Transformative Energy',
        description:
          'The Fire Dragon does not improve things incrementally; they transform them utterly. Their combination of vision, energy, and willpower allows them to reimagine entire systems, industries, and institutions from the ground up. They are the architects of new worlds, possessed of both the imagination to conceive them and the force to construct them.',
      },
      {
        trait: 'Magnetic Authority',
        description:
          'People follow Fire Dragons not because they are told to but because the Dragon\'s presence creates an almost irresistible pull toward their vision. This magnetic authority combines personal charisma with genuine competence, creating leaders who inspire not just obedience but genuine devotion. The Fire Dragon at their best makes everyone around them perform beyond their perceived limits.',
      },
    ],

    challenges: [
      {
        trait: 'Arrogance',
        description:
          'The Fire Dragon\'s supreme self-confidence can easily cross into destructive arrogance. They may dismiss valid criticism, underestimate opponents, and overestimate their own capabilities. This blindspot is particularly dangerous because the Fire Dragon\'s track record of success makes them genuinely difficult to challenge — until the one miscalculation that their arrogance prevented them from seeing.',
      },
      {
        trait: 'Tyrannical Control',
        description:
          'Fire Dragons can become oppressively controlling, demanding absolute loyalty and total compliance from those around them. Their vision is so clear to them that any deviation feels like betrayal, and their power is so considerable that resistance feels futile. This creates environments of fear rather than inspiration, eventually driving away the very talent the Dragon needs.',
      },
      {
        trait: 'Inability to Delegate',
        description:
          'The Fire Dragon believes — often correctly — that no one can execute their vision as well as they can. This makes genuine delegation almost impossible. They micromanage, override decisions, and take over tasks at the slightest sign of imperfection. The result is exhaustion for the Dragon and demoralization for everyone else.',
      },
      {
        trait: 'Emotional Isolation',
        description:
          'The Fire Dragon\'s power and intensity can create a profound loneliness. Few people feel comfortable being fully honest with someone of such formidable presence, and the Dragon\'s own pride prevents them from showing vulnerability. This isolation means that the Fire Dragon often faces their greatest challenges without the support and counsel they need.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dragon is associated with the Earth element in its native state — representing the stabilizing, nurturing force of the land itself. When Fire is added to this Earth-natured animal, the productive cycle is activated: Fire generates Earth. This is the same harmonious relationship found in the Fire Ox, but the Dragon's already mythical nature amplifies the effect exponentially. Where the Fire Ox becomes a relentless forge, the Fire Dragon becomes a celestial furnace — a source of transformative power on a cosmic scale.

This Fire-Earth productive dynamic gives the Fire Dragon their characteristic sense of groundedness within their intensity. Unlike pure Fire signs that can feel untethered and volatile, the Fire Dragon's Earth nature provides a foundation that channels their fire into lasting structures rather than fleeting displays. They build things — organizations, movements, legacies — that endure. However, the risk is that this same dynamic can create an unbending rigidity: once the Fire Dragon has forged their vision into reality, they resist any force that might reshape it. The Earth within them hardens under Fire's sustained heat, becoming volcanic rock — immensely strong but dangerously inflexible.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Dragon's compatibility is the most challenging puzzle in the zodiac. They need a partner of extraordinary quality — someone strong enough to earn their respect, wise enough to tell them the truth, and secure enough not to be obliterated by their intensity. The ideal Fire Dragon partner is not submissive but diplomatically powerful, providing honest counsel wrapped in enough respect and tact that the Dragon can actually hear it.

Traditional Chinese astrology places the Dragon in the "Water Trine" alongside the Rat and the Monkey — animals that share the Dragon's ambition, intelligence, and appetite for success. These three signs form powerful alliances based on mutual admiration and complementary capabilities. The Dragon's greatest challenge comes from the Dog, which sits in direct opposition and represents the principled, egalitarian values that clash with the Dragon's hierarchical worldview.`,

    bestMatches: [
      {
        slug: 'fire-rat',
        name: 'Fire Rat',
        score: 90,
        summary:
          'A powerhouse partnership where the Rat\'s strategic brilliance complements the Dragon\'s grand vision. The Fire Rat is one of the few signs clever and confident enough to counsel the Fire Dragon without threatening their ego. The Rat provides tactical intelligence and social acumen that translates the Dragon\'s sweeping ambitions into actionable plans. Mutual Fire creates passionate connection and shared drive.',
      },
      {
        slug: 'wood-monkey',
        name: 'Wood Monkey',
        score: 87,
        summary:
          'The Wood Monkey\'s creative ingenuity and adaptive intelligence delights the Fire Dragon, who values brilliance above almost everything else. The Monkey is one of the few signs nimble enough to keep pace with the Dragon\'s rapid thinking while adding innovations the Dragon would not have conceived alone. Wood\'s flexibility helps the Monkey navigate the Dragon\'s intensity without being crushed.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 85,
        summary:
          'The Water Snake offers the Fire Dragon something rare and invaluable: honest counsel delivered with such subtlety and intelligence that the Dragon actually listens. The Snake\'s strategic depth and emotional perceptiveness complement the Dragon\'s bold vision, while Water\'s cooling influence tempers Fire\'s excesses without extinguishing them. This is often the most effective advisory partnership in the zodiac.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 28,
        summary:
          'The Earth Dog\'s egalitarian principles and instinct to question authority directly challenges the Fire Dragon\'s hierarchical worldview. The Dog sees the Dragon\'s confidence as arrogance; the Dragon sees the Dog\'s criticism as disloyalty. Both signs are deeply principled but from fundamentally different moral frameworks, creating conflicts that feel existential rather than merely personal.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 35,
        summary:
          'Two Fire Dragons create a relationship of extraordinary power and equally extraordinary conflict. Both demand to lead, both refuse to yield, and both possess the intensity to sustain prolonged power struggles. The initial attraction is intoxicating — each finally meeting someone who matches their scale — but the daily reality of two supreme egos sharing one life proves unsustainable without extraordinary maturity.',
      },
      {
        slug: 'metal-tiger',
        name: 'Metal Tiger',
        score: 40,
        summary:
          'Both the Dragon and the Tiger are natural leaders who command through force of personality, creating inevitable power struggles. The Metal Tiger\'s fierce independence and refusal to follow anyone clashes with the Fire Dragon\'s expectation of loyalty and deference. Metal\'s sharpness wounds Fire\'s pride, and the resulting conflicts are dramatic, public, and deeply damaging to both parties.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Earth animal, the Fire Dragon navigates elemental relationships from a position of considerable power. Water element signs provide the most valuable influence — Water controls Fire in the destructive cycle, which normally feels threatening, but the Dragon\'s Earth nature actually benefits from Water\'s nourishing quality (Water feeds growth). This makes Water element partners uniquely positioned to temper the Fire Dragon without diminishing them. Wood element signs fuel Fire's intensity through the productive cycle, creating energizing but potentially volatile partnerships. Earth element signs offer comfortable resonance but risk creating too much stubbornness in the relationship. Metal element signs, produced by Earth, can form strong alliances of shared discipline, though Metal\'s critical nature requires careful navigation around the Dragon\'s sensitive pride.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Dragon is built for the highest levels of leadership. They do not seek authority — they assume it, naturally and inevitably, as though the universe itself has assigned them the role. They excel in positions that require vision, decisiveness, and the ability to inspire large-scale collective action. Whether running a multinational corporation, leading a nation, or building a cultural movement, the Fire Dragon operates at a scale that would overwhelm most other signs.

The ideal Fire Dragon career provides three things: power, purpose, and legacy. They need the authority to make decisions of consequence, a mission that justifies the scale of their ambition, and the knowledge that their work will outlast them. Pure money-making without purpose bores them; purpose without power frustrates them; and power without legacy feels hollow.

Financially, Fire Dragons are spectacular earners who think in terms of wealth creation rather than salary. They are natural entrepreneurs and empire builders who generate wealth through vision and execution at scale. Their financial risk is grandiosity — spending as if their vision has already been realized, investing in projects based on ambition rather than analysis, and maintaining a lifestyle that signals their status even during lean periods.`,

    idealCareers: [
      'CEO or Founder',
      'Political Leader',
      'Film Producer',
      'Architect of Mega-Projects',
      'Investment Fund Manager',
      'University President',
      'Tech Visionary',
      'Cultural Institution Director',
    ],

    financialStyle:
      'Fire Dragons think in empires, not paychecks. They are attracted to large-scale wealth creation through entrepreneurship, investment, and leadership of major enterprises. Their financial intuition is often remarkable — they can sense market shifts and cultural trends before they become obvious. The risk is scale-related hubris: overextending based on confidence rather than capital, making financial commitments that assume continued growth, and spending lavishly as a symbol of status rather than genuine need. The Fire Dragon who pairs their bold vision with disciplined financial management becomes extraordinarily wealthy; the one who relies on vision alone risks spectacular, public failure.',

    tips: [
      'Hire people who will tell you the truth. Your greatest professional liability is isolation from honest feedback. Deliberately surround yourself with advisors who have the courage and security to challenge your assumptions — and then actually listen to them, even when it stings.',
      'Learn the difference between vision and ego. Not every resistance to your plans is a failure of understanding — sometimes your plan is wrong. Practice distinguishing between people who cannot see your vision and people who see legitimate flaws in it.',
      'Build systems that survive your absence. Your organizations should be able to function without you, not because you are replaceable but because resilient systems magnify your impact rather than depending on your presence. The greatest leaders build legacies that outlast their direct involvement.',
      'Master the art of strategic patience. Your instinct is to move immediately on every grand idea, but the best opportunities often require timing. The Fire Dragon who can hold a vision without acting on it prematurely — waiting for the moment when resources, markets, and people align — achieves results that impulsive action never could.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Fire Dragon is an experience of extraordinary scale. They love the way they do everything else — grandly, intensely, and with the complete conviction that this relationship is the most significant event in both their lives. When a Fire Dragon chooses a partner, they offer a level of devotion, protection, and ambition-on-their-behalf that can feel overwhelming in its scope. Being loved by a Fire Dragon means being lifted into a larger world.

The Fire Dragon's romantic challenge is equality. They naturally dominate every dynamic, and romantic relationships are no exception. Even with the best intentions, they tend to make decisions for the couple, assume their vision for the relationship's future is shared, and express love through providing and protecting rather than through the vulnerability and mutuality that deep partnership requires.

The deepest Fire Dragon relationships are forged when this sign meets someone who earns their rare, complete respect. The Fire Dragon who finds a partner they consider a true equal — someone whose strength, intelligence, or character genuinely impresses them — discovers a capacity for devotion and partnership that surprises even themselves. This partnership is no longer a kingdom with a single ruler but an alliance of two powerful beings, and for the Fire Dragon, that is the greatest adventure of all.`,

    loveStyle:
      'The Fire Dragon loves with grand ambition and fierce devotion. They are generous, protective, and determined to build an extraordinary life with their partner. Their love language is acts of service at the grandest scale — providing security, creating opportunities, and constructing a shared world of abundance and achievement. They need a partner who can receive this generosity without being diminished by it and who brings their own power and vision to the relationship.',

    idealPartnerTraits: [
      'Confident',
      'Intellectually Formidable',
      'Emotionally Grounded',
      'Independent',
      'Diplomatically Honest',
    ],

    tips: [
      'Practice asking instead of deciding. Your instinct is to know what is best for the relationship and to act accordingly, but true partnership requires joint decision-making. Ask your partner\'s opinion — and be genuinely prepared to defer to it sometimes.',
      'Show vulnerability as a gift, not a weakness. Your partner needs to see your fears, doubts, and uncertainties to truly know you. The Fire Dragon who can say "I don\'t know" or "I\'m afraid" gives their partner access to a depth of intimacy that their confident exterior normally conceals.',
      'Celebrate your partner\'s independent achievements. Their successes are not extensions of your kingdom — they are their own accomplishments. Show genuine pride in your partner\'s independent capabilities, and resist the urge to take credit or provide unsolicited direction.',
      'Create space for your partner to lead. In daily life, let your partner choose restaurants, plan vacations, and make household decisions. The small act of following someone else\'s lead builds the equality that sustains a Fire Dragon relationship for the long term.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Dragon's health profile reflects their extraordinary vitality and their equally extraordinary resistance to acknowledging vulnerability. In Traditional Chinese Medicine, the Dragon's Earth nature governs the Spleen, Stomach, and the body's capacity to transform nourishment into energy. Fire's influence on this foundation creates a metabolism of tremendous power — the Fire Dragon can sustain levels of activity and stress that would break other signs.

The paradox of Fire Dragon health is that their very resilience becomes their greatest risk. They can function at high intensity for so long that they normalize extreme stress, ignoring warning signals that their body sends with increasing urgency. Cardiovascular conditions, digestive inflammation, and stress-related hormonal imbalances are common Fire Dragon health challenges — all reflecting a system that has been running too hot for too long without adequate cooling.

The Fire Dragon's health turning point often comes as a dramatic event — a health scare, a collapse, or a diagnosis that finally forces them to acknowledge that even they have physical limits. The most fortunate Fire Dragons reach this realization before crisis strikes, building health practices that honor their intense nature while preventing the burnout that otherwise awaits.`,

    bodyAreas: ['Heart', 'Stomach', 'Spleen', 'Blood Pressure'],

    exercises: [
      'Swimming for cardiovascular health',
      'Golf or archery for strategic focus',
      'Yoga for flexibility and stress reduction',
      'Strength training',
    ],

    dietTips: [
      'Prioritize heart-healthy nutrition: omega-3 rich fish, olive oil, nuts, and abundant vegetables. The Fire Dragon\'s cardiovascular system bears the brunt of their intense lifestyle and requires proactive nutritional support.',
      'Moderate rich, heavy foods that satisfy the Dragon\'s appetite for luxury but burden the digestive system. Balance celebratory meals with lighter, cleaner eating during regular days.',
      'Support the Spleen-Stomach system with warm, cooked meals eaten at consistent times. The Fire Dragon\'s tendency to eat irregularly — skipping meals during intense work periods, then feasting at grand dinners — creates digestive patterns that accumulate damage over time.',
      'Reduce sodium and monitor blood pressure. The Fire Dragon\'s stress levels and tendency toward rich food create a predisposition to hypertension that responds well to dietary management when addressed early.',
    ],

    mentalHealth:
      'The Fire Dragon\'s mental health is tied to their sense of purpose and control. They function at their psychological best when pursuing a grand vision with adequate resources and authority. Depression in Fire Dragons rarely looks like conventional sadness — it manifests as fury, restlessness, or a terrifying sense of meaninglessness when they feel their power is insufficient to achieve their goals. The Fire Dragon benefits from executive coaching or mentoring relationships rather than traditional therapy — they need a guide they respect, not someone they perceive as treating a weakness. Mindfulness practices that frame mental stillness as strategic mastery rather than relaxation are more likely to be adopted: meditation as mental discipline, journaling as strategic clarity, and retreat as preparation for the next advance. The Fire Dragon who learns that vulnerability is the highest form of courage — not a concession to weakness — achieves a psychological integration that makes them not just powerful but wise.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 6, 7],
    colors: ['Gold', 'Scarlet', 'Imperial Red'],
    direction: 'South',
    gemstones: ['Ruby', 'Dragon\'s Blood Jasper', 'Citrine'],
    flowers: ['Dragon Flower', 'Red Peony', 'Lotus'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE DRAGONS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Benedict Cumberbatch',
        profession: 'Actor',
        birthYear: 1976,
        description:
          'Benedict Cumberbatch\'s commanding screen presence and ability to portray characters of supreme intelligence and authority reflects the Fire Dragon\'s natural gravitas. From Sherlock Holmes to Doctor Strange, his career embodies the Dragon\'s affinity for larger-than-life roles that demand both intellectual brilliance and magnetic charisma.',
      },
      {
        name: 'Reese Witherspoon',
        profession: 'Actress/Producer',
        birthYear: 1976,
        description:
          'Reese Witherspoon transformed herself from actress to media mogul, building a production empire that champions women\'s stories with the Fire Dragon\'s characteristic combination of vision and execution. Her refusal to wait for Hollywood to change, choosing instead to build her own platform, exemplifies the Dragon\'s instinct to create rather than petition.',
      },
      {
        name: 'Peyton Manning',
        profession: 'Football Quarterback',
        birthYear: 1976,
        description:
          'Peyton Manning\'s legendary preparation, commanding presence on the field, and cerebral approach to quarterbacking embody the Fire Dragon\'s fusion of intellectual mastery and competitive fire. His ability to read defenses and control the game reflected the Dragon\'s instinct to lead through superior vision and decisive action.',
      },
      {
        name: 'Anna Pavlova',
        profession: 'Ballerina',
        birthYear: 1916,
        description:
          'Anna Pavlova revolutionized ballet and brought dance to audiences worldwide with a passion and dedication that transcended her era. Her tireless touring and commitment to her art form reflect the Fire Dragon\'s insistence on sharing their vision with the world, refusing to let geography or convention limit their impact.',
      },
      {
        name: 'Alicia Keys',
        profession: 'Musician/Activist',
        birthYear: 1976,
        description:
          'Alicia Keys\'s extraordinary musical talent, combined with her passionate social activism and media presence, embodies the Fire Dragon\'s belief that greatness comes with responsibility. Her ability to move between artistic excellence and social impact reflects the Dragon\'s conviction that true power serves a purpose larger than personal success.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dragon occupies the most exalted position in Chinese mythology — it is the only mythical creature in the zodiac, the symbol of the Emperor, and the embodiment of cosmic power itself. Unlike Western dragons, the Chinese Dragon (Long) is a benevolent force of nature associated with rainfall, rivers, and the life-giving power of water from the heavens. The Dragon represents the ultimate expression of yang energy: creative, commanding, and cosmically significant.

When Fire is added to this already supreme creature, the mythological significance reaches its absolute zenith. The Fire Dragon appears in Chinese cosmology as the dragon of the sun — the celestial being who carries the solar fire across the heavens and whose breath creates the aurora. In imperial mythology, the Fire Dragon was associated with the founding of dynasties and the arrival of transformative leaders whose reign would reshape civilization itself.

The combination of Fire and Dragon has deep significance in Daoist alchemy as well. The Dragon represents the yang principle in its most refined form, and Fire represents the transformative process that purifies and elevates. The Fire Dragon thus symbolizes the ultimate alchemical achievement: the transformation of base nature into something transcendent and eternal.`,

    symbolism: `The Fire Dragon symbolizes supreme creative power — the force that brings worlds into being through the fusion of vision and will. In traditional Wu Xing symbolism, this is the productive cycle elevated to its highest expression: Fire generating Earth, but on a cosmic scale. The Fire Dragon does not merely create; it creates creation itself — the conditions, structures, and energies from which all subsequent growth emerges.

The Fire Dragon is also the ultimate symbol of legitimate authority. In Chinese imperial tradition, only the Emperor could use the five-clawed dragon as a personal symbol, and the Fire Dragon specifically represented the Emperor at the height of his power — commanding both the mandate of heaven (Fire, the celestial element) and the resources of Earth (the Dragon's native element). This combination suggests authority that is both divinely inspired and practically grounded.

In the cycle of transformation, the Fire Dragon represents the moment of ignition — the instant when potential becomes actual, when vision becomes reality, when the spark catches and everything changes. This makes the Fire Dragon the symbol of founding moments: the beginning of empires, the birth of movements, and the inception of ideas that reshape human civilization.`,

    modernInterpretation: `In contemporary culture, the Fire Dragon archetype appears in the founders, visionaries, and cultural architects who shape the world through bold action and unshakable conviction. The Fire Dragon years of 1916 and 1976 produced individuals who came to define excellence and authority in their respective fields — leaders whose influence extended far beyond their immediate domains.

The 1976 generation of Fire Dragons came of age during the digital revolution and brought their sign's characteristic combination of grand vision and commanding presence to an era that rewarded both. This generation produced tech entrepreneurs, media moguls, and cultural innovators who did not merely participate in the digital transformation but led it — building platforms, companies, and cultural movements that reshaped how humanity communicates, works, and creates.

For modern Fire Dragons, the central challenge is wielding their considerable power responsibly in an era that is increasingly skeptical of concentrated authority. The most effective contemporary Fire Dragons learn to channel their leadership through collaborative structures and shared governance — maintaining their visionary role while distributing power in ways that build resilient organizations rather than personal kingdoms. The Fire Dragon who masters this balance becomes the rare leader who is both powerful and beloved — a legacy-builder in the truest sense.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
