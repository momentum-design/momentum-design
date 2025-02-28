import type { ValueOf } from '../../utils/types';
import { POPOVER_PLACEMENT, TRIGGER } from './popover.constants';

export type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
export type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;
