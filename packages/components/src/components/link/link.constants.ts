import utils from '../../utils/tag-name';

const LINK_INLINE = false;

const LINK_INVERTED = false;

const LINK_SIZES = {
  LARGE: 'large',
  MIDSIZE: 'midsize',
  SMALL: 'small',
} as const;

const LINK_ICON_SIZES = {
  LARGE: { size: '1', unit: 'rem' },
  MIDSIZE: { size: '0.875', unit: 'rem' },
  SMALL: { size: '0.75', unit: 'rem' },
} as const;

const TAG_NAME = utils.constructTagName('link');

const DEFAULTS = {
  INLINE: LINK_INLINE,
  INVERTED: LINK_INVERTED,
  LINK_SIZE: LINK_SIZES.LARGE,
};

export {
  DEFAULTS,
  LINK_ICON_SIZES,
  LINK_SIZES,
  TAG_NAME,
};
