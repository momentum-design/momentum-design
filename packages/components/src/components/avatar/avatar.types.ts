import { AVATAR_TYPE } from './avatar.constants';
import { SIZE as AVATAR_SIZE } from '../presence/presence.constants';
import type { ValueOf } from '../../utils/types';

export type AvatarType = ValueOf<typeof AVATAR_TYPE>;
export type AvatarSize = ValueOf<typeof AVATAR_SIZE>;
