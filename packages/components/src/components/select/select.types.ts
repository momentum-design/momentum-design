import type { ValueOf, TypedEvent } from '../../utils/types';
import type { PopoverPlacement, PopoverShownEvent, PopoverHiddenEvent } from '../popover/popover.types';

import type Select from './select.component';
import { ARROW_ICON } from './select.constants';

type SelectChangeEvent = TypedEvent<Select, { value: string; label?: string }>;
type SelectInputEvent = TypedEvent<Select, { value: string; label?: string }>;

interface Events {
  onClickEvent: MouseEvent;
  onChangeEvent: SelectChangeEvent;
  onInputEvent: SelectInputEvent;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
  // Shown and hidden events from Popover, which bubble up
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type ArrowIcon = ValueOf<typeof ARROW_ICON>;

export type { Events, ArrowIcon, Placement, SelectChangeEvent, SelectInputEvent };
