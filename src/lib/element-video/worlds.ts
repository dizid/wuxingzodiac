// ============================================
// STEP INTO YOUR ELEMENT — the world for each of the 60 signs
// ============================================
// Browser-safe (no Node imports): the product page shows `worldSummary()`,
// the server sends `buildWorldPrompt()` to Genie 4. Both come from the same
// element landscape + animal presence, so the page describes what is made.
//
// Genie 4 rules that shape these texts (Gemini API docs, Nov 2026):
// - one `world_setup` prompt starts the world; first-person POV works best
// - describe sound in an "Audio:" sentence (the model renders stereo audio)
// - no real people, public figures or brand IP (blocked at startup)
// - no camera cuts ("cut to aerial view" breaks the world)

import type { ZodiacAnimal, ZodiacElement } from '@/types'

interface ElementWorld {
  /** The landscape you step into (first person). */
  place: string
  /** How the element shows in the animal's body. */
  animalEssence: string
  /** Sound bed for the "Audio:" sentence. */
  audio: string
  /** Short phrase for the product page, e.g. "a volcanic plain at dusk". */
  short: string
}

const ELEMENT_WORLDS: Record<ZodiacElement, ElementWorld> = {
  wood: {
    place:
      'an ancient bamboo and pine forest at dawn, shafts of green-gold light through drifting mist, a moss-covered stone path, jade-green leaves falling slowly',
    animalEssence: 'its coat woven with living vines and young leaves that glow jade green',
    audio: 'wind moving through tall bamboo, birdsong, soft creaking of wood, leaves rustling underfoot',
    short: 'an ancient bamboo forest at dawn',
  },
  fire: {
    place:
      'a vast volcanic plain at dusk, rivers of glowing lava between black rock, embers swirling through the air under a red-orange sky',
    animalEssence: 'a mane and tail of living flame, sparks trailing behind it',
    audio: 'a deep volcanic rumble, crackling fire, hot wind roaring, embers hissing',
    short: 'a volcanic plain at dusk',
  },
  earth: {
    place:
      'golden terraced hills above an ochre canyon at sunset, warm dust glowing in the light, weathered stone arches along an old path',
    animalEssence: 'a coat like polished amber and golden stone, warm light glowing from within',
    audio: 'warm wind over dry grass, distant temple bells, footsteps on packed earth',
    short: 'golden terraced hills at sunset',
  },
  metal: {
    place:
      'a moonlit mountain pass of silver granite and white quartz, frost glittering on the rocks, bronze temple gongs hanging from an old gate',
    animalEssence: 'a body that gleams like polished silver, moonlight sliding over it',
    audio: 'crisp mountain wind, high metallic chimes, the slow hum of a distant gong',
    short: 'a moonlit silver mountain pass',
  },
  water: {
    place:
      'a misty river between tall limestone peaks at night under a full moon, glassy water reflecting floating paper lanterns, mist drifting low',
    animalEssence: 'a translucent body formed of flowing water and mist, ripples of moonlight inside it',
    audio: 'flowing water, gentle rain on the river, a soft slow drum far away',
    short: 'a misty moonlit river',
  },
}

/** What the animal does in its world; `{essence}` is the element's look. */
const ANIMAL_PRESENCE: Record<ZodiacAnimal, string> = {
  rat: 'A quick, bright-eyed rat with {essence} darts along the path ahead, stops, and looks back at you.',
  ox: 'A huge, calm ox with {essence} stands on the path ahead, breathing slowly, then turns its head toward you.',
  tiger: 'A powerful tiger with {essence} prowls out from ahead and walks toward you with steady eyes.',
  rabbit: 'A graceful rabbit with {essence} leaps lightly across the path ahead and sits up to watch you.',
  dragon:
    'A long Chinese dragon with {essence} winds slowly through the sky above the path ahead, then turns its great head toward you.',
  snake: 'A long, elegant snake with {essence} uncoils on a rock beside the path ahead and raises its head toward you.',
  horse: 'A powerful horse with {essence} gallops across the land ahead, circles, and slows to a proud walk toward you.',
  goat: 'A gentle goat with {essence} stands on a ledge beside the path ahead and calmly watches you approach.',
  monkey: 'A clever monkey with {essence} swings down from above onto the path ahead and beckons you forward.',
  rooster: 'A proud rooster with {essence} stands on a stone post ahead, spreads its wings and calls out.',
  dog: 'A loyal dog with {essence} runs up the path toward you and walks beside you like an old friend.',
  pig: 'A cheerful, round pig with {essence} trots happily along the path ahead and looks back at you.',
}

function presence(element: ZodiacElement, animal: ZodiacAnimal): string {
  return ANIMAL_PRESENCE[animal].replace('{essence}', ELEMENT_WORLDS[element].animalEssence)
}

/**
 * The `world_setup` prompt for one sign: first-person walk into the element's
 * landscape, the sign's animal in it, and the sound of the place.
 */
export function buildWorldPrompt(element: ZodiacElement, animal: ZodiacAnimal): string {
  const world = ELEMENT_WORLDS[element]
  return [
    `Immersive first-person view, walking slowly forward into ${world.place}.`,
    presence(element, animal),
    'Cinematic, richly detailed, magical realism inspired by Chinese landscape painting, soft volumetric light.',
    `Audio: ${world.audio}.`,
  ].join(' ')
}

/**
 * Mid-video text input (sent once the walk is under way): the animal comes
 * close. Genie applies text in ~1-2 s, so it lands in the second half.
 */
export function buildCloseUpPrompt(element: ZodiacElement, animal: ZodiacAnimal): string {
  const essence = ELEMENT_WORLDS[element].animalEssence
  return `The ${animal} with ${essence} comes close and looks straight at you, calm and majestic.`
}

/** One line for the product page, e.g. "a volcanic plain at dusk, with a horse of living flame". */
export function worldSummary(element: ZodiacElement): string {
  return ELEMENT_WORLDS[element].short
}
