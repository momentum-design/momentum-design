import path from 'path';
import CONSTANTS from '../../../src/utils/tag-name/constants';

export enum PROMPT_TYPE {
  INPUT = 'input',
}

export enum GENERATOR_NAME {
  COMPONENT_GENERATOR = 'component'
}

export enum ACTION {
  ADD = 'add',
}

export enum TYPE {
  COMPONENT = 'component',
}

export const componentName: string = 'componentName';
export const componentNamePrefix: string = CONSTANTS.NAMESPACE.PREFIX;
export const componentNameSeparator: string = CONSTANTS.NAMESPACE.SEPARATOR;

export const root: string = process.cwd().replace(/\\/g, '/');
export const plop: string = `${path.posix.join(root, 'config', 'plop')}`;

export const folders = {
  src: `${path.posix.join(root, 'src')}`,
  components: `${path.posix.join(root, 'src', 'components')}`,
  templates: `${path.posix.join(plop, 'templates')}`,
};
