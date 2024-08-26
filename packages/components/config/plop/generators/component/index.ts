/* eslint-disable quotes */
import { PlopGeneratorConfig } from 'plop';

import { GENERATOR_NAME, componentName, PROMPT_TYPE } from '../../constants';
import { AddComponent } from '../../actions/AddComponent';
import { prompt } from '../../prompts';
import { AddToComponentImports } from '../../actions/AddToComponentImports';
import { AddToComponentExports } from '../../actions/AddToComponentExports';

const componentNameMessage = `Choose the name of the component.
Requirements
- lowercase
- without prefix e.g. "button"
- no additional "hyphens", like "theme-provider"
`;
const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new package',
  prompts: [prompt(`${componentName}`, componentNameMessage, PROMPT_TYPE.INPUT)],
  actions: [AddComponent, AddToComponentImports, AddToComponentExports],
};

export const ComponentGenerator = {
  name: GENERATOR_NAME.COMPONENT_GENERATOR,
  generator,
};
