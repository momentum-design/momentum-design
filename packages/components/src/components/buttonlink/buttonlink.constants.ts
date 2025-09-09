import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('buttonlink');

const DEFAULTS = {
  ROLE: 'link',
} as const;

export { TAG_NAME, DEFAULTS };
