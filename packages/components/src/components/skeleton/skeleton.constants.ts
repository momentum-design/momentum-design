import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('skeleton');

const SKELETON_VARIANTS = {
  BUTTON: 'button',
  CIRCULAR: 'circular',
  RECTANGULAR: 'rectangular',
  ROUNDED: 'rounded',
} as const;

const DEFAULTS = {
  VARIANT: SKELETON_VARIANTS.RECTANGULAR,
} as const;

export { TAG_NAME, SKELETON_VARIANTS, DEFAULTS };
