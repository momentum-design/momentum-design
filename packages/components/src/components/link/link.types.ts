import type { ValueOf } from '../../utils/types';

import { LINK_SIZES } from './link.constants';

type LinkSize = ValueOf<typeof LINK_SIZES>;
interface Events {
  onClickEvent: MouseEvent;
  onBlurEvent: Event;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

export type { LinkSize, Events };
