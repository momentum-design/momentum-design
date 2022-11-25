/* eslint-disable no-redeclare */
import {
  Logger,
  generateMetadata,
} from '@momentum-design/telemetry';
import { optimize, Config as SVGOConfigType } from 'svgo';
import type { File } from './file-handler';

const PACKAGE = 'builder';
const logger = Logger.child(generateMetadata(PACKAGE, 'icons-transforms'));

export type SVGOConfig = SVGOConfigType;

interface Transformer {
}
/**
 * The Transformer class.
 *
 * @alpha
 */
class Transformer {
  public optimizeSVG(file: File, svgoConfig: SVGOConfig) {
    try {
      // use svgo `optimize` function:
      const optimizedData = optimize(file.data, svgoConfig).data;
      return ({ ...file, data: optimizedData });
    } catch (error) {
      logger.error(`Failed optimizing file (${file.srcPath}): ${svgoConfig}`);
      return file;
    }
  }

  public optimizeSVGFiles(files: Array<File>, svgoConfig: SVGOConfig) {
    return files.map((file) => this.optimizeSVG(file, svgoConfig));
  }
}

export default Transformer;
