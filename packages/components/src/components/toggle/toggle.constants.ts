import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('toggle');

const TOGGLE_SIZE = {
  DEFAULT: 'default',
  COMPACT: 'compact',
} as const;

const ICON_NAME = {
  CHECKED: 'check-regular' as IconNames,
  UNCHECKED: 'cancel-regular' as IconNames,
} as const;

const DEFAULTS = {
  SIZE: TOGGLE_SIZE.DEFAULT,
} as const;

export { TAG_NAME, DEFAULTS, TOGGLE_SIZE, ICON_NAME };
