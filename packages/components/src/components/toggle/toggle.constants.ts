import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('toggle');

const TOGGLE_SIZE = {
  DEFAULT: 'default',
  COMPACT: 'compact',
} as const;

const DEFAULTS = {
  SIZE: TOGGLE_SIZE.DEFAULT,
} as const;

export { TAG_NAME, DEFAULTS, TOGGLE_SIZE };
