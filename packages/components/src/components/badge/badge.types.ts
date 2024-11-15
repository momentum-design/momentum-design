import type { ValueOf } from '../../utils/types';
import { TYPE, ICON_VARIANT } from './badge.constants';

export type IconVariant = ValueOf<typeof ICON_VARIANT>;
export type BadgeType = ValueOf<typeof TYPE>;
