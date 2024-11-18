import { ICON_BUTTON_SIZES } from './button.constants';
import { IconButtonSize } from './button.types';

/**
 * Returns the icon size multiplier based on the provided button size.
 *
 * @param size - The size of the button.
 * @returns The multiplier for the icon size.
 */
const getIconSize = (size: IconButtonSize): number => {
  switch (size) {
    case ICON_BUTTON_SIZES[64]: return 2;
    case ICON_BUTTON_SIZES[52]: return 1.75;
    case ICON_BUTTON_SIZES[40]: return 1.25;
    default: return 1;
  }
};

/**
 * Returns the name of the icon without the style suffix.
 *
 * @param iconName - The name of the icon.
 * @returns The name of the icon without the suffix.
 */
const getIconNameWithoutStyle = (iconName: string): string => {
  const iconParts = iconName.split('-');
  const variants = ['bold', 'filled', 'regular', 'light'];
  return iconParts.filter((part) => !variants.includes(part)).join('-');
};

export { getIconSize, getIconNameWithoutStyle };
