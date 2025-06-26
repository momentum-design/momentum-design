import { ValueOf } from '../../utils/types';

import { ARIA_CHECKED_STATES } from './menusection.constants';
import type MenuItem from '../menuitem';

export type AriaCheckedStates = ValueOf<typeof ARIA_CHECKED_STATES>;

export type MenuSectionChangeEvent = Event & {
  target: MenuItem;
};

export interface Events {
  onChangeEvent: MenuSectionChangeEvent;
}
