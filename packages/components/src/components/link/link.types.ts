import type { OverrideEventTarget, ValueOf } from '../../utils/types';

import type Link from './link.component';
import { LINK_SIZES } from './link.constants';

type LinkSize = ValueOf<typeof LINK_SIZES>;
interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, Link>;
  onBlurEvent: OverrideEventTarget<FocusEvent, Link>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, Link>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Link>;
}

export type { LinkSize, Events };
