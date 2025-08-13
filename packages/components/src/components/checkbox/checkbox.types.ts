import type { OverrideEventTarget, TypedCustomEvent } from "../../utils/types";

import type Checkbox from "./checkbox.component";

interface Events {
  onChangeEvent: TypedCustomEvent<Checkbox>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Checkbox>;
}

export type { Events };
