import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('checkbox');

const VALIDATION_MESSAGE = 'Please check this box if you want to proceed.';

const ICON_NAME = {
  CHECKED: 'check-bold' as Extract<IconNames, 'check-bold'>,
  INDETERMINATE: 'minus-bold' as Extract<IconNames, 'minus-bold'>,
} as const;

export { TAG_NAME, ICON_NAME, VALIDATION_MESSAGE };
