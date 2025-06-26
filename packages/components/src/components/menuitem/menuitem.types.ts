import type { ValueOf } from '../../utils/types';

import { ARROW_POSITIONS, ARROW_DIRECTIONS } from './menuitem.constants';

interface Events {
  onChangeEvent: Event;
  onClickEvent: MouseEvent;
  onFocusEvent: FocusEvent;
}

type ArrowPositions = ValueOf<typeof ARROW_POSITIONS>;
type ArrowDirections = ValueOf<typeof ARROW_DIRECTIONS>;

export type { Events, ArrowPositions, ArrowDirections };
