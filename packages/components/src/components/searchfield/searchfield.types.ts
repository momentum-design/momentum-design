import { TypedCustomEvent } from '../../utils/types';
import AlertChip from '../alertchip';
import Chip from '../chip';
import type { Events as InputEvents } from '../input/input.types';
import InputChip from '../inputchip';

import Searchfield from './searchfield.component';

type Events = InputEvents & {
  onRemovedEvent: TypedCustomEvent<Searchfield, { chip: Chip | InputChip | AlertChip }>;
};
export type { Events };
