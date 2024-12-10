import { TYPE } from './presence.constants';
import type { PresenceType } from './presence.types';

export const getIconValue = (type: PresenceType) => {
  switch (type) {
    case TYPE.AWAY:
      return 'recents-presence-badge-filled';
    case TYPE.AWAY_CALLING:
      return 'away-calling-presence-filled';
    case TYPE.BUSY:
      return 'busy-presence-bold';
    case TYPE.DND:
      return 'dnd-presence-badge-filled';
    case TYPE.MEETING:
      return 'camera-filled';
    case TYPE.ON_CALL:
      return 'handset-filled';
    case TYPE.ON_DEVICE:
      return 'generic-device-video-badge-filled';
    case TYPE.ON_MOBILE:
      return 'phone-badge-filled';
    case TYPE.PAUSE:
      return 'pause-badge-filled';
    case TYPE.PTO:
      return 'pto-presence-filled';
    case TYPE.PRESENTING:
      return 'share-screen-badge-filled';
    case TYPE.QUIET:
      return 'quiet-hours-presence-filled';
    case TYPE.SCHEDULED:
      return 'meetings-presence-badge-filled';
    case TYPE.ACTIVE:
    default:
      return 'active-presence-small-filled';
  }
};
