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
   * Logger
   */
  logger: ExtendedLogger;

  constructor(format: Formats, loggerNameExtension?: string) {
    this.format = format;
    this.logger = Logger.child(generateMetadata(
      CONSTANTS.PACKAGE,
      [CONSTANTS.TYPE, 'transforms', loggerNameExtension].filter(Boolean).join('-'),
    ));
  }

  /**
   * No-op method, which has to be overridden by instances
   */
  public async transformFiles() {
    this.logger.warn(`No transform rule found for the provided format ${this.format.type}. Skipping...`);
  }

  /**
   * Run method, which will be the entry point when using the transformer
   *
   * If there was no transformation applied after running transform, it will
   * log a warning to the console
   * @param files - Array of files to transform
   * @returns transformed files
   */
  public async run(files: Array<FileType>): Promise<Array<FileType>> {
    this.inputFiles = files;
    this.outputFiles = files;

    this.logger.debug(`Started transform of format ${this.format.type}.`);
    await this.transformFiles();
    this.logger.debug(`Finished transform of format ${this.format.type}.`);

    return this.outputFiles;
  }
}

export default Transformer;
