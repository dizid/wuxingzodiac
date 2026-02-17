// ============================================
// METAL DOG (庚戌) — The Resolute Knight
// ============================================
// Metal forges the Dog's loyal heart into an instrument of
// unwavering principle and righteous determination.
// Years: 1910, 1970

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'metal-dog',
  profile: getProfileBySlug('metal-dog')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Metal Dog is the most principled and resolute expression of the Dog archetype. Where the Dog is already celebrated for its loyalty, integrity, and fierce commitment to justice, the Metal element reinforces these qualities with structural determination and an unyielding moral compass. The Metal Dog does not merely hold opinions about right and wrong — they live by a code of honor as inflexible as forged steel, and they judge everything and everyone against that code with a consistency that is both admirable and exhausting.

What makes the Metal Dog exceptional is the rare combination of moral conviction with practical effectiveness. Many idealists are passionate but ineffective; many pragmatists are effective but morally flexible. The Metal Dog is neither — they are principled people who get things done, driven by a sense of duty so profound that it functions as an inexhaustible fuel source. When a Metal Dog takes on a cause, they pursue it with the determination of a knight-errant: unflinching, tireless, and utterly incapable of betraying their word.

Beneath the armor of principle and duty, the Metal Dog carries a deep well of anxiety that few people see. They worry about the state of the world, about the people they love, about whether they are doing enough. This anxiety is not neurotic self-indulgence — it is the inevitable consequence of caring deeply about justice in a world that so often falls short. The Metal Dog's burden is not indifference but its opposite: a sensitivity to moral failure that they cannot turn off, covered by a stoic exterior that suggests they feel nothing at all.`,

    coreTraits: [
      'Loyal',
      'Principled',
      'Protective',
      'Vigilant',
      'Honest',
      'Steadfast',
    ],

    strengths: [
      {
        trait: 'Absolute Loyalty',
        description:
          'The Metal Dog\'s loyalty is the most unwavering in the zodiac. Once they have committed to a person, a cause, or an organization, their devotion is total and permanent — enduring through hardship, conflict, and disappointment that would cause lesser signs to walk away. This loyalty is not blind; it is chosen, principled, and actively maintained through daily acts of commitment.',
      },
      {
        trait: 'Moral Authority',
        description:
          'Metal Dogs possess a moral credibility that is earned through consistent, principled behavior. People trust them because their track record demonstrates that they will always do what they believe is right, regardless of personal cost. This moral authority gives them an influence that does not depend on title, position, or charisma — it comes from the simple, powerful fact that their word is their bond.',
      },
      {
        trait: 'Protective Courage',
        description:
          'The Metal Dog will stand between those they love and any threat — physical, emotional, or institutional. Their protective instinct is not merely reactive but anticipatory; they identify potential dangers before they materialize and take preemptive action to neutralize them. In a crisis, the Metal Dog is the person who acts while others freeze.',
      },
      {
        trait: 'Persistent Determination',
        description:
          'Metal Dogs bring an endurance to their commitments that wears down opposition through sheer persistence. They do not quit, they do not waver, and they do not compromise on matters they consider essential. This determination, combined with Metal\'s structural discipline, makes them extraordinarily effective at achieving long-term goals that require sustained effort.',
      },
    ],

    challenges: [
      {
        trait: 'Pessimistic Outlook',
        description:
          'The Metal Dog\'s heightened sensitivity to injustice and potential threats can create a pervasive pessimism. They see the worst-case scenario in every situation, expect betrayal from institutions, and struggle to trust people outside their established inner circle. This defensive worldview, while sometimes justified, can become self-fulfilling — pushing away the very allies and opportunities they need.',
      },
      {
        trait: 'Judgmental Rigidity',
        description:
          'Metal Dogs hold others to their own exacting moral standards and can be harshly judgmental when people fall short. Their black-and-white moral framework leaves little room for nuance, context, or the messy reality of human imperfection. Once they have categorized someone as untrustworthy or morally compromised, they rarely reconsider.',
      },
      {
        trait: 'Chronic Anxiety',
        description:
          'The Metal Dog\'s vigilant nature creates a state of perpetual alert that manifests as chronic anxiety. They are always scanning for threats, always anticipating problems, always preparing for the worst. This vigilance, while protective, is physically and emotionally exhausting — and it prevents them from relaxing into the peace and safety they work so hard to create.',
      },
      {
        trait: 'Emotional Suppression',
        description:
          'Metal Dogs suppress their emotional needs in service of duty and principle. They prioritize protecting others over caring for themselves, and they view their own emotional vulnerability as a potential weakness that could compromise their effectiveness. Over time, this suppression creates a backlog of unprocessed emotion that can erupt in unexpected ways.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dog is an Earth-phase animal, grounded in the stabilizing, nurturing energy of the center. When Metal overlays this Earth nature, the productive cycle is engaged — Earth generates Metal — creating a personality where natural protective instincts are refined into principled, structured action. The Dog's loyalty becomes duty; the Dog's protectiveness becomes vigilance; the Dog's honesty becomes moral authority.

This Earth-Metal combination gives the Metal Dog a solidity and reliability that is almost geological in its permanence. They are built to endure — physically, emotionally, and morally — and their consistency is a stabilizing force for everyone in their orbit. However, this same density can become inflexibility, and the Earth-Metal resonance can create a personality so solid that it becomes immovable when movement is needed.

The Metal Dog's path to balance lies in cultivating Water and Wood influences — the emotional fluidity of Water and the flexible growth energy of Wood. Without these balancing elements, the Metal Dog risks becoming a monument to their own principles: impressive, enduring, but unable to adapt to the changing needs of the world they are so determined to protect.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `Metal Dogs need partners who share their values, earn their trust, and provide the emotional warmth that their duty-focused nature tends to neglect. They are intensely loyal partners who build relationships like fortresses — secure, dependable, and defended against all threats.

The Dog belongs to the Third Trine alongside the Tiger and the Horse — signs that share the Dog's courage, independence, and commitment to justice. These natural alliances create partnerships of mutual respect and shared purpose. The Dragon sits opposite the Dog on the zodiac wheel, creating tension between the Dog's egalitarian principles and the Dragon's imperial ambition.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 92,
        summary:
          'A powerful alliance of shared courage and complementary strengths. The Wood Tiger\'s bold compassion resonates with the Metal Dog\'s principled protectiveness, creating a partnership that stands together against any injustice. The Wood element feeds the Tiger\'s vitality while providing the flexible growth energy that balances the Dog\'s Metal rigidity.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 87,
        summary:
          'The Water Rabbit\'s gentle warmth and diplomatic grace provide a soothing counterbalance to the Metal Dog\'s intense vigilance. The Rabbit creates the peaceful, harmonious home environment that the Dog needs as a sanctuary from their anxious engagement with the world. Metal generates Water, creating a natural energetic flow between these partners.',
      },
      {
        slug: 'earth-horse',
        name: 'Earth Horse',
        score: 85,
        summary:
          'The Earth Horse\'s grounded independence and active energy complement the Metal Dog\'s principled steadiness. Both signs value freedom, honesty, and action, creating a partnership of mutual respect where both individuals maintain their independence while building something solid together. The shared Earth-Metal connection reinforces stability.',
      },
    ],

    challengingMatches: [
      {
        slug: 'metal-dragon',
        name: 'Metal Dragon',
        score: 28,
        summary:
          'The zodiac opposition between Dog and Dragon reaches its most intense expression when both carry the Metal element. The Metal Dog\'s egalitarian principles clash with the Metal Dragon\'s imperial authority. The Dog views the Dragon as a tyrant; the Dragon views the Dog as an obstructionist. Two unyielding Metal wills create confrontations that neither side is willing to lose.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 35,
        summary:
          'The Fire Rooster\'s critical precision and demanding standards clash with the Metal Dog\'s moral rigidity. The Rooster judges by results; the Dog judges by intentions. The Rooster finds the Dog self-righteous; the Dog finds the Rooster heartless. Fire melts Metal, adding element tension to an already difficult personality mismatch.',
      },
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 42,
        summary:
          'Two stubborn, principled Earth-related signs who struggle to find common ground when their principles diverge. The Earth Ox\'s conventional steadiness conflicts with the Metal Dog\'s more idealistic sense of justice. Both are resistant to change, creating stalemates where neither will yield even when compromise would serve both.',
      },
    ],

    elementAffinity: `The Metal Dog's Earth-Metal constitution creates a strong preference for partners who provide emotional depth and dynamic energy. Water element signs are particularly beneficial, as Metal generates Water — creating a flow from the Dog's structured loyalty into emotional richness and adaptability. Fire element signs offer the warmth and passion that the Metal Dog's reserved nature needs but also create the destructive cycle tension (Fire melts Metal) that can feel threatening. Wood element signs provide growth energy and flexibility that balances the Dog's rigidity. Other Earth signs share grounding stability but may amplify the Dog's tendency toward immobility. Other Metal signs create mutual respect for principles but risk emotional coldness in a relationship that needs warmth.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Metal Dogs are drawn to careers that serve a clear moral purpose. They need to believe that their work contributes to justice, safety, or the protection of those who cannot protect themselves. Without this sense of purpose, even a well-compensated position will feel hollow — the Metal Dog cannot sustain motivation through salary alone.

The ideal Metal Dog career combines moral purpose with practical impact. They excel in law enforcement, social work, nonprofit leadership, military service, and any field where the protection of the vulnerable and the enforcement of fairness is the primary mission. They also thrive in roles that require absolute reliability and ethical consistency — internal audit, compliance, safety engineering, and judicial work.

Metal Dogs make loyal, principled leaders who earn deep trust from their teams through consistent fairness and unwavering commitment to shared values. They lead by example rather than charisma, and their teams respect them because they know the Metal Dog will never ask them to do something the Dog would not do themselves.`,

    idealCareers: [
      'Civil Rights Attorney',
      'Social Worker',
      'Police Detective',
      'Nonprofit Director',
      'Humanitarian Worker',
      'Military NCO/Officer',
      'Ethics Compliance Officer',
      'Firefighter/Paramedic',
    ],

    financialStyle:
      'Metal Dogs are conservative, duty-oriented financial managers. They view money primarily as a means of providing security for their family and supporting causes they believe in. They save diligently, avoid unnecessary debt, and are more likely to donate to charity than to spend on luxury. Their challenge is a tendency toward financial anxiety that persists regardless of their actual financial position — the Metal Dog always worries that resources will run out, even when evidence suggests otherwise. Financial planning that emphasizes long-term security — emergency funds, insurance, steady investment — helps manage this anxiety.',

    tips: [
      'Guard against burnout from moral exhaustion. Metal Dogs absorb the weight of every injustice they encounter, and this cumulative burden can become unsustainable. Build deliberate boundaries between work and personal life, and develop practices that discharge the emotional weight of duty-driven work.',
      'Trust your colleagues to share the burden. Your instinct to carry everything yourself is driven by a belief that no one cares as much as you do. This may sometimes be true, but acting on it prevents others from developing their own commitment. Delegate trust alongside tasks.',
      'Accept incremental progress. Your vision of a just world is admirable, but the gap between that vision and reality can create despair. Learn to celebrate partial victories and recognize that sustained effort over time creates the change you seek, even when daily progress feels invisible.',
      'Invest in professional development alongside mission commitment. Metal Dogs sometimes neglect their own career growth in service of the cause. Developing new skills, expanding your network, and advancing your position increases the impact you can make — career development is not selfishness; it is strategic.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Metal Dog is an experience of profound loyalty, protective devotion, and rock-solid dependability. When they commit to a partner, it is with the full weight of their principled nature — a commitment that endures through hardship, conflict, and the inevitable disappointments of shared life. The Metal Dog's love is not flashy or exciting; it is the kind of love that shows up at three in the morning when you need it, that holds your hand through the worst of times, and that never, ever wavers.

The challenge in Metal Dog relationships is the weight of their loyalty. They can become possessive, anxious, and overbearing in their protectiveness — monitoring their partner's well-being with a vigilance that crosses the line from caring into controlling. Their deep fear of betrayal or loss can create a relationship atmosphere of surveillance rather than trust.

The Metal Dog needs a partner who is patient enough to earn their trust gradually, warm enough to melt their defensive anxiety, and strong enough to maintain their own independence within the Dog's protective embrace.`,

    loveStyle:
      'The Metal Dog loves with steadfast devotion and protective vigilance. Their love is expressed through consistent presence, practical support, and a fierce willingness to defend their partner against any threat. They are not naturally romantic in the spontaneous, passionate sense — their romance is the dependable kind: the kept promise, the standing appointment, the unwavering commitment that endures through every season of life. They need a partner who values reliability over excitement and who understands that the Metal Dog\'s sometimes anxious protectiveness is the highest expression of their love.',

    idealPartnerTraits: [
      'Trustworthy',
      'Warm and Reassuring',
      'Patient',
      'Emotionally Open',
      'Loyal',
    ],

    tips: [
      'Allow your partner space to make their own mistakes. Your protective instinct drives you to shield them from every potential harm, but growth requires risk. Trust that your partner is capable of navigating challenges, and be there to support them when they ask — not before.',
      'Express your love through words as well as actions. Metal Dogs demonstrate devotion through tireless service but often neglect to say the words. Your partner needs to hear "I love you," "I appreciate you," and "You make my life better" — even when your actions are already saying it.',
      'Manage your anxiety without projecting it onto your partner. Your tendency to worry about worst-case scenarios can create tension in your relationship when your partner feels responsible for managing your anxiety. Own your fears and develop personal coping strategies rather than seeking constant reassurance.',
      'Create joy together, not just security. Metal Dogs focus so intently on building a safe, stable life that they can forget to enjoy it. Deliberately schedule adventures, celebrations, and moments of pure fun — your relationship needs laughter and lightness as much as it needs loyalty and protection.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Metal Dog's health is significantly influenced by their chronic anxiety and tendency to internalize stress. In Traditional Chinese Medicine, the Metal element governs the Lungs and Large Intestine, while the Dog's Earth nature connects to the Spleen and Stomach. This creates a health profile where emotional tension directly impacts both the respiratory and digestive systems.

Metal Dogs are particularly susceptible to anxiety-related conditions: chronic tension in the shoulders and jaw, digestive irregularity that worsens during periods of worry, and respiratory complaints that intensify when they feel unable to protect those they care about. The connection between their emotional state and their physical health is unusually direct — their body literally manifests their concerns.

The Metal Dog's health improves dramatically when they find effective outlets for their anxiety and develop practices that counterbalance their vigilant nature. Physical exercise, time in nature, and the company of trusted friends and family are the Metal Dog's most effective medicine.`,

    bodyAreas: ['Lungs', 'Stomach', 'Joints', 'Nervous System'],

    exercises: [
      'Long walks with a companion',
      'Hiking',
      'Martial arts for discipline and release',
      'Gardening or outdoor physical work',
    ],

    dietTips: [
      'Support the Spleen-Stomach axis with warm, nourishing comfort foods. The Metal Dog\'s Earth nature depends on consistent digestive support: soups, stews, slow-cooked meals, and whole grains that provide sustained energy without stressing the system.',
      'Include lung-supporting foods for Metal element balance: pears, honey, almonds, white mushrooms, and garlic. These strengthen the respiratory system that bears the brunt of the Metal Dog\'s emotional tension.',
      'Reduce stimulants during anxious periods. Caffeine and sugar amplify the Metal Dog\'s baseline anxiety, creating a cycle of nervous energy and crash. Replace with calming teas — chamomile, valerian, lemon balm — that support the nervous system.',
      'Eat in calm, social settings when possible. The Dog\'s communal nature means that shared meals with trusted people are more nourishing than solitary eating. The relaxation of safe company directly improves digestive function for this sign.',
    ],

    mentalHealth:
      'The Metal Dog\'s mental health challenge is managing the chronic anxiety that arises from their deep sensitivity to injustice and their fierce protective instinct. They carry a weight of worry that is disproportionate to their actual circumstances — concern for their loved ones, for their community, for the state of the world — that creates a background hum of tension which never fully resolves. Therapy is highly recommended, particularly approaches that address anxiety at its somatic roots: EMDR, somatic experiencing, and body-based therapies that release the physical tension where anxiety is stored. Group therapy or support groups can also be effective, as the Metal Dog\'s sense of isolation is often more damaging than the anxiety itself — discovering that others share their concerns provides a relief that individual therapy sometimes cannot. The most important intervention for the Metal Dog\'s mental health is regular, genuine connection with people they trust: friends, family, and community members who remind them that they are not alone in their watch.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['White', 'Silver', 'Green', 'Red'],
    direction: 'West',
    gemstones: ['White Jade', 'Turquoise', 'Carnelian'],
    flowers: ['Rose', 'White Orchid', 'Cymbidium'],
    season: 'Autumn',
  },

  // ----------------------------------------
  // FAMOUS METAL DOGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Matt Damon',
        profession: 'Actor/Screenwriter',
        birthYear: 1970,
        description:
          'Matt Damon\'s career and public life embody the Metal Dog\'s combination of principled loyalty and determined action. From co-writing Good Will Hunting with his childhood friend to his extensive work with Water.org providing clean water access globally, Damon demonstrates the sign\'s characteristic devotion to both personal bonds and larger causes of justice.',
      },
      {
        name: 'Tina Fey',
        profession: 'Comedian/Writer/Producer',
        birthYear: 1970,
        description:
          'Tina Fey\'s career reflects the Metal Dog\'s combination of principled integrity and tireless work ethic. Her sharp wit serves the sign\'s instinct for honest observation, while her groundbreaking work in television — from SNL head writer to 30 Rock — demonstrates the Metal Dog\'s ability to create lasting impact through sustained, dedicated effort.',
      },
      {
        name: 'Queen Latifah',
        profession: 'Rapper/Actress/Producer',
        birthYear: 1970,
        description:
          'Queen Latifah\'s career-long commitment to dignified self-representation and community uplift reflects the Metal Dog\'s core values of loyalty, protection, and principled action. Her evolution from pioneering female rapper to multimedia mogul demonstrates the sign\'s persistent, steady determination to build something meaningful.',
      },
      {
        name: 'Naomi Campbell',
        profession: 'Supermodel/Activist',
        birthYear: 1970,
        description:
          'Naomi Campbell\'s fierce loyalty to her industry, her outspoken advocacy against racism in fashion, and her philanthropic work in Africa reflect the Metal Dog\'s characteristic combination of protective devotion and moral courage. Her longevity in an industry that discards others reflects the sign\'s remarkable staying power.',
      },
      {
        name: 'Mother Teresa',
        profession: 'Humanitarian/Saint',
        birthYear: 1910,
        description:
          'Mother Teresa\'s lifelong devotion to serving the poorest of the poor in Calcutta is the Metal Dog archetype in its most selfless expression. Her unwavering commitment to her mission — sustained through decades of physical hardship and spiritual challenge — embodies the sign\'s extraordinary capacity for principled, self-sacrificing service.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dog holds the eleventh position in the Chinese zodiac and carries the most universally positive mythological associations of any zodiac animal. Across cultures, the Dog represents loyalty, protection, and the bond between human and companion. In Chinese mythology, the celestial Dog guards the gates of heaven, standing watch through the eternal night — a role that perfectly captures the Metal Dog's characteristic vigilance and tireless devotion to duty.

When Metal combines with the Dog, traditional Chinese astrology describes a guardian of supreme integrity. Metal Dog years are associated with periods of moral reckoning, institutional reform, and the enforcement of justice. The 1970 Metal Dog year marked an era of significant social and political reform movements worldwide, reflecting the sign's association with principled collective action.

In Chinese folklore, the Dog is associated with the concept of yi (义) — righteousness or moral duty. The Metal Dog, with its doubled emphasis on principled action, represents the purest expression of this virtue. The mythological Metal Dog is the guardian who never sleeps, the sentinel who never abandons their post, and the companion whose loyalty transcends all earthly temptation.`,

    symbolism: `The Metal Dog symbolizes steadfast loyalty, principled protection, and the moral courage to stand guard over what is right. In Five Element symbolism, Metal represents the refinement of raw material into tools of purpose — and the Metal Dog is the tool most essential to civilization: the guardian, the protector, the keeper of the peace.

The Dog's association with the earthly branch Xu (戌) and the hours of 7-9 PM connects it to the evening watch — the time between day and night when vigilance is most needed. The Metal Dog stands at this threshold, embodying the principle that safety requires sacrifice and that the most important work is often done when others are resting.

In traditional Chinese art, the Metal Dog is depicted as a sentinel figure — watchful, alert, and positioned at the gate or threshold. Their posture is not aggressive but ready: the embodiment of disciplined preparedness. Metal adds to this image the gleam of armor and the precision of a well-maintained weapon — the guardian equipped and trained for whatever may come.`,

    modernInterpretation: `In contemporary culture, the Metal Dog archetype resonates with the growing appreciation for principled service, community protection, and the kind of loyalty that does not waver when circumstances become difficult. In an era of shifting allegiances and pragmatic morality, the Metal Dog stands for the enduring value of keeping your word, standing by your people, and doing what is right regardless of personal cost.

The Metal Dog's relevance extends to modern conversations about first responders, social workers, public defenders, and anyone who dedicates their life to protecting the vulnerable. These individuals — often underpaid, underappreciated, and overworked — embody the Metal Dog's fundamental bargain: trading personal comfort for the knowledge that their duty has been fulfilled.

For those born in Metal Dog years, the contemporary world presents a landscape that desperately needs their gifts. The demand for trustworthy leadership, genuine loyalty, and principled action has never been greater. The Metal Dog's challenge is maintaining their idealism without succumbing to the cynicism that their clear-eyed assessment of the world's problems can generate — recognizing that their role is not to create a perfect world but to protect and improve the one that exists.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
