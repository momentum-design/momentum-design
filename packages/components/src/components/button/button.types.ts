import { BUTTON_COLORS, BUTTON_TYPE, BUTTON_VARIANTS, ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from './button.constants';

type ButtonVariant = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
type PillButtonSize = typeof PILL_BUTTON_SIZES[keyof typeof PILL_BUTTON_SIZES];
type IconButtonSize = typeof ICON_BUTTON_SIZES[keyof typeof ICON_BUTTON_SIZES];
type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];
type ButtonColor = typeof BUTTON_COLORS[keyof typeof BUTTON_COLORS];

export {
  ButtonVariant,
  PillButtonSize,
  IconButtonSize,
  ButtonType,
  ButtonColor,
};
