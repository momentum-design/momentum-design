import { Command } from '../../models';
import { Execute } from '../../utils';

import GetPackages from '../get-packages';
import IncrementPackages from '../increment-packages';
import RunPackages from '../run-packages';

import CONSTANTS from './constants';
import type { Config, Options } from './types';

class Main extends Command {
  public static override execute(): Promise<string> {
    const { COMMANDS } = Main.CONSTANTS;
    const config = Command.parse<Config, Options>(Main.CONSTANTS.OPTIONS);

    const command = Object.values(COMMANDS).find((available) => config.command === available);

    let promise: Promise<string>;

    switch (command) {
      case COMMANDS.GET_PACKAGES:
        promise = GetPackages.execute();
        break;

      case COMMANDS.INCREMENT_PACKAGES:
        promise = IncrementPackages.execute();
        break;

      case COMMANDS.RUN_PACKAGES:
        promise = RunPackages.execute();
        break;

      default:
        throw new Error(`command "${config.command}" is not supported`);
    }

    return promise.then((results) => {
      Execute.emit(results);

      return results;
    });
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return {
      ...structuredClone(CONSTANTS),
    };
  }
}

export default Main;
