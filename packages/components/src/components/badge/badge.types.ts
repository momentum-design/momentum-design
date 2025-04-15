import type { ValueOf } from '../../utils/types';
import { TYPE, ICON_VARIANT } from './badge.constants';

type IconVariant = ValueOf<typeof ICON_VARIANT>;
type BadgeType = ValueOf<typeof TYPE>;

export type { IconVariant, BadgeType };
