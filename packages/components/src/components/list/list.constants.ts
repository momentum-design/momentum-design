import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('list');

const HEADER_ID = 'header-id';

const DEFAULTS = {
  LOOP: 'true',
  INITIAL_FOCUS: 0,
} as const;

export { TAG_NAME, HEADER_ID, DEFAULTS };
