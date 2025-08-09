import type { OverrideEventTarget } from "../../utils/types";

import type CardButton from "./cardbutton.component";

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, CardButton>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, CardButton>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, CardButton>;
  onFocusEvent: OverrideEventTarget<FocusEvent, CardButton>;
}

export type { Events };
