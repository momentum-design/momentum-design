import path from 'path';

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
  MARKDOWN = 'md',
  JSON = 'json',
  TYPESCRIPT = 'ts',
}

export const packageName: string = 'packageName';
export const destinationFolderName: string = 'destinationFolderName';
export const root: string = process.cwd().replace(/\\/g, '/');
export const plop: string = `${path.posix.join(root, 'config', 'plop')}`;

export const folders = {
  workspace: `${path.posix.join(root, 'packages')}`,
  templates: `${path.posix.join(plop, 'templates')}`,
};
