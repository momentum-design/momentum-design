import path from 'path';

import { ActionType } from 'plop';

import {
  folders,
  ACTION,
  TYPE,
  componentClassName,
  componentDependencies,
  componentName,
  componentNamePrefix,
  componentNameSeparator,
} from '../constants';

const base = `${path.posix.join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.COMPONENT}`)}`;

export const AddComponent: ActionType = {
  type: 'addMany',
  base,
  templateFiles: `${path.posix.join(`${base}`, '**')}`,
  destination: `${path.posix.join(`${folders.components}`, `{{${componentName}}}`)}`,
  data: {
    componentName,
    componentClassName,
    componentDependencies,
    prefix: componentNamePrefix,
    separator: componentNameSeparator,
  },
  globOptions: {
    // allow hidden files to be copied as well:
    dot: false,
  },
};
