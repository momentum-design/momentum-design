import utils from '../../utils/tag-name';
import { TAG_NAME as BUTTON_TAG } from '../button/button.constants';
import { TAG_NAME as LINK_TAG } from '../link/link.constants';

const TAG_NAME = utils.constructTagName('interactive-card');

const DEFAULTS = {
  LINK: LINK_TAG,
  BUTTON: BUTTON_TAG,
};

export { TAG_NAME, DEFAULTS };
