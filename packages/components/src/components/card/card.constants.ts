import utils from '../../utils/tag-name';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('card');

const VARIANTS = {
  BORDER: 'border',
  GHOST: 'ghost',
  PROMOTIONAL: 'promotional', // This is applicable only on interactive-card
} as const;

const ORIENTATIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

const DEFAULTS = {
  VARIANT: VARIANTS.BORDER,
  ORIENTATION: ORIENTATIONS.VERTICAL,
  TITLE_TYPE: TYPE.HEADING_SMALL_BOLD,
  SUBTITLE_TYPE: TYPE.BODY_MIDSIZE_MEDIUM,
  TAGNAME: VALID_TEXT_TAGS.SPAN,
  ICON_SIZE: 1.5,
  ICON_LENGTH_UNIT: 'rem',
};

export { TAG_NAME, DEFAULTS, VARIANTS, ORIENTATIONS };
