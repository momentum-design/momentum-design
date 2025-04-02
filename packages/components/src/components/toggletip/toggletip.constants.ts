import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('toggletip');

const DEFAULTS = {
  CLOSE_BUTTON: true,
  CLOSE_BUTTON_ARIA_LABEL: 'Close',
  OFFSET: 4,
  PLACEMENT: POPOVER_PLACEMENT.TOP,
  SHOW_ARROW: true,
};

export { DEFAULTS, TAG_NAME };
