// AI-Assisted
import { findColorTokens } from '../utils/colorRegistry';
import { formatColorTokenDetails, formatColorTokenSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from './toolTypes';
import { getColorTokenCategoryArg, getStringArg } from './toolUtils';

const getColorTokenTool: ComponentsMcpTool = {
  definition: {
    name: 'get_color_token',
    description: [
      'Get exact Momentum Design color token metadata, resolved color value, CSS variable,',
      'and CSS usage snippet.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        tokenName: {
          type: 'string',
          description: [
            'Token name or CSS variable, for example "color.theme.text.primary.normal"',
            'or "--mds-color-theme-text-primary-normal".',
          ].join(' '),
        },
        category: {
          type: 'string',
          enum: ['core', 'theme', 'aaos', 'additional-theme'],
          description: 'Optional token category filter.',
        },
        theme: {
          type: 'string',
          description: 'Optional theme filter such as "stable-light", "stable-dark", or "aaos-day".',
        },
      },
      required: ['tokenName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const tokenName = getStringArg(args, 'tokenName');
    if (!tokenName) {
      throw new Error('tokenName is required.');
    }

    const matches = findColorTokens(
      tokenName,
      {
        category: getColorTokenCategoryArg(args),
        theme: getStringArg(args, 'theme'),
      },
    );

    if (matches.length === 0) {
      return textResponse([
        `No Momentum Design color token matched "${tokenName}".`,
        'Use search_color_tokens to find valid token names or CSS variables.',
      ].join(' '));
    }

    if (matches.length > 1) {
      return textResponse([
        `Multiple color tokens matched "${tokenName}". Add a theme filter for one exact token.`,
        '',
        ...matches.map(formatColorTokenSummary),
      ].join('\n'));
    }

    return textResponse(formatColorTokenDetails(matches[0]));
  },
};

export default getColorTokenTool;
// End AI-Assisted
