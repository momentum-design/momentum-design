import type { ValueOf } from '../../utils/types';
import { VARIANTS } from './alertchip.constants';
import type { IconNames } from '../icon/icon.types';

type VariantType = ValueOf<typeof VARIANTS>;

type IconListType = Extract<
IconNames,
'error-legacy-badge-filled'
| 'warning-badge-filled'
| 'check-circle-badge-filled'
| 'dnd-presence-badge-filled'
| 'info-badge-filled'
>

export type { VariantType, IconListType };
