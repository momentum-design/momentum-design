import Execute from '../execute';

import CONSTANTS from './constants';
import type { ListItem } from './types';

class Git {
  public static commitsToJson(commits: Array<string>): Array<ListItem> {
    return commits.filter(((line) => !!line))
      .map((line) => JSON.parse(line.trim()));
  }

  public static list(index: number = Git.CONSTANTS.MAX_COMMITS): Promise<Array<ListItem>> {
    const offset = index + Git.CONSTANTS.COMMIT_INDEX_OFFSET;
    const format = JSON.stringify(Git.CONSTANTS.FORMAT);

    return Execute.run(`git --no-pager log -n ${offset} --pretty=format:'${format}'`)
      .then((results) => Execute.resultsToArray(results))
      .then((list) => Git.commitsToJson(list));
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Git;
