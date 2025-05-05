import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('navitemlist');

const DEFAULTS = {
  ROLE: 'menubar',
} as const;

export { DEFAULTS, TAG_NAME };
