import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('tab');

const TAB_VARIANTS = {
  PILL: 'pill',
  LINE: 'line',
} as const;

const DEFAULTS = {
  TAB_VARIANT: TAB_VARIANTS.PILL,
  SIZE: 32,
} as const;

export { DEFAULTS, TAG_NAME, TAB_VARIANTS };
