import { ValueOf } from '../../utils/types';

import { ALLOWED_BADGE_TYPES } from './navmenuitem.constants';

type BadgeType = ValueOf<typeof ALLOWED_BADGE_TYPES>;
interface Events {
  onClickEvent: MouseEvent;
  onKeyDownEvent: KeyboardEvent;
  onKeyUpEvent: KeyboardEvent;
  onFocusEvent: FocusEvent;
  onActiveChangeEvent: Event;
}

export type { Events, BadgeType };
