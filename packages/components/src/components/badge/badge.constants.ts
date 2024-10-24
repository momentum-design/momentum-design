import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('badge');

const BADGE_TYPE = {
  NOTIFICATION: 'notification',
  ICON: 'icon',
  COUNTER: 'counter',
};

const BADGE_VARIANT = {
  SECURE: 'secure',
  LOCKED: 'locked',
  STABLE: 'stable',
  UNSTABLE: 'unstable',
  ATTENTION: 'attention',
  CAUTION: 'caution',
};

const DEFAULTS = {
  TYPE: BADGE_TYPE.NOTIFICATION,
  SIZE: 1,
  LENGTH_UNIT: 'rem',
  MAX_COUNTER: 99,
  VARIANT: BADGE_VARIANT.SECURE,
  ICON_SIZE: 1,
};

export {
  TAG_NAME,
  DEFAULTS,
  BADGE_TYPE,
  BADGE_VARIANT,
};
