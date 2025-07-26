import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menubar');

const DEFAULTS = {
  ORIENTATION: 'vertical',
} as const;

export { TAG_NAME, DEFAULTS };
