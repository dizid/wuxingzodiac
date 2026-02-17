// ============================================
// ZODIAC COMPATIBILITY MATRIX
// Full 12x12 animal compatibility + Wu Xing element modifiers
// ============================================

import type {
  ZodiacAnimal,
  ZodiacElement,
  AnimalCompatibility,
  CompatibilityResult,
} from '@/types'

// All 12 animals in order
const ANIMALS: ZodiacAnimal[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
]

// ============================================
// BASE ANIMAL COMPATIBILITY DATA (12x12)
// ============================================
// Built from traditional Chinese zodiac rules:
// - Trine groups (best friends): Rat-Dragon-Monkey, Ox-Snake-Rooster, Tiger-Horse-Dog, Rabbit-Goat-Pig
// - Secret friends: Rat-Ox, Tiger-Pig, Rabbit-Dog, Dragon-Rooster, Snake-Monkey, Horse-Goat
// - Clash pairs: Rat-Horse, Ox-Goat, Tiger-Monkey, Rabbit-Rooster, Dragon-Dog, Snake-Pig
// - Harm pairs: Rat-Goat, Ox-Horse, Tiger-Snake, Rabbit-Dragon, Monkey-Pig, Rooster-Dog

const animalCompatibility: Record<ZodiacAnimal, Record<ZodiacAnimal, AnimalCompatibility>> = {
  // ============================================
  // RAT
  // ============================================
  rat: {
    rat: {
      base: 70,
      summary: 'Two Rats understand each other\'s ambitions and resourcefulness. They share a clever outlook but may compete for the spotlight.',
      strengths: ['Mutual understanding of goals', 'Shared social nature', 'Combined resourcefulness', 'Quick-witted banter'],
      challenges: ['Competition for dominance', 'Tendency to hoard resources', 'Gossip and mistrust', 'Difficulty compromising'],
    },
    ox: {
      base: 82,
      summary: 'A secret friend pairing. The Rat\'s cleverness complements the Ox\'s steadfast determination, creating a powerful partnership built on mutual respect.',
      strengths: ['Rat brings creativity, Ox brings stability', 'Deep mutual loyalty', 'Complementary problem-solving', 'Shared appreciation for security'],
      challenges: ['Rat may find Ox too slow', 'Ox may see Rat as too cunning', 'Different social needs', 'Pace of life differences'],
    },
    tiger: {
      base: 55,
      summary: 'A neutral pairing that requires effort. The Rat\'s cautious nature clashes with the Tiger\'s bold impulsiveness, but mutual respect can bridge the gap.',
      strengths: ['Tiger protects Rat', 'Rat offers strategic thinking', 'Both are ambitious', 'Dynamic energy together'],
      challenges: ['Rat feels overshadowed', 'Tiger finds Rat too calculating', 'Power struggles', 'Different risk appetites'],
    },
    rabbit: {
      base: 58,
      summary: 'A neutral combination with subtle tensions. Both are social creatures but approach life from different angles — cunning versus diplomacy.',
      strengths: ['Both value home comforts', 'Social grace together', 'Intellectual connection', 'Shared appreciation for beauty'],
      challenges: ['Rabbit finds Rat too aggressive', 'Rat sees Rabbit as passive', 'Trust issues', 'Different conflict styles'],
    },
    dragon: {
      base: 90,
      summary: 'A trine match of exceptional power. The Rat\'s shrewdness and the Dragon\'s magnificence create an unstoppable duo with shared vision and ambition.',
      strengths: ['Mutual admiration', 'Rat strategizes while Dragon leads', 'Shared ambition', 'Powerful creative synergy'],
      challenges: ['Dragon may overshadow Rat', 'Both can be ego-driven', 'Rat may feel secondary', 'Intensity can burn out'],
    },
    snake: {
      base: 60,
      summary: 'Both are shrewd and calculating, creating intellectual attraction. However, mutual suspicion can undermine the bond if trust isn\'t established.',
      strengths: ['Intellectual compatibility', 'Shared love of strategy', 'Mutual ambition', 'Sophisticated tastes'],
      challenges: ['Mutual suspicion', 'Both guard secrets', 'Jealousy issues', 'Emotional distance'],
    },
    horse: {
      base: 30,
      summary: 'A clash pair with opposing energies. The Rat\'s careful planning clashes directly with the Horse\'s free-spirited independence, creating fundamental friction.',
      strengths: ['Exciting initial attraction', 'Both are energetic', 'Can learn from differences', 'Strong physical chemistry'],
      challenges: ['Fundamental value conflicts', 'Horse craves freedom, Rat wants security', 'Communication breakdowns', 'Opposing life philosophies'],
    },
    goat: {
      base: 40,
      summary: 'A harm pair with underlying tension. The Rat\'s pragmatism clashes with the Goat\'s dreamy nature, leading to frustration on both sides.',
      strengths: ['Goat softens Rat\'s edge', 'Rat grounds Goat\'s dreams', 'Creative potential together', 'Both enjoy comfort'],
      challenges: ['Rat finds Goat impractical', 'Goat feels judged by Rat', 'Financial disagreements', 'Different priorities'],
    },
    monkey: {
      base: 88,
      summary: 'A trine match full of wit and adventure. Both are clever, resourceful, and love a good scheme — together they are brilliantly inventive.',
      strengths: ['Endless mental stimulation', 'Shared humor and playfulness', 'Creative problem-solving', 'Mutual admiration'],
      challenges: ['Can become too scheming together', 'May lack emotional depth', 'Competition for cleverness', 'Restlessness as a couple'],
    },
    rooster: {
      base: 55,
      summary: 'A neutral pairing with friction potential. The Rat\'s subtlety contrasts with the Rooster\'s bluntness, requiring patience from both sides.',
      strengths: ['Rooster\'s honesty balances Rat\'s cunning', 'Both are hardworking', 'Mutual respect for intelligence', 'Complementary detail-orientation'],
      challenges: ['Rooster\'s criticism stings Rat', 'Rat\'s secrecy annoys Rooster', 'Different communication styles', 'Social friction'],
    },
    dog: {
      base: 58,
      summary: 'A workable neutral pair. The Dog\'s loyalty appeals to the Rat, but the Dog\'s idealism may clash with the Rat\'s pragmatic self-interest.',
      strengths: ['Dog offers unwavering loyalty', 'Rat provides cleverness', 'Shared protective instincts', 'Both value family'],
      challenges: ['Dog finds Rat too opportunistic', 'Rat finds Dog too moralistic', 'Trust takes time to build', 'Different ethical frameworks'],
    },
    pig: {
      base: 60,
      summary: 'A generally pleasant connection. The Pig\'s generosity warms the Rat, though the Rat may take advantage of the Pig\'s trusting nature.',
      strengths: ['Pig\'s warmth attracts Rat', 'Shared love of socializing', 'Both enjoy life\'s pleasures', 'Good domestic compatibility'],
      challenges: ['Rat may exploit Pig\'s trust', 'Pig may resent Rat\'s cunning', 'Different moral compasses', 'Financial disagreements'],
    },
  },

  // ============================================
  // OX
  // ============================================
  ox: {
    rat: {
      base: 82,
      summary: 'A secret friend pairing. The Rat\'s cleverness complements the Ox\'s steadfast determination, creating a powerful partnership built on mutual respect.',
      strengths: ['Rat brings creativity, Ox brings stability', 'Deep mutual loyalty', 'Complementary problem-solving', 'Shared appreciation for security'],
      challenges: ['Rat may find Ox too slow', 'Ox may see Rat as too cunning', 'Different social needs', 'Pace of life differences'],
    },
    ox: {
      base: 70,
      summary: 'Two Oxen create rock-solid stability but risk becoming a stagnant partnership. Their shared determination can move mountains or create stubborn standoffs.',
      strengths: ['Unshakeable reliability', 'Shared work ethic', 'Deep understanding of values', 'Financial stability'],
      challenges: ['Double stubbornness', 'Resistance to change', 'Lack of spontaneity', 'Power struggles when disagreeing'],
    },
    tiger: {
      base: 52,
      summary: 'A difficult neutral pairing. The Ox\'s methodical nature directly conflicts with the Tiger\'s impulsive boldness, creating ongoing tension.',
      strengths: ['Ox provides grounding for Tiger', 'Tiger adds excitement to Ox\'s life', 'Both have strong willpower', 'Mutual physical attraction'],
      challenges: ['Constant pace conflict', 'Ox feels destabilized by Tiger', 'Tiger feels restricted by Ox', 'Stubborn disagreements'],
    },
    rabbit: {
      base: 60,
      summary: 'A peaceful but understated connection. The Rabbit\'s gentleness is appreciated by the Ox, though both may struggle with emotional expression.',
      strengths: ['Quiet mutual respect', 'Shared love of home', 'Rabbit softens Ox\'s rigidity', 'Stable domestic life'],
      challenges: ['Both avoid confrontation', 'Emotional distance', 'Ox finds Rabbit too passive', 'Lack of passion'],
    },
    dragon: {
      base: 55,
      summary: 'A neutral pairing of two strong-willed signs. The Dragon\'s flamboyance can overwhelm the Ox\'s quiet determination, but mutual respect is possible.',
      strengths: ['Both are determined leaders', 'Dragon inspires, Ox executes', 'Shared ambition', 'Strong presence together'],
      challenges: ['Dragon overshadows Ox', 'Ox resents Dragon\'s arrogance', 'Leadership conflicts', 'Different approaches to authority'],
    },
    snake: {
      base: 85,
      summary: 'A trine match of quiet power. The Ox\'s reliability and the Snake\'s wisdom create a deeply harmonious partnership rooted in shared values.',
      strengths: ['Deep intellectual bond', 'Snake appreciates Ox\'s loyalty', 'Shared love of quality', 'Mutual patience'],
      challenges: ['Both can be possessive', 'Snake\'s secrecy frustrates Ox', 'Risk of emotional coldness', 'Slow to forgive'],
    },
    horse: {
      base: 42,
      summary: 'A harm pair with natural friction. The Ox\'s need for routine clashes with the Horse\'s need for freedom, creating a fundamentally uneasy dynamic.',
      strengths: ['Horse energizes Ox', 'Ox grounds Horse', 'Physical attraction possible', 'Both are hardworking'],
      challenges: ['Opposite lifestyle needs', 'Horse feels trapped', 'Ox feels abandoned', 'Fundamental pace mismatch'],
    },
    goat: {
      base: 30,
      summary: 'A clash pair representing opposing life philosophies. The Ox\'s practical discipline meets the Goat\'s artistic dreaminess in a difficult combination.',
      strengths: ['Goat adds beauty to Ox\'s world', 'Ox provides structure Goat needs', 'Can balance each other', 'Domestic potential if patient'],
      challenges: ['Ox dismisses Goat\'s dreams', 'Goat resents Ox\'s rigidity', 'Financial conflicts', 'Fundamental value differences'],
    },
    monkey: {
      base: 52,
      summary: 'A challenging neutral pairing. The Monkey\'s trickster energy unsettles the earnest Ox, while the Ox\'s seriousness bores the Monkey.',
      strengths: ['Monkey lightens Ox\'s mood', 'Ox teaches Monkey discipline', 'Intellectual stimulation', 'Different perspectives'],
      challenges: ['Ox distrusts Monkey\'s games', 'Monkey mocks Ox\'s stiffness', 'Different values', 'Communication gaps'],
    },
    rooster: {
      base: 88,
      summary: 'A trine match of shared values and mutual admiration. The Ox appreciates the Rooster\'s organization, and the Rooster admires the Ox\'s dependability.',
      strengths: ['Perfectly aligned work ethics', 'Rooster plans, Ox executes', 'Shared love of order', 'Deep mutual respect'],
      challenges: ['Rooster\'s criticism can wound Ox', 'Both can be rigid', 'Risk of becoming too serious', 'Limited spontaneity'],
    },
    dog: {
      base: 58,
      summary: 'A neutral pairing with potential. Both are loyal and dependable, but the Dog\'s moral crusading can irritate the practical, no-nonsense Ox.',
      strengths: ['Shared loyalty and honesty', 'Both value commitment', 'Stable foundation', 'Mutual protectiveness'],
      challenges: ['Dog\'s anxiety unsettles Ox', 'Ox finds Dog too idealistic', 'Stubbornness on both sides', 'Difficulty expressing emotions'],
    },
    pig: {
      base: 60,
      summary: 'A pleasant connection grounded in shared values. The Pig\'s warmth softens the Ox, and both enjoy domestic stability and simple pleasures.',
      strengths: ['Shared love of home', 'Pig\'s warmth opens Ox up', 'Both value honesty', 'Comfortable domestic life'],
      challenges: ['Pig\'s indulgence annoys frugal Ox', 'Ox may seem cold to Pig', 'Different social needs', 'Pace of life differences'],
    },
  },

  // ============================================
  // TIGER
  // ============================================
  tiger: {
    rat: {
      base: 55,
      summary: 'A neutral pairing that requires effort. The Rat\'s cautious nature clashes with the Tiger\'s bold impulsiveness, but mutual respect can bridge the gap.',
      strengths: ['Tiger protects Rat', 'Rat offers strategic thinking', 'Both are ambitious', 'Dynamic energy together'],
      challenges: ['Rat feels overshadowed', 'Tiger finds Rat too calculating', 'Power struggles', 'Different risk appetites'],
    },
    ox: {
      base: 52,
      summary: 'A difficult neutral pairing. The Ox\'s methodical nature directly conflicts with the Tiger\'s impulsive boldness, creating ongoing tension.',
      strengths: ['Ox provides grounding for Tiger', 'Tiger adds excitement to Ox\'s life', 'Both have strong willpower', 'Mutual physical attraction'],
      challenges: ['Constant pace conflict', 'Ox feels destabilized by Tiger', 'Tiger feels restricted by Ox', 'Stubborn disagreements'],
    },
    tiger: {
      base: 68,
      summary: 'Two Tigers create explosive energy — thrilling but volatile. Their shared courage and passion can inspire greatness or spark fierce competition.',
      strengths: ['Incredible shared courage', 'Mutual understanding of independence', 'Exciting adventures together', 'Powerful physical connection'],
      challenges: ['Territorial conflicts', 'Power struggles', 'Neither backs down', 'Exhausting intensity'],
    },
    rabbit: {
      base: 58,
      summary: 'A contrasting pair where the Tiger\'s boldness can either protect or overwhelm the gentle Rabbit. Success depends on the Tiger\'s restraint.',
      strengths: ['Tiger protects Rabbit', 'Rabbit calms Tiger\'s aggression', 'Yin-yang balance', 'Mutual attraction of opposites'],
      challenges: ['Tiger overwhelms Rabbit', 'Rabbit seems weak to Tiger', 'Different social comfort zones', 'Emotional mismatch'],
    },
    dragon: {
      base: 62,
      summary: 'Two powerful yang signs creating impressive energy. Their shared dynamism is exciting but can lead to epic power struggles.',
      strengths: ['Mutual respect for strength', 'Incredible ambition together', 'Dynamic social presence', 'Shared adventurous spirit'],
      challenges: ['Massive ego clashes', 'Neither yields leadership', 'Too much fire energy', 'Competitive rather than cooperative'],
    },
    snake: {
      base: 40,
      summary: 'A harm pair with deep-seated tension. The Tiger\'s directness meets the Snake\'s subtlety in a difficult dynamic of misunderstanding and suspicion.',
      strengths: ['Magnetic initial attraction', 'Snake provides depth to Tiger\'s action', 'Tiger adds boldness to Snake\'s plans', 'Intellectual sparring'],
      challenges: ['Tiger distrusts Snake\'s secrecy', 'Snake despises Tiger\'s recklessness', 'Fundamentally different operating styles', 'Deep-seated mistrust'],
    },
    horse: {
      base: 88,
      summary: 'A trine match of shared fire and freedom. Both love adventure, independence, and bold action — together they are an unstoppable force of nature.',
      strengths: ['Shared love of freedom', 'Incredible energy together', 'Mutual respect for independence', 'Exciting and passionate bond'],
      challenges: ['Both need space', 'Can be too independent', 'Lack of grounding', 'Emotional volatility'],
    },
    goat: {
      base: 55,
      summary: 'A neutral pairing with romantic potential. The Tiger\'s protectiveness appeals to the Goat, but the Goat\'s neediness can frustrate the independent Tiger.',
      strengths: ['Tiger protects Goat', 'Goat appreciates Tiger\'s strength', 'Creative synergy', 'Romantic attraction'],
      challenges: ['Tiger finds Goat too dependent', 'Goat fears Tiger\'s temper', 'Different energy levels', 'Lifestyle clashes'],
    },
    monkey: {
      base: 32,
      summary: 'A clash pair of competing energies. The Tiger\'s authority is challenged by the Monkey\'s trickery, creating a dynamic of rivalry and irritation.',
      strengths: ['Both are clever and dynamic', 'Exciting when they cooperate', 'Mutual intelligence', 'Potential for growth through conflict'],
      challenges: ['Monkey undermines Tiger\'s authority', 'Tiger resents Monkey\'s games', 'Constant one-upmanship', 'Fundamental lack of trust'],
    },
    rooster: {
      base: 55,
      summary: 'A neutral pairing with friction. The Tiger\'s spontaneity clashes with the Rooster\'s need for order, but mutual courage keeps things interesting.',
      strengths: ['Both are brave and outspoken', 'Rooster admires Tiger\'s courage', 'Tiger respects Rooster\'s honesty', 'Strong presence together'],
      challenges: ['Rooster\'s criticism angers Tiger', 'Tiger\'s chaos frustrates Rooster', 'Different planning styles', 'Verbal conflicts'],
    },
    dog: {
      base: 90,
      summary: 'A trine match of shared justice and loyalty. The Tiger\'s courage and the Dog\'s devotion create a deeply bonded partnership rooted in shared ideals.',
      strengths: ['Deep mutual loyalty', 'Shared sense of justice', 'Dog grounds Tiger\'s wildness', 'Tiger inspires Dog\'s courage'],
      challenges: ['Dog\'s anxiety meets Tiger\'s impulsiveness', 'Both can be moody', 'Tiger may take Dog for granted', 'Emotional intensity'],
    },
    pig: {
      base: 80,
      summary: 'A secret friend pairing with genuine warmth. The Pig\'s generosity softens the Tiger, while the Tiger\'s bravery gives the Pig confidence.',
      strengths: ['Pig\'s warmth calms Tiger', 'Tiger protects generous Pig', 'Mutual adoration', 'Strong romantic chemistry'],
      challenges: ['Tiger may dominate', 'Pig can be too accommodating', 'Different pace of life', 'Tiger may undervalue Pig\'s contributions'],
    },
  },

  // ============================================
  // RABBIT
  // ============================================
  rabbit: {
    rat: {
      base: 58,
      summary: 'A neutral combination with subtle tensions. Both are social creatures but approach life from different angles — cunning versus diplomacy.',
      strengths: ['Both value home comforts', 'Social grace together', 'Intellectual connection', 'Shared appreciation for beauty'],
      challenges: ['Rabbit finds Rat too aggressive', 'Rat sees Rabbit as passive', 'Trust issues', 'Different conflict styles'],
    },
    ox: {
      base: 60,
      summary: 'A peaceful but understated connection. The Rabbit\'s gentleness is appreciated by the Ox, though both may struggle with emotional expression.',
      strengths: ['Quiet mutual respect', 'Shared love of home', 'Rabbit softens Ox\'s rigidity', 'Stable domestic life'],
      challenges: ['Both avoid confrontation', 'Emotional distance', 'Ox finds Rabbit too passive', 'Lack of passion'],
    },
    tiger: {
      base: 58,
      summary: 'A contrasting pair where the Tiger\'s boldness can either protect or overwhelm the gentle Rabbit. Success depends on the Tiger\'s restraint.',
      strengths: ['Tiger protects Rabbit', 'Rabbit calms Tiger\'s aggression', 'Yin-yang balance', 'Mutual attraction of opposites'],
      challenges: ['Tiger overwhelms Rabbit', 'Rabbit seems weak to Tiger', 'Different social comfort zones', 'Emotional mismatch'],
    },
    rabbit: {
      base: 72,
      summary: 'Two Rabbits create a harmonious, peaceful world together. Their shared gentleness is comforting but may lack the spark for deeper growth.',
      strengths: ['Perfect emotional understanding', 'Beautiful shared aesthetics', 'Harmonious home life', 'Conflict-free communication'],
      challenges: ['Avoidance of necessary conflict', 'Lack of initiative', 'Too passive together', 'May stagnate in comfort'],
    },
    dragon: {
      base: 38,
      summary: 'A harm pair with fundamental friction. The Dragon\'s overwhelming presence intimidates the sensitive Rabbit, creating an imbalanced dynamic.',
      strengths: ['Dragon offers protection', 'Rabbit provides diplomatic skill', 'Potential for complementary roles', 'Initial fascination'],
      challenges: ['Dragon bulldozes Rabbit', 'Rabbit feels insignificant', 'Communication breakdown', 'Power imbalance'],
    },
    snake: {
      base: 60,
      summary: 'A quiet, intellectual connection. Both are refined and appreciate beauty, but their shared reticence can create emotional distance.',
      strengths: ['Shared love of aesthetics', 'Intellectual compatibility', 'Both value privacy', 'Elegant partnership'],
      challenges: ['Both avoid emotional vulnerability', 'Too much withdrawal', 'Passive-aggressive tendencies', 'Difficulty resolving issues'],
    },
    horse: {
      base: 55,
      summary: 'A neutral pairing with lifestyle differences. The Horse\'s restless energy can exhaust the peace-loving Rabbit, though attraction is common.',
      strengths: ['Horse brings excitement', 'Rabbit offers calm refuge', 'Social compatibility', 'Romantic attraction'],
      challenges: ['Horse is too restless for Rabbit', 'Rabbit seems boring to Horse', 'Different energy levels', 'Lifestyle incompatibility'],
    },
    goat: {
      base: 92,
      summary: 'A trine match of artistic harmony and emotional depth. The Rabbit and Goat share creative sensibilities and a love of beauty, creating an enchanting bond.',
      strengths: ['Deep emotional understanding', 'Shared artistic sensibilities', 'Beautiful home together', 'Nurturing and gentle bond'],
      challenges: ['Both avoid conflict', 'May lack practical grounding', 'Can reinforce each other\'s passivity', 'Need external motivation'],
    },
    monkey: {
      base: 55,
      summary: 'A neutral pair with communication challenges. The Monkey\'s playful trickery can amuse or alarm the sensitive Rabbit.',
      strengths: ['Monkey entertains Rabbit', 'Rabbit offers calm perspective', 'Both are socially adept', 'Intellectual connection'],
      challenges: ['Monkey teases too much', 'Rabbit feels manipulated', 'Different depths of emotion', 'Trust issues'],
    },
    rooster: {
      base: 28,
      summary: 'A clash pair of opposing temperaments. The Rooster\'s blunt criticism deeply wounds the sensitive Rabbit, creating lasting resentment.',
      strengths: ['Both appreciate quality', 'Can learn from differences', 'Shared attention to detail', 'Potential for balance'],
      challenges: ['Rooster\'s criticism devastates Rabbit', 'Rabbit\'s avoidance frustrates Rooster', 'Opposing communication styles', 'Emotional incompatibility'],
    },
    dog: {
      base: 80,
      summary: 'A secret friend pairing of gentle loyalty. The Dog\'s devotion gives the Rabbit security, while the Rabbit\'s diplomacy eases the Dog\'s anxieties.',
      strengths: ['Deep mutual loyalty', 'Dog protects sensitive Rabbit', 'Rabbit calms anxious Dog', 'Shared value of home and peace'],
      challenges: ['Both can be pessimistic', 'May avoid necessary risks', 'Codependency risk', 'Limited adventurousness'],
    },
    pig: {
      base: 88,
      summary: 'A trine match of warmth and refinement. The Rabbit and Pig share a love of comfort, beauty, and social grace, creating a deeply satisfying bond.',
      strengths: ['Shared love of luxury', 'Deep emotional connection', 'Social harmony', 'Mutual generosity'],
      challenges: ['Both may overindulge', 'Avoidance of hard truths', 'Can lack discipline together', 'Too comfortable to grow'],
    },
  },

  // ============================================
  // DRAGON
  // ============================================
  dragon: {
    rat: {
      base: 90,
      summary: 'A trine match of exceptional power. The Rat\'s shrewdness and the Dragon\'s magnificence create an unstoppable duo with shared vision and ambition.',
      strengths: ['Mutual admiration', 'Rat strategizes while Dragon leads', 'Shared ambition', 'Powerful creative synergy'],
      challenges: ['Dragon may overshadow Rat', 'Both can be ego-driven', 'Rat may feel secondary', 'Intensity can burn out'],
    },
    ox: {
      base: 55,
      summary: 'A neutral pairing of two strong-willed signs. The Dragon\'s flamboyance can overwhelm the Ox\'s quiet determination, but mutual respect is possible.',
      strengths: ['Both are determined leaders', 'Dragon inspires, Ox executes', 'Shared ambition', 'Strong presence together'],
      challenges: ['Dragon overshadows Ox', 'Ox resents Dragon\'s arrogance', 'Leadership conflicts', 'Different approaches to authority'],
    },
    tiger: {
      base: 62,
      summary: 'Two powerful yang signs creating impressive energy. Their shared dynamism is exciting but can lead to epic power struggles.',
      strengths: ['Mutual respect for strength', 'Incredible ambition together', 'Dynamic social presence', 'Shared adventurous spirit'],
      challenges: ['Massive ego clashes', 'Neither yields leadership', 'Too much fire energy', 'Competitive rather than cooperative'],
    },
    rabbit: {
      base: 38,
      summary: 'A harm pair with fundamental friction. The Dragon\'s overwhelming presence intimidates the sensitive Rabbit, creating an imbalanced dynamic.',
      strengths: ['Dragon offers protection', 'Rabbit provides diplomatic skill', 'Potential for complementary roles', 'Initial fascination'],
      challenges: ['Dragon bulldozes Rabbit', 'Rabbit feels insignificant', 'Communication breakdown', 'Power imbalance'],
    },
    dragon: {
      base: 68,
      summary: 'Two Dragons create dazzling spectacle but fierce competition. Their shared magnificence inspires awe, but neither wants to share the throne.',
      strengths: ['Incredible shared ambition', 'Mutual understanding of power', 'Impressive public presence', 'Shared confidence'],
      challenges: ['Massive ego competition', 'Neither compromises easily', 'Exhausting power dynamics', 'Too much yang energy'],
    },
    snake: {
      base: 62,
      summary: 'A dynamic pairing where the Dragon\'s power meets the Snake\'s wisdom. Potentially brilliant together, but egos and secrecy can create tension.',
      strengths: ['Dragon\'s action + Snake\'s strategy', 'Mutual fascination', 'Shared ambition', 'Complementary intelligence'],
      challenges: ['Snake\'s secrecy irritates open Dragon', 'Dragon\'s ego clashes with Snake\'s pride', 'Power dynamics', 'Emotional disconnection'],
    },
    horse: {
      base: 58,
      summary: 'A neutral pair of high-energy signs. Both are charismatic and independent, creating a flashy but potentially unstable partnership.',
      strengths: ['Incredible energy together', 'Shared love of adventure', 'Mutual charisma', 'Exciting social life'],
      challenges: ['Both crave attention', 'Neither is domestically inclined', 'Commitment challenges', 'Lack of emotional depth'],
    },
    goat: {
      base: 55,
      summary: 'A neutral pairing with romantic potential. The Dragon\'s strength can protect the Goat, but the Goat\'s emotional needs may overwhelm the Dragon.',
      strengths: ['Dragon offers security', 'Goat adds artistic beauty', 'Complementary energies', 'Romantic spark'],
      challenges: ['Dragon lacks patience for Goat\'s moods', 'Goat feels dominated', 'Different priorities', 'Communication gaps'],
    },
    monkey: {
      base: 85,
      summary: 'A trine match of brilliance and ambition. The Dragon\'s power and the Monkey\'s cleverness combine for a dynamic, unstoppable partnership.',
      strengths: ['Brilliant strategic partnership', 'Monkey amuses Dragon', 'Dragon empowers Monkey', 'Shared love of achievement'],
      challenges: ['Monkey may manipulate Dragon', 'Dragon may underestimate Monkey', 'Both can be arrogant', 'Risk of overreaching together'],
    },
    rooster: {
      base: 82,
      summary: 'A secret friend pairing of mutual admiration. The Dragon\'s grandeur inspires the Rooster, while the Rooster\'s attention to detail grounds the Dragon.',
      strengths: ['Deep mutual admiration', 'Rooster organizes Dragon\'s vision', 'Dragon empowers Rooster\'s confidence', 'Powerful public couple'],
      challenges: ['Rooster\'s criticism can sting Dragon\'s ego', 'Dragon may ignore Rooster\'s advice', 'Both need admiration', 'Competition for attention'],
    },
    dog: {
      base: 28,
      summary: 'A clash pair of opposing values. The Dragon\'s self-confidence clashes with the Dog\'s skepticism, creating fundamental tension and mistrust.',
      strengths: ['Dog keeps Dragon honest', 'Dragon can inspire Dog\'s courage', 'Both are loyal in their way', 'Potential for balanced perspective'],
      challenges: ['Dog sees Dragon as arrogant', 'Dragon finds Dog pessimistic', 'Fundamental value conflict', 'Mutual distrust'],
    },
    pig: {
      base: 60,
      summary: 'A warm neutral pairing. The Pig\'s generous nature supports the Dragon\'s ambitions, though the Dragon may take the Pig for granted.',
      strengths: ['Pig supports Dragon\'s dreams', 'Dragon offers exciting life', 'Shared optimism', 'Good social chemistry'],
      challenges: ['Dragon exploits Pig\'s generosity', 'Pig feels unappreciated', 'Different depth of emotion', 'Power imbalance'],
    },
  },

  // ============================================
  // SNAKE
  // ============================================
  snake: {
    rat: {
      base: 60,
      summary: 'Both are shrewd and calculating, creating intellectual attraction. However, mutual suspicion can undermine the bond if trust isn\'t established.',
      strengths: ['Intellectual compatibility', 'Shared love of strategy', 'Mutual ambition', 'Sophisticated tastes'],
      challenges: ['Mutual suspicion', 'Both guard secrets', 'Jealousy issues', 'Emotional distance'],
    },
    ox: {
      base: 85,
      summary: 'A trine match of quiet power. The Ox\'s reliability and the Snake\'s wisdom create a deeply harmonious partnership rooted in shared values.',
      strengths: ['Deep intellectual bond', 'Snake appreciates Ox\'s loyalty', 'Shared love of quality', 'Mutual patience'],
      challenges: ['Both can be possessive', 'Snake\'s secrecy frustrates Ox', 'Risk of emotional coldness', 'Slow to forgive'],
    },
    tiger: {
      base: 40,
      summary: 'A harm pair with deep-seated tension. The Tiger\'s directness meets the Snake\'s subtlety in a difficult dynamic of misunderstanding and suspicion.',
      strengths: ['Magnetic initial attraction', 'Snake provides depth to Tiger\'s action', 'Tiger adds boldness to Snake\'s plans', 'Intellectual sparring'],
      challenges: ['Tiger distrusts Snake\'s secrecy', 'Snake despises Tiger\'s recklessness', 'Fundamentally different operating styles', 'Deep-seated mistrust'],
    },
    rabbit: {
      base: 60,
      summary: 'A quiet, intellectual connection. Both are refined and appreciate beauty, but their shared reticence can create emotional distance.',
      strengths: ['Shared love of aesthetics', 'Intellectual compatibility', 'Both value privacy', 'Elegant partnership'],
      challenges: ['Both avoid emotional vulnerability', 'Too much withdrawal', 'Passive-aggressive tendencies', 'Difficulty resolving issues'],
    },
    dragon: {
      base: 62,
      summary: 'A dynamic pairing where the Dragon\'s power meets the Snake\'s wisdom. Potentially brilliant together, but egos and secrecy can create tension.',
      strengths: ['Dragon\'s action + Snake\'s strategy', 'Mutual fascination', 'Shared ambition', 'Complementary intelligence'],
      challenges: ['Snake\'s secrecy irritates open Dragon', 'Dragon\'s ego clashes with Snake\'s pride', 'Power dynamics', 'Emotional disconnection'],
    },
    snake: {
      base: 68,
      summary: 'Two Snakes create an intensely deep and secretive bond. Their shared intuition is powerful, but jealousy and suspicion can be toxic.',
      strengths: ['Profound mutual understanding', 'Shared depth and wisdom', 'Intense intellectual connection', 'Elegant partnership'],
      challenges: ['Double jealousy', 'Excessive secrecy', 'Power games', 'Emotional manipulation risk'],
    },
    horse: {
      base: 55,
      summary: 'A neutral pair with contrasting energies. The Snake\'s stillness and depth contrast with the Horse\'s restless energy, creating an uneasy dynamic.',
      strengths: ['Magnetic physical attraction', 'Horse adds energy to Snake\'s life', 'Snake offers depth to Horse', 'Both are charming'],
      challenges: ['Snake\'s jealousy clashes with Horse\'s freedom', 'Opposite paces of life', 'Trust issues', 'Communication gaps'],
    },
    goat: {
      base: 58,
      summary: 'A subtle connection with artistic potential. Both appreciate beauty and refinement, but their emotional patterns can create tension.',
      strengths: ['Shared aesthetic values', 'Both appreciate luxury', 'Creative potential together', 'Intellectual depth'],
      challenges: ['Snake\'s possessiveness alarms Goat', 'Goat\'s indecision frustrates Snake', 'Both are emotionally complex', 'Passive conflict styles'],
    },
    monkey: {
      base: 78,
      summary: 'A secret friend pairing of two masterminds. The Snake\'s wisdom and the Monkey\'s wit create a formidable intellectual partnership.',
      strengths: ['Brilliant minds together', 'Snake provides depth, Monkey adds speed', 'Mutual respect for intelligence', 'Strategic powerhouse'],
      challenges: ['Both can be manipulative', 'Monkey\'s tricks annoy careful Snake', 'Power games', 'Difficulty with emotional vulnerability'],
    },
    rooster: {
      base: 90,
      summary: 'A trine match of perfection and precision. The Snake\'s intuitive wisdom complements the Rooster\'s analytical mind beautifully.',
      strengths: ['Perfect intellectual harmony', 'Rooster admires Snake\'s depth', 'Snake values Rooster\'s honesty', 'Shared pursuit of excellence'],
      challenges: ['Rooster\'s criticism meets Snake\'s pride', 'Both can be demanding', 'Emotional reserve on both sides', 'High expectations'],
    },
    dog: {
      base: 55,
      summary: 'A neutral pair with communication challenges. The Dog\'s straightforward loyalty meets the Snake\'s complex inner world in an uneasy match.',
      strengths: ['Dog\'s loyalty reassures Snake', 'Snake\'s wisdom guides Dog', 'Both are loyal once committed', 'Potential for deep bond'],
      challenges: ['Dog distrusts Snake\'s secrecy', 'Snake finds Dog too simple', 'Communication style mismatch', 'Different emotional needs'],
    },
    pig: {
      base: 30,
      summary: 'A clash pair of fundamentally incompatible natures. The Snake\'s calculating wisdom opposes the Pig\'s innocent generosity, creating deep mistrust.',
      strengths: ['Initial fascination', 'Pig\'s warmth can melt Snake', 'Snake offers Pig protection', 'Complementary perspectives'],
      challenges: ['Snake manipulates trusting Pig', 'Pig feels deceived by Snake', 'Opposing moral frameworks', 'Deep fundamental mistrust'],
    },
  },

  // ============================================
  // HORSE
  // ============================================
  horse: {
    rat: {
      base: 30,
      summary: 'A clash pair with opposing energies. The Rat\'s careful planning clashes directly with the Horse\'s free-spirited independence, creating fundamental friction.',
      strengths: ['Exciting initial attraction', 'Both are energetic', 'Can learn from differences', 'Strong physical chemistry'],
      challenges: ['Fundamental value conflicts', 'Horse craves freedom, Rat wants security', 'Communication breakdowns', 'Opposing life philosophies'],
    },
    ox: {
      base: 42,
      summary: 'A harm pair with natural friction. The Ox\'s need for routine clashes with the Horse\'s need for freedom, creating a fundamentally uneasy dynamic.',
      strengths: ['Horse energizes Ox', 'Ox grounds Horse', 'Physical attraction possible', 'Both are hardworking'],
      challenges: ['Opposite lifestyle needs', 'Horse feels trapped', 'Ox feels abandoned', 'Fundamental pace mismatch'],
    },
    tiger: {
      base: 88,
      summary: 'A trine match of shared fire and freedom. Both love adventure, independence, and bold action — together they are an unstoppable force of nature.',
      strengths: ['Shared love of freedom', 'Incredible energy together', 'Mutual respect for independence', 'Exciting and passionate bond'],
      challenges: ['Both need space', 'Can be too independent', 'Lack of grounding', 'Emotional volatility'],
    },
    rabbit: {
      base: 55,
      summary: 'A neutral pairing with lifestyle differences. The Horse\'s restless energy can exhaust the peace-loving Rabbit, though attraction is common.',
      strengths: ['Horse brings excitement', 'Rabbit offers calm refuge', 'Social compatibility', 'Romantic attraction'],
      challenges: ['Horse is too restless for Rabbit', 'Rabbit seems boring to Horse', 'Different energy levels', 'Lifestyle incompatibility'],
    },
    dragon: {
      base: 58,
      summary: 'A neutral pair of high-energy signs. Both are charismatic and independent, creating a flashy but potentially unstable partnership.',
      strengths: ['Incredible energy together', 'Shared love of adventure', 'Mutual charisma', 'Exciting social life'],
      challenges: ['Both crave attention', 'Neither is domestically inclined', 'Commitment challenges', 'Lack of emotional depth'],
    },
    snake: {
      base: 55,
      summary: 'A neutral pair with contrasting energies. The Snake\'s stillness and depth contrast with the Horse\'s restless energy, creating an uneasy dynamic.',
      strengths: ['Magnetic physical attraction', 'Horse adds energy to Snake\'s life', 'Snake offers depth to Horse', 'Both are charming'],
      challenges: ['Snake\'s jealousy clashes with Horse\'s freedom', 'Opposite paces of life', 'Trust issues', 'Communication gaps'],
    },
    horse: {
      base: 70,
      summary: 'Two Horses create thrilling freedom and adventure together. Their shared independence is liberating but can prevent them from building lasting stability.',
      strengths: ['Perfect understanding of freedom needs', 'Exciting adventures', 'Passionate connection', 'Mutual respect for independence'],
      challenges: ['Neither wants to settle down', 'Competitive streak', 'Lack of stability', 'Both can be emotionally hot-and-cold'],
    },
    goat: {
      base: 80,
      summary: 'A secret friend pairing with romantic charm. The Horse\'s energy inspires the Goat, while the Goat\'s tenderness gives the Horse a reason to stay.',
      strengths: ['Horse protects creative Goat', 'Goat gives Horse emotional depth', 'Strong romantic chemistry', 'Complementary energies'],
      challenges: ['Horse may feel tied down', 'Goat may feel abandoned', 'Different independence needs', 'Emotional misunderstandings'],
    },
    monkey: {
      base: 58,
      summary: 'A neutral pairing of two restless signs. Both love fun and excitement but may struggle to build anything lasting together.',
      strengths: ['Fun and lively together', 'Shared love of adventure', 'Both are quick-witted', 'Great social chemistry'],
      challenges: ['Neither provides stability', 'Monkey\'s tricks irritate Horse', 'Lack of emotional depth', 'Both commit reluctantly'],
    },
    rooster: {
      base: 55,
      summary: 'A neutral pair with friction potential. The Rooster\'s perfectionism frustrates the freedom-loving Horse, though mutual courage creates respect.',
      strengths: ['Both are outspoken and brave', 'Rooster admires Horse\'s energy', 'Horse respects Rooster\'s honesty', 'Dynamic together'],
      challenges: ['Rooster\'s nagging drives Horse away', 'Horse\'s messiness annoys Rooster', 'Different values around order', 'Communication conflicts'],
    },
    dog: {
      base: 85,
      summary: 'A trine match of shared idealism and energy. The Horse\'s vitality and the Dog\'s loyalty create a deeply bonded, adventure-loving partnership.',
      strengths: ['Shared love of justice', 'Dog\'s loyalty grounds Horse', 'Horse inspires Dog\'s courage', 'Deep mutual devotion'],
      challenges: ['Dog\'s worry conflicts with Horse\'s carefree nature', 'Horse may feel smothered', 'Both can be emotionally reactive', 'Need for balance'],
    },
    pig: {
      base: 58,
      summary: 'A neutral pairing with social appeal. Both enjoy life\'s pleasures and socializing, but the Horse\'s independence can hurt the Pig\'s feelings.',
      strengths: ['Shared social nature', 'Pig\'s warmth attracts Horse', 'Both enjoy celebrations', 'Fun-loving partnership'],
      challenges: ['Horse takes Pig for granted', 'Pig wants more commitment', 'Different depth of emotion', 'Lifestyle pace differences'],
    },
  },

  // ============================================
  // GOAT
  // ============================================
  goat: {
    rat: {
      base: 40,
      summary: 'A harm pair with underlying tension. The Rat\'s pragmatism clashes with the Goat\'s dreamy nature, leading to frustration on both sides.',
      strengths: ['Goat softens Rat\'s edge', 'Rat grounds Goat\'s dreams', 'Creative potential together', 'Both enjoy comfort'],
      challenges: ['Rat finds Goat impractical', 'Goat feels judged by Rat', 'Financial disagreements', 'Different priorities'],
    },
    ox: {
      base: 30,
      summary: 'A clash pair representing opposing life philosophies. The Ox\'s practical discipline meets the Goat\'s artistic dreaminess in a difficult combination.',
      strengths: ['Goat adds beauty to Ox\'s world', 'Ox provides structure Goat needs', 'Can balance each other', 'Domestic potential if patient'],
      challenges: ['Ox dismisses Goat\'s dreams', 'Goat resents Ox\'s rigidity', 'Financial conflicts', 'Fundamental value differences'],
    },
    tiger: {
      base: 55,
      summary: 'A neutral pairing with romantic potential. The Tiger\'s protectiveness appeals to the Goat, but the Goat\'s neediness can frustrate the independent Tiger.',
      strengths: ['Tiger protects Goat', 'Goat appreciates Tiger\'s strength', 'Creative synergy', 'Romantic attraction'],
      challenges: ['Tiger finds Goat too dependent', 'Goat fears Tiger\'s temper', 'Different energy levels', 'Lifestyle clashes'],
    },
    rabbit: {
      base: 92,
      summary: 'A trine match of artistic harmony and emotional depth. The Rabbit and Goat share creative sensibilities and a love of beauty, creating an enchanting bond.',
      strengths: ['Deep emotional understanding', 'Shared artistic sensibilities', 'Beautiful home together', 'Nurturing and gentle bond'],
      challenges: ['Both avoid conflict', 'May lack practical grounding', 'Can reinforce each other\'s passivity', 'Need external motivation'],
    },
    dragon: {
      base: 55,
      summary: 'A neutral pairing with romantic potential. The Dragon\'s strength can protect the Goat, but the Goat\'s emotional needs may overwhelm the Dragon.',
      strengths: ['Dragon offers security', 'Goat adds artistic beauty', 'Complementary energies', 'Romantic spark'],
      challenges: ['Dragon lacks patience for Goat\'s moods', 'Goat feels dominated', 'Different priorities', 'Communication gaps'],
    },
    snake: {
      base: 58,
      summary: 'A subtle connection with artistic potential. Both appreciate beauty and refinement, but their emotional patterns can create tension.',
      strengths: ['Shared aesthetic values', 'Both appreciate luxury', 'Creative potential together', 'Intellectual depth'],
      challenges: ['Snake\'s possessiveness alarms Goat', 'Goat\'s indecision frustrates Snake', 'Both are emotionally complex', 'Passive conflict styles'],
    },
    horse: {
      base: 80,
      summary: 'A secret friend pairing with romantic charm. The Horse\'s energy inspires the Goat, while the Goat\'s tenderness gives the Horse a reason to stay.',
      strengths: ['Horse protects creative Goat', 'Goat gives Horse emotional depth', 'Strong romantic chemistry', 'Complementary energies'],
      challenges: ['Horse may feel tied down', 'Goat may feel abandoned', 'Different independence needs', 'Emotional misunderstandings'],
    },
    goat: {
      base: 72,
      summary: 'Two Goats create a dreamy, artistic world together. Their shared sensitivity is beautiful but may lack the practical drive to handle life\'s demands.',
      strengths: ['Deep emotional resonance', 'Shared creative vision', 'Gentle and supportive bond', 'Beautiful aesthetic together'],
      challenges: ['No practical anchor', 'Both are indecisive', 'Financial instability risk', 'May reinforce each other\'s worries'],
    },
    monkey: {
      base: 55,
      summary: 'A neutral pairing with potential for fun. The Monkey\'s cleverness entertains the Goat, but the Monkey may lack patience for the Goat\'s emotional needs.',
      strengths: ['Monkey cheers up Goat', 'Goat appreciates Monkey\'s wit', 'Both enjoy socializing', 'Creative brainstorming'],
      challenges: ['Monkey finds Goat too needy', 'Goat feels teased by Monkey', 'Different emotional depths', 'Commitment differences'],
    },
    rooster: {
      base: 45,
      summary: 'A harm pair with sharp friction. The Rooster\'s critical nature deeply wounds the sensitive Goat, creating a painful dynamic.',
      strengths: ['Rooster can organize Goat\'s chaos', 'Goat softens Rooster\'s edges', 'Both are creative in different ways', 'Potential for growth'],
      challenges: ['Rooster\'s criticism devastates Goat', 'Goat\'s emotionality frustrates Rooster', 'Very different coping styles', 'Communication pain'],
    },
    dog: {
      base: 55,
      summary: 'A neutral pairing with emotional complexity. Both are worriers who can either comfort or amplify each other\'s anxieties.',
      strengths: ['Both are emotionally sensitive', 'Dog offers loyalty and protection', 'Goat brings warmth and creativity', 'Shared domestic values'],
      challenges: ['Combined anxiety', 'Both need reassurance', 'Can spiral into pessimism', 'Neither is naturally decisive'],
    },
    pig: {
      base: 90,
      summary: 'A trine match of shared warmth and creativity. The Goat and Pig are natural soulmates who understand each other\'s emotional and aesthetic needs deeply.',
      strengths: ['Profound emotional connection', 'Shared love of beauty', 'Pig\'s generosity supports Goat', 'Natural soulmate energy'],
      challenges: ['Both may overindulge', 'Lack of practical discipline', 'Can enable each other\'s weaknesses', 'May avoid hard truths'],
    },
  },

  // ============================================
  // MONKEY
  // ============================================
  monkey: {
    rat: {
      base: 88,
      summary: 'A trine match full of wit and adventure. Both are clever, resourceful, and love a good scheme — together they are brilliantly inventive.',
      strengths: ['Endless mental stimulation', 'Shared humor and playfulness', 'Creative problem-solving', 'Mutual admiration'],
      challenges: ['Can become too scheming together', 'May lack emotional depth', 'Competition for cleverness', 'Restlessness as a couple'],
    },
    ox: {
      base: 52,
      summary: 'A challenging neutral pairing. The Monkey\'s trickster energy unsettles the earnest Ox, while the Ox\'s seriousness bores the Monkey.',
      strengths: ['Monkey lightens Ox\'s mood', 'Ox teaches Monkey discipline', 'Intellectual stimulation', 'Different perspectives'],
      challenges: ['Ox distrusts Monkey\'s games', 'Monkey mocks Ox\'s stiffness', 'Different values', 'Communication gaps'],
    },
    tiger: {
      base: 32,
      summary: 'A clash pair of competing energies. The Tiger\'s authority is challenged by the Monkey\'s trickery, creating a dynamic of rivalry and irritation.',
      strengths: ['Both are clever and dynamic', 'Exciting when they cooperate', 'Mutual intelligence', 'Potential for growth through conflict'],
      challenges: ['Monkey undermines Tiger\'s authority', 'Tiger resents Monkey\'s games', 'Constant one-upmanship', 'Fundamental lack of trust'],
    },
    rabbit: {
      base: 55,
      summary: 'A neutral pair with communication challenges. The Monkey\'s playful trickery can amuse or alarm the sensitive Rabbit.',
      strengths: ['Monkey entertains Rabbit', 'Rabbit offers calm perspective', 'Both are socially adept', 'Intellectual connection'],
      challenges: ['Monkey teases too much', 'Rabbit feels manipulated', 'Different depths of emotion', 'Trust issues'],
    },
    dragon: {
      base: 85,
      summary: 'A trine match of brilliance and ambition. The Dragon\'s power and the Monkey\'s cleverness combine for a dynamic, unstoppable partnership.',
      strengths: ['Brilliant strategic partnership', 'Monkey amuses Dragon', 'Dragon empowers Monkey', 'Shared love of achievement'],
      challenges: ['Monkey may manipulate Dragon', 'Dragon may underestimate Monkey', 'Both can be arrogant', 'Risk of overreaching together'],
    },
    snake: {
      base: 78,
      summary: 'A secret friend pairing of two masterminds. The Snake\'s wisdom and the Monkey\'s wit create a formidable intellectual partnership.',
      strengths: ['Brilliant minds together', 'Snake provides depth, Monkey adds speed', 'Mutual respect for intelligence', 'Strategic powerhouse'],
      challenges: ['Both can be manipulative', 'Monkey\'s tricks annoy careful Snake', 'Power games', 'Difficulty with emotional vulnerability'],
    },
    horse: {
      base: 58,
      summary: 'A neutral pairing of two restless signs. Both love fun and excitement but may struggle to build anything lasting together.',
      strengths: ['Fun and lively together', 'Shared love of adventure', 'Both are quick-witted', 'Great social chemistry'],
      challenges: ['Neither provides stability', 'Monkey\'s tricks irritate Horse', 'Lack of emotional depth', 'Both commit reluctantly'],
    },
    goat: {
      base: 55,
      summary: 'A neutral pairing with potential for fun. The Monkey\'s cleverness entertains the Goat, but the Monkey may lack patience for the Goat\'s emotional needs.',
      strengths: ['Monkey cheers up Goat', 'Goat appreciates Monkey\'s wit', 'Both enjoy socializing', 'Creative brainstorming'],
      challenges: ['Monkey finds Goat too needy', 'Goat feels teased by Monkey', 'Different emotional depths', 'Commitment differences'],
    },
    monkey: {
      base: 70,
      summary: 'Two Monkeys create a hilariously clever duo with boundless energy. Their shared trickster nature is fun but may lack depth and stability.',
      strengths: ['Non-stop entertainment', 'Shared cleverness', 'Great social duo', 'Mutual understanding'],
      challenges: ['Both may be dishonest', 'Lack of emotional depth', 'Competitive mischief', 'No grounding influence'],
    },
    rooster: {
      base: 52,
      summary: 'A challenging neutral pairing. The Monkey\'s playfulness irritates the orderly Rooster, while the Rooster\'s criticism annoys the Monkey.',
      strengths: ['Monkey adds humor to Rooster\'s life', 'Rooster grounds Monkey\'s chaos', 'Both are intelligent', 'Can learn from each other'],
      challenges: ['Rooster sees Monkey as irresponsible', 'Monkey finds Rooster too rigid', 'Frequent arguments', 'Different definitions of success'],
    },
    dog: {
      base: 58,
      summary: 'A neutral pair with contrasting values. The Dog\'s honesty clashes with the Monkey\'s trickster nature, though mutual wit keeps things interesting.',
      strengths: ['Both are quick-witted', 'Dog grounds Monkey\'s schemes', 'Monkey lightens Dog\'s worries', 'Intellectual compatibility'],
      challenges: ['Dog questions Monkey\'s honesty', 'Monkey finds Dog too serious', 'Values misalignment', 'Trust takes time'],
    },
    pig: {
      base: 42,
      summary: 'A harm pair with trust issues at its core. The Monkey\'s cunning nature can exploit the Pig\'s trusting generosity, leading to resentment.',
      strengths: ['Pig\'s optimism attracts Monkey', 'Monkey entertains generous Pig', 'Social compatibility', 'Fun-loving energy'],
      challenges: ['Monkey may exploit Pig\'s trust', 'Pig feels deceived', 'Fundamental trust issues', 'Different moral compasses'],
    },
  },

  // ============================================
  // ROOSTER
  // ============================================
  rooster: {
    rat: {
      base: 55,
      summary: 'A neutral pairing with friction potential. The Rat\'s subtlety contrasts with the Rooster\'s bluntness, requiring patience from both sides.',
      strengths: ['Rooster\'s honesty balances Rat\'s cunning', 'Both are hardworking', 'Mutual respect for intelligence', 'Complementary detail-orientation'],
      challenges: ['Rooster\'s criticism stings Rat', 'Rat\'s secrecy annoys Rooster', 'Different communication styles', 'Social friction'],
    },
    ox: {
      base: 88,
      summary: 'A trine match of shared values and mutual admiration. The Ox appreciates the Rooster\'s organization, and the Rooster admires the Ox\'s dependability.',
      strengths: ['Perfectly aligned work ethics', 'Rooster plans, Ox executes', 'Shared love of order', 'Deep mutual respect'],
      challenges: ['Rooster\'s criticism can wound Ox', 'Both can be rigid', 'Risk of becoming too serious', 'Limited spontaneity'],
    },
    tiger: {
      base: 55,
      summary: 'A neutral pairing with friction. The Tiger\'s spontaneity clashes with the Rooster\'s need for order, but mutual courage keeps things interesting.',
      strengths: ['Both are brave and outspoken', 'Rooster admires Tiger\'s courage', 'Tiger respects Rooster\'s honesty', 'Strong presence together'],
      challenges: ['Rooster\'s criticism angers Tiger', 'Tiger\'s chaos frustrates Rooster', 'Different planning styles', 'Verbal conflicts'],
    },
    rabbit: {
      base: 28,
      summary: 'A clash pair of opposing temperaments. The Rooster\'s blunt criticism deeply wounds the sensitive Rabbit, creating lasting resentment.',
      strengths: ['Both appreciate quality', 'Can learn from differences', 'Shared attention to detail', 'Potential for balance'],
      challenges: ['Rooster\'s criticism devastates Rabbit', 'Rabbit\'s avoidance frustrates Rooster', 'Opposing communication styles', 'Emotional incompatibility'],
    },
    dragon: {
      base: 82,
      summary: 'A secret friend pairing of mutual admiration. The Dragon\'s grandeur inspires the Rooster, while the Rooster\'s attention to detail grounds the Dragon.',
      strengths: ['Deep mutual admiration', 'Rooster organizes Dragon\'s vision', 'Dragon empowers Rooster\'s confidence', 'Powerful public couple'],
      challenges: ['Rooster\'s criticism can sting Dragon\'s ego', 'Dragon may ignore Rooster\'s advice', 'Both need admiration', 'Competition for attention'],
    },
    snake: {
      base: 90,
      summary: 'A trine match of perfection and precision. The Snake\'s intuitive wisdom complements the Rooster\'s analytical mind beautifully.',
      strengths: ['Perfect intellectual harmony', 'Rooster admires Snake\'s depth', 'Snake values Rooster\'s honesty', 'Shared pursuit of excellence'],
      challenges: ['Rooster\'s criticism meets Snake\'s pride', 'Both can be demanding', 'Emotional reserve on both sides', 'High expectations'],
    },
    horse: {
      base: 55,
      summary: 'A neutral pair with friction potential. The Rooster\'s perfectionism frustrates the freedom-loving Horse, though mutual courage creates respect.',
      strengths: ['Both are outspoken and brave', 'Rooster admires Horse\'s energy', 'Horse respects Rooster\'s honesty', 'Dynamic together'],
      challenges: ['Rooster\'s nagging drives Horse away', 'Horse\'s messiness annoys Rooster', 'Different values around order', 'Communication conflicts'],
    },
    goat: {
      base: 45,
      summary: 'A harm pair with sharp friction. The Rooster\'s critical nature deeply wounds the sensitive Goat, creating a painful dynamic.',
      strengths: ['Rooster can organize Goat\'s chaos', 'Goat softens Rooster\'s edges', 'Both are creative in different ways', 'Potential for growth'],
      challenges: ['Rooster\'s criticism devastates Goat', 'Goat\'s emotionality frustrates Rooster', 'Very different coping styles', 'Communication pain'],
    },
    monkey: {
      base: 52,
      summary: 'A challenging neutral pairing. The Monkey\'s playfulness irritates the orderly Rooster, while the Rooster\'s criticism annoys the Monkey.',
      strengths: ['Monkey adds humor to Rooster\'s life', 'Rooster grounds Monkey\'s chaos', 'Both are intelligent', 'Can learn from each other'],
      challenges: ['Rooster sees Monkey as irresponsible', 'Monkey finds Rooster too rigid', 'Frequent arguments', 'Different definitions of success'],
    },
    rooster: {
      base: 68,
      summary: 'Two Roosters create impressive order and achievement, but their shared critical nature can turn inward, creating a judgmental atmosphere.',
      strengths: ['Shared love of excellence', 'Incredible organizational power', 'Mutual honesty', 'Impressive shared achievements'],
      challenges: ['Constant mutual criticism', 'Competition for being right', 'Both need to be the authority', 'Emotionally harsh environment'],
    },
    dog: {
      base: 42,
      summary: 'A harm pair with communication pain. The Rooster\'s sharp tongue wounds the Dog\'s sensitive heart, creating cycles of criticism and withdrawal.',
      strengths: ['Both value honesty', 'Shared sense of duty', 'Dog\'s loyalty appeals to Rooster', 'Rooster respects Dog\'s principles'],
      challenges: ['Rooster\'s criticism hurts loyal Dog', 'Dog becomes anxious and defensive', 'Communication breakdowns', 'Emotional wounding'],
    },
    pig: {
      base: 58,
      summary: 'A neutral pairing with warmth potential. The Pig\'s generosity softens the Rooster\'s critical edge, creating a workable if uneven partnership.',
      strengths: ['Pig\'s warmth opens Rooster up', 'Rooster\'s organization helps Pig', 'Both are hardworking', 'Domestic stability'],
      challenges: ['Rooster criticizes Pig\'s indulgence', 'Pig feels judged', 'Different approaches to life', 'Rooster may seem cold to Pig'],
    },
  },

  // ============================================
  // DOG
  // ============================================
  dog: {
    rat: {
      base: 58,
      summary: 'A workable neutral pair. The Dog\'s loyalty appeals to the Rat, but the Dog\'s idealism may clash with the Rat\'s pragmatic self-interest.',
      strengths: ['Dog offers unwavering loyalty', 'Rat provides cleverness', 'Shared protective instincts', 'Both value family'],
      challenges: ['Dog finds Rat too opportunistic', 'Rat finds Dog too moralistic', 'Trust takes time to build', 'Different ethical frameworks'],
    },
    ox: {
      base: 58,
      summary: 'A neutral pairing with potential. Both are loyal and dependable, but the Dog\'s moral crusading can irritate the practical, no-nonsense Ox.',
      strengths: ['Shared loyalty and honesty', 'Both value commitment', 'Stable foundation', 'Mutual protectiveness'],
      challenges: ['Dog\'s anxiety unsettles Ox', 'Ox finds Dog too idealistic', 'Stubbornness on both sides', 'Difficulty expressing emotions'],
    },
    tiger: {
      base: 90,
      summary: 'A trine match of shared justice and loyalty. The Tiger\'s courage and the Dog\'s devotion create a deeply bonded partnership rooted in shared ideals.',
      strengths: ['Deep mutual loyalty', 'Shared sense of justice', 'Dog grounds Tiger\'s wildness', 'Tiger inspires Dog\'s courage'],
      challenges: ['Dog\'s anxiety meets Tiger\'s impulsiveness', 'Both can be moody', 'Tiger may take Dog for granted', 'Emotional intensity'],
    },
    rabbit: {
      base: 80,
      summary: 'A secret friend pairing of gentle loyalty. The Dog\'s devotion gives the Rabbit security, while the Rabbit\'s diplomacy eases the Dog\'s anxieties.',
      strengths: ['Deep mutual loyalty', 'Dog protects sensitive Rabbit', 'Rabbit calms anxious Dog', 'Shared value of home and peace'],
      challenges: ['Both can be pessimistic', 'May avoid necessary risks', 'Codependency risk', 'Limited adventurousness'],
    },
    dragon: {
      base: 28,
      summary: 'A clash pair of opposing values. The Dragon\'s self-confidence clashes with the Dog\'s skepticism, creating fundamental tension and mistrust.',
      strengths: ['Dog keeps Dragon honest', 'Dragon can inspire Dog\'s courage', 'Both are loyal in their way', 'Potential for balanced perspective'],
      challenges: ['Dog sees Dragon as arrogant', 'Dragon finds Dog pessimistic', 'Fundamental value conflict', 'Mutual distrust'],
    },
    snake: {
      base: 55,
      summary: 'A neutral pair with communication challenges. The Dog\'s straightforward loyalty meets the Snake\'s complex inner world in an uneasy match.',
      strengths: ['Dog\'s loyalty reassures Snake', 'Snake\'s wisdom guides Dog', 'Both are loyal once committed', 'Potential for deep bond'],
      challenges: ['Dog distrusts Snake\'s secrecy', 'Snake finds Dog too simple', 'Communication style mismatch', 'Different emotional needs'],
    },
    horse: {
      base: 85,
      summary: 'A trine match of shared idealism and energy. The Horse\'s vitality and the Dog\'s loyalty create a deeply bonded, adventure-loving partnership.',
      strengths: ['Shared love of justice', 'Dog\'s loyalty grounds Horse', 'Horse inspires Dog\'s courage', 'Deep mutual devotion'],
      challenges: ['Dog\'s worry conflicts with Horse\'s carefree nature', 'Horse may feel smothered', 'Both can be emotionally reactive', 'Need for balance'],
    },
    goat: {
      base: 55,
      summary: 'A neutral pairing with emotional complexity. Both are worriers who can either comfort or amplify each other\'s anxieties.',
      strengths: ['Both are emotionally sensitive', 'Dog offers loyalty and protection', 'Goat brings warmth and creativity', 'Shared domestic values'],
      challenges: ['Combined anxiety', 'Both need reassurance', 'Can spiral into pessimism', 'Neither is naturally decisive'],
    },
    monkey: {
      base: 58,
      summary: 'A neutral pair with contrasting values. The Dog\'s honesty clashes with the Monkey\'s trickster nature, though mutual wit keeps things interesting.',
      strengths: ['Both are quick-witted', 'Dog grounds Monkey\'s schemes', 'Monkey lightens Dog\'s worries', 'Intellectual compatibility'],
      challenges: ['Dog questions Monkey\'s honesty', 'Monkey finds Dog too serious', 'Values misalignment', 'Trust takes time'],
    },
    rooster: {
      base: 42,
      summary: 'A harm pair with communication pain. The Rooster\'s sharp tongue wounds the Dog\'s sensitive heart, creating cycles of criticism and withdrawal.',
      strengths: ['Both value honesty', 'Shared sense of duty', 'Dog\'s loyalty appeals to Rooster', 'Rooster respects Dog\'s principles'],
      challenges: ['Rooster\'s criticism hurts loyal Dog', 'Dog becomes anxious and defensive', 'Communication breakdowns', 'Emotional wounding'],
    },
    dog: {
      base: 72,
      summary: 'Two Dogs create a deeply loyal and honest partnership. Their shared devotion is heartwarming, but combined worrying can create an anxious atmosphere.',
      strengths: ['Unbreakable loyalty', 'Shared moral values', 'Deep mutual understanding', 'Honest communication'],
      challenges: ['Double anxiety', 'Pessimistic outlook together', 'Both need reassurance', 'May lack optimism and adventure'],
    },
    pig: {
      base: 62,
      summary: 'A warm, supportive pairing with mutual loyalty. The Pig\'s optimism helps the Dog\'s worry, and the Dog\'s loyalty gives the Pig security.',
      strengths: ['Pig\'s warmth eases Dog\'s anxiety', 'Dog\'s loyalty protects trusting Pig', 'Both are compassionate', 'Strong domestic bond'],
      challenges: ['Dog may judge Pig\'s indulgence', 'Pig may find Dog too serious', 'Different social needs', 'Pace of life differences'],
    },
  },

  // ============================================
  // PIG
  // ============================================
  pig: {
    rat: {
      base: 60,
      summary: 'A generally pleasant connection. The Pig\'s generosity warms the Rat, though the Rat may take advantage of the Pig\'s trusting nature.',
      strengths: ['Pig\'s warmth attracts Rat', 'Shared love of socializing', 'Both enjoy life\'s pleasures', 'Good domestic compatibility'],
      challenges: ['Rat may exploit Pig\'s trust', 'Pig may resent Rat\'s cunning', 'Different moral compasses', 'Financial disagreements'],
    },
    ox: {
      base: 60,
      summary: 'A pleasant connection grounded in shared values. The Pig\'s warmth softens the Ox, and both enjoy domestic stability and simple pleasures.',
      strengths: ['Shared love of home', 'Pig\'s warmth opens Ox up', 'Both value honesty', 'Comfortable domestic life'],
      challenges: ['Pig\'s indulgence annoys frugal Ox', 'Ox may seem cold to Pig', 'Different social needs', 'Pace of life differences'],
    },
    tiger: {
      base: 80,
      summary: 'A secret friend pairing with genuine warmth. The Pig\'s generosity softens the Tiger, while the Tiger\'s bravery gives the Pig confidence.',
      strengths: ['Pig\'s warmth calms Tiger', 'Tiger protects generous Pig', 'Mutual adoration', 'Strong romantic chemistry'],
      challenges: ['Tiger may dominate', 'Pig can be too accommodating', 'Different pace of life', 'Tiger may undervalue Pig\'s contributions'],
    },
    rabbit: {
      base: 88,
      summary: 'A trine match of warmth and refinement. The Rabbit and Pig share a love of comfort, beauty, and social grace, creating a deeply satisfying bond.',
      strengths: ['Shared love of luxury', 'Deep emotional connection', 'Social harmony', 'Mutual generosity'],
      challenges: ['Both may overindulge', 'Avoidance of hard truths', 'Can lack discipline together', 'Too comfortable to grow'],
    },
    dragon: {
      base: 60,
      summary: 'A warm neutral pairing. The Pig\'s generous nature supports the Dragon\'s ambitions, though the Dragon may take the Pig for granted.',
      strengths: ['Pig supports Dragon\'s dreams', 'Dragon offers exciting life', 'Shared optimism', 'Good social chemistry'],
      challenges: ['Dragon exploits Pig\'s generosity', 'Pig feels unappreciated', 'Different depth of emotion', 'Power imbalance'],
    },
    snake: {
      base: 30,
      summary: 'A clash pair of fundamentally incompatible natures. The Snake\'s calculating wisdom opposes the Pig\'s innocent generosity, creating deep mistrust.',
      strengths: ['Initial fascination', 'Pig\'s warmth can melt Snake', 'Snake offers Pig protection', 'Complementary perspectives'],
      challenges: ['Snake manipulates trusting Pig', 'Pig feels deceived by Snake', 'Opposing moral frameworks', 'Deep fundamental mistrust'],
    },
    horse: {
      base: 58,
      summary: 'A neutral pairing with social appeal. Both enjoy life\'s pleasures and socializing, but the Horse\'s independence can hurt the Pig\'s feelings.',
      strengths: ['Shared social nature', 'Pig\'s warmth attracts Horse', 'Both enjoy celebrations', 'Fun-loving partnership'],
      challenges: ['Horse takes Pig for granted', 'Pig wants more commitment', 'Different depth of emotion', 'Lifestyle pace differences'],
    },
    goat: {
      base: 90,
      summary: 'A trine match of shared warmth and creativity. The Goat and Pig are natural soulmates who understand each other\'s emotional and aesthetic needs deeply.',
      strengths: ['Profound emotional connection', 'Shared love of beauty', 'Pig\'s generosity supports Goat', 'Natural soulmate energy'],
      challenges: ['Both may overindulge', 'Lack of practical discipline', 'Can enable each other\'s weaknesses', 'May avoid hard truths'],
    },
    monkey: {
      base: 42,
      summary: 'A harm pair with trust issues at its core. The Monkey\'s cunning nature can exploit the Pig\'s trusting generosity, leading to resentment.',
      strengths: ['Pig\'s optimism attracts Monkey', 'Monkey entertains generous Pig', 'Social compatibility', 'Fun-loving energy'],
      challenges: ['Monkey may exploit Pig\'s trust', 'Pig feels deceived', 'Fundamental trust issues', 'Different moral compasses'],
    },
    rooster: {
      base: 58,
      summary: 'A neutral pairing with warmth potential. The Pig\'s generosity softens the Rooster\'s critical edge, creating a workable if uneven partnership.',
      strengths: ['Pig\'s warmth opens Rooster up', 'Rooster\'s organization helps Pig', 'Both are hardworking', 'Domestic stability'],
      challenges: ['Rooster criticizes Pig\'s indulgence', 'Pig feels judged', 'Different approaches to life', 'Rooster may seem cold to Pig'],
    },
    dog: {
      base: 62,
      summary: 'A warm, supportive pairing with mutual loyalty. The Pig\'s optimism helps the Dog\'s worry, and the Dog\'s loyalty gives the Pig security.',
      strengths: ['Pig\'s warmth eases Dog\'s anxiety', 'Dog\'s loyalty protects trusting Pig', 'Both are compassionate', 'Strong domestic bond'],
      challenges: ['Dog may judge Pig\'s indulgence', 'Pig may find Dog too serious', 'Different social needs', 'Pace of life differences'],
    },
    pig: {
      base: 72,
      summary: 'Two Pigs create a warm, indulgent, and generous world together. Their shared love of pleasure is beautiful but may lack discipline and direction.',
      strengths: ['Shared generosity', 'Beautiful domestic life', 'Deep emotional understanding', 'Warm and supportive bond'],
      challenges: ['Combined overindulgence', 'Lack of discipline', 'Both avoid conflict', 'Financial irresponsibility risk'],
    },
  },
}

