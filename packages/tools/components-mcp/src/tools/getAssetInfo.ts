import { requireAsset } from '../utils/assetRegistry';
import { formatAssetUsage, getAssetComponentName } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getAssetKindArg, getAssetNameArg } from '../utils/toolUtils';

const getAssetInfoTool: ComponentsMcpTool = {
  definition: {
    name: 'get_asset_info',
    description: [
      'Get exact Momentum Design asset metadata and Web Component/Angular usage snippets',
      'for icons, illustrations, animations, or brand visuals.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        assetName: {
          type: 'string',
          description: 'Asset name, for example "check-bold", "success", or a published brand visual name.',
        },
        kind: {
          type: 'string',
          enum: ['icon', 'illustration', 'brand-visual', 'animation'],
          description: 'Optional asset kind filter when multiple assets share a similar name.',
        },
      },
      required: ['assetName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const asset = requireAsset(getAssetNameArg(args), getAssetKindArg(args));

    return textResponse([
      `# ${asset.name}`,
      '',
      `Kind: \`${asset.kind}\``,
      `Component: \`${getAssetComponentName(asset)}\``,
      `Category: \`${asset.category}\``,
      `Format: \`${asset.format}\``,
      `Package: \`${asset.packageName}\``,
      `Package path: \`${asset.importPath}\``,
      `Source: \`${asset.sourcePath}\``,
      '',
      '## Usage',
      '',
      formatAssetUsage(asset),
    ].join('\n'));
  },
};

export default getAssetInfoTool;
