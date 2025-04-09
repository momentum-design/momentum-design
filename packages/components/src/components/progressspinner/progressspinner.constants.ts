import utils from '../../utils/tag-name';
import type { IconNames } from '../icon/icon.types';

const TAG_NAME = utils.constructTagName('progressspinner');

const DEFAULTS = {
  RADIUS: 20,
  CIRCUMFERENCE: 2 * Math.PI * 20,
  STROKE_WIDTH: 4, // Default stroke width or border width
  GAP_SIZE: 7.5, // Gap size between the spinner and the track
  ERROR_ICON_SIZE: 2,
  SUCCESS_ICON_SIZE: 3,
  ICON_LENGTH_UNIT: 'em',
} as const;

const ICON_NAME = {
  CHECK_CIRCLE_BOLD: 'check-circle-bold' as Extract<IconNames, 'check-circle-bold'>,
  ERROR_LEGACY_FILLED: 'error-legacy-filled' as Extract<IconNames, 'error-legacy-filled'>,
} as const;

export { TAG_NAME, DEFAULTS, ICON_NAME };
