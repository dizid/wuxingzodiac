// ============================================
// WOOD HORSE (甲午) — The Free-Spirited Wanderer
// ============================================
// The Wood Horse combines the Horse's love of freedom
// and movement with Wood's flexible creativity, producing
// a joyful explorer who grows through experience and
// connection with the natural world.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'wood-horse',
  profile: getProfileBySlug('wood-horse')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Wood Horse is the most easygoing and socially gracious of all Horse-element combinations. The Horse — already defined by independence, energy, and a love of freedom — gains warmth, flexibility, and genuine concern for community through the Wood element's influence. Where the Fire Horse burns with intensity and the Metal Horse charges with determination, the Wood Horse moves with the flowing grace of a river finding its path through a forest.

People born under this sign possess a natural joie de vivre that is genuinely contagious. They bring humor, warmth, and optimism into every room they enter, making others feel welcome and energized. The Wood Horse is the friend who organizes the road trip, the colleague who lightens the mood during stressful deadlines, and the partner who keeps the relationship fresh with spontaneous adventures and creative surprises.

What makes the Wood Horse particularly appealing is their combination of free-spiritedness and genuine kindness. Unlike more self-centered Horse types, the Wood Horse cares deeply about the people in their life and will go out of their way to support, encourage, and include others. Their freedom-loving nature does not come at the expense of their relationships — they simply find creative ways to maintain both independence and connection, refusing to accept the false choice between the two.`,

    coreTraits: [
      'Free-Spirited',
      'Creative',
      'Sociable',
      'Optimistic',
      'Adaptable',
      'Warm-Hearted',
    ],

    strengths: [
      {
        trait: 'Social Intelligence',
        description:
          'The Wood Horse possesses exceptional social awareness — they read group dynamics instinctively, know exactly what to say to put people at ease, and create inclusive environments where diverse personalities can coexist. Their popularity is not pursued but earned through genuine warmth and an ability to make every person feel valued and interesting.',
      },
      {
        trait: 'Creative Adaptability',
        description:
          'Like a tree that bends with the wind, the Wood Horse adapts to changing circumstances with remarkable grace. They do not resist change but embrace it as an opportunity for growth and new experience. This flexibility, combined with the Horse\'s natural energy, makes them extraordinarily effective in dynamic, unpredictable environments.',
      },
      {
        trait: 'Joyful Energy',
        description:
          'The Wood Horse radiates an infectious enthusiasm for life that elevates everyone around them. Their optimism is not naive but deeply rooted — they have seen enough of the world to know its difficulties, yet they choose to focus on possibility rather than limitation. This quality makes them natural morale-builders and sources of renewed energy in any group.',
      },
      {
        trait: 'Cooperative Leadership',
        description:
          'The Wood element transforms the Horse\'s natural independence into something more collaborative. The Wood Horse leads through inclusion rather than command, building consensus and creating shared ownership of goals. Their teams work together not because they are told to but because the Wood Horse creates an environment where cooperation feels natural and rewarding.',
      },
    ],

    challenges: [
      {
        trait: 'Commitment Difficulties',
        description:
          'The Wood Horse\'s love of freedom and new experience can make long-term commitments feel claustrophobic. They may struggle to stay in one job, one relationship, or one city for extended periods, always sensing that something more exciting awaits around the next bend. Learning that depth requires staying is one of their most important life lessons.',
      },
      {
        trait: 'Superficiality',
        description:
          'The Wood Horse\'s social nature and love of variety can produce a pattern of wide but shallow engagement. They may have hundreds of acquaintances but few deep friendships, know a little about many subjects but master none, and skate across the surface of experiences without ever diving deep enough to discover what lies beneath.',
      },
      {
        trait: 'Emotional Avoidance',
        description:
          'When faced with difficult emotions — grief, anger, disappointment — the Wood Horse\'s instinct is to move. They will change the subject, suggest an activity, or physically leave the situation rather than sitting with uncomfortable feelings. This avoidance prevents the emotional processing that leads to genuine growth and deeper relationships.',
      },
      {
        trait: 'Inconsistency',
        description:
          'The Wood Horse\'s adaptability has a shadow side: they can be unreliable. Their enthusiasm for new plans can lead them to abandon previous commitments, and their flexible nature can make it difficult for others to know where they stand. People close to the Wood Horse may feel they can never fully depend on them.',
      },
    ],

    elementInfluence: `Wood's influence on the Horse creates an interesting dynamic. The Horse is natively associated with Fire — it corresponds to the Earthly Branch Wu (午), the peak of yang energy at high noon and midsummer. Wood's relationship with Fire is productive: Wood feeds Fire, meaning the Wood element naturally fuels the Horse's inherent energy and passion. However, unlike the double-fire intensity of the Fire Horse, Wood's influence is gentler and more nurturing. It channels the Horse's energy into creative, growth-oriented directions rather than pure intensity. The Wood element also adds compassion, flexibility, and a connection to nature that grounds the Horse's restless spirit. The result is a Horse who runs not from something but toward something — growth, connection, and the joy of living fully.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Wood Horse's compatibility reflects their need for partners who appreciate both their free spirit and their genuine warmth. They need someone who can keep up with their pace, enjoy their spontaneity, and provide enough emotional grounding to prevent the relationship from becoming all surface and no depth. The Horse belongs to the third trine alongside the Tiger and the Dog, sharing these animals' courage, energy, and commitment to authenticity.

