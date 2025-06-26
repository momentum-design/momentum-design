import type { ValueOf } from '../../utils/types';

import { ARROW_ICON } from './select.constants';

interface Events {
  onClickEvent: MouseEvent;
  onChangeEvent: Event;
  onKeyDownEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
}

type ArrowIcon = ValueOf<typeof ARROW_ICON>;

export type { Events, ArrowIcon };
