import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { INPUT_TYPE } from '../input/input.constants';
import { TAG_NAME as INPUT_CHIP_TAG } from '../inputchip/inputchip.constants';
import { TAG_NAME as CHIP_TAG } from '../chip/chip.constants';
import { TAG_NAME as ALERT_CHIP_TAG } from '../alertchip/alertchip.constants';

const TAG_NAME = utils.constructTagName('searchfield');

const DEFAULTS = {
  TYPE: INPUT_TYPE.SEARCH,
  ICON: 'search-bold' as Extract<IconNames, 'search-bold'>,
  CLOSE_BTN: true,
} as const;

export { TAG_NAME, DEFAULTS };

// AI-Assisted
export const SUPPORTED_CHIP_TAGS = [CHIP_TAG, INPUT_CHIP_TAG, ALERT_CHIP_TAG];
export const CHIP_SELECTOR = SUPPORTED_CHIP_TAGS.join(', ');
// End AI-Assisted
