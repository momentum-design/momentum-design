import type { ValueOf } from '../../utils/types';
import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE } from './buttongroup.constants';

interface Events {

}

type ButtonGroupSize = ValueOf<typeof BUTTON_GROUP_SIZE>;
type ButtonGroupOrientation = ValueOf<typeof BUTTON_GROUP_ORIENTATION>;
export type { Events, ButtonGroupSize, ButtonGroupOrientation };
