import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type MenuItem from './menuitem.component';
import { ARROW_POSITIONS, ARROW_DIRECTIONS } from './menuitem.constants';

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, MenuItem>;
  onFocusEvent: OverrideEventTarget<FocusEvent, MenuItem>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, MenuItem>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, MenuItem>;
  onCreatedEvent: TypedCustomEvent<MenuItem>;
  onDestroyedEvent: TypedCustomEvent<MenuItem>;
}

type ArrowPositions = ValueOf<typeof ARROW_POSITIONS>;
type ArrowDirections = ValueOf<typeof ARROW_DIRECTIONS>;

export type { Events, ArrowPositions, ArrowDirections };
