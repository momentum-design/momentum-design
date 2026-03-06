import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type AccordionButton from './accordionbutton.component';
import { ICON_NAME, VARIANT, TOGGLE_POSITION } from './accordionbutton.constants';

type Variant = ValueOf<typeof VARIANT>;
type IconName = ValueOf<typeof ICON_NAME>;
type TogglePosition = ValueOf<typeof TOGGLE_POSITION>;

interface Events {
  onShownEvent: TypedCustomEvent<AccordionButton, { expanded: boolean }>;
}

export type { Variant, IconName, TogglePosition, Events };
