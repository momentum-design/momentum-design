import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('selectable-card');

const CHECK_MARK = {
  DEFAULT: 'check-circle-bold' as Extract<IconNames, 'check-circle-bold'>,
  CHECKED: 'check-circle-filled' as Extract<IconNames, 'check-circle-filled'>,
} as const;

const SELECTION_TYPE = {
  CHECK: 'check',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
} as const;

const ROLE = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
} as const;

const DEFAULTS = {
  ROLE: ROLE.CHECKBOX,
  SELECTION_TYPE: SELECTION_TYPE.CHECK,
  ICON_SIZE: 1.5,
  ICON_LENGTH_UNIT: 'rem',
};

export { TAG_NAME, DEFAULTS, SELECTION_TYPE, CHECK_MARK, ROLE };
