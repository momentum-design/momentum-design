import type { OverrideEventTarget, ValueOf } from '../../utils/types';

import type ButtonSimple from './buttonsimple.component';
import { BUTTON_TYPE, BUTTON_SIZES } from './buttonsimple.constants';

type ButtonSize = ValueOf<typeof BUTTON_SIZES>;
type ButtonType = ValueOf<typeof BUTTON_TYPE>;

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, ButtonSimple>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, ButtonSimple>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, ButtonSimple>;
  onFocusEvent: OverrideEventTarget<FocusEvent, ButtonSimple>;
}

export type { ButtonSize, ButtonType, Events };
