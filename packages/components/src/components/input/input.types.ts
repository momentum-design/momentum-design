import type { TypedEvent, ValueOf } from '../../utils/types';

import type Input from './input.component';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, INPUT_TYPE } from './input.constants';

type AutoCapitalizeType = ValueOf<typeof AUTO_CAPITALIZE>;
type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;
type InputType = ValueOf<typeof INPUT_TYPE>;

type InputClearEvent = TypedEvent<Input>;
type InputChangeEvent = TypedEvent<Input>;

interface Events {
  onInputEvent: InputEvent;
  onChangeEvent: InputChangeEvent;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onClearEvent: InputClearEvent;
}

export type { AutoCapitalizeType, AutoCompleteType, InputType, InputClearEvent, InputChangeEvent, Events };
