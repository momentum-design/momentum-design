import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('listitem');

const VARIANT = {
  FULL_WIDTH: 'full-width',
  INSET_PILL: 'inset-pill',
  INSET_RECTANGLE: 'inset-rectangle',
} as const;

const DEFAULTS = {
  VARIANT: VARIANT.FULL_WIDTH,
} as const;

export { DEFAULTS, TAG_NAME, VARIANT };
