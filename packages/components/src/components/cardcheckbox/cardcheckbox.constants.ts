import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('cardcheckbox');

const CHECK_MARK = {
  DEFAULT: 'check-circle-bold' as Extract<IconNames, 'check-circle-bold'>,
  CHECKED: 'check-circle-filled' as Extract<IconNames, 'check-circle-filled'>,
} as const;

const SELECTION_TYPE = {
  CHECK: 'check',
  CHECKBOX: 'checkbox',
} as const;

const DEFAULTS = {
  SELECTION_TYPE: SELECTION_TYPE.CHECK,
  ICON_SIZE: 1.5,
  ICON_LENGTH_UNIT: 'rem',
} as const;

export { TAG_NAME, DEFAULTS, SELECTION_TYPE, CHECK_MARK };
