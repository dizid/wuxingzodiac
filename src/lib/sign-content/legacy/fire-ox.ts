// ============================================
// FIRE OX (丙丑) — The Relentless Forge
// ============================================
// Fire intensifies the Ox's legendary determination and
// work ethic, creating a powerhouse of focused ambition
// who reshapes the world through sheer persistent force.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-ox',
  profile: getProfileBySlug('fire-ox')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Ox is a force of nature — the irresistible meeting of the Ox's legendary patience and endurance with Fire's passion and intensity. Where the standard Ox plods steadily toward a distant goal, the Fire Ox charges toward it with visible heat, a burning determination that others can feel radiating from them. This is not the quiet, methodical Ox of tradition; this is the Ox with a furnace in its chest, forging raw ambition into tangible results through a combination of tireless effort and burning conviction.

What distinguishes the Fire Ox from other Ox variants is their emotional visibility. Most Oxen are stoic, reserved, and slow to reveal their inner world. Fire changes this equation dramatically. The Fire Ox wears their passion openly, speaks their mind with startling directness, and pursues their goals with a heat that can inspire allies and intimidate opponents in equal measure. They are the Ox you cannot ignore — the one whose presence fills a room and whose determination bends circumstances to their will.

Yet the Fire Ox's greatest strength is also their most dangerous quality. The combination of Ox stubbornness and Fire intensity creates a personality that is nearly impossible to redirect once committed to a course. They will push through obstacles that would stop any other sign, but they will also continue pushing long after the situation calls for a change in direction. The wisest Fire Oxen learn to pair their relentless drive with periodic reflection, using their fire to power the journey while their Ox wisdom chooses the destination.`,

    coreTraits: [
      'Determined',
      'Passionate',
      'Forthright',
      'Stubborn',
      'Hardworking',
      'Authoritative',
    ],

    strengths: [
      {
        trait: 'Unstoppable Work Ethic',
        description:
          'The Fire Ox possesses the most formidable work capacity in the entire zodiac. The Ox\'s natural endurance, already legendary, is supercharged by Fire\'s relentless drive. They can sustain intense effort over weeks, months, and years without losing momentum. When a Fire Ox commits to a goal, failure is not from lack of effort — it is simply not in their vocabulary.',
      },
      {
        trait: 'Commanding Presence',
        description:
          'Unlike quieter Ox variants, the Fire Ox commands attention and respect naturally. Their combination of physical presence, unwavering conviction, and direct communication creates an authority that others instinctively follow. They lead not through charisma alone but through the undeniable evidence of their dedication and competence.',
      },
      {
        trait: 'Fierce Loyalty',
        description:
          'When a Fire Ox gives their loyalty, it is absolute and unshakable. They protect their loved ones, their teams, and their principles with the full force of their formidable nature. This loyalty is not blind — it is earned and tested — but once established, it forms a bond that no circumstance can break.',
      },
      {
        trait: 'Practical Vision',
        description:
          'The Fire Ox combines Fire\'s ambitious vision with the Ox\'s practical sensibility, creating someone who dreams big but builds methodically. They do not chase fantasies; they construct realities. Every grand ambition is broken down into concrete steps, and every step is executed with precision and persistence.',
      },
    ],

    challenges: [
      {
        trait: 'Inflexibility',
        description:
          'The Fire Ox\'s greatest liability is their resistance to change. Once they have chosen a path, they follow it with such intensity that deviating feels like defeat. This inflexibility can lead them to persist in failing strategies, cling to outdated methods, or refuse valuable input that contradicts their established plan.',
      },
      {
        trait: 'Domineering Tendencies',
        description:
          'Fire amplifies the Ox\'s natural authority into something that can feel oppressive. Fire Oxen can become controlling in relationships and teams, insisting that their way is the only way. Their genuine competence makes this difficult to challenge, but their unwillingness to share control eventually drives away talented people who refuse to be subordinated.',
      },
      {
        trait: 'Explosive Temper',
        description:
          'The Ox is typically slow to anger, but the Fire Ox has a shorter fuse than their kin. When pushed beyond their considerable patience, they erupt with a force that shocks those accustomed to their steady demeanor. These eruptions can cause lasting damage to relationships and reputations.',
      },
      {
        trait: 'Overwork and Burnout',
        description:
          'The Fire Ox\'s refusal to rest is not a virtue — it is a vulnerability. They push through exhaustion, illness, and emotional depletion because stopping feels like weakness. This pattern inevitably leads to severe burnout, health crises, or emotional breakdowns that could have been prevented by accepting human limitations.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Ox is associated with the Earth element — stable, grounding, and enduring. When Fire is added to this Earth-natured animal, the productive cycle is activated: Fire generates Earth. This is a harmonious elemental combination, meaning the Fire element naturally supports and strengthens the Ox's core qualities rather than creating internal conflict. Fire's passion feeds the Ox's determination, and the Ox's earthiness gives Fire something solid to burn within.

This productive relationship makes the Fire Ox one of the most internally coherent signs in the zodiac. There is no war between element and animal — only mutual reinforcement. However, this very harmony can become excessive. Without the tempering influence of internal contradiction, the Fire Ox can push their dominant qualities to unhealthy extremes: determination becomes obsession, endurance becomes self-neglect, and authority becomes tyranny. The Fire Ox benefits enormously from relationships and environments that introduce balancing elements — Water for cooling, Wood for flexibility — that their own nature does not naturally provide.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Ox's compatibility is defined by their need for a partner who respects their strength without being overwhelmed by it. They are drawn to people who are competent, reliable, and emotionally grounded — qualities that mirror their own values. Relationships with the Fire Ox tend to be deep, committed, and slow to develop, as this sign does not give their trust easily but gives it completely once earned.

Traditional Chinese astrology places the Ox in the "Earth Trine" alongside the Snake and the Rooster — animals that share the Ox's methodical nature, attention to detail, and appreciation for order. These three signs form natural alliances built on mutual competence and shared standards. The Ox's greatest challenge comes from the Goat, which sits in direct opposition, creating a tension between the Ox's rigid discipline and the Goat's free-spirited creativity.`,

    bestMatches: [
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 91,
        summary:
          'A deeply intuitive and powerful partnership. The Water Snake\'s strategic intelligence and emotional depth complement the Fire Ox\'s forceful determination. The Snake understands the Ox\'s need for control without feeling threatened by it, while the Water element provides the cooling, fluid influence that prevents the Fire Ox from overheating. Together, they form a formidable team that combines power with subtlety.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 87,
        summary:
          'A partnership built on mutual respect and shared standards of excellence. The Earth Rooster\'s meticulous nature and work ethic match the Fire Ox\'s own, creating a relationship where both partners pull their weight and appreciate each other\'s dedication. The double-Earth influence provides stability, while Fire adds warmth and passion to what might otherwise be a purely functional bond.',
      },
      {
        slug: 'wood-rat',
        name: 'Wood Rat',
        score: 80,
        summary:
          'An unexpectedly complementary pairing. The Wood Rat\'s quick intelligence and social grace soften the Fire Ox\'s bluntness, while the Ox\'s steadfast reliability gives the Rat a secure base from which to operate. Wood feeds Fire in the productive cycle, meaning the Rat naturally energizes the Ox, and the Rat\'s flexibility compensates for the Ox\'s rigidity.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 30,
        summary:
          'A classic zodiac opposition amplified by shared Fire intensity. The Fire Goat\'s free-spirited creativity and emotional sensitivity clashes with the Fire Ox\'s demand for order and discipline. Both signs are passionate and stubborn, creating heated conflicts that neither is willing to resolve through compromise. The Goat feels suffocated; the Ox feels disrespected.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 35,
        summary:
          'Two intensely willful signs locked in a battle for dominance. The Fire Horse\'s fierce independence and need for freedom directly contradicts the Fire Ox\'s desire for structure and control. Neither sign backs down easily, and the double-Fire combination generates explosive conflicts. What could be passionate becomes combative without significant mutual accommodation.',
      },
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 42,
        summary:
          'Both the Ox and the Dragon possess formidable egos and strong convictions, creating a relationship marked by power struggles. The Water Dragon\'s grandiose vision and fluid approach to rules frustrates the Fire Ox\'s methodical nature. The Ox sees the Dragon as reckless; the Dragon sees the Ox as plodding. Mutual respect for each other\'s strength exists, but translating it into daily harmony proves difficult.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Earth animal, the Fire Ox benefits from the productive Fire-Earth relationship within their own nature. In partnerships, they thrive with Water element signs, which provide essential cooling and emotional depth (Water controls Fire, preventing the Ox from overheating). Wood element signs energize the Fire Ox through the Wood-Fire productive cycle, creating dynamic partnerships, though the Ox may find Wood\'s flexibility unsettling. Earth element signs offer comfortable familiarity and shared values but risk creating too much rigidity in the relationship. Metal element signs, produced by Earth in the productive cycle, can create strong alliances based on shared discipline, though Metal\'s critical nature may clash with Fire\'s pride.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Ox is built for leadership in structured environments. They excel in roles that reward sustained effort, deep expertise, and the ability to drive large-scale projects to completion. Unlike flashier signs that thrive on novelty and rapid change, the Fire Ox builds their career brick by brick, accumulating knowledge, skills, and authority over years of dedicated practice.

The ideal Fire Ox career provides both challenge and structure. They need work that tests their considerable abilities while operating within a framework they respect. Completely unstructured environments frustrate them, but overly rigid bureaucracies stifle their Fire-driven ambition. The sweet spot is a role where they can build something significant — a department, a company, a body of work — with enough autonomy to do it their way.

Financially, the Fire Ox is among the most reliable earners in the zodiac. Their disciplined approach to work translates into consistent income growth, and their natural frugality means they accumulate wealth steadily over time. The risk is that their conservative financial instincts prevent them from seizing the occasional bold opportunity that could accelerate their wealth significantly.`,

    idealCareers: [
      'Construction Executive',
      'Surgeon',
      'Military Commander',
      'Manufacturing CEO',
      'Head Chef',
      'Civil Engineer',
      'Investment Manager',
      'Agricultural Director',
    ],

    financialStyle:
      'The Fire Ox is a disciplined accumulator who builds wealth through consistent effort and conservative financial management. They prefer tangible assets — real estate, established businesses, physical resources — over speculative investments. Their financial weakness is a reluctance to delegate financial decisions, even when professional advice would improve their returns. The Fire Ox who learns to trust a competent financial advisor while maintaining oversight discovers that their natural discipline, combined with expert strategy, produces exceptional long-term results.',

    tips: [
      'Develop your leadership style beyond command-and-control. Your natural authority is an asset, but modern teams respond best to leaders who listen, adapt, and empower. Practice asking for input before announcing decisions, even when you are confident in your course.',
      'Build rest into your routine as a non-negotiable discipline. Your work ethic is extraordinary, but sustainable success requires recovery. Treat rest the way you treat work — as a scheduled, essential activity that you execute with the same commitment.',
      'Embrace incremental innovation. Your instinct is to perfect existing systems rather than experiment with new ones, but industries evolve. Dedicate a small portion of your time to exploring new methods, technologies, and approaches that could enhance your proven frameworks.',
      'Cultivate patience with people who work differently. Not everyone shares your intensity and discipline, and that is not a flaw — it is diversity. The Fire Ox who learns to value different working styles builds stronger, more resilient teams.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Ox approaches love with the same intensity and commitment they bring to their work — deeply, seriously, and with a determination to build something that lasts. They are not casual daters or serial romantics. When a Fire Ox chooses a partner, they are making a long-term investment, and they expect the same level of commitment in return.

Beneath the Fire Ox's strong exterior lies a surprisingly tender and romantic heart. They express love through acts of service and unwavering reliability rather than flowery words or grand gestures. A Fire Ox shows love by fixing what is broken, providing financial security, protecting their family from harm, and being the immovable rock their partner can always depend on.

The challenge in Fire Ox relationships is communication. Their directness, while refreshing, can feel blunt and insensitive to more emotionally expressive partners. They struggle to articulate their feelings and may substitute action for conversation, leaving partners feeling emotionally unheard even while being materially supported. The Fire Ox who learns to pair their dependable actions with vulnerable, honest communication builds a relationship of extraordinary depth and durability.`,

    loveStyle:
      'The Fire Ox loves through devotion and deeds. They are fiercely protective, deeply loyal, and utterly dependable — the partner who will stand by you through any storm without flinching. Their love language is acts of service and quality time spent building a shared life. They are passionate behind closed doors but reserved in public, preferring to demonstrate their feelings through reliability and sacrifice rather than verbal declarations. They need a partner who appreciates steady devotion over romantic theatrics.',

    idealPartnerTraits: [
      'Patient',
      'Emotionally Articulate',
      'Loyal',
      'Independently Capable',
      'Warm',
    ],

    tips: [
      'Practice expressing emotions with words, not just actions. Your partner needs to hear how you feel, not just see it in what you do. Even simple statements like "I appreciate you" or "I missed you today" carry enormous weight when they come from someone as measured as you.',
      'Allow your partner to have different standards. Your way of doing things is not the only valid way. Resist the urge to correct, optimize, or take over when your partner approaches tasks differently — their autonomy matters more than your efficiency.',
      'Schedule regular relationship check-ins. Your instinct is to keep working on the relationship through action, but deliberate conversations about needs, feelings, and goals prevent small resentments from becoming major ruptures.',
      'Surprise your partner occasionally. Your reliability is your greatest romantic asset, but predictability can become monotony. A spontaneous gesture — an unexpected trip, a handwritten note, an evening without plans — reminds your partner that the fire within you burns for them.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Ox's health profile is shaped by their extraordinary physical stamina and their equally extraordinary resistance to acknowledging their own limits. In Traditional Chinese Medicine, the Ox's Earth nature governs the Spleen and Stomach — the organs of digestion, nourishment, and the body's ability to transform food into energy. Fire's influence on this foundation creates a constitution of great physical power but also a tendency toward heat-related conditions and digestive inflammation.

The Fire Ox's primary health risk is overwork. They push their bodies the same way they push their careers — relentlessly, without adequate rest, until something breaks. Musculoskeletal problems, particularly in the back and shoulders, are common from years of carrying too much — literally and metaphorically. Digestive issues, including ulcers and acid reflux, reflect the stress they internalize rather than express.

Prevention for the Fire Ox means establishing boundaries between work and rest, and then honoring them with the same discipline they bring to professional obligations. The Fire Ox who treats self-care as a duty rather than an indulgence maintains their formidable vitality well into old age.`,

    bodyAreas: ['Spleen', 'Stomach', 'Back/Shoulders', 'Digestive System'],

    exercises: [
      'Strength training and powerlifting',
      'Hiking and mountain climbing',
      'Yoga for flexibility',
      'Farming or heavy gardening',
    ],

    dietTips: [
      'Support digestive health with warm, cooked foods rather than cold or raw meals. The Fire Ox\'s Spleen-Stomach system thrives on soups, stews, roasted root vegetables, and slow-cooked proteins that are easy to digest and deeply nourishing.',
      'Moderate spicy food intake. While Fire signs are naturally drawn to heat, the Fire Ox\'s digestive system can become inflamed by excessive chili, pepper, and hot spices. Warming spices like ginger, turmeric, and cinnamon provide Fire\'s warmth without the inflammatory impact.',
      'Eat on a consistent schedule. The Fire Ox\'s tendency to work through meals disrupts their Earth-governed digestive rhythm. Regular mealtimes, particularly a substantial breakfast, anchor the body\'s energy cycles and prevent the afternoon crashes that lead to overreliance on caffeine.',
      'Incorporate bitter greens and fermented foods to support liver health and digestion. Dandelion greens, arugula, sauerkraut, and miso help process the heat that accumulates in the Fire Ox\'s system during periods of intense work.',
    ],

    mentalHealth:
      'The Fire Ox\'s mental health is closely linked to their sense of productivity and purpose. They feel most stable when working toward a clear goal, and most vulnerable when that sense of direction is lost — during job transitions, retirement, or periods of enforced rest. Depression in Fire Oxen often manifests as irritability and withdrawal rather than sadness, making it difficult for loved ones to recognize and respond appropriately. The Fire Ox benefits from physical activity as a mental health intervention — their body-oriented nature responds better to exercise, martial arts, or manual labor than to talk therapy alone, though combining physical outlets with professional counseling produces the best results. Learning to find identity and worth outside of work is the Fire Ox\'s most important psychological journey.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 5],
    colors: ['Red', 'Copper', 'Burnt Orange'],
    direction: 'South',
    gemstones: ['Carnelian', 'Tiger\'s Eye', 'Jasper'],
    flowers: ['Peony', 'Sunflower', 'Dahlia'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE OXEN
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Jack Nicholson',
        profession: 'Actor',
        birthYear: 1937,
        description:
          'Jack Nicholson\'s career defines the Fire Ox archetype — decades of relentless commitment to his craft, a commanding on-screen presence that could not be ignored, and an intensity that earned him three Academy Awards. His longevity in Hollywood reflects the Ox\'s endurance, while his fiery performances showcase the element\'s passion.',
      },
      {
        name: 'Morgan Freeman',
        profession: 'Actor',
        birthYear: 1937,
        description:
          'Morgan Freeman\'s authoritative voice, patient career building, and commanding presence embody the Fire Ox perfectly. He waited decades for stardom, never compromising his standards, and ultimately became one of the most respected actors of his generation — a testament to the Fire Ox\'s belief that sustained excellence is always rewarded.',
      },
      {
        name: 'Saddam Hussein',
        profession: 'Political Leader',
        birthYear: 1937,
        description:
          'Saddam Hussein demonstrates the Fire Ox\'s shadow side — the domineering, inflexible ruler who maintained iron-fisted control through sheer force of will. His decades-long grip on power and refusal to yield reflect both the Ox\'s stubbornness and Fire\'s intensity taken to destructive extremes.',
      },
      {
        name: 'Jane Fonda',
        profession: 'Actress/Activist',
        birthYear: 1937,
        description:
          'Jane Fonda exemplifies the Fire Ox\'s capacity for sustained commitment to both art and cause. Her career spans decades of acclaimed performances alongside passionate political activism that never wavered despite intense controversy — embodying the Fire Ox\'s refusal to back down from what they believe is right.',
      },
      {
        name: 'Bill Cosby',
        profession: 'Comedian/Actor',
        birthYear: 1937,
        description:
          'Bill Cosby\'s career demonstrated the Fire Ox\'s commanding authority and ability to build cultural institutions, while his fall from grace illustrated how the sign\'s stubborn refusal to be held accountable can lead to catastrophic consequences when unchecked power meets unchecked behavior.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Ox holds the second position in the Chinese zodiac, a placement that reflects both its extraordinary virtue and its one critical vulnerability. According to legend, the Ox would have won the Great Race to determine the zodiac order, but the clever Rat — who had hitched a ride on the Ox's back — leaped ahead at the finish line. This story captures the Ox's essential nature: powerful, diligent, and generous to a fault, but sometimes outmaneuvered by those who prioritize cunning over effort.

When Fire transforms this patient, earth-bound animal, the mythological significance shifts dramatically. The Fire Ox appears in Chinese folklore as the great forge — the crucible where raw material is transformed into lasting creation through sustained heat and pressure. In Daoist tradition, the Ox represents the untamed mind that must be disciplined through spiritual practice, and the Fire Ox specifically symbolizes the intense commitment required to achieve spiritual transformation.

In agricultural mythology, the Ox is revered as the animal that civilized the land, turning wilderness into farms through patient, backbreaking labor. The Fire Ox amplifies this symbolism, representing the burning determination required to build civilization itself — the refusal to stop plowing even when the ground is hard and the sun is merciless.`,

    symbolism: `The Fire Ox symbolizes the transformative power of sustained effort — the forge that turns raw iron into refined steel. In traditional Wu Xing symbolism, this is the productive cycle made manifest: Fire generates Earth, and the Earth animal empowered by Fire becomes the ultimate symbol of creation through persistence. The Fire Ox represents the truth that the most lasting achievements come not from flashes of brilliance but from the sustained application of heat and pressure over time.

The Fire Ox is also a symbol of righteous authority. In Chinese imperial symbolism, the Ox represents the conscientious official who serves the people through tireless labor, and the Fire element adds the passion and conviction that transforms mere duty into mission. The Fire Ox does not serve because it is expected; it serves because it burns with purpose.

In the cycle of seasons, the Ox is associated with late winter — the period just before spring when the earth is cold but the seeds of renewal are already stirring beneath the surface. Fire's influence on this symbolism suggests the hidden warmth that sustains life through the darkest season, the ember that refuses to die.`,

    modernInterpretation: `In contemporary culture, the Fire Ox resonates as the archetype of the self-made achiever — the person who builds success through decades of disciplined effort rather than overnight luck or inherited advantage. The Fire Ox years of 1937 and 1997 produced generations marked by resilience and determination in the face of significant challenges.

The 1937 cohort came of age during wartime and post-war reconstruction, and many became the builders of the modern world — engineers, industrialists, and leaders whose patient, forceful approach to challenges laid the foundations of contemporary prosperity. Their Fire Ox nature is visible in the institutions they built: solid, enduring, and designed to last.

For modern Fire Oxen, the key challenge is adapting their formidable strengths to a world that increasingly values flexibility, collaboration, and rapid change. The Fire Ox's instinct is to dig in, work harder, and resist anything that threatens their established approach. Those who learn to maintain their core identity while evolving their methods become extraordinarily effective leaders in any era — proof that the forge's fire, properly directed, can shape the future as powerfully as it shaped the past.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
