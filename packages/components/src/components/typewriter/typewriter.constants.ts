import utils from '../../utils/tag-name';
import { DEFAULTS as TEXT_DEFAULTS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('typewriter');

const SPEED = {
  VERY_SLOW: 240,
  SLOW: 120,
  NORMAL: 60,
  FAST: 20,
  VERY_FAST: 1,
} as const;

const DEFAULTS = {
  TYPE: TEXT_DEFAULTS.TYPE,
  TEXT_ELEMENT_TAGNAME: TEXT_DEFAULTS.TEXT_ELEMENT_TAGNAME,
  CSS_PART_TEXT: 'text',
  CSS_PART_CONTAINER: 'container',
  CSS_PART_HIDDEN: 'typewriter-hidden',
  CHILDREN: '',
  SPEED: 'normal',
  CUSTOM_EVENT: {
    TYPING_COMPLETE: 'typing-complete',
  },
} as const;

export { TAG_NAME, DEFAULTS, SPEED };
