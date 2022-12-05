import {
  Logger,
  generateMetadata,
  ExtendedLogger,
} from '@momentum-design/telemetry';
import CONSTANTS from '../constants';
import type { Formats, FileType } from '../types';

/**
 * The Transformer base class.
 *
 * Transformers will extend from this class.
 * The run method is the entry point from a flow.
 *
 * Transformers will override the `transformFiles` method with their own implementation
 * @beta
 */
class Transformer {
  /**
   * The format to transform to
   */
  format: Formats;

  /**
   * Array of input files
   */
  inputFiles?: Array<FileType>;

  /**
   * Array of output files
   */
  outputFiles?: Array<FileType>;

  /**
   * Destination string (= where to write files to)
   */
   destination: string;

  /**
   * Logger
   */
  logger: ExtendedLogger;

  constructor(format: Formats, destination: string, loggerNameExtension?: string) {
    this.format = format;
    this.destination = destination;
    this.logger = Logger.child(generateMetadata(
      CONSTANTS.PACKAGE,
      [CONSTANTS.TYPE, 'transforms', loggerNameExtension].filter(Boolean).join('-'),
    ));
  }

  /**
   * No-op method, which has to be overridden by instances
   */
  public transformFilesSync(): void {
    this.logger.warn(`No sync transform rule found for the provided format ${this.format.type}. Skipping...`);
  }

  public transformFilesAsync(): Promise<void> {
    this.logger.warn(`No async transform rule found for the provided format ${this.format.type}. Skipping...`);
    return Promise.resolve();
  }

  /**
   * Run method, which will be the entry point when using the transformer
   *
   * If there was no transformation applied after running transform, it will
   * log a warning to the console
   * @param files - Array of files to transform
   * @returns promise with transformed files
   */
  public run(files: Array<FileType>): Promise<Array<FileType>> {
    this.inputFiles = files;
    this.outputFiles = files;

    this.logger.debug(`Started transform of format ${this.format.type}.`);

    // Apply any synchronous transforms
    this.transformFilesSync();

    // Apply any asynchronous transforms
    return new Promise((resolve, reject) => {
      this.transformFilesAsync().then(() => {
        if (!this.outputFiles) {
          Promise.reject(new Error('Can\'t run transform if no files are provided.'));
        } else {
          resolve(this.outputFiles);
        }
      }).catch((err) => {
        this.logger.debug(`Finished transform of format ${this.format.type}.`);
        reject(err);
      });
    });
  }
}

export default Transformer;
