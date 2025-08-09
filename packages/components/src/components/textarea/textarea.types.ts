import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Textarea from './textarea.component';
import { AUTO_COMPLETE, WRAP } from './textarea.constants';

type WrapType = ValueOf<typeof WRAP>;

type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;

interface Events {
  onInputEvent: OverrideEventTarget<InputEvent, Textarea>;
  onChangeEvent: TypedCustomEvent<Textarea>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Textarea>;
  onBlurEvent: OverrideEventTarget<FocusEvent, Textarea>;
  onLimitExceededEvent: TypedCustomEvent<Textarea>;
}

export type { WrapType, AutoCompleteType, Events };
