/**
 * Accessibility constants
 *
 * WCAG_TAGS_TO_CHECK which should be checked,
 * see full list here (Axe-core Tags): https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
 * Note: WCAG Tags are cummulative, such that when confirming WCAG 2.2 AA,
 * the less strict tags have to be added as well, like wcag2a, wcag2aa, wcag21aa
 *
 * RULES_TO_DISABLE which should not be checked,
 * see full list here: https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
 */
const ACCESSIBILITY = {
  WCAG_TAGS_TO_CHECK: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
  RULES_TO_DISABLE: [],
};

const VISUAL_REGRESSION = {
  THRESHOLD: 0.1,
  MAX_DIFF_PIXELS_RATIO: 0.05,
  FILE_EXTENSION: 'png',
};

const CONSTANTS = {
  ACCESSIBILITY,
  VISUAL_REGRESSION,
};
export default CONSTANTS;
