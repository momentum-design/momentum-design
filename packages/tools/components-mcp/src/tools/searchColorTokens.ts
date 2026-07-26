// AI-Assisted
import { searchColorTokens } from '../utils/colorRegistry';
import { formatColorTokenSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from './toolTypes';
import { getColorTokenCategoryArg, getNumberArg, getStringArg } from './toolUtils';

function normalizeLimit(value: number | undefined): number {
  if (value === undefined) {
    return 20;
  }

  return Math.min(Math.max(Math.floor(value), 1), 100);
}

const searchColorTokensTool: ComponentsMcpTool = {
  definition: {
    name: 'search_color_tokens',
    description: 'Search Momentum Design color token names, CSS variables, resolved values, themes, and descriptions.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query such as "text primary", "blue 70", "background", "success", or "#0353a8".',
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
        limit: {
          type: 'number',
          description: 'Maximum number of matching tokens to return. Defaults to 20 and is capped at 100.',
        },
      },
      required: ['query'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const query = getStringArg(args, 'query');
    if (!query) {
      throw new Error('query is required.');
    }

    const matches = searchColorTokens(
      query,
      {
        category: getColorTokenCategoryArg(args),
        theme: getStringArg(args, 'theme'),
      },
      normalizeLimit(getNumberArg(args, 'limit')),
    );

    if (matches.length === 0) {
      return textResponse(`No Momentum Design color tokens matched "${query}".`);
    }

    return textResponse([
      `Color token matches for "${query}":`,
      '',
      ...matches.map(formatColorTokenSummary),
    ].join('\n'));
  },
};

export default searchColorTokensTool;
// End AI-Assisted
