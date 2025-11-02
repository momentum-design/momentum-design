import type { OverrideEventTarget } from '../../utils/types';

import type NavButton from './navbuttonlink.component';

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, NavButton>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, NavButton>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, NavButton>;
  onFocusEvent: OverrideEventTarget<FocusEvent, NavButton>;
}

export type { Events };
