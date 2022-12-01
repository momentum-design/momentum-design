import { Logger, generateMetadata } from '@momentum-design/telemetry';
import { optimize as svgoOptimize } from 'svgo';
import CONSTANTS from '../constants';
import type { FileType } from '../file-handler';
import Transformer from './transformer';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, `${CONSTANTS.TYPE}-svg-transformer`));

/**
 * The SVGTransformer class.
 *
 * @beta
 */
class SVGTransformer extends Transformer {
  /**
   * Optimise the passed in SVG file data with the help of `svgo`
   * @param file - File, including the file data, which needs to be optimised
   * @returns the file with opimised data
   */
  public optimize(file: FileType): FileType {
    try {
      const optimizedData = svgoOptimize(file.data, this.format.config).data;
      return { ...file, data: optimizedData };
    } catch (error) {
      logger.error(`Failed optimizing file (${file.srcPath}) with format '${this.format.type}': ${error}`);
      return file;
    }
  }

  /**
   * Transform the passed in files by optimising each of them
   */
  public override transformFiles() {
    this.logStartTransform();
    this.outputFiles = this.inputFiles?.map((file) => this.optimize(file));
    this.logEndTransform();
  }
}

export default SVGTransformer;
