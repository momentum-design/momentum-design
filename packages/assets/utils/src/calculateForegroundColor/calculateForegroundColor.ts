import darkStable from '@momentum-design/tokens/dist/json-minimal/theme/webex/dark-stable.json';
import CONSTANTS from '../constants';
import { calculateContrastRatio } from './helper';

/**
 * Calculate the foreground color based on the background color
 * @param backgroundColor - The HEX color code string for the background color
 * @returns The token name and value for the foreground color
 */
export function calculateForegroundColor(backgroundColor: string):{tokenName: string, tokenValue: string} {
  // TODO: check if we need to maintain hex6 or change implementation to support hex8
  const primaryForegroundColor = darkStable.color.theme.common.text.primary.normal;
  const primaryContrast = calculateContrastRatio(primaryForegroundColor, backgroundColor);
  if (primaryContrast >= CONSTANTS.DEFAULT_DESIRED_CONTRAST_RATIO) {
    return {
      tokenName: 'color-theme-common-text-primary-normal',
      tokenValue: primaryForegroundColor,
    };
  }
  return {
    tokenName: 'color-theme-common-inverted-text-primary-normal',
    tokenValue: darkStable.color.theme.common.inverted.text.primary.normal,
  };
}
