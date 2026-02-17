// ============================================
// FIRE ROOSTER (丙酉) — The Bold Perfectionist
// ============================================
// Fire ignites the Rooster's exacting standards and social
// flair, creating a dazzling performer who demands excellence
// from themselves and everyone around them.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-rooster',
  profile: getProfileBySlug('fire-rooster')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Rooster is the most dramatic and commanding member of the Rooster family. Where other Roosters channel their perfectionism into quiet, methodical excellence, the Fire Rooster demands that the world notice. They combine the Rooster's legendary attention to detail and exacting standards with Fire's passionate energy and bold self-presentation, creating a personality that is equal parts master craftsman and center-stage performer. The Fire Rooster does not just do things well — they do things brilliantly, and they make certain you see it.

What makes the Fire Rooster compelling is the fusion of precision and passion. The standard Rooster is meticulous, organized, and critical — qualities that can seem cold or mechanical to more emotionally expressive signs. Fire transforms these qualities into something magnetic. The Fire Rooster's attention to detail becomes a passionate pursuit of perfection; their critical eye becomes a bold willingness to speak truths others avoid; their organizational skill becomes the foundation for ambitious visions executed flawlessly.

Yet the Fire Rooster's combination of high standards and fiery temperament creates a volatile mix. They can be brutally honest, impossibly demanding, and harshly judgmental — not out of cruelty, but because their vision of excellence is so vivid that anything falling short feels genuinely offensive to them. The Fire Rooster's journey is one of learning that the pursuit of perfection is noble, but the demand for perfection in others is destructive — and that the most powerful form of excellence is the kind that lifts others up rather than cutting them down.`,

    coreTraits: [
      'Perfectionist',
      'Flamboyant',
      'Outspoken',
      'Organized',
      'Confident',
      'Critical',
    ],

    strengths: [
      {
        trait: 'Exceptional Standards',
        description:
          'The Fire Rooster produces work of extraordinary quality. Their combination of the Rooster\'s meticulous attention to detail with Fire\'s passionate drive to excel creates results that are both technically flawless and emotionally resonant. They do not settle for "good enough" in any area of life, and this relentless standard often produces genuinely outstanding outcomes.',
      },
      {
        trait: 'Fearless Honesty',
        description:
          'Fire Roosters say what others are thinking but afraid to voice. Their combination of the Rooster\'s observational precision with Fire\'s bold expressiveness makes them invaluable truth-tellers in organizations, relationships, and social groups. They cut through pretense, identify problems, and articulate uncomfortable truths with a directness that is both refreshing and occasionally devastating.',
      },
      {
        trait: 'Commanding Presentation',
        description:
          'The Fire Rooster is the zodiac\'s natural showman. Their attention to appearance, timing, and dramatic effect makes them extraordinarily effective communicators and performers. Whether presenting to a boardroom, performing on stage, or simply entering a social gathering, they create an impression that is polished, powerful, and impossible to forget.',
      },
      {
        trait: 'Strategic Organization',
        description:
          'The Fire Rooster brings a unique combination of vision and structure to every endeavor. They can conceive ambitious plans and break them down into precisely organized steps, then execute each step with passionate attention to quality. This makes them exceptional project managers, event organizers, and leaders of complex initiatives.',
      },
    ],

    challenges: [
      {
        trait: 'Harsh Criticism',
        description:
          'The Fire Rooster\'s combination of high standards and fiery directness can be genuinely harmful to others. Their criticism, while often accurate, is delivered with a heat and precision that wounds deeply. They may devastate a colleague\'s confidence, crush a partner\'s enthusiasm, or alienate a friend with a single well-aimed observation — and then be genuinely puzzled by the emotional fallout.',
      },
      {
        trait: 'Vanity and Self-Importance',
        description:
          'Fire amplifies the Rooster\'s natural pride in appearance and achievement into something that can become all-consuming. Fire Roosters can spend excessive time and resources on their image, demand constant recognition for their accomplishments, and become deeply offended when their contributions are not adequately acknowledged.',
      },
      {
        trait: 'Inflexibility',
        description:
          'The Fire Rooster\'s conviction that they know the right way to do things makes them resistant to alternative approaches. Their confidence in their own standards — often justified — can prevent them from recognizing when those standards are inappropriate for the situation or when other people\'s methods might produce equally valid results.',
      },
      {
        trait: 'Stress from Self-Imposed Pressure',
        description:
          'The Fire Rooster\'s relentless pursuit of perfection generates enormous internal pressure. They are their own harshest critic, and the gap between their exacting standards and imperfect reality creates chronic stress that they may not recognize as self-inflicted. This internal pressure can manifest as irritability, health problems, and relationship strain.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Rooster is associated with the Metal element — precise, disciplined, and sharp. When Fire is added to this Metal-natured animal, the destructive cycle activates: Fire melts Metal. This creates the same internal tension found in the Fire Monkey but expressed differently. Where the Fire Monkey's Metal-Fire tension produces creative volatility, the Fire Rooster's version produces a dramatic conflict between perfectionism and passion.

Fire's heat softens Metal's rigid precision, making the Fire Rooster warmer and more socially engaging than other Rooster variants. However, it also destabilizes the Rooster's natural inclination toward methodical, systematic thinking. The Fire Rooster may swing between periods of passionate creativity and harsh self-criticism — the Fire pushing them to create boldly, the Metal demanding that every creation meet impossible standards. The Fire Rooster benefits from Earth element influences that mediate this tension, providing grounding stability that allows both Fire's passion and Metal's precision to coexist productively rather than destructively.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Rooster's compatibility is shaped by their need for a partner who appreciates their high standards, tolerates their directness, and provides emotional warmth without demanding that the Rooster soften their exacting nature. They are drawn to people who are competent, well-presented, and emotionally resilient — qualities that signal the ability to thrive alongside the Rooster's intense expectations.

Traditional Chinese astrology places the Rooster in the "Earth Trine" alongside the Ox and the Snake — animals that share the Rooster's methodical nature, attention to detail, and appreciation for structure. These three signs form natural alliances built on mutual respect for competence and shared standards of excellence. The Rooster's greatest challenge comes from the Rabbit, which sits in direct opposition and represents the gentle, conflict-averse approach that the blunt Rooster finds frustratingly indirect.`,

    bestMatches: [
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 90,
        summary:
          'The Earth Ox\'s patient strength and rock-solid reliability provides the Fire Rooster with a partner who meets their high standards through consistent, undeniable competence. The Ox\'s thick skin handles the Rooster\'s criticism without crumbling, and their Earth nature grounds the Rooster\'s fiery intensity. Both value hard work, quality, and results — creating a partnership built on mutual professional respect that deepens into genuine devotion.',
      },
      {
        slug: 'water-snake',
        name: 'Water Snake',
        score: 87,
        summary:
          'The Water Snake\'s strategic intelligence and refined aesthetic sense appeals to the Fire Rooster\'s appreciation for excellence. The Snake understands the Rooster\'s perfectionism without being threatened by it, and their Water element provides the cooling, intuitive influence that softens the Rooster\'s sharp edges. Together, they create an alliance of formidable competence and shared appreciation for quality.',
      },
      {
        slug: 'wood-dragon',
        name: 'Wood Dragon',
        score: 82,
        summary:
          'The Wood Dragon\'s visionary ambition and natural authority earns the Fire Rooster\'s respect — one of the few signs capable of impressing this demanding sign. The Dragon provides the grand vision; the Rooster provides the meticulous execution. Wood\'s flexibility helps the Dragon accommodate the Rooster\'s exacting standards without feeling controlled.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-rabbit',
        name: 'Fire Rabbit',
        score: 30,
        summary:
          'The Fire Rabbit\'s sensitivity and need for harmony is devastated by the Fire Rooster\'s blunt criticism and exacting demands. The Rooster sees the Rabbit as weak and indirect; the Rabbit sees the Rooster as cruel and insensitive. Double Fire amplifies every disagreement into a major emotional event, and neither sign has the tools to bridge their fundamental communication gap.',
      },
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 38,
        summary:
          'The Water Rat\'s flexible, opportunistic approach to life clashes with the Fire Rooster\'s rigid standards and demand for consistency. The Rooster sees the Rat as unprincipled; the Rat sees the Rooster as insufferably rigid. Water\'s fluidity is maddening to Fire\'s directness, and the Rat\'s calculating social strategies feel dishonest to the Rooster\'s forthright nature.',
      },
      {
        slug: 'fire-dog',
        name: 'Fire Dog',
        score: 42,
        summary:
          'Both the Rooster and the Dog are principled and opinionated, but their principles and opinions often diverge sharply. The Fire Dog\'s moral idealism clashes with the Fire Rooster\'s practical perfectionism, and both signs are too proud and too certain of their own rightness to compromise easily. Double Fire ensures that disagreements escalate quickly and cool slowly.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Metal animal, the Fire Rooster navigates the same destructive-cycle tension as the Fire Monkey but with a focus on perfectionism rather than creativity. Earth element signs provide the most stabilizing influence, mediating between Fire and Metal and offering the practical support that grounds the Rooster\'s intense energy. Water element signs offer emotional depth and cooling influence, though Water\'s indirectness can frustrate the Rooster\'s need for straightforward communication. Wood element signs feed Fire\'s passionate energy but are controlled by Metal, creating partnerships with complex power dynamics. Other Metal element signs amplify the Rooster\'s analytical precision but may create emotional coldness when Fire\'s warmth is overwhelmed by doubled Metal restraint.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Rooster excels in careers that reward both precision and performance. They are natural leaders in environments that value high standards, clear communication, and the ability to deliver polished, professional results. Unlike signs that thrive in ambiguity, the Fire Rooster does their best work when expectations are clear, quality metrics are defined, and there is a visible audience to appreciate their excellent results.

The ideal Fire Rooster career provides a platform for their dual strengths: meticulous execution and commanding presentation. They need work that is both technically demanding and publicly visible — roles where their commitment to excellence is not just internally satisfying but externally recognized. Industries that value craftsmanship, performance, and professional polish are their natural habitat.

Financially, Fire Roosters are disciplined earners and strategic spenders. They are drawn to quality over quantity in all things, preferring fewer, better possessions to accumulating cheap alternatives. This refined approach to spending serves them well when balanced with adequate saving, but their taste for the best can lead to financial strain if income does not match aspirations.`,

    idealCareers: [
      'Surgeon or Specialist Physician',
      'Fashion Industry Executive',
      'Television News Anchor',
      'Quality Assurance Director',
      'Restaurant Critic or Food Writer',
      'Military Officer',
      'Theatrical Director',
      'Brand Strategist',
    ],

    financialStyle:
      'Fire Roosters are quality-conscious earners who manage money with the same precision they bring to everything else. They track expenses meticulously, invest with careful research, and spend deliberately on high-quality items that reflect their exacting standards. Their financial risk is perfectionism applied to spending — choosing the absolute best in every category until the total exceeds their means. The Fire Rooster who sets a clear budget before shopping and accepts "excellent" rather than insisting on "perfect" in every purchase maintains financial health without sacrificing their quality of life.',

    tips: [
      'Deliver feedback as a gift, not a weapon. Your critical insights are genuinely valuable, but the way you deliver them determines whether people receive them as helpful or hostile. Practice framing criticism constructively — lead with what works well, suggest specific improvements, and deliver your observations with warmth rather than judgment.',
      'Delegate to competent people and trust them. Your perfectionism makes delegation painful, but attempting to control every detail limits your impact and exhausts you. Find skilled people, set clear standards, and then give them room to execute — intervening only when quality genuinely falls below acceptable levels.',
      'Build a personal brand deliberately. Your natural flair for presentation is a professional asset that deserves strategic cultivation. Invest in your public image, your communication skills, and the platforms that showcase your expertise — the Fire Rooster who is both excellent and visible advances fastest.',
      'Manage stress proactively. Your self-imposed pressure is relentless and often invisible to others. Build genuine relaxation practices into your schedule — not as rewards for performance but as essential maintenance for your high-performance operating system.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Rooster approaches love with the same passionate precision they bring to everything else — intensely, specifically, and with extremely high expectations. They are romantic idealists who envision a partnership of mutual excellence, where both partners bring their best selves to the relationship and inspire each other to even greater heights. When a Fire Rooster finds a partner who meets their standards, the devotion is absolute and the relationship is extraordinary.

The Fire Rooster's romantic strength is the quality of attention they bring to their partner. They notice everything — the new haircut, the subtle shift in mood, the preference expressed once months ago and remembered perfectly. This attentiveness, combined with Fire's warmth, creates a partner who makes their loved one feel genuinely seen and valued in a way that few other signs can match.

The challenge is that the Fire Rooster's critical eye does not take a holiday in romantic relationships. They may critique their partner's appearance, habits, decisions, or performance with the same unfiltered directness they apply to professional contexts, not realizing that romantic love requires a different standard than professional excellence. The Fire Rooster who learns to love their partner's imperfections — rather than treating them as renovation projects — discovers a depth of acceptance that enriches both their relationship and their own humanity.`,

    loveStyle:
      'The Fire Rooster loves with passionate precision — attentive, devoted, and fiercely loyal once committed. They express love through acts of quality: beautifully prepared meals, impeccably planned dates, thoughtful gifts selected with careful consideration. Their love language combines quality time with acts of service, all delivered with the Fire Rooster\'s characteristic flair for presentation. They need a partner who appreciates the effort behind every gesture and who can handle honest, direct communication.',

    idealPartnerTraits: [
      'Emotionally Resilient',
      'Well-Presented',
      'Appreciative',
      'Competent',
      'Honest',
    ],

    tips: [
      'Separate your perfectionism from your love. Your partner is a human being, not a project. Practice appreciating who they are rather than focusing on who they could be with your guidance. The love that accepts imperfection is far more powerful than the love that constantly corrects.',
      'Express admiration as often as criticism. Your critical observations come naturally; praise requires conscious effort. Make a deliberate practice of noticing and voicing what you love about your partner — their qualities, achievements, and the specific things they do that make your life better.',
      'Accept different standards gracefully. Your partner will not organize their closet, prepare meals, or manage their schedule to your exacting specifications — and that is acceptable. Practice letting go of standards that matter to you but not to them, saving your energy for the few areas where shared standards genuinely matter.',
      'Be vulnerable about your own imperfections. Your instinct is to present a polished exterior at all times, but your partner needs to see your messy, uncertain, imperfect self. Sharing your own struggles and shortcomings creates the emotional intimacy that your perfectionist exterior inadvertently blocks.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Rooster's health profile reflects the tension between Metal's contracting, cooling nature and Fire's expanding, heating energy. In Traditional Chinese Medicine, the Rooster's Metal element governs the Lungs and Large Intestine, while Fire's influence adds heat and intensity to this naturally cool system. The result is a constitution that can run hot and dry, particularly when stress — the Fire Rooster's constant companion — is not effectively managed.

The Fire Rooster's primary health vulnerability is stress-related conditions. Their relentless perfectionism, combined with their emotional intensity and social demands, creates a chronic baseline of tension that manifests physically through the Metal-governed organs: respiratory issues, skin conditions, and digestive problems related to the Large Intestine. The Fire Rooster's body keeps score of every unmet standard and every swallowed frustration.

The Fire Rooster's approach to health tends to mirror their approach to everything else: intensive research, high standards, and a tendency to critique their own body's performance. This can be an asset when it drives them toward excellent self-care practices, but it becomes a liability when health anxiety and body perfectionism add yet another source of stress to an already pressurized system.`,

    bodyAreas: ['Lungs', 'Large Intestine', 'Skin', 'Voice/Throat'],

    exercises: [
      'Precision sports like fencing or archery',
      'Structured fitness programs',
      'Pilates for core strength and alignment',
      'Competitive running with timed goals',
    ],

    dietTips: [
      'Support Lung health with moistening foods that counterbalance the Fire-Metal dryness: pear, white wood ear mushroom, honey, and almond milk. These foods protect the respiratory system that is the Fire Rooster\'s most vulnerable area.',
      'Include foods that support healthy skin: fatty fish, avocado, nuts, and plenty of water. The Fire Rooster\'s skin often reflects their internal state, and nutritional support from within produces better results than topical treatments alone.',
      'Eat mindfully and on a consistent schedule. The Fire Rooster\'s busy, demanding lifestyle can lead to rushed, irregular meals that disrupt the Metal-governed digestive system. Treating meals as important events — prepared with care and eaten with attention — supports both physical and mental health.',
      'Reduce foods that generate internal heat during stressful periods: fried foods, excessive red meat, and concentrated sugars. During high-pressure times, shifting toward lighter, cooling meals helps prevent the accumulation of heat that manifests as irritability, skin outbreaks, and insomnia.',
    ],

    mentalHealth:
      'The Fire Rooster\'s mental health is profoundly affected by their relationship with perfectionism. When perfectionism operates as a healthy drive toward excellence, the Fire Rooster thrives. When it becomes a tyrannical inner voice that criticizes every imperfection and demands impossible standards, it drives anxiety, insomnia, and chronic dissatisfaction. The most effective mental health intervention for this sign is learning to distinguish between healthy high standards and destructive perfectionism — a subtle but crucial distinction. Cognitive behavioral therapy works well for the Fire Rooster\'s analytical mind, helping them identify and challenge the irrational beliefs that fuel their harshest self-criticism. Creative outlets where perfection is explicitly not the goal — improv theater, freeform painting, or playful cooking without recipes — provide essential relief from the Fire Rooster\'s internal critic and reconnect them with the joy that perfectionism tends to suppress.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [5, 7, 8],
    colors: ['Gold', 'Orange', 'Deep Red'],
    direction: 'South',
    gemstones: ['Topaz', 'Carnelian', 'Tiger\'s Eye'],
    flowers: ['Gladiolus', 'Cockscomb', 'Snapdragon'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE ROOSTERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Steve Martin',
        profession: 'Comedian/Actor/Writer',
        birthYear: 1957,
        description:
          'Steve Martin\'s extraordinary versatility — from wild-and-crazy comedy to acclaimed dramatic acting to banjo virtuosity to bestselling novels — embodies the Fire Rooster\'s relentless pursuit of excellence across multiple domains. His meticulous approach to craft, combined with bold, flamboyant performance style, is quintessential Fire Rooster energy.',
      },
      {
        name: 'Katie Couric',
        profession: 'Journalist/TV Anchor',
        birthYear: 1957,
        description:
          'Katie Couric\'s polished professionalism, incisive interviewing style, and commanding on-camera presence reflects the Fire Rooster\'s natural affinity for roles that combine precision with performance. Her career as a groundbreaking female news anchor demonstrates the Fire Rooster\'s ability to maintain exacting standards while breaking barriers.',
      },
      {
        name: 'Osama bin Laden',
        profession: 'Militant Leader',
        birthYear: 1957,
        description:
          'Osama bin Laden represents the Fire Rooster\'s shadow taken to its destructive extreme — the conviction of absolute rightness, the meticulous planning, and the willingness to impose one\'s standards on the world through force. His story illustrates how the Fire Rooster\'s certainty and organizational skill become catastrophically dangerous when divorced from empathy and moral proportion.',
      },
      {
        name: 'Spike Lee',
        profession: 'Film Director',
        birthYear: 1957,
        description:
          'Spike Lee\'s bold, provocative filmmaking and fearless social commentary embody the Fire Rooster\'s combination of artistic precision and outspoken honesty. His willingness to address uncomfortable truths through meticulously crafted cinema reflects the Fire Rooster\'s belief that excellence and truth-telling are inseparable obligations.',
      },
      {
        name: 'Bernie Mac',
        profession: 'Comedian/Actor',
        birthYear: 1957,
        description:
          'Bernie Mac\'s commanding stage presence, fearless honesty, and meticulously crafted comedic performances embody the Fire Rooster\'s combination of bold self-expression and painstaking attention to craft. His ability to hold audiences through sheer force of personality and razor-sharp delivery reflects the Fire Rooster\'s natural dominance of any stage.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Rooster holds the tenth position in the Chinese zodiac and occupies a unique cultural role as the herald of dawn — the creature whose cry banishes darkness and calls the world to wakefulness. In Chinese mythology, the Rooster is associated with the Heavenly Rooster, a celestial being perched atop the cosmic tree Fusang, whose crow signals the sun to rise. This mythological role connects the Rooster to themes of vigilance, honesty, and the courage to announce truth even when the world would prefer to remain asleep.

When Fire transforms this already bold creature, the mythological resonance intensifies into something spectacular. The Fire Rooster recalls the Phoenix-like Fenghuang of Chinese mythology — a creature of divine beauty and supernatural power whose appearance signals transformative change. While the Fenghuang is technically distinct from the Rooster, the visual and symbolic connections are strong: both are magnificent birds associated with Fire, beauty, virtue, and the dramatic announcement of new eras.

In Korean and Vietnamese traditions, the Rooster is similarly associated with courage, punctuality, and the moral authority to speak truth. The Fire Rooster specifically is linked to periods of bold reform and uncompromising accountability — eras when society demands honesty and excellence from its leaders and institutions.`,

    symbolism: `The Fire Rooster symbolizes truth spoken with passion — the voice that refuses to be silenced and the eye that refuses to look away. In traditional Wu Xing symbolism, Fire acting on Metal represents the process of refinement: heat applied to raw material to burn away impurities, leaving only what is genuine and valuable. The Fire Rooster embodies this refining process, stripping away pretense, mediocrity, and dishonesty to reveal the essential truth beneath.

The Fire Rooster is also a symbol of magnificent display — the understanding that beauty, presentation, and spectacle have their own kind of power and purpose. The Rooster\'s plumage in nature is among the most spectacular in the animal kingdom, and the Fire Rooster elevates this natural display into a symbol of excellence made visible. They remind us that quality deserves to be seen, that craft deserves recognition, and that the pursuit of beauty is not vanity but a form of respect for the world.

In the cycle of time, the Rooster is associated with late afternoon — the hour when the day\'s work is evaluated and the quality of the day\'s efforts becomes visible in the golden light. Fire\'s influence on this temporal symbolism suggests the moment of truth: the time when results are judged, standards are applied, and excellence is distinguished from mediocrity.`,

    modernInterpretation: `In contemporary culture, the Fire Rooster archetype appears wherever quality, honesty, and dramatic presentation converge. The Fire Rooster year of 1957 produced a generation of artists, journalists, and leaders whose careers were defined by the relentless pursuit of excellence and the willingness to speak uncomfortable truths.

The 1957 cohort brought Fire Rooster energy to media, film, and public life during an era that increasingly valued personality, presentation, and authentic voice. Their careers demonstrate the Fire Rooster's dual gift: the ability to produce work of exceptional quality while ensuring that quality is communicated with maximum impact.

For modern Fire Roosters, the digital age is both ally and challenge. Social media rewards the bold self-presentation that comes naturally to this sign, but it also amplifies criticism and invites the constant comparison that triggers the Rooster's perfectionist anxiety. The most effective contemporary Fire Roosters learn to use digital platforms as stages for their genuine excellence rather than as mirrors for their insecurity — sharing quality work with confidence while developing the resilience to weather the inevitable criticism that visible excellence attracts.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
