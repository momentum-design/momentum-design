import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('badge');

const DEFAULTS = {
  TYPE: 'notification' as const,
  SIZE: 1,
  LENGTH_UNIT: 'rem',
  MAX_COUNTER: 99,
  VARIANT: 'secure' as const,
};

export {
  TAG_NAME,
  DEFAULTS,
};
