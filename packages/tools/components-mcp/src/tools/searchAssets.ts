import { searchAssets } from '../utils/assetRegistry';
import { formatAssetSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getAssetKindArg, getNumberArg, getStringArg } from '../utils/toolUtils';

function normalizeLimit(value: number | undefined): number {
  if (value === undefined) {
    return 20;
  }

  return Math.min(Math.max(Math.floor(value), 1), 100);
}

const searchAssetsTool: ComponentsMcpTool = {
  definition: {
    name: 'search_assets',
    description: 'Search Momentum Design asset names across icons, illustrations, animations, and brand visuals.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query such as "check", "empty state", "logo", "success", or "reaction".',
        },
        kind: {
          type: 'string',
          enum: ['icon', 'illustration', 'brand-visual', 'animation'],
          description: 'Optional asset kind filter.',
        },
        category: {
          type: 'string',
          description: 'Optional source category filter such as "core", "colored", "logos", "images", or "lottie".',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of matching assets to return. Defaults to 20 and is capped at 100.',
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

    const matches = searchAssets(
      query,
      {
        kind: getAssetKindArg(args),
        category: getStringArg(args, 'category'),
      },
      normalizeLimit(getNumberArg(args, 'limit')),
    );

    if (matches.length === 0) {
      return textResponse(`No Momentum Design assets matched "${query}".`);
    }

    return textResponse([
      `Asset matches for "${query}":`,
      '',
      ...matches.map(formatAssetSummary),
    ].join('\n'));
  },
};

export default searchAssetsTool;
