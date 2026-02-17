// ============================================
// FIRE RABBIT (丙卯) — The Radiant Diplomat
// ============================================
// Fire transforms the Rabbit's gentle diplomacy into
// passionate advocacy, creating a charismatic peacemaker
// with hidden steel and irresistible persuasive power.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-rabbit',
  profile: getProfileBySlug('fire-rabbit')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Rabbit is the most dynamic and outwardly expressive member of the Rabbit family. Where other Rabbits rely on quiet diplomacy, subtle influence, and the gentle art of avoiding confrontation, the Fire Rabbit steps into the spotlight with a warmth and charisma that transforms their natural social gifts into something altogether more powerful. They are the Rabbit who speaks up, who takes the stage, who uses their refined emotional intelligence not just to navigate social situations but to actively shape them.

What makes the Fire Rabbit fascinating is the tension between the Rabbit's inherent desire for harmony and Fire's passionate intensity. The standard Rabbit avoids conflict at almost any cost; the Fire Rabbit has a cause worth fighting for. This does not make them aggressive — the Rabbit's elegance never fully disappears — but it gives their diplomacy a backbone and their charm a purpose. They are the velvet glove with a warm hand inside, persuading through a combination of genuine kindness and irresistible conviction.

The Fire Rabbit's challenge is managing the internal friction between their peaceful nature and their passionate drive. They feel things deeply — more deeply than they often let on — and the gap between their desire for harmony and their fire-driven need to act can create significant internal stress. The Fire Rabbit who learns to honor both their gentle nature and their fierce convictions, rather than suppressing either, achieves a rare and powerful integration that makes them one of the most effective leaders in the zodiac.`,

    coreTraits: [
      'Charismatic',
      'Diplomatic',
      'Idealistic',
      'Sensitive',
      'Articulate',
      'Warm',
    ],

    strengths: [
      {
        trait: 'Persuasive Eloquence',
        description:
          'The Fire Rabbit is the zodiac\'s most gifted communicator. They combine the Rabbit\'s natural sensitivity to others\' feelings with Fire\'s passionate conviction, creating arguments that appeal simultaneously to the heart and the mind. They can change opinions without creating enemies — a rare skill that makes them invaluable in negotiations, politics, and any situation where consensus must be built.',
      },
      {
        trait: 'Emotional Intelligence',
        description:
          'Fire Rabbits possess an almost supernatural ability to read emotional currents in a room. They sense tension before it erupts, understand motivations that others cannot articulate, and respond to people\'s unspoken needs with a precision that feels like mind reading. Fire adds warmth and directness to this perception, allowing them to address emotional realities that more cautious Rabbits would politely ignore.',
      },
      {
        trait: 'Graceful Courage',
        description:
          'The Fire Rabbit possesses a form of courage that is uniquely their own — not the roaring bravery of the Tiger or the reckless charge of the Horse, but a quiet, determined willingness to stand up for their beliefs with dignity and composure. They confront injustice not with anger but with articulate moral clarity that is far more difficult to dismiss.',
      },
      {
        trait: 'Cultural Sophistication',
        description:
          'The Rabbit\'s natural aesthetic sensitivity, ignited by Fire\'s creative passion, produces a person of exceptional cultural awareness and refined taste. Fire Rabbits are drawn to beauty in all its forms and have an instinctive ability to create environments, experiences, and communications that resonate on a deep aesthetic level.',
      },
    ],

    challenges: [
      {
        trait: 'Conflict Avoidance Under Pressure',
        description:
          'Despite Fire\'s added courage, the Rabbit\'s fundamental aversion to conflict can resurface under intense pressure. When situations escalate beyond their ability to manage diplomatically, Fire Rabbits may withdraw, capitulate, or suppress their true feelings rather than risk the discomfort of direct confrontation. This pattern can lead to resentment and passive-aggressive behavior.',
      },
      {
        trait: 'People-Pleasing',
        description:
          'The Fire Rabbit\'s desire to be liked and admired can compromise their integrity. They may modify their positions to maintain popularity, agree to commitments they cannot fulfill, or sacrifice their own needs to keep others happy. Fire adds the additional pressure of wanting to be seen as passionate and principled, creating a painful gap between their public persona and private compromises.',
      },
      {
        trait: 'Sensitivity to Criticism',
        description:
          'Fire Rabbits take criticism personally and deeply. Their refined sensibilities and strong sense of self-worth make them vulnerable to perceived slights, and they can nurse emotional wounds long after the offending party has forgotten the incident. This sensitivity can limit their willingness to take risks or expose their work to public evaluation.',
      },
      {
        trait: 'Internal Stress',
        description:
          'The tension between the Rabbit\'s desire for peace and Fire\'s passionate intensity creates significant internal pressure. Fire Rabbits may appear calm and composed on the surface while experiencing considerable anxiety, frustration, or emotional turmoil underneath. This disconnect between inner experience and outer presentation can lead to stress-related health issues.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rabbit is associated with the Wood element — growth, flexibility, and the gentle power of spring. When Fire is added to this Wood-natured animal, the productive cycle activates: Wood feeds Fire. However, the Rabbit's expression of Wood is far gentler than the Tiger's — more sapling than oak, more grass than forest. The Fire that the Rabbit's Wood nature feeds is therefore a different kind of fire: warm rather than blazing, illuminating rather than incinerating, inviting rather than overwhelming.

This gentler Wood-Fire dynamic gives the Fire Rabbit their characteristic warmth and radiance without the volcanic intensity of other Fire signs. They glow rather than blaze, attract rather than overwhelm, and persuade rather than demand. The risk in this combination is that the gentle Wood can be consumed too quickly by Fire's demands, leaving the Rabbit depleted and brittle. Fire Rabbits must actively replenish their Wood nature through rest, creative expression, time in nature, and relationships that nourish rather than drain. Water element influences are particularly beneficial, as Water nourishes Wood, which in turn sustains Fire — creating a cycle of renewal that prevents burnout.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Rabbit's compatibility is shaped by their need for a partner who provides both emotional depth and practical stability. They are drawn to people who appreciate their warmth and cultural sophistication while offering the groundedness that the Rabbit sometimes lacks. The ideal partner for a Fire Rabbit is emotionally articulate, aesthetically aware, and strong enough to provide security without being domineering.

Traditional Chinese astrology places the Rabbit in the "Wood Trine" alongside the Goat and the Pig — animals that share the Rabbit's gentle nature, appreciation for beauty, and preference for harmony. These three signs form natural alliances built on mutual empathy and shared values. The Rabbit's greatest challenge comes from the Rooster, which sits in direct opposition and represents the blunt, critical approach that the diplomatic Rabbit finds abrasive.`,

    bestMatches: [
      {
        slug: 'water-goat',
        name: 'Water Goat',
        score: 92,
        summary:
          'A beautifully harmonious partnership of two aesthetically gifted, emotionally sensitive signs. The Water Goat\'s creative depth and gentle nature creates a relationship of exquisite tenderness and mutual understanding. Both signs value beauty, comfort, and emotional authenticity, and Water\'s nourishing influence supports the Fire Rabbit\'s Wood nature while cooling Fire\'s occasional intensity.',
      },
      {
        slug: 'wood-pig',
        name: 'Wood Pig',
        score: 88,
        summary:
          'The Wood Pig\'s warmth, generosity, and genuine goodness appeals deeply to the Fire Rabbit\'s idealistic nature. Both signs believe in the power of kindness and are committed to creating harmonious environments. The Wood element shared between them creates a foundation of mutual growth, while the Pig\'s easygoing nature provides the Fire Rabbit with emotional safety to be fully themselves.',
      },
      {
        slug: 'earth-dog',
        name: 'Earth Dog',
        score: 83,
        summary:
          'The Earth Dog\'s loyalty and principled nature earns the Fire Rabbit\'s deep trust. The Dog shares the Rabbit\'s concern for justice but adds a directness and protective strength that the Rabbit admires. The Earth element grounds the relationship, providing the stability that Fire Rabbits need to feel secure enough to take emotional risks.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 30,
        summary:
          'The Metal Rooster\'s blunt honesty and exacting standards create constant friction with the Fire Rabbit\'s sensitive, harmony-seeking nature. The Rooster\'s criticism — however well-intentioned — wounds the Rabbit deeply, while the Rabbit\'s diplomatic indirectness frustrates the Rooster\'s need for straightforward communication. Metal\'s sharpness against Fire\'s warmth creates a relationship that feels abrasive.',
      },
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 38,
        summary:
          'The Fire Dragon\'s overwhelming intensity and need to dominate every space conflicts with the Fire Rabbit\'s need for gentleness and equilibrium. The Dragon\'s grandiose energy exhausts the Rabbit, while the Rabbit\'s subtlety and restraint frustrates the Dragon\'s desire for dramatic engagement. Double Fire creates heat without harmony.',
      },
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 42,
        summary:
          'The Water Rat\'s calculating social strategies and competitive ambition makes the Fire Rabbit uncomfortable. The Rabbit prefers genuine warmth to strategic networking, and the Rat\'s tendency to view relationships as transactions clashes with the Rabbit\'s idealistic view of human connection. The Rabbit feels used; the Rat feels constrained by the Rabbit\'s moral expectations.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Wood animal, the Fire Rabbit benefits from partnerships that nourish their gentle Wood nature. Water element signs are ideal — Water feeds Wood in the productive cycle, helping the Fire Rabbit replenish the emotional resources that Fire constantly draws upon. Earth element signs provide grounding stability that the Fire Rabbit appreciates, especially during periods of stress or uncertainty. Wood element signs create deeply empathetic bonds based on shared sensitivity and values, though the relationship may lack the grounding influence both partners need. Metal element signs present challenges — Metal chops Wood in the destructive cycle, which can feel threatening to the Rabbit's delicate constitution, and Metal's critical nature clashes with Fire's warmth.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Rabbit excels in careers that combine interpersonal skills with creative expression or ethical purpose. They are natural mediators, counselors, and communicators who bring warmth, sophistication, and emotional intelligence to their professional environments. Unlike more aggressive signs, the Fire Rabbit advances through relationships, reputation, and the quiet accumulation of influence rather than confrontation or self-promotion.

The ideal Fire Rabbit career allows them to make a meaningful difference while working in aesthetically pleasing, harmonious environments. They wilt in harsh, competitive workplaces and thrive in collaborative settings that value emotional intelligence alongside technical competence. Roles that combine creativity, service, and social interaction are their sweet spot.

Financially, Fire Rabbits are moderate and tasteful spenders who value quality over quantity. They are attracted to beautiful things and comfortable environments, which can lead to spending more than they realize on aesthetics and lifestyle. Their financial strength lies in their excellent judgment about people and trends, which serves them well in relationship-driven business contexts.`,

    idealCareers: [
      'Diplomat or Ambassador',
      'Interior Designer',
      'Counselor or Therapist',
      'Art Gallery Director',
      'Human Resources Director',
      'Wedding or Event Planner',
      'Public Relations Specialist',
      'Nonprofit Executive',
    ],

    financialStyle:
      'Fire Rabbits are tasteful earners who prefer elegant sufficiency over aggressive wealth accumulation. They are drawn to careers that offer a comfortable lifestyle rather than maximum earning potential, and they spend thoughtfully on quality, beauty, and experiences. Their financial risk is lifestyle inflation — gradually increasing expenses to match their refined tastes until savings become inadequate. The Fire Rabbit benefits from establishing clear financial boundaries early and automating savings before discretionary spending.',

    tips: [
      'Leverage your relationship skills deliberately. Your ability to build trust and consensus is a professional superpower — use it strategically to advance your career rather than leaving it to operate passively. Seek roles where relationship building is the core function, not just a pleasant bonus.',
      'Develop comfort with constructive conflict. Your aversion to disagreement can prevent you from advocating effectively for your ideas and your team. Practice expressing dissent diplomatically but clearly, and recognize that well-managed conflict often leads to better outcomes than false harmony.',
      'Protect your energy boundaries at work. Your emotional sensitivity makes you an excellent colleague but also makes you vulnerable to absorbing others\' stress. Learn to be empathetic without being absorbent, and establish clear boundaries between your emotional capacity and others\' emotional needs.',
      'Build a visible portfolio. Your natural modesty can prevent your accomplishments from being recognized. Document your contributions, share your successes appropriately, and ensure that decision-makers understand the value you bring — the Fire Rabbit who is both effective and visible advances faster.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Rabbit is one of the zodiac's most devoted and attentive lovers. They bring an extraordinary combination of warmth, sensitivity, and romantic idealism to their relationships, creating partnerships that feel like stepping into a beautifully curated world of mutual care and aesthetic pleasure. When a Fire Rabbit loves, they create an environment of such tenderness and thoughtfulness that their partner feels genuinely cherished.

The Fire Rabbit's romantic nature combines the Rabbit's legendary capacity for devotion with Fire's passionate warmth. They are attentive to details — remembering preferences, anticipating needs, creating moments of beauty and connection that demonstrate how deeply they pay attention. Romance is not a phase for the Fire Rabbit; it is a sustained practice of showing love through thoughtful action.

The challenge in Fire Rabbit relationships is the gap between their romantic ideals and messy reality. They envision relationships of perfect harmony and mutual understanding, and they can become disillusioned when the inevitable conflicts and imperfections of real partnership intrude. The Fire Rabbit who learns to love imperfect people imperfectly — accepting mess and conflict as natural parts of deep connection — finds a richness that their idealized version could never provide.`,

    loveStyle:
      'The Fire Rabbit loves with warmth, attentiveness, and an almost artistic dedication to creating beautiful shared experiences. They are romantic in the truest sense — valuing emotional connection, aesthetic pleasure, and the creation of a shared world that reflects their refined sensibilities. They express love through thoughtful gestures, quality time, and creating environments where their partner feels safe, seen, and cherished. They need a partner who reciprocates this attentiveness and who values depth of connection over excitement.',

    idealPartnerTraits: [
      'Emotionally Available',
      'Aesthetically Aware',
      'Gentle but Strong',
      'Communicative',
      'Dependable',
    ],

    tips: [
      'Accept imperfection as part of love. Your romantic ideals are beautiful but can become a prison if you measure every real moment against a fantasy standard. Practice appreciating what is, even when it falls short of what you imagined.',
      'Express your needs directly. Your tendency to hint, suggest, and hope your partner will intuit what you need often leads to disappointment. Practice making clear, direct requests without framing them as complaints or criticisms.',
      'Build resilience through small conflicts. Avoiding every disagreement creates a fragile relationship that shatters under the first real stress. Allow minor conflicts to arise and be resolved, building the trust and communication skills that sustain relationships through genuine challenges.',
      'Maintain your own identity within the relationship. Your devotion to your partner can cause you to lose touch with your own passions, friendships, and goals. A Fire Rabbit who maintains a rich individual life brings more vitality to the partnership than one who has merged entirely into the couple.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Rabbit's health profile reflects the gentle tension between their peaceful Wood nature and the demands of Fire's intensity. In Traditional Chinese Medicine, the Rabbit's Wood element governs the Liver and the smooth flow of qi throughout the body. When this flow is disrupted by stress, emotional suppression, or overwork, the Fire Rabbit is vulnerable to conditions that reflect stagnation and internal heat.

The Fire Rabbit's primary health vulnerability is stress that they absorb but do not express. Their desire for harmony leads them to internalize tension, swallow anger, and present a calm exterior while their internal landscape churns with unexpressed emotion. This pattern can manifest as headaches, digestive disturbances, skin conditions, and a generalized anxiety that seems to have no obvious cause.

The Fire Rabbit's greatest health asset is their appreciation for beauty and comfort, which naturally draws them toward healing environments, aesthetic pleasures, and self-care practices. When they direct this refined sensibility toward their own well-being — creating calming spaces, choosing nourishing foods, and surrounding themselves with supportive people — they maintain excellent health and remarkable longevity.`,

    bodyAreas: ['Liver', 'Skin', 'Nervous System', 'Upper Back'],

    exercises: [
      'Yoga and Pilates',
      'Dance classes',
      'Nature walks and gentle hiking',
      'Tai chi or qigong',
    ],

    dietTips: [
      'Eat foods that support smooth Liver qi flow: leafy greens, sprouts, berries, and foods rich in antioxidants. The Fire Rabbit\'s Liver is their constitutional anchor, and nourishing it with clean, vibrant foods supports their overall vitality.',
      'Avoid excessive sugar and processed foods that create internal dampness and heat. The Fire Rabbit\'s sensitive digestive system responds poorly to artificial ingredients and benefits from whole, minimally processed meals.',
      'Include anti-inflammatory foods regularly: turmeric, ginger, omega-3 rich fish, and green tea. The Fire element\'s tendency toward heat-related conditions is best managed through dietary cooling rather than medication.',
      'Create beautiful meal experiences. The Fire Rabbit\'s well-being is enhanced by the aesthetics of dining — attractive presentation, pleasant environments, and unhurried meals. This is not indulgence; it is a legitimate health practice that reduces cortisol and improves digestion.',
    ],

    mentalHealth:
      'The Fire Rabbit\'s mental health is closely tied to their sense of belonging and their ability to express their authentic self without fear of rejection. They thrive in supportive environments where emotional honesty is valued and vulnerability is safe. When these conditions are absent — in harsh workplaces, critical relationships, or isolating circumstances — the Fire Rabbit\'s mental health can deteriorate rapidly into anxiety, depression, or somatic symptoms. Creative expression is essential medicine for this sign: journaling, painting, music, or any practice that allows them to process emotions through beauty rather than words alone. The Fire Rabbit benefits from therapists who combine emotional depth with practical strategies — approaches like art therapy, mindfulness-based stress reduction, or emotionally focused therapy resonate deeply with their nature.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Red', 'Pink', 'Coral', 'Peach'],
    direction: 'South',
    gemstones: ['Rose Quartz', 'Rhodonite', 'Garnet'],
    flowers: ['Rose', 'Jasmine', 'Lily of the Valley'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE RABBITS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Sidney Poitier',
        profession: 'Actor/Director',
        birthYear: 1927,
        description:
          'Sidney Poitier embodied the Fire Rabbit\'s graceful courage, breaking racial barriers in Hollywood with dignity, eloquence, and an unwavering commitment to portraying Black characters with intelligence and humanity. His refined presence and principled career choices exemplify the Fire Rabbit\'s ability to transform society through quiet, persistent moral authority.',
      },
      {
        name: 'Coretta Scott King',
        profession: 'Civil Rights Leader',
        birthYear: 1927,
        description:
          'Coretta Scott King personified the Fire Rabbit\'s blend of gentle warmth and fierce conviction. Her lifelong dedication to civil rights and peace, pursued with elegance and unwavering determination, shows how the Fire Rabbit\'s diplomatic gifts can serve the highest causes while maintaining the composure and grace that defines this sign.',
      },
      {
        name: 'Lionel Messi',
        profession: 'Soccer Player',
        birthYear: 1987,
        description:
          'Lionel Messi\'s playing style is pure Fire Rabbit — graceful, precise, and devastatingly effective without ever appearing forceful or aggressive. His quiet demeanor off the pitch contrasts with his passionate brilliance on it, embodying the Fire Rabbit\'s ability to achieve extraordinary things through elegance rather than brute force.',
      },
      {
        name: 'Cesar Chavez',
        profession: 'Labor Leader/Activist',
        birthYear: 1927,
        description:
          'Cesar Chavez demonstrated the Fire Rabbit\'s capacity for passionate advocacy pursued through peaceful means. His nonviolent approach to labor organizing, combined with deep moral conviction and personal sacrifice, reflects the Fire Rabbit\'s belief that gentleness and determination are not contradictions but complementary forces.',
      },
      {
        name: 'Hilary Duff',
        profession: 'Actress/Singer',
        birthYear: 1987,
        description:
          'Hilary Duff\'s transition from teen star to respected actress and businesswoman showcases the Fire Rabbit\'s ability to evolve gracefully through different life stages. Her warm public persona, commitment to family, and steady career reinvention reflect the Fire Rabbit\'s combination of genuine warmth and quiet ambition.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rabbit holds the fourth position in the Chinese zodiac and is one of the most beloved animals in East Asian mythology. In Chinese tradition, the Jade Rabbit (Yu Tu) lives on the Moon, where it eternally pounds the elixir of immortality in a mortar — a symbol of devoted, tireless service to a transcendent cause. This lunar association gives the Rabbit a deep connection to yin energy, intuition, and the quiet power of receptivity.

When Fire transforms this gentle, lunar creature, the mythological resonance shifts in intriguing ways. The Fire Rabbit represents the rare moment when yin and yang achieve perfect balance within a single being — the Moon-dwelling creature touched by the Sun's fire, the gentle diplomat with a warrior's heart. In Daoist philosophy, this combination represents the ideal of "wu wei" perfected: effortless action guided by deep feeling, power expressed through grace rather than force.

In Vietnamese culture, the Rabbit's zodiac position is occupied by the Cat, giving this sign an additional layer of independence and mystery. The Fire Cat of Vietnamese tradition is associated with sacred temple guardians — beings of quiet power who protect sacred spaces through presence rather than aggression.`,

    symbolism: `The Fire Rabbit symbolizes the transformative power of gentleness — the radical idea that kindness, beauty, and compassion are not weaknesses but some of the most potent forces in human experience. In traditional Wu Xing symbolism, the Rabbit's gentle Wood nature feeding Fire represents the way small, sustained acts of care and creation can generate warmth and light that illuminates entire communities.

The Fire Rabbit also symbolizes refined passion — desire that has been cultivated, shaped, and directed rather than expressed as raw impulse. Unlike the explosive intensity of the Fire Tiger or the volcanic drive of the Fire Horse, the Fire Rabbit's passion is like a carefully tended hearth: warm enough to sustain life, bright enough to illuminate truth, and controlled enough to last through the longest night.

In the cycle of seasons, the Rabbit is associated with spring — the time of gentle awakening, tender growth, and the return of warmth. Fire's influence on this spring energy suggests an early bloom, a warmth that arrives sooner than expected and opens possibilities that others cannot yet see.`,

    modernInterpretation: `In contemporary culture, the Fire Rabbit resonates as the archetype of the conscious leader — the person who achieves influence through empathy, emotional intelligence, and genuine concern for others rather than through aggression or self-promotion. In an era increasingly suspicious of loud, domineering leadership, the Fire Rabbit's model of warm authority and graceful influence feels especially relevant.

The Fire Rabbit years of 1927 and 1987 produced generations that contributed significantly to social progress through principled, dignified action. The 1927 cohort included civil rights pioneers who changed the world not through violence but through moral courage expressed with extraordinary grace — embodying the Fire Rabbit's belief that the most powerful revolutions begin with acts of compassion.

For modern Fire Rabbits, the key insight is that their sensitivity and desire for harmony are not obstacles to success but potential foundations for a different kind of leadership. In a world overwhelmed by noise, aggression, and polarization, the Fire Rabbit's ability to create spaces of warmth, understanding, and genuine human connection is not just personally fulfilling — it is culturally necessary.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
