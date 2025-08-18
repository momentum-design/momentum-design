import { TYPE , PRESENCE_SIZE } from './presence.constants';
import type { PresenceSize, PresenceType } from './presence.types';

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

export const getPresenceIconSize = (size: PresenceSize): number => {
  const presenceIconSizeMap: Record<PresenceSize, number> = {
    [PRESENCE_SIZE[124]]: 2.25,
    [PRESENCE_SIZE[88]]: 1.625,
    [PRESENCE_SIZE[72]]: 1.3125,
    [PRESENCE_SIZE[64]]: 1.1875,
    [PRESENCE_SIZE[48]]: 0.875,
    [PRESENCE_SIZE[32]]: 0.875,
    [PRESENCE_SIZE[24]]: 0.875,
  };
  return presenceIconSizeMap[size] || 0.875; // default size of icon
};
