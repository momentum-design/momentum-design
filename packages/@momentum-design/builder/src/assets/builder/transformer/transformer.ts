import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import CONSTANTS from '../constants';
import type { FileType } from '../file-handler';
import type { Formats } from '../types';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, `${CONSTANTS.TYPE}-transforms`));

/**
 * The Transformer class.
 *
 * @beta
 */
class Transformer {
  format: Formats;

  inputFiles?: Array<FileType>;

  outputFiles?: Array<FileType>;

  constructor(format: Formats) {
    this.format = format;
  }

  protected logStartTransform() {
    logger.debug(`Started transform of format ${this.format.type}.`);
  }

  protected logEndTransform() {
    logger.debug(`Finished transform of format ${this.format.type}.`);
  }

  /**
   * No-op method, which has to be overridden by instances
   */
  public transformFiles() {

  }

  public run(files: Array<FileType>): Array<FileType> {
    this.inputFiles = files;
    this.outputFiles = files;

    this.transformFiles();

    if (this.inputFiles === this.outputFiles) {
      logger.warn(`No transformation applied for the provided format ${this.format.type}`);
    }
    return this.outputFiles;
  }
}

export default Transformer;
