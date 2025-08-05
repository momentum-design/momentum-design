import { TypedEvent } from "../../utils/types";
import type Input from '../input/input.component';

type InputClearEvent = TypedEvent<Input>;
type InputChangeEvent = TypedEvent<Input>;

interface Events {
  onInputEvent: InputEvent;
  onChangeEvent: InputChangeEvent;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onClearEvent: InputClearEvent;
}

export type { Events };

