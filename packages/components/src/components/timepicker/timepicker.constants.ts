import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('timepicker');

const ARROW_ICON = {
  ARROW_UP: 'arrow-up-bold' as Extract<IconNames, 'arrow-up-bold'>,
  ARROW_DOWN: 'arrow-down-bold' as Extract<IconNames, 'arrow-down-bold'>,
} as const;

const TIME_FORMAT = {
  TWELVE_HOUR: '12h',
  TWENTY_FOUR_HOUR: '24h',
} as const;

const TRIGGER_ID = 'timepicker-triggerid';
const LISTBOX_ID = 'timepicker-listbox';

const DEFAULTS = {
  TIME_FORMAT: TIME_FORMAT.TWELVE_HOUR,
  INTERVAL: 30,
  MIN_HOUR_12: 1,
  MAX_HOUR_12: 12,
  MIN_HOUR_24: 0,
  MAX_HOUR_24: 23,
  MIN_MINUTE: 0,
  MAX_MINUTE: 59,
  DISABLE_FLIP: false,
} as const;

export { ARROW_ICON, DEFAULTS, TAG_NAME, TIME_FORMAT, TRIGGER_ID, LISTBOX_ID };
