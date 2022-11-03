import { join } from 'path';
import { ActionType } from 'plop';

import { packageName, root } from '../constants';

export const ModifyPackageJsonAddPackage: ActionType = {
  type: 'modify',
  path: `${join(root, 'package.json')}`,
  pattern: /("scripts":\s{)([^}]*?)(\n.*[}])/g,
  template:
    `$1$2,\n\t\t"{{kebabCase ${packageName}}}": "yarn workspace @cisco-md/{{kebabCase ${packageName}}}"$3`,
};
