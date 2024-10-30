import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('badge');

const BADGE_TYPE = {
  DOT: 'dot',
  ICON: 'icon',
  COUNTER: 'counter',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const ICON_NAMES_LIST = {
  SUCCESS_ICON_NAME: 'check-circle-filled',
  WARNING_ICON_NAME: 'warning-filled',
  ERROR_ICON_NAME: 'error-legacy-filled',
};

const ICON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const ICON_STATE = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const MAX_COUNTER_LIST = [9, 99, 999];

const DEFAULTS = {
  TYPE: BADGE_TYPE.COUNTER,
  LENGTH_UNIT: 'rem',
  MAX_COUNTER: MAX_COUNTER_LIST[1],
  MAX_COUNTER_LIMIT: MAX_COUNTER_LIST[MAX_COUNTER_LIST.length - 1],
  VARIANT: ICON_VARIANT.PRIMARY,
  ICON_SIZE: 1,
};

export {
  TAG_NAME,
  DEFAULTS,
  BADGE_TYPE,
  ICON_STATE,
  ICON_VARIANT,
  ICON_NAMES_LIST,
  MAX_COUNTER_LIST,
};
