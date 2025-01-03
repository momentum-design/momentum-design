import { AVATAR_TYPE, AVATAR_SIZE } from './avatar.constants';
import type { ValueOf } from '../../utils/types';

export type AvatarType = ValueOf<typeof AVATAR_TYPE>;
export type AvatarSize = ValueOf<typeof AVATAR_SIZE>;
