import type { ValueOf, TypedEvent } from '../../utils/types';

import type Popover from './popover.component';
import { POPOVER_PLACEMENT, TRIGGER, COLOR } from './popover.constants';

type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
type PopoverColor = ValueOf<typeof COLOR>;
type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;

type PopoverShownEvent = TypedEvent<Popover, { show: boolean }>;
type PopoverHiddenEvent = TypedEvent<Popover, { show: boolean }>;
type PopoverCreatedEvent = TypedEvent<Popover, { show: boolean }>;
type PopoverDestroyedEvent = TypedEvent<Popover, { show: boolean }>;

interface Events {
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
  onCreatedEvent: PopoverCreatedEvent;
  onDestroyedEvent: PopoverDestroyedEvent;
}

export type { PopoverPlacement, PopoverColor, PopoverTrigger, Events, PopoverShownEvent, PopoverHiddenEvent };
