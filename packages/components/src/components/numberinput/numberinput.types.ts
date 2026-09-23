import type { OverrideEventTarget, TypedCustomEvent } from '../../utils/types';

import type { CLAMP } from './numberinput.constants';
import type NumberInput from './numberinput.component';

type ClampType = (typeof CLAMP)[keyof typeof CLAMP];

type NumberInputInputEvent = OverrideEventTarget<InputEvent, NumberInput>;
type NumberInputChangeEvent = TypedCustomEvent<NumberInput>;
type NumberInputFocusEvent = OverrideEventTarget<FocusEvent, NumberInput>;
type NumberInputBlurEvent = OverrideEventTarget<FocusEvent, NumberInput>;
type NumberInputClearEvent = TypedCustomEvent<NumberInput>;

interface Events {
  onInputEvent: NumberInputInputEvent;
  onChangeEvent: NumberInputChangeEvent;
  onFocusEvent: NumberInputFocusEvent;
  onBlurEvent: NumberInputBlurEvent;
  onClearEvent: NumberInputClearEvent;
}

export type {
  NumberInputInputEvent,
  NumberInputChangeEvent,
  NumberInputFocusEvent,
  NumberInputBlurEvent,
  NumberInputClearEvent,
  ClampType,
  Events,
};
