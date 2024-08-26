/* eslint-disable max-len */
import { join } from 'path';
import { ActionType } from 'plop';
import { folders, componentName, componentNamePrefix } from '../constants';

export const AddToComponentExports: ActionType = {
  type: 'modify',
  path: `${join(`${folders.src}`, 'index.ts')}`,
  pattern: /(};)/g,
  data: {
    componentName,
    prefix: componentNamePrefix,
  },
  template:
    `  {{sentenceCase prefix}}{{sentenceCase ${componentName}}},\n$1`,
};
