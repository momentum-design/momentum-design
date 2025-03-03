import utils from '../../utils/tag-name';
import { TYPE as FONT_TYPE } from '../text/text.constants';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';

const TAG_NAME = utils.constructTagName('textarea');

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
  CLEAR_BUTTON_ICON: 'cancel-bold',
  CLEAR_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  CLEAR_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
  RESIZE_BUTTON_ICON: 'resize-corner-light',
  RESIZE_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  RESIZE_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
  CHARACTER_COUNTER_TYPE: FONT_TYPE.BODY_MIDSIZE_REGULAR,
};

export { TAG_NAME, WRAP, AUTO_COMPLETE, DEFAULTS };
