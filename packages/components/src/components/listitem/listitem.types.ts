import type { ValueOf } from '../../utils/types';
import { LISTITEM_VARIANTS } from './listitem.constants';

type ListItemVariants = ValueOf<typeof LISTITEM_VARIANTS>;

interface Events {
  onClickEvent: MouseEvent;
  onKeyDownEvent: KeyboardEvent;
  onKeyUpEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

export type { ListItemVariants, Events };
