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

const GRID_LAYER_PHASE = {
  ENTERING: 'entering',
  VISIBLE: 'visible',
  EXITING: 'exiting',
} as const;

const GRID_MOTION = {
  IDLE: 'idle',
  CROSSFADING: 'crossfading',
} as const;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export {
  CALENDAR_ICONS,
  DEFAULTS,
  GRID_COLS,
  GRID_LAYER_PHASE,
  GRID_MOTION,
  GRID_ROWS,
  REDUCED_MOTION_QUERY,
  SELECTION_MODE,
  TAG_NAME,
};
