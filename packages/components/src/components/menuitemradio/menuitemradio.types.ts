import { ValueOf } from '../../utils/types';
import { ARIA_CHECKED_STATES } from './menuitemradio.constants';

type AriaChecked = ValueOf<typeof ARIA_CHECKED_STATES>;

interface Events {
  onChangeEvent: Event;
  onClickEvent: MouseEvent;
  onFocusEvent: FocusEvent;
}

export type { Events, AriaChecked };
