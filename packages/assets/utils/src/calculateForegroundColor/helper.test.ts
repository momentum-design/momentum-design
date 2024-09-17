import {
  convertHexToRgb,
  calculateRelativeLuminanceComponent,
  calculateRelativeLuminance,
  calculateContrastRatio,
} from './helper';

describe('convertHexToRgb', () => {
  const validHexColors = [
    ['#fff', 'rgb(255, 255, 255)'],
    ['#ffffff', 'rgb(255, 255, 255)'],
    ['#b7b7b7', 'rgb(183, 183, 183)'],
  ];

  it.each(validHexColors)('should convert %s to %s', (hex, expected) => {
    expect(convertHexToRgb(hex)).toBe(expected);
  });

  const invalidHexColors = [
    ['#ggg', 'Invalid HEX color format'],
    ['string', 'Invalid HEX color format'],
  ];

  it.each(invalidHexColors)('should throw an error for %s', (hex, expected) => {
    expect(() => convertHexToRgb(hex)).toThrow(expected);
  });
});

describe('calculateRelativeLuminanceComponent', () => {
  it.each([
    [255, 1],
    [0, 0],
    [128, 0.2158], // Example for a midpoint luminance
    [64, 0.0512], // Example for lower luminance
    [192, 0.5271], // Example for higher luminance
  ])('should calculate the relative luminance component for color value %d', (input, expected) => {
    expect(calculateRelativeLuminanceComponent(input)).toBeCloseTo(expected);
  });

  it.each([-1, 256])('should throw an error for invalid color value %d', (input) => {
    expect(() => calculateRelativeLuminanceComponent(input)).toThrow('Invalid color value');
  });
});

describe('calculateRelativeLuminance', () => {
  it.each([
    ['#ffffff', 1],
    ['#000000', 0],
    ['#ff0000', 0.2126],
    ['#00ff00', 0.7152],
    ['#0000ff', 0.0722],
  ])('should calculate the relative luminance for %s', (hex, expected) => {
    expect(calculateRelativeLuminance(hex)).toBe(expected);
  });

  it('should throw an error for invalid hex color', () => {
    expect(() => calculateRelativeLuminance('#ggg')).toThrow('Invalid HEX color format');
  });
});

describe('calculateContrastRatio1', () => {
  it.each([
    ['#ffffff', '#000000', 21],
    ['#000000', '#ffffff', 21],
    ['#ff0000', '#00ff00', 2.9139],
    ['#00ff00', '#0000ff', 6.2618],
  ])('should calculate the contrast ratio between %s and %s', (color1, color2, expected) => {
    const result = calculateContrastRatio(color1, color2);
    expect(result).toBeCloseTo(expected);
  });

  it('should throw an error for invalid hex color', () => {
    expect(() => calculateContrastRatio('#ggg', '#000000')).toThrow('Invalid HEX color format');
  });
});
