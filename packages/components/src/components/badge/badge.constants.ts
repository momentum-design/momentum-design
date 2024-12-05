import utils from '../../utils/tag-name';

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
  SUCCESS_ICON_NAME: 'check-circle-badge-filled',
  WARNING_ICON_NAME: 'warning-badge-filled',
  ERROR_ICON_NAME: 'error-legacy-badge-filled',
} as const;

const ICON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

const ICON_STATE = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

const BACKGROUND_STYLES = {
  ...ICON_VARIANT,
  ...ICON_STATE,
} as const;

const DEFAULTS = {
  TYPE: TYPE.DOT,
  MAX_COUNTER: 99,
  MAX_COUNTER_LIMIT: 999,
  VARIANT: ICON_VARIANT.PRIMARY,
  ICON_SIZE: 1,
} as const;

export { TAG_NAME, DEFAULTS, TYPE, ICON_STATE, ICON_VARIANT, ICON_NAMES_LIST, BACKGROUND_STYLES };
