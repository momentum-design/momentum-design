import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('icon');

const DEFAULTS = {
  NAME: undefined,
  SIZE: 1,
} as const;

export { TAG_NAME, DEFAULTS };
