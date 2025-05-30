import type { ValueOf } from '../../utils/types';

import { ORIENTATION, STATUS } from './stepper.constants';

type OrientationType = ValueOf<typeof ORIENTATION>;
type StatusType = ValueOf<typeof STATUS>;

export type { OrientationType, StatusType };
