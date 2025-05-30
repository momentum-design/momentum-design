import type { ValueOf } from '../../utils/types';
import { VARIANT, STATUS } from './stepperitem.constants';

type VariantType = ValueOf<typeof VARIANT>;
type StatusType = ValueOf<typeof STATUS>;
type StatusIconType = ValueOf<typeof STATUS>;

export type { VariantType, StatusType, StatusIconType };
