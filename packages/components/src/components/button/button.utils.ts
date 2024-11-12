import { ICON_BUTTON_SIZES } from './button.constants';

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

export { getIconSize, getIconNameWithoutStyle };
