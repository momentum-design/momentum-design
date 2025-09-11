import type { ValueOf, TypedCustomEvent } from '../../utils/types';

import type Popover from './popover.component';
import { POPOVER_PLACEMENT, TRIGGER, COLOR, STRATEGY } from './popover.constants';

type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
type PopoverColor = ValueOf<typeof COLOR>;
type PopoverStrategy = ValueOf<typeof STRATEGY>;
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

export type {
  PopoverPlacement,
  PopoverColor,
  PopoverStrategy,
  PopoverTrigger,
  Events,
  PopoverShownEvent,
  PopoverHiddenEvent,
};
