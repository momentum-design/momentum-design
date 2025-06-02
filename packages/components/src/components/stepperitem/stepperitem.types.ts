import type { ValueOf } from '../../utils/types';
import { VARIANT, STATUS } from './stepperitem.constants';

type VariantType = ValueOf<typeof VARIANT>;
type StatusType = ValueOf<typeof STATUS>;
type StatusIconType = ValueOf<typeof STATUS>;

interface Events {
    focus: FocusEvent;
}

export type { VariantType, StatusType, StatusIconType, Events };
