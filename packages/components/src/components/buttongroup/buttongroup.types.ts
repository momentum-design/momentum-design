import type { ValueOf } from '../../utils/types';

import { BUTTON_GROUP_ORIENTATION, BUTTON_GROUP_SIZE, BUTTON_GROUP_VARIANT } from './buttongroup.constants';

type ButtonGroupSize = ValueOf<typeof BUTTON_GROUP_SIZE>;
type ButtonGroupOrientation = ValueOf<typeof BUTTON_GROUP_ORIENTATION>;
type ButtonGroupVariant = ValueOf<typeof BUTTON_GROUP_VARIANT>;

export type { ButtonGroupSize, ButtonGroupOrientation, ButtonGroupVariant };
