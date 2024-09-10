import {
  convertHexToRgb,
  calculateRelativeLuminanceComponent,
  calculateRelativeLuminance,
  calculateContrastRatio,
  determineForegroundColor,
} from './utils';

describe('Utils', () => {
  describe('convertHexToRgb', () => {
    it('should convert a hex color to RGB format', () => {
      const hexColor = '#FF0000';
      const expectedRgbColor = 'rgb(255, 0, 0)';
      const convertedColor = convertHexToRgb(hexColor);
      expect(convertedColor).toBe(expectedRgbColor);
    });
  });

  describe('calculateRelativeLuminanceComponent', () => {
    it('should calculate the relative luminance component of a color', () => {
      const color = 255;
      const expectedLuminance = 1;
      const calculatedLuminance = calculateRelativeLuminanceComponent(color);
      expect(calculatedLuminance).toBe(expectedLuminance);
    });
  });

  describe('calculateRelativeLuminance', () => {
    it('should calculate the relative luminance of a hex color', () => {
      const hexColor = '#FF0000';
      const expectedLuminance = 0.2126;
      const calculatedLuminance = calculateRelativeLuminance(hexColor);
      expect(calculatedLuminance).toBeCloseTo(expectedLuminance, 4);
    });
  });

  describe('calculateContrastRatio', () => {
    it('should calculate the contrast ratio between two colors', () => {
      const foregroundColor = '#000000';
      const backgroundColor = '#FFFFFF';
      const expectedContrastRatio = 21;
      const calculatedContrastRatio = calculateContrastRatio(foregroundColor, backgroundColor);
      expect(calculatedContrastRatio).toBe(expectedContrastRatio);
    });
  });

  describe('determineForegroundColor', () => {
    it('should determine the foreground color based on the background color', () => {
      const backgroundColor = '#FFFFFF';
      const expectedForegroundColor = '#000000';
      const determinedForegroundColor = determineForegroundColor(backgroundColor);
      expect(determinedForegroundColor).toBe(expectedForegroundColor);
    });
  });
});
