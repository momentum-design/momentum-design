import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('button');

const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const PILL_BUTTON_SIZES = [40, 32, 28, 24];

const ICON_BUTTON_SIZES = [64, 52, 20, ...PILL_BUTTON_SIZES];

const BUTTON_COLORS = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  ACCENT: 'accent',
  PROMOTIONAL: 'promotional',
  ACTIVE: 'active',
};

const BUTTON_TYPE = {
  PILL: 'pill',
  ICON: 'icon',
  PILL_WITH_ICON: 'pill-with-icon',
};

const DEFAULTS = {
  VARIANT: BUTTON_VARIANTS.PRIMARY,
  SIZE: ICON_BUTTON_SIZES[32],
  COLOR: BUTTON_COLORS.ACTIVE,
  TYPE: BUTTON_TYPE.PILL,
};

export { TAG_NAME, DEFAULTS, BUTTON_VARIANTS, PILL_BUTTON_SIZES, ICON_BUTTON_SIZES, BUTTON_COLORS, BUTTON_TYPE };
