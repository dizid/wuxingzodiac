// ============================================
// WATER ROOSTER (壬酉) — The Perceptive Observer
// ============================================
// The Water Rooster combines the Rooster's sharp analytical
// mind and meticulous standards with Water's emotional depth
// and intuitive perception — producing the zodiac's most
// observant and intellectually refined personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-rooster',
  profile: getProfileBySlug('water-rooster')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Rooster is the most emotionally intelligent and diplomatically skilled of all Rooster variants. Where the Rooster is already defined by sharp observation, exacting standards, and a commitment to truth that borders on the relentless, the Water element softens these qualities with emotional awareness, diplomatic subtlety, and a genuine capacity for empathy that other Roosters often lack. The Water Rooster still sees everything — every flaw, every inconsistency, every opportunity for improvement — but they have learned to communicate their observations with a grace that earns receptivity rather than resistance.

What distinguishes the Water Rooster from other Rooster variants is the element's transformative effect on the Rooster's communication style. Where other Roosters can be brutally blunt, the Water Rooster delivers difficult truths wrapped in enough empathy and contextual awareness to make them not just bearable but genuinely helpful. They understand that being right is not enough — that the way truth is delivered determines whether it heals or wounds. This emotional intelligence, combined with the Rooster's razor-sharp perception, makes the Water Rooster an exceptionally effective counselor, critic, and leader.

