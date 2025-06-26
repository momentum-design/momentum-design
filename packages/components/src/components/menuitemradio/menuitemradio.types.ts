import { ValueOf } from '../../utils/types';
import { INDICATOR } from './menuitemradio.constants';

type Indicator = ValueOf<typeof INDICATOR>;
interface Events {
  onChangeEvent: Event;
  onClickEvent: MouseEvent;
  onFocusEvent: FocusEvent;
}

export type { Events, Indicator };
