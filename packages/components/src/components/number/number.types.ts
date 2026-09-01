import type { OverrideEventTarget, TypedCustomEvent } from '../../utils/types';

import type Number from './number.component';

type NumberInputEvent = OverrideEventTarget<InputEvent, Number>;
type NumberChangeEvent = TypedCustomEvent<Number>;
type NumberFocusEvent = OverrideEventTarget<FocusEvent, Number>;
type NumberBlurEvent = OverrideEventTarget<FocusEvent, Number>;
type NumberClearEvent = TypedCustomEvent<Number>;

interface Events {
  onInputEvent: NumberInputEvent;
  onChangeEvent: NumberChangeEvent;
  onFocusEvent: NumberFocusEvent;
  onBlurEvent: NumberBlurEvent;
  onClearEvent: NumberClearEvent;
}

export type { NumberInputEvent, NumberChangeEvent, NumberFocusEvent, NumberBlurEvent, NumberClearEvent, Events };