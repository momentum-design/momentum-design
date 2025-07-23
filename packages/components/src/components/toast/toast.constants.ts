import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { TAG_NAME as BUTTON_TAGNAME} from '../button/button.constants';

const TAG_NAME = utils.constructTagName('toast');

const TOAST_VARIANT = {
  CUSTOM: 'custom',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

const ICON_NAMES_LIST = {
  SUCCESS_ICON_NAME: 'check-circle-bold',
  WARNING_ICON_NAME: 'warning-bold',
  ERROR_ICON_NAME: 'error-legacy-bold',
} as const;

const DEFAULTS = {
  HEADER_TAG_NAME: 'h2',
  CANCEL_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
  ICON_SIZE: 1,
  BUTTON: BUTTON_TAGNAME
} as const;


export { TAG_NAME, TOAST_VARIANT, ICON_NAMES_LIST, DEFAULTS };
