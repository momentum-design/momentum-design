import { requireComponent } from '../utils/componentRegistry';
import { formatIssues } from '../utils/formatters';
import { textResponse } from '../utils/response';
import { validateComponentUsage } from '../utils/validation';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import {
  getComponentNameArg,
  getPropsArg,
  getStringArg,
  parsePropsFromSnippet,
} from '../utils/toolUtils';

const validateComponentUsageTool: ComponentsMcpTool = {
  definition: {
    name: 'validate_component_usage',
    description: [
      'Validate Momentum Design component usage, including exact allowed property values',
      'and component-specific rules.',
    ].join(' '),
    inputSchema: {
      type: 'object',
      properties: {
        componentName: {
          type: 'string',
          description: 'Component name or tag name. Optional when code contains an mdc-* custom element tag.',
        },
        props: {
          type: 'object',
          description: 'Component props/attributes to validate.',
        },
        children: {
          type: 'string',
          description: 'Optional child text/content used for validation rules such as icon-only buttons.',
        },
        code: {
          type: 'string',
          description: 'Optional HTML/JSX snippet to parse and validate.',
        },
      },
      additionalProperties: false,
    },
  },
  handler: args => {
    const code = getStringArg(args, 'code');
    const parsed = code ? parsePropsFromSnippet(code) : { props: {} };
    const component = requireComponent(
      getStringArg(args, 'componentName') ?? parsed.componentName ?? getComponentNameArg(args),
    );
    const props = {
      ...parsed.props,
      ...getPropsArg(args),
    };
    const children = getStringArg(args, 'children') ?? parsed.children;
    const result = validateComponentUsage(component, props, children);

    return textResponse([
      `# Validation for ${component.title} (${component.tagName})`,
      '',
      result.valid ? 'Result: valid' : 'Result: invalid',
      '',
      formatIssues(result.issues),
    ].join('\n'));
  },
};

export default validateComponentUsageTool;
