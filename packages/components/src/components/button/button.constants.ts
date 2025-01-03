import utils from '../../utils/tag-name';
import { BUTTON_TYPE } from '../buttonsimple/buttonsimple.constants';

const TAG_NAME = utils.constructTagName('button');

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

const PILL_BUTTON_SIZES = {
  40: 40,
  32: 32,
  28: 28,
  24: 24,
} as const;

const ICON_BUTTON_SIZES = {
  64: 64,
  52: 52,
  20: 20,
  ...PILL_BUTTON_SIZES,
} as const;

const BUTTON_COLORS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  ACCENT: 'accent',
  PROMOTIONAL: 'promotional',
  DEFAULT: 'default',
} as const;

const BUTTON_TYPE_INTERNAL = {
  PILL: 'pill',
  ICON: 'icon',
  PILL_WITH_ICON: 'pill-with-icon',
} as const;

const DEFAULTS = {
  VARIANT: BUTTON_VARIANTS.PRIMARY,
  SIZE: PILL_BUTTON_SIZES[32],
  COLOR: BUTTON_COLORS.DEFAULT,
  TYPE_INTERNAL: BUTTON_TYPE_INTERNAL.ICON,
  TYPE: BUTTON_TYPE.BUTTON,
};

export {
  TAG_NAME,
  DEFAULTS,
  BUTTON_VARIANTS,
  PILL_BUTTON_SIZES,
  ICON_BUTTON_SIZES,
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_TYPE,
};
