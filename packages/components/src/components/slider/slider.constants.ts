import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('slider');

const THUMBSTATE = {
  START: 'start',
  END: 'end',
  UNDEFINED: undefined,
} as const;

const DEFAULTS = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
  STATE: THUMBSTATE.UNDEFINED,
  ICON_SIZE: 1.25,
  ICON_LENGTH_UNIT: 'rem',
} as const;

export { TAG_NAME, DEFAULTS, THUMBSTATE };
