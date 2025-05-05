import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('menubar');
const ORIENTATION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export { TAG_NAME, ORIENTATION };
