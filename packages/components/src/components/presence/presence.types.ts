import type { ValueOf } from '../../utils/types';
import { PRESENCE_TYPE, PRESENCE_SIZE } from './presence.constants';

export type PresenceType = ValueOf<typeof PRESENCE_TYPE>;
export type PresenceSize = ValueOf<typeof PRESENCE_SIZE>;
