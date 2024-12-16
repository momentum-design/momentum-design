import type { ValueOf } from '../../utils/types';
import { DIVIDER_ORIENTATION, DIVIDER_VARIANT, DIRECTIONS } from './divider.constants';

type DividerOrientation = ValueOf<typeof DIVIDER_ORIENTATION>;
type DividerVariant = ValueOf<typeof DIVIDER_VARIANT>;
type Directions = ValueOf<typeof DIRECTIONS>;

export { DividerOrientation, DividerVariant, Directions };
