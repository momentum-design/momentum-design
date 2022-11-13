import { execute } from '../utils.js'

import CONSTANTS from './constants.js';

class Git {
  static #commitsToJson(commits) {
    return commits.split('\n').map((result) => JSON.parse(result.trim()))
  }

  static getCommits(index = Git.CONSTANTS.MAX_COMMITS) {
    const format = {
      "commit": "%H",
      "abbreviated_commit": "%h",
      "tree": "%T",
      "abbreviated_tree": "%t",
      "parent": "%P",
      "abbreviated_parent": "%p",
      "refs": "%D",
      "encoding": "%e",
      "subject": "%s",
      "sanitized_subject_line": "%f",
      "body": "%b",
      "commit_notes": "%N",
      "verification_flag": "%G?",
      "signer": "%GS",
      "signer_key": "%GK",
      "author": {
        "name": "%aN",
        "email": "%aE",
        "date": "%aD",
      },
      "commiter": {
        "name": "%cN",
        "email": "%cE",
        "date": "%cD",
      },
    };

    const command = `git log -${index + Git.CONSTANTS.COMMIT_INDEX_OFFSET} --pretty=format:'${JSON.stringify(format)}'`;

    return execute(command)
      .then((results) => Git.#commitsToJson(results));
  }

  static get CONSTANTS() {
    return structuredClone(CONSTANTS);
  }
}

export default Git;
