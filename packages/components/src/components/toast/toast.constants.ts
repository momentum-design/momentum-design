import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES, TAG_NAME as BUTTON_TAGNAME} from '../button/button.constants';

const TAG_NAME = utils.constructTagName('toast');

const TOAST_VARIANT = {
  CUSTOM: 'custom',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

const VARIANT_ICON_NAMES = {
  SUCCESS_ICON_NAME: 'check-circle-bold' as Extract<IconNames, 'check-circle-bold'>,
  WARNING_ICON_NAME: 'warning-bold' as Extract<IconNames, 'warning-bold'>,
  ERROR_ICON_NAME: 'error-legacy-bold' as Extract<IconNames, 'error-legacy-bold'>,
} as const;

const DEFAULTS = {
  HEADER_TAG_NAME: 'h2',
  CANCEL_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
  ARROW_UP_BOLD: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN_BOLD: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
  PREFIX_ICON_SIZE: 1.5,
  CLOSE_ICON_SIZE: ICON_BUTTON_SIZES[20],
  BUTTON: BUTTON_TAGNAME,
  PRIMARY_BUTTON: BUTTON_VARIANTS.PRIMARY,
  SECONDARY_BUTTON: BUTTON_VARIANTS.SECONDARY,
  TERTIARY_BUTTON: BUTTON_VARIANTS.TERTIARY,
  VARIANT: TOAST_VARIANT.CUSTOM,
} as const;


export { TAG_NAME, TOAST_VARIANT, VARIANT_ICON_NAMES, DEFAULTS };
