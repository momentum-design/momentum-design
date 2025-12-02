import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import type { ColorType } from '../staticchip/staticchip.types';

const TAG_NAME = utils.constructTagName('filterchip');

const DEFAULTS = {
  ICON_NAME: 'check-bold' as Extract<IconNames, 'check-bold'>,
  COLOR: 'default' as Extract<ColorType, 'default'>,
} as const;

export { TAG_NAME, DEFAULTS };
