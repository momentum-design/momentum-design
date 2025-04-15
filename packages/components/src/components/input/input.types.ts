import type { ValueOf } from '../../utils/types';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, INPUT_TYPE } from './input.constants';

type AutoCapitalizeType = ValueOf<typeof AUTO_CAPITALIZE>;
type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;
type InputType = ValueOf<typeof INPUT_TYPE>;

interface Events {
  onInputEvent: InputEvent;
  onChangeEvent: Event;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
}

export type { AutoCapitalizeType, AutoCompleteType, InputType, Events };
