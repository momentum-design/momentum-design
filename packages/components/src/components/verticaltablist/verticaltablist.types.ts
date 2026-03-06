// AI-Assisted
import type { TypedCustomEvent } from '../../utils/types';

import type Verticaltablist from './verticaltablist.component';

type VerticaltablistChangeEvent = TypedCustomEvent<Verticaltablist, { tabId: string }>;

interface Events {
  onChangeEvent: VerticaltablistChangeEvent;
}

export type { Events, VerticaltablistChangeEvent };
// End AI-Assisted
