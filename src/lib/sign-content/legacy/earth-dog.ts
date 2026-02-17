// ============================================
// EARTH DOG (戊戌) — The Unwavering Sentinel
// ============================================
// The Earth Dog doubles down on the Dog's inherent Earth
// nature, creating a personality of exceptional loyalty,
// moral clarity, and unwavering commitment to justice
// and the protection of those they love.

import { getProfileBySlug } from './profiles'
import type { SignContent } from '@/types'

const content: SignContent = {
  slug: 'earth-dog',
  profile: getProfileBySlug('earth-dog')!,

  // ----------------------------------------
  // PERSONALITY
  // ----------------------------------------
  personality: {
    overview: `The Earth Dog is the most stable, loyal, and morally grounded expression of the Dog archetype. The Dog — already renowned for faithfulness, justice, and protective devotion — is reinforced by the Earth element, creating a double-earth personality of extraordinary reliability and principled strength. Where other signs may shift their loyalties or compromise their values under pressure, the Earth Dog holds firm with a steadfastness that is both inspiring and, occasionally, immovable.

People born under this sign are the moral anchors of their communities. They possess an innate sense of right and wrong that is not theoretical or philosophical but deeply practical — they know in their bones when something is fair and when it is not, and they act on that knowledge with quiet, persistent courage. The Earth Dog does not crusade loudly for justice; they simply refuse to participate in injustice, and their refusal is so consistent and principled that it reshapes the behavior of everyone around them.

What distinguishes the Earth Dog from other moral signs is their warmth. They are not cold idealists or judgmental puritans — they are genuinely kind, deeply empathetic people who extend their protective instinct to everyone who needs it. An Earth Dog's friendship is one of life's great gifts: unconditional, dependable, and expressed through a thousand small acts of practical care that accumulate over years into something profoundly sustaining.`,

    coreTraits: [
      'Loyal',
      'Just',
      'Protective',
      'Steady',
      'Compassionate',
      'Principled',
    ],

    strengths: [
      {
        trait: 'Unshakable Loyalty',
        description:
          'The Earth Dog\'s loyalty is the most reliable force in the Chinese zodiac. Once they have committed to a person, cause, or community, their devotion does not waver — not when times are hard, not when it becomes inconvenient, not when everyone else has moved on. This loyalty is not blind but principled: they remain faithful because they have chosen carefully and because their word, once given, is sacred.',
      },
      {
        trait: 'Moral Clarity',
        description:
          'Earth Dogs possess an instinctive sense of justice that cuts through complexity and ambiguity. Where others agonize over ethical dilemmas, the Earth Dog often sees the right path clearly and immediately. This moral clarity is not rigid dogma but a deep attunement to fairness that guides their decisions with remarkable consistency.',
      },
      {
        trait: 'Protective Warmth',
        description:
          'The Earth Dog\'s protective instinct is both fierce and gentle. They create zones of safety around the people they love — not through aggression or control, but through consistent presence, practical support, and the reassuring knowledge that someone is always watching out for them. Their warmth makes people feel genuinely secure.',
      },
      {
        trait: 'Grounded Dependability',
        description:
          'Earth Dogs are the people you call in a crisis — not because they are flashy or dramatic, but because they will come, they will help, and they will stay until the situation is resolved. Their double-earth stability makes them an anchor in turbulent times, providing the calm, practical support that enables everyone around them to function.',
      },
    ],

    challenges: [
      {
        trait: 'Chronic Worry',
        description:
          'The Earth Dog\'s protective nature produces a constant awareness of potential threats that can escalate into chronic anxiety. They worry about their loved ones, their community, the state of the world — and this worry, while motivated by genuine care, can become debilitating. Learning to distinguish between useful vigilance and unproductive anxiety is essential for their wellbeing.',
      },
      {
        trait: 'Pessimism',
        description:
          'Earth Dogs tend toward a cautious, sometimes pessimistic worldview. Their awareness of potential dangers and injustices can overshadow their ability to appreciate what is going well. This pessimism, while it keeps them prepared for difficulty, can drain the joy from their lives and the lives of those around them.',
      },
      {
        trait: 'Judgmental Rigidity',
        description:
          'The Earth Dog\'s strong moral compass can become a weapon when turned against others. They may judge people harshly for failing to meet their ethical standards, holding grudges against those they perceive as having acted unjustly. This rigidity can isolate them from the imperfect but well-meaning people who make up most of humanity.',
      },
      {
        trait: 'Self-Sacrifice',
        description:
          'Earth Dogs frequently prioritize others\' needs above their own, sacrificing their time, energy, and personal desires in service of those they feel responsible for protecting. While noble in intention, this pattern of self-sacrifice eventually leads to burnout, resentment, and a quiet bitterness that puzzles the very people they have been serving.',
      },
    ],

    elementInfluence: `In Wu Xing theory, the Dog is inherently associated with the Earth element — it is the animal of autumn's transition, connected to the harvest season and the protective energy of the land. When the Earth element is added to this naturally earthy animal, the result is a double-earth combination similar to the Earth Ox but with a distinctly different character. Where the Earth Ox's double-earth manifests as immovable stability, the Earth Dog's double-earth expresses as protective grounding — the earth as shelter, shield, and sanctuary. The Earth Dog embodies Earth's most nurturing and defensive qualities: the wall that protects the garden, the den that shelters the young, the ground that absorbs storms so that life above can continue uninterrupted.`,
  },

  // ----------------------------------------
  // COMPATIBILITY
  // ----------------------------------------
  compatibility: {
    overview: `The Earth Dog's compatibility profile favors partners who share their values of loyalty and fairness while providing the warmth and optimism that counterbalances the Dog's tendency toward worry and pessimism. They need someone who respects their moral principles without feeling judged by them, and who brings enough lightness to the relationship to remind the Earth Dog that life is not only a battle to be fought but also a gift to be enjoyed.

In traditional Chinese astrology, the Dog belongs to the Third Trine alongside the Tiger and the Horse — three signs united by courage, action, and a strong sense of justice. These natural allies share the Dog's willingness to fight for what is right. The Dog's most challenging pairing is with the Dragon, its zodiac opposite, where the Dog's egalitarian values clash with the Dragon's natural authority and appetite for grandeur.`,

    bestMatches: [
      {
        slug: 'wood-tiger',
        name: 'Wood Tiger',
        score: 92,
        summary:
          'An exceptionally strong partnership between two courageous, principled signs. The Wood Tiger\'s bold leadership and compassionate energy complement the Earth Dog\'s protective loyalty perfectly. Both signs share a deep commitment to justice and fairness, creating a partnership that is both personally fulfilling and socially impactful. Wood feeds Earth gently, adding growth and flexibility to the Dog\'s stable nature.',
      },
      {
        slug: 'earth-horse',
        name: 'Earth Horse',
        score: 88,
        summary:
          'Two Earth signs from the same Trine create a partnership of deep mutual understanding and shared values. The Earth Horse\'s optimistic energy and social warmth perfectly counterbalance the Earth Dog\'s cautious vigilance. The Horse reminds the Dog that life can be joyful; the Dog provides the steadfast loyalty that the Horse needs to feel truly secure.',
      },
      {
        slug: 'water-rabbit',
        name: 'Water Rabbit',
        score: 85,
        summary:
          'The Water Rabbit\'s gentle sensitivity and emotional intelligence soften the Earth Dog\'s sometimes rigid demeanor. The Rabbit provides the warmth and emotional nurturing that the Dog craves but rarely seeks, while the Dog provides the security and protection that allows the Rabbit to fully relax. Water nourishes Earth, adding emotional depth to the Dog\'s grounded nature.',
      },
    ],

    challengingMatches: [
      {
        slug: 'earth-dragon',
        name: 'Earth Dragon',
        score: 32,
        summary:
          'The zodiac\'s classic opposition intensified by shared stubbornness. The Earth Dragon\'s commanding authority and appetite for grandeur clash with the Earth Dog\'s egalitarian principles and suspicion of power. The Dog sees the Dragon as arrogant; the Dragon sees the Dog as insubordinate. Both are deeply principled but their principles point in opposing directions.',
      },
      {
        slug: 'fire-rooster',
        name: 'Fire Rooster',
        score: 38,
        summary:
          'The Fire Rooster\'s critical perfectionism and sharp tongue wound the Earth Dog\'s sensitive, justice-oriented nature. The Dog interprets the Rooster\'s criticism as unfairness, while the Rooster sees the Dog\'s protective instincts as unnecessary hovering. Fire\'s aggressive energy overwhelms the Dog\'s grounded calm.',
      },
      {
        slug: 'wood-goat',
        name: 'Wood Goat',
        score: 42,
        summary:
          'Despite shared good intentions, the Wood Goat\'s emotional sensitivity and need for constant reassurance can exhaust the Earth Dog\'s protective resources. The Dog may feel perpetually responsible for the Goat\'s emotional wellbeing without receiving adequate support in return. Wood depletes Earth, potentially draining the Dog\'s grounded stability.',
      },
    ],

    elementAffinity: `As a double-earth sign, the Earth Dog has distinctive elemental dynamics. Fire signs are natural allies — Fire creates Earth in the productive cycle, providing warmth, energy, and optimism that counterbalance the Dog's cautious nature. Metal signs benefit from the Earth Dog's support (Earth creates Metal), creating productive partnerships where the Dog's grounding nurtures Metal's ambitions. Water signs add emotional depth and flexibility, softening the Dog's sometimes rigid stance. Wood signs present the greatest challenge, as Wood controls Earth — strong Wood personalities may drain the Earth Dog's protective reserves, demanding the nourishment without offering equivalent support.`,
  },

  // ----------------------------------------
  // CAREER
  // ----------------------------------------
  career: {
    overview: `Earth Dogs excel in careers that align with their deeply held values of fairness, protection, and service. They are drawn to work that makes a tangible difference in people's lives and that operates within a clear ethical framework. The ideal Earth Dog career allows them to protect, serve, and advocate for those who cannot protect themselves — combining their moral clarity with their practical reliability to create real, measurable improvements in the world.

The Earth Dog's work style is steady, principled, and quietly effective. They are not self-promoters or political operators — they simply do excellent work, treat people fairly, and maintain their standards regardless of external pressure. This integrity earns them enormous respect from colleagues and clients, even if it sometimes limits their advancement in organizations that reward ambition over substance.

Earth Dogs make exceptional professionals in roles that require trust, discretion, and moral judgment. They are the social workers, the public defenders, the nonprofit leaders, and the community organizers who show up day after day, year after year, doing difficult, often thankless work because it needs to be done and because they believe in the cause.`,

    idealCareers: [
      'Social Worker',
      'Judge/Magistrate',
      'Nonprofit Director',
      'School Counselor',
      'Veterinarian',
      'Building Inspector',
      'Park Ranger',
      'Community Organizer',
    ],

    financialStyle:
      'Earth Dogs are conservative, responsible money managers who prioritize security and fairness over wealth accumulation. They save steadily, spend frugally, and are generous with causes and people they believe in. They are uncomfortable with financial inequality and may feel guilty about their own prosperity, leading them to give away more than they can comfortably afford. Their financial weakness is excessive generosity combined with inadequate self-advocacy — they may under-earn and over-give, gradually depleting their own security. The Earth Dog who learns to treat their own financial health as a prerequisite for sustained service to others achieves a much more sustainable balance.',

    tips: [
      'Seek careers where your moral clarity and protective instinct are valued and compensated. Social work, law, public service, and nonprofit leadership all reward the qualities that come most naturally to you, allowing you to build a satisfying career doing work that matters.',
      'Protect yourself from burnout through deliberate boundaries and self-care. Your tendency to give everything to your cause or your community can leave you depleted and bitter. Regular rest, personal interests outside work, and relationships that nourish rather than drain you are essential for sustainability.',
      'Develop your ability to work within imperfect systems. Your strong sense of justice may cause you to disengage from organizations that fail to meet your ethical standards, but meaningful change often requires working within flawed institutions rather than walking away from them.',
      'Advocate for your own advancement as a moral obligation, not vanity. The more authority and resources you accumulate, the greater your capacity to serve and protect. View career advancement as a tool for expanding your positive impact rather than a selfish pursuit.',
    ],
  },

  // ----------------------------------------
  // LOVE
  // ----------------------------------------
  love: {
    overview: `In love, the Earth Dog is the most faithful, devoted, and emotionally steady partner in the Chinese zodiac. They love with a constancy and depth that is rare and precious — a love expressed not through dramatic gestures or passionate declarations but through the daily, unwavering commitment to being present, reliable, and protective. Being loved by an Earth Dog means never having to wonder whether they will be there; the only question is whether you will notice and appreciate the quiet devotion that is always flowing in your direction.

Earth Dogs approach love with characteristic seriousness. They do not fall in love casually or pursue romantic excitement for its own sake. They are looking for a life partner — someone to build with, to protect, and to grow old alongside. When they find that person, their commitment is absolute and their loyalty is unshakable.

The Earth Dog's primary challenge in love is allowing themselves to receive as much as they give. Their protective, self-sacrificing nature can create a dynamic where they give endlessly while quietly accumulating resentment that their own needs go unmet. The healthiest Earth Dog relationships are those where both partners consciously practice mutual care, and where the Dog feels safe enough to express their own vulnerability and needs.`,

    loveStyle:
      'The Earth Dog loves through steadfast presence and protective care. Their romantic expression is understated but deeply sincere — they show love by being dependably present, by noticing and responding to their partner\'s needs, by maintaining the stability of the shared home, and by standing guard against anything that threatens the relationship. They are physically affectionate in a warm, grounding way and deeply loyal to their partner. Their greatest romantic gift is the sense of safety they create — the unshakeable knowledge that, whatever happens, the Earth Dog will be there.',

    idealPartnerTraits: [
      'Loyal',
      'Warm and Optimistic',
      'Emotionally Open',
      'Appreciative',
      'Fair-Minded',
    ],

    tips: [
      'Express your needs directly rather than waiting for your partner to intuit them. Your self-sacrificing nature can create a pattern where you give everything while silently resenting that your own needs go unmet. Your partner cannot meet needs they do not know about.',
      'Allow your partner to take care of you. Receiving care is not weakness — it is the foundation of mutual partnership. Practice accepting help, comfort, and emotional support with the same grace you bring to offering it.',
      'Manage your worry consciously within the relationship. Your tendency to catastrophize about potential threats can create an atmosphere of anxiety that undermines the very security you are trying to protect. Share your concerns but also practice letting go of worries that do not require action.',
      'Cultivate joy and playfulness alongside your natural seriousness. Your partner fell in love with you, not a security system. Make space for fun, spontaneity, and lighthearted moments that remind both of you why you chose this partnership.',
    ],
  },

  // ----------------------------------------
  // HEALTH
  // ----------------------------------------
  health: {
    overview: `The Earth Dog possesses a solid, enduring constitution that sustains them through the heavy demands of their protective, service-oriented lifestyle. However, their double-earth nature makes them particularly susceptible to conditions associated with worry, stagnation, and the cumulative effects of chronic stress carried silently over long periods.

In Traditional Chinese Medicine, the Earth element governs the Stomach and Spleen — the digestive organs that transform nourishment into energy. The Earth Dog's health is closely tied to their digestive function, which is directly impacted by their emotional state. Worry — the emotion most associated with the Earth element — weakens the Spleen's function, creating a vicious cycle where anxiety produces digestive problems that further deplete the energy needed to manage anxiety.

The Earth Dog's health strategy should focus on managing worry and stress, maintaining regular digestive-supportive eating habits, and ensuring adequate movement to prevent the stagnation that double-earth constitutions are prone to.`,

    bodyAreas: ['Stomach', 'Spleen', 'Nervous System', 'Hips'],

    exercises: [
      'Walking the dog (literally)',
      'Hiking',
      'Tai chi',
      'Community sports leagues',
    ],

    dietTips: [
      'Eat regular, warm meals that support Spleen function. The Earth Dog\'s digestive system thrives on predictability and warmth — soups, stews, porridges, and steamed vegetables provide the gentle nourishment this constitution needs without overtaxing the sensitive Spleen.',
      'Reduce foods that increase dampness and worry. Excess sugar, dairy, and processed foods contribute to the sluggish, foggy state that worsens the Earth Dog\'s natural tendency toward anxiety. Clean, simple foods improve both physical and mental clarity.',
      'Incorporate calming teas and herbs into your daily routine. Chamomile, valerian, lemon balm, and passionflower support the nervous system and promote the relaxation that the perpetually vigilant Earth Dog struggles to access naturally.',
      'Eat mindfully and communally whenever possible. The Earth Dog\'s digestive health improves markedly when meals are shared with loved ones in a relaxed setting. Social eating satisfies both their Earth-element need for nourishment and their Dog-nature need for pack connection.',
    ],

    mentalHealth:
      'The Earth Dog\'s primary mental health vulnerability is generalized anxiety rooted in their hyper-vigilant protective nature. They carry the weight of anticipating threats to everyone they care about, which produces chronic worry that can escalate into clinical anxiety or depression when the burden becomes unsustainable. The Earth Dog\'s worry is particularly insidious because it feels productive — they believe that worrying is the same as protecting, and that relaxing their vigilance would leave their loved ones vulnerable. Cognitive behavioral therapy helps the Earth Dog distinguish between productive concern (which leads to specific, actionable steps) and unproductive worry (which generates suffering without reducing risk). Regular physical exercise, particularly walking or hiking in nature with a companion (human or canine), is profoundly beneficial. Service to others — paradoxically — can also be therapeutic when it is structured and bounded, allowing the Earth Dog to channel their protective energy into concrete, manageable action rather than diffuse, uncontrollable anxiety.',
  },

  // ----------------------------------------
  // LUCKY ATTRIBUTES
  // ----------------------------------------
  lucky: {
    numbers: [3, 4, 9],
    colors: ['Warm Brown', 'Deep Gold', 'Forest Green'],
    direction: 'Northwest',
    gemstones: ['Jasper', 'Amber', 'Smoky Quartz'],
    flowers: ['Rose', 'Chrysanthemum', 'Sunflower'],
    season: 'Late Summer',
  },

  // ----------------------------------------
  // FAMOUS EARTH DOGS
  // ----------------------------------------
  famous: {
    people: [
      {
        name: 'Michael Jackson',
        profession: 'Singer/Performer',
        birthYear: 1958,
        description:
          'Michael Jackson\'s extraordinary career demonstrates the Earth Dog\'s combination of tireless dedication and deep sensitivity. His obsessive attention to craft, his protective devotion to humanitarian causes (particularly children), and his vulnerability beneath a public persona of strength all reflect the Earth Dog\'s complex inner world.',
      },
      {
        name: 'Madonna',
        profession: 'Singer/Cultural Icon',
        birthYear: 1958,
        description:
          'Madonna\'s relentless determination and willingness to champion controversial causes reflect the Earth Dog\'s principled courage. Her decades-long career of reinvention, built on unwavering work ethic and a deep need for authentic expression, demonstrates the sign\'s extraordinary endurance and commitment to their vision.',
      },
      {
        name: 'Prince',
        profession: 'Musician',
        birthYear: 1958,
        description:
          'Prince\'s fiercely independent artistic vision and his principled battle for musicians\' rights against the music industry embody the Earth Dog\'s refusal to compromise on matters of fairness and justice. His legendary work ethic and protective loyalty to his musical legacy reflect the sign\'s unwavering commitment to what they believe in.',
      },
      {
        name: 'Tim Burton',
        profession: 'Film Director',
        birthYear: 1958,
        description:
          'Tim Burton\'s consistent artistic vision — dark, empathic, and fiercely protective of outsiders and misfits — reflects the Earth Dog\'s combination of sensitivity and protective loyalty. His career-long commitment to championing the misunderstood and the different demonstrates the sign\'s deep instinct to defend those who cannot defend themselves.',
      },
      {
        name: 'Kate Bush',
        profession: 'Singer/Songwriter',
        birthYear: 1958,
        description:
          'Kate Bush\'s uncompromising artistic integrity and her protective guardianship of her creative vision exemplify the Earth Dog\'s principled independence. Her willingness to withdraw from public life rather than compromise her work reflects the sign\'s deep commitment to authenticity over popularity.',
      },
    ],
  },

  // ----------------------------------------
  // CULTURAL SIGNIFICANCE
  // ----------------------------------------
  culture: {
    mythology: `The Dog holds a position of deep affection and respect in Chinese mythology as humanity's oldest and most faithful companion. In the zodiac origin story, the Dog arrived eleventh despite its speed because it stopped along the way to play in a river and help other animals — a founding myth that establishes the Dog's identity as the sign of loyal service and selfless care. The Dog is associated with the earthly branch Xu (戌), representing the hours of 7-9 PM when darkness falls and the watchdog takes up its post.

When the Earth element reinforces this already devoted guardian, the mythological Dog becomes the archetypal protector of hearth and home. The Earth Dog in Chinese folk tradition was associated with the spirits that guarded households, communities, and sacred boundaries. Earth Dog imagery was placed at gates and doorways as spiritual protection, combining the Dog's vigilant loyalty with Earth's grounding stability to create an unbreakable spiritual shield. Earth Dog years were considered auspicious for establishing new homes, strengthening community bonds, and beginning any enterprise that required trust, loyalty, and collective protection.`,

    symbolism: `The Earth Dog symbolizes faithful guardianship and moral courage grounded in practical action. In Wu Xing symbolism, this double-earth combination represents protection in its most fundamental form — not the aggressive defense of the warrior but the patient, watchful vigilance of the sentinel who stands guard through the night so that others can sleep safely.

The Earth Dog is also a powerful symbol of egalitarian justice. Unlike signs associated with hierarchical power (the Dragon, the Tiger), the Dog represents the moral authority that comes from below — the common person's instinctive sense of fairness that holds the powerful accountable. This makes the Earth Dog a symbol of democratic values and community-centered governance.`,

    modernInterpretation: `In contemporary culture, the Earth Dog archetype resonates powerfully with movements for social justice, community empowerment, and ethical leadership. In an era of institutional distrust and growing inequality, the Earth Dog represents the grassroots organizer, the whistleblower, the public servant, and the neighbor who quietly holds their community together through consistent, unglamorous acts of service.

The Earth Dog's modern relevance extends to the growing appreciation for loyalty as a counter-cultural value. In an era of transactional relationships and disposable connections, the Earth Dog's unwavering commitment to the people and causes they believe in represents a depth of devotion that our atomized society desperately needs. They remind us that the most important things in life are not achievements or possessions but the quality of our fidelity to the people and principles we hold most dear.`,
  },

  // ----------------------------------------
  // HOROSCOPE (Phase 4 placeholder)
  // ----------------------------------------
  horoscope: null,
}

export default content
