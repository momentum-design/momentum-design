import { join } from 'path';
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import { Command } from '../../models';
import { compress, Git, Yarn } from '../../utils';
import GetPackages from '../get-packages';

import CONSTANTS from './constants';
import { Config, Options } from './types';

const PACKAGE = 'automation';

const logger = Logger.child(generateMetadata(PACKAGE, 'dispatch-telemetry'));

class CreateRelease extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(CreateRelease.CONSTANTS.OPTIONS);

    return CreateRelease.process(config)
      .then((results) => results.map((line) => `${line}`).join(''));
  }

  public static async process(config: Config): Promise<Array<string>> {
    const { ...getPackagesConfig } = config;

    const [head, previous] = await Git.list(config['commit-index']);
    const packages = await GetPackages.process({ ...getPackagesConfig });
    const affected = (await Yarn.list(previous.commit)).map((value) => value.name);
    logger.info(`Affected packages: ${affected}`);
    const affectedPackages = packages.collection.filter((pack) => affected.includes(pack.package));
    logger.info(`Affected package within get packages config: ${affectedPackages.map((pack) => pack.package)}`);
    const intersection = affectedPackages.filter((pack) => config.targets.includes(pack.package));
    logger.info(`Affected package within targets: ${intersection}`);
    if (!(intersection.length > 0)) {
      logger.warn('No packages matched, skipping release');
      return Promise.resolve(['No packages matched, skipping release\n']);
    }
    const releases = await Promise.all(intersection.map(async (pack) => {
      const packdef = await pack.readDefinition();
      logger.info(`Building release for package: ${pack.name}`);
      const pkg = packdef.package;
      const dist = await compress(join(process.cwd(), packdef.path, 'dist'));
      const title = packdef.name;
      const { version } = packdef.definition;
      const tag = `${pkg}-v${version}`;
      const commitLog = await Git.list(config['commit-index']);
      const notes = commitLog.map(({ subject }) => subject).join('\n')
        .concat(`\nPackage:\nhttps://www.npmjs.com/package/${pkg}/v/${version}`);

      return {
        dist,
        tag,
        title,
        notes,
      };
    }));
    const result = await Promise.all(
      releases.map(
        async (
          release,
        ) => `Released: ${await Git.release(release.dist, release.tag, release.title, release.notes)}`,
      ),
    );
    result.forEach((res) => {
      logger.info(res);
    });
    return result;
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default CreateRelease;
