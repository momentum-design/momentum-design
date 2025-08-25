import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Input from './input.component';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, INPUT_TYPE } from './input.constants';

type AutoCapitalizeType = ValueOf<typeof AUTO_CAPITALIZE>;
type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;
type InputType = ValueOf<typeof INPUT_TYPE>;

type InputInputEvent = OverrideEventTarget<InputEvent, Input>;
type InputChangeEvent = TypedCustomEvent<Input>;
type InputFocusEvent = OverrideEventTarget<FocusEvent, Input>;
type InputBlurEvent = OverrideEventTarget<FocusEvent, Input>;
type InputClearEvent = TypedCustomEvent<Input>;

interface Events {
  onInputEvent: InputInputEvent;
  onChangeEvent: InputChangeEvent;
  onFocusEvent: InputFocusEvent;
  onBlurEvent: InputBlurEvent;
  onClearEvent: InputClearEvent;
}

export type {
  AutoCapitalizeType,
  AutoCompleteType,
  InputType,
  InputInputEvent,
  InputChangeEvent,
  InputFocusEvent,
  InputBlurEvent,
  InputClearEvent,
  Events,
};
