import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('checkboxgroup');

const TYPE = {
  PARENT: 'parent',
} as const;

export { TAG_NAME, TYPE };
