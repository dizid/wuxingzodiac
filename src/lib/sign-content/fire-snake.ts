// ============================================
// FIRE SNAKE (丙巳) — The Mesmerizing Flame
// ============================================
// Fire intensifies the Snake's magnetic allure and strategic
// brilliance, creating a captivating figure of seductive
// intelligence who operates with mesmerizing precision.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-snake',
  profile: getProfileBySlug('fire-snake')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Snake is the most captivating and overtly powerful member of the Snake family. Where other Snakes operate through mystery, patience, and the slow accumulation of influence, the Fire Snake combines these qualities with a visible, magnetic intensity that commands attention and fascination in equal measure. They are the Snake who steps out of the shadows — not to abandon their strategic nature but to wield it with the added force of Fire's passionate charisma.

What makes the Fire Snake remarkable is the fusion of the Snake's legendary cunning with Fire's bold confidence. The standard Snake is a master of observation and calculation, preferring to influence events from behind the scenes. The Fire Snake retains this strategic brilliance but adds a performer's instinct for timing and presence. They know when to remain hidden and when to reveal themselves with maximum dramatic impact. This combination of patience and spectacle makes them extraordinarily effective in any arena — business, politics, art, or personal relationships.

The Fire Snake's intensity operates on a different register than other Fire signs. Where the Fire Horse blazes openly and the Fire Dragon commands through sheer force, the Fire Snake's power is concentrated, focused, and deeply personal. They do not scatter their energy across a broad stage; they direct it with laser precision at their chosen target, creating an experience of complete, hypnotic attention that few can resist. This focused intensity is both their greatest gift and their most dangerous quality — the difference between a warming hearth and a cutting torch depends entirely on the Fire Snake's intentions and self-awareness.`,

    coreTraits: [
      'Magnetic',
      'Strategic',
      'Intuitive',
      'Secretive',
      'Passionate',
      'Perceptive',
    ],

    strengths: [
      {
        trait: 'Strategic Brilliance',
        description:
          'The Fire Snake combines the Snake\'s natural gift for long-term planning with Fire\'s decisiveness, creating a strategist who can conceive masterful plans and execute them with passionate commitment. They see patterns and possibilities that others miss, and they have the patience to wait for the perfect moment to act — then strike with devastating precision.',
      },
      {
        trait: 'Mesmerizing Presence',
        description:
          'The Fire Snake possesses a magnetism that goes beyond conventional charisma. Their focused attention, penetrating gaze, and ability to make others feel simultaneously seen and intrigued creates an almost hypnotic effect. In one-on-one interactions, they are extraordinarily compelling — people leave conversations with a Fire Snake feeling as though they have been truly understood for the first time.',
      },
      {
        trait: 'Emotional Depth',
        description:
          'Fire adds passionate intensity to the Snake\'s already deep emotional nature, creating a person of profound feeling and remarkable psychological insight. The Fire Snake understands human motivation at a level that borders on preternatural — they sense fears, desires, and hidden agendas with an accuracy that can be unnerving to those who prefer to keep their inner world private.',
      },
      {
        trait: 'Transformative Power',
        description:
          'The Fire Snake is a natural catalyst for change — both personal and collective. Their combination of insight, charisma, and strategic intelligence allows them to reshape situations, relationships, and organizations from within. They are the secret architect behind many transformations, quietly engineering outcomes that appear to arise naturally but are in fact carefully orchestrated.',
      },
    ],

    challenges: [
      {
        trait: 'Manipulativeness',
        description:
          'The Fire Snake\'s extraordinary ability to read and influence people can shade into manipulation when their ethical compass wavers. They can engineer situations, control information, and influence emotions with such subtlety that others do not realize they are being managed. When this skill serves selfish ends rather than mutual benefit, it erodes trust and creates relationships built on deception.',
      },
      {
        trait: 'Jealousy and Possessiveness',
        description:
          'Fire intensifies the Snake\'s naturally possessive tendencies into something that can become consuming. Fire Snakes form deep attachments and can become obsessively jealous when they perceive threats to their relationships — romantic, professional, or personal. This possessiveness can suffocate the very connections they value most.',
      },
      {
        trait: 'Vindictiveness',
        description:
          'The Fire Snake never forgets a betrayal. While most Snakes are content to withdraw from those who wrong them, the Fire Snake burns with a desire for retribution that can consume their energy and distort their judgment. They are patient enough to wait years for revenge and strategic enough to execute it devastatingly — a combination that makes them genuinely dangerous when wounded.',
      },
      {
        trait: 'Emotional Intensity',
        description:
          'The Fire Snake feels everything deeply, and this intensity can become overwhelming — both for them and for those close to them. They may demand a depth of emotional engagement that exhausts their partners, create dramatic scenarios to test loyalty, or withdraw into cold silence when they feel misunderstood. Their emotional life is rich but volatile.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Snake is inherently associated with the Fire element — like the Horse, the Snake carries Fire as its natural elemental affinity. When the Fire element is added to this already Fire-natured animal, the result is a double-fire combination similar to the Fire Horse, but expressed very differently. Where the Fire Horse's double-fire manifests as explosive, visible intensity, the Fire Snake's double-fire creates a concentrated, internal heat — like the difference between a bonfire and molten lava flowing deep underground.

This double-fire nature gives the Fire Snake extraordinary inner power and resilience. Their passion burns at tremendous temperatures but is contained within, creating a person of remarkable intensity who reveals that intensity selectively and strategically. The risk, as with all double-fire combinations, is excess: the Fire Snake can become consumed by their own passions, developing obsessions, fixations, and emotional patterns that they cannot easily cool or release. The Fire Snake benefits enormously from Water element influences — relationships, environments, and practices that provide cooling and perspective without threatening their essential nature. Without these balancing influences, the Fire Snake's internal heat can become self-destructive, manifesting as chronic stress, obsessive thinking, or consuming jealousy.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Snake's compatibility is defined by their need for a partner who can match their depth without being consumed by their intensity. They are drawn to people of substance — those with rich inner lives, genuine intelligence, and the emotional strength to hold their own in the Fire Snake's intense relational dynamic. Shallow, superficial connections bore them; they crave the kind of bond that transforms both people involved.

Traditional Chinese astrology places the Snake in the "Earth Trine" alongside the Ox and the Rooster — animals that share the Snake's methodical nature and appreciation for precision. These three signs form powerful alliances built on mutual competence and shared standards. The Snake's greatest challenge comes from the Pig, which sits in direct opposition and represents the open, trusting nature that the secretive Snake finds both appealing and threatening.`,

    bestMatches: [
      {
        slug: 'earth-ox',
        name: 'Earth Ox',
        score: 93,
        summary:
          'The Earth Ox\'s unwavering loyalty, patient strength, and emotional reliability provide the Fire Snake with the security they need to fully open their guarded heart. The Ox is one of the few signs powerful enough to withstand the Snake\'s intensity without being overwhelmed, and Earth\'s grounding influence stabilizes Fire\'s volatile nature. Together, they form a partnership of extraordinary depth and quiet power.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 85,
        summary:
          'The Metal Rooster\'s analytical precision and honest directness complement the Fire Snake\'s strategic depth. Both signs value intelligence, competence, and excellence, creating a partnership built on mutual respect for each other\'s abilities. Metal\'s clarity cuts through Fire\'s occasional emotional fog, while the Snake\'s intuition softens the Rooster\'s sometimes harsh rationality.',
      },
      {
        slug: 'water-dragon',
        name: 'Water Dragon',
        score: 82,
        summary:
          'A partnership of tremendous mutual power and fascination. The Water Dragon\'s grand vision and commanding presence matches the Fire Snake\'s strategic depth, creating a dynamic where both partners operate at a level of ambition and intelligence that few other combinations achieve. Water\'s cooling influence tempers the Snake\'s Fire, while the Dragon\'s boldness draws the Snake into more visible, expansive action.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-pig',
        name: 'Fire Pig',
        score: 30,
        summary:
          'The Fire Pig\'s open, trusting nature clashes with the Fire Snake\'s secretive intensity. The Pig expects transparency and generosity; the Snake operates through mystery and selective disclosure. The Pig feels deceived by the Snake\'s natural reserve, while the Snake feels exposed and vulnerable around the Pig\'s emotional openness. Double Fire amplifies the tension into dramatic confrontations.',
      },
      {
        slug: 'fire-tiger',
        name: 'Fire Tiger',
        score: 35,
        summary:
          'The Fire Tiger\'s bold, direct approach to life fundamentally conflicts with the Fire Snake\'s subtle, strategic nature. The Tiger charges; the Snake coils. The Tiger demands action; the Snake counsels patience. Both are intensely passionate but express it through incompatible styles, creating a relationship where neither partner feels understood or respected by the other.',
      },
      {
        slug: 'wood-monkey',
        name: 'Wood Monkey',
        score: 40,
        summary:
          'Two of the zodiac\'s most intelligent signs locked in a subtle power struggle. The Wood Monkey\'s clever, playful approach feels frivolous to the intense Fire Snake, while the Snake\'s emotional depth and possessiveness feels suffocating to the freedom-loving Monkey. Both are strategically gifted, which means conflicts become elaborate chess games rather than straightforward disagreements.',
      },
    ],

    elementAffinity: `As a double-Fire sign (Fire element on a Fire-natured animal), the Fire Snake\'s elemental interactions are particularly intense. Earth element signs provide the most beneficial partnerships — Fire produces Earth in the productive cycle, meaning the Fire Snake naturally nurtures and supports Earth partners while receiving the grounding stability they need. Water element signs offer essential cooling that prevents the double-fire from becoming self-destructive, though too much Water can feel threatening. Wood element signs fuel Fire\'s intensity through the productive cycle, creating passionate but potentially consuming relationships. Metal element signs present complex dynamics — Fire melts Metal, which can feel destructive, but Metal\'s discipline and structure can provide a valuable framework for the Fire Snake\'s intense energy.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Snake excels in careers that reward strategic thinking, psychological insight, and the ability to influence complex situations from a position of knowledge. They are natural investigators, strategists, and counselors who operate most effectively when they understand the deeper dynamics at play — whether in financial markets, organizational politics, or human psychology.

The ideal Fire Snake career combines intellectual depth with interpersonal influence. They need work that challenges their formidable mind while allowing them to leverage their exceptional ability to read people and situations. Roles that are purely analytical bore them; roles that are purely social exhaust them. The sweet spot is work where deep knowledge creates strategic advantage and where understanding human nature is a professional asset.

Financially, Fire Snakes are shrewd and patient investors who understand the value of timing. Their ability to observe markets, people, and trends with detached analytical precision — combined with Fire's willingness to act decisively when the moment is right — makes them potentially excellent wealth builders. Their financial weakness is secrecy: they may hide financial decisions from partners, make deals without adequate transparency, or take risks that they justify privately but would not defend publicly.`,

    idealCareers: [
      'Psychologist or Psychiatrist',
      'Investment Strategist',
      'Intelligence Analyst',
      'Executive Coach',
      'Research Scientist',
      'Criminal Profiler',
      'Luxury Brand Director',
      'Political Advisor',
    ],

    financialStyle:
      'Fire Snakes are patient, strategic wealth builders who prefer concentrated investments in areas they understand deeply over diversified portfolios they cannot control. They research obsessively before committing capital and tend to hold positions long after others have sold — their patience and conviction often producing superior returns. The risk is overconcentration and secrecy: investing too heavily in a single thesis based on their own analysis without external validation, and making financial decisions in isolation rather than consulting advisors who might offer valuable alternative perspectives.',

    tips: [
      'Be transparent in professional relationships. Your natural inclination toward secrecy and strategic information management can erode trust with colleagues and clients. Practice sharing your reasoning and intentions more openly — the trust you build will generate more professional advantages than the information you hoard.',
      'Develop your public presence deliberately. Your instinct is to operate behind the scenes, but career advancement often requires visibility. Find platforms and formats that allow you to share your insights without compromising your strategic nature — writing, speaking, and advisory roles let you influence while maintaining appropriate boundaries.',
      'Manage your intensity in team settings. Your focused, penetrating attention can feel invasive or intimidating to colleagues. Practice calibrating your energy to match the situation — not every meeting requires your full analytical focus, and sometimes relaxed engagement builds more trust than acute observation.',
      'Build collaborative partnerships. Your tendency toward solitary operation limits your impact. The Fire Snake who partners with a complementary extrovert — someone who handles public-facing work while the Snake manages strategy — achieves far more than either could alone.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `Love with a Fire Snake is a profound, transformative experience — intense, consuming, and utterly unlike any other sign's approach to romance. The Fire Snake does not date casually or love lightly. When they choose a partner, they invest with a depth and exclusivity that borders on the sacred. Their love is a complete, focused devotion that envelops their partner in attention, understanding, and an almost psychic attunement to their emotional needs.

The Fire Snake's romantic intensity begins with observation. Before they reveal their feelings, they study their potential partner with the patience and precision of a master tactician — learning their patterns, understanding their needs, and assessing their worthiness of the Snake's rare, total commitment. When they finally act, it is with a confidence and precision that takes the object of their affection by surprise. The Fire Snake's courtship is not a process of gradual discovery; it is a revelation — a sudden, overwhelming experience of being completely known and completely desired.

The challenge in Fire Snake relationships is the gap between depth and control. Their intense love can shade into possessiveness, their keen perception can become surveillance, and their desire for deep connection can manifest as a need to know everything about their partner while revealing comparatively little about themselves. The Fire Snake who learns to love openly — sharing their own depths as generously as they plumb their partner's — discovers a mutual intimacy that far surpasses the one-directional intensity they naturally default to.`,

    loveStyle:
      'The Fire Snake loves with consuming depth and focused intensity. They are devoted, perceptive, and passionate partners who express love through deep attention, physical intimacy, and an almost telepathic understanding of their partner\'s needs. Their love language is quality time of the most intimate kind — meaningful conversations, shared silences, and private rituals that create a world belonging only to the two of them. They need a partner who can handle emotional depth and who values loyalty above excitement.',

    idealPartnerTraits: [
      'Emotionally Deep',
      'Loyal',
      'Intellectually Engaging',
      'Patient',
      'Secure in Themselves',
    ],

    tips: [
      'Practice emotional reciprocity. Your partner needs to know your inner world as deeply as you know theirs. Sharing your vulnerabilities, fears, and uncertainties creates the mutual intimacy that you crave but that one-directional perception cannot provide.',
      'Manage jealousy before it manages you. Your possessive instincts are natural but can become destructive. When jealousy arises, examine it honestly — is it based on real evidence or on your own insecurity? Communicating your feelings directly is far healthier than monitoring your partner\'s behavior.',
      'Allow your partner space for independent relationships. Your desire for exclusive, deep connection can lead you to resent your partner\'s friendships, family bonds, and professional relationships. Their other connections strengthen them as a person, which strengthens them as your partner.',
      'Show love through warmth, not just insight. Your partner values your deep understanding, but they also need simple warmth — laughter, physical affection, spontaneous expressions of joy. Not every intimate moment needs to be profound; sometimes lightness is its own form of love.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Snake's double-fire constitution creates a health profile of extraordinary intensity and corresponding vulnerability. In Traditional Chinese Medicine, the Snake's inherent Fire nature governs the Heart and Small Intestine, and adding the Fire element amplifies these associations significantly. The Fire Snake runs hot — physically, emotionally, and mentally — and their health management centers on preventing this internal heat from becoming excessive.

The Fire Snake's primary health pattern is internalized stress. Their secretive nature means they absorb emotional pressure without releasing it, creating a buildup of internal heat that manifests as cardiovascular tension, inflammatory conditions, insomnia, and skin eruptions. They are the zodiac sign most likely to appear calm while experiencing significant internal distress — a disconnect that delays treatment and compounds problems.

The Fire Snake's health strategy must prioritize cooling, release, and transparency. Practices that reduce internal heat — both literally and figuratively — are essential: cool water swimming, meditation, cathartic creative expression, and honest emotional communication all serve to prevent the accumulation of pressure that eventually demands release through physical symptoms.`,

    bodyAreas: ['Heart', 'Small Intestine', 'Circulation', 'Skin'],

    exercises: [
      'Swimming and aquatic exercise',
      'Yoga with emphasis on twisting poses',
      'Dance for emotional expression',
      'Walking meditation',
    ],

    dietTips: [
      'Prioritize cooling, hydrating foods to counterbalance the double-fire constitution: cucumber, melon, celery, pear, and green tea. These foods help regulate the internal heat that accumulates during periods of stress and intense focus.',
      'Support heart health with omega-3 rich foods: wild salmon, sardines, walnuts, and flaxseeds. The Fire Snake\'s cardiovascular system is their most vulnerable area and responds well to consistent nutritional support.',
      'Minimize stimulants. The Fire Snake\'s nervous system is already running at high intensity, and caffeine, alcohol, and excess sugar amplify the internal heat that their constitution struggles to regulate. Herbal teas — particularly chrysanthemum, mint, and chamomile — provide gentler alternatives.',
      'Eat bitter foods to support Heart health according to TCM principles: bitter melon, dark chocolate, dandelion greens, and arugula. The bitter flavor is specifically associated with the Fire element and helps clear excess heat from the system.',
    ],

    mentalHealth:
      'The Fire Snake\'s mental health is intimately linked to their ability to trust. Their natural suspicion and strategic orientation can evolve into paranoia, obsessive monitoring, or a chronic inability to relax when these tendencies go unchecked. The most effective mental health intervention for the Fire Snake is building genuine, reciprocal trust with a small number of people — a partner, a therapist, a close friend — with whom they can be fully transparent. This is profoundly difficult for a sign that instinctively guards their inner world, but it is also profoundly healing. Somatic therapies work well for Fire Snakes, as physical release often unlocks emotional release that verbal processing cannot access. Practices like deep-tissue massage, acupuncture, and breathwork address the stored tension that the Fire Snake\'s body holds long after the triggering situation has passed.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 8, 9],
    colors: ['Deep Red', 'Burgundy', 'Black'],
    direction: 'South',
    gemstones: ['Garnet', 'Bloodstone', 'Smoky Quartz'],
    flowers: ['Orchid', 'Cactus Flower', 'Red Lily'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE SNAKES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'John F. Kennedy',
        profession: 'U.S. President',
        birthYear: 1917,
        description:
          'JFK embodied the Fire Snake\'s mesmerizing charisma and strategic intelligence. His magnetic public presence, combined with a shrewd political mind operating behind the scenes, exemplifies the Fire Snake\'s ability to captivate audiences while managing complex power dynamics with calculated precision.',
      },
      {
        name: 'Indira Gandhi',
        profession: 'Prime Minister of India',
        birthYear: 1917,
        description:
          'Indira Gandhi\'s iron determination, strategic political maneuvering, and commanding authority reflect the Fire Snake at the height of political power. Her ability to consolidate control through a combination of charm and ruthless calculation demonstrates both the strengths and shadows of this sign.',
      },
      {
        name: 'Dean Martin',
        profession: 'Entertainer',
        birthYear: 1917,
        description:
          'Dean Martin\'s effortless cool and magnetic stage presence exemplify the Fire Snake\'s ability to captivate through understated intensity rather than overt effort. His seeming nonchalance masked a deeply strategic entertainer who understood audience psychology with the precision of a master strategist.',
      },
      {
        name: 'Zsa Zsa Gabor',
        profession: 'Actress/Socialite',
        birthYear: 1917,
        description:
          'Zsa Zsa Gabor transformed personal magnetism and social strategy into a decades-long career of fame and influence. Her mastery of public persona, combined with sharp wit and strategic relationship management, embodies the Fire Snake\'s ability to wield charm as a form of power.',
      },
      {
        name: 'Kanye West',
        profession: 'Musician/Designer',
        birthYear: 1977,
        description:
          'Kanye West\'s extraordinary creative brilliance, combined with his intense, polarizing persona and strategic vision for his brand, exemplifies both the genius and the volatility of the Fire Snake. His ability to transform industries through sheer force of creative will reflects the sign\'s concentrated, transformative power.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Snake holds the sixth position in the Chinese zodiac and is one of the most symbolically complex animals in the cycle. In Chinese mythology, the Snake is associated with wisdom, transformation, and the mysterious forces that operate beneath the surface of visible reality. The Snake is the yin counterpart to the Dragon — where the Dragon soars through the heavens, the Snake moves through the earth, possessing equal power but expressing it through subtlety rather than spectacle.

When Fire transforms this already mysterious creature, the mythological significance deepens into the realm of sacred transformation. The Fire Snake appears in Chinese alchemical tradition as the serpent of the furnace — the guardian spirit of the transformative process that turns base materials into gold and mortal understanding into enlightenment. This association links the Fire Snake to the deepest mysteries of Daoist practice: the cultivation of internal fire (nei dan) through disciplined spiritual work.

In Hindu mythology, which has deeply influenced Chinese Buddhist traditions, the serpent of fire is the Kundalini — the coiled spiritual energy that lies dormant at the base of the spine and, when awakened through practice, rises through the body to produce enlightenment. The Fire Snake of the Chinese zodiac resonates with this archetype: a being of tremendous hidden power that, when properly directed, produces extraordinary transformation.`,

    symbolism: `The Fire Snake symbolizes hidden power, concentrated transformation, and the wisdom that comes from patient observation followed by decisive action. In traditional Wu Xing symbolism, the Snake\'s inherent Fire nature doubled by the Fire element creates a symbol of distilled intensity — power that has been refined, concentrated, and made more potent through containment rather than dispersal.

The Fire Snake is also a symbol of seductive knowledge — the understanding of hidden truths that others cannot access, and the dangerous power that comes with knowing what others do not. This connects to the universal mythological association between serpents and forbidden wisdom, from the Garden of Eden to the serpent guardians of sacred texts in Buddhist tradition.

In the seasonal cycle, the Snake is associated with early summer — the time when the sun's heat first becomes intense and the world transitions from growth to maturation. Fire's amplification of this seasonal energy suggests a concentration of summer's power: the midday sun at its hottest, the moment when potential becomes actual and hidden forces manifest in the visible world.`,

    modernInterpretation: `In contemporary culture, the Fire Snake archetype resonates with the strategist, the power broker, and the influential figure who operates at the intersection of public charisma and private calculation. The Fire Snake years of 1917 and 1977 produced individuals who shaped their eras through a combination of magnetic presence and behind-the-scenes orchestration.

The 1917 cohort included political leaders whose charisma and strategic brilliance reshaped nations and global power dynamics. Their Fire Snake nature is visible in their ability to project confidence and vision publicly while managing complex, sometimes ruthless political calculations privately — a duality that defined twentieth-century leadership.

For modern Fire Snakes, the digital age presents both opportunity and challenge. Their natural talent for strategic influence finds powerful expression in an era of social media, data analytics, and sophisticated communication strategies. However, the same era demands unprecedented transparency, which conflicts with the Fire Snake's instinct for secrecy. The most successful contemporary Fire Snakes learn to be strategically transparent — sharing enough to build trust while maintaining the private strategic depth that is their greatest asset.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
