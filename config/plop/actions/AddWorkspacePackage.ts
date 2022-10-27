import { join } from 'path';
import { ActionType } from 'plop';

import {
  folders,
  ACTION,
  TYPE,
  FILE_TYPE,
  packageName,
} from '../constants';

export const AddWorkspacePackage: ActionType = {
  type: 'addMany',
  base: `${join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.WORKSPACE}`)}`,
  templateFiles: `${join(`${folders.templates}`, '**', `*.${FILE_TYPE.DEFAULT}`)}`,
  destination: `${join(`${folders.workspace}`, `@momentum-design/{{${packageName}}}`)}`,
};
