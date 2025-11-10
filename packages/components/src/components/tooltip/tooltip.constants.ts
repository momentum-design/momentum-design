import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('tooltip');

const TOOLTIP_TYPES = {
  DESCRIPTION: 'description',
  LABEL: 'label',
  NONE: 'none',
} as const;

const DEFAULTS = {
  BACKDROP: false,
  DELAY: '0,0',
  OFFSET: 4,
  PLACEMENT: POPOVER_PLACEMENT.TOP,
  SHOW_ARROW: true,
  TOOLTIP_TYPE: TOOLTIP_TYPES.DESCRIPTION,
} as const;

export { DEFAULTS, TAG_NAME, TOOLTIP_TYPES };
