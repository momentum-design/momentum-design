import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import Execute from '../execute';

import CONSTANTS from './constants';
import type { Changes, ListItem } from './types';

const PACKAGE = 'automation';
const logger = Logger.child(generateMetadata(PACKAGE, 'create-release'));

// Git utility class
class Git {
  public static commitsToJson(commits: Array<string>): Array<ListItem> {
    return commits.filter(((line) => !!line))
      .map((line) => JSON.parse(line.trim()));
  }

  public static list(index: number = Git.CONSTANTS.MAX_COMMITS): Promise<Array<ListItem>> {
    const offset = index + Git.CONSTANTS.COMMIT_INDEX_OFFSET;
    // turn format into single quotes since there are differences between windows and mac,
    // when executing the command with child_process.exec
    const format = JSON.stringify(Git.CONSTANTS.FORMAT).replace(/"/g, '\'');

    return Execute.run(`git --no-pager log -n ${offset} --pretty=format:"${format}"`)
      .then((results) => Execute.resultsToArray(results))
      // replace the single quotes with double quotes for JSON parser to work correctly:
      .then((list) => list.map((line) => line.replace(/'/g, '"')))
      .then((list) => Git.commitsToJson(list));
  }

  public static async changes(filter: string, index = Git.CONSTANTS.COMMIT_INDEX_OFFSET): Promise<Array<Changes>> {
    const [head, previous] = await Git.list(index);
    return Execute.run(`git diff --numstat ${previous.commit} ${head.commit}`).then((diff) => diff
      .split('\n').filter((line) => line.includes(filter))
      .map((line) => {
        const [added, removed, file] = line.split('\t');
        return {
          added: parseInt(added, 10),
          removed: parseInt(removed, 10),
          file,
        };
      }));
  }

  public static async release(tag: string, title: string, notes: string, dist: string = ''): Promise<string> {
    return Execute.run(`gh release create ${tag} ${dist} --title "${tag} - ${title}" --notes "${notes}"`);
  }

  public static async getPullRequestDetails(commitSHA:string): Promise<any> {
    return Execute.run('gh auth token').then(async (res) => {
      try {
        const response = await fetch(`${Git.CONSTANTS.COMMITS_API_URL}/${commitSHA}/pulls`, {
          headers: {
            Authorization: `Bearer ${res.trim()}`,
          },
        });
        const result = await response.json();
        return result;
      } catch (error) {
        logger.error(`Error fetching PR description': ${error}`);
      }
      return null;
    });
  }

  public static async getPullRequestTitlePrefix(commitSHA: string): Promise<string | null> {
    const pullRequestDetails = await Git.getPullRequestDetails(commitSHA);
    if (pullRequestDetails && pullRequestDetails.length > 0) {
      const { title } = pullRequestDetails[0];
      const prefixMatch = title.match(/^(\w+)(?:\(\w+\))?:/);
      if (prefixMatch) {
        return prefixMatch[1];
      }
    }
    return null;
  }

  /**
   * Check if a package has changes to source files that affect dist output.
   * Excludes test files, stories, documentation, and tooling changes.
   *
   * @param packagePath - Absolute path to package directory
   * @param sinceCommit - Git commit SHA to compare against (optional, defaults to HEAD~1)
   * @returns Promise - True if package has distributable changes
   */
  public static async hasDistAffectingChanges(
    packagePath: string,
    sinceCommit?: string,
  ): Promise<boolean> {
    const commitRange = sinceCommit ? `${sinceCommit}..HEAD` : 'HEAD~1..HEAD';

    // Patterns that affect dist output
    const includePatterns = [
      'src/**',
      'config/**',
      'scripts/makeReact.js',
      'tsconfig.json',
      'esbuild.config.js',
      'package.json',
    ];

    // Patterns that don't affect dist output
    const excludePatterns = [
      '**/*.test.*',
      '**/*.spec.*',
      '**/*.e2e-test.*',
      '**/*.stories.*',
      '**/README.md',
      '**/CONTRIBUTING.md',
      '**/LEARNINGS.md',
      '**/SCRIPTS.md',
      '**/TESTING.md',
      'conventions/**',
      'config/playwright/**',
      'config/storybook/**',
      'config/plop/**',
      'config/lint-staged/**',
      'config/stylelint/**',
      'config/code-connect/**',
      'config/custom-elements-manifest*',
      'jest.config.*',
      'playwright.config.*',
      'prettier.config.*',
      '.prettierignore',
      '.eslintrc.*',
      'playwright-report/**',
      'playwright-temp/**',
      'test-results/**',
      'pngFixtures/**',
      'storybook-static/**',
    ];

    try {
      // Build git diff command with include patterns
      const includeArgs = includePatterns
        .map((pattern) => `"${packagePath}/${pattern}"`)
        .join(' ');

      // Build git diff command with exclude patterns
      const excludeArgs = excludePatterns
        .map((pattern) => `":!${packagePath}/${pattern}"`)
        .join(' ');

      const command = `git diff --name-only ${commitRange} -- ${includeArgs} ${excludeArgs}`;
      const changes = await Execute.run(command);

      return changes.trim().length > 0;
    } catch (error) {
      logger.warn(`Failed to check dist-affecting changes for ${packagePath}: ${error}`);
      // On error, assume changes exist to avoid blocking releases
      return true;
    }
  }

  /**
   * Filter packages to only those with dist-affecting changes.
   *
   * @param packagePaths - Array of absolute package paths
   * @param sinceCommit - Git commit SHA to compare against (optional)
   * @returns Promise - Filtered array of package paths with changes
   */
  public static async getPackagesWithDistChanges(
    packagePaths: Array<string>,
    sinceCommit?: string,
  ): Promise<Array<string>> {
    const results = await Promise.all(
      packagePaths.map(async (packagePath) => {
        const hasChanges = await Git.hasDistAffectingChanges(packagePath, sinceCommit);
        return hasChanges ? packagePath : null;
      }),
    );

    return results.filter((path): path is string => path !== null);
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Git;
