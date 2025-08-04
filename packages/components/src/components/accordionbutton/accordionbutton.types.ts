import type { ValueOf } from '../../utils/types';

import { ICON_NAME, VARIANT } from './accordionbutton.constants';

type Variant = ValueOf<typeof VARIANT>;
type IconName = ValueOf<typeof ICON_NAME>;

interface Events {
  onShownEvent: Event;
}

export type { Variant, IconName, Events };
