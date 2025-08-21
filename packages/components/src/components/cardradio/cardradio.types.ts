import type { OverrideEventTarget, TypedCustomEvent } from '../../utils/types';

import type CardRadio from './cardradio.component';

type CardRadioChangeEvent = TypedCustomEvent<CardRadio>
interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, CardRadio>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onFocusEvent: OverrideEventTarget<FocusEvent, CardRadio>;
  onChangeEvent: CardRadioChangeEvent;
}

export type { Events };
