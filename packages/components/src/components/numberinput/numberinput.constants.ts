import utils from '../../utils/tag-name';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';

const TAG_NAME = utils.constructTagName('numberinput');

const CLAMP = {
  NONE: 'none',
  AUTO: 'auto',
} as const;

const DEFAULTS = {
  STEP: 1,
  STEP_ANY: 'any',
  CLAMP: CLAMP.NONE,
  INCREMENT_ICON: 'plus-bold' as const,
  DECREMENT_ICON: 'minus-bold' as const,
  SPINNER_BUTTON_VARIANT: BUTTON_VARIANTS.TERTIARY,
  SPINNER_BUTTON_SIZE: ICON_BUTTON_SIZES[20],
} as const;

export { TAG_NAME, DEFAULTS, CLAMP };
