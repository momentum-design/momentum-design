import type { ValueOf } from '../../utils/types';

import { PRESENCE_TYPE, PRESENCE_SIZE } from './presence.constants';

type PresenceType = ValueOf<typeof PRESENCE_TYPE>;
type PresenceSize = ValueOf<typeof PRESENCE_SIZE>;

export type { PresenceType, PresenceSize };
