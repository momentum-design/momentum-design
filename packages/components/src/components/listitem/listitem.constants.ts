import { v4 as uuidv4 } from 'uuid';
import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('listitem');
const TOOLTIP_ID = `listitem-tooltip-popover-${uuidv4()}`;
const LISTITEM_ID = `listitem-tooltip-triggerid-${uuidv4()}`;

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
