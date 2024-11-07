import { ICON_BUTTON_SIZES, PILL_BUTTON_SIZES } from './button.constants';

const isValidIconSize = (
  size: number,
  variant: string,
): number | boolean => ICON_BUTTON_SIZES.includes(size)
    && !(size === ICON_BUTTON_SIZES[20] && variant !== 'tertiary');

const isValidPillSize = (size: number): number | boolean => PILL_BUTTON_SIZES.includes(size);

export { isValidIconSize, isValidPillSize };
