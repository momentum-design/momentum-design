import utils from '../../utils/tag-name';
import { VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('checkbox');

const ICON_NAME = {
  CHECKED: 'check-bold' as Extract<IconNames, 'check-bold'>,
  INDETERMINATE: 'minus-bold' as Extract<IconNames, 'minus-bold'>,
} as const;

const CHECKBOX_VALIDATION = {
  ERROR: VALIDATION.ERROR,
  DEFAULT: VALIDATION.DEFAULT,
} as const;

export { TAG_NAME, ICON_NAME, CHECKBOX_VALIDATION };
