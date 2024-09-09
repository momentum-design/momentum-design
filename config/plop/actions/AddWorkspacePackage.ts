import { join } from 'path';
import { ActionType } from 'plop';

import { folders, ACTION, TYPE, FILE_TYPE, packageName, destinationFolderName } from '../constants';

const base = `${join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.WORKSPACE}`)}`;

export const AddWorkspacePackage: ActionType = {
  type: 'addMany',
  base,
  templateFiles: `${join(
    `${base}`,
    '**',
    `*.(${FILE_TYPE.DEFAULT})`,
  )}`,
  destination: `${join(
    `${folders.workspace}`,
    `{{${destinationFolderName}}}/{{${packageName}}}`,
  )}`,
  globOptions: {
    // allow hidden files to be copied as well:
    dot: true,
  },
};
