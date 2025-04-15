import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tab');

const TAB_VARIANTS = {
  GLASS: 'glass',
  LINE: 'line',
  PILL: 'pill',
} as const;

const DEFAULTS = {
  VARIANT: TAB_VARIANTS.PILL,
  ACTIVE: false,
} as const;

export { DEFAULTS, TAG_NAME, TAB_VARIANTS };
