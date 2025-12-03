import { ROLE } from '../../utils/roles';
import utils from '../../utils/tag-name';
import { BUTTON_SIZES } from '../buttonsimple/buttonsimple.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('alertchip');

const VARIANTS = {
  NEUTRAL: 'neutral',
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning',
  INFORMATIONAL: 'informational',
} as const;

const DEFAULTS = {
  VARIANT: VARIANTS.NEUTRAL,
  TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  TAG_NAME: VALID_TEXT_TAGS.SPAN,
  SIZE: BUTTON_SIZES[24],
  ROLE: ROLE.BUTTON,
} as const;

export { DEFAULTS, TAG_NAME, VARIANTS };
