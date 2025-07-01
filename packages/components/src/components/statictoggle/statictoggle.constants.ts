import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('statictoggle');

const TOGGLE_SIZE = {
  DEFAULT: 'default',
  COMPACT: 'compact',
} as const;

const ICON_NAME = {
  CHECKED: 'check-bold' as Extract<IconNames, 'check-bold'>,
  UNCHECKED: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
} as const;

const ICON_SIZE_IN_PX = {
  compact: 12,
  default: 20,
} as const;

const DEFAULTS = {
  SIZE: TOGGLE_SIZE.DEFAULT,
};

export { TAG_NAME, ICON_SIZE_IN_PX, DEFAULTS, TOGGLE_SIZE, ICON_NAME };
