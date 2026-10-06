import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import type { ColorType } from '../staticchip/staticchip.types';

const TAG_NAME = utils.constructTagName('filterchip');

const DEFAULTS = {
  ICON_NAME: 'check-bold' as Extract<IconNames, 'check-bold'>,
  COLOR: 'default' as Extract<ColorType, 'default'>,
} as const;

const DATA_MOTION = {
  SURFACE: 'data-motion-surface',
  ACTIVE: 'data-motion-active',
} as const;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export { TAG_NAME, DEFAULTS, DATA_MOTION, REDUCED_MOTION_QUERY };
