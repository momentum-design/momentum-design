import type { ValueOf, TypedCustomEvent } from '../../utils/types';

import type Popover from './popover.component';
import { POPOVER_PLACEMENT, TRIGGER, COLOR } from './popover.constants';

type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
type PopoverColor = ValueOf<typeof COLOR>;
type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;

type PopoverShownEvent = TypedCustomEvent<Popover, { show: boolean }>;
type PopoverHiddenEvent = TypedCustomEvent<Popover, { show: boolean }>;
type PopoverCreatedEvent = TypedCustomEvent<Popover, { show: boolean }>;
type PopoverDestroyedEvent = TypedCustomEvent<Popover, { show: boolean }>;

interface Events {
  onShownEvent: PopoverShownEvent;
  onHiddenEvent: PopoverHiddenEvent;
  onCreatedEvent: PopoverCreatedEvent;
  onDestroyedEvent: PopoverDestroyedEvent;
}

export type { PopoverPlacement, PopoverColor, PopoverTrigger, Events, PopoverShownEvent, PopoverHiddenEvent };
