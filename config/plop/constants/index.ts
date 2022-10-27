import { join } from 'path';

export enum PROMPT_TYPE {
  INPUT = 'input',
}

export enum GENERATOR_NAME {
  WORKSPACE_PACKAGE = 'workspace'
}

export enum ACTION {
  ADD = 'add',
  MODIFY = 'modify',
}

export enum TYPE {
  WORKSPACE = 'workspace',
}

export enum FILE_TYPE {
  DEFAULT = 'hbs',
}

export const packageName: string = 'packageName';
export const root: string = process.cwd();
export const plop: string = `${join(root, 'config', 'plop')}`;

export const folders = {
  workspace: `${join(root, 'packages')}`,
  templates: `${join(plop, 'templates')}`,
};
