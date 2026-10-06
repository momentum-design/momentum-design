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

const INDICATOR_ORIGIN_VALUES = {
  INLINE_START: 'inline-start',
  INLINE_END: 'inline-end',
  CENTER: 'center',
} as const;

type IndicatorTransformOrigin = (typeof INDICATOR_ORIGIN_VALUES)[keyof typeof INDICATOR_ORIGIN_VALUES];

const INDICATOR_ORIGIN_ATTRIBUTE = 'data-indicator-origin';

const DEFAULTS = {
  VARIANT: TAB_VARIANTS.PILL,
  ACTIVE: false,
  SIZE: TAB_SIZES[32],
} as const;

export { DEFAULTS, INDICATOR_ORIGIN_ATTRIBUTE, INDICATOR_ORIGIN_VALUES, TAG_NAME, TAB_SIZES, TAB_VARIANTS };
export type { IndicatorTransformOrigin };
