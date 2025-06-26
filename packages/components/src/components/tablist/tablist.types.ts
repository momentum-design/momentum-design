import type { ValueOf } from '../../utils/types';

import { ARROW_BUTTON_DIRECTION } from './tablist.constants';

interface Events {
  onChangeEvent: CustomEvent;
}

type ArrowButtonDirectionType = ValueOf<typeof ARROW_BUTTON_DIRECTION>;

export { ArrowButtonDirectionType, Events };
