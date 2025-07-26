import utils from '../../utils/tag-name';
import { TYPE as FONT_TYPE } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('textarea');

const WRAP = {
  HARD: 'hard',
  SOFT: 'soft',
} as const;

const AUTO_COMPLETE = {
  OFF: 'off',
  ON: 'on',
} as const;

const DEFAULTS = {
  CHARACTER_COUNTER_TYPE: FONT_TYPE.BODY_MIDSIZE_REGULAR,
  ROWS: 5,
  COLS: 40,
  WRAP: WRAP.SOFT,
} as const;

export { TAG_NAME, WRAP, AUTO_COMPLETE, DEFAULTS };
