import type { TypedCustomEvent, ValueOf } from '../../utils/types';

import type TabList from './tablist.component';
import { ARROW_BUTTON_DIRECTION } from './tablist.constants';

type TablistChangeEvent = TypedCustomEvent<TabList, { tabId: string }>;
interface Events {
  onChangeEvent: TablistChangeEvent;
}

type ArrowButtonDirectionType = ValueOf<typeof ARROW_BUTTON_DIRECTION>;

export type { ArrowButtonDirectionType, Events, TablistChangeEvent };
