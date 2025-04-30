import { ValueOf } from '../../utils/types';
import { ARIA_CHECKED_STATES, INDICATOR, CHECKMARK_PLACEMENT } from './menuitemcheckbox.constants';

type AriaCheckedStates = ValueOf<typeof ARIA_CHECKED_STATES>;
type Indicator = ValueOf<typeof INDICATOR>;
type CheckmarkPlacement = ValueOf<typeof CHECKMARK_PLACEMENT>;

interface Events {
  onChangeEvent: Event;
  onClickEvent: MouseEvent;
  onFocusEvent: FocusEvent;
}

export type { Events, AriaCheckedStates, Indicator, CheckmarkPlacement };
