import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('avatar');

const AVATAR_TYPES = {
  COUNTER: 'counter',
  ICON: 'icon',
  PHOTO: 'photo',
  TEXT: 'text',
} as const;

const MAX_COUNTER = 99;

const DEFAULTS = {
  TYPE: 'photo' as const,
};

export {
  TAG_NAME,
  DEFAULTS,
  AVATAR_TYPES,
  MAX_COUNTER,
};
