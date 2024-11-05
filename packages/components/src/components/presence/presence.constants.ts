import utils from '../../utils/tag-name';

const TAG_NAME = utils.constructTagName('presence');

const PRESENCE_TYPE = {
  ACTIVE: {
    name: 'active',
    icon: 'active-presence-small-filled',
  },
  AWAY: {
    name: 'away',
    icon: 'recents-presence-badge-filled',
  },
  AWAY_CALLING: {
    name: 'away-calling',
    icon: 'away-calling-presence-filled',
  },
  BUSY: {
    name: 'busy',
    icon: 'busy-presence-bold',
  },
  DND: {
    name: 'dnd',
    icon: 'dnd-presence-badge-filled',
  },
  MEETING: {
    name: 'meeting',
    icon: 'camera-filled',
  },
  ON_CALL: {
    name: 'on-call',
    icon: 'handset-filled',
  },
  ON_DEVICE: {
    name: 'on-device',
    icon: 'generic-device-video-badge-filled',
  },
  ON_MOBILE: {
    name: 'on-mobile',
    icon: 'phone-badge-filled',
  },
  PAUSE: {
    name: 'pause',
    icon: 'pause-badge-filled',
  },
  PTO: {
    name: 'pto',
    icon: 'pto-presence-filled',
  },
  PRESENTING: {
    name: 'presenting',
    icon: 'share-screen-badge-filled',
  },
  QUIET: {
    name: 'quiet',
    icon: 'quiet-hours-presence-filled',
  },
  SCHEDULED: {
    name: 'scheduled',
    icon: 'meetings-presence-badge-filled',
  },
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
