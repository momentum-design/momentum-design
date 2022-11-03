import { join } from 'path';
import { ActionType } from 'plop';

import { folders, ACTION, TYPE, FILE_TYPE, packageName } from '../constants';

const base = `${join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.WORKSPACE}`)}`;

export const AddWorkspacePackage: ActionType = {
  type: 'addMany',
  base,
  templateFiles: `${join(
    `${base}`,
    '**',
    `*.(${FILE_TYPE.DEFAULT}|${FILE_TYPE.MARKDOWN}|${FILE_TYPE.JSON}|${FILE_TYPE.TYPESCRIPT})`,
  )}`,
  destination: `${join(
    `${folders.workspace}`,
    `@cisco-md/{{${packageName}}}`,
  )}`,
};
