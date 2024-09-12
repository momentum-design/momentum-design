import CONSTANTS from './constants';

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

export function calculateRelativeLuminance(hexColor: string): number {
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

  // Check if the relative luminance is valid
  if (Number.isNaN(relativeLuminance)) {
    throw new Error('Invalid relative luminance value');
  }

  return relativeLuminance;
}

export function calculateContrastRatio(foregroundColor: string, backgroundColor: string): number {
  // Calculate the relative luminance of the foreground and background colors
  const foregroundLuminance = calculateRelativeLuminance(foregroundColor);
  const backgroundLuminance = calculateRelativeLuminance(backgroundColor);

  // Calculate the contrast ratio - light colors have a greater luminance than dark colors
  const contrastRatio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
    / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);

  // Check if the contrast ratio is valid
  if (Number.isNaN(contrastRatio)) {
    throw new Error('Invalid contrast ratio value');
  }

  return contrastRatio;
}

export function calculateForegroundColor(backgroundColor: string):{name: string, value: string} {
  const primaryContrast = calculateContrastRatio('#ffffff', backgroundColor);
  if (primaryContrast >= CONSTANTS.DEFAULT_DESIRED_CONTRAST_RATIO) {
    return {
      name: 'color-theme-common-text-primary-normal',
      value: '#ffffff',
    };
  }
  return {
    name: 'color-theme-common-inverted-text-primary-normal',
    value: '#000000',
  };
}
