/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 */
export const capitalize = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
