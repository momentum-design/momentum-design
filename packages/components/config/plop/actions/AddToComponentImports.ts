/* eslint-disable max-len */
import { join } from 'path';
import { ActionType } from 'plop';
import { folders, componentName } from '../constants';

export const AddToComponentImports: ActionType = {
  type: 'modify',
  path: `${join(`${folders.src}`, 'index.ts')}`,
  pattern: /(\nexport)/g,
  data: {
    componentName,
  },
  template:
    `import {{sentenceCase ${componentName}}} from './components/{{${componentName}}}';\n$1`,
};
