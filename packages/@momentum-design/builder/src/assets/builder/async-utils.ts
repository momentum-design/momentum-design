import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import CONSTANTS from './constants';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, `${CONSTANTS.TYPE}-async-utils`));

/**
 * The AsyncUtils class.
 *
 * Contains async utilities like executing in serial etc.
 *
 * @beta
 */
class AsyncUtils {
  /**
   * Async for-loop utility function
   *
   * @param promises - promise constructors to execute in serial
   */
  protected async asyncForLoop(promises: Array<() => Promise<any>>): Promise<void> {
    // eslint-disable-next-line no-restricted-syntax
    for (const promise of promises) {
      // eslint-disable-next-line no-await-in-loop
      await promise();
    }
  }

  /**
   * Runs the provided promise constructors in serial
   *
   * @param promises - array of promise constructors to run in serial
   * @returns Promise, which will resolve with this when all of the
    * provided promise constructors resolve, or rejected when any promise is rejected
   */
  public series(promises: Array<() => Promise<any>>): Promise<any> {
    return new Promise((resolve, reject) => {
      this.asyncForLoop(promises).then(() => resolve(this))
        .catch((error) => {
          logger.error(`Error while executing in serial. Error: ${error}`);
          reject(error);
        });
    });
  }
}

export default AsyncUtils;
