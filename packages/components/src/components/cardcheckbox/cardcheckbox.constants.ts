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

const DATA_MOTION = {
  BACKGROUND: 'data-motion-background',
  ACTIVE: 'data-motion-active',
} as const;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export { TAG_NAME, DEFAULTS, SELECTION_TYPE, CHECK_MARK, DATA_MOTION, REDUCED_MOTION_QUERY };
