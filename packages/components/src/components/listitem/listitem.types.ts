import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type ListItem from './listitem.component';
import { LISTITEM_VARIANTS } from './listitem.constants';

export type ListItemVariants = ValueOf<typeof LISTITEM_VARIANTS>;

export interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, ListItem>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, ListItem>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, ListItem>;
  onFocusEvent: OverrideEventTarget<FocusEvent, ListItem>;
  onEnabledEvent: TypedCustomEvent<ListItem>;
  onDisabledEvent: TypedCustomEvent<ListItem>;
  onCreatedEvent: TypedCustomEvent<ListItem>;
  onDestroyedEvent: TypedCustomEvent<ListItem>;
}

declare global {
  interface GlobalEventHandlersEventMap {
    disabled: TypedCustomEvent<ListItem>;
    enabled: TypedCustomEvent<ListItem>;
    created: TypedCustomEvent<ListItem>;
    destroyed: TypedCustomEvent<ListItem>;
  }
}
