import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type CardCheckbox from './cardcheckbox.component';
import { SELECTION_TYPE } from './cardcheckbox.constants';

type SelectionType = ValueOf<typeof SELECTION_TYPE>;

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, CardCheckbox>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, CardCheckbox>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, CardCheckbox>;
  onFocusEvent: OverrideEventTarget<FocusEvent, CardCheckbox>;
  onChangeEvent: TypedCustomEvent<CardCheckbox>;
}

export { SelectionType, Events };
