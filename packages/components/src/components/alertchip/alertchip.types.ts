import type { ValueOf } from '../../utils/types';
import type { IconNames } from '../icon/icon.types';

import { VARIANTS } from './alertchip.constants';

type VariantType = ValueOf<typeof VARIANTS>;

type IconListType = Extract<
  IconNames,
  | 'error-legacy-badge-filled'
  | 'warning-badge-filled'
  | 'check-circle-badge-filled'
  | 'dnd-presence-badge-filled'
  | 'info-badge-filled'
>;

export type { VariantType, IconListType };
