import type { ValueOf } from '../../utils/types';

import { LISTITEM_VARIANTS } from './listitem.constants';

export type ListItemVariants = ValueOf<typeof LISTITEM_VARIANTS>;

export interface Events {
  onClickEvent: MouseEvent;
  onKeyDownEvent: KeyboardEvent;
  onKeyUpEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
  onEnabledEvent: Event;
  onDisabledEvent: Event;
  onCreatedEvent: Event;
  onDestroyedEvent: Event;
}

declare global {
  interface GlobalEventHandlersEventMap {
    disabled: Event;
    enabled: Event;
    created: Event;
    destroyed: Event;
  }
}
