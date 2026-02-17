// ============================================
// FIRE DOG (丙戌) — The Fierce Protector
// ============================================
// Fire ignites the Dog's natural loyalty and moral compass,
// creating a passionate defender of justice who fights for
// the vulnerable with unwavering courage and conviction.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-dog',
  profile: getProfileBySlug('fire-dog')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Dog is the most passionate and outspoken member of the Dog family. Where other Dogs express their loyalty and moral conviction through quiet steadfastness and reliable support, the Fire Dog broadcasts their principles with burning intensity. They are the Dog who barks — loudly, clearly, and without apology — when injustice is detected, when the vulnerable are threatened, or when principles are violated. Fire transforms the Dog's natural devotion from a quiet virtue into a blazing crusade.

What makes the Fire Dog uniquely powerful is the combination of the Dog's unwavering moral compass with Fire's passionate courage. The standard Dog knows right from wrong with remarkable clarity but may lack the confidence to act on that knowledge in the face of opposition. The Fire Dog has no such hesitation. They confront wrongdoing directly, defend the underdog passionately, and hold themselves and others to standards that they believe are not merely preferences but moral imperatives. Their sense of justice is not abstract — it burns in them like a physical force.

Yet the Fire Dog's passionate morality carries risks that their less intense kin avoid. Their certainty about what is right can become rigid fundamentalism. Their loyalty can become possessive tribalism. And their willingness to fight for their beliefs can escalate into aggression that causes the very harm they seek to prevent. The Fire Dog's journey is one of learning to pair their fierce convictions with humility, compassion, and the recognition that even the most righteous anger requires wisdom to be truly just.`,

    coreTraits: [
      'Loyal',
      'Principled',
      'Courageous',
      'Idealistic',
      'Protective',
      'Anxious',
    ],

    strengths: [
      {
        trait: 'Moral Courage',
        description:
          'The Fire Dog possesses the rarest and most valuable form of courage: the willingness to stand up for what is right even when it is personally costly. They will challenge authority, risk friendships, and sacrifice comfort to defend their principles. This moral courage makes them natural leaders in social justice, whistleblowing, and any context where someone needs to say the difficult truth.',
      },
      {
        trait: 'Fierce Loyalty',
        description:
          'When a Fire Dog gives their loyalty, it is absolute, passionate, and enduring. They defend their loved ones with the full force of their considerable protective instinct, standing between their people and any threat with a ferocity that leaves no doubt about their commitment. This loyalty extends beyond personal relationships to communities, institutions, and causes they have adopted as their own.',
      },
      {
        trait: 'Passionate Advocacy',
        description:
          'The Fire Dog is a natural advocate and activist. Their combination of moral clarity, emotional intensity, and genuine concern for the welfare of others makes them extraordinarily effective champions of causes they believe in. They do not merely support — they fight, organize, speak, and sacrifice with a passion that moves others to action.',
      },
      {
        trait: 'Authentic Integrity',
        description:
          'The Fire Dog is incapable of sustained pretense. What you see is what you get — their values, their feelings, and their intentions are worn openly. This radical authenticity, while sometimes uncomfortable for those around them, creates a trust that cannot be earned any other way. People know exactly where they stand with a Fire Dog, and that clarity is invaluable in a world of ambiguity.',
      },
    ],

    challenges: [
      {
        trait: 'Moral Rigidity',
        description:
          'The Fire Dog\'s strong moral convictions can harden into inflexible fundamentalism. They may divide the world into absolutes of right and wrong, good and evil, with no room for nuance, context, or the recognition that moral questions are sometimes genuinely complex. This rigidity can make them judgmental, self-righteous, and unable to understand perspectives that differ from their own.',
      },
      {
        trait: 'Chronic Anxiety',
        description:
          'The Dog\'s natural tendency toward worry is amplified by Fire\'s intensity into something that can become debilitating. Fire Dogs worry about their loved ones, about the state of the world, about whether they are doing enough, about threats real and imagined. This chronic vigilance is exhausting and can manifest as insomnia, irritability, and stress-related health conditions.',
      },
      {
        trait: 'Aggressive Defensiveness',
        description:
          'The Fire Dog\'s protective instinct, when combined with Fire\'s intensity, can manifest as preemptive aggression. They may perceive threats where none exist, interpret neutral behavior as hostile, and respond to perceived attacks with disproportionate force. This hair-trigger defensiveness can damage relationships and create the very conflicts the Dog is trying to prevent.',
      },
      {
        trait: 'Cynicism',
        description:
          'The Fire Dog\'s idealism, when repeatedly disappointed by human failings, can curdle into bitter cynicism. They may lose faith in institutions, individuals, and humanity\'s capacity for good — a particularly painful trajectory for a sign that starts with such passionate belief in justice and goodness. This cynicism, once established, is difficult to reverse.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dog is associated with the Earth element — grounded, loyal, and stable. When Fire is added to this Earth-natured animal, the productive cycle activates: Fire generates Earth. This harmonious relationship means Fire naturally strengthens and enriches the Dog's core qualities, adding passion and courage to the Dog's innate loyalty, reliability, and moral strength.

This Fire-Earth dynamic makes the Fire Dog one of the most internally consistent signs in the zodiac. There is no elemental conflict — only mutual reinforcement. Fire's passion fuels the Dog's convictions, and the Dog's earthy groundedness gives Fire's intensity something solid to burn for. However, as with the Fire Ox (which shares this productive relationship), the very harmony of the combination can lead to excess. Without internal contradiction to provide balance, the Fire Dog can push their dominant qualities to extremes: loyalty becomes possessiveness, morality becomes fundamentalism, and protectiveness becomes control. The Fire Dog benefits from Water element influences that cool their intensity and Wood element influences that add flexibility to their rigid moral framework.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Dog's compatibility is shaped by their need for a partner who shares their values, respects their principles, and provides emotional reassurance without enabling their anxiety. They are drawn to people of integrity — those who demonstrate consistency between their stated values and their actions. Superficiality, dishonesty, and moral ambiguity are deal-breakers for the Fire Dog, who needs to trust their partner's character completely before they can open their guarded heart.

Traditional Chinese astrology places the Dog in the "Fire Triangle" alongside the Tiger and the Horse — animals that share the Dog's courage, loyalty, and restless energy. These three signs form natural alliances built on mutual respect and shared values of freedom and justice. The Dog's greatest challenge comes from the Dragon, which sits in direct opposition and represents the hierarchical, ego-driven approach that the egalitarian Dog instinctively resists.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 92,
        summary:
          'The Wood Tiger\'s courageous, adventurous spirit and commitment to justice creates a powerful alliance with the Fire Dog. Both signs are passionate defenders of the vulnerable, and their shared Fire Triangle energy produces a partnership of extraordinary mutual respect and shared purpose. Wood\'s compassion softens the Tiger\'s aggression, creating a partner whose bravery the Fire Dog deeply admires.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 85,
        summary:
          'The Water Rabbit\'s gentle warmth and emotional intelligence provides a calming influence that the anxious Fire Dog desperately needs. The Rabbit\'s talent for creating harmonious environments soothes the Dog\'s chronic vigilance, while Water\'s cooling nature prevents the Dog\'s Fire from overheating. In return, the Fire Dog provides the protection and loyalty that allows the Rabbit to feel safe.',
      },
      {
        slug: 'fire-horse',
        name: 'Fire Horse',
        score: 88,
        summary:
          'A dynamic Fire Triangle partnership built on shared courage and mutual respect for freedom. The Fire Horse\'s fierce independence and passionate spirit matches the Fire Dog\'s own intensity, creating a relationship where both partners feel truly understood. The Horse brings excitement and spontaneity; the Dog brings stability and moral grounding. Together, they are a formidable team.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-dragon',
        name: 'Fire Dragon',
        score: 28,
        summary:
          'The fundamental zodiac opposition between Dog and Dragon is amplified by shared Fire intensity. The Fire Dragon\'s hierarchical worldview and expectation of deference directly conflicts with the Fire Dog\'s egalitarian principles and instinct to question authority. The Dog sees the Dragon\'s confidence as arrogance; the Dragon sees the Dog\'s questioning as disloyalty. Double Fire ensures explosive confrontations.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 38,
        summary:
          'The Earth Rooster\'s critical perfectionism and blunt delivery clashes with the Fire Dog\'s sensitive idealism. The Rooster\'s focus on standards and critique feels cold and heartless to the Dog, while the Dog\'s moral intensity feels judgmental and hypocritical to the Rooster. Both are opinionated and principled, but their principles point in different directions.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 42,
        summary:
          'The Metal Ox\'s rigid authority and demand for obedience triggers the Fire Dog\'s instinct to resist control. The Dog values equality and fairness; the Ox values hierarchy and discipline. Metal\'s sharpness wounds the Dog\'s sensitive nature, and the Dog\'s questioning of the Ox\'s methods is perceived as insubordination rather than legitimate concern.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Earth animal, the Fire Dog benefits from the harmonious productive relationship within their own nature. Water element signs provide the most valuable balancing influence — Water\'s cooling, calming energy helps manage the Fire Dog\'s anxiety and emotional intensity without undermining their passionate nature. Wood element signs feed Fire\'s energy and add flexibility to the Dog\'s rigid moral framework, creating dynamic partnerships. Earth element signs offer comfortable familiarity and shared values but risk creating too much stubborn resistance to change. Metal element signs, produced by Earth in the productive cycle, can provide valuable structure and discipline, but Metal\'s critical nature may trigger the Dog\'s defensive instincts.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Dog excels in careers that serve a clear moral purpose. They are natural advocates, protectors, and defenders who bring extraordinary passion and commitment to work that aligns with their deeply held values. Unlike signs that are motivated primarily by money, status, or intellectual challenge, the Fire Dog is driven by meaning — the knowledge that their work makes the world a measurably better, fairer, or safer place.

The ideal Fire Dog career provides both purpose and belonging. They need work that matters and a team or community they can be loyal to. Isolated, mercenary work — no matter how well-paid — leaves the Fire Dog empty and anxious. They thrive in organizations with clear missions, strong values, and a genuine commitment to the communities they serve.

Financially, Fire Dogs are responsible earners who prioritize security over luxury. Their anxiety about the future drives them toward stable employment and conservative financial practices. While this approach prevents the spectacular failures that more aggressive signs risk, it can also limit the Fire Dog's earning potential and prevent them from pursuing entrepreneurial opportunities that could be both financially and morally rewarding.`,

    idealCareers: [
      'Human Rights Attorney',
      'Social Worker',
      'Firefighter or Paramedic',
      'Union Organizer',
      'Nonprofit Director',
      'Veterinarian',
      'Police Detective',
      'Environmental Activist',
    ],

    financialStyle:
      'Fire Dogs are responsible, security-conscious money managers who prioritize stability over growth and generosity over accumulation. They save consistently, avoid debt, and spend modestly — with the notable exception of generous giving to causes and people they believe deserve support. Their financial risk is not impulsive spending but excessive caution: avoiding investments that could grow their wealth because the risk triggers their anxiety. The Fire Dog who finds a trusted financial advisor and allows themselves to take calculated risks with a portion of their savings builds greater long-term security than those who keep everything in safe but low-return accounts.',

    tips: [
      'Choose work that aligns with your values — and be willing to change when it no longer does. Your commitment to your organization is admirable, but staying in a role that compromises your principles creates the chronic stress that other signs can tolerate but the Fire Dog cannot. Your integrity is not negotiable.',
      'Manage your anxiety as a professional skill. Your tendency to worry about everything can be paralyzing in leadership roles. Develop specific strategies for distinguishing genuine threats from anxiety-driven false alarms, and practice making decisions based on assessment rather than fear.',
      'Build boundaries between professional advocacy and personal identity. Your tendency to merge your identity with your cause can lead to burnout, compassion fatigue, and a loss of perspective that actually undermines your effectiveness. You serve your cause best when you are well-rested, personally fulfilled, and emotionally balanced.',
      'Develop political skills without compromising your values. Your instinct is to be direct and uncompromising, but organizational change often requires patience, coalition-building, and strategic compromise. Learning to pursue justice through institutional channels — rather than only through confrontation — multiplies your impact.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Dog is one of the most loyal and devoted partners in the zodiac, offering a depth of commitment and protective care that few other signs can match. When a Fire Dog loves, they love with their entire being — body, mind, and moral conviction. Their partner becomes family in the deepest sense: someone the Fire Dog will defend, support, and stand beside through any trial, with a faithfulness that does not waver regardless of circumstance.

The Fire Dog's romantic strength is the quality of their devotion. They are attentive, reliable, and genuinely concerned with their partner's well-being — not in a controlling way, but with the same fierce protectiveness they extend to all those in their care. A Fire Dog partner remembers your concerns, shows up when they promise, defends you to others, and creates a home that feels genuinely safe.

The challenge in Fire Dog relationships is anxiety-driven behavior. Their worry about the relationship's security can manifest as jealousy, possessiveness, or constant need for reassurance. They may test their partner's loyalty, demand excessive communication, or become distressed by normal social interactions that their anxious mind interprets as threats. The Fire Dog who learns to trust — both their partner and the strength of their own bond — discovers that love is most powerful when it is given freely rather than vigilantly guarded.`,

    loveStyle:
      'The Fire Dog loves with fierce, protective devotion. They are loyal, attentive, and deeply invested in creating a relationship of mutual trust, safety, and shared values. Their love language combines acts of service and quality time — they show love by being present, by protecting, and by building a stable, secure life together. They need a partner who is honest, loyal, and willing to provide the emotional reassurance that calms their anxious nature.',

    idealPartnerTraits: [
      'Honest',
      'Loyal',
      'Emotionally Reassuring',
      'Principled',
      'Patient',
    ],

    tips: [
      'Distinguish between protective love and controlling behavior. Your instinct to keep your partner safe can shade into behavior that restricts their freedom. Trust that your partner can navigate the world without your constant oversight, and express your concern as care rather than control.',
      'Communicate your anxiety openly. Your partner cannot reassure you if they do not understand what you are worried about. Practice naming your fears directly rather than acting them out through jealous behavior, interrogation, or withdrawal.',
      'Build trust through positive experiences rather than testing. Your instinct may be to test your partner\'s loyalty through scenarios designed to reveal their true character, but these tests damage trust rather than building it. Instead, build trust through shared positive experiences and direct, honest communication.',
      'Accept that your partner\'s values may differ on some points. Your moral convictions are central to your identity, but a healthy relationship does not require complete ideological alignment. Practice accepting differences in perspective without interpreting them as character flaws.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Dog's health profile is dominated by the effects of chronic stress and anxiety on a constitution that was designed for vigilance. In Traditional Chinese Medicine, the Dog's Earth element governs the Spleen and Stomach — the organs of nourishment and worry. The Chinese medical tradition explicitly links the Spleen to excessive thinking and anxiety, making the Dog particularly vulnerable to conditions driven by worry. Fire's influence adds heat and intensity to this already anxious constitution.

The Fire Dog's primary health vulnerability is the physical manifestation of their psychological vigilance. Their nervous system operates in a state of chronic low-level activation — scanning for threats, processing moral outrage, and worrying about the well-being of their loved ones. This persistent stress response manifests as digestive problems, muscle tension (particularly in the jaw and shoulders), sleep disturbances, and immune system weakness.

The Fire Dog's most effective health strategy addresses the root cause: anxiety management. Practices that calm the nervous system, build a sense of safety, and provide structured outlets for their protective energy produce far better health outcomes than treating individual symptoms in isolation.`,

    bodyAreas: ['Spleen', 'Stomach', 'Jaw and Shoulders', 'Immune System'],

    exercises: [
      'Martial arts for channeling protective energy',
      'Long-distance running for anxiety management',
      'Team sports for belonging and cooperation',
      'Yoga with deep breathing exercises',
    ],

    dietTips: [
      'Support Spleen-Stomach health with warm, easily digestible meals: soups, congee, steamed vegetables, and gentle proteins. The Fire Dog\'s anxiety directly impacts their digestion, and light, nourishing foods prevent the digestive distress that worsens during stressful periods.',
      'Reduce caffeine and stimulants. The Fire Dog\'s nervous system is already running in alert mode, and caffeine amplifies the anxiety that drives their most challenging health patterns. Herbal teas — particularly chamomile, valerian, and passionflower — provide calming alternatives.',
      'Include foods that calm the nervous system: complex carbohydrates, magnesium-rich foods (dark leafy greens, nuts, seeds), and foods high in B vitamins. These nutrients support the neurotransmitter production that helps regulate the Fire Dog\'s stress response.',
      'Eat regular, predictable meals. The Fire Dog\'s digestive system thrives on routine and predictability. Establishing consistent meal times — particularly a calming evening meal eaten at least two hours before bed — supports both digestive health and sleep quality.',
    ],

    mentalHealth:
      'The Fire Dog\'s mental health is the most important factor in their overall well-being, as their physical health is so directly influenced by their psychological state. Anxiety disorders, including generalized anxiety, social anxiety, and PTSD (particularly in Fire Dogs who have experienced the betrayals they most fear), are the most common mental health challenges. The Fire Dog benefits enormously from therapy that addresses both the cognitive patterns driving their anxiety and the somatic effects of chronic stress. EMDR, somatic experiencing, and attachment-focused therapy are particularly effective for this sign, as they address the deep-seated security concerns that fuel the Dog\'s vigilance. Regular physical exercise that provides a sense of mastery and controlled aggression — martial arts, boxing, or competitive sports — channels the protective energy that otherwise manifests as anxiety. Perhaps most importantly, the Fire Dog needs a stable, trustworthy inner circle of people who demonstrate consistent loyalty over time. Every reliable, honest relationship in the Fire Dog\'s life is a direct investment in their mental and physical health.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Red', 'Earth Brown', 'Warm Orange'],
    direction: 'South',
    gemstones: ['Red Jasper', 'Carnelian', 'Smoky Quartz'],
    flowers: ['Rose', 'Marigold', 'Calendula'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE DOGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Donald Trump',
        profession: 'U.S. President/Businessman',
        birthYear: 1946,
        description:
          'Donald Trump demonstrates the Fire Dog\'s fierce loyalty to their inner circle, combative defensiveness against perceived threats, and unwavering conviction in their own rightness. His polarizing career illustrates both the Fire Dog\'s passionate protectiveness of those they claim as their own and the sign\'s potential for aggressive, divisive behavior when their worldview is challenged.',
      },
      {
        name: 'Bill Clinton',
        profession: 'U.S. President',
        birthYear: 1946,
        description:
          'Bill Clinton\'s extraordinary political charisma, combined with his passionate advocacy for causes he believed in and his complicated personal life, reflects the Fire Dog\'s complex nature. His ability to connect with ordinary people and his genuine concern for the disadvantaged embody the Fire Dog\'s best qualities, while his personal controversies illustrate the sign\'s shadow.',
      },
      {
        name: 'George W. Bush',
        profession: 'U.S. President',
        birthYear: 1946,
        description:
          'George W. Bush\'s presidency illustrates the Fire Dog\'s characteristic combination of fierce protectiveness and moral certainty. His response to the September 11 attacks demonstrated the Fire Dog\'s instinct to defend their community with overwhelming force, while the subsequent controversies reflect the sign\'s vulnerability to overreaction when their protective instincts override measured judgment.',
      },
      {
        name: 'Steven Spielberg',
        profession: 'Film Director',
        birthYear: 1946,
        description:
          'Steven Spielberg\'s filmography reads like a Fire Dog manifesto — stories of ordinary people facing extraordinary threats, of justice prevailing against powerful evil, of the protective love that shields the innocent from harm. His passionate storytelling and lifelong commitment to Holocaust education reflect the Fire Dog\'s belief that remembering injustice is the first defense against its repetition.',
      },
      {
        name: 'Cher',
        profession: 'Singer/Actress',
        birthYear: 1946,
        description:
          'Cher\'s fierce independence, outspoken advocacy for LGBTQ+ rights, and decades-long refusal to conform to anyone\'s expectations embody the Fire Dog\'s passionate commitment to authenticity and justice. Her loyalty to marginalized communities and willingness to use her platform for social change reflects the Fire Dog\'s belief that privilege carries moral obligation.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dog holds the eleventh position in the Chinese zodiac and is universally associated with loyalty, protection, and the faithful companionship that has defined the human-canine bond for thousands of years. In Chinese mythology, the Heavenly Dog (Tiangou) is a celestial guardian who pursues threats through the heavens — notably chasing the sun and moon during eclipses to protect the cosmic order. This mythological role connects the Dog to vigilance, courage, and the willingness to confront cosmic-scale dangers.

When Fire transforms this already devoted guardian, the mythological significance shifts from watchful protector to active champion. The Fire Dog appears in Chinese folklore as the guardian spirit of the home hearth — the warm, protective fire that keeps the family safe through the long night. In Daoist tradition, the Fire Dog represents the fusion of domestic virtue and cosmic courage: the understanding that protecting one's family and community is a spiritual practice of the highest order.

In Tibetan mythology, the mastiff — the great Fire Dog of the mountains — is revered as a guardian of temples, homes, and the passages between the human and spirit worlds. This mythological association connects the Fire Dog to the role of protector at boundaries: the being who stands at the threshold between safety and danger, known and unknown, order and chaos.`,

    symbolism: `The Fire Dog symbolizes protective love made fierce — the understanding that true loyalty sometimes requires not just standing beside someone but standing between them and harm. In traditional Wu Xing symbolism, Fire generating Earth represents the productive cycle of care: passion creating stability, intensity generating security, the burning devotion that builds a foundation of trust strong enough to withstand any storm.

The Fire Dog is also a symbol of moral courage — the willingness to defend principles even when it is costly and unpopular. Unlike the Fire Tiger\'s physical courage or the Fire Dragon\'s commanding authority, the Fire Dog\'s courage is specifically moral: the courage to say "this is wrong" when everyone else is silent, to stand with the outcast when conformity would be easier, and to hold the powerful accountable when deference would be safer.

In the cycle of seasons, the Dog is associated with autumn — the time of harvest, accountability, and the turning of the year toward darkness. Fire\'s influence on this seasonal energy suggests the last warmth before winter: the fire that burns most fiercely when the cold is approaching, the protective heat that sustains life through the hardest months.`,

    modernInterpretation: `In contemporary culture, the Fire Dog archetype resonates wherever loyalty, moral conviction, and passionate advocacy converge. The Fire Dog year of 1946 produced one of the most consequential generations in modern history — the cohort that would shape the second half of the twentieth century through political leadership, cultural innovation, and social activism.

The 1946 cohort brought Fire Dog energy to an era of profound social change, contributing leaders, artists, and advocates who fought passionately for their visions of justice — sometimes in contradictory directions. Their careers demonstrate the Fire Dog's fundamental nature: the desire to protect, serve, and champion what they believe is right, expressed with an intensity that both inspires devotion and provokes fierce opposition.

For modern Fire Dogs, the central challenge is maintaining their passionate commitment to justice without succumbing to the cynicism, burnout, or polarization that plague contemporary advocacy. The most effective modern Fire Dogs learn to pair their fierce convictions with genuine compassion — even for those they disagree with — recognizing that the justice they seek is ultimately rooted in the belief that every being deserves protection, dignity, and care.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
