import { ValueOf } from '../../utils/types';
import { TAB_VARIANTS } from './tab.constants';

type Variant = ValueOf<typeof TAB_VARIANTS>;
interface Events {
  onActiveChangeEvent: Event;
}

export type { Variant, Events };
