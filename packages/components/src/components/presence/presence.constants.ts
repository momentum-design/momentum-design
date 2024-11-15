import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('presence');

const TYPE = {
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
} as const;

const SIZE = {
  XX_SMALL: 'xx_small',
  X_SMALL: 'x_small',
  SMALL: 'small',
  MIDSIZE: 'midsize',
  LARGE: 'large',
  X_LARGE: 'x_large',
  XX_LARGE: 'xx_large',
} as const;

const DEFAULTS = {
  TYPE: TYPE.ACTIVE,
  SIZE: SIZE.SMALL,
} as const;

export { TAG_NAME, DEFAULTS, TYPE, SIZE };
