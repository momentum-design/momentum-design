import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('illustrationprovider');

const ALLOWED_FILE_EXTENSIONS = ['svg'];

const DEFAULTS = {
  FILE_EXTENSION: 'svg',
  ILLUSTRATION_SET: 'momentum-illustrations',
} as const;

export { TAG_NAME, DEFAULTS, ALLOWED_FILE_EXTENSIONS };
