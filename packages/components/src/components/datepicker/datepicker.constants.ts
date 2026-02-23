import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('datepicker');

const VARIANT = {
  DEFAULT: 'default',
  INPUT: 'input',
} as const;

const CALENDAR_ICON = 'calendar-empty-bold' as Extract<IconNames, 'calendar-empty-bold'>;

const TRIGGER_ID = 'datepicker-triggerid';

const DEFAULTS = {
  VARIANT: VARIANT.INPUT,
  LOCALE: 'en-US',
  DISABLE_FLIP: false,
} as const;

export { CALENDAR_ICON, DEFAULTS, TAG_NAME, TRIGGER_ID, VARIANT };
