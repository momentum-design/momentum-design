import { listAssets } from '../utils/assetRegistry';
import { formatAssetSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getAssetKindArg, getNumberArg, getStringArg } from '../utils/toolUtils';

function normalizeLimit(value: number | undefined): number {
  if (value === undefined) {
    return 50;
  }

  return Math.min(Math.max(Math.floor(value), 1), 200);
}

const listAssetsTool: ComponentsMcpTool = {
  definition: {
    name: 'list_assets',
    description: 'List Momentum Design icons, illustrations, animations, and brand visuals from public asset packages.',
    inputSchema: {
      type: 'object',
      properties: {
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
          description: 'Maximum number of assets to return. Defaults to 50 and is capped at 200.',
        },
      },
      additionalProperties: false,
    },
  },
  handler: args => {
    const kind = getAssetKindArg(args);
    const category = getStringArg(args, 'category');
    const limit = normalizeLimit(getNumberArg(args, 'limit'));
    const allAssets = listAssets({ kind, category });
    const assets = allAssets.slice(0, limit);

    if (allAssets.length === 0) {
      return textResponse('No Momentum Design assets matched the requested filters.');
    }

    return textResponse([
      `Momentum Design assets: showing ${assets.length} of ${allAssets.length}`,
      '',
      ...assets.map(formatAssetSummary),
    ].join('\n'));
  },
};

export default listAssetsTool;
