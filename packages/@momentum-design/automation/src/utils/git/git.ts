import Execute from '../execute';

import CONSTANTS from './constants';
import type { Changes, ListItem } from './types';

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

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Git;
