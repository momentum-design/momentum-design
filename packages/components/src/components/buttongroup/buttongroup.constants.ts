import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('buttongroup');

const BUTTON_GROUP_SIZE = {
  40: 40,
  32: 32,
  28: 28,
  24: 24,
} as const;

const BUTTON_GROUP_ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const BUTTON_GROUP_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

const DEFAULTS = {
  SIZE: BUTTON_GROUP_SIZE[28],
  VARIANT: BUTTON_GROUP_VARIANT.PRIMARY,
  ORIENTATION: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
} as const;

export { TAG_NAME, DEFAULTS, BUTTON_GROUP_SIZE, BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_VARIANT };
