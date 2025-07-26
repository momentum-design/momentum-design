import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('spinner');

const SPINNER_SIZES = {
  LARGE: 'large',
  MIDSIZE: 'midsize',
  SMALL: 'small',
} as const;

const SPINNER_VARIANT = {
  STANDALONE: 'standalone',
  BUTTON: 'button',
} as const;

const DEFAULTS = {
  VARIANT: SPINNER_VARIANT.STANDALONE,
  SIZE: SPINNER_SIZES.MIDSIZE,
  INVERTED: false,
} as const;

export { TAG_NAME, SPINNER_SIZES, SPINNER_VARIANT, DEFAULTS };
