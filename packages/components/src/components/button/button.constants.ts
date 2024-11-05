import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('button');

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const BUTTON_SIZES = {
  40: 40,
  32: 32,
  28: 28,
  24: 24,
  20: 20,
};

const BUTTON_COLORS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  ACCENT: 'accent',
  PROMOTIONAL: 'promotional',
  ACTIVE: 'active',
};

const DEFAULTS = {
  VARIANT: BUTTON_VARIANTS.PRIMARY,
  SIZE: BUTTON_SIZES[32],
  COLOR: BUTTON_COLORS.ACTIVE,
};

export { TAG_NAME, DEFAULTS, BUTTON_VARIANTS, BUTTON_SIZES, BUTTON_COLORS };
