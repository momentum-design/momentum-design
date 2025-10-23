import type { Events as InputEvents } from '../input/input.types';
import type { PopoverPlacement, PopoverShownEvent, PopoverHiddenEvent } from '../popover/popover.types';

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type Events = InputEvents & {
  // Shown and hidden events from Popover, which bubble up
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
};

export type { Events, Placement };
