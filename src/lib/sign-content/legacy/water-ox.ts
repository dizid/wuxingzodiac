// ============================================
// WATER OX (壬丑) — The Deep Current
// ============================================
// The Water Ox combines the Ox's legendary endurance and
// determination with Water's patience, depth, and intuitive
// flow — producing a quietly unstoppable force that reshapes
// landscapes through persistent, gentle pressure.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-ox',
  profile: getProfileBySlug('water-ox')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Ox is the most emotionally intelligent and approachable of all Ox variants. Where the Ox is typically defined by stubborn determination and methodical discipline, the Water element introduces a current of flexibility, empathy, and intuitive understanding that softens the Ox's rigid edges without weakening its formidable core. The Water Ox does not simply endure — it flows steadily toward its goals with the patient, inexorable force of a river carving through stone.

What makes the Water Ox remarkable is the harmony between seemingly contradictory qualities. They possess the Ox's legendary work ethic and reliability while also demonstrating a sensitivity to others' feelings and a willingness to adapt that more rigid Ox variants lack. They can read the emotional temperature of a room and adjust their approach accordingly — a skill that makes them far more effective leaders and collaborators than their stubborn reputation might suggest. The Water Ox leads through quiet influence rather than forceful command.

Beneath their calm, dependable exterior runs a deep emotional river. Water Oxen feel things profoundly but process these feelings internally, rarely displaying the turmoil that sometimes churns within. This emotional depth gives them a compassionate wisdom that earns deep trust from those around them. However, it also means they carry burdens silently, absorbing stress and pain until it manifests in physical tension or unexpected emotional release. The Water Ox's greatest growth lies in learning that vulnerability is not weakness but a form of strength their patient nature is uniquely suited to master.`,

    coreTraits: [
      'Patient',
      'Dependable',
      'Empathetic',
      'Methodical',
      'Resilient',
      'Intuitive',
    ],

    strengths: [
      {
        trait: 'Unwavering Reliability',
        description:
          'When a Water Ox commits to something — a project, a relationship, a promise — it is as certain as the tide. They follow through with a consistency that borders on the legendary. Colleagues, friends, and family know they can depend on the Water Ox absolutely, and this reliability becomes the foundation upon which entire teams, businesses, and families are built.',
      },
      {
        trait: 'Patient Persistence',
        description:
          'The Water Ox understands that the most profound achievements come not from explosive effort but from sustained, patient application over time. They are willing to invest years in a goal that others would abandon after months. This long-term perspective, combined with Water\'s adaptive patience, makes them extraordinarily effective at building lasting legacies.',
      },
      {
        trait: 'Diplomatic Strength',
        description:
          'Unlike more combative Ox variants, the Water Ox achieves results through diplomacy and careful persuasion. They can hold firm positions while remaining open to input, a combination that makes them exceptional negotiators and leaders. People follow the Water Ox not because they fear opposition but because they trust the Ox\'s judgment and feel genuinely heard.',
      },
      {
        trait: 'Emotional Depth',
        description:
          'The Water element grants the Ox a rich inner life and genuine capacity for empathy. Water Oxen form deep, meaningful bonds with those they let into their inner circle. They remember kindnesses for decades, offer support during others\' darkest moments, and provide a steadfast emotional anchor that their loved ones come to depend upon completely.',
      },
    ],

    challenges: [
      {
        trait: 'Emotional Suppression',
        description:
          'The Water Ox\'s instinct is to absorb rather than express. They swallow frustration, sadness, and anger in the name of maintaining stability, creating an internal pressure that can eventually erupt in unexpected and disproportionate ways. Partners and colleagues may be blindsided by outbursts from someone they perceived as endlessly calm.',
      },
      {
        trait: 'Resistance to Change',
        description:
          'While the Water element makes this Ox more flexible than other variants, they still carry the animal\'s deep-seated resistance to change. Water Oxen establish routines and systems that work well, then cling to them long past their expiration date. They may stay in jobs, relationships, or cities that no longer serve them simply because change requires a kind of disruption their steady nature finds deeply uncomfortable.',
      },
      {
        trait: 'Overextended Caretaking',
        description:
          'The Water Ox\'s combination of reliability and empathy means they often become the person everyone depends on. They take on others\' burdens willingly but fail to set boundaries, gradually accumulating responsibilities until they are carrying far more than is sustainable. Learning to say no — and meaning it — is essential to preventing the exhaustion that comes from chronic over-giving.',
      },
      {
        trait: 'Passive Stubbornness',
        description:
          'The Water Ox\'s stubbornness manifests not as aggressive confrontation but as quiet, immovable resistance. When they disagree, they may simply stop engaging — nodding along while privately refusing to budge. This passive form of obstinacy can be more frustrating for partners and colleagues than open defiance, as it leaves little room for productive negotiation.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Ox is associated with Earth energy — grounded, stable, and enduring. When Water is layered onto this Earth-natured animal, the combination follows the controlling cycle: Earth dams and directs Water, while Water erodes and softens Earth. This tension creates a personality of productive internal friction — the Water Ox's steadfast Earth nature provides structure for their flowing Water emotions, while Water's adaptability prevents Earth from becoming rigid and lifeless.

This Earth-Water dynamic gives the Water Ox a unique gift: the ability to contain and channel their considerable emotional depth into constructive, sustained action. Where pure Water signs may drift and pure Earth signs may stagnate, the Water Ox combines flow with foundation. They are the river that stays within its banks — powerful, purposeful, and capable of sustaining life wherever they pass. The key to the Water Ox's well-being is maintaining this balance: enough structure to provide direction, enough flow to prevent calcification.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Ox seeks partners who value stability and depth as much as they do. They are drawn to patient, loyal personalities who appreciate the Water Ox's steady devotion and are willing to invest the time required to earn their full trust. The Ox belongs to the Second Trine alongside the Snake and the Rooster — signs that share a love of methodical planning, hard work, and achieving tangible results. These natural allies understand the Water Ox's measured pace without mistaking it for lack of passion.

Traditional Chinese astrology places the Ox in opposition to the Goat on the zodiac wheel, creating a fundamental tension between the Ox's pragmatic discipline and the Goat's artistic sensitivity. For the Water Ox, this dynamic is somewhat softened by Water's empathetic nature, but the core friction remains.`,

    bestMatches: [
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 93,
        summary:
          'A deeply intuitive partnership between two Water signs that value depth over display. The Water Snake\'s perceptive intelligence and mysterious allure fascinate the Water Ox, while the Ox\'s unwavering stability provides the security the Snake craves. Together, they build a private world of profound emotional and intellectual connection.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 88,
        summary:
          'A powerfully complementary pairing of shared values and mutual respect. The Metal Rooster\'s precision and principled nature align perfectly with the Water Ox\'s methodical approach. Metal generates Water in the productive cycle, naturally supporting the Ox\'s emotional depth while the Ox\'s patience tempers the Rooster\'s critical tendencies.',
      },
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 85,
        summary:
          'The Rat and Ox share a traditional alliance rooted in complementary strengths. The Water Rat\'s strategic intelligence and social fluidity complement the Water Ox\'s steadfast reliability. Both Water signs, they share emotional depth and intuitive understanding, creating a partnership that feels naturally harmonious.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 32,
        summary:
          'The Ox and Goat sit at opposite ends of the zodiac, and the element difference amplifies this tension. The Fire Goat\'s emotional volatility and artistic unpredictability clash with the Water Ox\'s need for order and consistency. The Ox perceives the Goat as irresponsible; the Goat finds the Ox stifling and emotionally constrained.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 35,
        summary:
          'The Fire Horse\'s explosive independence and impulsive nature collide with the Water Ox\'s measured, methodical approach. The Horse experiences the Ox as unbearably slow, while the Ox views the Horse as recklessly unstable. Water\'s cooling effect on Fire creates additional tension rather than harmony in this pairing.',
      },
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 42,
        summary:
          'The Dragon\'s grandiose ambitions and need for admiration clash with the Water Ox\'s humble, understated approach. The Ox respects hard work over flashy displays, while the Dragon finds the Ox\'s steady pace frustrating. Wood feeds Water, which helps, but the fundamental temperamental gap requires significant mutual adjustment.',
      },
    ],

    elementAffinity: `As a Water-element sign with an Earth-natured animal, the Water Ox has a complex relationship with all five elements. Metal signs are particularly supportive — Metal generates Water, providing the structural reinforcement that the Ox's Earth nature welcomes. Water signs create deep, intuitive connections but risk amplifying emotional heaviness when both partners retreat inward simultaneously. Wood signs benefit from the Water Ox's nourishing nature, as Water feeds Wood, creating partnerships where the Ox helps others grow. Fire signs present significant challenges — Water controls Fire, and the Ox's desire for stability conflicts with Fire's transformative volatility. Earth signs create solid, reliable partnerships, though the combination of double-Earth and Water can sometimes become too static and resistant to necessary change.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Water Oxen are the steady architects of lasting achievement. They excel in careers that reward patience, thoroughness, and the ability to build something substantial over time. They are not interested in quick wins or flashy pivots — they want to construct something that endures, whether it is a business, a body of research, or a team that functions like a well-maintained machine.

The ideal Water Ox career provides stability, clear progression, and the opportunity to develop deep expertise. They thrive in structured environments where hard work is recognized and rewarded, and where they can see the tangible results of their effort. Engineering, medicine, agriculture, banking, project management, and academic research all suit the Water Ox's combination of methodical discipline and intuitive understanding.

Where the Water Ox differs from other Ox variants is in their ability to manage people. The Water element's empathetic influence makes them natural mentors and team leaders — not the charismatic, visionary kind, but the kind who earn loyalty through fairness, consistency, and genuine care for their team's well-being. Water Ox managers are the ones people stay with for decades.`,

    idealCareers: [
      'Civil Engineer',
      'Surgeon',
      'Agricultural Scientist',
      'Investment Banker',
      'Project Manager',
      'University Professor',
      'Environmental Consultant',
      'Veterinarian',
    ],

    financialStyle:
      'The Water Ox is among the most financially stable signs in the zodiac. They are natural savers who build wealth slowly and deliberately through consistent effort, conservative investment, and minimal waste. They have an intuitive sense for long-term value and rarely fall for get-rich-quick schemes. Their financial discipline borders on the austere — they may deny themselves pleasures they can easily afford simply because spending feels irresponsible. The Water Ox\'s financial growth edge lies in learning to invest in experiences, relationships, and quality of life, not just in accumulation for its own sake.',

    tips: [
      'Embrace leadership opportunities even when they feel uncomfortable. Your combination of reliability and empathy makes you a leader people genuinely want to follow. The discomfort you feel is not inadequacy — it is the Ox\'s natural humility, which is actually an asset in leadership.',
      'Invest in continuous learning. Your deep expertise is your greatest professional asset, but the world changes faster than the Ox likes to admit. Regular skill updates prevent your knowledge from becoming obsolete and give you new tools for the problems you love solving.',
      'Build collaborative relationships with visionary thinkers. Your strength is execution, and partnering with creative strategists who can set ambitious directions creates a synergy where both parties thrive. The Water Ox who implements bold visions achieves more than the one who plays it safe alone.',
      'Set boundaries on your availability. Your reliability makes you everyone\'s first call, which can overwhelm even your considerable capacity. Protect your most productive hours, delegate what you can, and remember that sustainable output requires sustainable input.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love for the Water Ox is a slow, deep, and ultimately transformative experience. They do not fall in love quickly or lightly — they wade in gradually, testing the waters with careful steps before committing to the depth they are capable of reaching. This cautious approach can frustrate partners who expect immediate passion, but those who earn the Water Ox's full trust discover a devotion that is virtually indestructible.

The Water Ox in love is tender, protective, and quietly romantic. They express their feelings through consistent actions rather than dramatic declarations — the daily coffee prepared exactly right, the problem quietly solved before their partner even noticed it, the unwavering presence during difficult times. Their love is measured not in fireworks but in the accumulated weight of ten thousand small kindnesses that, over years, become the foundation of an unshakeable bond.

The Water Ox's romantic challenge is emotional expression. They feel everything deeply but struggle to articulate their inner world. Partners may mistake their silence for indifference when, in reality, the Water Ox is simply processing emotions at a depth that words feel inadequate to capture. The Water Ox who learns to share their inner landscape — imperfectly, awkwardly, but honestly — unlocks a level of intimacy that their patient nature is uniquely qualified to sustain.`,

    loveStyle:
      'The Water Ox loves with quiet, unwavering devotion that deepens with time rather than fading. They are the partner who shows up — every day, without fail, through difficulty and monotony alike. Their love language is acts of service and quality time: they would rather spend a quiet evening together than attend a grand event. They express affection through reliability, protection, and the steady accumulation of shared experiences that weave two lives into one. They seek a partner who values depth over excitement and who understands that the Water Ox\'s still surface conceals a profound emotional ocean.',

    idealPartnerTraits: [
      'Patient',
      'Emotionally Expressive',
      'Loyal',
      'Appreciative of Consistency',
      'Warmly Affectionate',
    ],

    tips: [
      'Practice expressing your feelings in real time. When something moves you, say so — even if the words feel clumsy. Your partner needs to hear what you feel, not just see what you do. Unexpressed love, no matter how deep, can feel like absence to those who need verbal reassurance.',
      'Resist the urge to solve when your partner needs to be heard. Your instinct is to fix problems, but sometimes your partner needs empathy, not solutions. Ask: "Do you need me to listen or to help?" This simple question transforms your support from adequate to extraordinary.',
      'Create space for spontaneity. Your love of routine provides stability, but it can also make the relationship feel predictable. Surprise your partner occasionally — an unexpected outing, a random gift, a break from the usual schedule. These moments remind both of you that love is alive, not merely maintained.',
      'Let your partner see your struggles. Sharing your vulnerabilities is not burdening someone — it is inviting them into your real life. The intimacy you crave cannot exist if you only show your strong, capable side. Let them see the full Ox, not just the workhorse.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Ox's constitution combines the Ox's natural physical robustness with Water's influence on the body's fluid systems, creating a person of considerable stamina who is nonetheless vulnerable to specific patterns of imbalance. In Traditional Chinese Medicine, the Ox's Earth nature governs the Spleen and Stomach — the digestive center — while the Water element governs the Kidneys and Bladder. This dual influence means the Water Ox must attend to both digestive health and kidney vitality.

The most characteristic Water Ox health pattern is the accumulation of dampness — a TCM concept describing sluggishness, heaviness, and fluid retention that results when Earth and Water energies combine without sufficient movement or warmth. Water Oxen may experience bloating, weight gain concentrated around the midsection, joint stiffness, and a persistent sense of heaviness that affects both body and mood.

The antidote to the Water Ox's health vulnerabilities is movement and warmth. Regular physical activity that generates heat and promotes circulation counters the tendency toward stagnation. Warming, easily digestible foods support the digestive system, while adequate rest allows the kidneys to regenerate. The Water Ox who maintains a consistent exercise routine and attends to their diet enjoys remarkable longevity and robust physical health well into old age.`,

    bodyAreas: ['Kidneys', 'Digestive System', 'Joints', 'Lower Back'],

    exercises: [
      'Strength training with progressive overload',
      'Hiking and long-distance walking',
      'Swimming for joint-friendly cardio',
      'Yoga for flexibility and stress release',
    ],

    dietTips: [
      'Prioritize warm, cooked meals over raw foods. The Water Ox\'s Earth-Water constitution benefits from foods that are easy to digest and warming in nature: soups, stews, steamed vegetables, and porridges support digestive function and counter dampness accumulation.',
      'Include aromatic spices that dry dampness and improve digestion: cardamom, fennel, turmeric, and black pepper. These spices support the Spleen\'s ability to transform and transport nutrients while preventing fluid stagnation.',
      'Support kidney health with adequate protein from quality sources: bone broth, eggs, wild fish, and legumes. The kidneys work hard in a Water-dominant constitution and benefit from consistent, nourishing protein intake.',
      'Reduce dairy and excessive sugar, which generate dampness in TCM. Replace with lighter alternatives and satisfy sweet cravings with naturally sweet foods like sweet potato, cooked fruit, and dates.',
    ],

    mentalHealth:
      'The Water Ox\'s most significant mental health vulnerability is the slow accumulation of unexpressed emotional weight. Their tendency to absorb stress, suppress feelings, and carry others\' burdens creates a gradual buildup that can manifest as depression, chronic fatigue, or sudden emotional flooding. Regular emotional release is essential — whether through conversation with trusted friends, therapeutic writing, or professional counseling. Body-based therapies like massage, acupuncture, and somatic experiencing are particularly effective for the Water Ox, as they tend to store emotions in their physical body. Establishing a weekly practice that specifically addresses emotional processing — even something as simple as a regular check-in with a partner or friend — prevents the buildup that leads to crisis. The Water Ox who learns to release regularly rather than store indefinitely discovers a lightness and emotional freedom that enhances every area of their life.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 8],
    colors: ['Blue', 'Black', 'Dark Green', 'Silver'],
    direction: 'North',
    gemstones: ['Sapphire', 'Obsidian', 'Lapis Lazuli'],
    flowers: ['Orchid', 'Lily', 'Narcissus'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER OXEN
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Jim Carrey',
        profession: 'Actor/Comedian',
        birthYear: 1973,
        description:
          'Jim Carrey\'s combination of physical comedy mastery and increasingly deep, philosophical public persona reflects the Water Ox\'s unique blend of determination and emotional depth. His relentless work ethic and willingness to explore the furthest reaches of his craft embody the sign\'s patient persistence and hidden intensity.',
      },
      {
        name: 'Tyra Banks',
        profession: 'Model/Media Mogul',
        birthYear: 1973,
        description:
          'Tyra Banks built an empire through the Water Ox\'s characteristic combination of steady determination and intuitive understanding of what audiences want. Her methodical construction of a media brand from modeling to television to business reflects the sign\'s patient approach to lasting achievement.',
      },
      {
        name: 'Dave Chappelle',
        profession: 'Comedian',
        birthYear: 1973,
        description:
          'Dave Chappelle\'s career demonstrates the Water Ox\'s willingness to sacrifice short-term gain for long-term integrity. His famous departure from a lucrative show and subsequent return on his own terms reflects the sign\'s deep values, emotional complexity, and unwillingness to compromise core principles for convenience.',
      },
      {
        name: 'Richard Nixon',
        profession: 'U.S. President',
        birthYear: 1913,
        description:
          'Richard Nixon\'s political career exemplifies both the Water Ox\'s strengths and shadows — extraordinary persistence, strategic patience, and deep emotional complexity, alongside the sign\'s tendency toward secrecy, emotional suppression, and the slow accumulation of internal pressure that eventually demands release.',
      },
      {
        name: 'Rosa Parks',
        profession: 'Civil Rights Activist',
        birthYear: 1913,
        description:
          'Rosa Parks embodies the Water Ox at its most powerful — quiet, patient, immovably principled, and willing to endure whatever comes in service of deeply held values. Her refusal to yield her bus seat was not impulsive but the culmination of years of steady, determined resistance.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Ox holds the second position in the Chinese zodiac, a placement that reflects both its extraordinary qualities and the cosmic justice of the Great Race myth. According to legend, the diligent Ox woke before dawn and traveled steadily through the night to reach the Jade Emperor's palace. It would have arrived first had the clever Rat not hitched a ride on its back and leapt ahead at the last moment. Rather than protesting this trick, the Ox accepted second place with characteristic grace — an origin story that perfectly encodes the animal's patience, generosity, and lack of ego.

When Water is paired with the Ox, the mythology gains the dimension of depth. Water is associated with the north, winter, and the hours of deepest night — a time of rest, reflection, and hidden activity beneath frozen surfaces. The Water Ox thus represents the profound power of stillness, the strength that accumulates in silence, and the potential energy stored in systems that appear motionless but are in fact building toward transformation. In Chinese agricultural mythology, the Ox plowing waterlogged paddies is one of the most enduring images of productive labor — the perfect visual metaphor for the Water Ox's ability to work through difficult, heavy conditions that would stop lesser animals.

In Taoist tradition, the Ox is famously featured in the Ten Ox-Herding Pictures, a series of illustrations depicting the stages of spiritual enlightenment. The Water Ox adds to this symbolism the dimension of emotional and intuitive wisdom — the understanding that true strength comes not from domination but from yielding, not from rigidity but from flow.`,

    symbolism: `The Water Ox symbolizes the power of patient persistence applied with emotional intelligence. In traditional symbolism, it represents the deep current beneath a calm surface — the enormous force that moves slowly, shapes landscapes over centuries, and cannot be stopped by any obstacle in its path. This is not the dramatic power of lightning or avalanche but the quiet, inexorable power of water wearing through stone.

In the Wu Xing cycle, the Water Ox embodies the productive tension between Earth and Water. Earth contains and directs Water; Water nourishes and softens Earth. This dynamic symbolizes the ideal balance between structure and flow, discipline and flexibility, determination and adaptability. The Water Ox reminds us that the strongest structures are not those that resist all movement but those that bend without breaking.

The Water Ox is also a symbol of emotional resilience — the capacity to absorb difficulty without being diminished by it. In Chinese culture, where the ox represents diligence, reliability, and selfless service, the Water Ox adds the dimension of emotional depth, suggesting that true service requires not just physical effort but genuine understanding of those being served.`,

    modernInterpretation: `In contemporary culture, the Water Ox archetype resonates with growing recognition that quiet, consistent contribution matters as much as — if not more than — charismatic disruption. In a world obsessed with innovation and rapid change, the Water Ox represents the essential counterbalance: the people who maintain systems, nurture teams, and build the institutional memory that prevents organizations from repeating mistakes.

The Water Ox's emotional intelligence is increasingly valued in modern leadership theory. The concept of "servant leadership" — leading by supporting others' growth and well-being — aligns perfectly with the Water Ox's natural approach. Organizations that once prized aggressive, commanding leadership are discovering that the Water Ox's quiet, empathetic style produces more sustainable results and higher team retention.

For those born in Water Ox years, the modern world offers both validation and challenge. Their steadfast nature is more appreciated than ever, but the pace of technological change tests their preference for stability. The most successful Water Oxen find the balance between honoring their need for consistency and embracing the adaptability their Water element provides — becoming the steady anchors that help others navigate turbulent times without being swept away by the current.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
