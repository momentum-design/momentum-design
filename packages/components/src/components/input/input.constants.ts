import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('input');

const VALIDATION = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  PRIORITY: 'priority',
  DEFAULT: 'default',
} as const;

const DEFAULTS = {
  NAME: undefined,
  INFO_ICON_NAME: 'info-circle-filled',
  SIZE: 1,
  VALIDATION: VALIDATION.DEFAULT,
} as const;

export { TAG_NAME, DEFAULTS, VALIDATION };
