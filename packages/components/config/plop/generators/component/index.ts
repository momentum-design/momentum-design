/* eslint-disable quotes */
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { PlopGeneratorConfig } from 'plop';

import {
  GENERATOR_NAME,
  componentClassName,
  componentDependencies,
  componentName,
  folders,
  PROMPT_TYPE,
} from '../../constants';
import { AddComponent } from '../../actions/AddComponent';
import { prompt } from '../../prompts';
import { AddToComponentImports } from '../../actions/AddToComponentImports';
import { AddToComponentExports } from '../../actions/AddToComponentExports';

const componentClassNameMessage = 'Choose the PascalCase class name without the "Mdc" prefix, e.g. "EmptyState".';
const dependencyMessage = 'Select component dependencies to register and document (optional).';

const getDependencyChoices = (excludeComponentName: string) =>
  readdirSync(folders.components, { withFileTypes: true })
    .filter((entry) =>
      entry.isDirectory() &&
      entry.name !== excludeComponentName &&
      existsSync(path.join(folders.components, entry.name, 'index.ts')),
    )
    .map(({ name }) => ({ name: `mdc-${name}`, value: name }))
    .sort((a, b) => a.name.localeCompare(b.name));

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new component',
  prompts: async (inquirer) => {
    const answers = await inquirer.prompt([
      prompt(componentClassName, componentClassNameMessage, PROMPT_TYPE.INPUT),
    ]);
    const className = answers[componentClassName];
    const name = className.toLowerCase();
    const dependencyAnswers = await inquirer.prompt([
      {
        type: PROMPT_TYPE.CHECKBOX,
        name: componentDependencies,
        message: dependencyMessage,
        choices: getDependencyChoices(name),
      },
    ]);

    return {
      [componentClassName]: className,
      [componentName]: name,
      [componentDependencies]: dependencyAnswers[componentDependencies] ?? [],
    };
  },
  actions: [AddComponent, AddToComponentImports, AddToComponentExports],
};

export const ComponentGenerator = {
  name: GENERATOR_NAME.COMPONENT_GENERATOR,
  generator,
};
