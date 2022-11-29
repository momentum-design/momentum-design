import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import { optimize } from 'svgo';
import CONSTANTS from './constants';
import type { File } from './file-handler';
import type { SVGOConfig } from './types';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, `${CONSTANTS.TYPE}-transforms`));

/**
 * The Transformer class.
 *
 * @beta
 */
class Transformer {
  /**
   * Optimise the passed in SVG file data with the help of `svgo`
   * @param file - File, including the file data, which needs to be optimised
   * @param svgoConfig - config for SVGO, which determines how the SVG will be optimised
   * @returns the file with opimised data
   */
  public optimizeSVG(file: File, svgoConfig: SVGOConfig): File {
    try {
      const optimizedData = optimize(file.data, svgoConfig).data;
      return ({ ...file, data: optimizedData });
    } catch (error) {
      logger.error(`Failed optimizing file (${file.srcPath}): ${svgoConfig}`);
      return file;
    }
  }

  /**
   * Optimise passed in SVG files
   * @param files - Files to be optimised
   * @param svgoConfig - config for SVGO, which determines how the SVGs will be optimised
   * @returns the files with opimised data
   */
  public optimizeSVGFiles(files: Array<File>, svgoConfig: SVGOConfig): File[] {
    return files.map((file) => this.optimizeSVG(file, svgoConfig));
  }
}

export default Transformer;
