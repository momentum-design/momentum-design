import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Input from './input.component';
import { AUTO_CAPITALIZE, AUTO_COMPLETE, INPUT_TYPE } from './input.constants';

type AutoCapitalizeType = ValueOf<typeof AUTO_CAPITALIZE>;
type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;
type InputType = ValueOf<typeof INPUT_TYPE>;

interface Events {
  onInputEvent: OverrideEventTarget<InputEvent, Input>;
  onChangeEvent: TypedCustomEvent<Input>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Input>;
  onBlurEvent: OverrideEventTarget<FocusEvent, Input>;
}

export type { AutoCapitalizeType, AutoCompleteType, InputType, Events };
