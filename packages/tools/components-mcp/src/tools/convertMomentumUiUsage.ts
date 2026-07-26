// AI-Assisted
import {
  convertMomentumUiUsage,
  getComponentForMapping,
  getTagNameForMapping,
} from '../utils/migration';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from './toolTypes';
import { getStringArg } from './toolUtils';

const convertMomentumUiUsageTool: ComponentsMcpTool = {
  definition: {
    name: 'convert_momentum_ui_usage',
    description: [
      'Suggest Momentum UI to Momentum Design component replacements.',
      'Can inspect a code snippet and produce a starter tag-renamed snippet for review.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Optional Momentum UI snippet containing md-* custom elements.',
        },
        componentName: {
          type: 'string',
          description: 'Optional single Momentum UI component name, for example "md-button" or "modal".',
        },
      },
      additionalProperties: false,
    },
  },
  handler: args => {
    const code = getStringArg(args, 'code');
    const componentName = getStringArg(args, 'componentName');

    if (!code && !componentName) {
      throw new Error('Provide either code or componentName.');
    }

    const result = convertMomentumUiUsage(code, componentName);
    const mappingLines = result.mappings.map(mapping => {
      const component = getComponentForMapping(mapping);
      const notes = mapping.notes.length > 0 ? ` Notes: ${mapping.notes.join(' ')}` : '';

      return [
        `- ${mapping.legacyNames[0]} -> ${getTagNameForMapping(mapping)}`,
        `  Confidence: ${mapping.confidence}`,
        `  Component: ${component ? `${component.title} (${component.tagName})` : mapping.componentName}`,
        notes ? `  ${notes.trim()}` : '',
      ].filter(Boolean).join('\n');
    });
    const lines = [
      '# Momentum UI conversion guidance',
      '',
      [
        'Detected names:',
        result.detectedNames.length > 0 ? result.detectedNames.map(name => `\`${name}\``).join(', ') : 'none',
      ].join(' '),
      '',
      '## Suggested Replacements',
      '',
      mappingLines.length > 0 ? mappingLines.join('\n') : 'No direct replacement suggestions found.',
    ];

    if (result.unmappedNames.length > 0) {
      lines.push(
        '',
        '## Unmapped Names',
        '',
        ...result.unmappedNames.map(name => `- \`${name}\``),
      );
    }

    if (result.convertedCode) {
      lines.push(
        '',
        '## Starter Converted Snippet',
        '',
        '```html',
        result.convertedCode,
        '```',
      );
    }

    lines.push(
      '',
      '## Next Checks',
      '',
      '- Use get_component_api for exact property names, allowed values, slots, and events.',
      '- Use validate_component_usage after adjusting attributes and child structure.',
      '- Use migrate_icon_name for icon-name, prefix-icon, and postfix-icon values.',
    );

    return textResponse(lines.join('\n'));
  },
};

export default convertMomentumUiUsageTool;
// End AI-Assisted
