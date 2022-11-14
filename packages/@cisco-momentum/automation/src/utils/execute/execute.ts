import ChildProcess from 'node:child_process';

import CONSTANTS from './constants';

class Execute {
  public static emit(value: string): void {
    process.stdout.write(value);
  }

  public static resultsToArray(results: string): Array<string> {
    return results.split('\n');
  }

  public static run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      ChildProcess.exec(
        command,
        { maxBuffer: Execute.CONSTANTS.MAX_BUFFER_SIZE },
        (error, response) => {
          if (error) {
            reject(error);
          }

          resolve(response);
        },
      );
    });
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Execute;
