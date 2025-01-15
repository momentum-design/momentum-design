import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('input');

const VALIDATION = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  PRIORITY: 'priority',
  DEFAULT: 'default',
} as const;

const TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  TEL: 'tel',
  URL: 'url',
  SEARCH: 'search',
} as const;

const PREFIX_TEXT_OPTIONS = {
  MAX_LENGTH: 10,
  HELPERTEXT: 'Prefix text should not exceed 10 characters',
  VALIDATION: VALIDATION.ERROR,
};

const DEFAULTS = {
  NAME: undefined,
  INFO_ICON_NAME: 'info-circle-filled',
  SIZE: 1,
  VALIDATION: VALIDATION.DEFAULT,
  TYPE: TYPE.TEXT,
} as const;

export { TAG_NAME, DEFAULTS, VALIDATION, PREFIX_TEXT_OPTIONS, TYPE };
