import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Checkbox from './checkbox.component';
import { CHECKBOX_VALIDATION } from './checkbox.constants';

type CheckboxValidationType = ValueOf<typeof CHECKBOX_VALIDATION>;
interface Events {
  onChangeEvent: TypedCustomEvent<Checkbox>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Checkbox>;
}

export type { Events, CheckboxValidationType };
