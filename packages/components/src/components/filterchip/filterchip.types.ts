import type { OverrideEventTarget } from '../../utils/types';

import FilterChip from './filterchip.component';

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, FilterChip>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, FilterChip>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, FilterChip>;
  onFocusEvent: OverrideEventTarget<FocusEvent, FilterChip>;
}

export type { Events };
