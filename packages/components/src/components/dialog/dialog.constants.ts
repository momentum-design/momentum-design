import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { ROLE } from '../../utils/roles';
import { VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('dialog');

const DIALOG_VARIANT = {
  DEFAULT: 'default',
  PROMOTIONAL: 'promotional',
} as const;

const DEFAULTS = {
  VISIBLE: false,
  Z_INDEX: 1000,
  ROLE: ROLE.DIALOG,
  SIZE: 'small',
  HEADER_TAG_NAME: VALID_TEXT_TAGS.H2,
  DESCRIPTION_TAG_NAME: VALID_TEXT_TAGS.P,
  CANCEL_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
  VARIANT: DIALOG_VARIANT.DEFAULT,
  DISABLE_ARIA_HAS_POPUP: false,
  FOCUS_TRAP: true,
} as const;

const DIALOG_SIZE = ['small', 'medium', 'large', 'xlarge', 'fullscreen'] as const;

const DIALOG_ROLE = [ROLE.DIALOG, ROLE.ALERTDIALOG] as const;

export { TAG_NAME, DEFAULTS, DIALOG_SIZE, DIALOG_ROLE, DIALOG_VARIANT };
