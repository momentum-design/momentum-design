import utils from '../../utils/tag-name';
import { INPUT_TYPE } from '../input/input.constants';

const TAG_NAME = utils.constructTagName('searchpopover');

const DEFAULTS = {
  TYPE: INPUT_TYPE.TEXT,
  DISPLAY_POPOVER: false,
} as const;

const TRIGGER_ID = 'searchpopover-container-triggerid';
const POPOVER_ID = 'searchpopover-popoverid';

export { TAG_NAME, DEFAULTS, TRIGGER_ID, POPOVER_ID };
