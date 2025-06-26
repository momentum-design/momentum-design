import { ValueOf } from '../../utils/types';
import type MenuItem from '../menuitem';

import { ARIA_CHECKED_STATES } from './menusection.constants';

export type AriaCheckedStates = ValueOf<typeof ARIA_CHECKED_STATES>;

export type MenuSectionChangeEvent = Event & {
  target: MenuItem;
};

export interface Events {
  onChangeEvent: MenuSectionChangeEvent;
}
