import type { OverrideEventTarget, TypedCustomEvent, ValueOf } from '../../utils/types';

import type Toggle from './toggle.component';
import { TOGGLE_SIZE } from './toggle.constants';

type ToggleSize = ValueOf<typeof TOGGLE_SIZE>;
type ToggleOnChangeEvent = TypedCustomEvent<Toggle>;

interface Events {
  onChangeEvent: ToggleOnChangeEvent;
  onFocusEvent: OverrideEventTarget<FocusEvent, Toggle>;
}

export type { ToggleSize, Events, ToggleOnChangeEvent };
