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
  NONE: 'none',
} as const;

const CHECKMARK_PLACEMENT = {
  LEADING: 'leading',
  TRAILING: 'trailing',
} as const;

const DEFAULTS = {
  INDICATOR: INDICATOR.CHECKBOX,
  ARIA_CHECKED: ARIA_CHECKED_STATES.FALSE,
  CHECKMARK_PLACEMENT: CHECKMARK_PLACEMENT.LEADING,
} as const;

export { TAG_NAME, ARIA_CHECKED_STATES, INDICATOR, CHECKMARK_PLACEMENT, DEFAULTS };
