// ============================================
// WATER SNAKE (壬巳) — The Enigmatic Depths
// ============================================
// The Water Snake combines the Snake's mysterious wisdom and
// penetrating intelligence with Water's emotional depth and
// intuitive flow — producing the zodiac's most perceptive
// and enigmatic personality.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'water-snake',
  profile: getProfileBySlug('water-snake')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Water Snake is the most intuitive and psychologically penetrating of all Snake variants. Where the Snake is already renowned for its wisdom, strategic mind, and magnetic allure, the Water element amplifies these qualities into something approaching genuine clairvoyance. The Water Snake does not merely observe people — they see through them, perceiving motivations, fears, and desires that their owners may not even consciously recognize. This extraordinary perceptiveness makes the Water Snake one of the most formidable and fascinating personalities in the entire Chinese zodiac.

What makes the Water Snake remarkable is the seamless fusion of intellectual brilliance and emotional depth. They process the world simultaneously through logic and intuition, arriving at conclusions that are both analytically sound and intuitively resonant. This dual processing gives them an almost unfair advantage in any situation involving human dynamics — negotiation, counseling, creative collaboration, or strategic planning. The Water Snake knows things before they can explain how they know them, and their hunches prove accurate with unsettling frequency.

Beneath the Water Snake's composed, enigmatic exterior lies an emotional ocean of extraordinary depth. They feel everything intensely but reveal almost nothing voluntarily. This emotional guardedness protects their vulnerability but also creates a fundamental loneliness — the Water Snake is surrounded by people who find them fascinating but struggle to truly know them. Their lifelong challenge is learning to open the doors they have so skillfully locked, allowing genuine intimacy to penetrate the beautiful fortress they have built around their heart.`,

    coreTraits: [
      'Perceptive',
      'Mysterious',
      'Wise',
      'Magnetic',
      'Strategic',
      'Emotionally Deep',
    ],

    strengths: [
      {
        trait: 'Psychological Insight',
        description:
          'The Water Snake possesses an almost supernatural ability to read people. They perceive the hidden architecture of personality — the fears that drive behavior, the desires that shape decisions, the wounds that create patterns. This insight makes them exceptionally effective therapists, negotiators, writers, and leaders, as they work with people\'s actual motivations rather than their stated positions.',
      },
      {
        trait: 'Magnetic Presence',
        description:
          'The Water Snake exerts a quiet, powerful fascination on those around them. Their combination of mystery, intelligence, and emotional depth creates a magnetic pull that draws people in without any overt effort. They command attention not through volume or display but through the unmistakable sense that they know something others do not — and they might, if approached correctly, share it.',
      },
      {
        trait: 'Strategic Patience',
        description:
          'The Water Snake is willing to wait for outcomes that other signs would give up on entirely. They understand that the most significant achievements require time, positioning, and the patience to act only when conditions are precisely right. This strategic patience, combined with their perceptive timing, makes them devastatingly effective in pursuit of long-term goals.',
      },
      {
        trait: 'Transformative Wisdom',
        description:
          'The Water Snake possesses a rare gift for helping others see themselves clearly. Their combination of perception, empathy, and honest intelligence creates interactions that leave people changed — not through manipulation but through the mirror of genuine understanding. People who spend time with a Water Snake often describe the experience as revelatory.',
      },
    ],

    challenges: [
      {
        trait: 'Secrecy',
        description:
          'The Water Snake\'s instinct for concealment can become pathological. They may hoard information, maintain multiple versions of themselves for different audiences, and refuse to share even benign personal details. This habitual secrecy creates an atmosphere of mistrust that undermines the very relationships the Snake values most. Partners and friends may eventually stop trying to penetrate defenses that seem designed to be impregnable.',
      },
      {
        trait: 'Jealousy and Possessiveness',
        description:
          'The Water Snake\'s deep emotional investment, combined with their perceptive awareness of threats, can generate intense jealousy. They detect potential rivals and threats — real or imagined — with radar-like precision, and their response can be disproportionately intense. This possessiveness, rooted in fear of loss, can suffocate the very relationships they are trying to protect.',
      },
      {
        trait: 'Emotional Manipulation',
        description:
          'The Water Snake\'s extraordinary understanding of human psychology can become a tool for manipulation when fear or ambition overwhelms their ethical compass. They may engineer situations, plant suggestions, or exploit emotional vulnerabilities with a subtlety that makes their influence nearly invisible. Recognizing and resisting this tendency is essential to the Water Snake\'s moral development.',
      },
      {
        trait: 'Vindictiveness',
        description:
          'The Water Snake does not forget betrayals. Their retentive memory and patient nature mean they can nurse grievances for years, waiting for the precise moment to settle accounts. This capacity for delayed vengeance is rarely acknowledged but profoundly shapes their relationships — former allies who crossed a Water Snake may not realize they are in danger until the consequences arrive.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Snake is associated with Fire energy — passion, transformation, and the penetrating light that reveals hidden things. When Water is layered onto this Fire-natured animal, the combination follows the controlling cycle: Water controls Fire, tempering the Snake's passionate intensity with emotional depth and strategic patience. This creates a personality of exquisite internal balance — the Snake's sharp intelligence cooled and deepened by Water's reflective wisdom.

This Fire-Water dynamic gives the Water Snake a unique quality: they burn with the Snake's characteristic intensity but their fire is internal, invisible, controlled. Where Fire Snakes display their passion openly, the Water Snake's flame is contained beneath a calm surface, making them appear cooler and more composed than they actually are. This concealed intensity is both the Water Snake's greatest strength and most significant vulnerability — it gives them remarkable self-control but also creates the emotional suppression that can lead to physical and psychological tension. The Water Snake benefits from practices that allow their hidden fire safe expression: creative work, physical activity, and the gradual development of trusted relationships where they can be genuinely, completely themselves.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Water Snake's compatibility is shaped by their need for intellectual depth, emotional intensity, and absolute loyalty. They seek partners who can match their psychological sophistication while providing the warmth and trustworthiness their guarded heart requires. The Snake belongs to the Second Trine alongside the Ox and the Rooster — methodical, determined signs that share the Snake's love of deep analysis and tangible achievement. These natural allies appreciate the Water Snake's intensity without being overwhelmed by it.

The Snake sits in opposition to the Pig on the zodiac wheel, creating a complex attraction-repulsion dynamic. The Pig's openness and emotional transparency both fascinates and unsettles the secretive Snake, while the Pig finds the Snake's hidden depths both alluring and threatening.`,

    bestMatches: [
      {
        slug: 'water-ox',
        name: 'Water Ox',
        score: 93,
        summary:
          'A deeply harmonious partnership of shared depth and complementary temperaments. The Water Ox\'s patient stability provides the security the Water Snake craves, while the Snake\'s perceptive intelligence and emotional intensity keep the Ox\'s world fascinating. Both Water signs, they communicate on an intuitive level that transcends words, creating a bond of remarkable depth and durability.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 87,
        summary:
          'A sophisticated partnership of mutual admiration and shared standards. The Earth Rooster\'s principled precision and analytical mind resonate with the Water Snake\'s love of deep analysis. The Rooster provides the transparency and honesty that the Snake needs to build trust, while the Snake\'s emotional depth enriches the Rooster\'s sometimes overly rational worldview.',
      },
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 85,
        summary:
          'A powerful alliance of vision and strategy. The Wood Dragon\'s bold ambition and creative confidence fascinate the Water Snake, who provides the behind-the-scenes strategic intelligence that helps the Dragon realize their grand vision. Water nourishes Wood, creating a naturally supportive dynamic where the Snake empowers the Dragon\'s growth.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 32,
        summary:
          'The Snake and Pig sit at opposite ends of the zodiac, and the element clash intensifies this natural tension. The Fire Pig\'s emotional openness and trusting nature feel naive to the secretive Water Snake, while the Pig experiences the Snake as cold and manipulative. Fire and Water clash elementally, adding volatility to an already challenging dynamic.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 35,
        summary:
          'The Fire Tiger\'s forthright boldness collides with the Water Snake\'s subtle strategy, creating fundamental miscommunication. The Tiger values directness and courage; the Snake values patience and perception. Each perceives the other\'s essential nature as a flaw — the Tiger sees cowardice where the Snake sees strategy; the Snake sees recklessness where the Tiger sees courage.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 40,
        summary:
          'Two brilliantly strategic signs that recognize each other\'s games too well for comfort. The Metal Monkey\'s quicksilver mind and competitive intelligence match the Water Snake\'s strategic depth, creating mutual fascination but also mutual wariness. Trust is extremely difficult to establish between two signs that are acutely aware of how easily intelligence can be weaponized.',
      },
    ],

    elementAffinity: `As a Water-element sign with a Fire-natured animal, the Water Snake contains an internal tension that is productive when balanced and destructive when extreme. Metal signs are natural supporters — Metal generates Water, reinforcing the Snake's emotional depth and strategic patience with structure and discipline. Earth signs provide grounding that the Snake needs, containing their emotional intensity in productive channels. Wood signs create dynamic partnerships where the Snake's Water nourishes the partner's growth. Water signs intensify the Snake's emotional depth, creating connections of extraordinary intimacy but also risk of emotional overwhelm. Fire signs activate the Snake's hidden passion and intensity, which can be exhilarating but also destabilizing when the internal Water-Fire balance is already delicate.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Water Snake excels in careers that reward deep analysis, psychological insight, and strategic patience. They are drawn to work that involves uncovering hidden truths, understanding complex systems, and operating in environments where subtlety matters more than brute force. The Water Snake's ability to perceive what others miss makes them invaluable in any field that requires penetrating beneath surface appearances to understand underlying dynamics.

The ideal Water Snake career provides intellectual stimulation, meaningful depth, and a degree of privacy. They thrive in roles that value quality over speed and insight over output. Psychology, research, intelligence work, financial analysis, writing, and behind-the-scenes strategic roles all suit the Water Snake's combination of brilliance, patience, and preference for operating away from the spotlight.

The Water Snake's financial instincts are among the sharpest in the zodiac. Their ability to perceive hidden value, sense market shifts before they become apparent, and wait patiently for optimal entry points makes them natural investors. They approach money with the same strategic patience they bring to everything — building wealth quietly, systematically, and with impressive long-term results.`,

    idealCareers: [
      'Clinical Psychologist',
      'Intelligence Analyst',
      'Research Scientist',
      'Financial Strategist',
      'Novelist',
      'Forensic Investigator',
      'Art Dealer',
      'Behavioral Economist',
    ],

    financialStyle:
      'The Water Snake is a patient, perceptive wealth builder who excels at identifying undervalued assets and hidden opportunities. They approach investing with the same analytical depth they bring to understanding people — reading financial landscapes with intuitive precision and acting only when their analysis and instincts align. Their financial discipline is formidable; they rarely make impulsive purchases and can delay gratification indefinitely in service of long-term goals. The Water Snake\'s financial challenge is overcoming their tendency toward excessive secrecy about money. They may hide assets, obscure their financial situation from partners, or use financial control as a form of interpersonal power — patterns that undermine trust in their closest relationships.',

    tips: [
      'Leverage your perceptive gifts in formal professional settings. Your ability to read people and situations is extraordinarily valuable — consider obtaining credentials in psychology, counseling, or strategic consulting that give your natural talents professional legitimacy and structure.',
      'Guard against the isolation of expertise. Your depth of knowledge and analytical ability can create a gulf between you and colleagues who operate more superficially. Develop the patience to explain your insights in accessible terms, and resist the temptation to withhold knowledge as a source of power.',
      'Build a professional reputation for trustworthiness. Your secretive nature can make colleagues wary, even when you have nothing to hide. Be deliberately transparent about your methods and motivations in professional settings — the trust you build compounds over time into extraordinary professional capital.',
      'Create a clear ethical framework for your analytical gifts. Your ability to perceive vulnerabilities and manipulate outcomes carries significant moral responsibility. Establish firm principles about how you will and will not use your insights, and hold yourself accountable to these standards.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Water Snake in love is an experience of extraordinary intensity and depth. When they commit — which they do rarely and never lightly — they bring a devotion that is absolute, consuming, and transformative. The Water Snake's partner enters a world of profound emotional and intellectual connection, where every conversation carries undercurrents of meaning and every gesture is loaded with significance. Being loved by a Water Snake is like discovering a hidden underground river — the surface gives no hint of the powerful current flowing beneath.

The Water Snake's approach to love is both patient and intense. They observe potential partners carefully, sometimes for months, before making any overt move. When they finally act, their courtship is precisely calibrated — each word, gesture, and moment designed to create an atmosphere of irresistible intimacy. They have an uncanny ability to make their chosen person feel uniquely understood, as if the Snake has seen past every defense to the authentic self within.

The Water Snake's romantic challenge is trust — both giving and receiving it. Their perceptive nature means they detect every inconsistency, every half-truth, every shift in their partner's emotional landscape. This awareness, while protective, can become paranoid when the Snake's own insecurities are activated. The Water Snake who learns to extend trust before it is proven — to accept vulnerability as the price of genuine love — discovers an intimacy of almost unbearable beauty.`,

    loveStyle:
      'The Water Snake loves with deep, unwavering intensity that expresses itself through psychological attunement and physical passion. They are extraordinarily attuned to their partner\'s inner world, sensing emotional shifts before they are articulated and responding with precision that feels almost telepathic. Their love language is a fusion of quality time and physical intimacy — they crave deep, uninterrupted connection where masks are dropped and souls are exposed. They need a partner who values emotional depth over social performance and who has the courage to be completely honest in the face of the Snake\'s penetrating perception.',

    idealPartnerTraits: [
      'Deeply Honest',
      'Emotionally Courageous',
      'Loyal',
      'Intellectually Complex',
      'Comfortable with Intensity',
    ],

    tips: [
      'Reveal yourself progressively rather than demanding your partner reveal first. Your instinct to gather information while concealing your own depths creates an imbalance that partners eventually resent. Model the vulnerability you want to receive — share a secret, admit a fear, expose a wound.',
      'Channel jealousy into communication. When you feel the familiar tightening of possessiveness, name it aloud rather than acting on it covertly. "I feel jealous right now" is honest and workable. Surveillance, testing, and passive-aggressive punishment are not.',
      'Accept that your partner will have dimensions you do not fully understand. Your desire to know everything about your partner — every thought, feeling, and motivation — reflects your love but also your need for control. Leave space for mystery, even in deep intimacy. Complete knowledge of another person is neither possible nor desirable.',
      'Build rituals of emotional transparency. Establish regular times when you and your partner check in honestly about the state of your relationship. These structured conversations prevent the buildup of unspoken tensions that the Water Snake naturally accumulates.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Water Snake's constitution combines the Snake's Fire-natured intensity with Water's influence on the body's emotional and fluid systems. In Traditional Chinese Medicine, the Snake's Fire nature governs the Heart and Small Intestine — the organs of circulation, emotional processing, and the discrimination between what nourishes and what should be eliminated. Water governs the Kidneys, the body's storehouse of foundational energy. This creates an internal dynamic where the Snake's passionate intensity (Fire) is constantly being tempered and deepened by emotional processing (Water).

The characteristic Water Snake health pattern involves the internalization of stress. Where more expressive signs release emotional pressure through outbursts or physical activity, the Water Snake absorbs and contains it — processing internally with such efficiency that the outside world sees no evidence of strain. This containment works brilliantly in the short term but creates long-term vulnerability to stress-related conditions: hypertension, digestive disorders, insomnia, and chronic muscle tension, particularly in the neck, shoulders, and jaw.

Prevention for the Water Snake centers on creating safe outlets for their considerable internal pressure. Regular physical activity that generates heat and movement counteracts the tendency toward stagnation. Practices that specifically address the mind-body connection — somatic therapy, acupuncture, mindful movement — help release the stored tension that the Water Snake accumulates through their habitual emotional containment.`,

    bodyAreas: ['Heart', 'Kidneys', 'Nervous System', 'Skin'],

    exercises: [
      'Swimming for meditative, full-body movement',
      'Yoga with emphasis on heart-opening poses',
      'Dance for emotional expression through movement',
      'Martial arts for controlled intensity release',
    ],

    dietTips: [
      'Support heart health with antioxidant-rich foods: berries, dark chocolate, green tea, and omega-3 fatty acids from fish and walnuts. The Snake\'s Fire nature makes cardiovascular support essential, and these foods protect the heart while nourishing the blood.',
      'Nourish the kidneys with warming, restorative foods: bone broth, black beans, walnuts, goji berries, and dark leafy greens. These foods support the Water element\'s foundational organ system and help replenish the deep reserves the Snake draws upon during periods of intense mental activity.',
      'Include bitter foods that support the heart and clear internal heat: dandelion greens, bitter melon, radicchio, and dark chocolate. In TCM, the bitter flavor is associated with the Fire element and helps prevent the buildup of excess heat that the Snake\'s intense mental activity generates.',
      'Eat mindfully and avoid working through meals. The Water Snake\'s tendency to multitask during eating undermines digestive function. Creating a calm, focused eating environment supports the Small Intestine\'s role in nutrient absorption and emotional processing.',
    ],

    mentalHealth:
      'The Water Snake\'s most significant mental health challenge is the cost of perpetual vigilance. Their perceptive mind never stops scanning for threats, reading people, and processing information, creating a level of mental activity that is exhausting even when it is not consciously acknowledged. This constant processing can evolve into anxiety, obsessive thinking, and a persistent sense of being unsafe that has no specific external cause. The Water Snake benefits enormously from practices that quiet the analytical mind and activate the body\'s wisdom: meditation, somatic experiencing, and body-based therapies like craniosacral work or acupuncture. Psychotherapy that addresses attachment patterns and trust issues is particularly transformative for this sign, as many of their psychological challenges stem from early experiences that taught them the world was not safe enough for vulnerability. The Water Snake who gradually, carefully learns to lower their vigilance in safe relationships discovers a peace and emotional richness that their guarded younger self could not have imagined.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 8, 9],
    colors: ['Blue', 'Black', 'Deep Purple', 'Charcoal'],
    direction: 'North',
    gemstones: ['Black Opal', 'Labradorite', 'Smoky Quartz'],
    flowers: ['Black Orchid', 'Night Jasmine', 'Lily'],
    season: 'Winter',
  },

  // ----------------------------------------
  // FAMOUS WATER SNAKES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Oprah Winfrey',
        profession: 'Media Mogul',
        birthYear: 1953,
        description:
          'Oprah Winfrey\'s extraordinary ability to draw out people\'s deepest truths on camera embodies the Water Snake\'s psychological insight and magnetic presence. Her empire, built on authentic emotional connection and strategic business intelligence, reflects the sign\'s rare combination of empathetic depth and calculated ambition.',
      },
      {
        name: 'Pierce Brosnan',
        profession: 'Actor',
        birthYear: 1953,
        description:
          'Pierce Brosnan\'s portrayal of James Bond — suave, strategic, and coolly intense — is a near-perfect embodiment of the Water Snake archetype. His ability to project sophistication, danger, and hidden depth simultaneously reflects the sign\'s characteristic magnetism and enigmatic allure.',
      },
      {
        name: 'Tim Gunn',
        profession: 'Fashion Consultant',
        birthYear: 1953,
        description:
          'Tim Gunn\'s ability to perceive the potential in both garments and people reflects the Water Snake\'s penetrating insight and transformative wisdom. His signature phrase "Make it work" captures the sign\'s strategic patience and belief in the power of refined execution over raw talent.',
      },
      {
        name: 'Cyndi Lauper',
        profession: 'Singer/Songwriter',
        birthYear: 1953,
        description:
          'Cyndi Lauper\'s seemingly playful persona conceals a Water Snake\'s strategic depth and emotional complexity. Her enduring career, built on distinctive artistic vision and shrewd self-reinvention, reflects the sign\'s combination of creative brilliance and patient, long-term strategic thinking.',
      },
      {
        name: 'Mao Zedong',
        profession: 'Revolutionary Leader',
        birthYear: 1893,
        description:
          'Mao Zedong\'s strategic patience, psychological manipulation skills, and ability to read and exploit political dynamics exemplify the Water Snake\'s most formidable qualities. His capacity for long-term strategic planning and his understanding of mass psychology reflect the sign\'s extraordinary perceptiveness directed toward transformative, if deeply controversial, ends.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Snake holds the sixth position in the Chinese zodiac and carries a complex mythological legacy that blends reverence with wariness. In the Great Race legend, the Snake cleverly wrapped itself around the Horse's hoof to cross the river, startling the Horse at the finish line to claim sixth place. This story encodes the Snake's essential nature: strategic intelligence, patience, the willingness to take unconventional approaches, and the ability to achieve goals through cunning rather than force.

In Chinese mythology, the Snake is associated with wisdom, transformation, and the guardianship of sacred knowledge. The famous legend of the White Snake (Bai She Zhuan) tells of a snake spirit who transforms into a beautiful woman — a story that captures the Snake's capacity for profound transformation and the tension between surface appearance and hidden nature. When paired with the Water element, this mythology gains additional depth: the White Snake\'s story is deeply intertwined with water imagery, from the rainstorm of their first meeting at West Lake to the flooding that reveals the Snake's true nature.

The Water Snake also connects to the Chinese philosophical tradition of knowing through feeling rather than analysis alone. Water is the element of intuition, dreams, and the unconscious mind. When paired with the Snake's already profound intelligence, Water creates a personality that accesses knowledge through channels that rational analysis alone cannot reach — what the ancient Chinese called "heart knowing" rather than "mind knowing."`,

    symbolism: `The Water Snake symbolizes the deepest form of knowledge — the understanding that comes from immersion rather than observation, from feeling rather than thinking, from becoming rather than studying. In traditional symbolism, it represents the wisdom of the depths: the knowledge held in underwater caves, deep wells, and the subconscious mind. This is not the sharp, bright wisdom of the surface but the slow, profound wisdom of darkness and silence.

In the Wu Xing cycle, the Water Snake embodies the controlling relationship between Water and Fire — the Snake's hidden flame tempered by the element of depth and reflection. This symbolizes the principle that the most powerful intelligence is not hot and reactive but cool and considered. The Water Snake reminds us that true perception requires patience, that genuine understanding requires empathy, and that the deepest truths reveal themselves only to those willing to sit in darkness long enough for their eyes to adjust.

The Water Snake also symbolizes the transformative power of emotional truth. The snake that sheds its skin is already a universal symbol of renewal; the Water Snake adds the dimension of emotional transformation — the shedding of defensive patterns, the release of accumulated pain, and the emergence of a self that is both more vulnerable and more powerful than what came before.`,

    modernInterpretation: `In contemporary culture, the Water Snake archetype resonates with growing appreciation for emotional intelligence, psychological depth, and the power of intuitive knowledge. In a world increasingly driven by data and analytics, the Water Snake represents the irreplaceable value of human insight — the ability to perceive meaning, motivation, and possibility that no algorithm can replicate. Their natural talents align with the most sophisticated approaches in psychology, behavioral economics, and strategic consulting.

The Water Snake also speaks to the modern fascination with authenticity and vulnerability. As cultural narratives shift from celebrating invulnerability to valuing honest emotional expression, the Water Snake's journey from secrecy to selective transparency becomes a powerful metaphor for personal growth. Their story suggests that the path to genuine connection runs not through building better defenses but through finding the courage to lower them.

For those born in Water Snake years, the contemporary world offers both extraordinary opportunity and significant challenge. Their perceptive gifts are more valued than ever, but the demand for transparency in the digital age conflicts with their instinct for privacy. The most successful Water Snakes find the balance between strategic discretion and genuine openness — revealing enough of themselves to build trust while maintaining the privacy that protects their rich inner world.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
