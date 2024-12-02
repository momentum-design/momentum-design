import type { ValueOf } from '../../utils/types';
import { TYPE, SIZE } from './presence.constants';

export type PresenceType = ValueOf<typeof TYPE>;
export type PresenceSize = ValueOf<typeof SIZE>;
