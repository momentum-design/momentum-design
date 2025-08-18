import type { TypedCustomEvent } from '../../utils/types';
import type MenuItem from '../menuitem/menuitem.component';

export type MenuPopoverChangeEvent = TypedCustomEvent<MenuItem>;
export type MenuPopoverActionEvent = TypedCustomEvent<MenuItem>;

export interface Events {
  onChangeEvent: MenuPopoverChangeEvent;
  onActionEvent: MenuPopoverActionEvent;
}
