import { TypedEvent } from "../../utils/types";
import type Input from '../input/input.component';

type InputClearEvent = TypedEvent<Input>;

interface Events {
  onInputEvent: InputEvent;
  onChangeEvent: Event;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onClearEvent: InputClearEvent;
}

export type { Events };

