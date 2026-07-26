// AI-Assisted
import { requireComponent } from '../utils/componentRegistry';
import { formatProperty, formatReferenceList } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getComponentNameArg } from '../utils/toolUtils';

const getComponentApiTool: ComponentsMcpTool = {
  definition: {
    name: 'get_component_api',
    description: [
      'Get exact Momentum Design component API metadata including properties, valid values, defaults,',
      'slots, events, CSS parts, CSS variables, dependencies, and rules.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'Component name or tag name, for example "button" or "mdc-button".',
        },
      },
      required: ['componentName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const component = requireComponent(getComponentNameArg(args));
    const lines = [
      `# ${component.title} API (${component.tagName})`,
      '',
      component.summary,
      '',
      `Source: ${component.source.knowledgeBasePath}`,
      '',
      '## Properties and Attributes',
      '',
      component.api.properties.length > 0
        ? component.api.properties.map(formatProperty).join('\n\n')
        : 'No public properties documented.',
      '',
      formatReferenceList('Slots', component.api.slots),
      '',
      formatReferenceList('Events', component.api.events),
      '',
      formatReferenceList('CSS Parts', component.api.cssParts),
      '',
      formatReferenceList('CSS Custom Properties', component.api.cssProperties),
      '',
      component.dependencies.length > 0
        ? `### Dependencies\n\n${component.dependencies.map(dependency => `- \`${dependency}\``).join('\n')}`
        : '### Dependencies\n\nNone documented.',
      '',
      component.api.rules.length > 0
        ? `### Usage Rules\n\n${component.api.rules.map(rule => `- ${rule.replace(/\n+/g, ' ')}`).join('\n')}`
        : '### Usage Rules\n\nNo additional rules documented.',
    ];

    return textResponse(lines.join('\n'));
  },
};

export default getComponentApiTool;
// End AI-Assisted
