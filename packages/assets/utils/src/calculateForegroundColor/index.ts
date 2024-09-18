import { color } from '@momentum-design/tokens/dist/json-minimal/theme/webex/dark-stable.json';
import CONSTANTS from '../constants';
import { calculateContrastRatio } from './helper';

/**
 * Determines the appropriate foreground color based on a given background color.
 * This function calculates the contrast ratio between a predefined primary foreground color
 * and the specified background color. If the contrast ratio meets or exceeds a defined threshold,
 * it returns the primary foreground color; otherwise, it returns an inverted version of the foreground color.
 *
 * @param backgroundColor - A string representing the background color in hexadecimal format (e.g. "#RRGGBB" or "#RGB").
 * @returns An object containing:
 *  - tokenName: A string representing the name of the color token.
 *  - tokenCSSVariable: A string representing the corresponding CSS variable for the color token.
 *  - tokenValue: A string representing the actual color value in hexadecimal format.
 *
 * @throws Error if there is an issue calculating the contrast ratio or if required variables are undefined.
 */
export function calculateForegroundColor(backgroundColor: string): {
  tokenName: string;
  tokenCSSVariable: string;
  tokenValue: string;
} {
  const primaryForegroundColor = color.theme.common.text.primary.normal;
  const primaryContrast = calculateContrastRatio(primaryForegroundColor, backgroundColor);

  if (primaryContrast >= CONSTANTS.DEFAULT_DESIRED_CONTRAST_RATIO) {
    return {
      tokenName: 'color-theme-common-text-primary-normal',
      tokenCSSVariable: '--mds-color-theme-common-text-primary-normal',
      tokenValue: primaryForegroundColor,
    };
  }
  return {
    tokenName: 'color-theme-common-inverted-text-primary-normal',
    tokenCSSVariable: '--mds-color-theme-common-inverted-text-primary-normal',
    tokenValue: color.theme.common.inverted.text.primary.normal,
  };
}
