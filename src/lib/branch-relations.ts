/**
 * The traditional relations between the 12 zodiac animals (三合 trine, 六合 six harmony /
 * secret friend, 冲 clash, 害 harm), computed from the order of the 12 Earthly Branches.
 * Used by the relations blog post and the animal pages (/zodiac/animal/:animal). The post's
 * tests check every one of the 144 pairs against the reading engine (describeAnimalRelation
 * in src/lib/readings/server/context.ts) and the compatibility tool
 * (src/content/__tests__/relations-post.test.ts).
 * Server code imports this file through the post: relative imports only.
 */
import type { ZodiacAnimal } from '../types'

/** The 12 Earthly Branches in their traditional order, Rat 子 to Pig 亥 */
export const BRANCH_ORDER: { animal: ZodiacAnimal; char: string }[] = [
  { animal: 'rat', char: '子' },
  { animal: 'ox', char: '丑' },
  { animal: 'tiger', char: '寅' },
  { animal: 'rabbit', char: '卯' },
  { animal: 'dragon', char: '辰' },
  { animal: 'snake', char: '巳' },
  { animal: 'horse', char: '午' },
  { animal: 'goat', char: '未' },
  { animal: 'monkey', char: '申' },
  { animal: 'rooster', char: '酉' },
  { animal: 'dog', char: '戌' },
  { animal: 'pig', char: '亥' },
]

/** The four trines, named after their element, written in their traditional character order */
export const TRINES: { element: string; animals: ZodiacAnimal[]; chars: string }[] = [
  { element: 'Water', animals: ['monkey', 'rat', 'dragon'], chars: '申子辰' },
  { element: 'Metal', animals: ['snake', 'rooster', 'ox'], chars: '巳酉丑' },
  { element: 'Fire', animals: ['tiger', 'horse', 'dog'], chars: '寅午戌' },
  { element: 'Wood', animals: ['pig', 'rabbit', 'goat'], chars: '亥卯未' },
]

export type Relation = 'same' | 'trine' | 'secret-friend' | 'clash' | 'harm' | 'neutral'

const index = (animal: ZodiacAnimal) => BRANCH_ORDER.findIndex(branch => branch.animal === animal)

/**
 * The traditional relation between two animals, from their places in the branch order:
 * trines are 4 places apart, a clash is 6 places away (opposite), and the secret-friend
 * and harm pairs are fixed pairs whose places add up to 1 and 7 (mod 12).
 */
export function relationBetween(a: ZodiacAnimal, b: ZodiacAnimal): Relation {
  const [i, j] = [index(a), index(b)]
  if (i === j) return 'same'
  if ((i + 6) % 12 === j) return 'clash'
  if ((i + j) % 12 === 1) return 'secret-friend'
  if (i % 4 === j % 4) return 'trine'
  if ((i + j) % 12 === 7) return 'harm'
  return 'neutral'
}

/** All animals with a given relation to an animal, in branch order */
export function partners(animal: ZodiacAnimal, relation: Relation): ZodiacAnimal[] {
  return BRANCH_ORDER.map(branch => branch.animal).filter(other => relationBetween(animal, other) === relation)
}

/** "子午" for a pair, in branch order */
export function pairChars(a: ZodiacAnimal, b: ZodiacAnimal): string {
  const [first, second] = [index(a), index(b)].sort((x, y) => x - y)
  return BRANCH_ORDER[first!]!.char + BRANCH_ORDER[second!]!.char
}

/** The six pairs of a relation, each once, in branch order of the first animal */
export function pairsOf(relation: 'secret-friend' | 'clash' | 'harm'): [ZodiacAnimal, ZodiacAnimal][] {
  const pairs: [ZodiacAnimal, ZodiacAnimal][] = []
  for (const { animal } of BRANCH_ORDER) {
    for (const other of partners(animal, relation)) {
      if (index(other) > index(animal)) pairs.push([animal, other])
    }
  }
  return pairs
}
