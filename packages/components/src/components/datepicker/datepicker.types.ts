import type { ValueOf, TypedCustomEvent } from '../../utils/types';
import type { PopoverPlacement, PopoverShownEvent, PopoverHiddenEvent } from '../popover/popover.types';

import type DatePicker from './datepicker.component';
import { VARIANT } from './datepicker.constants';

type DatePickerVariant = ValueOf<typeof VARIANT>;

type DatePickerChangeEvent = TypedCustomEvent<DatePicker, { value: string }>;
type DatePickerInputEvent = TypedCustomEvent<DatePicker, { value: string }>;

interface Events {
  onChangeEvent: DatePickerChangeEvent;
  onInputEvent: DatePickerInputEvent;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

export type { DatePickerChangeEvent, DatePickerInputEvent, DatePickerVariant, Events, Placement };
