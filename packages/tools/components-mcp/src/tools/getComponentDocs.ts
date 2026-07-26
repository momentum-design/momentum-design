// AI-Assisted
import { requireComponent } from '../utils/componentRegistry';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getComponentNameArg, getStringArg } from '../utils/toolUtils';

const getComponentDocsTool: ComponentsMcpTool = {
  definition: {
    name: 'get_component_docs',
    description: 'Get Momentum Design component guidance from the public knowledge-base markdown content.',
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'Component name or tag name, for example "button" or "mdc-button".',
        },
        section: {
          type: 'string',
          description: 'Optional top-level docs section, such as "Overview", "Guidelines", or "Accessibility".',
        },
      },
      required: ['componentName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const component = requireComponent(getComponentNameArg(args));
    const section = getStringArg(args, 'section');
    const docs = section ? component.sections[section] : component.docs;

    if (section && !docs) {
      return textResponse([
        `Section "${section}" was not found for ${component.title} (${component.tagName}).`,
        `Available sections: ${Object.keys(component.sections).join(', ')}.`,
      ].join(' '));
    }

    return textResponse([
      `# ${component.title} (${component.tagName})`,
      '',
      component.summary,
      '',
      docs,
    ].filter(Boolean).join('\n'));
  },
};

export default getComponentDocsTool;
// End AI-Assisted
