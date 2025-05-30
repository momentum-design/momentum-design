import utils from '../../utils/tag-name';
import { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('stepperitem');

const VARIANT = {
  INLINE: 'inline',
  STACKED: 'stacked',
} as const;

const STATUS = {
  COMPLETED: 'completed',
  CURRENT: 'current',
  ERROR: 'error',
  FUTURE_CLICKABLE: 'future-clickable',
  FUTURE_DISABLED: 'future-disabled',
} as const;

const STATUS_ICON = {
  COMPLETED: 'check-bold' as Extract<IconNames, 'check-bold'>,
  ERROR: 'error-bold' as Extract<IconNames, 'error-bold'>,
} as const;

const DEFAULT = {
  VARIANT: VARIANT.INLINE,
  STATUS: STATUS.FUTURE_DISABLED,
};

export { TAG_NAME, VARIANT, STATUS, DEFAULT, STATUS_ICON };
