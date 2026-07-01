import type { TypedCustomEvent } from '../../utils/types';

import type ListBox from './listbox.component';

export interface ListBoxChangeEventDetail {
  value: string | undefined;
  selectedValues: string[];
}

export type ListBoxChangeEvent = TypedCustomEvent<ListBox, ListBoxChangeEventDetail>;

interface Events {
  onChangeEvent: ListBoxChangeEvent;
}

export type { Events };
