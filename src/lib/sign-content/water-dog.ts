// ============================================
// WATER DOG (壬戌) — The Faithful Tide
// ============================================
// The Water Dog combines the Dog's unwavering loyalty and
// moral compass with Water's emotional depth and intuitive
// wisdom — producing the zodiac's most empathetic guardian
// and principled counselor.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-dog',
  profile: getProfileBySlug('water-dog')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Dog is the most emotionally intuitive and compassionate of all Dog variants. Where the Dog is already defined by its fierce loyalty, moral conviction, and protective instincts, the Water element adds a dimension of emotional depth, empathetic understanding, and adaptive wisdom that transforms the Dog's sometimes rigid righteousness into something genuinely healing. The Water Dog does not merely guard — they understand, sensing what people need and providing it with a selflessness that is both beautiful and, at times, self-depleting.

What distinguishes the Water Dog from other Dog variants is the element's transformative effect on the Dog's emotional landscape. While all Dogs feel deeply, the Water Dog feels with a breadth and fluidity that allows them to empathize with perspectives that other, more rigid Dog variants might reject. They can hold moral convictions firmly while simultaneously understanding — genuinely, not just intellectually — how someone arrived at a different conclusion. This empathetic flexibility makes them exceptional mediators, counselors, and friends who are sought out during life's most difficult moments.

