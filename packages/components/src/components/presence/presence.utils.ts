import { PRESENCE_TYPE, PRESENCE_SIZE } from './presence.constants';
import type { PresenceSize, PresenceType } from './presence.types';

export const getIconValue = (type: PresenceType) => {
  switch (type) {
    case PRESENCE_TYPE.AWAY:
      return 'recents-presence-badge-filled';
    case PRESENCE_TYPE.AWAY_CALLING:
      return 'away-calling-presence-filled';
    case PRESENCE_TYPE.BUSY:
      return 'busy-presence-bold';
    case PRESENCE_TYPE.DND:
      return 'dnd-presence-badge-filled';
    case PRESENCE_TYPE.MEETING:
      return 'camera-filled';
    case PRESENCE_TYPE.ON_CALL:
      return 'handset-filled';
    case PRESENCE_TYPE.ON_DEVICE:
      return 'generic-device-video-badge-filled';
    case PRESENCE_TYPE.ON_MOBILE:
      return 'phone-badge-filled';
    case PRESENCE_TYPE.PAUSE:
      return 'pause-badge-filled';
    case PRESENCE_TYPE.PTO:
      return 'pto-presence-filled';
    case PRESENCE_TYPE.PRESENTING:
      return 'share-screen-badge-filled';
    case PRESENCE_TYPE.QUIET:
      return 'quiet-hours-presence-filled';
    case PRESENCE_TYPE.SCHEDULED:
      return 'meetings-presence-badge-filled';
    case PRESENCE_TYPE.ACTIVE:
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
