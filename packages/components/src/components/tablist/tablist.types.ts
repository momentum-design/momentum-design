import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type TabList from './tablist.component';
import { ARROW_BUTTON_DIRECTION } from './tablist.constants';

interface Events {
  onChangeEvent: TypedCustomEvent<TabList, { tabId: string }>;
}

type ArrowButtonDirectionType = ValueOf<typeof ARROW_BUTTON_DIRECTION>;

export { ArrowButtonDirectionType, Events };
