import { Command } from '../../models';
import { Execute } from '../../utils';
import GetPackages from '../get-packages';

import CONSTANTS from './constants';
import { Config, Options } from './types';

class RunPackages extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(RunPackages.CONSTANTS.OPTIONS);

    return RunPackages.process(config)
      .then((results) => results.map((line) => `${line}\n`).join(''));
  }

  public static process(config: Config): Promise<Array<string>> {
    const { script, ...getPackagesConfig } = config;
    let workspaces: Array<string>;

    return GetPackages.process({ ...getPackagesConfig })
      .then((packages) => {
        workspaces = packages.collection.map((pack) => `${pack.package}`);

        return Execute.run(`yarn workspaces foreach --from '?(${workspaces.join('|')})' run ${script}`);
      })
      .then((output) => {
        Execute.emit(output);

        return workspaces.map((workspace) => `executed script "${script}" on workspaces "${workspace}"`);
      });
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default RunPackages;
