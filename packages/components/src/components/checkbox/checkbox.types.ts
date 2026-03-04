import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Checkbox from './checkbox.component';
import { CHECKBOX_VALIDATION } from './checkbox.constants';

type CheckboxValidationType = ValueOf<typeof CHECKBOX_VALIDATION>;
type CheckboxOnChangeEvent = TypedCustomEvent<Checkbox>;
interface Events {
  onChangeEvent: CheckboxOnChangeEvent;
  onFocusEvent: OverrideEventTarget<FocusEvent, Checkbox>;
}

export type { Events, CheckboxValidationType, CheckboxOnChangeEvent };
