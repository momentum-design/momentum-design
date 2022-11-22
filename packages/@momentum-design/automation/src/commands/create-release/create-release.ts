import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import { Command } from '../../models';
import { Git } from '../../utils';
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

    const packages = await GetPackages.process({ ...getPackagesConfig });
    const intersection = packages.collection.filter((pack) => config.targets.includes(pack.package));
    if (!intersection) {
      return Promise.resolve(['No packages matched, skipping release']);
    }
    const releases = await Promise.all(intersection.map(async (pack) => {
      const packdef = await pack.readDefinition();
      logger.info(`Building release for package: ${pack.name}`);
      const title = packdef.name;
      const tag = packdef.definition.version;
      const commitLog = await Git.list(1);
      const notes = commitLog.map((commit) => commit.commit).reduce((accum, cur) => accum + cur, '');
      return {
        tag,
        title,
        notes,
      };
    }));
    const result = await Promise.all(
      releases.map(
        async (
          release,
        ) => `Released: ${await Git.release(release.tag, release.title, release.notes)} tag: ${release.tag}`,
      ),
    );
    return result;

    // const packageList = await Yarn.list('upstream/main');
    // let tag;

    // if (packageList.some((value) => value.name === '@momentum-design/tokens')) {
    // const pack = await new Package(
    //   { name: 'tokens', scope: '@momentum-design', packagesPath: './packages' },
    // ).readDefinition();
    // const tag = `${pack.definition.version}`;
    // logger.info(`Releasing tag...${tag}`);
    // const commitLog = await Git.list(1);
    // const notes = commitLog.map((commit) => commit.commit).reduce((accum, cur) => accum + cur, '');
    // const title = `Release ${tag}`;
    // const release = await Git.release(tag, title, notes);
    // // }

    // return [`\n${release ?  : 'skipped release'}\n`];
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default CreateRelease;
