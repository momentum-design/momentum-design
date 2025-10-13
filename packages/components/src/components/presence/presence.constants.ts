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
} as const;


const PRESENCE_SIZE = {
  20: 20,
  24: 24,
  32: 32,
  48: 48,
  64: 64,
  72: 72,
  88: 88,
  124: 124,
} as const;

const DEFAULTS = {
  TYPE: PRESENCE_TYPE.ACTIVE,
  SIZE: PRESENCE_SIZE[32],
} as const;

export { TAG_NAME, DEFAULTS, PRESENCE_TYPE, PRESENCE_SIZE };
