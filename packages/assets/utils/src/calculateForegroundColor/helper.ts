/**
 * Convert a HEX color to RGB format
 * @param hexColor - The HEX color code string to convert
 * @returns The RGB color code as string
 * @throws Error if the provided hex color format is invalid.
 */
export function convertHexToRgb(hexColor: string): string {
  let hexColorCode = hexColor.replace('#', '');

  if (hexColorCode.length === 3) {
    hexColorCode = hexColorCode
      .split('')
      .map((char) => char + char)
      .join('');
  } else if (hexColorCode.length === 4) {
    hexColorCode = hexColorCode
      .split('')
      .map((char) => char + char)
      .join('')
      + hexColorCode[3]
      + hexColorCode[3];
  }

  if (!/^[0-9A-Fa-f]{6}$/.test(hexColorCode) && !/^[0-9A-Fa-f]{8}$/.test(hexColorCode)) {
    throw new Error('Invalid HEX color format');
  }

  const r = parseInt(hexColorCode.substring(0, 2), 16);
  const g = parseInt(hexColorCode.substring(2, 4), 16);
  const b = parseInt(hexColorCode.substring(4, 6), 16);
  if (hexColorCode.length === 8) {
    const a = hexColorCode.length === 8 ? parseInt(hexColorCode.substring(6, 8), 16) / 255 : 1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Calculate the relative luminance component for a color
 * @param color - The color value (as number) to calculate the relative luminance for
 * @returns The relative luminance component as number
 * @throws Error if the provided color value is outside the valid range (0-255).
 */
export function calculateRelativeLuminanceComponent(color: number): number {
  if (color < 0 || color > 255) {
    throw new Error('Invalid color value');
  }
  // Normalize the color value - Read mode at https://www.w3.org/TR/WCAG20/#relativeluminancedef
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
 * @throws Error if the provided hex color is invalid or results in an invalid relative luminance value.
 */
export function calculateRelativeLuminance(hexColor: string): number {
  const rgbColor = convertHexToRgb(hexColor);
  const index = rgbColor.indexOf('rgba') !== -1 ? 5 : 4;
  const [r, g, b] = rgbColor
    .substring(index, rgbColor.length - 1)
    .split(',')
    .map((value) => parseInt(value.trim(), 10));

  // Apply the relative luminance formula - Read more at https://www.w3.org/WAI/GL/wiki/Relative_luminance
  const relativeLuminance = 0.2126 * calculateRelativeLuminanceComponent(r)
    + 0.7152 * calculateRelativeLuminanceComponent(g)
    + 0.0722 * calculateRelativeLuminanceComponent(b);

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
 * @throws Error if the calculated contrast ratio is invalid.
 */
export function calculateContrastRatio(foregroundColor: string, backgroundColor: string): number {
  const foregroundLuminance = calculateRelativeLuminance(foregroundColor);
  const backgroundLuminance = calculateRelativeLuminance(backgroundColor);

  // Calculate the contrast ratio - light colors have a greater luminance than dark colors
  // Read more at https://www.w3.org/TR/WCAG20/#contrast-ratiodef
  const contrastRatio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);

  if (Number.isNaN(contrastRatio)) {
    throw new Error('Invalid contrast ratio value');
  }

  return contrastRatio;
}
