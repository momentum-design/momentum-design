import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('brandvisual');

const DEFAULTS = {
  NAME: undefined,
  ALT: undefined,
} as const;

const PATH = {
  LOGOS: 'logos',
  IMAGES: 'images',
  BACKGROUNDS: 'backgrounds',
};

export { TAG_NAME, DEFAULTS, PATH };
