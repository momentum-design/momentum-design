import utils from '../../utils/tag-name';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TAG_NAME as BUTTON_TAG } from '../button/button.constants';
import { TAG_NAME as LINK_TAG } from '../link/link.constants';

const TAG_NAME = utils.constructTagName('card');

const VARIANTS = {
  BORDER: 'border',
  GHOST: 'ghost',
  PROMOTIONAL: 'promotional',
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
  LINK: LINK_TAG,
  BUTTON: BUTTON_TAG,
} as const;

export { TAG_NAME, DEFAULTS, VARIANTS, ORIENTATIONS };
