/* eslint-disable max-len */
import { join } from 'path';
import { ActionType } from 'plop';
import { folders, componentName } from '../constants';

export const AddToComponentExports: ActionType = {
  type: 'modify',
  path: `${join(`${folders.src}`, 'index.ts')}`,
  pattern: /(};)/g,
  data: {
    componentName,
  },
  template:
    `  {{sentenceCase ${componentName}}},\n$1`,
};
