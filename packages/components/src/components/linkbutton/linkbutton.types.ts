import type { OverrideEventTarget, ValueOf } from '../../utils/types';

import type LinkButton from './linkbutton.component';
import { LINKBUTTON_SIZES } from './linkbutton.constants';

type LinkButtonSize = ValueOf<typeof LINKBUTTON_SIZES>;
interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, LinkButton>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, LinkButton>;
  onFocusEvent: OverrideEventTarget<FocusEvent, LinkButton>;
  onBlurEvent: OverrideEventTarget<FocusEvent, LinkButton>;
}

export type { Events, LinkButtonSize };