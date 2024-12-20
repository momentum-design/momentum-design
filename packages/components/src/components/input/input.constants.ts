import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('input');

const VALIDATION = {
  ERROR: 'error',
  ERROR: 'error',
  DEFAULT: 'default',
};

const DEFAULTS = {
  NAME: undefined,
  INFO_ICON_NAME: 'info-filled',
  SIZE: 1,
} as const;

export { TAG_NAME, DEFAULTS, VALIDATION };
