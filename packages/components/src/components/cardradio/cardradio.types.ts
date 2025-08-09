import type { OverrideEventTarget, TypedCustomEvent } from "../../utils/types";

import type CardRadio from "./cardradio.component";

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, CardRadio>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, CardRadio>;
  onFocusEvent: OverrideEventTarget<FocusEvent, CardRadio>;
  onChangeEvent: TypedCustomEvent<CardRadio>;
}

export type { Events };
