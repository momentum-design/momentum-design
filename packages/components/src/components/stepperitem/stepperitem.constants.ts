import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('stepperitem');

const VARIANT = {
  INLINE: 'inline',
  STACKED: 'stacked',
} as const;

const STATUS = {
  COMPLETED: 'completed',
  CURRENT: 'current',
  ERROR_CURRENT: 'error-current',
  ERROR_INCOMPLETE: 'error-incomplete',
  NOT_STARTED: 'not-started',
} as const;

const STATUS_ICON = {
  COMPLETED: 'check-bold' as Extract<IconNames, 'check-bold'>,
  ERROR: 'error-legacy-badge-filled' as Extract<IconNames, 'error-legacy-badge-filled'>,
  PENCIL: 'edit-bold' as Extract<IconNames, 'edit-bold'>,
} as const;

const DEFAULT = {
  VARIANT: VARIANT.INLINE,
  STATUS: STATUS.NOT_STARTED,
};

export { TAG_NAME, VARIANT, STATUS, DEFAULT, STATUS_ICON };
