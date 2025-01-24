import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('checkbox');

const ICON_NAME = {
  CHECKED: 'check-regular' as IconNames,
  INDETERMINATE: 'minus-regular' as IconNames,
} as const;

export { TAG_NAME, ICON_NAME };
