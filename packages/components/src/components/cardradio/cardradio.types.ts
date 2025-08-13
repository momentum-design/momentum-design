import type { OverrideEventTarget } from '../../utils/types';

import type CardRadio from './cardradio.component';

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, CardRadio>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onFocusEvent: OverrideEventTarget<FocusEvent, CardRadio>;
}

export type { Events };
