// ============================================
// WOOD PIG (甲亥) — The Generous Soul
// ============================================
// The Wood Pig combines the Pig's warm-hearted generosity
// and love of life with Wood's creative growth energy,
// creating a deeply caring personality who nurtures
// abundance in everyone around them.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-pig',
  profile: getProfileBySlug('wood-pig')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Pig is the most generous and socially engaged of all Pig-element combinations. The Pig — already renowned for its warmth, sincerity, and love of life's pleasures — is enriched by the Wood element's gifts of creative energy, compassion, and genuine concern for communal well-being. The result is a personality of extraordinary generosity, optimistic vitality, and an almost limitless capacity for kindness.

People born under this sign radiate warmth like a hearth fire. They are the friends who remember everyone's birthdays, the neighbors who organize community events, and the partners who fill life with joy, comfort, and unconditional love. The Wood Pig does not simply enjoy the good things in life — they create and share them, deriving their deepest satisfaction from the happiness they bring to others.

What makes the Wood Pig particularly endearing is their authenticity. There is no calculation in their kindness, no agenda behind their generosity. They give because giving is their nature — as natural and unstoppable as a tree growing toward the light. This genuineness is immediately apparent to everyone they meet, which is why the Wood Pig is almost universally liked. Even those who are wary of excessive positivity find it difficult to resist the Wood Pig's sincere, unforced warmth.`,

    coreTraits: [
      'Generous',
      'Optimistic',
      'Sincere',
      'Nurturing',
      'Creative',
      'Sociable',
    ],

    strengths: [
      {
        trait: 'Extraordinary Generosity',
        description:
          'The Wood Pig gives with an open hand and an open heart. Their generosity encompasses time, money, energy, emotional support, and simple human kindness — all offered freely and without expectation of return. This is not performative philanthropy but a fundamental orientation toward sharing that creates abundance wherever the Wood Pig goes.',
      },
      {
        trait: 'Nurturing Leadership',
        description:
          'The Wood Pig leads through care rather than command. They create environments where people feel safe, valued, and supported — conditions that bring out the best in everyone. Teams and communities led by Wood Pigs thrive because the leader genuinely prioritizes the well-being of each member, creating a rising tide that lifts all boats.',
      },
      {
        trait: 'Creative Abundance',
        description:
          'The Wood element adds creative fertility to the Pig\'s natural love of beauty and pleasure. The Wood Pig generates ideas, projects, and opportunities with remarkable abundance. Their creativity is practical and community-oriented — they create things that bring joy, solve problems, and improve the lives of those around them.',
      },
      {
        trait: 'Emotional Authenticity',
        description:
          'The Wood Pig is incapable of pretense. What you see is what you get — their emotions are visible, their intentions are transparent, and their warmth is genuine. This authenticity creates immediate trust and deep bonds. In a world of strategic communication and managed impressions, the Wood Pig\'s sincerity is both refreshing and deeply valued.',
      },
    ],

    challenges: [
      {
        trait: 'Naivety',
        description:
          'The Wood Pig\'s trusting nature and assumption of others\' goodness can leave them vulnerable to exploitation. They may lend money that is never returned, give second chances to people who have proven themselves unworthy, or fail to recognize manipulation until the damage is done. Developing discernment without losing their faith in humanity is an ongoing challenge.',
      },
      {
        trait: 'Over-Indulgence',
        description:
          'The Pig\'s love of pleasure combined with Wood\'s expansive energy can produce patterns of excess — overeating, overspending, overcommitting, and overindulging in the good things of life. The Wood Pig may struggle to distinguish between healthy enjoyment and self-destructive excess, especially when stress or emotional pain triggers their comfort-seeking instincts.',
      },
      {
        trait: 'Conflict Avoidance',
        description:
          'The Wood Pig\'s deep desire for harmony can make them reluctant to address problems directly. They may tolerate mistreatment, accept unfair arrangements, or suppress their own anger to maintain peace. This avoidance allows problems to grow rather than be resolved, eventually creating the very conflict the Wood Pig was trying to prevent.',
      },
      {
        trait: 'Boundary Issues',
        description:
          'The Wood Pig\'s generous nature often extends beyond what is healthy or sustainable. They may give until they are depleted, say yes to every request, or allow others to take advantage of their kindness. Learning to set and maintain boundaries — while still being genuinely generous — is one of their most important life lessons.',
      },
    ],

    elementInfluence: `Wood's influence on the Pig is deeply harmonious. The Pig is natively associated with the Water element in Chinese cosmology — it is the twelfth and final animal of the zodiac, associated with the Earthly Branch Hai (亥) and the deep, still energy of late night. Water nourishes Wood in the productive cycle, meaning the Pig's inherent Water energy naturally feeds the Wood element's growth and creative power. This creates an unusually well-integrated personality where the Pig's emotional depth and intuitive sensitivity seamlessly fuel Wood's drive toward creative expression and compassionate action. The result is a person of remarkable wholeness — their emotions, their creativity, and their values all flow in the same direction, producing a life of genuine coherence and positive impact.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Pig's compatibility reflects their need for genuine emotional connection, shared values, and a partner who appreciates their warmth without exploiting their generosity. They thrive with partners who are honest, emotionally available, and capable of both receiving and reciprocating the extraordinary care the Wood Pig offers. The Pig belongs to the fourth trine alongside the Rabbit and the Goat, sharing these animals' love of beauty, comfort, and emotional authenticity.

The Wood element adds creative energy and collaborative spirit to the Pig's compatibility profile, making them active, engaged partners who contribute substantially to the relationship's growth and vitality.`,

    bestMatches: [
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 93,
        summary:
          'An exquisitely harmonious fourth-trine pairing. The Water Rabbit\'s gentle sensitivity and refined aesthetic perfectly complement the Wood Pig\'s warm generosity — Water nourishes Wood in the productive cycle. Both signs share a deep commitment to beauty, harmony, and emotional authenticity, creating a relationship of profound mutual understanding and tender devotion.',
      },
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 88,
        summary:
          'A creatively abundant fourth-trine alliance. The Fire Goat\'s artistic passion and emotional warmth resonate deeply with the Wood Pig\'s generous spirit — Wood feeds Fire, creating a productive dynamic where the Pig\'s creative nurturing fuels the Goat\'s artistic expression. Both signs value beauty, comfort, and emotional depth.',
      },
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 85,
        summary:
          'A warm, mutually supportive pairing. The Wood Tiger\'s courageous compassion and adventurous spirit energize the Wood Pig\'s generous nature. Sharing the same element creates deep natural understanding, and the Tiger\'s protective strength provides the security the Pig craves. In return, the Pig offers the Tiger a haven of warmth, acceptance, and unconditional emotional support.',
      },
    ],

    challengingMatches: [
      {
        slug: 'fire-snake',
        name: 'Fire Snake',
        score: 28,
        summary:
          'The Pig and Snake sit in direct opposition on the zodiac wheel, creating fundamental tension around trust and communication style. The Fire Snake\'s secretive, strategic nature deeply unsettles the Wood Pig\'s transparent, trust-based approach to relationships. The Pig finds the Snake deceptive; the Snake finds the Pig naive. This opposition requires enormous mutual adaptation to overcome.',
      },
      {
        slug: 'metal-monkey',
        name: 'Metal Monkey',
        score: 35,
        summary:
          'The Metal Monkey\'s sharp cleverness and competitive instincts clash with the Wood Pig\'s sincere, cooperative nature. Metal cuts Wood, and the Monkey\'s calculating approach to relationships feels manipulative to the Pig\'s honest heart. The Pig\'s trusting nature makes them vulnerable to the Monkey\'s strategic maneuvering.',
      },
      {
        slug: 'metal-rooster',
        name: 'Metal Rooster',
        score: 40,
        summary:
          'The Metal Rooster\'s sharp criticism and perfectionism overwhelms the Wood Pig\'s generous, accepting nature. Metal cuts Wood, creating a dynamic where the Rooster\'s exacting standards feel like rejection of the Pig\'s heartfelt efforts. The Pig\'s indulgent tendencies frustrate the Rooster\'s disciplined approach to life.',
      },
    ],

    elementAffinity: `The Wood Pig has an exceptionally favorable elemental profile. Water-element partners are deeply nourishing — the Pig's native Water energy resonates naturally with Water partners, and Water nourishes the Wood element, creating layers of mutual support. Fire-element partners are stimulating — Wood feeds Fire — creating warm, passionate partnerships where the Pig's creative energy fuels the Fire partner's ambitions. Earth-element partners provide grounding stability that can help manage the Pig's tendency toward excess. Metal-element partners present the greatest challenge, as Metal cuts Wood — these relationships can feel sharp, critical, and unsupportive of the Wood Pig's generous, flexible nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Pig excels in careers that combine creativity with care — roles where they can use their talents to improve people's lives, create beautiful experiences, or build communities of mutual support. They are not motivated by competition or personal glory — the Wood Pig finds meaning in contribution, connection, and the knowledge that their work makes the world a warmer place.

Their ideal work environment is collaborative, supportive, and values-driven. The Wood Pig thrives in organizations that treat their people well, engage with their communities authentically, and produce goods or services that genuinely benefit their customers. They struggle in cutthroat corporate cultures, ethically questionable industries, and any environment where success requires sacrificing integrity or exploiting others.

Financially, the Wood Pig is generous to a fault. They earn well — their warmth and creativity make them valued in many industries — but they spend freely on others, donate generously, and may neglect their own financial security in favor of shared experiences and charitable giving. The wisest Wood Pigs establish automatic savings and investment plans that secure their future before their generous instincts can redirect those resources to others.`,

    idealCareers: [
      'Hospitality Manager',
      'Chef or Restaurant Owner',
      'Fundraiser or Development Director',
      'Pediatrician or Family Physician',
      'Community Arts Director',
      'Social Enterprise Founder',
      'Wellness Center Director',
      'Event Planner',
    ],

    financialStyle:
      'The Wood Pig is a generous, experience-oriented spender who values sharing over saving and quality of life over net worth. They invest in people, experiences, and community — hosting gatherings, treating friends, supporting causes, and creating abundant environments. Their earning potential is strong, as their warmth and creativity are valuable across industries, but their savings discipline is weak. The Wood Pig who establishes automatic financial systems — scheduled transfers to savings, investment contributions, and spending limits — builds security without changing their generous nature.',

    tips: [
      'Establish financial boundaries before opportunities to be generous arise. Set up automatic savings and investment plans that redirect a percentage of your income to your future before your generous impulses can claim it. You cannot help others from a position of financial insecurity.',
      'Learn to evaluate requests for help with discernment rather than automatic acceptance. Not every cause deserves your resources, and not every person who asks for help has genuinely earned it. Being selective with your generosity makes each act of giving more impactful and sustainable.',
      'Develop your leadership voice. Your nurturing nature makes you an exceptional leader, but you must claim that role deliberately. Learn to make difficult decisions, deliver hard feedback, and set directions — leadership requires these capabilities alongside the warmth and care you naturally provide.',
      'Build a professional network that reciprocates your generosity. You tend to give more than you receive in professional relationships. Consciously cultivate connections with people who actively support your career, not just those who benefit from your help.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Pig in love is one of the most devoted, generous, and openly affectionate signs in the entire zodiac. They approach romance with their whole heart — holding nothing back, offering everything they have, and creating a relationship of extraordinary warmth, comfort, and emotional abundance. When a Wood Pig loves you, you are enveloped in care so complete that it can feel like being wrapped in a warm blanket on a cold night.

In relationships, the Wood Pig creates a world of shared pleasure and comfort. They cook magnificent meals, create beautiful living spaces, plan celebrations, and fill everyday moments with small touches of luxury and care. Their love is sensual and practical simultaneously — expressed through physical warmth, thoughtful gestures, and the creation of a home that feels like the best version of life.

The Wood Pig's challenge in love is their tendency to give at the expense of their own needs. They may accommodate their partner's preferences so completely that they lose touch with their own desires, or they may tolerate treatment they should not accept because their capacity for forgiveness exceeds their capacity for self-protection. The healthiest Wood Pig relationships are those where their partner actively ensures the giving flows both ways.`,

    loveStyle:
      'The Wood Pig loves through abundant generosity, sensual warmth, and the creation of a shared life of comfort and beauty. They are deeply affectionate partners who express devotion through nurturing — cooking, caring, creating, and constantly finding ways to bring joy and pleasure to their loved one\'s life. Their love is unconditional, forgiving, and expressed with a sincerity that is impossible to fake. They need a partner who reciprocates their generosity, protects them from exploitation, and values the rare gift of their wholehearted devotion.',

    idealPartnerTraits: [
      'Genuinely Kind',
      'Reciprocally Generous',
      'Protective of the Pig\'s Interests',
      'Values Home and Comfort',
      'Emotionally Honest',
    ],

    tips: [
      'Require reciprocity in your relationships. Your natural tendency is to give without conditions, but healthy love is a two-way exchange. Pay attention to whether your partner invests in your happiness with the same devotion you invest in theirs. If the ratio is consistently imbalanced, that is a problem worth addressing.',
      'Learn to recognize the difference between love and exploitation. Your trusting nature can blind you to partners who take advantage of your generosity. If you find yourself consistently doing more, giving more, and sacrificing more, examine whether your partner is truly loving you or simply consuming your kindness.',
      'Maintain interests and friendships outside your relationship. Your tendency to pour everything into your partner can create an unhealthy dynamic where both people lose their individuality. A relationship between two whole, fulfilled people is stronger than one where the Wood Pig has surrendered their separate identity.',
      'Express your own needs and desires without guilt. Your instinct is to prioritize your partner\'s wants, but your needs matter equally. Practice saying "I would like" and "I need" with the same ease you say "What would you like?" and "What do you need?"',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Pig's health profile reflects the harmonious interaction between Wood's liver-centered energy and the Pig's native Water constitution. Their natural vitality is robust — they possess good physical reserves and strong recuperative ability. However, their tendency toward indulgence, combined with their habit of absorbing others' emotional stress, creates specific health vulnerabilities that require conscious management.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Pig's Water nature connects to the kidneys, bladder, and reproductive system. The Wood Pig's primary health vulnerability is excess — too much food, too much drink, too much emotional absorption, too much giving without replenishment. This pattern of excess burdens the liver and kidneys, the two organ systems most central to the Wood Pig's constitutional health.

The Wood Pig's health strategy should emphasize moderation, boundaries, and regular detoxification. Their bodies are naturally resilient but not invulnerable to the cumulative effects of overindulgence and self-neglect. The Wood Pig who learns to enjoy life's pleasures in moderation — rather than excess — discovers that their natural vitality sustains them far better than the feast-and-crash cycle their nature tends toward.`,

    bodyAreas: ['Liver', 'Kidneys', 'Digestive System', 'Lower Back'],

    exercises: [
      'Swimming or water activities',
      'Social sports or group fitness',
      'Gardening or outdoor work',
      'Gentle yoga or stretching',
    ],

    dietTips: [
      'Practice moderation as a form of self-love, not deprivation. The Wood Pig\'s love of food is genuine and can be honored without excess. Focus on quality over quantity — savor smaller portions of excellent food rather than consuming large volumes of mediocre food.',
      'Support liver and kidney health with hydrating, detoxifying foods: watermelon, cucumber, celery, lemon water, and herbal teas. These organs bear the brunt of the Wood Pig\'s indulgent tendencies and benefit from consistent dietary support.',
      'Reduce alcohol consumption. The Wood Pig\'s social nature and love of celebration often involves drinking, but their liver and kidneys are particularly sensitive to regular alcohol. Find ways to enjoy social gatherings that do not center on drinking.',
      'Include bitter greens and liver-supporting herbs: dandelion, milk thistle, turmeric, and artichoke. Regular liver support helps the Wood Pig metabolize the rich foods they are drawn to and maintains the emotional equilibrium that depends on healthy liver function.',
    ],

    mentalHealth:
      'The Wood Pig\'s primary mental health challenge is the management of emotional boundaries. Their empathic, absorptive nature means they take on the feelings of everyone around them — joy, sadness, anxiety, anger — without adequate filtration or processing. Over time, this emotional accumulation can lead to depression, emotional exhaustion, and a loss of identity as the Wood Pig\'s own feelings become indistinguishable from those they have absorbed from others. The Wood Pig benefits from practices that strengthen emotional boundaries: mindfulness meditation, energy work, and therapeutic approaches that help distinguish between their own feelings and those belonging to others. They should also be aware of their tendency to use comfort behaviors — food, spending, substances — as emotional coping mechanisms. These behaviors provide temporary relief but create long-term problems that compound the original distress. The most transformative mental health practice for the Wood Pig is learning to receive care with the same grace they give it. Allowing others to nurture, protect, and support them is not weakness or selfishness — it is the essential balance that makes their extraordinary generosity sustainable.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [2, 5, 8],
    colors: ['Green', 'Yellow', 'Brown'],
    direction: 'East',
    gemstones: ['Jade', 'Agate', 'Topaz'],
    flowers: ['Hydrangea', 'Daisy', 'Magnolia'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD PIGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Elvis Presley',
        profession: 'Singer/Cultural Icon',
        birthYear: 1935,
        description:
          'Elvis Presley\'s legendary generosity — famously giving away cars, jewelry, and money to friends and strangers alike — perfectly embodies the Wood Pig\'s extraordinary warmth and giving nature. His natural charisma, love of comfort, and ability to make everyone feel special reflect the sign\'s authentic, openhearted charm.',
      },
      {
        name: 'Kendall Jenner',
        profession: 'Model/Entrepreneur',
        birthYear: 1995,
        description:
          'Kendall Jenner\'s warm public persona and her successful navigation of the demanding fashion industry while maintaining close family ties reflect the Wood Pig\'s combination of social warmth and practical determination. Her ability to build a career on genuine appeal rather than controversy demonstrates the sign\'s natural likability.',
      },
      {
        name: 'Doja Cat',
        profession: 'Singer/Rapper',
        birthYear: 1995,
        description:
          'Doja Cat\'s creative abundance, playful authenticity, and ability to connect with audiences through genuinely entertaining content embody the Wood Pig\'s creative generosity and natural warmth. Her willingness to be silly, sincere, and utterly herself reflects the sign\'s refreshing lack of pretense.',
      },
      {
        name: 'Luciano Pavarotti',
        profession: 'Opera Singer',
        birthYear: 1935,
        description:
          'Luciano Pavarotti\'s massive talent, legendary warmth, and famous generosity toward young musicians exemplify the Wood Pig\'s combination of creative brilliance and nurturing care. His ability to bring joy to millions through his voice — and his genuine love of food, family, and fellowship — made him the embodiment of Wood Pig abundance.',
      },
      {
        name: 'Julie Andrews',
        profession: 'Actress/Singer/Author',
        birthYear: 1935,
        description:
          'Julie Andrews\'s extraordinary talent, gracious public presence, and dedication to children\'s literacy through her writing career embody the Wood Pig\'s blend of creative excellence and nurturing generosity. Her warmth, sincerity, and ability to bring joy to audiences across generations reflect the sign\'s enduring appeal.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Pig is the twelfth and final animal in the Chinese zodiac, occupying the position associated with the Earthly Branch Hai (亥) and the late night hours of 9pm to 11pm — the time of deep rest, contentment, and the quiet abundance that comes at the end of a full day. In Chinese mythology, the Pig symbolizes completion, satisfaction, and the generous enjoyment of life's rewards. The Pig is also famously represented in Chinese literature by Zhu Bajie (猪八戒), the lovable but flawed companion in Journey to the West, whose appetites and good heart make him one of literature's most endearing characters.

When combined with the Wood element, the Pig takes on the qualities of the generous provider — the figure who ensures that everyone at the table is fed, everyone in the community is cared for, and the fruits of shared labor are distributed with fairness and warmth. In classical Chinese thought, the Wood Pig represents the completion of the growth cycle: the moment when the tree bears fruit and that fruit is shared with all who need nourishment.`,

    symbolism: `The Wood Pig symbolizes generous abundance, communal prosperity, and the deep satisfaction that comes from sharing life's gifts with others. In traditional Chinese symbolism, the Pig represents wealth, good fortune, and the honest enjoyment of material blessings — not greed or excess, but the natural pleasure of a life well-lived and generously shared. Wood adds the dimension of growth and nurturing, creating a symbol of abundance that renews itself through giving.

The Wood Pig reminds us that true wealth is not what we accumulate but what we share. In a world that often equates success with individual acquisition, the Wood Pig stands as a powerful symbol of the prosperity that flows from generosity — the paradoxical truth that giving creates more abundance than hoarding ever can.`,

    modernInterpretation: `In contemporary culture, the Wood Pig archetype resonates with the growing movement toward generosity economics, community-centered business, and the recognition that well-being is a collective rather than individual achievement. The Wood Pig represents the host, the nurturer, the community builder — the people who create abundance not by taking more but by ensuring that everyone has enough.

The 1995 Wood Pig generation has come of age in an era that increasingly values authenticity, community, and shared experience over individual status and material accumulation. Many of its members embody the sign's integration of creative talent and generous spirit — building platforms, businesses, and communities that prioritize genuine connection over competitive consumption. For future Wood Pig generations, this archetype suggests a continued evolution toward economies and lifestyles that measure success not by what individuals accumulate but by how well communities thrive.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
