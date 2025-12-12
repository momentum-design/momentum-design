import type { OverrideEventTarget, ValueOf } from '../../utils/types';
import type { IconNames } from '../icon/icon.types';

import type AlertChip from './alertchip.component';
import { VARIANTS } from './alertchip.constants';

type VariantType = ValueOf<typeof VARIANTS>;

type IconListType = Extract<
  IconNames,
  | 'error-legacy-badge-filled'
  | 'info-badge-filled'
  | 'dnd-presence-badge-filled'
  | 'check-circle-badge-filled'
  | 'warning-badge-filled'
>;

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, AlertChip>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, AlertChip>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, AlertChip>;
  onFocusEvent: OverrideEventTarget<FocusEvent, AlertChip>;
}

export type { VariantType, IconListType, Events };
