import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { POPOVER_PLACEMENT, STRATEGY } from '../popover/popover.constants';
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
  ICON_SIZE: 20,
  INFO_ICON: 'info-badge-filled' as Extract<IconNames, 'info-badge-filled'>,
  TOGGLETIP_PLACEMENT: POPOVER_PLACEMENT.TOP,
  TOGGLETIP_STRATEGY: STRATEGY.ABSOLUTE,
} as const;

const MDC_TEXT_OPTIONS = {
  TAGNAME: VALID_TEXT_TAGS.SPAN,
  TYPE: TYPE.BODY_MIDSIZE_REGULAR,
  HEADER_TYPE: TYPE.BODY_MIDSIZE_BOLD,
} as const;

export { TAG_NAME, VALIDATION, DEFAULTS, MDC_TEXT_OPTIONS };
