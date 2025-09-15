import { OverrideEventTarget } from '../../utils/types';

import type ListBox from './listbox.component';

export type ListBoxChangeEvent = OverrideEventTarget<Event, ListBox>;

interface Events {
  onChangeEvent: ListBoxChangeEvent;
}

export type { Events };
