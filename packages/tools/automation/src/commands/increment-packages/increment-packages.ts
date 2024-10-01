import { Command } from '../../models';
import GetPackages from '../get-packages';
import { Git } from '../../utils';
import CONSTANTS from './constants';
import { Config, Options } from './types';
import { PULL_REQUEST_TITLE_PREFIX } from '../get-packages/constants';

class IncrementPackages extends Command {
  public static override execute(): Promise<string> {
    const config = Command.parse<Config, Options>(IncrementPackages.CONSTANTS.OPTIONS);

    return IncrementPackages.process(config)
      .then((results) => results.map((line) => `${line}\n`).join(''));
  }

  public static getStepFromPullRequestTitlePrefix(
    pullRequestTitlePrefix: string,
    minor: Array<number>,
    patch: Array<number>,
  ): Array<number> {
    return pullRequestTitlePrefix === PULL_REQUEST_TITLE_PREFIX.feat ? minor : patch;
  }

  public static async process(config: Config): Promise<Array<string>> {
    const { dryRun, minor, patch, ...getPackagesConfig } = config;
    const previousVersions: Array<string> = [];
    const commitLog = await Git.list(config['commit-index']);
    const latestCommit = commitLog[0];
    const pullRequestTitlePrefix = await Git.getPullRequestTitlePrefix(latestCommit.commit);
    const step = this.getStepFromPullRequestTitlePrefix(pullRequestTitlePrefix ?? '', minor, patch);

    return GetPackages.process({ ...getPackagesConfig })
      .then((packages) => dryRun
        ? packages.collection
        : Promise.all(packages.collection.map((pack) => pack.readDefinition())))
      .then((packages) => packages.map((pack) => {
        previousVersions.push(pack.definition.version || '0.0.0');

        return pack.incrementVersion({
          major: step[0],
          minor: step[1],
          patch: step[2],
        });
      }))
      .then((packages) => dryRun ? packages : Promise.all(packages.map((pack) => pack.writeDefinition())))
      .then((packages) => packages.map(
        (pack, index) => `${pack.package}: ${previousVersions[index]} => ${pack.definition.version}`,
      ));
  }

  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default IncrementPackages;
