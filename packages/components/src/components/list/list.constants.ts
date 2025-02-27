import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('list');

const KEYS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  HOME: 'Home',
  END: 'End',
} as const;

const HEADER_ID = 'header-id';

export { TAG_NAME, KEYS, HEADER_ID };
