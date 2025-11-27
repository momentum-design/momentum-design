import type { OverrideEventTarget } from '../../utils/types';

import type Chip from './chip.component';

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, Chip>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, Chip>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, Chip>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Chip>;
}

export type { Events };
