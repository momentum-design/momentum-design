import type { TypedCustomEvent } from "../../utils/types";

import type ToggleTip from "./toggletip.component";

interface Events {
  onShownEvent: TypedCustomEvent<ToggleTip>;
  onHiddenEvent: TypedCustomEvent<ToggleTip>;
  onCreatedEvent: TypedCustomEvent<ToggleTip>;
  onDestroyedEvent: TypedCustomEvent<ToggleTip>;
}

export type { Events };
