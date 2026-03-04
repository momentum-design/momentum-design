import type { ValueOf, TypedCustomEvent } from '../../utils/types';
import type { PopoverPlacement, PopoverShownEvent, PopoverHiddenEvent } from '../popover/popover.types';

import type TimePicker from './timepicker.component';
import { TIME_FORMAT } from './timepicker.constants';

type TimeFormat = ValueOf<typeof TIME_FORMAT>;

type TimePickerChangeEvent = TypedCustomEvent<TimePicker, { value: string }>;
type TimePickerInputEvent = TypedCustomEvent<TimePicker, { value: string }>;

interface Events {
  onChangeEvent: TimePickerChangeEvent;
  onInputEvent: TimePickerInputEvent;
  onFocusEvent: FocusEvent;
  onBlurEvent: FocusEvent;
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

export type { Events, Placement, TimeFormat, TimePickerChangeEvent, TimePickerInputEvent };
