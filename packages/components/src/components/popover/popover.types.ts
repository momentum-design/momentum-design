import type { ValueOf } from '../../utils/types';
import type { POPOVER_PLACEMENT, POPOVER_STRATEGY, TRIGGER, COLOR } from './popover.constants';

type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
type PopoverStrategy = ValueOf<typeof POPOVER_STRATEGY>;
type PopoverColor = ValueOf<typeof COLOR>;
type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;

interface Events {
  onShownEvent: Event;
  onHiddenEvent: Event;
  onCreatedEvent: Event;
  onDestroyedEvent: Event;
}

export type { PopoverPlacement, PopoverStrategy, PopoverColor, PopoverTrigger, Events };
