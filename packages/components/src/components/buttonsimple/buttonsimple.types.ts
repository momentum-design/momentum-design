import type { ValueOf } from '../../utils/types';
import { BUTTON_TYPE, BUTTON_SIZES } from './buttonsimple.constants';

type ButtonSize = ValueOf<typeof BUTTON_SIZES>;
type ButtonType = ValueOf<typeof BUTTON_TYPE>;

interface Events {
  onClickEvent: MouseEvent;
  onKeyDownEvent: KeyboardEvent;
  onKeyUpEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

export type { ButtonSize, ButtonType, Events };
