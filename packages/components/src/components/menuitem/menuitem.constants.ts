import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('menuitem');

const ARROW_ICONS = {
  LEFT: 'arrow-left-bold' as Extract<IconNames, 'arrow-left-bold'>,
  RIGHT: 'arrow-right-bold' as Extract<IconNames, 'arrow-right-bold'>,
} as const;

const ARROW_DIRECTIONS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
} as const;

const ARROW_POSITIONS = {
  LEADING: 'leading',
  TRAILING: 'trailing',
} as const;

export { TAG_NAME, ARROW_ICONS, ARROW_DIRECTIONS, ARROW_POSITIONS };
