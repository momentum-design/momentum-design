import { ARROW_BUTTON_DIRECTION } from './tablist.constants';
import type { ValueOf } from '../../utils/types';

interface Events {
  onChangeEvent: CustomEvent;
}

type ArrowButtonDirectionType = ValueOf<typeof ARROW_BUTTON_DIRECTION>;

export { ArrowButtonDirectionType, Events };
