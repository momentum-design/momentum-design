import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('list');

const KEYS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
} as const;

export { TAG_NAME, KEYS };
