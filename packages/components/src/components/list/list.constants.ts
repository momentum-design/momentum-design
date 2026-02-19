import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('list');

const HEADER_ID = 'header-id';

const ORIENTATION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

const DEFAULTS = {
  LOOP: 'true',
  INITIAL_FOCUS: 0,
  ORIENTATION: ORIENTATION.VERTICAL,
} as const;

export { TAG_NAME, HEADER_ID, ORIENTATION, DEFAULTS };
