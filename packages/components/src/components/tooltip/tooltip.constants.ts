import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('tooltip');

const TOOLTIP_TYPES = {
  DESCRIPTION: 'description',
  LABEL: 'label',
  NONE: 'none',
} as const;

const DEFAULTS = {
  ARIA_HIDDEN: 'true',
  BACKDROP: false,
  DELAY: '0,0',
  DISABLE_ARIA_EXPANDED: true,
  HIDE_ON_BLUR: true,
  HIDE_ON_ESCAPE: true,
  TRIGGER: `${TRIGGER.MOUSEENTER} ${TRIGGER.FOCUSIN}`,
  OFFSET: 4,
  PLACEMENT: POPOVER_PLACEMENT.TOP,
  SHOW_ARROW: true,
  TOOLTIP_TYPE: TOOLTIP_TYPES.DESCRIPTION,
  ONLY_SHOW_WHEN_TRIGGER_OVERFLOWS: false,
} as const;

export { DEFAULTS, TAG_NAME, TOOLTIP_TYPES };
