import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('dialog');

const DEFAULTS = {
  VISIBLE: false,
  Z_INDEX: 1000,
  ROLE: 'dialog',
  SIZE: 'small',
  HEADER_TAG_NAME: 'h2',
  DESCRIPTION_TAG_NAME: 'p',
  CANCEL_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
} as const;

const DIALOG_SIZE = ['small', 'medium', 'large'] as const;

const DIALOG_ROLE = ['dialog', 'alertdialog'] as const;

export { TAG_NAME, DEFAULTS, DIALOG_SIZE, DIALOG_ROLE };
