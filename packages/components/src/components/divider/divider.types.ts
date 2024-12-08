import type { ValueOf } from '../../utils/types';
import { DIVIDER_ORIENTATION, DIVIDER_VARIANT, DIRECTIONS, DIVIDER_TYPE_INTERNAL } from './divider.constants';

type DividerTypeInternal = ValueOf<typeof DIVIDER_TYPE_INTERNAL>;
type DividerOrientation = ValueOf<typeof DIVIDER_ORIENTATION>;
type DividerVariant = ValueOf<typeof DIVIDER_VARIANT>;
type Directions = ValueOf<typeof DIRECTIONS>;

export { DividerTypeInternal, DividerOrientation, DividerVariant, Directions };
