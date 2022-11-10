import yargs from 'yargs';
import { exec } from 'node:child_process';

import { emit } from './utils.js';

const MAX_COMMITS = 10;
const COMMIT_INDEX_OFFSET = 1;

/**
 * Convert commit logs, back to the provided index, into an array of JSON Objects.
 *
 * @param {number} [index] The index of the earliest commit to retreive.
 * @returns {Array<CommitObject>} Commit objects found within the git log.
 */
const getCommitJson = (index) => new Promise((resolve, reject) => {
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

  const command = `git log ${index ? `-${index} ` : ''}--pretty=format:'${JSON.stringify(format)}'`;

  exec(command, (error, results) => {
    if (error) {
      reject(error);
    }

    resolve(results.split('\n').map((result) => JSON.parse(result.trim())));
  })
});

/**
 * Main executor for this script.
 * 
 * @returns {Promise<void>}
 */
const main = () => {
  const { get, property } = yargs(process.argv.slice(2)).options({
    get: { type: 'number' },
    property: { type: 'string' },
  }).parseSync();

  return getCommitJson(get > MAX_COMMITS ? get + COMMIT_INDEX_OFFSET : MAX_COMMITS).then((results) => {
    let final = results;

    if (property) {
      final = results.map((result) => result[property]);
    }

    if (get) {
      final = final[get];
    }

    emit(JSON.stringify(final));
  });
}

main();
