import { join } from 'path';
import { ActionType } from 'plop';
import { folders, ACTION, TYPE, componentName } from '../constants';

const base = `${join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.COMPONENT}`)}`;

export const AddComponent: ActionType = {
  type: 'addMany',
  base,
  templateFiles: `${join(`${base}`, '**')}`,
  destination: `${join(`${folders.components}`, `{{${componentName}}}`)}`,
  data: {
    componentName,
  },
  globOptions: {
    // allow hidden files to be copied as well:
    dot: false,
  },
};
