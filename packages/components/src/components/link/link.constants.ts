import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('link');

const LINK_SIZES = {
  LARGE: 'large',
  MIDSIZE: 'midsize',
  SMALL: 'small',
} as const;

const LINK_ICON_SIZES = {
  LARGE: 1,
  MIDSIZE: 0.875,
  SMALL: 0.75,
} as const;

const DEFAULTS = {
  INLINE: false,
  INVERTED: false,
  LINK_SIZE: LINK_SIZES.LARGE,
};

export {
  DEFAULTS,
  LINK_ICON_SIZES,
  LINK_SIZES,
  TAG_NAME,
};
