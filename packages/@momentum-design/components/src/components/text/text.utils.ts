import { FontType } from './text.types';

/**
 * Split the passed in type and return the parts
 */
const getTypeParts = (type: FontType) => {
  const parts = type.split('-');
  return { firstPart: parts[0], secondPart: parts[1] };
};

/**
 * Check if passed in type is a heading
 * @param type - type to check
 * @returns boolean, true if it is a heading
 */
const isHeading = (type: FontType) => {
  const { firstPart, secondPart } = getTypeParts(type);
  return firstPart === 'heading' && +secondPart > 0 && +secondPart < 7;
};

/**
 * Get corresponding aria-role to type
 * @param type - type to find corresponding role for
 * @returns role
 */
const getRole = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      return 'heading';
    }
    return 'paragraph';
  }
  return null;
};

/**
 * Get corresponding aria-level to type
 * @param type type to find corresponding level for
 * @returns aria-level (has to be a number)
 */
const getAriaLevel = (type?: FontType) => {
  if (type) {
    if (isHeading(type)) {
      const { secondPart } = getTypeParts(type);
      return secondPart;
    }
  }
  return null;
};

export { isHeading, getAriaLevel, getRole };
