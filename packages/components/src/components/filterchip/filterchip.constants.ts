import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { ColorType } from '../chip/chip.types';

const TAG_NAME = utils.constructTagName('filterchip');

const DEFAULTS = {
  ICON_NAME: 'check-bold' as Extract<IconNames, 'check-bold'>,
  COLOR: 'default' as Extract<ColorType, 'default'>,
};

export { TAG_NAME, DEFAULTS };
