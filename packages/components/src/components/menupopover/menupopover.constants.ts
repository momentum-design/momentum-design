import utils from '../../utils/tag-name';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('menupopover');

const DEFAULTS = {
  PLACEMENT: POPOVER_PLACEMENT.BOTTOM_START,
  ORIENTATION: 'vertical',
} as const;

export { TAG_NAME, DEFAULTS };
