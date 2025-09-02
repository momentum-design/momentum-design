import type { OverrideEventTarget, ValueOf } from '../../utils/types';

import type Chip from './chip.component';
import { COLOR } from './chip.constants';

type ColorType = ValueOf<typeof COLOR>;

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, Chip>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, Chip>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, Chip>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Chip>;
}

export type { ColorType, Events };
