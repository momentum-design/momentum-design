import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type AccordionButton from './accordionbutton.component';
import { ICON_NAME, VARIANT } from './accordionbutton.constants';

type Variant = ValueOf<typeof VARIANT>;
type IconName = ValueOf<typeof ICON_NAME>;

interface Events {
  onShownEvent: TypedCustomEvent<AccordionButton, { expanded: boolean }>;
}

export type { Variant, IconName, Events };
