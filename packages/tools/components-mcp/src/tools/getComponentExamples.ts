// AI-Assisted
import { type Framework } from '../common';
import { requireComponent } from '../utils/componentRegistry';
import { defaultPropsForComponent, generateComponentCode } from '../utils/codeGeneration';
import { textResponse } from '../utils/response';

import type { ComponentsMcpTool } from '../utils/toolTypes';
import { getComponentNameArg, getFrameworkArg, getStringArg } from '../utils/toolUtils';

const FRAMEWORK_LANGUAGES: Record<Framework, string[]> = {
  angular: ['html'],
  react: ['tsx', 'jsx'],
  'web-component': ['html', 'js', 'javascript'],
};

function getDocumentationExamples(
  framework: Framework | undefined,
  examples: { language: string; code: string }[],
): string[] {
  const languages = framework ? FRAMEWORK_LANGUAGES[framework] : undefined;

  return examples
    .filter(example => !languages || languages.includes(example.language.toLowerCase()))
    .slice(0, 3)
    .map((example, index) => [
      `## Documentation Example ${index + 1}`,
      '',
      `\`\`\`${example.language}`,
      example.code,
      '```',
    ].join('\n'));
}

const getComponentExamplesTool: ComponentsMcpTool = {
  definition: {
    name: 'get_component_examples',
    description: 'Get ready-to-use Momentum Design component examples for Web Components, Angular, or React.',
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
          description: 'Optional framework filter.',
        },
        children: {
          type: 'string',
          description: 'Optional child text/content to use in the generated example.',
        },
      },
      required: ['componentName'],
      additionalProperties: false,
    },
  },
  handler: args => {
    const component = requireComponent(getComponentNameArg(args));
    const framework = getStringArg(args, 'framework') ? getFrameworkArg(args) : undefined;
    const frameworks: Framework[] = framework ? [framework] : ['web-component', 'angular', 'react'];
    const children = getStringArg(args, 'children') ?? component.title;
    const generatedExamples = frameworks.map(item => {
      const result = generateComponentCode(component, item, defaultPropsForComponent(component), children);

      return [
        `## ${item} Example`,
        '',
        ...result.setupNotes.map(note => `- ${note}`),
        '',
        `\`\`\`${item === 'react' ? 'tsx' : 'html'}`,
        result.code,
        '```',
      ].join('\n');
    });
    const documentationExamples = getDocumentationExamples(framework, component.examples);

    return textResponse([
      `# ${component.title} Examples (${component.tagName})`,
      '',
      ...generatedExamples,
      ...documentationExamples,
    ].join('\n\n'));
  },
};

export default getComponentExamplesTool;
// End AI-Assisted
