import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitemcheckbox');

const ARIA_CHECKED_STATES = {
  TRUE: 'true',
  FALSE: 'false',
  MIXED: 'mixed',
} as const;

const INDICATOR = {
  CHECKBOX: 'checkbox',
  TOGGLE: 'toggle',
} as const;

const DEFAULTS = {
  INDICATOR: INDICATOR.CHECKBOX,
  ARIA_CHECKED: ARIA_CHECKED_STATES.FALSE,
} as const;

export { TAG_NAME, ARIA_CHECKED_STATES, INDICATOR, DEFAULTS };
