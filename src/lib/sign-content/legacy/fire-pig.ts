// ============================================
// FIRE PIG (丙亥) — The Warm-Hearted Champion
// ============================================
// Fire amplifies the Pig's legendary generosity and
// warmth, creating a passionate humanitarian whose
// boundless enthusiasm for life inspires everyone around them.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'fire-pig',
  profile: getProfileBySlug('fire-pig')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Fire Pig is the most vibrant and emotionally generous member of the Pig family. Where other Pigs express their kindness through quiet acts of care and steady emotional support, the Fire Pig loves out loud — with grand gestures, infectious laughter, and a warmth so genuine that it melts even the coldest cynicism. Fire transforms the Pig's natural goodness from a gentle virtue into a blazing force, creating a personality that is impossible to ignore and even more impossible to dislike.

What makes the Fire Pig uniquely compelling is the marriage of the Pig's authentic benevolence with Fire's passionate energy. The standard Pig is kind, trusting, and generous — qualities that can be taken for granted or exploited. The Fire Pig brings these same qualities but with a visibility, intensity, and active force that commands respect. They do not merely offer kindness; they champion it. They do not merely practice generosity; they crusade for it. Their warmth is not passive — it is a deliberate, powerful choice to meet the world with open arms and a burning heart.

Yet the Fire Pig's boundless generosity carries a significant vulnerability. Their trusting nature, amplified by Fire's enthusiasm, can lead them into situations where their goodness is exploited. They give too much, trust too easily, and forgive too quickly — not out of naivety, but out of a genuine belief that leading with generosity is always the right choice. The Fire Pig's journey is one of learning to maintain their extraordinary warmth while developing the discernment to protect themselves from those who would take advantage of it.`,

    coreTraits: [
      'Generous',
      'Enthusiastic',
      'Trusting',
      'Warm',
      'Optimistic',
      'Indulgent',
    ],

    strengths: [
      {
        trait: 'Boundless Generosity',
        description:
          'The Fire Pig\'s generosity is legendary — and unlike other signs that give strategically or conditionally, the Fire Pig gives from a seemingly inexhaustible well of genuine goodwill. Their generosity extends beyond money to time, energy, emotional support, and the willingness to put others\' needs before their own. This authentic giving creates a network of genuine loyalty and gratitude that becomes the Fire Pig\'s greatest asset.',
      },
      {
        trait: 'Infectious Optimism',
        description:
          'The Fire Pig radiates a warmth and positivity that transforms every environment they enter. Their laughter is genuine, their enthusiasm is contagious, and their belief that good outcomes are always possible inspires others to rise above their own cynicism and fear. In dark times, the Fire Pig is the person who reminds everyone why life is worth celebrating.',
      },
      {
        trait: 'Courageous Kindness',
        description:
          'Fire adds backbone to the Pig\'s natural kindness, creating a person who is not just gentle but actively brave in their compassion. The Fire Pig will stand up for those who are being mistreated, confront bullies without hesitation, and advocate for fairness with a passionate conviction that their gentle-natured kin might not possess. Their courage is born from empathy rather than ego.',
      },
      {
        trait: 'Sensual Joy',
        description:
          'The Fire Pig embraces life\'s pleasures with unabashed enthusiasm — good food, warm company, beautiful environments, and physical comfort are not guilty pleasures but essential nutrients for their soul. Their ability to take genuine delight in simple things creates an atmosphere of celebration and gratitude that enriches the lives of everyone around them.',
      },
    ],

    challenges: [
      {
        trait: 'Naivete and Over-Trust',
        description:
          'The Fire Pig\'s fundamental belief in human goodness leaves them vulnerable to exploitation. They extend trust before it is earned, assume good intentions when evidence suggests otherwise, and give others the benefit of the doubt long past the point when discernment would be wise. This pattern can lead to painful betrayals and financial losses that could have been prevented.',
      },
      {
        trait: 'Excessive Indulgence',
        description:
          'The Fire Pig\'s love of pleasure can become genuinely self-destructive. They are drawn to rich food, lavish spending, sensual excess, and any experience that provides immediate gratification. Fire\'s intensity amplifies these tendencies beyond the normal Pig appetite, creating patterns of overindulgence that impact health, finances, and personal relationships.',
      },
      {
        trait: 'Difficulty with Confrontation',
        description:
          'Despite Fire\'s added courage, the Pig\'s core nature recoils from conflict. Fire Pigs may endure mistreatment, tolerate disrespect, or stay in harmful situations far too long because the prospect of confrontation is more painful than the situation itself. When they finally do react, the accumulated frustration can erupt disproportionately.',
      },
      {
        trait: 'Self-Neglect Through Service',
        description:
          'The Fire Pig\'s dedication to others\' happiness can come at a devastating cost to their own well-being. They put everyone else\'s needs first — cooking, helping, supporting, giving — until their own reserves are completely depleted. This pattern of martyrdom is not sustainable and can lead to resentment, exhaustion, and health collapse.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Pig is associated with the Water element — flowing, intuitive, and deeply emotional. When Fire is added to this Water-natured animal, a controlling relationship activates: Water overcomes Fire. This creates a fundamental internal tension similar to the Fire Rat's — the animal's essential nature works to contain the element's intensity, while the element pushes the animal beyond its comfort zone.

In the Fire Pig, this Water-Fire tension manifests as a remarkable emotional complexity. Water's depth gives the Fire Pig profound emotional intelligence and intuitive understanding of others, while Fire's passion ensures that this understanding is expressed actively rather than merely felt. The tension between the two elements creates a person who is simultaneously deeply feeling and outwardly vibrant — warm on the surface, oceanic in depth.

The risk of this combination is emotional overwhelm. When Water's sensitivity meets Fire's intensity, the Fire Pig can experience emotional tides of extraordinary power — great waves of joy, compassion, grief, or love that sweep through them with nearly physical force. Learning to navigate these emotional currents without being capsized is the Fire Pig's most important developmental task. Earth element influences provide essential grounding, helping the Fire Pig maintain stability while honoring both their fiery passion and their watery depth.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Fire Pig's compatibility is shaped by their need for a partner who reciprocates their generosity, values their warmth, and provides the practical grounding that this emotionally abundant sign sometimes lacks. They are drawn to people who are genuine, warm, and honest — qualities that resonate with the Pig's core values. The worst match for a Fire Pig is someone who is cold, calculating, or willing to exploit their trusting nature.

Traditional Chinese astrology places the Pig in the "Wood Trine" alongside the Rabbit and the Goat — animals that share the Pig's gentle nature, appreciation for beauty, and preference for harmony. These three signs form natural alliances built on mutual empathy and shared warmth. The Pig's greatest challenge comes from the Snake, which sits in direct opposition and represents the secretive, strategic approach to life that the transparent Pig finds deeply unsettling.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 90,
        summary:
          'The Wood Tiger\'s courageous, adventurous spirit and natural compassion creates an exciting, deeply fulfilling partnership with the Fire Pig. The Tiger provides the boldness and protective strength that the Pig admires, while the Pig\'s warmth and generosity creates a nurturing home base that the Tiger is always glad to return to. Wood\'s gentle nature softens the Tiger-Pig dynamic into one of genuine tenderness.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 88,
        summary:
          'A beautifully gentle partnership of two emotionally sensitive, kindness-driven signs. The Water Rabbit\'s refined sensibility and emotional depth matches the Fire Pig\'s own warmth and capacity for care. Water nourishes the Pig\'s core nature while cooling Fire\'s occasional excess, creating a relationship of extraordinary mutual tenderness and aesthetic pleasure.',
      },
      {
        slug: 'earth-goat',
        name: 'Earth Goat',
        score: 85,
        summary:
          'The Earth Goat\'s creative warmth and need for emotional security perfectly complements the Fire Pig\'s generous, nurturing nature. Both signs value comfort, beauty, and emotional connection above ambition or material achievement. Earth\'s grounding influence stabilizes the Fire Pig\'s emotional intensity, creating a partnership that feels like a permanent warm embrace.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-snake',
        name: 'Fire Snake',
        score: 28,
        summary:
          'The fundamental zodiac opposition between Pig and Snake is amplified by shared Fire intensity. The Fire Snake\'s secretive, strategic nature directly conflicts with the Fire Pig\'s transparent, trusting approach to life. The Pig feels manipulated by the Snake\'s hidden agendas, while the Snake feels exposed and uncomfortable with the Pig\'s emotional openness. Double Fire ensures that conflicts are passionate and deeply felt.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 35,
        summary:
          'The Metal Monkey\'s calculating intelligence and pragmatic approach to relationships feels cold and manipulative to the trusting Fire Pig. The Monkey may exploit the Pig\'s generosity, and Metal\'s sharp criticism wounds Fire\'s sensitive pride. The Pig\'s straightforward emotional nature bores the novelty-seeking Monkey, creating a relationship where neither partner feels valued.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 40,
        summary:
          'The Metal Rooster\'s exacting standards and blunt criticism clashes with the Fire Pig\'s easygoing, pleasure-seeking nature. The Rooster sees the Pig as undisciplined and self-indulgent; the Pig sees the Rooster as joyless and unnecessarily harsh. Metal\'s cutting precision against Fire\'s emotional warmth creates friction in daily life that erodes affection over time.',
      },
    ],

    elementAffinity: `As a Fire-enhanced Water animal, the Fire Pig navigates elemental relationships with particular emotional depth. Wood element signs provide the most naturally harmonious partnerships — Wood is nourished by Water (the Pig\'s inner nature) and feeds Fire (the modifying element), creating a beautifully balanced productive cycle within the relationship. Earth element signs offer essential grounding that stabilizes the Fire Pig\'s emotional intensity. Other Water element signs create deeply empathetic connections but may amplify emotional sensitivity to an overwhelming degree. Metal element signs produce Water in the productive cycle, which can strengthen the Pig\'s core nature, but Metal\'s critical quality may conflict with Fire\'s warmth and the Pig\'s desire for acceptance.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Fire Pig excels in careers that allow them to express their generous nature while making a tangible positive impact on others' lives. They are natural caregivers, hosts, community builders, and humanitarians who bring an extraordinary combination of warmth, energy, and genuine concern to their professional environments. Unlike signs that are motivated by status or competition, the Fire Pig is driven by the satisfaction of seeing others thrive.

The ideal Fire Pig career provides both meaning and social connection. They need work that involves regular human interaction, allows them to express their caring nature, and produces visible positive outcomes. Isolated, competitive, or morally ambiguous work environments drain the Fire Pig's considerable energy and can cause genuine psychological distress.

Financially, the Fire Pig is the zodiac's most generous — and this generosity, while beautiful, creates financial challenges. They overtip, overgive, and overspend on others to a degree that can compromise their own financial security. They are also drawn to luxury and comfort spending that satisfies their sensual nature but strains their budget. The Fire Pig who learns to balance generosity with self-preservation builds a financial foundation that allows them to give sustainably rather than depleting their resources in spectacular bursts.`,

    idealCareers: [
      'Hospitality Director',
      'Community Organizer',
      'Chef or Restaurant Owner',
      'Philanthropist or Fundraiser',
      'Pediatric Nurse',
      'Entertainment Producer',
      'Life Coach',
      'Social Enterprise Founder',
    ],

    financialStyle:
      'The Fire Pig is a generous earner who makes money to share it. They are drawn to careers that provide both income and the opportunity to help others, and they spend freely on loved ones, charitable causes, and life\'s pleasures. Their financial vulnerability is the complete absence of a "selfish" instinct — they may give until they have nothing left, fund others\' ventures while neglecting their own savings, or maintain a lifestyle that exceeds their income because cutting back feels like a betrayal of their generous nature. The Fire Pig who establishes firm financial boundaries — saving a non-negotiable percentage before spending on others — maintains the ability to give generously across their entire lifetime rather than exhausting their resources prematurely.',

    tips: [
      'Set financial boundaries before emotional situations arise. Your generosity is a virtue, but it must be sustainable. Decide in advance how much you will give, spend, and save — and honor those decisions even when your heart wants to exceed them.',
      'Learn to say no without guilt. Your tendency to agree to every request, help with every project, and attend every event leads to overcommitment and exhaustion. Practice declining requests that do not align with your priorities, and recognize that saying no to some things means saying yes to what matters most.',
      'Protect your energy as a professional resource. Your warmth and enthusiasm are your greatest professional assets, and they require regular replenishment. Schedule genuine downtime, pursue pleasures that restore rather than deplete you, and recognize that self-care is not selfish but essential.',
      'Develop a healthy skepticism about financial requests. Your trusting nature makes you a target for financial exploitation. Before committing money to anyone\'s venture, cause, or need, consult a trusted advisor who can evaluate the request with the objectivity your generous heart sometimes lacks.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Fire Pig is one of the zodiac's most loving and devoted partners, offering a warmth, generosity, and emotional availability that creates relationships of extraordinary richness and comfort. When a Fire Pig is in love, their partner experiences a quality of care that is rare in human relationships — a complete, unwavering attention to their happiness, comfort, and well-being that feels like being wrapped in a perpetual warm embrace.

The Fire Pig's romantic nature combines the Pig's legendary capacity for love with Fire's passionate intensity. They are physically affectionate, emotionally available, and genuinely delighted by their partner's existence. They cook elaborate meals, plan thoughtful surprises, listen with complete attention, and create homes that feel like sanctuaries of warmth and pleasure. Romance for the Fire Pig is not a performance — it is their natural state of being when they are in love.

The challenge in Fire Pig relationships is boundaries. Their desire to give everything to their partner can create an imbalance where the Pig's own needs are consistently subordinated. They may tolerate behavior that other signs would not accept, forgive betrayals that should be confronted, and sacrifice their own interests so consistently that they lose touch with who they are outside the relationship. The Fire Pig who learns to love themselves with the same fierce generosity they offer their partner builds a relationship of true mutuality rather than one-sided devotion.`,

    loveStyle:
      'The Fire Pig loves with whole-hearted, sensual generosity. They are warm, physically affectionate, and deeply invested in creating a relationship that feels like a celebration of life\'s best qualities. Their love language combines physical touch with acts of service — cooking, caring, creating comfort, and sharing physical closeness. They need a partner who receives their generosity gracefully and who reciprocates with genuine appreciation, honesty, and their own expressions of care.',

    idealPartnerTraits: [
      'Warm',
      'Appreciative',
      'Honest',
      'Physically Affectionate',
      'Protective of the Pig\'s Well-Being',
    ],

    tips: [
      'Establish and maintain boundaries in love. Your instinct is to give everything, but healthy relationships require balance. Practice identifying and communicating your own needs with the same attentiveness you give to your partner\'s — your needs matter equally.',
      'Trust your instincts about character. Your generous nature sometimes overrides your intuition about people. When something feels wrong — when someone\'s words do not match their actions, or when their taking consistently exceeds their giving — honor that feeling rather than explaining it away.',
      'Maintain friendships and interests outside the relationship. Your tendency to pour everything into your partnership can leave you isolated and dependent. Keep your friendships active, pursue your own pleasures and projects, and ensure that your identity is not entirely defined by your role as a partner.',
      'Accept that love includes difficult conversations. Your aversion to conflict can prevent you from addressing problems that need attention. Practice raising concerns gently but directly, and recognize that a relationship strong enough to handle honest conversation is far healthier than one maintained through avoidance.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Fire Pig's health profile is shaped by two dominant forces: their love of physical pleasure and their tendency to absorb emotional stress from everyone around them. In Traditional Chinese Medicine, the Pig's Water element governs the Kidneys and Bladder — the organs associated with vitality, deep energy reserves, and the body's fundamental constitution. Fire's influence on this Water foundation creates a metabolism that is warm and vigorous but susceptible to depletion through overindulgence and excessive emotional giving.

The Fire Pig's primary health vulnerability is excess. They eat too much, drink too much, socialize too much, give too much, and generally operate at a level of output that exceeds their input. Their natural vitality masks this imbalance for years, but the accumulated deficit eventually manifests as weight gain, fatigue, kidney stress, and immune system weakness.

The Fire Pig's greatest health asset is their love of sensual pleasure, which can be redirected from destructive indulgence to healing self-care. When the Fire Pig channels their appreciation for food into nutritious cooking, their love of comfort into restorative sleep, and their social nature into supportive health communities, they discover that taking care of themselves feels just as good as taking care of everyone else.`,

    bodyAreas: ['Kidneys', 'Bladder', 'Digestive System', 'Immune System'],

    exercises: [
      'Swimming and water aerobics',
      'Social fitness classes',
      'Dancing',
      'Leisurely cycling or walking groups',
    ],

    dietTips: [
      'Support Kidney health with warm, nourishing foods that replenish deep reserves: bone broth, black beans, walnuts, dark berries, and seaweed. The Fire Pig\'s constitution depends on strong Kidney energy, and these foods provide the deep nourishment their generous lifestyle rapidly depletes.',
      'Practice portion awareness without deprivation. The Fire Pig\'s relationship with food is one of life\'s great pleasures, and restrictive diets feel like punishment. Instead of eliminating favorite foods, focus on quality over quantity: smaller portions of excellent food, savored slowly, provide more satisfaction than large portions consumed quickly.',
      'Reduce alcohol and rich foods during periods of emotional stress. The Fire Pig\'s instinct during difficult times is to comfort-eat and comfort-drink, but these patterns compound the stress response and deplete the Kidney energy that the body needs most during challenging periods.',
      'Cook for yourself with the same love you cook for others. The Fire Pig who invests the same care, creativity, and attention in their own meals as they do in feeding their loved ones transforms nutrition from obligation into a daily act of self-love.',
    ],

    mentalHealth:
      'The Fire Pig\'s mental health is profoundly influenced by the quality of their relationships. They thrive in environments of warmth, trust, and mutual care, and they wilt in the absence of genuine human connection. Isolation is the Fire Pig\'s most dangerous psychological state — without the social bonds that give their life meaning, they can spiral into depression, self-destructive comfort-seeking, and a loss of the optimistic faith in human goodness that defines their best self. The most effective mental health strategy for this sign is building and maintaining a community of genuine, reciprocal relationships — not transactional connections but real friendships based on mutual care. When the Fire Pig\'s social needs are met, their natural resilience and optimism provide a powerful buffer against life\'s difficulties. Therapy approaches that emphasize the therapeutic relationship itself — person-centered therapy, interpersonal therapy, or group therapy — are particularly effective, as the Fire Pig heals through connection rather than analysis. Body-based practices like massage, warm baths, and gentle exercise provide additional support by addressing the physical tension that accumulates when the Fire Pig absorbs others\' emotional stress.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Red', 'Warm Gold', 'Rose'],
    direction: 'South',
    gemstones: ['Ruby', 'Rose Quartz', 'Amber'],
    flowers: ['Hydrangea', 'Dahlia', 'Sweet Pea'],
    season: 'Summer',
  },

  // ----------------------------------------
  // FAMOUS FIRE PIGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Arnold Schwarzenegger',
        profession: 'Actor/Politician',
        birthYear: 1947,
        description:
          'Arnold Schwarzenegger\'s larger-than-life persona, boundless ambition, and genuine warmth beneath the strongman exterior embody the Fire Pig\'s unique combination of passionate drive and fundamental good nature. His trajectory from bodybuilder to movie star to governor reflects the Fire Pig\'s belief that life should be lived at maximum volume, while his philanthropic work reveals the sign\'s generous heart.',
      },
      {
        name: 'Hillary Clinton',
        profession: 'Politician/Diplomat',
        birthYear: 1947,
        description:
          'Hillary Clinton\'s decades-long dedication to public service, passionate advocacy for women and children, and resilience in the face of relentless opposition reflect the Fire Pig\'s combination of genuine compassion and fierce determination. Her career embodies the sign\'s belief that service to others is the highest calling, pursued with Fire\'s unwavering intensity.',
      },
      {
        name: 'Elton John',
        profession: 'Musician/Philanthropist',
        birthYear: 1947,
        description:
          'Elton John is the Fire Pig in full expression — flamboyant, generous, emotionally transparent, and possessed of an extraordinary capacity for both creative output and personal warmth. His music, his legendary generosity, and his passionate advocacy for AIDS research reflect the Fire Pig\'s belief that art and compassion are inseparable callings.',
      },
      {
        name: 'David Bowie',
        profession: 'Musician/Artist',
        birthYear: 1947,
        description:
          'David Bowie\'s extraordinary creative reinvention, emotional expressiveness, and gift for connecting with audiences across generations reflects the Fire Pig\'s passionate, boundary-pushing nature. His warmth and genuine curiosity about human experience, channeled through artistic brilliance, exemplifies the Fire Pig at their most creatively generous.',
      },
      {
        name: 'Stephen King',
        profession: 'Author',
        birthYear: 1947,
        description:
          'Stephen King\'s prolific output, emotional generosity as a storyteller, and passionate advocacy for literacy and the craft of writing embody the Fire Pig\'s tireless creative energy and genuine desire to share their gifts with the world. His ability to connect with readers through deeply human characters reflects the Fire Pig\'s extraordinary emotional intelligence.',
      },
      {
        name: 'Meat Loaf',
        profession: 'Singer/Actor',
        birthYear: 1947,
        description:
          'Meat Loaf\'s theatrical, emotionally unrestrained performances and his embodiment of larger-than-life passion exemplify the Fire Pig\'s refusal to do anything at half volume. His music celebrated love, desire, and the full spectrum of human emotion with a sincerity and intensity that perfectly reflects the Fire Pig\'s commitment to authentic emotional expression.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Pig holds the twelfth and final position in the Chinese zodiac — a placement that carries deep symbolic significance. According to legend, the Pig arrived last in the Great Race because it stopped to eat and nap along the way, a story that captures the Pig's essential nature: the creature who prioritizes life's pleasures over competitive achievement, and who arrives at their destination happy and well-fed rather than exhausted and depleted.

When Fire transforms this pleasure-loving, generous creature, the mythological significance shifts from passive enjoyment to active celebration. The Fire Pig appears in Chinese folk tradition as the spirit of the feast — the being who transforms raw ingredients into nourishing abundance and invites all comers to share in the bounty. In agricultural festivals, the Pig is associated with harvest abundance and the communal meals that celebrate a community's shared labor and good fortune.

In Buddhist mythology adapted to Chinese tradition, the Pig is associated with the bodhisattva Maitreya — the future Buddha known for his corpulent, laughing form that represents the joy of spiritual abundance. The Fire Pig connects to this archetype of generous spiritual joy: the understanding that true enlightenment is not austere withdrawal but warm, inclusive celebration of life's gifts.`,

    symbolism: `The Fire Pig symbolizes generous abundance — the understanding that the deepest form of wealth is not accumulation but sharing, and that true luxury is not exclusive indulgence but communal joy. In traditional Wu Xing symbolism, Fire acting on Water represents the most fundamental of transformations: the conversion of liquid into steam, of potential into kinetic energy, of dormant resources into active power. The Fire Pig embodies this transformation, converting their deep emotional and material resources into warmth that sustains everyone around them.

The Fire Pig is also a symbol of courageous generosity — the willingness to give even when giving is risky, to trust even when trust has been betrayed, and to remain open-hearted in a world that often punishes openness. This is not weakness but a profound form of strength: the Fire Pig's determination to lead with love despite knowing the cost.

In the cycle of completion, the Pig occupies the final position — representing the end of the cycle, the completion of the journey, and the moment of rest and celebration before renewal begins. Fire\'s influence on this position suggests that the ending is not a fading but a blaze: a final, magnificent expression of warmth and joy that lights the way for the cycle to begin again.`,

    modernInterpretation: `In contemporary culture, the Fire Pig archetype resonates wherever genuine warmth, creative generosity, and passionate living converge. The Fire Pig year of 1947 produced one of the most creatively prolific and emotionally expressive generations in modern cultural history — a cohort of artists, entertainers, and public figures whose work was defined by emotional transparency and a desire to share their gifts with the widest possible audience.

The 1947 cohort brought Fire Pig energy to music, literature, film, and public life during an era of enormous social change. Their careers demonstrate the Fire Pig's extraordinary capacity for sustained creative output driven by genuine emotional connection with their audience. Artists like Elton John, David Bowie, and Stephen King exemplify the Fire Pig's ability to transform personal emotional experience into art that resonates with millions.

For modern Fire Pigs, the central insight is that their generosity, emotional openness, and love of life are not merely personality traits but genuine superpowers. In a cultural moment characterized by cynicism, isolation, and emotional guardedness, the Fire Pig's radical warmth offers something increasingly rare and valuable: the genuine human connection that technology promises but cannot deliver. The Fire Pig who channels their extraordinary capacity for love and celebration into sustainable practices — giving without depleting, trusting without being naive, and enjoying without overindulging — becomes a transformative presence in any community fortunate enough to include them.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
