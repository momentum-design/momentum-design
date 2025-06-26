import type { ValueOf } from '../../utils/types';

import { AUTO_COMPLETE, WRAP } from './textarea.constants';

type WrapType = ValueOf<typeof WRAP>;

type AutoCompleteType = ValueOf<typeof AUTO_COMPLETE>;

interface Events {
  onInputEvent: InputEvent;
  onChangeEvent: Event;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onLimitExceededEvent: Event;
}

export type { WrapType, AutoCompleteType, Events };
