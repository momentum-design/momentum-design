import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitemcheckbox');

const ARIA_CHECKED_STATES = {
  FALSE: 'false',
  TRUE: 'true',
} as const;

const INDICATOR = {
  CHECKBOX: 'checkbox',
  CHECKMARK: 'checkmark',
  TOGGLE: 'toggle',
} as const;

const DEFAULTS = {
  ARIA_CHECKED: ARIA_CHECKED_STATES.FALSE,
  INDICATOR: INDICATOR.CHECKBOX,
} as const;

export { TAG_NAME, ARIA_CHECKED_STATES, INDICATOR, DEFAULTS };
