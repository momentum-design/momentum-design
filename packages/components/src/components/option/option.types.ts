import type { OverrideEventTarget } from "../../utils/types";

import type Option from "./option.component";

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, Option>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, Option>;
  onKeyUpEvent: OverrideEventTarget<KeyboardEvent, Option>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Option>;
}

export type { Events };
