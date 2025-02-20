import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('formfieldgroup');

const ROLE = {
  RADIOGROUP: 'radiogroup',
  GROUP: 'group',
} as const;

export { ROLE, TAG_NAME };
