import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menuitemcheckbox');

const INDICATOR = {
  CHECKBOX: 'checkbox',
  CHECKMARK: 'checkmark',
  TOGGLE: 'toggle',
} as const;

const DEFAULTS = {
  INDICATOR: INDICATOR.CHECKBOX,
} as const;

export { TAG_NAME, INDICATOR, DEFAULTS };
