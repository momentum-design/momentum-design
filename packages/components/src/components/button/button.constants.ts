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
  OVERLAY: 'overlay',
  DEFAULT: 'default',
} as const;

const BUTTON_TYPE_INTERNAL = {
  PILL: 'pill',
  ICON: 'icon',
  PILL_WITH_ICON: 'pill-with-icon',
} as const;

const PRIMARY_BUTTON_COLORS = {
  POSITIVE: BUTTON_COLORS.POSITIVE,
  NEGATIVE: BUTTON_COLORS.NEGATIVE,
  ACCENT: BUTTON_COLORS.ACCENT,
  PROMOTIONAL: BUTTON_COLORS.PROMOTIONAL,
  DEFAULT: BUTTON_COLORS.DEFAULT,
} as const;

const TERTIARY_BUTTON_COLORS = {
  DEFAULT: BUTTON_COLORS.DEFAULT,
  ACCENT: BUTTON_COLORS.ACCENT,
  NEGATIVE: BUTTON_COLORS.NEGATIVE,
} as const;

// secondary supports every color, so it's just an alias of the full BUTTON_COLORS set
const SECONDARY_BUTTON_COLORS = BUTTON_COLORS;

const DEFAULTS = {
  VARIANT: BUTTON_VARIANTS.PRIMARY,
  SIZE: PILL_BUTTON_SIZES[32],
  COLOR: BUTTON_COLORS.DEFAULT,
  TYPE_INTERNAL: BUTTON_TYPE_INTERNAL.ICON,
  TYPE: BUTTON_TYPE.BUTTON,
  INVERTED: false,
} as const;

export {
  TAG_NAME,
  DEFAULTS,
  BUTTON_VARIANTS,
  PILL_BUTTON_SIZES,
  ICON_BUTTON_SIZES,
  BUTTON_COLORS,
  PRIMARY_BUTTON_COLORS,
  SECONDARY_BUTTON_COLORS,
  TERTIARY_BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_TYPE,
};
