import type { IconNames } from '../icon/icon.types';

/**
 * Returns the name of the icon without the style suffix.
 *
 * @param iconName - The name of the icon.
 * @returns The name of the icon without the suffix.
 */
const getIconNameWithoutStyle = (iconName: IconNames): string => iconName.replace(/-(bold|filled|regular|light)$/, '');

export { getIconNameWithoutStyle };
