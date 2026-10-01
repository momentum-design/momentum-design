import { requireComponent } from '../utils/componentRegistry';
import { generateComponentCode } from '../utils/codeGeneration';
import { formatIssues } from '../utils/formatters';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import {
  getComponentNameArg,
  getFrameworkArg,
  getPropsArg,
  getStringArg,
} from '../utils/toolUtils';

const generateComponentCodeTool: ComponentsMcpTool = {
  definition: {
    name: 'generate_component_code',
    description: [
      'Generate Momentum Design component code for Web Components, Angular, or React',
      'after validating requested props against the documented API.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'Component name or tag name, for example "button" or "mdc-button".',
        },
        framework: {
          type: 'string',
          enum: ['web-component', 'angular', 'react'],
          description: 'Target framework output.',
        },
        props: {
          type: 'object',
          description: [
            'Component props/attributes to apply.',
            'Use dash-case names for Web Component/Angular attributes.',
          ].join(' '),
        },
        children: {
          type: 'string',
          description: 'Optional child text/content for the component.',
        },
      },
      required: ['componentName', 'framework'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const component = requireComponent(getComponentNameArg(args));
    const result = generateComponentCode(
      component,
      getFrameworkArg(args),
      getPropsArg(args),
      getStringArg(args, 'children'),
    );

    return textResponse([
      `# Generated ${result.framework} code for ${component.title} (${component.tagName})`,
      '',
      '## Validation',
      '',
      formatIssues(result.validation.issues),
      '',
      '## Setup Notes',
      '',
      ...result.setupNotes.map(note => `- ${note}`),
      '',
      '## Code',
      '',
      `\`\`\`${result.framework === 'react' ? 'tsx' : 'html'}`,
      result.code,
      '```',
    ].join('\n'));
  },
};

export default generateComponentCodeTool;
