import utils from '../../utils/tag-name';
import { COLOR } from '../modalcontainer/modalcontainer.constants';
import { TRIGGER } from '../popover/popover.constants';

const TAG_NAME = utils.constructTagName('coachmark');

const DEFAULTS = {
  COLOR: COLOR.CONTRAST,
  TRIGGER: TRIGGER.MANUAL,
  ARROW: true,
  CLOSE_BUTTON: true,
};

export { TAG_NAME, DEFAULTS };
