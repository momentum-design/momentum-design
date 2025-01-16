import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('helperlabel');

const VALIDATION = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  PRIORITY: 'priority',
  DEFAULT: 'default',
} as const;

const DEFAULTS = {
  NAME: undefined,
  INFO_ICON_NAME: 'info-circle-filled' as IconNames,
  SIZE: 1,
  VALIDATION: VALIDATION.DEFAULT,
} as const;

const MDC_TEXT_OPTIONS = {
  TAGNAME: VALID_TEXT_TAGS.SPAN,
  TYPE: TYPE.BODY_MIDSIZE_REGULAR,
};

export { TAG_NAME, VALIDATION, DEFAULTS, MDC_TEXT_OPTIONS };