The Wood element expands the Horse's compatibility by adding flexibility and empathy. The Wood Horse is more willing to compromise and adapt than other Horse types, making them a viable partner for a wider range of signs. However, they still struggle with partners who are controlling, possessive, or fundamentally opposed to the adventurous life the Wood Horse craves.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 91,
        summary:
          'A thrilling third-trine partnership of two adventurous spirits. The Wood Tiger\'s courageous leadership and compassionate nature perfectly complement the Wood Horse\'s free-spirited warmth. Sharing the same element creates deep natural understanding, and their trine compatibility ensures mutual respect for each other\'s independence. Together, they explore, create, and grow — the adventure of a lifetime.',
      },
      {
        slug: 'water-dog',
        name: 'Water Dog',
        score: 87,
        summary:
          'A beautifully balanced third-trine alliance. The Water Dog\'s loyal devotion and emotional depth provide the grounding the Wood Horse needs, while Water nourishes Wood in the productive cycle. The Dog\'s faithfulness reassures the Horse\'s restless heart, and the Horse\'s joyful energy prevents the Dog\'s life from becoming too serious. Both value authenticity and fairness.',
      },
      {
        slug: 'fire-goat',
        name: 'Fire Goat',
        score: 85,
        summary:
          'A creatively inspiring pairing. The Fire Goat\'s artistic passion and emotional warmth resonate deeply with the Wood Horse\'s creative spirit — Wood feeds Fire, creating a productive flow of energy. The Goat provides the emotional depth that the Horse sometimes lacks, while the Horse brings adventure and spontaneity to the Goat\'s life.',
      },
    ],

    challengingMatches: [
      {
        slug: 'water-rat',
        name: 'Water Rat',
        score: 30,
        summary:
          'The Horse and Rat sit in direct opposition on the zodiac wheel. The Water Rat\'s strategic, security-focused nature fundamentally clashes with the Wood Horse\'s spontaneous, freedom-loving approach. The Rat plans; the Horse improvises. The Rat saves; the Horse spends on experiences. These opposing instincts create friction that requires constant compromise.',
      },
      {
        slug: 'metal-ox',
        name: 'Metal Ox',
        score: 32,
        summary:
          'The Metal Ox\'s rigid determination and love of routine is incompatible with the Wood Horse\'s need for variety and spontaneity. Metal cuts Wood, creating an energetic friction where the Ox\'s structured expectations feel like chains to the Horse\'s free spirit. Both signs are too stubborn to consistently yield, leading to chronic conflict.',
      },
      {
        slug: 'earth-rooster',
        name: 'Earth Rooster',
        score: 40,
        summary:
          'The Earth Rooster\'s meticulous, detail-oriented nature clashes with the Wood Horse\'s big-picture, go-with-the-flow approach. The Rooster\'s criticism of the Horse\'s inconsistency feels harsh and confining, while the Horse finds the Rooster\'s perfectionism exhausting and joyless. Their different tempos make finding a shared rhythm difficult.',
      },
    ],

    elementAffinity: `Wood's productive relationship with Fire makes the Wood Horse particularly compatible with Fire-element partners, who bring passion and excitement that the Horse naturally fuels. Water-element partners nourish the Wood Horse's growth, providing emotional depth and intuitive support. Earth-element partners can provide grounding, though the Horse may resist the stability Earth offers. Metal-element partners present the greatest challenge, as Metal cuts Wood — these relationships can feel restrictive and critical, undermining the Wood Horse's joyful, expansive nature.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `The Wood Horse thrives in careers that combine variety, creativity, and meaningful human interaction. They are not suited for desk-bound, repetitive work or rigid corporate structures — the Wood Horse needs movement, novelty, and the freedom to approach problems creatively. Their ideal role allows them to travel, collaborate with diverse people, and apply their natural social intelligence to real-world challenges.

