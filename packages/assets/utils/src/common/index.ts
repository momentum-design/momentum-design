import CONSTANTS from './constants';

export type {} from './types';

function convertHexToRgb(hexColor: string): string {
  const hexColorCode = hexColor.replace('#', '');

  const r = parseInt(hexColorCode.substring(0, 2), 16);
  const g = parseInt(hexColorCode.substring(2, 4), 16);
  const b = parseInt(hexColorCode.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function calculateRelativeLuminanceComponent(color: number): number {
  const normalizedColor = color / 255;

  if (normalizedColor <= 0.03928) {
    return normalizedColor / 12.92;
  }
  return ((normalizedColor + 0.055) / 1.055) ** 2.4;
}

function calculateRelativeLuminance(hexColor: string): number {
  // Convert the hex color code to RGB
  const rgbColor = convertHexToRgb(hexColor);

  // Extract the individual RGB values
  const [r, g, b] = rgbColor
    .substring(4, rgbColor.length - 1)
    .split(',')
    .map((value) => parseInt(value.trim(), 10));

  // Apply the relative luminance formula
  const relativeLuminance = (0.2126 * calculateRelativeLuminanceComponent(r))
        + (0.7152 * calculateRelativeLuminanceComponent(g))
        + (0.0722 * calculateRelativeLuminanceComponent(b));

  return relativeLuminance;
}

function calculateContrastRatio(foregroundColor: string, backgroundColor: string): number {
  // Calculate the relative luminance of the foreground and background colors
  const foregroundLuminance = calculateRelativeLuminance(foregroundColor);
  const backgroundLuminance = calculateRelativeLuminance(backgroundColor);

  // Calculate the contrast ratio - light colors have a greater luminance than dark colors
  const contrastRatio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);

  return contrastRatio;
}

export {
  CONSTANTS,
  convertHexToRgb,
  calculateRelativeLuminance,
  calculateContrastRatio,
};
