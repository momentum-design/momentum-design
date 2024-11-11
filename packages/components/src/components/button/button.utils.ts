import { ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from './button.constants';

const isValidIconSize = (
  size: number,
  variant: string,
): number | boolean => Object.values(ICON_BUTTON_SIZES).includes(size)
    && !(size === 20 && variant !== 'tertiary');

const isValidPillSize = (size: number): number | boolean => Object.values(PILL_BUTTON_SIZES).includes(size);

const getIconSize = (size: number): number => {
  switch (size) {
    case ICON_BUTTON_SIZES[64]: return 2;
    case ICON_BUTTON_SIZES[52]: return 1.75;
    case ICON_BUTTON_SIZES[40]: return 1.25;
    default: return 1;
  }
};

const getIconNameWithoutStyle = (iconName: string): string => {
  const iconParts = iconName.split('-');
  const variants = ['bold', 'filled', 'regular', 'light'];
  return iconParts.filter((part) => !variants.includes(part)).join('-');
};

export { isValidIconSize, isValidPillSize, getIconSize, getIconNameWithoutStyle };
