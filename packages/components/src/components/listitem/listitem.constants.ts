import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('listitem');
const TOOLTIP_ID = 'dynamic-listitem-tooltip-popover';
const LISTITEM_ID = 'dynamic-listitem-tooltip-triggerid';

const LISTITEM_VARIANTS = {
  FULL_WIDTH: 'full-width',
  INSET_PILL: 'inset-pill',
  INSET_RECTANGLE: 'inset-rectangle',
} as const;

const DEFAULTS = {
  VARIANT: LISTITEM_VARIANTS.FULL_WIDTH,
  TOOLTIP_PLACEMENT: POPOVER_PLACEMENT.TOP,
} as const;

export { DEFAULTS, TAG_NAME, LISTITEM_VARIANTS, TOOLTIP_ID, LISTITEM_ID };
