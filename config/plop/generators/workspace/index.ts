import { PlopGeneratorConfig } from 'plop';

import { GENERATOR_NAME, packageName, PROMPT_TYPE } from '../../constants';
import { AddWorkspacePackage } from '../../actions/AddWorkspacePackage';
import { prompt } from '../../prompts';
import { ModifyPackageJsonAddPackage } from '../../actions/ModifyPackageJsonAddPackage';

const generator: Partial<PlopGeneratorConfig> = {
  description: 'Scaffold a new package',
  prompts: [
    prompt(`${packageName}`, `${packageName} you'd like to scaffold`, PROMPT_TYPE.INPUT),
  ],
  actions: [
    AddWorkspacePackage,
    ModifyPackageJsonAddPackage,
  ],
};

export const WorkspaceGenerator = {
  name: GENERATOR_NAME.WORKSPACE_PACKAGE,
  generator,
};
