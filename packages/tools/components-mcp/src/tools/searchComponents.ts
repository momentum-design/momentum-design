// AI-Assisted
import { searchComponents } from '../utils/componentRegistry';
import { formatComponentSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from './toolTypes';
import { getNumberArg, getStringArg } from './toolUtils';

const searchComponentsTool: ComponentsMcpTool = {
  definition: {
    name: 'search_components',
    description: 'Search Momentum Design components by name, tag, summary, usage docs, or common UI intent.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query such as "button", "modal", "form", "notification", or "profile".',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of matching components to return.',
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

    const matches = searchComponents(query, getNumberArg(args, 'limit') ?? 10);

    if (matches.length === 0) {
      return textResponse(`No Momentum Design components matched "${query}".`);
    }

    return textResponse([
      `Matches for "${query}":`,
      '',
      ...matches.map(formatComponentSummary),
    ].join('\n'));
  },
};

export default searchComponentsTool;
// End AI-Assisted
