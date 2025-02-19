import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('formfieldgroup');

const ROLE = {
  RADIOGROUP: 'radiogroup',
  GROUP: 'group',
} as const;

const DEFAULTS = {
  HEADER_ID: 'header-id',
  DESCRIPTION_ID: 'description-id',
} as const;

export { DEFAULTS, ROLE, TAG_NAME };
