import type { TypedCustomEvent, OverrideEventTarget, ValueOf } from '../../utils/types';

import type MenuItemRadio from './menuitemradio.component';
import { INDICATOR } from './menuitemradio.constants';

type Indicator = ValueOf<typeof INDICATOR>;

interface Events {
  onChangeEvent: TypedCustomEvent<MenuItemRadio>;
  onClickEvent: OverrideEventTarget<MouseEvent, MenuItemRadio>;
  onFocusEvent: OverrideEventTarget<FocusEvent, MenuItemRadio>;
}

export type { Events, Indicator };
