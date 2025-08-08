import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('dialog');

const DIALOG_VARIANT = {
  DEFAULT: 'default',
  PROMOTIONAL: 'promotional',
} as const;

const DEFAULTS = {
  VISIBLE: false,
  Z_INDEX: 1000,
  ROLE: 'dialog',
  SIZE: 'small',
  HEADER_TAG_NAME: 'h2',
  DESCRIPTION_TAG_NAME: 'p',
  CANCEL_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
  VARIANT: DIALOG_VARIANT.DEFAULT,
  DISABLE_ARIA_HAS_POPUP: false,
  FOCUS_TRAP: true,
  FOCUS_BACK: true,
} as const;

const DIALOG_SIZE = ['small', 'medium', 'large', 'xlarge', 'fullscreen'] as const;

const DIALOG_ROLE = ['dialog', 'alertdialog'] as const;

export { TAG_NAME, DEFAULTS, DIALOG_SIZE, DIALOG_ROLE, DIALOG_VARIANT };
