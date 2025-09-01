import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('listitem');

const LISTITEM_VARIANTS = {
  FULL_WIDTH: 'full-width',
  INSET_PILL: 'inset-pill',
  INSET_RECTANGLE: 'inset-rectangle',
} as const;

const DEFAULTS = {
  VARIANT: LISTITEM_VARIANTS.FULL_WIDTH,
} as const;

export { DEFAULTS, TAG_NAME, LISTITEM_VARIANTS };
