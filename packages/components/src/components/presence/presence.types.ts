import type { ValueOf } from '../../utils/types';

import { TYPE, SIZE } from './presence.constants';

type PresenceType = ValueOf<typeof TYPE>;
type PresenceSize = ValueOf<typeof SIZE>;

export type { PresenceType, PresenceSize };
