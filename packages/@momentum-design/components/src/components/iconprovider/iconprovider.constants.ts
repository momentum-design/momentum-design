import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('iconprovider');

const ALLOWED_FILE_EXTENSIONS = ['svg'];

const DEFAULTS = {
  FILE_EXTENSION: 'svg',
  LENGTH_UNIT: 'em',
};

export { TAG_NAME, DEFAULTS, ALLOWED_FILE_EXTENSIONS };
