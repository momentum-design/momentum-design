import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('avatar');

const LENGTH_UNIT = 'rem';

const DEFAULTS = {
  TYPE: 'photo' as const,
};

export { TAG_NAME, DEFAULTS, LENGTH_UNIT };
