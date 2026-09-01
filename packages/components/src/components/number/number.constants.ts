import utils from '../../utils/tag-name';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('number');

const DEFAULTS = {
  STEP: 1,
  INCREMENT_ICON: 'plus-bold' as Extract<IconNames, 'plus-bold'>,
  DECREMENT_ICON: 'minus-bold' as Extract<IconNames, 'minus-bold'>,
  STEPPER_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  STEPPER_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
} as const;

export { TAG_NAME, DEFAULTS };
