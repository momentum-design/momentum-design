import type { Events as SearchFieldTypes } from '../searchfield/searchfield.types';
import type { PopoverPlacement, PopoverShownEvent, PopoverHiddenEvent } from '../popover/popover.types';

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type Events = SearchFieldTypes & {
  // Shown and hidden events from Popover, which bubble up
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
};

export type { Events, Placement };
