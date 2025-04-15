import type { ValueOf } from '../../utils/types';
import { TOGGLE_SIZE } from './toggle.constants';

type ToggleSize = ValueOf<typeof TOGGLE_SIZE>;

interface Events {
  onChangeEvent: Event;
  onFocusEvent: FocusEvent;
}

export type { ToggleSize, Events };
