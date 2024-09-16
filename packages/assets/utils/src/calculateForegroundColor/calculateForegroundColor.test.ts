import { convertHexToRgb,
  calculateRelativeLuminanceComponent,
  calculateRelativeLuminance,
  calculateContrastRatio } from './helper';
// import {
//   calculateForegroundColor,
// } from './calculateForegroundColor';

describe('convertHexToRgb', () => {
  it('should convert 3-digit hex to RGB', () => {
    expect(convertHexToRgb('#fff')).toBe('rgb(255, 255, 255)');
  });

  it('should convert 6-digit hex to RGB', () => {
    expect(convertHexToRgb('#ffffff')).toBe('rgb(255, 255, 255)');
  });

  it('should throw an error for invalid hex format', () => {
    expect(() => convertHexToRgb('#ggg')).toThrow('Invalid HEX color format');
  });

  it('should throw an error for hex length not equal to 3 or 6', () => {
    expect(() => convertHexToRgb('#ffff')).toThrow('Invalid HEX color format');
  });
});

describe('calculateRelativeLuminanceComponent', () => {
  it('should calculate the relative luminance component for a valid color value', () => {
    expect(calculateRelativeLuminanceComponent(255)).toBeCloseTo(1);
    expect(calculateRelativeLuminanceComponent(0)).toBeCloseTo(0);
  });

  it('should throw an error for invalid color value', () => {
    expect(() => calculateRelativeLuminanceComponent(-1)).toThrow('Invalid color value');
    expect(() => calculateRelativeLuminanceComponent(256)).toThrow('Invalid color value');
  });
});

describe('calculateRelativeLuminance', () => {
  it('should calculate the relative luminance for a valid hex color', () => {
    expect(calculateRelativeLuminance('#ffffff')).toBeCloseTo(1);
    expect(calculateRelativeLuminance('#000000')).toBeCloseTo(0);
  });

  it('should throw an error for invalid hex color', () => {
    expect(() => calculateRelativeLuminance('#ggg')).toThrow('Invalid HEX color format');
  });
});

describe('calculateContrastRatio', () => {
  it('should calculate the contrast ratio between two colors', () => {
    expect(calculateContrastRatio('#ffffff', '#000000')).toBeCloseTo(21);
    expect(calculateContrastRatio('#000000', '#ffffff')).toBeCloseTo(21);
  });

  it('should throw an error for invalid hex color', () => {
    expect(() => calculateContrastRatio('#ggg', '#000000')).toThrow('Invalid HEX color format');
  });
});

// describe('calculateForegroundColor', () => {
//   it('should calculate the foreground color for a given background color', () => {
//     expect(calculateForegroundColor('#ffffff')).toEqual({
//       name: 'color-theme-common-inverted-text-primary-normal',
//       value: '#000000',
//     });
//     expect(calculateForegroundColor('#000000')).toEqual({
//       name: 'color-theme-common-text-primary-normal',
//       value: '#ffffff',
//     });
//   });

//   it('should throw an error for invalid hex color', () => {
//     expect(() => calculateForegroundColor('#ggg')).toThrow('Invalid HEX color format');
//   });
// });
