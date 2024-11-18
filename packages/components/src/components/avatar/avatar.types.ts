import { AVATAR_TYPES } from './avatar.constants';
import type { ValueOf } from '../../utils/types';

export type AvatarType = ValueOf<typeof AVATAR_TYPES>;