The Wood Horse's greatest professional asset is their ability to connect with people across backgrounds and create productive, enjoyable working environments. They are natural facilitators, event organizers, and team builders — the people who turn a group of strangers into a cohesive unit and a dull project into an engaging experience.

Financially, the Wood Horse tends toward experiential spending — travel, dining, events, and shared adventures take priority over savings and investments. They are generous with their resources, always willing to pick up the tab or fund a group experience. This generosity creates goodwill and strong social bonds but can leave them financially vulnerable during lean periods. The wisest Wood Horses learn to balance their love of experience with disciplined saving.`,

    idealCareers: [
      'Travel Writer or Photographer',
      'Event Coordinator',
      'Public Relations Specialist',
      'Outdoor Education Instructor',
      'Sales Representative',
      'Tour Guide or Cultural Ambassador',
      'Social Media Manager',
      'Landscape Designer',
    ],

    financialStyle:
      'The Wood Horse values experiences over possessions and invests in memories rather than material assets. They spend freely on travel, social gatherings, and shared adventures, viewing money as a means to live fully rather than a resource to be accumulated. Their earning capacity is strong — their social skills and adaptability make them marketable across industries — but their saving discipline is weak. The Wood Horse who establishes automatic savings and investment plans before their spending instincts can intervene builds financial resilience without sacrificing their experiential lifestyle.',

    tips: [
      'Develop depth in one professional area while maintaining your versatile skill set. Your adaptability allows you to do many things well, but career advancement often rewards deep expertise. Choose one domain to master while keeping your other skills as valuable complements.',
      'Build a professional reputation for reliability. Your social skills and creativity get you in the door, but consistent follow-through keeps you there. Create systems — calendars, reminders, accountability partners — that compensate for your naturally scattered attention.',
      'Leverage your networking talent for long-term career growth. The relationships you build naturally are your most valuable professional asset. Nurture them strategically, staying in touch with key contacts and offering value before you need anything in return.',
      'Automate your finances. Your relationship with money is best managed through systems that work without your active involvement — automatic transfers to savings, scheduled investment contributions, and spending alerts that flag when you are exceeding your budget.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `The Wood Horse in love is warm, fun, and genuinely devoted — when they choose to commit. Their romantic journey often involves a period of exploration and experimentation before they settle into a lasting partnership, as they need to experience enough of the world to know what they truly want. The Wood Horse falls in love easily and often, but falls deeply only rarely — and that depth, once reached, creates a bond of surprising loyalty and tenderness.

In relationships, the Wood Horse is the partner who keeps things fresh. They plan spontaneous dates, surprise their partner with adventures, and refuse to let routine steal the excitement from their shared life. Their affection is expressed through shared experience — they want to see the world with you, try new things together, and build a relationship that is a story worth telling.

