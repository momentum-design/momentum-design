import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('progressspinner');

const DEFAULTS = {
  RADIUS: 20,
  CIRCUMFERENCE: 2 * Math.PI * 20,
  STROKE_WIDTH: 4, // Default stroke width or border width
  GAP_SIZE: 7.5, // Gap size between the spinner and the track

} as const;

export { TAG_NAME, DEFAULTS };
