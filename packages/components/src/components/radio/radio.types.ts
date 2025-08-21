import type { OverrideEventTarget, TypedCustomEvent } from "../../utils/types";

import type Radio from "./radio.component";

interface Events {
  onChangeEvent: TypedCustomEvent<Radio>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Radio>;
}

export type { Events };
