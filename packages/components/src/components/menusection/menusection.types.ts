import type { TypedCustomEvent } from '../../utils/types';
import type MenuItem from '../menuitem/menuitem.component';

export type MenuSectionChangeEvent = TypedCustomEvent<MenuItem>;
export interface Events {
  onChangeEvent: MenuSectionChangeEvent;
}
