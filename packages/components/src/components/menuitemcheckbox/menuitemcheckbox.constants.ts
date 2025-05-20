import utils from '../../utils/tag-name';
import { ARIA_CHECKED_STATES } from '../menusection/menusection.constants';

const TAG_NAME = utils.constructTagName('menuitemcheckbox');

const INDICATOR = {
  CHECKBOX: 'checkbox',
  CHECKMARK: 'checkmark',
  TOGGLE: 'toggle',
} as const;

const DEFAULTS = {
  ARIA_CHECKED: ARIA_CHECKED_STATES.FALSE,
  INDICATOR: INDICATOR.CHECKBOX,
} as const;

export { TAG_NAME, INDICATOR, DEFAULTS };
