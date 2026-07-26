import { listColorTokens } from '../utils/colorRegistry';
import { formatColorTokenSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getColorTokenCategoryArg, getNumberArg, getStringArg } from '../utils/toolUtils';

function normalizeLimit(value: number | undefined): number {
  if (value === undefined) {
    return 50;
  }

  return Math.min(Math.max(Math.floor(value), 1), 200);
}

const listColorTokensTool: ComponentsMcpTool = {
  definition: {
    name: 'list_color_tokens',
    description: 'List Momentum Design color tokens and CSS variables from the public tokens package.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: ['core', 'theme', 'aaos', 'additional-theme'],
          description: 'Optional token category filter.',
        },
        theme: {
          type: 'string',
          description: 'Optional theme filter such as "stable-light", "stable-dark", or "aaos-day".',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of tokens to return. Defaults to 50 and is capped at 200.',
        },
      },
      additionalProperties: false,
    },
  },
  handler: args => {
    const allTokens = listColorTokens(
      {
        category: getColorTokenCategoryArg(args),
        theme: getStringArg(args, 'theme'),
      },
    );
    const tokens = allTokens.slice(0, normalizeLimit(getNumberArg(args, 'limit')));

    if (allTokens.length === 0) {
      return textResponse('No Momentum Design color tokens matched the requested filters.');
    }

    return textResponse([
      `Momentum Design color tokens: showing ${tokens.length} of ${allTokens.length}`,
      '',
      ...tokens.map(formatColorTokenSummary),
    ].join('\n'));
  },
};

export default listColorTokensTool;
