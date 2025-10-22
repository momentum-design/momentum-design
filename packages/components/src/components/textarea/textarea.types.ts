import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Textarea from './textarea.component';
import { AUTO_COMPLETE, WRAP } from './textarea.constants';

type WrapType = ValueOf<typeof WRAP>;

type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;

type TextareaInputEvent = OverrideEventTarget<InputEvent, Textarea>;
type TextareaChangeEvent = TypedCustomEvent<Textarea>;
type TextareaFocusEvent = OverrideEventTarget<FocusEvent, Textarea>;
type TextareaBlurEvent = OverrideEventTarget<FocusEvent, Textarea>;
type TextareaLimitExceededEvent = TypedCustomEvent<Textarea>;

interface Events {
  onInputEvent: TextareaInputEvent;
  onChangeEvent: TextareaChangeEvent;
  onFocusEvent: TextareaFocusEvent;
  onBlurEvent: TextareaBlurEvent;
  onLimitExceededEvent: TextareaLimitExceededEvent;
}

export type {
  WrapType,
  AutoCompleteType,
  Events,
  TextareaInputEvent,
  TextareaChangeEvent,
  TextareaFocusEvent,
  TextareaBlurEvent,
  TextareaLimitExceededEvent,
};
