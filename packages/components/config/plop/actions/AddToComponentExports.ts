/* eslint-disable max-len */
import path from 'path';
import { ActionType } from 'plop';
import { folders, componentName } from '../constants';

export const AddToComponentExports: ActionType = {
  type: 'modify',
  path: `${path.posix.join(`${folders.src}`, 'index.ts')}`,
  // find the first export block, requires the index.ts file to be formatted
  // correctly
  pattern: /(};)/,
  data: {
    componentName,
  },
  template:
    `  {{sentenceCase ${componentName}}},\n$1`,
};
