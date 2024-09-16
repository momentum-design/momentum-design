/**
 * Convert a HEX color to RGB format
 * @param hexColor - The HEX color code string to convert
 * @returns The RGB color code as string
 * @throws {Error} Thrown if the HEX color format is invalid
 */
export function convertHexToRgb(hexColor: string): string {
  let hexColorCode = hexColor.replace('#', '');

  if (hexColorCode.length === 3) {
    hexColorCode = hexColorCode.split('').map((char) => char + char).join('');
  }

  if (hexColorCode.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hexColorCode)) {
    throw new Error('Invalid HEX color format');
  }

  const r = parseInt(hexColorCode.substring(0, 2), 16);
  const g = parseInt(hexColorCode.substring(2, 4), 16);
  const b = parseInt(hexColorCode.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Calculate the relative luminance component for a color
 * @param color - The color value (as number) to calculate the relative luminance for
 * @returns The relative luminance component as number
 * @throws {Error} Thrown if the color value is invalid
 */
export function calculateRelativeLuminanceComponent(color: number): number {
  if (color < 0 || color > 255) {
    throw new Error('Invalid color value');
  }

  const normalizedColor = color / 255;
  if (normalizedColor <= 0.03928) {
    return normalizedColor / 12.92;
  }
  return ((normalizedColor + 0.055) / 1.055) ** 2.4;
}

/**
 * Calculate the relative luminance for a color
 * @param hexColor - The HEX color code string to calculate the relative luminance for
 * @returns The relative luminance as number
 * @throws {Error} Thrown if the relative luminance value is invalid
 */
export function calculateRelativeLuminance(hexColor: string): number {
  const rgbColor = convertHexToRgb(hexColor);

  const [r, g, b] = rgbColor
    .substring(4, rgbColor.length - 1)
    .split(',')
    .map((value) => parseInt(value.trim(), 10));

  // Apply the relative luminance formula
  const relativeLuminance = (0.2126 * calculateRelativeLuminanceComponent(r))
        + (0.7152 * calculateRelativeLuminanceComponent(g))
        + (0.0722 * calculateRelativeLuminanceComponent(b));

  if (Number.isNaN(relativeLuminance)) {
    throw new Error('Invalid relative luminance value');
  }

  return relativeLuminance;
}

/**
 * Calculate the contrast ratio between two colors
 * @param foregroundColor - The HEX color code string for the foreground color
 * @param backgroundColor - The HEX color code string for the background color
 * @returns The contrast ratio as number
 * @throws {Error} Thrown if the contrast ratio value is invalid
 */
export function calculateContrastRatio(foregroundColor: string, backgroundColor: string): number {
  const foregroundLuminance = calculateRelativeLuminance(foregroundColor);
  const backgroundLuminance = calculateRelativeLuminance(backgroundColor);

  // Calculate the contrast ratio - light colors have a greater luminance than dark colors
  const contrastRatio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);

  if (Number.isNaN(contrastRatio)) {
    throw new Error('Invalid contrast ratio value');
  }

  return contrastRatio;
}
