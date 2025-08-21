import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { INPUT_TYPE } from '../input/input.constants';
import { TAG_NAME as INPUT_CHIP_TAG } from '../inputchip/inputchip.constants';

const TAG_NAME = utils.constructTagName('searchfield');

const DEFAULTS = {
  TYPE: INPUT_TYPE.SEARCH,
  ICON: 'search-bold' as Extract<IconNames, 'search-bold'>,
  CLOSE_BTN: true,
  INPUT_CHIP_TAG,
} as const;

export { TAG_NAME, DEFAULTS };
