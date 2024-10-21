import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('badge');

const DEFAULTS = {
  TYPE: 'notification' as const,
  SIZE: 1,
  LENGTH_UNIT: 'rem',
};

export {
  TAG_NAME,
  DEFAULTS,
};
