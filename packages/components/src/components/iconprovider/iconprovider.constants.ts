import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('iconprovider');

const ALLOWED_FILE_EXTENSIONS = ['svg'];
const ALLOWED_LENGTH_UNITS = ['em', 'rem', 'px'];

const DEFAULTS:Record<string, string> = {
  FILE_EXTENSION: 'svg',
  LENGTH_UNIT: 'em',
};

const LENGTH_UNIT_DEFAULT_SIZE:Record<string, number> = {
  px: 16,
  em: 1,
  rem: 1,
};

export { TAG_NAME, DEFAULTS, ALLOWED_FILE_EXTENSIONS, LENGTH_UNIT_DEFAULT_SIZE, ALLOWED_LENGTH_UNITS };
