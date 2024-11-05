import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('presence');

const PRESENCE_TYPE = {
  ACTIVE: 'active',
  AWAY: 'away',
  AWAY_CALLING: 'away-calling',
  BUSY: 'busy',
  DND: 'dnd',
  MEETING: 'meeting',
  ON_CALL: 'on-call',
  ON_DEVICE: 'on-device',
  ON_MOBILE: 'on-mobile',
  PAUSE: 'pause',
  PTO: 'pto',
  PRESENTING: 'presenting',
  QUIET: 'quiet',
  SCHEDULED: 'scheduled',
};

const PRESENCE_SIZE = {
  XX_SMALL: 0.875,
  X_SMALL: 0.875,
  SMALL: 0.875,
  MIDSIZE: 1.15,
  LARGE: 1.3,
  X_LARGE: 1.6,
  XX_LARGE: 2.25,
};

const DEFAULTS = {
  TYPE: PRESENCE_TYPE.ACTIVE,
  LENGTH_UNIT: 'rem',
  SIZE: PRESENCE_SIZE.SMALL,
};

export { TAG_NAME, DEFAULTS, PRESENCE_TYPE, PRESENCE_SIZE };
