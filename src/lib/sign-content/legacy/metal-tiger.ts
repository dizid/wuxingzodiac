// ============================================
// METAL TIGER (庚寅) — The Steel Enforcer
// ============================================
// Metal tempers the Tiger's raw power with discipline and
// precision, creating a warrior of unmatched resolve.
// Years: 1950, 2010

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-tiger',
  profile: getProfileBySlug('metal-tiger')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Tiger is the most fearsome and disciplined expression of the Tiger archetype. Where the Tiger is already celebrated for its courage, dominance, and magnetic authority, the Metal element tempers this raw power with structure and cutting precision. The result is not a wild predator but a trained warrior — equally capable of explosive action and patient strategic restraint. Metal Tigers do not merely possess power; they wield it with purpose, directing their formidable energy toward clearly defined objectives with a focus that other Tiger variants often lack.

What makes the Metal Tiger exceptional is the fusion of the Tiger's natural boldness with Metal's demand for justice and righteousness. This is the sign of the principled enforcer — the individual who will fight not for personal glory but for what they believe is right. Their sense of justice is not abstract or philosophical; it is visceral and active. When a Metal Tiger encounters injustice, they do not merely disapprove — they intervene, with a directness and forcefulness that can be both admirable and overwhelming.

Beneath the armored exterior, Metal Tigers carry a surprising vulnerability. Their commitment to strength and competence can make them deeply uncomfortable with their own weaknesses. They hold themselves to standards that would crush a lesser personality, and when they fall short — as every human must — they can be savagely self-critical. The Metal Tiger's greatest inner battle is not with external enemies but with their own impossibly high expectations.`,

    coreTraits: [
      'Courageous',
      'Principled',
      'Commanding',
      'Disciplined',
      'Protective',
      'Intense',
    ],

    strengths: [
      {
        trait: 'Fearless Leadership',
        description:
          'Metal Tigers lead from the front with an authority that is both natural and earned. Their combination of physical presence, moral conviction, and unwavering decisiveness inspires confidence in those around them. In crisis situations, they are at their absolute best — calm, focused, and utterly committed to protecting those in their charge.',
      },
      {
        trait: 'Principled Strength',
        description:
          'Unlike some Tiger variants that act from impulse or ego, the Metal Tiger operates from a deeply held code of ethics. Their strength is not arbitrary but purposeful, directed toward defending the vulnerable and enforcing fairness. This gives their power a moral weight that commands respect even from those who disagree with them.',
      },
      {
        trait: 'Decisive Action',
        description:
          'Metal Tigers possess the rare ability to make difficult decisions quickly and stand behind them completely. They cut through ambiguity and hesitation with the same precision that Metal brings to every interaction. In environments paralyzed by indecision, the Metal Tiger is the one who steps forward, takes responsibility, and acts.',
      },
      {
        trait: 'Protective Loyalty',
        description:
          'Those within the Metal Tiger\'s circle of protection enjoy an almost fortress-like security. They defend their family, friends, and allies with an intensity that borders on the territorial. A threat to someone the Metal Tiger has claimed as their own is treated as a personal attack — and met with proportional force.',
      },
    ],

    challenges: [
      {
        trait: 'Controlling Tendencies',
        description:
          'The Metal Tiger\'s combination of strong will and conviction that they know best can manifest as controlling behavior. They may struggle to allow others to make their own mistakes, imposing their solutions and standards with an authority that, while well-intentioned, can stifle independence and breed resentment.',
      },
      {
        trait: 'Unforgiving Nature',
        description:
          'Metal Tigers hold others to the same rigorous standards they apply to themselves, and they have little tolerance for failure, dishonesty, or weakness. Once someone has broken their trust or fallen short of their expectations, the Metal Tiger may cut them off with a finality that allows no path to redemption.',
      },
      {
        trait: 'Suppressed Vulnerability',
        description:
          'The Metal Tiger\'s identity is built on strength, which makes acknowledging weakness feel existentially threatening. They may deny physical pain, dismiss emotional needs, and refuse help even when they desperately need it — maintaining a facade of invulnerability that prevents genuine intimacy.',
      },
      {
        trait: 'Intensity in Conflict',
        description:
          'When angered, the Metal Tiger\'s response can be disproportionate to the provocation. The combination of the Tiger\'s explosive temper and Metal\'s sharp edge creates confrontations that are devastating in their force. They may say things in anger that cannot be unsaid, damaging relationships that they actually value.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Tiger is a Wood-phase animal, embodying growth, expansion, and the forceful energy of spring. When Metal overlays this Wood nature, it creates a complex internal tension — Metal controls Wood in the destructive cycle, meaning the Metal element literally constrains and shapes the Tiger's natural expansiveness. This is not entirely comfortable, but it is extraordinarily productive.

The Metal-Wood dynamic within the Metal Tiger produces a personality of disciplined power. The Tiger's raw strength and aggressive vitality are channeled by Metal's precision into focused, purposeful action. Where a Wood Tiger might scatter their energy across many fronts, the Metal Tiger concentrates theirs into decisive strikes. This internal tension also explains the Metal Tiger's characteristic intensity — there is a constant struggle between the Tiger's desire to roam freely and Metal's insistence on structure and control. The most self-aware Metal Tigers learn to use this tension creatively, allowing Metal's discipline to refine rather than suppress the Tiger's magnificent wildness.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Metal Tiger demands a partner who can stand beside them as an equal — not subordinate, not competitor, but true ally. They respect strength, value honesty above all else, and have zero tolerance for deception or passivity. Relationships with Metal Tigers are intense, loyal, and deeply rewarding for those who meet their exacting standards.

The Tiger belongs to the Third Trine alongside the Horse and the Dog — signs that share the Tiger's courage, independence, and sense of justice. These natural alliances are particularly strong for the Metal Tiger, whose principled nature resonates with these action-oriented partners. The Monkey sits opposite the Tiger on the zodiac wheel, creating a tension between the Tiger's direct approach and the Monkey's more cunning strategies.`,

    bestMatches: [
      {
        slug: 'earth-horse',
        name: 'Earth Horse',
        score: 90,
        summary:
          'A dynamic partnership of mutual respect and shared courage. The Earth Horse\'s independent spirit and grounded energy complement the Metal Tiger\'s intensity perfectly. Both signs value freedom, action, and authenticity, creating a relationship where neither feels constrained. The Earth element provides stability that the Metal Tiger needs without the heaviness that would feel oppressive.',
      },
      {
        slug: 'wood-dog',
        name: 'Wood Dog',
        score: 88,
        summary:
          'A deeply loyal alliance built on shared principles of justice and protection. The Wood Dog\'s compassionate loyalty and ethical nature resonate with the Metal Tiger\'s own moral compass. The Wood element feeds the Tiger\'s intrinsic nature, creating an energizing dynamic where the Dog\'s gentle support brings out the Metal Tiger\'s best qualities.',
      },
      {
        slug: 'water-pig',
        name: 'Water Pig',
        score: 82,
        summary:
          'An unexpectedly harmonious pairing where the Water Pig\'s warmth and generosity soften the Metal Tiger\'s harder edges. The Pig\'s genuine kindness and emotional openness create a safe space where the Tiger can lower their guard. Water feeds Wood (the Tiger\'s intrinsic element), making this a nurturing relationship that enhances the Tiger\'s vitality.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-monkey',
        name: 'Fire Monkey',
        score: 30,
        summary:
          'The zodiac opposition between Tiger and Monkey is intensified by conflicting approaches to power. The Fire Monkey\'s cleverness and love of strategy feels like manipulation to the direct Metal Tiger, while the Tiger\'s forcefulness feels like bullying to the Monkey. Fire\'s intensity combined with the fundamental Tiger-Monkey tension creates volatile confrontations.',
      },
      {
        slug: 'metal-snake',
        name: 'Metal Snake',
        score: 35,
        summary:
          'Two strong-willed Metal signs with fundamentally incompatible approaches. The Metal Snake operates through patience, subtlety, and hidden influence — all qualities the transparent Metal Tiger views with suspicion. The Tiger\'s directness unsettles the Snake\'s preference for privacy. Trust is difficult to establish when each sign\'s core strategy feels threatening to the other.',
      },
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 40,
        summary:
          'A clash between the Tiger\'s need for action and the Ox\'s preference for caution. The Earth Ox\'s slow, methodical approach frustrates the Metal Tiger\'s desire for decisive movement. Both signs are stubborn and reluctant to yield, creating standoffs that exhaust both parties. Mutual respect is possible but requires each to accept a fundamentally different rhythm.',
      },
    ],

    elementAffinity: `The Metal Tiger's complex internal dynamic — Metal controlling Wood — creates distinctive patterns with other elements. Water element signs are often the most beneficial, as Water feeds the Tiger's intrinsic Wood nature while simultaneously harmonizing with the Metal overlay. Earth element signs provide grounding stability and generate the Metal that the Tiger's external nature requires. Wood element signs feel familiar and energizing, as they resonate with the Tiger's core nature, though they may sometimes highlight the tension between the Tiger's natural inclinations and Metal's constraining influence. Fire element signs create relationships of high intensity — Wood feeds Fire, making these partnerships energizing but potentially combustible. Other Metal signs create mutual respect but also competition, as two Metal energies can become a battle of wills.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Tigers are drawn to careers that require courage, decisiveness, and a willingness to take on challenges that others avoid. They thrive in high-stakes environments where their natural authority and unwavering resolve are assets rather than liabilities. The Metal element adds a strategic dimension to the Tiger's instinctive boldness, making them effective not just as warriors but as commanders.

The ideal Metal Tiger career places them in positions of authority where they can protect, enforce, and lead. They are natural fits for military and law enforcement leadership, litigation, emergency management, and any role where the ability to make tough calls under pressure is essential. They also excel in competitive industries where their combination of strength and strategic thinking gives them a decisive edge.

Metal Tigers struggle in roles that require excessive diplomacy, passive observation, or deference to those they do not respect. They need to believe in the mission, trust the leadership above them, and see tangible results from their efforts. A Metal Tiger without a worthy cause is a restless, frustrated individual looking for something to fight for.`,

    idealCareers: [
      'Military Commander',
      'Trial Attorney',
      'Emergency Services Director',
      'Corporate Security Chief',
      'Competitive Athlete',
      'Investigative Prosecutor',
      'Trauma Surgeon',
      'Executive Leadership',
    ],

    financialStyle:
      'Metal Tigers approach finances with the same directness they bring to everything else. They value financial strength as a form of security and independence, and they build wealth through decisive action rather than patient accumulation. They are willing to take calculated risks — larger than most signs would tolerate — when they believe the opportunity is sound. Their challenge is the tendency to be generous to a fault with those they care about, sometimes depleting their own resources in the service of others. The financially mature Metal Tiger builds reserves for both strength and generosity.',

    tips: [
      'Channel your competitive instincts into collaboration. Metal Tigers achieve their greatest career success when they lead teams rather than operating as lone warriors. Learn to inspire through empowerment, not just through the force of your personal example.',
      'Develop patience for organizational politics. You may find bureaucracy and political maneuvering distasteful, but ignoring them completely limits your influence. Study the power dynamics in your organization the way you would study an opponent — strategically and dispassionately.',
      'Protect your reputation for fairness. Your authority is built on the trust others place in your judgment. Acting from anger or personal bias, even once, can undermine years of earned credibility. Maintain the same principled standards in private that you project in public.',
      'Create space for recovery between intense efforts. Metal Tigers tend to move from one battle directly to the next without rest. Build deliberate recovery periods into your career rhythm — the warrior who rests strategically fights longer than the one who fights continuously.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Metal Tiger is an experience of extraordinary intensity and protection. When they choose a partner, they commit with their entire being — offering a level of loyalty, devotion, and protective fierceness that few other signs can match. Being loved by a Metal Tiger means having someone who will stand between you and any threat, who will fight for your happiness with the same determination they bring to their own ambitions, and who will never, ever give up on the relationship without exhausting every possible avenue of resolution.

The challenge of loving a Metal Tiger lies in their difficulty with vulnerability and their tendency to express love through protection rather than tenderness. They may struggle to distinguish between caring for their partner and controlling them, particularly when they believe their partner is making choices that could lead to harm. The line between protective and possessive can blur for this sign.

Metal Tigers need partners who are strong enough to push back against their dominating tendencies while secure enough to appreciate the profound love behind them. The partner who can say "I love your strength, but I need you to trust mine" has found the key to a Metal Tiger's heart.`,

    loveStyle:
      'The Metal Tiger loves with fierce protectiveness and unwavering loyalty. Their love is not gentle or subtle — it is a force of nature, expressed through acts of courage, sacrifice, and tireless devotion to their partner\'s well-being. They need a partner who is their equal in strength and conviction, someone they can respect as well as love. Physical affection is important to them — they are tactile, passionate lovers who express through touch what they struggle to say in words.',

    idealPartnerTraits: [
      'Strong-Willed',
      'Honest',
      'Independent',
      'Emotionally Courageous',
      'Physically Affectionate',
    ],

    tips: [
      'Distinguish between protection and control. Your instinct to shield your partner from harm is rooted in love, but your partner is a capable adult who needs the freedom to face their own challenges. Offer support rather than solutions unless explicitly asked.',
      'Practice softness deliberately. Your partner needs your tenderness as much as your strength. The most powerful thing a Metal Tiger can do in a relationship is show vulnerability — it demonstrates trust and invites the deep intimacy this sign secretly craves.',
      'Manage your temper as a relationship priority. The explosive anger that serves you in professional confrontations can devastate a romantic partner. Develop a practice — whether breath work, physical exercise, or a cooling-off period — that prevents you from unleashing your full force in domestic disagreements.',
      'Celebrate your partner\'s independence. When your partner makes decisions without consulting you, it is not disrespect — it is the same independence you value in yourself. A partnership of two strong individuals is more resilient than one where a single person holds all the power.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Tiger's constitution is one of raw physical power tempered by the Metal element's structural discipline. They tend to be physically robust, with strong musculature and excellent recovery capacity. However, the internal tension between Metal (which constrains) and Wood (the Tiger's intrinsic element, which expands) creates specific health vulnerabilities that center on the body's tension-holding systems.

In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Tiger's Wood nature relates to the Liver and Gallbladder. This creates a health profile where respiratory health and liver function are primary concerns. The Metal-Wood tension often manifests as muscular rigidity, particularly in the neck, shoulders, and jaw — areas where the body literally holds the strain of containing powerful energy.

Metal Tigers tend to push through physical limits with the same determination they apply to everything else, making overtraining injuries and stress fractures common concerns. Their health improves dramatically when they learn to view rest and recovery not as weakness but as strategic preparation for the next challenge.`,

    bodyAreas: ['Lungs', 'Liver', 'Tendons and Ligaments', 'Shoulders and Neck'],

    exercises: [
      'Martial arts and boxing',
      'Rock climbing',
      'Sprint training',
      'Deep stretching and mobility work',
    ],

    dietTips: [
      'Support the Liver with green vegetables, leafy greens, and sour foods like lemon and apple cider vinegar. The Tiger\'s Wood nature depends on a healthy Liver, and the Metal element\'s constraining influence makes Liver stagnation a particular risk.',
      'Balance protein intake with adequate fiber. Metal Tigers tend to favor high-protein, meat-heavy diets that support muscle but can stress the digestive system. Include bitter greens and cruciferous vegetables to support healthy elimination.',
      'Moderate alcohol and stimulant consumption. The Tiger\'s Liver connection makes this sign more susceptible to the negative effects of alcohol and caffeine. These substances amplify the Heat that the Metal-Wood tension already generates internally.',
      'Eat to cool internal heat. Include foods like cucumber, celery, mung beans, and chrysanthemum tea to counterbalance the Tiger\'s naturally hot constitution and the friction generated by the Metal-Wood dynamic.',
    ],

    mentalHealth:
      'The Metal Tiger\'s mental health landscape is dominated by the challenge of managing intense emotions within a framework that equates emotional expression with vulnerability. Anger — the emotion most closely associated with the Liver and Wood element — is the Metal Tiger\'s most accessible feeling, which means that grief, fear, and sadness often get converted into anger before they can be properly processed. Physical outlets are essential: martial arts, competitive sports, and intense exercise provide healthy channels for the enormous energy this sign generates. Therapy works best when it is action-oriented and practical — Metal Tigers respond to concrete strategies rather than open-ended exploration. Mindfulness practices that incorporate movement, such as walking meditation or combat-sport mindfulness techniques, help bridge the gap between the Tiger\'s need for action and the stillness required for emotional processing.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [1, 3, 4],
    colors: ['White', 'Silver', 'Orange', 'Blue'],
    direction: 'West',
    gemstones: ['White Topaz', 'Citrine', 'Steel Gray Hematite'],
    flowers: ['Cineraria', 'Anthurium', 'White Lily'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL TIGERS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Stevie Wonder',
        profession: 'Musician/Singer-Songwriter',
        birthYear: 1950,
        description:
          'Stevie Wonder\'s extraordinary musical genius and fierce creative independence embody the Metal Tiger\'s blend of raw power and disciplined artistry. His insistence on complete creative control — unusual for a young artist in Motown — reflects the sign\'s principled refusal to compromise their vision. His music combines the Tiger\'s emotional intensity with Metal\'s precision and clarity.',
      },
      {
        name: 'Peter Gabriel',
        profession: 'Musician/Activist',
        birthYear: 1950,
        description:
          'Peter Gabriel\'s career as both a groundbreaking musician and a tireless human rights advocate demonstrates the Metal Tiger\'s union of creative power and moral conviction. His founding of WOMAD and the human rights organization WITNESS reflects the sign\'s drive to use their platform for principled causes.',
      },
      {
        name: 'Jay Leno',
        profession: 'Comedian/TV Host',
        birthYear: 1950,
        description:
          'Jay Leno\'s commanding presence and two-decade reign as host of The Tonight Show demonstrate the Metal Tiger\'s natural authority and staying power. His direct, no-nonsense humor and disciplined work ethic — performing stand-up nearly every weekend throughout his hosting tenure — reflect the sign\'s combination of boldness and relentless dedication.',
      },
      {
        name: 'Richard Branson',
        profession: 'Entrepreneur/Adventurer',
        birthYear: 1950,
        description:
          'Richard Branson\'s fearless approach to business and life — from founding Virgin Records to attempting around-the-world balloon flights — perfectly embodies the Metal Tiger\'s combination of daring courage and strategic determination. His insistence on challenging established industries reflects the sign\'s principled defiance of unjust power structures.',
      },
      {
        name: 'Julius Erving',
        profession: 'Basketball Legend',
        birthYear: 1950,
        description:
          'Dr. J revolutionized basketball with a style that combined raw athletic power with artistic grace — a perfect expression of the Metal Tiger\'s disciplined ferocity. His dignified competitive presence and principled leadership both on and off the court exemplify the sign\'s union of strength and integrity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Tiger holds the third position in the Chinese zodiac and is revered across East Asia as the king of all land animals — a title that carries even more weight than the Dragon's celestial authority in matters of earthly power. In Chinese mythology, the Tiger guards the western direction and the autumn season, aligning it naturally with the Metal element. This makes the Metal Tiger a sign of particular mythological resonance, as the Tiger is, in a sense, coming home to its directional and seasonal origins.

The White Tiger (Bai Hu) is one of the Four Celestial Guardians of Chinese mythology, protecting the western quadrant of the sky. White is Metal's color, making the Metal Tiger a direct manifestation of this guardian energy. Ancient Chinese military strategists invoked the White Tiger before battle, seeking its qualities of disciplined power, strategic aggression, and unyielding courage. The Metal Tiger year is therefore traditionally associated with military endeavor, enforcement of justice, and the triumph of righteous force.

In Korean mythology, the Tiger is considered the guardian spirit of the nation itself, and Metal Tiger years are associated with periods of national strength and resolute leadership. Japanese tradition similarly associates the Tiger with courage and protection, viewing Metal Tiger individuals as natural defenders of order and justice.`,

    symbolism: `The Metal Tiger symbolizes disciplined power, righteous force, and the courage to enforce justice regardless of personal cost. In Five Element symbolism, Metal represents the sword — and the Metal Tiger is the hand that wields it with both skill and moral authority. This is not the chaos of unchecked aggression but the focused application of power in service of principle.

The Tiger's stripes are themselves a symbol of the Metal Tiger's nature: alternating bands of light and shadow, strength and restraint, ferocity and discipline. Metal adds the gleam of refined weaponry to the Tiger's natural beauty, creating an image of aesthetic power — terrible and magnificent in equal measure.

In traditional Chinese art, the Metal Tiger is often depicted descending a mountain — a symbol of authority moving from contemplation to action. This image captures the sign's essential quality: they survey the landscape from the heights of principle before committing their formidable strength to a chosen course. Their power is not impulsive but intentional.`,

    modernInterpretation: `In contemporary interpretation, the Metal Tiger archetype resonates with the concept of principled strength in an age of moral ambiguity. As modern society grapples with questions of justice, accountability, and the responsible use of power, the Metal Tiger offers a model of strength that is governed by ethics rather than ego.

The Metal Tiger's relevance is particularly striking in fields like law enforcement reform, military ethics, and corporate governance — areas where the abuse of power is a persistent concern. The Metal Tiger ideal — power wielded with precision, restraint, and moral clarity — represents exactly what these institutions aspire to achieve. It is the archetype of the leader who protects rather than dominates, who enforces fairness rather than serves themselves.

For those born in Metal Tiger years, the modern world offers abundant opportunities to fulfill this sign's highest potential. The demand for principled leaders who combine strength with integrity has never been greater. The Metal Tiger who channels their formidable energy toward protecting the vulnerable and enforcing justice fulfills not only their personal destiny but a role that every society desperately needs.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
