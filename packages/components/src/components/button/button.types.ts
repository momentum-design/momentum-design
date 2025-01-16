import type { ValueOf } from '../../utils/types';
import {
  BUTTON_COLORS,
  BUTTON_TYPE_INTERNAL,
  BUTTON_VARIANTS,
  ICON_BUTTON_SIZES,
  PILL_BUTTON_SIZES,
} from './button.constants';

type ButtonVariant = ValueOf<typeof BUTTON_VARIANTS>
type PillButtonSize = ValueOf<typeof PILL_BUTTON_SIZES>
type IconButtonSize = ValueOf<typeof ICON_BUTTON_SIZES>
type ButtonTypeInternal = ValueOf<typeof BUTTON_TYPE_INTERNAL>
type ButtonColor = ValueOf<typeof BUTTON_COLORS>

export {
  ButtonVariant,
  PillButtonSize,
  IconButtonSize,
  ButtonTypeInternal,
  ButtonColor,
};
