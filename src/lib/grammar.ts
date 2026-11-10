/**
 * "a Fire Horse" / "an Earth Snake": the indefinite article for a sign name.
 * Only Earth starts with a vowel sound among the five elements, but this works for any word.
 */
export function withArticle(name: string): string {
  return `${/^[aeiou]/i.test(name.trim()) ? 'an' : 'a'} ${name}`
}
