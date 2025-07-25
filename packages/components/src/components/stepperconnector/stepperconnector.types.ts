import type { ValueOf } from '../../utils/types';

import { ORIENTATION, STATUS } from './stepperconnector.constants';

type StatusType = ValueOf<typeof STATUS>;
type OrientationType = ValueOf<typeof ORIENTATION>;

export type { StatusType, OrientationType };
