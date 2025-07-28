import utils from '../../utils/tag-name';
import { COLOR, TRIGGER } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('coachmark');

const DEFAULTS = {
  COLOR: COLOR.CONTRAST,
  TRIGGER: TRIGGER.MANUAL,
  ARROW: true,
  CLOSE_BUTTON: true,
  DISABLE_ARIA_EXPANDED: true,
} as const;

export { TAG_NAME, DEFAULTS };
