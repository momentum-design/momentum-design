import path from 'path';
import { ActionType } from 'plop';

import { folders, ACTION, TYPE, FILE_TYPE, packageName, destinationFolderName } from '../constants';

const base = `${path.posix.join(`${folders.templates}`, `${ACTION.ADD}`, `${TYPE.WORKSPACE}`)}`;

export const AddWorkspacePackage: ActionType = {
  type: 'addMany',
  base,
  templateFiles: `${path.posix.join(
    `${base}`,
    '**',
    `*.(${FILE_TYPE.DEFAULT})`,
  )}`,
  destination: `${path.posix.join(
    `${folders.workspace}`,
    `{{${destinationFolderName}}}/{{${packageName}}}`,
  )}`,
  globOptions: {
    // allow hidden files to be copied as well:
    dot: true,
  },
};
