import utils from '../../utils/tag-name';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('staticchip');

const COLOR = {
  DEFAULT: 'default',
  COBALT: 'cobalt',
  GOLD: 'gold',
  LIME: 'lime',
  MINT: 'mint',
  ORANGE: 'orange',
  PINK: 'pink',
  PURPLE: 'purple',
  SLATE: 'slate',
  VIOLET: 'violet',
} as const;

const DEFAULTS = {
  COLOR: COLOR.DEFAULT,
  TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  TAG_NAME: VALID_TEXT_TAGS.SPAN,
} as const;

export { TAG_NAME, COLOR, DEFAULTS };
