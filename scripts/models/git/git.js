import { execute } from '../utils.js'

import CONSTANTS from './constants.js';

class Git {
  static #commitsToJson(commits) {
    return commits.split('\n').map((result) => JSON.parse(result.trim()))
  }

  static getCommits(index = Git.CONSTANTS.MAX_COMMITS) {
    const command = `git log -${index + Git.CONSTANTS.COMMIT_INDEX_OFFSET} --pretty=format:'${JSON.stringify(CONSTANTS.FORMAT)}'`;

    return execute(command)
      .then((results) => Git.#commitsToJson(results));
  }

  static get CONSTANTS() {
    return structuredClone(CONSTANTS);
  }
}

export default Git;
