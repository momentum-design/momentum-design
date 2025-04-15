import type { ValueOf } from '../../utils/types';
import { POPOVER_PLACEMENT, TRIGGER, COLOR } from './popover.constants';

type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
type PopoverColor = ValueOf<typeof COLOR>;
type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;

interface Events {
  onShownEvent: Event;
  onHiddenEvent: Event;
  onCreatedEvent: Event;
  onDestroyedEvent: Event;
}

export type { PopoverPlacement, PopoverColor, PopoverTrigger, Events };
