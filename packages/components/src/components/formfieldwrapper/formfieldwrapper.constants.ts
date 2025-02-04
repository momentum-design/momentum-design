import utils from '../../utils/tag-name';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('formfieldwrapper');

const VALIDATION = {
  DEFAULT: 'default',
  ERROR: 'error',
  PRIORITY: 'priority',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const;

const DEFAULTS = {
  VALIDATION: VALIDATION.DEFAULT,
} as const;

const MDC_TEXT_OPTIONS = {
  TAGNAME: VALID_TEXT_TAGS.SPAN,
  TYPE: TYPE.BODY_MIDSIZE_REGULAR,
};

export { TAG_NAME, VALIDATION, DEFAULTS, MDC_TEXT_OPTIONS };