// ============================================
// WU XING ELEMENT INTERACTIONS
// ============================================
// Generative cycle: Wood -> Fire -> Earth -> Metal -> Water -> Wood
// Destructive cycle: Wood -> Earth -> Water -> Fire -> Metal -> Wood

// Map each element to what it generates and what it destroys
const GENERATES: Record<ZodiacElement, ZodiacElement> = {
  wood: 'fire',
  fire: 'earth',
  earth: 'metal',
  metal: 'water',
  water: 'wood',
}

const DESTROYS: Record<ZodiacElement, ZodiacElement> = {
  wood: 'earth',
  fire: 'metal',
  earth: 'water',
  metal: 'wood',
  water: 'fire',
}

/**
 * Calculate the element interaction modifier between two elements.
 * - Same element: +5
 * - A generates B: +8
 * - A is generated by B: +5
 * - A destroys B: -8
 * - A is destroyed by B: -5
 * - No direct relation: 0
 */
export function getElementModifier(elementA: ZodiacElement, elementB: ZodiacElement): number {
  if (elementA === elementB) return 5

  // A generates B
  if (GENERATES[elementA] === elementB) return 8
  // B generates A (A is generated by B)
  if (GENERATES[elementB] === elementA) return 5
  // A destroys B
  if (DESTROYS[elementA] === elementB) return -8
  // B destroys A (A is destroyed by B)
  if (DESTROYS[elementB] === elementA) return -5

  return 0
}

