import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('linksimple');

const DEFAULTS = {
  INLINE: false,
  INVERTED: false,
} as const;

export { DEFAULTS, TAG_NAME };
