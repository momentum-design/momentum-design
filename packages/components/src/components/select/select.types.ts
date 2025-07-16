import type { ValueOf } from '../../utils/types';
import type { PopoverPlacement } from '../popover/popover.types';

import { ARROW_ICON } from './select.constants';

interface Events {
  onClickEvent: MouseEvent;
  onChangeEvent: Event;
  onInputEvent: Event;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

type Placement = Extract<PopoverPlacement, 'bottom-start' | 'top-start'>;

type ArrowIcon = ValueOf<typeof ARROW_ICON>;

export type { Events, ArrowIcon, Placement };
