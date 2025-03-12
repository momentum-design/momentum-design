import utils from '../../utils/tag-name';
import { TYPE as FONT_TYPE } from '../text/text.constants';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('textarea');
const CLEAR_BUTTON_ICON: Extract<IconNames, 'cancel-bold'> = 'cancel-bold';

const WRAP = {
  HARD: 'hard',
  SOFT: 'soft',
} as const;

const AUTO_COMPLETE = {
  OFF: 'off',
  ON: 'on',
} as const;

const DEFAULTS = {
  ICON_SIZE_VALUE: 1,
  ICON_SIZE_UNIT: 'rem',
  CLEAR_BUTTON_ICON,
  CLEAR_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  CLEAR_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
  CHARACTER_COUNTER_TYPE: FONT_TYPE.BODY_MIDSIZE_REGULAR,
  ROWS: 5,
  COLS: 40,
  WRAP: WRAP.SOFT,
};

export { TAG_NAME, WRAP, AUTO_COMPLETE, DEFAULTS };
