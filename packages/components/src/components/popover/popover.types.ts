import type { ValueOf } from '../../utils/types';
import { POPOVER_PLACEMENT, TRIGGER, COLOR } from './popover.constants';

export type PopoverPlacement = ValueOf<typeof POPOVER_PLACEMENT>;
export type PopoverColor = ValueOf<typeof COLOR>;
export type PopoverTrigger = ValueOf<typeof TRIGGER> | `${ValueOf<typeof TRIGGER>} ${ValueOf<typeof TRIGGER>}`;
