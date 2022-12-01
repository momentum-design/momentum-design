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
   * Log method to log the start of the transform
   */
  protected logStartTransform() {
    this.logger.debug(`Started transform of format ${this.format.type}.`);
  }

  /**
   * Log method to log the end of the transform
   */
  protected logEndTransform() {
    this.logger.debug(`Finished transform of format ${this.format.type}.`);
  }

  /**
   * No-op method, which has to be overridden by instances
   */
  public transformFiles(): void {
  }

  /**
   * Run method, which will be the entry point when using the transformer
   *
   * If there was no transformation applied after running transform, it will
   * log a warning to the console
   * @param files - Array of files to transform
   * @returns transformed files
   */
  public run(files: Array<FileType>): Array<FileType> {
    this.inputFiles = files;
    this.outputFiles = files;

    this.transformFiles();

    if (this.inputFiles === this.outputFiles) {
      this.logger.warn(`No transformation applied for the provided format ${this.format.type}`);
    }
    return this.outputFiles;
  }
}

export default Transformer;
