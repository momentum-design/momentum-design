import type { OverrideEventTarget } from "../../utils/types";

import type ButtonLink from "./buttonlink.component";

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, ButtonLink>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, ButtonLink>;
  onFocusEvent: OverrideEventTarget<FocusEvent, ButtonLink>;
  onBlurEvent: OverrideEventTarget<FocusEvent, ButtonLink>;
}

export type { Events };
