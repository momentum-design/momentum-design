import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';
import type { PopoverHiddenEvent, PopoverPlacement, PopoverShownEvent } from '../popover/popover.types';
import type Option from '../option/option.component';

import type Combobox from './combobox.component';
import { FILTER, ICON_NAME } from './combobox.constants';

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

type ComboboxFilterType = ValueOf<typeof FILTER>;

/**
 * A custom filter function that receives an option and the current input value,
 * and returns `true` if the option should be visible.
 */
type ComboboxFilterFunction = (option: Option, inputValue: string) => boolean;

/**
 * The filter property accepts either:
 * - a string denoting the built-in filter strategy (`'match-starts-with'` or `'none'`)
 * - a function for fully custom filter logic
 *
 * Note: only string values are reflected in the `filter` attribute.
 */
type ComboboxFilter = ComboboxFilterType | ComboboxFilterFunction;

export type { ComboboxFilter, ComboboxFilterFunction, ComboboxFilterType, Events, IconName, Placement };
