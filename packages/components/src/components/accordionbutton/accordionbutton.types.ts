import type { ValueOf } from '../../utils/types';

import { VARIANT } from './accordionbutton.constants';

type Variant = ValueOf<typeof VARIANT>;

interface Events {
  onShownEvent: Event;
}

export type { Variant, Events };
