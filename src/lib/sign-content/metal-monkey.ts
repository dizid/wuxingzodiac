// ============================================
// METAL MONKEY (庚申) — The Cunning Alchemist
// ============================================
// Metal sharpens the Monkey's brilliance into a razor-edged
// intellect capable of transforming any situation to advantage.
// Years: 1920, 1980

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-monkey',
  profile: getProfileBySlug('metal-monkey')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Monkey is the most formidable problem-solver in the Chinese zodiac. Where the Monkey is already celebrated for its quick wit, versatility, and ingenious creativity, the Metal element hones these gifts into something sharper and more purposeful. The Metal Monkey's mind does not merely play with ideas — it forges them into tools, strategies, and solutions with a precision that transforms intellectual brilliance from entertainment into achievement. They are the alchemist of the zodiac: taking whatever raw materials are available and transmuting them into something of greater value.

What distinguishes the Metal Monkey from other Monkey variants is the addition of staying power to the Monkey's legendary cleverness. The typical Monkey is brilliant but scattered — leaping from idea to idea, project to project, without completing many of them. The Metal Monkey retains the Monkey's intellectual agility but adds Metal's demand for results. They still generate ideas at a remarkable pace, but they also have the discipline to select the best ones and execute them with focused, sustained effort.

Beneath the sharp, confident exterior, the Metal Monkey maintains a constant assessment of their environment that never fully relaxes. They are always calculating — evaluating people, opportunities, threats, and angles — with a speed and accuracy that can appear effortless but actually represents an extraordinary cognitive investment. This perpetual vigilance makes them remarkably effective but also contributes to an inner restlessness that can be difficult to quiet.`,

    coreTraits: [
      'Ingenious',
      'Ambitious',
      'Resourceful',
      'Sharp-Witted',
      'Competitive',
      'Adaptable',
    ],

    strengths: [
      {
        trait: 'Exceptional Problem-Solving',
        description:
          'The Metal Monkey approaches problems with a combination of creative thinking and analytical rigor that produces solutions others cannot see. They excel at finding unexpected angles, repurposing existing resources, and constructing strategies that achieve multiple objectives simultaneously. In any environment where complex problems need elegant solutions, the Metal Monkey is invaluable.',
      },
      {
        trait: 'Strategic Versatility',
        description:
          'Metal Monkeys can operate effectively across an extraordinary range of domains. Their quick-study ability — the capacity to absorb new information rapidly and apply it practically — combined with Metal\'s disciplined focus, allows them to master new fields, technologies, and social environments with remarkable speed. They are the ultimate generalist-specialist: broad enough to see connections and deep enough to execute.',
      },
      {
        trait: 'Competitive Excellence',
        description:
          'The Metal element transforms the Monkey\'s playful competitiveness into a serious drive to win. Metal Monkeys do not compete for amusement — they compete to excel. This gives them an edge in any arena where performance is measured: business, sports, academics, or creative fields. Their combination of natural talent and disciplined effort makes them consistently formidable opponents.',
      },
      {
        trait: 'Persuasive Communication',
        description:
          'Metal Monkeys possess an extraordinary ability to influence through communication. They can frame arguments, tell stories, and structure presentations with a precision that makes their conclusions feel inevitable. This persuasive skill is grounded in genuine intelligence rather than mere charm — people are convinced because the Metal Monkey\'s logic is sound, their evidence is solid, and their delivery is impeccable.',
      },
    ],

    challenges: [
      {
        trait: 'Overconfidence',
        description:
          'The Metal Monkey\'s track record of intellectual success can breed a dangerous overconfidence in their own judgment. They may dismiss others\' input, underestimate challenges, or take risks that their abilities cannot fully mitigate. This hubris is their most significant vulnerability — the blind spot created by being right so often that being wrong seems impossible.',
      },
      {
        trait: 'Emotional Detachment',
        description:
          'The Metal Monkey\'s analytical mind can become so dominant that emotional intelligence atrophies. They may treat relationships as strategic puzzles rather than human connections, valuing people for their utility rather than their inherent worth. This detachment, while professionally effective, can create a loneliness the Metal Monkey may not recognize until it becomes profound.',
      },
      {
        trait: 'Restless Dissatisfaction',
        description:
          'Metal Monkeys can achieve remarkable success and still feel unsatisfied. Their minds are always scanning for the next challenge, the better opportunity, the more interesting problem — making it difficult to appreciate what they have already accomplished. This restless dissatisfaction can drive achievement but also prevent contentment.',
      },
      {
        trait: 'Manipulative Tendencies',
        description:
          'The Metal Monkey\'s understanding of human psychology and persuasive skill can be used to manipulate others into serving the Monkey\'s interests. While often subtle enough to go undetected, this pattern erodes trust and genuine connection when it becomes a habitual approach to relationships rather than a reserved strategic tool.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Monkey is a Metal-phase animal by intrinsic nature — it already embodies Metal's qualities of cleverness, precision, and adaptability. When the Metal element is layered on top of this inherent Metal nature, the result is a double-Metal combination of extraordinary sharpness. This is not merely additive; it is the purest expression of Metal's essence: cutting intelligence, refined precision, and an almost obsessive drive toward perfection and achievement.

This double-Metal nature gives the Metal Monkey an intellectual edge that no other sign can match. Their minds are like finely honed instruments — capable of extraordinary precision, speed, and sustained focus. However, this same intensity can become a liability. Double-Metal creates a risk of excessive hardness: emotional coldness, intellectual arrogance, and a cutting quality in relationships that wounds where it intends only to sharpen.

The Metal Monkey's path to balance lies in cultivating Water and Fire influences — the flowing emotional intelligence of Water and the warming passion of Fire — that soften Metal's cutting edge without dulling it. The most complete Metal Monkeys are those who have learned to combine their peerless analytical gifts with genuine emotional warmth and passionate engagement.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Monkeys need partners who can match their intellectual pace, appreciate their ambition, and provide the emotional warmth that their Metal-heavy nature tends to lack. They are drawn to intelligence first — a partner who cannot engage them mentally will never hold their interest, regardless of other qualities.

The Monkey belongs to the First Trine alongside the Rat and the Dragon — signs that share the Monkey's ambition, energy, and action-oriented approach. These natural alliances create partnerships of extraordinary productivity and mutual respect. The Tiger sits opposite the Monkey on the zodiac wheel, creating a classic tension between the Monkey's cunning and the Tiger's direct force.`,

    bestMatches: [
      {
        slug: 'metal-rat',
        name: 'Metal Rat',
        score: 90,
        summary:
          'Two of the zodiac\'s sharpest minds in perfect strategic alignment. The Metal Rat\'s long-range planning complements the Metal Monkey\'s tactical brilliance, creating a partnership that can outmaneuver any competition. Their shared Metal element ensures mutual respect for intelligence and discipline, while the Rat\'s accumulative instinct grounds the Monkey\'s more experimental tendencies.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 88,
        summary:
          'The Earth Dragon\'s commanding vision and structural authority provide the platform the Metal Monkey needs to exercise their considerable talents. The Dragon provides scope and ambition; the Monkey provides ingenuity and execution. The Earth element grounds the partnership, preventing the shared drive for achievement from becoming untethered from reality.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 83,
        summary:
          'The Water Snake\'s deep intuition and psychological insight complement the Metal Monkey\'s analytical brilliance, creating a partnership of extraordinary intellectual depth. The Snake\'s patience counterbalances the Monkey\'s restlessness, while Water\'s emotional fluidity softens the Monkey\'s Metal-heavy nature.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 28,
        summary:
          'The zodiac opposition between Monkey and Tiger is sharpened by element conflict. The Fire Tiger\'s direct, principled approach clashes with the Metal Monkey\'s strategic, sometimes indirect methods. The Tiger views the Monkey as manipulative; the Monkey views the Tiger as simplistic. Fire melts Metal, adding destructive element tension to the fundamental personality clash.',
      },
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 38,
        summary:
          'The Fire Pig\'s warm, trusting nature feels naive to the calculating Metal Monkey, while the Monkey\'s strategic approach to relationships feels cynical to the Pig. The Pig needs emotional sincerity that the Metal Monkey struggles to provide, and the Monkey needs intellectual stimulation that the Pig cannot consistently deliver.',
      },
      {
        slug: 'wood-horse',
        name: 'Wood Horse',
        score: 42,
        summary:
          'The Wood Horse\'s need for freedom and direct action conflicts with the Metal Monkey\'s preference for strategic calculation. The Horse finds the Monkey overly complicated; the Monkey finds the Horse impulsive. Metal cuts Wood, creating an undercurrent where the Monkey\'s sharp analysis may undermine the Horse\'s confidence.',
      },
    ],

    elementAffinity: `The Metal Monkey's double-Metal constitution creates a particular need for elements that provide emotional warmth and balance. Water element signs are the most natural partners, as Metal generates Water — creating a relationship where the Monkey's sharp energy flows into emotional depth and wisdom. Earth element signs provide grounding stability and generate Metal, reinforcing the Monkey's strengths while adding substance and reliability. Fire element signs offer the warmth and passion the Metal Monkey often lacks but also create the destructive cycle tension (Fire melts Metal) that can feel threatening. Wood element signs may struggle under Metal's controlling influence, as Metal cuts Wood, leading to dynamics where the Monkey's analytical nature may unintentionally suppress their partner's growth.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Monkeys are among the most versatile and effective professionals in the zodiac. Their combination of analytical brilliance, creative problem-solving, and competitive drive makes them valuable in virtually any field that rewards intelligence and initiative. They are the people who get called when a problem seems unsolvable, a project needs rescuing, or an organization needs someone who can think five moves ahead.

The ideal Metal Monkey career provides intellectual challenge, competitive reward, and enough variety to keep their restless mind engaged. They excel in fields that require rapid learning, adaptive thinking, and the ability to connect disparate pieces of information into coherent strategies. Technology, finance, consulting, and creative industries are natural fits.

Metal Monkeys make exceptional leaders in fast-paced environments. Their combination of strategic vision, quick decision-making, and persuasive communication creates teams that move quickly and win consistently. However, they must guard against the tendency to view leadership purely as a strategic exercise — the most effective Metal Monkey leaders are those who combine their natural intelligence with genuine investment in their team's development.`,

    idealCareers: [
      'Technology Entrepreneur',
      'Management Consultant',
      'Hedge Fund Manager',
      'Product Manager',
      'Clinical Researcher',
      'Advertising Creative Director',
      'Patent Engineer',
      'Game Designer',
    ],

    financialStyle:
      'Metal Monkeys are aggressive, intelligent wealth builders who approach finance as the ultimate strategic game. They are excellent at identifying asymmetric opportunities — situations where the potential reward far exceeds the risk — and they have the analytical skill to distinguish genuine opportunity from speculation. Their challenge is the tendency to over-trade, constantly seeking the next clever move rather than allowing patient positions to compound. The most financially successful Metal Monkeys combine their tactical brilliance with the discipline to hold winning positions and the humility to recognize when simplicity outperforms cleverness.',

    tips: [
      'Channel your competitive drive into collaborative excellence. The Metal Monkey\'s greatest career achievements often come through teams, not individual effort. Learn to compete with external benchmarks rather than internal colleagues, and channel your winning instinct into making your entire organization better.',
      'Develop patience as a strategic advantage. Your quick mind can make you impatient with slower processes and thinkers. But some of the most valuable outcomes require time, and the Metal Monkey who masters patience adds the one dimension most other competitors cannot match.',
      'Build trust through consistency, not just results. Your track record speaks for itself, but long-term career success depends on relationships built through consistent behavior, kept promises, and genuine investment in others. People who trust you multiply your effectiveness far beyond what individual brilliance can achieve.',
      'Guard against burnout from intellectual overstimulation. Your mind never stops, and this can be exhausting even when it feels exhilarating. Build deliberate mental recovery practices — physical exercise, nature time, activities that require presence rather than analysis — into your routine.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love presents the Metal Monkey with their most significant challenge: the need to move from strategic brilliance into genuine emotional vulnerability. Their analytical mind is a tremendous asset in most areas of life, but in love, it can become an obstacle — constantly evaluating, calculating, and maintaining a strategic distance that prevents the full surrender that deep love requires.

Metal Monkeys are attracted to intelligence, wit, and competence. They fall for minds before bodies, and the initial stages of their courtship are often intellectually electric — sparkling conversations, playful debates, and a mutual appreciation for cleverness that creates powerful initial attraction. The challenge comes when the relationship matures beyond intellectual connection into emotional intimacy.

The Metal Monkey in love is capable of extraordinary devotion — but only when they decide to stop analyzing and start feeling. When they allow their guard to drop, they discover an emotional depth within themselves that their analytical mind had kept hidden, and the resulting love is as rich and complex as everything else the Metal Monkey produces.`,

    loveStyle:
      'The Metal Monkey expresses love through intellectual engagement, playful banter, and strategic acts of care — anticipating their partner\'s needs and engineering solutions before problems fully develop. They are witty, stimulating, and surprisingly generous partners who show devotion through competence: solving problems, creating opportunities, and making their partner\'s life measurably better through sheer cleverness. They need a partner who appreciates their mental gifts while gently encouraging the emotional openness that does not come naturally.',

    idealPartnerTraits: [
      'Intellectually Sharp',
      'Emotionally Warm',
      'Sense of Humor',
      'Independent',
      'Genuinely Honest',
    ],

    tips: [
      'Stop analyzing your partner and start appreciating them. Your habit of mentally evaluating everyone — including those you love — creates distance that undermines intimacy. Practice moments of pure appreciation where you simply enjoy your partner\'s presence without assessment.',
      'Be honest about your feelings, not just your thoughts. Metal Monkeys are excellent at sharing observations, opinions, and analyses but struggle to express the raw emotions beneath. Practice saying "I feel" instead of "I think," and notice how it changes the quality of your connection.',
      'Resist the urge to "win" arguments with your partner. Your verbal agility makes you a devastating debater, but winning an argument with your partner means your relationship loses. Use your intelligence to find solutions that honor both perspectives, not to prove your point.',
      'Create space for stillness together. Your restless mind constantly seeks stimulation, which can exhaust a partner who needs quieter forms of connection. Develop the ability to be peacefully present with someone — not doing, not analyzing, just being together.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Monkey's double-Metal constitution creates a health profile centered on the respiratory and elimination systems — the Metal element's primary domains in Traditional Chinese Medicine. The Lungs, Large Intestine, and skin are the organs most closely associated with this sign, and they tend to be the first systems affected when the Metal Monkey's high-output lifestyle creates imbalance.

The Metal Monkey's primary health pattern is mental overwork manifesting as physical symptoms. Their minds run continuously, processing information even during sleep, and this cognitive intensity depletes the body's resources. The most common complaints include tension headaches, jaw clenching, respiratory sensitivity, and digestive irregularity — all symptoms of a nervous system that is perpetually on alert.

The Metal Monkey's natural intelligence is an asset in health management — once they understand the mechanisms connecting their mental habits to their physical symptoms, they can implement evidence-based interventions with impressive discipline. The challenge is getting them to prioritize health before their body forces the issue.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Nervous System', 'Skin'],

    exercises: [
      'Rock climbing and bouldering',
      'Martial arts',
      'Circuit training',
      'Acrobatics or gymnastics',
    ],

    dietTips: [
      'Support the double-Metal constitution with foods that nourish the Lungs and Large Intestine: pears, white mushrooms, rice, oats, and fermented foods. These strengthen the organ systems most vulnerable to the Metal Monkey\'s high-intensity lifestyle.',
      'Balance mental intensity with grounding nutrition. The Metal Monkey\'s busy mind requires steady fuel: complex carbohydrates, healthy fats, and consistent protein intake. Avoid the pattern of snacking on stimulants and sugar while absorbed in mental work.',
      'Include foods that support nervous system health: omega-3 fatty acids, B-vitamin rich whole grains, magnesium-rich leafy greens, and adaptogenic herbs like ashwagandha or reishi mushroom. These counter the neural depletion that constant cognitive output creates.',
      'Eat away from screens and work. The Metal Monkey\'s habit of multitasking during meals disrupts digestion and prevents the body from shifting into the parasympathetic state necessary for proper nutrient absorption. Meal times should be genuine breaks from mental activity.',
    ],

    mentalHealth:
      'The Metal Monkey\'s mental health challenge is the difficulty of quieting a mind that never stops. Their intelligence, while their greatest asset, can become a source of suffering when directed inward — spiraling analysis, self-criticism, and the exhausting habit of mentally rehearsing every possible outcome of every situation. Anxiety is the most common mental health concern for this sign, often masked behind a confident exterior. Mindfulness-based interventions are particularly effective because they address the core issue: training the attention to rest rather than constantly scan. Physical activities that require complete present-moment focus — climbing, martial arts, complex movement practices — provide mental rest through active engagement. The most important insight for the Metal Monkey\'s mental well-being is that intelligence is a tool, not an identity. Learning to set the tool down — to simply exist without analyzing, evaluating, or strategizing — is the practice that transforms a brilliant but exhausted mind into a brilliant and peaceful one.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 7, 8],
    colors: ['White', 'Gold', 'Silver', 'Blue'],
    direction: 'West',
    gemstones: ['White Diamond', 'Aquamarine', 'Citrine'],
    flowers: ['White Chrysanthemum', 'Allium', 'Bird of Paradise'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL MONKEYS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Ryan Gosling',
        profession: 'Actor/Director',
        birthYear: 1980,
        description:
          'Ryan Gosling\'s intelligent, multi-faceted career — seamlessly transitioning between blockbuster action, romantic drama, and dark indie cinema — reflects the Metal Monkey\'s extraordinary versatility and strategic career management. His understated charisma and precise performance choices demonstrate the sign\'s combination of natural talent and calculated excellence.',
      },
      {
        name: 'Kim Kardashian',
        profession: 'Entrepreneur/Media Mogul',
        birthYear: 1980,
        description:
          'Kim Kardashian\'s transformation of personal brand into a multi-billion-dollar business empire exemplifies the Metal Monkey\'s strategic genius and relentless ambition. Her ability to anticipate trends, leverage media, and systematically build business ventures demonstrates the sign\'s characteristic fusion of social intelligence and disciplined execution.',
      },
      {
        name: 'Venus Williams',
        profession: 'Tennis Champion/Entrepreneur',
        birthYear: 1980,
        description:
          'Venus Williams\'s combination of athletic brilliance, business acumen, and pioneering advocacy for equal prize money reflects the Metal Monkey\'s multifaceted excellence. Her strategic evolution from dominant athlete to successful entrepreneur demonstrates the sign\'s ability to apply competitive intelligence across multiple domains.',
      },
      {
        name: 'Macaulay Culkin',
        profession: 'Actor',
        birthYear: 1980,
        description:
          'Macaulay Culkin\'s journey — from child superstar to deliberate withdrawal to reinvented career on his own terms — reflects the Metal Monkey\'s strategic intelligence and desire for control over their own narrative. His ability to transform cultural nostalgia into contemporary relevance demonstrates the sign\'s alchemical gift.',
      },
      {
        name: 'Isaac Asimov',
        profession: 'Scientist/Science Fiction Author',
        birthYear: 1920,
        description:
          'Isaac Asimov\'s extraordinary intellectual range — producing over 500 books spanning science, history, and science fiction — epitomizes the Metal Monkey\'s combination of brilliant versatility and productive discipline. His ability to make complex ideas accessible through elegant writing reflects the sign\'s gift for transforming raw intelligence into universally valuable output.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Monkey holds the ninth position in the Chinese zodiac and is perhaps its most culturally celebrated animal, thanks largely to the immortal character of Sun Wukong — the Monkey King — from the classic novel Journey to the West. Sun Wukong embodies every Monkey quality in mythological extreme: brilliant, resourceful, rebellious, and ultimately redeemed through discipline. His story arc — from arrogant trickster to disciplined protector — mirrors the ideal Metal Monkey journey.

When Metal combines with the Monkey, the mythological resonance is particularly strong. Metal is the Monkey's intrinsic element, making the Metal Monkey a "double Monkey" — the purest expression of the Monkey archetype. In traditional Chinese astrology, Metal Monkey years are considered years of extraordinary cleverness and decisive change, when problems that have resisted conventional solutions yield to innovative thinking.

The Monkey's association with the number nine (its zodiac position) connects it to the concept of completion and transformation in Chinese numerology. The Metal Monkey thus carries the mythological weight of a transformative force — the intelligence that completes what others have left unfinished and transforms what others have deemed impossible.`,

    symbolism: `The Metal Monkey symbolizes the alchemy of intelligence — the ability to transform ordinary circumstances into extraordinary outcomes through the application of wit, strategy, and disciplined creativity. In Five Element symbolism, Metal represents refined tools and precious materials — the products of intelligent labor applied to raw nature. The Monkey, as Metal's native animal, embodies this transformation at its most dynamic.

The double-Metal nature of the Metal Monkey creates a symbolism of concentrated sharpness — the blade within the blade, the mirror reflecting a mirror. This sign represents intelligence aware of itself, strategy applied to strategy, and the recursive nature of truly deep thinking. The Metal Monkey is the zodiac's philosopher-engineer: capable of both conceiving abstract ideas and implementing them with practical precision.

In traditional Chinese art, the Monkey is often depicted reaching for the moon's reflection in water — an image of brilliant intelligence chasing an impossible goal. The Metal Monkey adds to this image a net of metal wire: the strategic tool that might actually capture what pure cleverness alone cannot hold.`,

    modernInterpretation: `In contemporary culture, the Metal Monkey archetype is the entrepreneur, the engineer, and the innovator — the individual whose combination of quick thinking, strategic discipline, and competitive drive defines the pace of modern progress. In the technology sector particularly, Metal Monkey qualities are disproportionately represented among the most successful founders, developers, and strategists.

Modern interpretations emphasize both the Metal Monkey's extraordinary potential and their ethical responsibilities. The power to solve complex problems, influence public opinion, and reshape systems carries a corresponding obligation to consider the consequences of cleverness — to ensure that elegant solutions serve human flourishing rather than merely demonstrating intellectual superiority.

For those born in Metal Monkey years, the contemporary world is a natural habitat. The premium on innovation, adaptive thinking, and strategic communication aligns perfectly with their inherent strengths. Their growth edge lies in developing the emotional depth and ethical grounding that transforms brilliant problem-solving from a personal advantage into a force for collective benefit.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