The Wood Horse's challenge in love is staying. Their instinct when things become difficult, boring, or emotionally heavy is to move — to find a new adventure, a new perspective, or simply a change of scenery. The deepest growth in Wood Horse relationships comes from learning that the most rewarding adventures are often the internal ones: the journey of truly knowing another person and allowing yourself to be truly known in return.`,

    loveStyle:
      'The Wood Horse loves through shared adventure, joyful companionship, and an infectious enthusiasm for life together. They are affectionate, spontaneous partners who express their feelings through experience — the surprise road trip, the new restaurant, the midnight conversation under the stars. They need a partner who matches their energy, appreciates their spontaneity, and understands that their need for freedom is not a rejection of intimacy but a condition for it.',

    idealPartnerTraits: [
      'Adventurous and Flexible',
      'Emotionally Self-Sufficient',
      'Sense of Humor',
      'Respects Independence',
      'Enjoys Spontaneity',
    ],

    tips: [
      'Invest in the boring parts of love. Grand adventures are wonderful, but lasting relationships are built on the willingness to be ordinary together — to handle logistics, navigate disagreements, and show up on unremarkable days with the same warmth you bring to exciting ones.',
      'Practice emotional depth. Your instinct to keep things light and fun can prevent the deeper bonding that transforms a relationship from enjoyable to transformative. Allow difficult conversations, sit with sadness, and resist the urge to fix every heavy moment with humor.',
      'Communicate your commitment clearly and often. Your partner may interpret your free-spirited nature as uncommitted. Explicit, verbal reassurance — "I choose you, I am here, I am not going anywhere" — provides the security that your actions alone may not convey.',
      'Find a partner who has their own adventures. The healthiest Wood Horse relationships are between two people with rich, independent lives who choose to share their journeys. A partner who depends on you for all their excitement will eventually feel like a weight rather than a companion.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Wood Horse possesses natural athleticism and vitality. Their bodies are built for movement — strong, flexible, and capable of sustained physical effort. The combination of Wood's connection to the musculoskeletal system and the Horse's inherent physical energy creates a constitution that thrives on activity and deteriorates quickly under sedentary conditions.

In Traditional Chinese Medicine, Wood governs the liver, gallbladder, tendons, and eyes, while the Horse's Fire nature connects to the heart and circulatory system. The Wood Horse's primary health vulnerabilities arise from their tendency to push physical limits without adequate recovery, their irregular eating and sleeping habits, and their use of activity as a way to avoid emotional processing.

The Wood Horse's health strategy should emphasize consistent rhythms within a dynamic lifestyle. They need regular meals, adequate sleep, and recovery time between bursts of activity — the structural basics that their spontaneous nature tends to neglect. The Wood Horse who establishes a foundation of consistent self-care can sustain their active lifestyle indefinitely; the one who relies purely on natural energy will eventually deplete their reserves.`,

    bodyAreas: ['Liver', 'Tendons and Joints', 'Cardiovascular System', 'Legs and Feet'],

    exercises: [
      'Horseback riding or equestrian sports',
      'Trail running or cross-country',
      'Cycling and mountain biking',
      'Dance or movement arts',
    ],

    dietTips: [
      'Prioritize fuel over flavor. The Wood Horse\'s love of social dining and new culinary experiences can lead to a diet rich in variety but poor in nutritional consistency. Ensure that the foundation of your eating is whole, nutritious food, regardless of what restaurant adventures you add on top.',
      'Support liver and tendon health with foods rich in vitamins A, C, and E: sweet potatoes, citrus fruits, nuts, and seeds. The Wood element\'s governance of tendons makes these nutrients particularly important for the physically active Wood Horse.',
      'Eat regular meals even when your schedule is unpredictable. Pack portable, nutritious snacks — nuts, fruit, quality protein bars — that prevent the blood sugar crashes that your irregular eating habits create.',
      'Moderate alcohol intake. The Wood Horse\'s social nature often involves drinking, but their liver\'s sensitivity to the Wood element means they may be more susceptible to the negative effects of regular alcohol consumption than they realize.',
    ],

    mentalHealth:
      'The Wood Horse\'s primary mental health challenge is the tendency to use activity and novelty as emotional avoidance strategies. When painful emotions arise, the Wood Horse runs — literally and figuratively — seeking new experiences, new environments, or new relationships rather than processing what they feel. This pattern can prevent emotional maturity and create a cycle of unfinished emotional business that accumulates over time. The Wood Horse benefits from grounding practices that encourage stillness and reflection — journaling, meditation, or simply sitting quietly in nature. Therapy can be challenging for this sign, as it requires the sustained, focused introspection they naturally avoid, but it is profoundly effective when they commit to it. The Wood Horse should also be aware of their vulnerability to restless anxiety — a form of agitation that comes not from specific worries but from the general inability to be still. Regular physical exercise helps manage this restlessness, but it should be complemented by practices that build the capacity for inner peace.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Green', 'Yellow', 'Turquoise'],
    direction: 'East',
    gemstones: ['Aventurine', 'Turquoise', 'Peridot'],
    flowers: ['Sunflower', 'Fern', 'Wildflower'],
    season: 'Spring',
  },

  // ----------------------------------------
  // FAMOUS WOOD HORSES
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Kristen Stewart',
        profession: 'Actress',
        birthYear: 1990,
        description:
          'Kristen Stewart\'s fiercely independent career choices and refusal to conform to Hollywood conventions embody the Wood Horse\'s free-spirited nature. Her evolution from blockbuster actress to critically acclaimed indie star reflects the sign\'s need for authenticity and creative freedom over commercial safety.',
      },
      {
        name: 'Jennifer Lawrence',
        profession: 'Actress',
        birthYear: 1990,
        description:
          'Jennifer Lawrence\'s natural warmth, spontaneous humor, and unfiltered authenticity perfectly embody the Wood Horse\'s infectious social charm. Her ability to remain grounded and genuine despite extraordinary fame reflects the Wood element\'s influence on the Horse\'s already magnetic personality.',
      },
      {
        name: 'Steve McQueen',
        profession: 'Actor',
        birthYear: 1930,
        description:
          'Steve McQueen — the "King of Cool" — embodied the Wood Horse\'s combination of restless independence and magnetic charisma. His passion for motorcycles, racing, and physical adventure, combined with his effortless screen presence, made him the ultimate free-spirited wanderer of Hollywood\'s golden age.',
      },
      {
        name: 'Clint Eastwood',
        profession: 'Actor/Director',
        birthYear: 1930,
        description:
          'Clint Eastwood\'s remarkably long and varied career — from iconic Western star to Oscar-winning director — demonstrates the Wood Horse\'s creative adaptability and refusal to be defined by any single role. His independent filmmaking approach and physical vitality well into his nineties reflect the sign\'s natural endurance and free-spirited creativity.',
      },
      {
        name: 'Buzz Aldrin',
        profession: 'Astronaut',
        birthYear: 1930,
        description:
          'As the second human to walk on the Moon, Buzz Aldrin literally embodied the Wood Horse\'s drive to explore beyond all known frontiers. His lifelong advocacy for space exploration and his restless, adventurous spirit well into old age reflect the sign\'s insatiable curiosity and love of the unknown.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Horse is the seventh animal in the Chinese zodiac, associated with the Earthly Branch Wu (午) and the peak of yang energy at high noon. In Chinese mythology, the Horse represents speed, freedom, and the untamed spirit of the open plains. Horses have been central to Chinese civilization for millennia — as instruments of war, symbols of imperial power, and metaphors for the human desire to run free.

When combined with the Wood element, the Horse takes on the qualities of spring's expansive energy — the force that drives growth outward and upward. The Wood Horse represents the wild pony in the spring meadow: unbridled, joyful, and in perfect harmony with the natural world. In classical Chinese thought, this combination embodies the ideal of living in flow with nature's rhythms — not fighting against the current of life but moving with it, finding the path of least resistance that leads to the most fulfilling destinations.`,

    symbolism: `The Wood Horse symbolizes joyful freedom, creative exploration, and the growth that comes from embracing new experiences. In traditional Chinese symbolism, the Horse represents yang energy at its most dynamic — speed, power, and the courage to charge forward. Wood adds the dimension of organic, flexible growth, tempering the Horse's raw power with grace and adaptability.

The Wood Horse is also a symbol of the journey itself — the idea that life's meaning is found not in the destination but in the quality of the travel. Like a tree that grows wherever the light leads it, the Wood Horse follows curiosity, joy, and authentic connection wherever they lead, trusting that the journey will provide everything that is needed.`,

    modernInterpretation: `In contemporary culture, the Wood Horse archetype resonates with the growing embrace of nomadic lifestyles, experiential values, and the prioritization of freedom and authenticity over security and convention. The Wood Horse represents the digital nomad, the perpetual traveler, the creative professional who builds a life around experience rather than accumulation.

The 1990 Wood Horse generation came of age in the era of social media and the experience economy, and many of its members embody the sign's values of authenticity, adventure, and joyful connection. For future Wood Horse generations, this archetype suggests a continued evolution toward lifestyles that integrate work, travel, and creative expression — refusing the traditional boundaries between career and adventure, productivity and play.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
