import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('toggletip');

const DEFAULTS = {
  CLOSE_BUTTON: true,
  CLOSE_BUTTON_ARIA_LABEL: 'Close',
  OFFSET: 4,
  PLACEMENT: POPOVER_PLACEMENT.TOP,
  CLICK: TRIGGER.CLICK,
  SHOW_ARROW: true,
} as const;

export { DEFAULTS, TAG_NAME };