Beneath the Water Rooster's polished, observant exterior lies a surprisingly rich emotional life. They experience aesthetic pleasure, intellectual satisfaction, and emotional connection with an intensity that their composed demeanor conceals. The Water Rooster's challenge is allowing this inner richness to be visible — letting others see the passionate, feeling person behind the analytical observer, and accepting that vulnerability is the prerequisite for the deep connection their Water element craves.`,

    coreTraits: [
      'Observant',
      'Articulate',
      'Analytical',
      'Diplomatic',
      'Principled',
      'Perceptive',
    ],

    strengths: [
      {
        trait: 'Precise Perception',
        description:
          'The Water Rooster observes the world with extraordinary attention to detail, noticing patterns, inconsistencies, and subtleties that others miss entirely. Water\'s intuitive depth adds an emotional dimension to the Rooster\'s already sharp eye, allowing them to perceive not just what is wrong but why it matters. This combination of analytical precision and emotional awareness makes their observations genuinely insightful rather than merely critical.',
      },
      {
        trait: 'Eloquent Communication',
        description:
          'The Water element grants the Rooster a fluidity of expression that transforms their natural directness into genuine eloquence. Water Roosters can articulate complex ideas, deliver difficult feedback, and persuade diverse audiences with a polish and sensitivity that earns them attention and respect. They are among the zodiac\'s most gifted writers, speakers, and communicators.',
      },
      {
        trait: 'Ethical Intelligence',
        description:
          'The Water Rooster\'s commitment to truth and high standards, tempered by emotional awareness, creates a person of genuine moral intelligence. They can navigate ethical complexity with both conviction and nuance — holding firm principles while remaining open to the contextual factors that make simple answers inadequate. This makes them trusted advisors on matters of right and wrong.',
      },
      {
        trait: 'Cultural Refinement',
        description:
          'Water deepens the Rooster\'s natural appreciation for quality and craftsmanship into genuine cultural sophistication. The Water Rooster develops refined taste across domains — art, food, music, literature — and their informed aesthetic judgment is sought and respected. They do not merely consume culture; they understand, curate, and elevate it.',
      },
    ],

    challenges: [
      {
        trait: 'Perfectionist Anxiety',
        description:
          'The Water Rooster\'s exacting standards, amplified by Water\'s emotional sensitivity, can generate chronic anxiety about imperfection — in their work, their appearance, their relationships, and themselves. They may spend excessive time refining details that are already excellent, unable to release their work or accept compliments because they can always see what could be better.',
      },
      {
        trait: 'Critical Nature',
        description:
          'Despite Water\'s softening influence, the Rooster\'s fundamental nature is critical — they cannot help seeing what is wrong. While they deliver criticism more diplomatically than other Roosters, the sheer volume of their observations can exhaust partners, friends, and colleagues. They may not realize how much their constant subtle corrections and suggestions wear on the people they love most.',
      },
      {
        trait: 'Emotional Rigidity',
        description:
          'The Water Rooster\'s need for order and predictability extends to their emotional life. They want feelings to be logical, manageable, and proportionate — and they become distressed when emotions refuse to follow these rules. Their own messy feelings, and especially those of others, can trigger an anxious need to organize and control what is inherently uncontrollable.',
      },
      {
        trait: 'Self-Criticism',
        description:
          'The Water Rooster\'s harshest critic is themselves. They apply their exacting standards to their own performance with a severity that no external critic would match, creating a relentless inner voice that catalogues every mistake, shortcoming, and missed opportunity. This self-criticism can undermine confidence, prevent risk-taking, and generate a persistent sense of inadequacy that their considerable achievements do not alleviate.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rooster is associated with Metal energy — precise, principled, and committed to excellence. When Water is layered onto this Metal-natured animal, the combination follows the productive cycle: Metal generates Water, meaning the Rooster's natural Metal energy actively feeds and strengthens the Water element. This creates a powerfully synergistic pairing where analytical precision nourishes emotional depth.

The Metal-Water synergy gives the Water Rooster an exceptional combination of sharpness and sensitivity. Metal's discriminating eye becomes more nuanced when deepened by Water's emotional intelligence, producing observations that are both technically precise and emotionally resonant. This is the critic who not only identifies what is wrong but understands how it feels to hear it — the analyst whose insights carry emotional wisdom as well as intellectual rigor. The risk of this combination is that Metal's rigidity can freeze Water's natural flow, creating a person who is emotionally perceptive but unable to express their feelings freely. The Water Rooster benefits from practices that warm and loosen their Metal-Water constitution: creative expression, physical warmth, and relationships that reward vulnerability.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Rooster seeks partners who appreciate their refined nature, share their commitment to quality, and can tolerate — or better yet, value — their observant, detail-oriented approach to life. They need a partner who is confident enough to receive honest feedback without crumbling and emotionally warm enough to melt the Rooster's sometimes frozen emotional surface. The Rooster belongs to the Second Trine alongside the Ox and the Snake — methodical, determined signs that share the Rooster's love of deep analysis and high standards.

The Rooster sits in opposition to the Rabbit on the zodiac wheel, creating tension between the Rooster's blunt honesty and the Rabbit's diplomatic sensitivity. For the Water Rooster, this opposition is somewhat moderated — Water's diplomatic influence brings them closer to the Rabbit's style — but the fundamental difference in how they process truth remains.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 90,
        summary:
          'A deeply harmonious partnership of shared values and complementary strengths. The Water Ox\'s patient reliability and emotional depth provide the stable foundation the Water Rooster needs, while the Rooster\'s perceptive intelligence and refined taste bring quality and stimulation to the Ox\'s steady world. Both Water signs, they share an intuitive emotional connection.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 88,
        summary:
          'A sophisticated partnership of mutual intellectual respect and shared depth. The Water Snake\'s strategic brilliance and mysterious allure fascinate the Water Rooster, who appreciates the Snake\'s commitment to genuine understanding. Both signs value truth and see beneath surfaces, creating a relationship built on authentic perception rather than comfortable illusion.',
      },
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 84,
        summary:
          'A complementary partnership of vision and precision. The Earth Dragon\'s ambitious leadership and commanding presence provide the large stage the Water Rooster\'s refined skills deserve. The Rooster\'s attention to detail and quality control ensure the Dragon\'s grand vision is executed to the highest standard. Earth supports Metal (the Rooster\'s nature), creating a naturally reinforcing dynamic.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 30,
        summary:
          'The Rooster and Rabbit sit at opposite ends of the zodiac, creating fundamental tension despite sharing the Water element. The Water Rabbit\'s conflict avoidance and emotional sensitivity clash with the Water Rooster\'s need for honest assessment and direct communication. The Rabbit experiences the Rooster\'s observations as criticism; the Rooster finds the Rabbit\'s evasiveness frustrating.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 38,
        summary:
          'The Fire Horse\'s impulsive spontaneity and disregard for convention clash with the Water Rooster\'s need for order, precision, and predictability. The Horse finds the Rooster stifling; the Rooster considers the Horse reckless. Fire and Water clash elementally, and the temperamental differences are profound.',
      },
      {
        slug: 'fire-dog',
        name: 'Fire Dog',
        score: 42,
        summary:
          'While both signs are principled, they express their values differently. The Fire Dog\'s passionate activism and emotional intensity clash with the Water Rooster\'s analytical approach and need for measured, evidence-based judgment. The Dog demands action; the Rooster demands precision. Fire\'s heat overwhelms Water\'s cool composure.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Metal-natured animal, the Water Rooster benefits from the productive cycle's powerful reinforcement: Metal generates Water, creating a personality of both analytical precision and emotional depth. Earth signs are natural supporters — Earth generates Metal, reinforcing the Rooster's core nature while providing grounding stability. Water signs create deeply intuitive connections where emotional communication flows naturally. Wood signs present a complex dynamic — Wood is controlled by Metal (the Rooster's nature), which can create relationships where the Rooster's criticism undermines the Wood partner's growth. Fire signs challenge the Rooster's Metal nature, as Fire melts Metal, creating a dynamic where the Rooster feels their structured world is being dismantled by Fire's transformative chaos.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Rooster excels in careers that reward attention to detail, clear communication, and the ability to identify and articulate what others miss. They are natural critics, editors, analysts, and quality controllers — people whose exacting standards and perceptive eye raise the quality of everything they touch. Unlike more aggressive achievers, the Water Rooster achieves through refinement rather than force, improving systems, processes, and products with a precision that transforms good work into excellent work.

The ideal Water Rooster career provides intellectual stimulation, clear quality standards, and an audience that values their perceptive contributions. They thrive in roles where their observations are appreciated rather than resented — criticism, journalism, consulting, quality assurance, and academic research all suit the Water Rooster's combination of analytical depth and communicative eloquence.

The Water Rooster's relationship with money reflects their refined standards — they value quality over quantity and are willing to invest in excellence. Their financial discipline is generally strong, though their attraction to beautiful, high-quality objects can lead to spending that exceeds practical budgets.`,

    idealCareers: [
      'Literary Critic',
      'Food and Wine Journalist',
      'Quality Assurance Director',
      'Academic Researcher',
      'Museum Conservator',
      'Forensic Accountant',
      'Copy Editor',
      'Documentary Producer',
    ],

    financialStyle:
      'The Water Rooster approaches finances with the same analytical precision they bring to everything else — carefully tracking, comparing, and optimizing their financial performance. They are natural budgeters who find satisfaction in financial order and efficiency. Their discipline is genuine, though it can be undermined by their refined taste: the Water Rooster may overspend on quality items, experiences, and aesthetic pleasures that their analytical mind justifies as "investments in quality of life." The Water Rooster\'s financial growth lies in distinguishing between genuine quality investments and perfectionism-driven spending that provides diminishing returns.',

    tips: [
      'Position your critical eye as a service rather than an imposition. Frame your observations as contributions to quality rather than corrections of incompetence. The same truth, delivered as collaborative improvement rather than personal criticism, transforms your professional relationships.',
      'Develop your writing and communication skills to professional level. Your natural gift for precise, nuanced expression is among your most valuable assets. Whether through journalism, criticism, editing, or corporate communications, your ability to articulate what others see dimly is genuinely rare.',
      'Learn to release "good enough." Your perfectionism, while valuable in quality-critical roles, can become a productivity trap when applied universally. Develop the judgment to know when excellence matters and when adequacy suffices — and give yourself permission to choose adequacy when appropriate.',
      'Build a professional reputation for fairness as well as precision. Your observations carry more weight when people trust that you are as rigorous with praise as you are with criticism. Make a practice of noticing and acknowledging excellent work — it costs nothing and builds the credibility that makes your critical observations welcome.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Rooster in love is attentive, devoted, and genuinely caring — but also demanding in ways that can challenge even the most patient partner. They bring their extraordinary attention to detail to their relationships, noticing everything — the thoughtful gesture that deserves acknowledgment, the subtle change in mood that signals trouble, the small inconsistency that reveals a deeper issue. This observant nature makes them remarkably attuned partners who can anticipate needs and respond with precision.

The Water Rooster's approach to love combines practical devotion with genuine emotional depth. They express care through quality — ensuring their shared home is beautiful, meals are well-prepared, and plans are thoughtfully organized. Their Water element adds an emotional dimension that other Roosters lack: they do not just want an efficient partnership but a genuinely intimate one, where both partners can be fully known and accepted.

The Water Rooster's romantic challenge is learning to accept imperfection — in their partner, in themselves, and in the relationship itself. Their critical eye, trained to identify what could be better, can create an atmosphere of perpetual evaluation that prevents the relaxed, unconditional acceptance that love ultimately requires. The Water Rooster who learns to love what is, rather than constantly striving for what should be, discovers a peace and fullness that their perfectionism had been blocking.`,

    loveStyle:
      'The Water Rooster loves with refined, attentive devotion that expresses itself through quality and care. They create beautiful shared environments, plan thoughtful dates, and demonstrate affection through consistently high-quality attention to their partner\'s well-being. Their love language combines acts of service with quality time — they want to do things well for their partner and spend meaningful time doing them together. They need a partner who appreciates their standards without feeling judged, who provides emotional warmth that melts their formal exterior, and who is confident enough to gently push back when the Rooster\'s critical nature becomes excessive.',

    idealPartnerTraits: [
      'Emotionally Warm',
      'Self-Confident',
      'Appreciative of Quality',
      'Gently Assertive',
      'Stable and Reliable',
    ],

    tips: [
      'Practice unconditional appreciation. For every observation about what could be better, offer two genuine compliments about what is already wonderful. Your partner needs to feel loved as they are, not just valued for their potential to improve.',
      'Allow yourself to be messy. Your controlled, polished exterior prevents the kind of raw emotional exchange that deep intimacy requires. Let your partner see you cry, lose your composure, or admit you have no idea what you are doing. Imperfection is the doorway to genuine connection.',
      'Stop editing your partner. Your desire to help them improve — their wardrobe, their habits, their career choices — can feel like a project rather than a partnership. Ask yourself: "Did they request my input?" If not, choose acceptance over improvement.',
      'Create spaces where analysis is off. Designate certain moments — a weekend morning, a date night, a walk together — as analysis-free zones where you simply enjoy your partner\'s company without evaluating, planning, or optimizing anything. Let love be inefficient sometimes.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Rooster's constitution combines the Rooster's Metal-natured precision with Water's influence on the body's emotional and fluid systems. In Traditional Chinese Medicine, the Rooster's Metal nature governs the Lungs and Large Intestine — the organs responsible for breathing, immune defense, and the release of what no longer serves the body. Water governs the Kidneys and the deeper reserves of vitality. The productive flow from Metal to Water creates a constitution that is generally healthy when balanced but vulnerable to respiratory issues, skin conditions, and the physical manifestation of suppressed emotions.

The characteristic Water Rooster health pattern involves the somatization of perfectionism — the conversion of psychological tension into physical symptoms. Their exacting standards and chronic self-criticism generate a persistent low-level stress that manifests in the Metal element's associated areas: respiratory sensitivity, skin issues, and digestive tension. The Water element adds vulnerability to kidney fatigue, lower back pain, and the depletion that comes from sustained mental overactivity combined with emotional suppression.

Prevention for the Water Rooster centers on relaxation and emotional expression. Practices that specifically release the tension of perfectionism — breathwork, creative expression, physical movement, and therapeutic relationship — address the root cause of their characteristic health vulnerabilities. The Water Rooster who learns to release their grip on control discovers that their body relaxes in response, often resolving chronic symptoms that no amount of medical intervention had improved.`,

    bodyAreas: ['Lungs', 'Skin', 'Large Intestine', 'Kidneys'],

    exercises: [
      'Pilates for precise, controlled movement',
      'Swimming for lung capacity and relaxation',
      'Hiking for mental clarity and fresh air',
      'Gentle martial arts like aikido',
    ],

    dietTips: [
      'Support lung and skin health with foods rich in zinc and vitamin A: pumpkin seeds, sweet potatoes, carrots, and eggs. The Rooster\'s Metal nature makes respiratory and skin health central priorities, and these nutrients support both the lung tissue and the body\'s largest organ.',
      'Include foods that support elimination and detoxification: fiber-rich vegetables, fermented foods, lemon water, and gentle bitter greens. The Large Intestine\'s role in releasing what no longer serves the body is symbolically and physically important for a sign that tends to hold on too tightly.',
      'Nourish the kidneys with mineral-rich, warming foods: bone broth, miso soup, sea vegetables, and black beans. The Water element\'s foundational organ needs consistent support, especially during periods of high mental output and emotional stress.',
      'Practice mindful eating as an exercise in releasing perfectionism. Allow yourself to enjoy food without analyzing its nutritional profile, caloric content, or preparation quality. The Water Rooster who can eat with pure pleasure, even occasionally, is practicing the acceptance their perfectionistic nature desperately needs.',
    ],

    mentalHealth:
      'The Water Rooster\'s most significant mental health challenge is the anxiety generated by their perfectionistic inner critic. Their mind maintains a running commentary on everything that could be better — their work, their appearance, their relationships, their health — creating a persistent background hum of dissatisfaction that can escalate into clinical anxiety or depression when external stressors amplify it. Cognitive behavioral therapy is particularly effective for the Water Rooster, as it provides the structured, analytical framework they trust while systematically challenging the distorted thinking that drives their perfectionism. Mindfulness-based stress reduction also appeals to their disciplined nature while training them to observe their critical thoughts without being controlled by them. Creative pursuits that prioritize expression over perfection — improvisation, abstract art, freewriting — provide powerful counterprogramming for the Water Rooster\'s controlling tendencies. The Water Rooster who learns that "good enough" is not mediocrity but wisdom discovers a freedom and contentment that their perfectionism had been systematically preventing.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [4, 5, 9],
    colors: ['Blue', 'White', 'Silver', 'Ivory'],
    direction: 'North',
    gemstones: ['Blue Lace Agate', 'Pearl', 'Clear Quartz'],
    flowers: ['Gladiolus', 'White Orchid', 'Gardenia'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER ROOSTERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Beyonce',
        profession: 'Singer/Performer',
        birthYear: 1993,
        description:
          'Beyonce\'s legendary perfectionism, meticulous attention to detail, and extraordinary work ethic embody the Water Rooster\'s commitment to excellence. Her ability to deliver performances of staggering precision while communicating genuine emotional depth reflects the sign\'s ideal fusion of Metal\'s standards with Water\'s feeling.',
      },
      {
        name: 'Ariana Grande',
        profession: 'Singer/Actress',
        birthYear: 1993,
        description:
          'Ariana Grande\'s remarkable vocal precision, combined with her emotional transparency about personal struggles, reflects the Water Rooster\'s combination of technical excellence and emotional depth. Her ability to deliver technically perfect performances charged with genuine feeling exemplifies the sign at its best.',
      },
      {
        name: 'Quincy Jones',
        profession: 'Producer/Composer',
        birthYear: 1933,
        description:
          'Quincy Jones\'s legendary career as a producer, arranger, and composer exemplifies the Water Rooster\'s refined ear and exacting standards applied across an extraordinary range of musical genres. His ability to identify and cultivate talent reflects the sign\'s perceptive eye for quality.',
      },
      {
        name: 'Yoko Ono',
        profession: 'Artist/Musician/Activist',
        birthYear: 1933,
        description:
          'Yoko Ono\'s avant-garde artistic vision and commitment to uncompromising creative expression embody the Water Rooster\'s willingness to stand by their perceptions regardless of popular opinion. Her conceptual art challenges audiences to see differently — the Water Rooster\'s essential gift.',
      },
      {
        name: 'Michael Caine',
        profession: 'Actor',
        birthYear: 1933,
        description:
          'Michael Caine\'s remarkably prolific career, built on consistently precise, nuanced performances, reflects the Water Rooster\'s commitment to professional excellence sustained over decades. His understated acting style — precise, observant, and emotionally genuine — embodies the sign\'s combination of analytical precision and emotional depth.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rooster holds the tenth position in the Chinese zodiac and carries a uniquely proud cultural legacy. In the Great Race legend, the Rooster arrived tenth after helping the Goat and Monkey cross the river on a shared raft. The Jade Emperor acknowledged the Rooster's contribution to the group effort but placed it after its collaborators — a story that subtly encodes the Rooster's tension between genuine contribution and the desire for recognition.

In Chinese mythology, the Rooster is associated with punctuality, reliability, and the power to banish evil spirits. The rooster's crow at dawn was traditionally believed to dispel ghosts and dark forces — a belief that connects the Rooster to themes of truth, clarity, and the power of honest observation to illuminate what hides in darkness. When paired with the Water element, this mythological role gains the dimension of emotional perception: the Water Rooster sees not just what is hidden in external darkness but what is concealed in the depths of the human heart.

The Rooster also features in the Chinese concept of the "Five Virtues" — civil virtue (the comb as a crown), martial virtue (the spurs), courage, benevolence, and trustworthiness. When Water is paired with the Rooster, benevolence and trustworthiness are particularly amplified, as Water's emotional depth transforms the Rooster's natural honesty from blunt truth-telling into genuinely compassionate communication.`,

    symbolism: `The Water Rooster symbolizes the power of precise observation deepened by emotional understanding. In traditional symbolism, it represents the principle that truth serves healing only when delivered with compassion — that seeing clearly and speaking honestly are gifts only when accompanied by genuine care for those who receive the observation. The Water Rooster reminds us that the highest form of criticism is not demolition but illumination.

Water flowing through the Rooster's domain carries symbolism of purification through understanding. It represents the cleansing power of honest perception — the way seeing something clearly, in its fullness and context, can transform pain into wisdom and conflict into resolution. In the Wu Xing cycle, Metal (the Rooster's nature) generating Water symbolizes how precision and discipline, when directed inward, produce emotional depth and genuine understanding.

The Water Rooster also symbolizes the aesthetic dimension of truth — the understanding that beauty and accuracy are not opposed but complementary, that the most truthful expression of reality is also, in some profound sense, the most beautiful.`,

    modernInterpretation: `In contemporary culture, the Water Rooster archetype resonates with growing demand for informed, nuanced criticism and the ability to communicate complex truths with both precision and empathy. In an age of misinformation, hot takes, and polarized debate, the Water Rooster's commitment to careful observation, honest communication, and emotional intelligence feels both countercultural and desperately needed.

The Water Rooster also speaks to the modern challenge of maintaining high standards without succumbing to the anxiety of perfectionism. As awareness of mental health and the costs of chronic self-criticism grows, the Water Rooster's journey — from rigid perfectionism toward compassionate excellence — becomes increasingly relevant. Their story suggests that the highest standards are maintained not through relentless self-punishment but through the combination of clear vision and genuine self-acceptance.

For those born in Water Rooster years, the contemporary world offers both exceptional opportunity and significant challenge. Their observational gifts and communicative skills are more valued than ever, but the speed and superficiality of modern media can frustrate their commitment to depth and quality. The most successful Water Roosters find platforms and roles that honor their need for precision — becoming the editors, critics, curators, and quality guardians that ensure excellence survives in an age of quantity.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
