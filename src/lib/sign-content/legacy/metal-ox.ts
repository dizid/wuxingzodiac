// ============================================
// METAL OX (庚丑) — The Iron Pillar
// ============================================
// Metal reinforces the Ox's legendary endurance, creating
// an individual of unyielding determination and iron principle.
// Years: 1901, 1961, 2021

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-ox',
  profile: getProfileBySlug('metal-ox')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Ox is the most formidable and unyielding expression of the Ox archetype. Already defined by patience, determination, and an almost superhuman capacity for sustained effort, the Ox becomes something monumental when forged in Metal. This is the sign of the immovable object — a personality so solid, so resolute, and so principled that the world has no choice but to flow around it. Metal Oxen do not bend. They do not compromise for the sake of convenience. They plant their feet and hold their ground with a certainty that is simultaneously inspiring and infuriating.

What makes the Metal Ox remarkable is not flash or charisma — qualities they view with quiet suspicion — but depth. They build their lives on foundations of absolute integrity, constructing careers, relationships, and reputations with the methodical care of master stonemasons. Every brick is placed with intention. Every commitment is honored to the letter. In a world that celebrates speed and disruption, the Metal Ox is a living argument for the power of slow, steady, unshakeable purpose.

Beneath this granite exterior lies a surprisingly rich emotional landscape. Metal Oxen feel deeply but express sparingly. They are moved by loyalty, offended by dishonesty, and capable of profound tenderness toward the small circle of people they consider family. Their love is not demonstrated through words or gestures but through decades of unwavering presence. The Metal Ox who shows up at your door during a crisis at three in the morning is the same one who will be there at your retirement party fifty years later — steady, reliable, and utterly unchanged.`,

    coreTraits: [
      'Resolute',
      'Principled',
      'Industrious',
      'Dependable',
      'Stoic',
      'Thorough',
    ],

    strengths: [
      {
        trait: 'Unbreakable Determination',
        description:
          'The Metal Ox possesses a willpower that borders on the supernatural. When they commit to a path — whether a career goal, a personal project, or a moral principle — nothing short of physical impossibility will deter them. This is not stubbornness for its own sake; it is the deep conviction that worthy goals demand unwavering commitment, and the Metal Ox refuses to dishonor their word by abandoning what they have begun.',
      },
      {
        trait: 'Absolute Reliability',
        description:
          'In a world of broken promises and shifting priorities, the Metal Ox is a fortress of dependability. If they say they will do something, it will be done — on time, to standard, without excuses. This reliability extends to every area of life: professional deadlines, personal commitments, and the quiet, unglamorous daily acts of showing up that sustain families and organizations.',
      },
      {
        trait: 'Moral Clarity',
        description:
          'Metal Oxen have an internal compass of remarkable precision. They possess an innate understanding of right and wrong that is not easily swayed by circumstance, social pressure, or self-interest. This moral clarity makes them natural arbiters of fairness and trusted custodians of integrity in any organization or community.',
      },
      {
        trait: 'Enduring Patience',
        description:
          'The Metal Ox understands that the most valuable achievements take time. They are willing to invest years — even decades — in pursuits that others abandon after months. This extraordinary patience, combined with Metal\'s disciplined focus, gives them access to levels of mastery and accomplishment that more impulsive signs cannot reach.',
      },
    ],

    challenges: [
      {
        trait: 'Inflexibility',
        description:
          'The Metal Ox\'s greatest strength is also their most significant liability. Their resistance to change can become pathological rigidity, causing them to cling to methods, beliefs, or relationships long after adaptation is clearly necessary. They can mistake stubbornness for strength, turning what should be strategic flexibility into a principled but destructive refusal to evolve.',
      },
      {
        trait: 'Emotional Suppression',
        description:
          'Metal Oxen equate emotional expression with vulnerability, and vulnerability with weakness. They may go years without processing grief, resentment, or disappointment, allowing these emotions to accumulate into a silent weight that affects their health, their relationships, and their capacity for joy.',
      },
      {
        trait: 'Intimidating Presence',
        description:
          'The Metal Ox\'s combination of physical solidity, emotional reserve, and uncompromising standards can create an atmosphere of intimidation. Colleagues may hesitate to share ideas, partners may feel judged, and children may perceive coldness where there is actually deep but unexpressed love.',
      },
      {
        trait: 'Resistance to Delegation',
        description:
          'Metal Oxen operate from the assumption that if something is to be done correctly, they must do it themselves. This creates unsustainable workloads and prevents others from developing their own capabilities. Their inability to trust others\' competence — however well-founded — becomes a bottleneck that limits what they can achieve.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Ox is an Earth-phase animal, inherently grounded and stable. When Metal overlays this Earth nature, the result is doubly reinforced — Earth generates Metal in the productive cycle, meaning the Ox's natural qualities directly feed and strengthen the Metal element's characteristics. This creates a personality of extraordinary density and strength, like bedrock from which metal ore has been forged.

This Earth-Metal synergy makes the Metal Ox one of the most structurally sound signs in the zodiac. They are built to last — physically robust, emotionally resilient, and professionally durable in ways that other signs cannot match. However, this same density can become a prison. Earth-Metal combinations are the most resistant to change of all element pairings, and the Metal Ox must consciously cultivate flexibility to avoid becoming so rigid that they crack under pressure rather than yielding gracefully. The key to their long-term well-being lies in incorporating Water and Wood influences — through relationships, environments, and practices that introduce flow and growth into their naturally static nature.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Metal Ox approaches relationships with the same seriousness and commitment they bring to everything else. They are not casual about love, friendship, or professional alliances — once bonded, they consider it a permanent arrangement. This intensity of commitment is a tremendous gift to the right partner and a potential trap for the wrong one.

The Ox belongs to the Second Trine alongside the Snake and the Rooster — signs that share the Ox's appreciation for diligence, order, and strategic thinking. These natural alliances are deepened by the Metal element's emphasis on loyalty and structure. The Goat sits opposite the Ox on the zodiac wheel, creating a tension between the Ox's rigid practicality and the Goat's fluid creativity.`,

    bestMatches: [
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 92,
        summary:
          'An extraordinarily harmonious partnership that blends the Metal Ox\'s strength with the Water Snake\'s intuitive wisdom. The Snake\'s quiet intelligence complements the Ox\'s determined nature without competing with it. The Water element softens potential friction, creating a relationship where both partners feel deeply understood. They share a preference for privacy, depth over breadth, and building lasting legacies.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 88,
        summary:
          'Two perfectionists who speak the same language of discipline and excellence. The Earth Rooster\'s meticulous attention to detail and honest communication style resonates deeply with the Metal Ox\'s appreciation for thoroughness and integrity. The Earth element creates a shared foundation of practicality, while the Rooster\'s social confidence compensates for the Ox\'s reserve.',
      },
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 85,
        summary:
          'The Rat\'s strategic brilliance combined with the Ox\'s unwavering execution creates a partnership of remarkable productivity. The Metal Rat provides the vision and adaptability that the Metal Ox sometimes lacks, while the Ox offers the steady reliability that the Rat needs as a foundation. The shared Metal element ensures mutual respect for discipline and commitment.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 30,
        summary:
          'A collision of immovable object and unstoppable force. The Fire Horse\'s explosive spontaneity and need for freedom directly threaten the Metal Ox\'s need for stability and control. Fire melts Metal, creating a dynamic where the Horse\'s intensity can break down the Ox\'s carefully constructed emotional defenses. The Ox finds the Horse reckless; the Horse finds the Ox suffocating.',
      },
      {
        slug: 'wood-goat',
        name: 'Wood Goat',
        score: 35,
        summary:
          'The zodiac opposition between Ox and Goat is amplified by their different element natures. The Wood Goat\'s creative, emotionally expressive nature clashes with the Metal Ox\'s pragmatic reserve. The Goat needs emotional warmth and artistic freedom; the Ox needs structure and predictability. While opposites can attract initially, sustaining this relationship demands extraordinary compromise.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 38,
        summary:
          'Two dominant personalities competing for control. The Fire Dragon\'s grandiose vision and commanding presence clash with the Metal Ox\'s methodical approach and resistance to being led. Both signs are proud and reluctant to concede, creating power struggles that can consume the relationship. Fire\'s impulsiveness frustrates Metal\'s need for careful planning.',
      },
    ],

    elementAffinity: `The Metal Ox's Earth-Metal constitution creates particularly strong bonds with signs that share these grounding elements. Earth element signs provide a sense of shared values and mutual understanding, while other Metal signs create relationships built on discipline and mutual respect. Water element signs offer the emotional depth and adaptability that softens the Metal Ox's rigidity — these are often the most growth-promoting partnerships. Wood element signs can either be nourished or controlled by the Metal Ox, depending on the dynamic, as Metal cuts Wood in the destructive cycle. Fire element signs pose the greatest challenge, as Fire melts Metal, potentially threatening the Ox's sense of structural integrity and emotional control.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Oxen are the master builders of the zodiac. They excel in careers that reward patience, thoroughness, and an absolute refusal to cut corners. While they may not rise as quickly as more politically savvy signs, their trajectory is consistently upward — built on a foundation of genuine competence and earned trust that never erodes.

The ideal Metal Ox career provides clear expectations, measurable outcomes, and the opportunity to build something of lasting value. They thrive in roles where quality matters more than speed, where depth is valued over breadth, and where their institutional knowledge becomes irreplaceable over time. They are the senior engineers who know every system inside out, the surgeons whose hands never waver, and the project managers who deliver on time and under budget because they planned meticulously from the start.

Metal Oxen are not natural entrepreneurs — the uncertainty and constant pivoting of startup culture goes against their grain. They are at their best within established structures where they can rise to positions of authority through demonstrated excellence rather than self-promotion.`,

    idealCareers: [
      'Civil Engineer',
      'Surgeon',
      'Financial Controller',
      'Quality Assurance Director',
      'Master Craftsman',
      'Military Officer',
      'Institutional Investor',
      'Judge',
    ],

    financialStyle:
      'Metal Oxen are conservative, methodical wealth builders. They favor traditional investment vehicles — real estate, blue-chip stocks, government bonds — and view speculative opportunities with deep skepticism. Their financial discipline is exemplary: they save consistently, avoid debt religiously, and build reserves that can weather any storm. Their challenge is excessive caution — they may miss significant opportunities because they refuse to act without absolute certainty. The most successful Metal Oxen learn to distinguish between reckless risk and calculated investment, allowing themselves a small allocation for higher-growth opportunities.',

    tips: [
      'Your reliability is your greatest professional asset, but do not let it make you invisible. Metal Oxen often do extraordinary work that goes unrecognized because they never promote themselves. Learn to communicate your achievements — not with arrogance, but with the same directness you apply to everything else.',
      'Cultivate adaptability as a discipline. Change is not your natural strength, but in a rapidly evolving professional landscape, the ability to learn new skills and embrace new methods is essential. Approach change as another problem to solve methodically, not as a threat to resist.',
      'Invest in mentoring relationships. Your depth of knowledge and experience makes you an invaluable mentor. Teaching others not only multiplies your impact but also forces you to articulate knowledge that you may take for granted.',
      'Create structured rest. Metal Oxen tend to work until they collapse, viewing rest as laziness rather than recovery. Schedule downtime with the same discipline you apply to work — your long-term productivity depends on it.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Metal Ox in love is a study in quiet devotion. They do not fall quickly or easily — the process of opening their heart is measured in months and years, not days and weeks. But once they commit, their love has the permanence of stone. The Metal Ox does not understand casual relationships, and they view the modern culture of dating with bewilderment and mild distaste. For them, love is a serious undertaking — a lifelong project to be approached with the same thoroughness and dedication they bring to their professional life.

Metal Oxen express love through action rather than words. They build security for their families, maintain their homes with meticulous care, and show up consistently through every season of life. Their partner will never question whether the Metal Ox is committed — that commitment is demonstrated daily through unwavering presence and tireless effort.

The challenge in Metal Ox relationships is emotional expression. They genuinely feel love, gratitude, and tenderness but often lack the vocabulary or comfort to voice these feelings. Partners who need frequent verbal affirmation may feel starved, while those who read love in acts of service and steady presence will feel profoundly cherished.`,

    loveStyle:
      'The Metal Ox loves with the strength and permanence of forged iron — once shaped, it holds its form forever. Their love language is commitment itself: the daily acts of reliability, protection, and provision that demonstrate devotion more eloquently than any words. They are deeply traditional in their approach to partnership, valuing loyalty above passion and stability above excitement. Their ideal relationship is a fortress — built to withstand anything, shared only with someone worthy of absolute trust.',

    idealPartnerTraits: [
      'Patient',
      'Loyal',
      'Emotionally Grounded',
      'Appreciative of Stability',
      'Warm but Not Demanding',
    ],

    tips: [
      'Learn the language of emotional expression. Your partner needs to hear "I love you" even when you believe your actions have already said it. Words of affirmation are not redundant — they are a different channel of connection that your actions alone cannot replace.',
      'Allow your partner to have needs that differ from yours. Not everyone values stability above all else, and your partner\'s desire for spontaneity, social connection, or emotional expression is not a rejection of what you offer — it is a complement to it.',
      'Practice flexibility in domestic routines. Your preference for order and predictability can make home life feel more like a schedule than a sanctuary. Leave room for unplanned moments, messy kitchens, and afternoons with no agenda.',
      'Acknowledge that your partner\'s emotional needs are as valid as your practical ones. When they want to talk about feelings, they are not being frivolous — they are tending to the relationship\'s foundation with the same seriousness you apply to everything else.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Ox possesses extraordinary physical stamina and resilience — they are among the most constitutionally robust signs in the zodiac. Their Earth-Metal combination creates a body that is built for endurance, capable of sustained effort that would break less durable signs. However, this very durability can become a liability: Metal Oxen tend to ignore physical symptoms until they become impossible to deny, trusting their body's strength to override any problem.

In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Ox's Earth nature relates to the Spleen and Stomach. This creates a health profile centered on the respiratory and digestive systems. Metal Oxen are particularly susceptible to conditions that develop slowly — chronic tension, gradual digestive deterioration, and the accumulated effects of stress held in the body for years without release.

The Metal Ox's greatest health risk is not any specific condition but the pattern of neglect that precedes it. They work through pain, dismiss symptoms as minor, and delay medical attention until a small, treatable issue has become a significant problem. Preventive care — regular check-ups, consistent exercise, and attention to early warning signs — is the Metal Ox's most important health strategy.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Spleen', 'Joints'],

    exercises: [
      'Resistance training',
      'Hiking and walking',
      'Yoga for flexibility',
      'Qigong',
    ],

    dietTips: [
      'Support the Spleen-Stomach axis with warm, cooked foods. Metal Oxen\'s Earth nature benefits from soups, stews, and well-cooked grains rather than raw, cold foods. The digestive fire needs consistent fuel rather than irregular heavy meals.',
      'Incorporate foods that support lung health: pears, white mushrooms, daikon radish, and almonds. The Metal element\'s connection to the Lungs means respiratory health directly impacts overall vitality.',
      'Reduce heavy, rich foods that create stagnation. The Metal Ox\'s tendency toward physical density can become sluggishness if the diet is too heavy. Balance hearty meals with lighter, fiber-rich foods that promote healthy elimination.',
      'Maintain hydration and include warming spices like ginger, turmeric, and cinnamon. These support circulation and prevent the stagnation that the Ox\'s naturally slow metabolism can create, particularly in the joints and extremities.',
    ],

    mentalHealth:
      'The Metal Ox\'s mental health challenge centers on the accumulation of unexpressed emotion. They carry burdens — their own and others\' — with stoic determination, rarely asking for support or acknowledging the weight. Over time, this creates a pervasive heaviness that manifests as chronic low mood, irritability, or a joyless sense of obligation. The most effective interventions for Metal Oxen are body-based: massage, physical labor, and movement practices that release stored tension without requiring verbal emotional processing. Therapy can be valuable but must be approached with patience — Metal Oxen take time to trust, and forcing emotional disclosure before they are ready will cause them to retreat further. The most important breakthrough for this sign is recognizing that accepting help is not weakness but wisdom.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 4, 9],
    colors: ['White', 'Silver', 'Green', 'Gray'],
    direction: 'West',
    gemstones: ['Tiger\'s Eye', 'White Jade', 'Platinum'],
    flowers: ['Tulip', 'Peach Blossom', 'White Rose'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL OXEN
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Barack Obama',
        profession: 'Former U.S. President',
        birthYear: 1961,
        description:
          'Barack Obama exemplifies the Metal Ox\'s combination of patient determination and principled leadership. His methodical rise from community organizer to president, built on steady competence rather than flash, reflects the sign\'s belief that lasting achievement is constructed brick by brick. His famous composure under pressure is pure Metal Ox stoicism.',
      },
      {
        name: 'Princess Diana',
        profession: 'Princess of Wales',
        birthYear: 1961,
        description:
          'Princess Diana demonstrated the Metal Ox\'s fierce dedication to duty combined with a deep moral compass. Her unwavering commitment to humanitarian causes — from landmine removal to AIDS awareness — reflected the sign\'s determination to use their strength in service of principles, regardless of personal cost or institutional opposition.',
      },
      {
        name: 'George Clooney',
        profession: 'Actor/Director/Activist',
        birthYear: 1961,
        description:
          'George Clooney\'s career reveals the Metal Ox\'s characteristic trajectory: steady, patient accumulation of skill and influence that eventually becomes impossible to ignore. His pivot from actor to director and humanitarian activist mirrors the sign\'s evolution from personal achievement to principled public service.',
      },
      {
        name: 'Eddie Murphy',
        profession: 'Comedian/Actor',
        birthYear: 1961,
        description:
          'Eddie Murphy\'s extraordinary work ethic and career longevity reflect the Metal Ox\'s endurance. His ability to dominate comedy for decades — adapting his craft without abandoning his core identity — demonstrates the sign\'s rare combination of persistence and quiet reinvention.',
      },
      {
        name: 'Walt Disney',
        profession: 'Entertainment Pioneer',
        birthYear: 1901,
        description:
          'Walt Disney\'s relentless pursuit of his creative vision through bankruptcy, rejection, and personal hardship is the Metal Ox story in its purest form. His insistence on quality over expedience, his patient building of an entertainment empire, and his refusal to accept "good enough" embody the sign\'s fundamental belief that excellence requires unwavering commitment.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Ox holds the second position in the Chinese zodiac — a placement that, according to legend, it earned through honest effort. The Ox was the first to begin the Great Race, setting out before dawn with steady determination. It would have won had the cunning Rat not hitched a ride and leaped ahead at the finish. This myth establishes the Ox's mythological identity: hardworking, honest, and occasionally outmaneuvered by those with fewer scruples.

In Chinese agricultural tradition, the Ox is revered as the foundation of civilization itself. It was the Ox that made large-scale farming possible, transforming human society from nomadic hunting to settled agriculture. This mythological role as civilizer and builder is amplified by the Metal element, which in Chinese cosmology represents the tools and implements forged from the earth — the plows, the blades, and the infrastructure that turned raw land into productive fields.

Metal Ox years carry an energy of foundational construction and principled determination. Traditional Chinese astrologers associate these years with the building of structures — physical, institutional, and moral — that are meant to endure for generations. The Metal Ox is the architect of permanence, the sign that lays foundations deep enough to support whatever the future may bring.`,

    symbolism: `The Metal Ox symbolizes indestructible commitment and the power of slow, steady effort applied over time. In Five Element symbolism, Metal represents refinement and essential form — the reduction of complex matter to its purest, most durable state. When combined with the Ox's symbolism of patient labor and agricultural abundance, the Metal Ox becomes an emblem of civilization itself: the triumph of disciplined effort over chaos and entropy.

The Ox's association with the Earth element as its intrinsic nature creates a powerful Earth-Metal resonance. Earth generates Metal in the productive cycle, meaning the Metal Ox's strength is self-reinforcing — their natural qualities directly feed the element that defines their particular expression. This makes the Metal Ox a symbol of self-sustaining strength, an entity that generates its own power through the very act of being true to its nature.

In traditional Chinese art and symbolism, the Metal Ox is often depicted with silver or white coloring, standing immovably on solid ground — an image of permanence that contrasts with the more dynamic imagery associated with other signs. It represents the quiet power that outlasts all storms.`,

    modernInterpretation: `In contemporary culture, the Metal Ox archetype resonates as an antidote to the frenetic pace and disposable nature of modern life. In an era that celebrates disruption, rapid change, and constant novelty, the Metal Ox stands for the enduring value of steadiness, reliability, and long-term thinking. They represent the infrastructure that everyone depends on but few think about — the systems, institutions, and individuals that keep the world functioning while others chase the next exciting thing.

Modern interpretations of the Metal Ox increasingly emphasize the sign's potential for quiet leadership. While louder signs attract attention and media coverage, it is often Metal Ox types — patient, principled, and impossibly persistent — who build the organizations, movements, and families that actually change the world. Their influence is measured not in headlines but in decades.

For those born in Metal Ox years, the modern world presents both challenge and opportunity. The challenge is maintaining their essential nature in a culture that often undervalues patience and consistency. The opportunity is that the world desperately needs what they offer: the strength to build things that last, the integrity to hold course when others waver, and the quiet conviction that doing the right thing — slowly, thoroughly, and without fanfare — is always worthwhile.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
