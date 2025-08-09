import type { OverrideEventTarget, TypedCustomEvent } from "../../utils/types";

import type Password from "./password.component";

interface Events {
  onInputEvent: OverrideEventTarget<InputEvent, Password>;
  onChangeEvent: TypedCustomEvent<Password>;
  onFocusEvent: OverrideEventTarget<FocusEvent, Password>;
  onBlurEvent: OverrideEventTarget<FocusEvent, Password>;
}

export type { Events };
