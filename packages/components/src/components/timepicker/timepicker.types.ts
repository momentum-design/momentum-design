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

/**
 * A callback function to format the label of each dropdown option.
 * @param label - The default formatted label string (e.g., "1:30 PM" or "13:30").
 * @param value - The 24-hour time value string (e.g., "13:30").
 * @returns The formatted label string to display.
 */
type OptionLabelFormatter = (label: string, value: string) => string;

export type { Events, OptionLabelFormatter, Placement, TimeFormat, TimePickerChangeEvent, TimePickerInputEvent };
