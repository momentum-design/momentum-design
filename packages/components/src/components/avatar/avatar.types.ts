import type { ValueOf } from '../../utils/types';

import { AVATAR_TYPE, AVATAR_SIZE } from './avatar.constants';

type AvatarType = ValueOf<typeof AVATAR_TYPE>;
type AvatarSize = ValueOf<typeof AVATAR_SIZE>;

export type { AvatarType, AvatarSize };
