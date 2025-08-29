import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';
import type { PopoverHiddenEvent, PopoverPlacement, PopoverShownEvent } from '../popover/popover.types';

import type Combobox from './combobox.component';
import { ICON_NAME } from './combobox.constants';

type ComboboxChangeEvent = TypedCustomEvent<Combobox, { value: string; label?: string }>;
type ComboboxInputEvent = TypedCustomEvent<Combobox, { value: string; label?: string }>;

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, Combobox>;
  onChangeEvent: ComboboxChangeEvent;
  onInputEvent: ComboboxInputEvent;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, Combobox>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Combobox>;
  // Shown and hidden events from Popover, which bubble up
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type IconName = ValueOf<typeof ICON_NAME>;

export type { Events, IconName, Placement };