// ============================================
// EXPORTED FUNCTIONS
// ============================================

/**
 * Get the full compatibility result between two zodiac signs,
 * combining the base animal compatibility score with element modifiers.
 */
export function getCompatibilityScore(
  animalA: ZodiacAnimal,
  elementA: ZodiacElement,
  animalB: ZodiacAnimal,
  elementB: ZodiacElement,
): CompatibilityResult {
  const baseData = animalCompatibility[animalA][animalB]

  // Element modifier accounts for BOTH directions of interaction
  const modifierAtoB = getElementModifier(elementA, elementB)
  const modifierBtoA = getElementModifier(elementB, elementA)
  const totalModifier = Math.round((modifierAtoB + modifierBtoA) / 2)

  // Clamp final score between 0-100
  const finalScore = Math.max(0, Math.min(100, baseData.base + totalModifier))

  const slugA = `${elementA}-${animalA}`
  const slugB = `${elementB}-${animalB}`

  return {
    signA: slugA,
    signB: slugB,
    score: finalScore,
    summary: baseData.summary,
    strengths: baseData.strengths,
    challenges: baseData.challenges,
  }
}

/**
 * Get the best animal matches for a given animal, sorted by base score descending.
 */
export function getBestMatches(animal: ZodiacAnimal, count: number = 3): ZodiacAnimal[] {
  return ANIMALS
    .filter((a) => a !== animal)
    .sort((a, b) => animalCompatibility[animal][b].base - animalCompatibility[animal][a].base)
    .slice(0, count)
}

/**
 * Get the most challenging animal matches for a given animal, sorted by base score ascending.
 */
export function getChallengingMatches(animal: ZodiacAnimal, count: number = 3): ZodiacAnimal[] {
  return ANIMALS
    .filter((a) => a !== animal)
    .sort((a, b) => animalCompatibility[animal][a].base - animalCompatibility[animal][b].base)
    .slice(0, count)
}
