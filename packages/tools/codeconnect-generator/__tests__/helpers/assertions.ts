// AI-Assisted
/**
 * @fileoverview Shared assertion helpers for targeted test validation.
 */

/**
 * Asserts that all fragments are present in the content.
 *
 * @param content - Text content to inspect.
 * @param fragments - Required string fragments.
 */
export function expectContainsAll(content: string, fragments: readonly string[]): void {
  for (const fragment of fragments) {
    expect(content).toContain(fragment);
  }
}

/**
 * Asserts that fragments appear in order within the content.
 *
 * @param content - Text content to inspect.
 * @param fragments - Ordered string fragments.
 */
export function expectContainsInOrder(content: string, fragments: readonly string[]): void {
  let cursor = -1;
  for (const fragment of fragments) {
    const nextIndex = content.indexOf(fragment);
    expect(nextIndex).toBeGreaterThan(-1);
    expect(nextIndex).toBeGreaterThan(cursor);
    cursor = nextIndex;
  }
}

/**
 * Asserts that two key lists match after sorting.
 *
 * @param actual - Actual key list.
 * @param expected - Expected key list.
 */
export function expectKeysEqual(actual: readonly string[], expected: readonly string[]): void {
  const sortedActual = [...actual].sort((a, b) => a.localeCompare(b));
  const sortedExpected = [...expected].sort((a, b) => a.localeCompare(b));
  expect(sortedActual).toEqual(sortedExpected);
}

/**
 * Asserts that generated section markers are present.
 *
 * @param content - Text content to inspect.
 */
export function expectGeneratedSectionMarkers(content: string): void {
  expectContainsAll(content, [
    '// BEGIN GENERATED: props',
    '// END GENERATED: props',
    '// BEGIN GENERATED: example',
    '// END GENERATED: example',
  ]);
}
// End AI-Assisted
