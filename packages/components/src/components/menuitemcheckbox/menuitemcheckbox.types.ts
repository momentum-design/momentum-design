import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type MenuItemCheckbox from './menuitemcheckbox.component';
import { INDICATOR } from './menuitemcheckbox.constants';

type Indicator = ValueOf<typeof INDICATOR>;

interface Events {
  onChangeEvent: TypedCustomEvent<MenuItemCheckbox>;
  onClickEvent: OverrideEventTarget<MouseEvent, MenuItemCheckbox>;
  onFocusEvent: OverrideEventTarget<FocusEvent, MenuItemCheckbox>;
}

export type { Events, Indicator };
