import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('badge');

const TYPE = {
  DOT: 'dot',
  ICON: 'icon',
  COUNTER: 'counter',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

const ICON_NAMES_LIST = {
  SUCCESS_ICON_NAME: 'check-circle-badge-filled' as Extract<IconNames, 'check-circle-badge-filled'>,
  WARNING_ICON_NAME: 'warning-badge-filled' as Extract<IconNames, 'warning-badge-filled'>,
  ERROR_ICON_NAME: 'error-legacy-badge-filled' as Extract<IconNames, 'error-legacy-badge-filled'>,
} as const;

const ICON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

const DEFAULTS = {
  TYPE: TYPE.DOT,
  MAX_COUNTER: 99,
  MAX_COUNTER_LIMIT: 999,
  VARIANT: ICON_VARIANT.PRIMARY,
  ICON_SIZE: 1,
  OVERLAY: false,
} as const;

const MOTION_PHASE = {
  ENTERING: 'entering',
  VISIBLE: 'visible',
  UPDATING: 'updating',
  EXITING: 'exiting',
  HIDDEN: 'hidden',
} as const;

const PULSE_STEP = {
  SHRINK: 'shrink',
  GROW: 'grow',
} as const;

const DATA_MOTION_PHASE = 'data-motion-phase';
const DATA_PULSE_STEP = 'data-pulse-step';

export {
  DATA_MOTION_PHASE,
  DATA_PULSE_STEP,
  DEFAULTS,
  ICON_NAMES_LIST,
  ICON_VARIANT,
  MOTION_PHASE,
  PULSE_STEP,
  TAG_NAME,
  TYPE,
};
