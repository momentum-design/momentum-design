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
  HELPER_TEXT_ID: 'helper-text-id',
  HEADING_ID: 'heading-id',
} as const;

const MDC_TEXT_OPTIONS = {
  TAGNAME: VALID_TEXT_TAGS.SPAN,
  TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  HEADER_TYPE: TYPE.BODY_MIDSIZE_BOLD,
};

export { TAG_NAME, VALIDATION, DEFAULTS, MDC_TEXT_OPTIONS };
