import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tab');

const TAB_VARIANTS = {
  GLASS: 'glass',
  LINE: 'line',
  PILL: 'pill',
} as const;

const TAB_SIZES = {
  32: 32,
  28: 28,
} as const;

const DEFAULTS = {
  VARIANT: TAB_VARIANTS.PILL,
  ACTIVE: false,
  SIZE: TAB_SIZES[32],
} as const;

export { DEFAULTS, TAG_NAME, TAB_VARIANTS, TAB_SIZES };
