import type { ValueOf } from '../../utils/types';
import { SELECTION_TYPE } from './cardcheckbox.constants';

type SelectionType = ValueOf<typeof SELECTION_TYPE>;

interface Events {
    onClickEvent: MouseEvent;
    onKeyDownEvent: KeyboardEvent;
    onKeyUpEvent: KeyboardEvent;
    onFocusEvent: FocusEvent;
  }

export { SelectionType, Events };
