import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('slider');

const DEFAULTS = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
} as const;

export { TAG_NAME, DEFAULTS };
