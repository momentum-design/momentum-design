import type { OverrideEventTarget } from "../../utils/types";

import type LinkSimple from "./linksimple.component";

interface Events {
  onClickEvent: OverrideEventTarget<MouseEvent, LinkSimple>;
  onBlurEvent: OverrideEventTarget<FocusEvent, LinkSimple>;
  onKeyDownEvent: OverrideEventTarget<KeyboardEvent, LinkSimple>;
  onFocusEvent: OverrideEventTarget<FocusEvent, LinkSimple>;
}

export type { Events };
