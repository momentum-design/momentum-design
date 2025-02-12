import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tab');

const TAB_VARIANTS = {
  GLASS: 'glass',
  LINE: 'line',
  PILL: 'pill',
} as const;

const DEFAULTS = {
  TAB_VARIANT: TAB_VARIANTS.PILL,
} as const;

export { DEFAULTS, TAG_NAME, TAB_VARIANTS };
