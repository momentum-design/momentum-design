import { Command } from '../../models';
import GetPackages from '../get-packages';

import CONSTANTS from './constants';
import { Config, Options } from './types';

class IncrementPackages extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(IncrementPackages.CONSTANTS.OPTIONS);

    return IncrementPackages.process(config)
      .then((results) => results.map((line) => `${line}\n`).join(''));
  }

  public static process(config: Config): Promise<Array<string>> {
    const { step, ...getPackagesConfig } = config;
    const previousVersions: Array<string> = [];

    return GetPackages.process({ ...getPackagesConfig })
      .then((packages) => Promise.all(packages.collection.map((pack) => pack.readDefinition())))
      .then((packages) => packages.map((pack) => {
        previousVersions.push(pack.definition.version || '0.0.0');

        return pack.incrementVersion({
          major: step[0],
          minor: step[1],
          patch: step[2],
        });
      }))
      .then((packages) => Promise.all(packages.map((pack) => pack.writeDefinition())))
      .then((packages) => packages.map(
        (pack, index) => `${pack.package}: ${previousVersions[index]} => ${pack.definition.version}`,
      ));
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default IncrementPackages;
