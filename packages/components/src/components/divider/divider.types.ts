import type { ValueOf } from '../../utils/types';
import {
  DIVIDER_ORIENTATION,
  DIVIDER_VARIANT,
  DIVIDER_ARROW_DIRECTION,
  DIVIDER_TYPE_INTERNAL,
} from './divider.constants';

type DividerTypeInternal = ValueOf<typeof DIVIDER_TYPE_INTERNAL>
type DividerOrientation = ValueOf<typeof DIVIDER_ORIENTATION>
type DividerVariant = ValueOf<typeof DIVIDER_VARIANT>
type DividerArrowDirection = ValueOf<typeof DIVIDER_ARROW_DIRECTION>

export {
  DividerTypeInternal,
  DividerOrientation,
  DividerVariant,
  DividerArrowDirection,
};