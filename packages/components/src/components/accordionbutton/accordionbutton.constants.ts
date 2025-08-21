import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { SIZE } from '../accordiongroup/accordiongroup.constants';

const TAG_NAME = utils.constructTagName('accordionbutton');

const ICON_NAME = {
  ARROW_UP: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
} as const;

const VARIANT = {
  DEFAULT: 'default',
  BORDERLESS: 'borderless',
} as const;

const DEFAULTS = {
  EXPANDED: false,
  SIZE: SIZE.SMALL,
  DATA_ARIA_LEVEL: 3,
  VARIANT: VARIANT.DEFAULT,
  ICON_NAME: ICON_NAME.ARROW_UP,
} as const;

export { TAG_NAME, ICON_NAME, DEFAULTS, VARIANT };
