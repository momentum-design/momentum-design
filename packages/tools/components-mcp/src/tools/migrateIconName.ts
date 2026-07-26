// AI-Assisted
import { getAsset, searchAssets } from '../utils/assetRegistry';
import { formatAssetSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getNumberArg, getStringArg } from '../utils/toolUtils';

const ICON_STYLES = ['bold', 'filled', 'light', 'regular'];

function normalizeLimit(value: number | undefined): number {
  if (value === undefined) {
    return 10;
  }

  return Math.min(Math.max(Math.floor(value), 1), 30);
}

function normalizeIconName(iconName: string): string {
  return iconName
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\\/g, '/')
    .split('/')
    .pop()
    ?.replace(/\.svg$/i, '')
    .replace(/^md-/, '')
    .replace(/^icon-/, '')
    .replace(/^momentum-/, '')
    .replace(/[_\s]+/g, '-')
    .replace(/-(?:\d+px|\d+)$/, '')
    .toLowerCase() ?? '';
}

function stripStyle(iconName: string): string {
  return iconName.replace(new RegExp(`-(${ICON_STYLES.join('|')})$`), '');
}

function getPreferredStyle(args: Record<string, unknown>): string | undefined {
  const preferredStyle = getStringArg(args, 'preferredStyle');

  if (preferredStyle === undefined) {
    return undefined;
  }

  if (ICON_STYLES.includes(preferredStyle)) {
    return preferredStyle;
  }

  throw new Error(`Unsupported preferredStyle "${preferredStyle}". Use "bold", "filled", "light", or "regular".`);
}

function getSuggestionQueries(normalizedName: string, preferredStyle?: string): string[] {
  const baseName = stripStyle(normalizedName).replace(/-legacy(?=-|$)/, '');
  const queries = [
    normalizedName,
    normalizedName.replace(/-legacy(?=-|$)/, ''),
    baseName,
    preferredStyle ? `${baseName}-${preferredStyle}` : '',
  ];

  return queries.filter(Boolean).filter((query, index, all) => all.indexOf(query) === index);
}

const migrateIconNameTool: ComponentsMcpTool = {
  definition: {
    name: 'migrate_icon_name',
    description: [
      'Suggest current Momentum Design icon names for an existing or legacy icon reference.',
      'Uses the public icon registry and does not invent mappings.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        iconName: {
          type: 'string',
          description: 'Existing icon reference, file name, or icon name to migrate.',
        },
        preferredStyle: {
          type: 'string',
          enum: ['bold', 'filled', 'light', 'regular'],
          description: 'Optional preferred icon style for suggestions.',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of suggestions to return. Defaults to 10 and is capped at 30.',
        },
      },
      required: ['iconName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const iconName = getStringArg(args, 'iconName');
    if (!iconName) {
      throw new Error('iconName is required.');
    }

    const preferredStyle = getPreferredStyle(args);
    const limit = normalizeLimit(getNumberArg(args, 'limit'));
    const normalizedName = normalizeIconName(iconName);
    const exactMatch = getAsset(normalizedName, 'icon');
    const suggestions = getSuggestionQueries(normalizedName, preferredStyle)
      .flatMap(query => searchAssets(query, { kind: 'icon' }, limit))
      .filter((asset, index, all) => all.findIndex(item => item.name === asset.name) === index)
      .slice(0, limit);
    const notes = [
      'This helper uses current public icon assets as the source of truth.',
      'Review the suggested icon visually before replacing a legacy icon.',
    ];

    if (normalizedName.includes('legacy')) {
      notes.push('The input includes "legacy"; prefer a non-legacy visual match when one exists.');
    }

    return textResponse([
      `# Icon migration suggestions for ${iconName}`,
      '',
      `Normalized lookup: \`${normalizedName}\``,
      '',
      '## Exact Match',
      '',
      exactMatch ? formatAssetSummary(exactMatch) : 'No exact current icon match found.',
      '',
      '## Suggestions',
      '',
      suggestions.length > 0 ? suggestions.map(formatAssetSummary).join('\n') : 'No suggestions found.',
      '',
      '## Notes',
      '',
      ...notes.map(note => `- ${note}`),
    ].join('\n'));
  },
};

export default migrateIconNameTool;
// End AI-Assisted
