import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('calendar');

const SELECTION_MODE = {
  SINGLE: 'single',
  WEEK: 'week',
  RANGE: 'range',
} as const;

const CALENDAR_ICONS = {
  CHEVRON_LEFT: 'arrow-left-bold' as Extract<IconNames, 'arrow-left-bold'>,
  CHEVRON_RIGHT: 'arrow-right-bold' as Extract<IconNames, 'arrow-right-bold'>,
} as const;

const GRID_ROWS = 6;
const GRID_COLS = 7;

const DEFAULTS = {
  SELECTION_MODE: SELECTION_MODE.SINGLE,
  LOCALE: 'en-US',
} as const;

export { CALENDAR_ICONS, DEFAULTS, GRID_COLS, GRID_ROWS, SELECTION_MODE, TAG_NAME };
