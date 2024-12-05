import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('iconprovider');

const ALLOWED_FILE_EXTENSIONS = ['svg'];
const ALLOWED_LENGTH_UNITS = ['em', 'rem', 'px'];
const LENGTH_UNIT_SIZE = {
  px: 16,
  em: 1,
  rem: 1,
} as Record<string, number>;

const DEFAULTS = {
  FILE_EXTENSION: 'svg',
  LENGTH_UNIT: 'em',
  SIZE: LENGTH_UNIT_SIZE.em,
} as const;

export { TAG_NAME, DEFAULTS, ALLOWED_FILE_EXTENSIONS, ALLOWED_LENGTH_UNITS, LENGTH_UNIT_SIZE };
