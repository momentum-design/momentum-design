import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('checkboxgroup');

const TYPE = {
  PARENT: 'parent',
  NONE: '',
} as const;

const ATTRIBUTE = {
  DISABLED: 'disabled',
  CHECKED: 'checked',
  INDETERMINATE: 'indeterminate',
} as const;

export { TAG_NAME, TYPE, ATTRIBUTE };
