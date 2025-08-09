import { TypedCustomEvent, ValueOf } from '../../utils/types';

import type Tab from './tab.component';
import { TAB_VARIANTS } from './tab.constants';

type Variant = ValueOf<typeof TAB_VARIANTS>;
interface Events {
  onActiveChangeEvent: TypedCustomEvent<Tab, { tabId: string; active: boolean }>;
}

export type { Variant, Events };
