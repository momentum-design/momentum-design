// AI-Assisted
import { listComponents } from '../utils/componentRegistry';
import { formatComponentSummary } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getBooleanArg } from '../utils/toolUtils';

const listComponentsTool: ComponentsMcpTool = {
  definition: {
    name: 'list_components',
    description: 'List all Momentum Design components with their public custom element tag names and summaries.',
    inputSchema: {
      type: 'object',
      properties: {
        includeDetails: {
          type: 'boolean',
          description: 'When true, include source paths and documentation tier metadata.',
        },
      },
      additionalProperties: false,
    },
  },
  handler: args => {
    const includeDetails = getBooleanArg(args, 'includeDetails') ?? false;
    const components = listComponents();
    const lines = [
      `Momentum Design components: ${components.length}`,
      '',
      ...components.map(component => {
        const summary = formatComponentSummary(component);
        if (!includeDetails) {
          return summary;
        }

        return [
          summary,
          `  Tier: ${component.tier ?? 'not specified'}`,
          `  Knowledge base: ${component.source.knowledgeBasePath}`,
        ].join('\n');
      }),
    ];

    return textResponse(lines.join('\n'));
  },
};

export default listComponentsTool;
// End AI-Assisted
