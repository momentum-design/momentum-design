import utils from '../../utils/tag-name';

const STATUS = {
  COMPLETE: 'complete',
  INCOMPLETE: 'incomplete',
} as const;

const ORIENTATION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

const DEFAULTS = {
  STATUS: STATUS.INCOMPLETE,
  ORIENTATION: ORIENTATION.HORIZONTAL,
} as const;

const TAG_NAME = utils.constructTagName('stepperconnector');

export { TAG_NAME, STATUS, ORIENTATION, DEFAULTS };
