import type { ValueOf } from '../../utils/types';

import { LINKBUTTON_SIZES } from './linkbutton.constants';

type LinkButtonSize = ValueOf<typeof LINKBUTTON_SIZES>;
interface Events {
  onClickEvent: MouseEvent;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
  onBlurEvent: Event;
}

export type { Events, LinkButtonSize };