Beneath the Water Dog's warm, approachable exterior lies an emotional world of considerable complexity and occasional turbulence. They absorb the emotional states of those around them with an openness that, while generous, can leave them struggling to distinguish their own feelings from those they have absorbed. The Water Dog's chronic worry — about loved ones, about the state of the world, about whether they are doing enough — is the shadow of their extraordinary care. Their lifelong growth lies in learning that they cannot carry everyone's burden and that protecting themselves is not a betrayal of the loyalty that defines them.`,

    coreTraits: [
      'Loyal',
      'Empathetic',
      'Principled',
      'Intuitive',
      'Protective',
      'Compassionate',
    ],

    strengths: [
      {
        trait: 'Unconditional Loyalty',
        description:
          'The Water Dog\'s loyalty is legendary and absolute. When they commit to a person, a cause, or a principle, they commit with their entire being — and no amount of difficulty, disappointment, or personal sacrifice will shake that commitment. Water\'s depth makes this loyalty not blind but informed: the Water Dog loves people as they truly are, not as idealized projections.',
      },
      {
        trait: 'Empathetic Wisdom',
        description:
          'The Water Dog combines the Dog\'s natural compassion with Water\'s emotional depth, producing a capacity for empathy that borders on telepathic. They sense suffering before it is expressed, understand context before it is explained, and offer comfort that is precisely calibrated to the situation. This empathetic wisdom makes them natural healers, counselors, and confidants.',
      },
      {
        trait: 'Moral Courage',
        description:
          'The Water Dog\'s strong moral compass drives them to stand up for what is right, even when doing so is personally costly. Water\'s influence ensures this courage is not merely combative but thoughtful — the Water Dog advocates for justice with emotional intelligence, building coalitions and persuading through genuine appeal rather than confrontational demand.',
      },
      {
        trait: 'Intuitive Protection',
        description:
          'The Water Dog senses danger — physical, emotional, and social — before it manifests. Their protective instincts, deepened by Water\'s intuitive awareness, create an early warning system that guards not just their own well-being but that of everyone in their care. They are the friend who texts "Are you okay?" precisely when you are not, seemingly without explanation.',
      },
    ],

    challenges: [
      {
        trait: 'Chronic Worry',
        description:
          'The Water Dog\'s empathetic awareness extends to a seemingly infinite range of potential threats and sufferings. They worry about their children, their partners, their friends, the homeless person they passed on the street, climate change, and the state of humanity — all simultaneously. This chronic worry, while rooted in genuine care, can escalate into anxiety that prevents enjoyment of the present and erodes physical health.',
      },
      {
        trait: 'Self-Sacrifice',
        description:
          'The Water Dog\'s loyalty and empathy can drive them to sacrifice their own needs, health, and happiness in service of others. They may stay in damaging relationships out of loyalty, work themselves to exhaustion for causes they believe in, and neglect their own well-being because attending to it feels selfish when others are suffering. This self-sacrifice, paradoxically, eventually diminishes their capacity to help anyone.',
      },
      {
        trait: 'Pessimistic Realism',
        description:
          'The Water Dog\'s perceptive awareness of the world\'s suffering can tilt into persistent pessimism. They see the problems, feel the pain, and anticipate the worst with a vividness that makes optimism feel naive and hope feel irresponsible. This pessimistic realism can become a self-fulfilling prophecy, draining the energy and enthusiasm necessary to create the changes they care so deeply about.',
      },
      {
        trait: 'Difficulty Receiving',
        description:
          'The Water Dog is far more comfortable giving than receiving. Offers of help, compliments, and care make them uncomfortable because they do not believe they deserve the same generosity they extend to others. This difficulty receiving creates an imbalance in relationships that eventually exhausts even the most devoted partners and friends.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dog is associated with Earth energy — loyal, stable, and protective of what it values. When Water is layered onto this Earth-natured animal, the combination follows the controlling cycle: Earth dams and contains Water, while Water erodes and softens Earth. This creates a personality of productive tension — the Dog's Earth stability provides structure for Water's emotional depth, while Water's flow prevents Earth from becoming rigid and judgmental.

This Earth-Water dynamic gives the Water Dog a unique quality: they are both grounded and emotionally fluid, both principled and empathetic, both protective and understanding. They can hold firm moral positions while remaining genuinely open to the complexities that make moral certainty difficult. This combination makes them extraordinarily effective in roles that require both conviction and compassion — pastoral counseling, social work, human rights advocacy, and any field where understanding people is as important as upholding principles. The risk lies in the controlling cycle's tension: too much Earth can dam Water's emotional flow, leading to suppression and eventual flooding; too much Water can erode Earth's stability, undermining the principled groundedness that gives the Dog's loyalty its power.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Dog seeks partners who are fundamentally trustworthy, emotionally warm, and strong enough to reassure the Dog's anxious protective instincts. They need someone who can receive their devotion without taking advantage of it and who gently insists that the Dog care for themselves as well as others. The Dog belongs to the Third Trine alongside the Tiger and the Horse — courageous, justice-oriented signs that share the Dog's commitment to doing what is right.

The Dog sits in opposition to the Dragon on the zodiac wheel, creating tension between the Dog's principled vigilance and the Dragon's grandiose ambition. For the Water Dog, this opposition is felt acutely — they perceive the Dragon's self-importance as a threat to the communal values they hold sacred.`,

    bestMatches: [
      {
        slug: 'water-tiger',
        name: 'Water Tiger',
        score: 93,
        summary:
          'An ideal partnership of shared courage and complementary depth. The Water Tiger\'s protective strength and intuitive leadership align perfectly with the Water Dog\'s loyal devotion and moral compass. Both Water signs, they share an emotional wavelength that allows deep, intuitive communication. The Tiger provides the confidence the Dog sometimes lacks, while the Dog provides the principled grounding the Tiger needs.',
      },
      {
        slug: 'wood-rabbit',
        name: 'Wood Rabbit',
        score: 88,
        summary:
          'A gentle, nurturing partnership built on mutual care and complementary temperaments. The Wood Rabbit\'s peaceful nature and diplomatic grace soothe the Water Dog\'s anxiety, while the Dog\'s loyal protection gives the Rabbit the security they need to flourish. Water nourishes Wood, creating a naturally supportive dynamic that benefits both partners.',
      },
      {
        slug: 'earth-horse',
        name: 'Earth Horse',
        score: 85,
        summary:
          'A dynamic partnership that balances stability with adventure. The Earth Horse\'s grounded energy and love of freedom complement the Water Dog\'s loyal devotion. The Horse brings excitement and spontaneity that prevent the Dog from becoming too serious, while the Dog provides the principled anchor the Horse needs to channel their considerable energy constructively.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 32,
        summary:
          'The Dog and Dragon sit at opposite ends of the zodiac, and the Fire element amplifies the Dragon\'s already formidable ego. The Water Dog\'s principled vigilance perceives the Fire Dragon\'s self-importance as a moral failing, while the Dragon experiences the Dog\'s questioning as disrespectful insubordination. Water cooling Fire adds frustration to an already tense dynamic.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 40,
        summary:
          'The Rooster\'s critical perfectionism and the Dog\'s anxious loyalty create a dynamic where the Dog feels constantly evaluated and found wanting. The Rooster demands standards the Dog finds arbitrary; the Dog needs emotional reassurance the Rooster considers excessive. Both Earth-influenced, they can become stubbornly entrenched in their positions.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 42,
        summary:
          'The Metal Monkey\'s clever self-interest and flexible moral compass alarm the Water Dog\'s principled nature. The Dog values sincerity and straightforwardness; the Monkey values cleverness and adaptability. The Dog suspects the Monkey of dishonesty; the Monkey finds the Dog\'s moral rigidity tedious and naive.',
      },
    ],

    elementAffinity: `As a Water-element sign with an Earth-natured animal, the Water Dog navigates a complex elemental landscape. Metal signs are natural supporters — Metal generates Water, reinforcing the Dog's emotional depth while providing the structure their Earth nature appreciates. Wood signs create nurturing partnerships where the Dog's Water naturally feeds the partner's growth. Water signs create deeply empathetic connections but risk amplifying the Dog's tendency toward emotional absorption and worry. Fire signs present challenging dynamics — Water controls Fire, which can manifest as the Dog dampening a Fire partner's enthusiasm, though some warming Fire influence benefits the Dog's sometimes pessimistic temperament. Earth signs create solid, familiar partnerships, though excessive Earth combined with Water can become heavy, stagnant, and resistant to change.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Dog excels in careers that combine service with emotional intelligence — roles where their protective instincts, moral compass, and empathetic understanding create genuine positive impact. They are drawn to work that matters, that helps people, and that aligns with their deeply held values. Money alone does not motivate the Water Dog; they need to believe their work makes the world at least slightly better for their being in it.

The ideal Water Dog career provides meaningful service, human connection, and alignment with personal values. Social work, counseling, nursing, veterinary medicine, teaching, human rights law, and nonprofit leadership all suit the Water Dog's combination of compassion, intelligence, and unwavering commitment to doing what is right. They are also effective in roles that require trust — the Water Dog's integrity is palpable, and people sense it immediately.

The Water Dog's relationship with money is typically modest and functional. They are not motivated by wealth accumulation and may actually feel uncomfortable with significant financial success when others are struggling. Their financial challenge is not greed but guilt — the feeling that they do not deserve prosperity when there is so much suffering in the world.`,

    idealCareers: [
      'Social Worker',
      'Psychiatric Nurse',
      'Human Rights Lawyer',
      'Veterinarian',
      'School Counselor',
      'Nonprofit Director',
      'Chaplain',
      'Child Advocate',
    ],

    financialStyle:
      'The Water Dog approaches money with modest, values-driven practicality. They save responsibly, spend carefully, and are generous with causes and people they believe in. Their financial discipline is generally solid, motivated not by the desire for luxury but by the security of knowing they can support those who depend on them. The Water Dog\'s financial growth edge lies in overcoming the guilt that prevents them from building genuine prosperity. Accumulating resources is not selfish — it increases their capacity to help. The Water Dog who gives themselves permission to prosper discovers they can serve far more effectively from a position of financial stability than from one of noble poverty.',

    tips: [
      'Protect your energy for your highest contribution. Your empathetic nature draws every suffering person and cause toward you, but you cannot serve them all. Identify the specific area where your skills and passion create the greatest impact, and focus your professional energy there. Saying no to good causes allows you to say yes to your best cause.',
      'Develop professional boundaries between care and personal involvement. Your tendency to become emotionally enmeshed with clients, patients, or causes leads to burnout that benefits no one. Learn the practices of compassionate detachment — caring deeply while maintaining the professional distance that sustains your capacity to help.',
      'Invest in your own professional development. Your inclination toward self-sacrifice can lead you to neglect your own training, education, and career advancement. Developing your skills is not selfish — it directly increases the quality of service you can provide.',
      'Find a professional community of shared values. The Water Dog who operates in isolation absorbs too much and processes too little. A community of like-minded professionals provides emotional support, perspective, and the shared burden that prevents individual burnout.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Dog in love is devoted, protective, and emotionally present in ways that create a relationship of extraordinary depth and safety. When they commit to a partner, they commit with their entire being — their loyalty, their empathy, their protective instincts, and their willingness to sacrifice for the relationship's well-being. The Water Dog's partner gains a companion who will weather any storm, sit through any darkness, and fight any battle on their behalf without hesitation.

The Water Dog's approach to love is both cautious and wholehearted. They take time to trust — observing, testing, and gradually lowering their guard as evidence of their partner's reliability accumulates. But once trust is established, the Water Dog opens with a completeness that can be breathtaking. Their emotional depth, usually carefully guarded, pours forth in the safety of a trusted partnership, revealing a tenderness and passion that their everyday protective exterior conceals.

The Water Dog's romantic challenge is balancing protection with partnership. Their strong protective instincts can slide into anxious monitoring, controlling behavior, and the assumption that their partner needs rescuing when what they actually need is space. The Water Dog who learns to trust their partner's strength — to walk beside them rather than always in front of them — discovers a partnership of equals that satisfies their need for both loyalty and genuine connection.`,

    loveStyle:
      'The Water Dog loves with quiet, fierce devotion that expresses itself through unwavering presence and empathetic care. They show love by being there — reliably, consistently, and completely — through difficulty, boredom, and joy alike. Their love language combines quality time and acts of service: they want to spend meaningful time with their partner and demonstrate their devotion through thoughtful, practical support. They need a partner who appreciates steadfast loyalty, provides emotional warmth that reassures their anxious heart, and gently pushes back when the Dog\'s protective instincts become controlling.',

    idealPartnerTraits: [
      'Trustworthy',
      'Emotionally Warm',
      'Appreciative of Loyalty',
      'Gently Independent',
      'Reassuring',
    ],

    tips: [
      'Trust your partner to handle their own difficulties. Your instinct to protect can become a pattern of rescuing that prevents your partner from developing their own resilience. Ask: "Would you like my help, or would you like me to listen?" This question transforms overprotection into genuine support.',
      'Share your worries rather than acting on them silently. When anxiety about your relationship or your partner\'s well-being builds, communicate it directly rather than monitoring, questioning, or controlling. "I am worried about you" is connecting; surveillance is not.',
      'Allow yourself to receive care. You are uncomfortable being on the receiving end of devotion, but your partner needs to give as well as receive. Practice accepting compliments, help, and affection with grace rather than deflection. Being cared for is not a weakness.',
      'Cultivate joy as deliberately as you cultivate safety. Your focus on protection and problem-prevention can create a relationship that is secure but heavy. Actively seek and create moments of lightness, humor, and shared pleasure. Safety without joy is not enough.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Dog's constitution combines the Dog's Earth-natured stability with Water's influence on the body's emotional and fluid systems. In Traditional Chinese Medicine, the Dog's Earth nature governs the Spleen and Stomach — the body's center of digestion, energy production, and worry. Water governs the Kidneys and the foundational reserves that sustain long-term health. This combination creates a person of sturdy physical constitution whose health is disproportionately affected by their emotional state — particularly by worry, which in TCM directly weakens the Spleen.

The characteristic Water Dog health pattern is the conversion of emotional worry into digestive dysfunction. Their chronic concern for others, combined with their tendency to absorb emotional stress from their environment, creates a persistent drain on the Spleen's energy that manifests as fatigue, bloating, poor appetite, and a general sense of heaviness. The Water element adds vulnerability to lower back pain, kidney fatigue, and the deep exhaustion that comes from sustained emotional output without adequate replenishment.

Prevention for the Water Dog centers on worry management and digestive support. Practices that specifically address the anxiety cycle — mindfulness, structured worry time, physical exercise, and genuine social support — interrupt the pattern that depletes the Spleen's vitality. Warm, nourishing, easily digestible foods support the weakened digestive system, while adequate rest allows the kidneys to replenish the deep reserves the Water Dog's caring nature constantly draws upon.`,

    bodyAreas: ['Digestive System', 'Kidneys', 'Lower Back', 'Immune System'],

    exercises: [
      'Walking with a loyal companion',
      'Swimming for stress release',
      'Tai chi for anxiety management',
      'Gardening for grounding connection',
    ],

    dietTips: [
      'Support the Spleen with warm, easy-to-digest foods: congee, soups, steamed vegetables, and sweet potato. The Water Dog\'s worry-weakened digestive system needs gentle nourishment rather than heavy or cold foods that demand excessive digestive energy.',
      'Include qi-building foods that counteract emotional depletion: astragalus root (in soups), dates, rice, and cooked oats. These foods support the Spleen\'s ability to generate the vital energy that the Water Dog\'s constant caring depletes.',
      'Nourish the kidneys with warming, restorative foods: bone broth, walnuts, black sesame, and gently spiced stews. The Water element\'s foundational organ system needs consistent support to sustain the Water Dog\'s deep emotional resources.',
      'Eat regular meals in calm environments. The Water Dog\'s tendency to skip meals when worried or busy directly undermines their Spleen health. Establishing consistent, unhurried meal times — even when anxiety diminishes appetite — is one of the most impactful health practices this sign can adopt.',
    ],

    mentalHealth:
      'The Water Dog\'s most significant mental health challenge is generalized anxiety fueled by empathetic absorption and moral concern. They worry not just about specific threats but about the state of the world, the suffering of strangers, and the well-being of everyone in their circle — a scope of concern that no amount of action can fully address. This boundless worry can evolve into clinical anxiety or depression, particularly when the Water Dog feels powerless to prevent the suffering they perceive. Structured worry practices — designated times for processing concerns, followed by deliberate engagement in absorbing activities — help contain the anxiety without suppressing it. Physical exercise is essential medicine, as it discharges the nervous energy that worry generates and produces the mood-regulating neurotransmitters the Water Dog needs. Therapy that specifically addresses their pattern of self-sacrifice and excessive responsibility is transformative — helping them distinguish between problems they can solve and suffering they must witness without fixing. The Water Dog who learns to accept the limits of their influence discovers a peace that does not diminish their compassion but makes it sustainable.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Blue', 'Dark Green', 'Black', 'Silver'],
    direction: 'North',
    gemstones: ['Sodalite', 'Black Tourmaline', 'Aquamarine'],
    flowers: ['Forget-Me-Not', 'Blue Iris', 'Violet'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER DOGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Prince William',
        profession: 'British Royal',
        birthYear: 1982,
        description:
          'Prince William\'s public persona — dutiful, compassionate, and quietly principled — embodies the Water Dog\'s combination of loyal service and emotional intelligence. His focus on mental health advocacy reflects the Water Dog\'s intuitive understanding that true care addresses emotional as well as material needs.',
      },
      {
        name: 'Kirsten Dunst',
        profession: 'Actress',
        birthYear: 1982,
        description:
          'Kirsten Dunst\'s ability to portray characters of emotional depth and vulnerability reflects the Water Dog\'s empathetic sensitivity. Her career choices — favoring emotionally complex roles over commercial blockbusters — demonstrate the sign\'s commitment to authenticity and meaningful work over superficial success.',
      },
      {
        name: 'Judy Garland',
        profession: 'Singer/Actress',
        birthYear: 1922,
        description:
          'Judy Garland\'s extraordinary emotional expressiveness and the depth of feeling she brought to every performance embodied the Water Dog\'s combination of vulnerability and courage. Her lifelong struggle between her generous, giving nature and the demands of the entertainment industry reflects the sign\'s characteristic tension between self-sacrifice and self-preservation.',
      },
      {
        name: 'Ava Gardner',
        profession: 'Actress',
        birthYear: 1922,
        description:
          'Ava Gardner\'s fierce loyalty to friends and lovers, combined with her emotional intensity on screen, reflected the Water Dog\'s passionate devotion and deep feeling. Her beauty concealed a vulnerability and emotional depth that emerged in her most powerful performances.',
      },
      {
        name: 'Kelly Clarkson',
        profession: 'Singer/Television Host',
        birthYear: 1982,
        description:
          'Kelly Clarkson\'s emotional authenticity, genuine warmth, and willingness to be publicly vulnerable embody the Water Dog\'s combination of strength and sensitivity. Her ability to connect with audiences through honest emotional expression reflects the sign\'s gift for creating safety through genuine presence.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dog holds the eleventh position in the Chinese zodiac, a placement that reflects its genuine but unhurried approach to the Great Race. According to legend, the Dog — despite being a strong swimmer and fast runner — stopped along the way to play in the river and help other animals who were struggling, arriving eleventh because its natural loyalty and compassion took precedence over competitive ambition. This origin story perfectly encodes the Dog's essential nature: loyalty, service, and the willingness to sacrifice personal advantage for the well-being of others.

In Chinese mythology, the Dog is associated with faithfulness, protection, and the guardianship of both physical and spiritual boundaries. The celestial Dog (Tiangou) is a mythical creature that chases and swallows the moon during lunar eclipses — a powerful symbol of protective vigilance against cosmic threats. When paired with the Water element, this protective mythology gains the dimension of emotional guardianship: the Water Dog protects not just physical safety but emotional well-being, sensing threats to the heart as keenly as threats to the body.

The Water Dog connects to the Chinese philosophical tradition of ren (仁) — benevolence or human-heartedness — the Confucian virtue that places compassionate relationship at the center of ethical life. Water's emotional depth combined with the Dog's instinctive loyalty creates the embodiment of ren: the person who acts from genuine care rather than obligation, whose virtue is spontaneous rather than calculated.`,

    symbolism: `The Water Dog symbolizes the highest expression of loyal devotion — faithfulness deepened by emotional understanding and sustained by genuine compassion rather than mere duty. In traditional symbolism, it represents the principle that true protection comes not from strength alone but from the combination of strength and empathy — that the best guardian is one who understands what they are guarding and why it matters.

Water flowing through the Dog's watchful domain carries symbolism of emotional cleansing and renewal. It represents the tears shed in genuine empathy, the waters of compassion that wash away pain, and the deep emotional currents that connect all living things in a web of mutual care. In the Wu Xing cycle, the relationship between Earth (the Dog's nature) and Water (its element) symbolizes the productive tension between structure and flow — the way principled conviction needs emotional flexibility to become genuine wisdom.

The Water Dog also symbolizes the courage of vulnerability. In a zodiac system that often celebrates power and strategy, the Water Dog reminds us that the bravest act is sometimes simply showing up with an open heart in a world that provides many reasons to close it.`,

    modernInterpretation: `In contemporary culture, the Water Dog archetype resonates powerfully with the growing emphasis on emotional intelligence, empathetic leadership, and values-driven work. As organizations and societies recognize that sustainable success requires genuine care for people — not just strategic management of human resources — the Water Dog's natural approach becomes increasingly valued and sought after.

The Water Dog also speaks to the modern challenge of maintaining compassion without burning out. In an age of constant information about global suffering, the Water Dog's journey — learning to care deeply while protecting their own capacity to continue caring — has become a universal challenge. Their story suggests that sustainable compassion requires boundaries, self-care, and the wisdom to accept that individual effort cannot solve systemic problems.

For those born in Water Dog years, the contemporary world offers both profound purpose and significant risk. Their gifts are needed more than ever, but the pace and scale of modern suffering can overwhelm their sensitive constitution. The most thriving Water Dogs find the balance between engagement and self-preservation — giving their considerable gifts to causes that align with their values while maintaining the physical and emotional boundaries that ensure they can continue giving for decades rather than months.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
