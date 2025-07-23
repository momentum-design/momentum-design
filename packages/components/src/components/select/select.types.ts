import type { ValueOf, TypedEvent } from '../../utils/types';
import type { PopoverPlacement } from '../popover/popover.types';

import type Select from './select.component';
import { ARROW_ICON } from './select.constants';

interface Events {
  onClickEvent: MouseEvent;
  onChangeEvent: TypedEvent<Select, { value: string }>;
  onInputEvent: TypedEvent<Select, { value: string }>;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type ArrowIcon = ValueOf<typeof ARROW_ICON>;

export type { Events, ArrowIcon, Placement };
