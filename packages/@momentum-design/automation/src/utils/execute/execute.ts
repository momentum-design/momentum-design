import ChildProcess from 'node:child_process';

import { Logger, generateMetadata } from '@momentum-design/telemetry';

class Execute {
  public static logger = Logger.child(generateMetadata('automation', 'execute'));

  public static emit(value: string): void {
    Execute.logger.info(value);
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
