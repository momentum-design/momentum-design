import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('skeleton');

const SKELETON_TYPES = {
  TEXT: 'text',
  CIRCULAR: 'circular',
  RECTANGULAR: 'rectangular',
  ROUNDED: 'rounded',
} as const;

const DEFAULTS = {
  TYPE: SKELETON_TYPES.RECTANGULAR,
};

export {
  TAG_NAME,
  SKELETON_TYPES,
  DEFAULTS,
};
