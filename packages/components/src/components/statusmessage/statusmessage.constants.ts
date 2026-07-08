// AI-Assisted
import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

const TAG_NAME = utils.constructTagName('statusmessage');

const STATUSMESSAGE_SEVERITY = {
  DEFAULT: 'default',
  ERROR: 'error',
  PRIORITY: 'priority',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const;

const STATUSMESSAGE_ICON_NAMES = {
  ERROR: 'error-legacy-badge-filled' as Extract<IconNames, 'error-legacy-badge-filled'>,
  WARNING: 'warning-badge-filled' as Extract<IconNames, 'warning-badge-filled'>,
  SUCCESS: 'check-circle-badge-filled' as Extract<IconNames, 'check-circle-badge-filled'>,
  PRIORITY: 'priority-badge-filled' as Extract<IconNames, 'priority-badge-filled'>,
} as const;

const STATUSMESSAGE_ICON_NAME_BY_SEVERITY = {
  [STATUSMESSAGE_SEVERITY.DEFAULT]: '',
  [STATUSMESSAGE_SEVERITY.ERROR]: STATUSMESSAGE_ICON_NAMES.ERROR,
  [STATUSMESSAGE_SEVERITY.WARNING]: STATUSMESSAGE_ICON_NAMES.WARNING,
  [STATUSMESSAGE_SEVERITY.SUCCESS]: STATUSMESSAGE_ICON_NAMES.SUCCESS,
  [STATUSMESSAGE_SEVERITY.PRIORITY]: STATUSMESSAGE_ICON_NAMES.PRIORITY,
} as const;

const DEFAULTS = {
  SEVERITY: STATUSMESSAGE_SEVERITY.DEFAULT,
  TEXT_TAGNAME: VALID_TEXT_TAGS.SPAN,
  TEXT_TYPE: TYPE.BODY_MIDSIZE_REGULAR,
} as const;

export { DEFAULTS, STATUSMESSAGE_ICON_NAME_BY_SEVERITY, STATUSMESSAGE_ICON_NAMES, STATUSMESSAGE_SEVERITY, TAG_NAME };
// End AI-Assisted
