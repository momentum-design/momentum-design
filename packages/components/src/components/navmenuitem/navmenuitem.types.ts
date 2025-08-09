import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type NavMenuItem from './navmenuitem.component';
import { ALLOWED_BADGE_TYPES } from './navmenuitem.constants';

type BadgeType = ValueOf<typeof ALLOWED_BADGE_TYPES>;
interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, NavMenuItem>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, NavMenuItem>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, NavMenuItem>;
  onFocusEvent: OverrideEventTarget<FocusEvent, NavMenuItem>;
  onActiveChangeEvent: TypedCustomEvent<NavMenuItem, {navId: string; active: boolean}>;
}

export type { Events, BadgeType };
