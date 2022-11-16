import ChildProcess from 'node:child_process';
import path from 'path';

import { Logger, generateMetadata } from '@momentum-design/telemetry';

const logger = Logger.child(generateMetadata('automation', path.basename(__filename)));

class Execute {
  public static emit(value: string): void {
    logger.info(value);
  }

  public static resultsToArray(results: string): Array<string> {
    return results.split('\n');
  }

  public static run(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      ChildProcess.exec(command, (error, response) => {
        if (error) {
          reject(error);
        }

        resolve(response);
      });
    });
  }
}

export default Execute;
