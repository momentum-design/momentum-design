import utils from '../../utils/tag-name';
import { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('inputchip');

const DEFAULTS = {
  TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  TAG_NAME: VALID_TEXT_TAGS.SPAN,
  CLOSE_ICON: 'cancel-bold' as Extract<IconNames, 'cancel-bold'>,
};

export { TAG_NAME, DEFAULTS };
