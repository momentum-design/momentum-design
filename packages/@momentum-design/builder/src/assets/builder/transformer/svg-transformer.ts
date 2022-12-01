import { optimize as svgoOptimize } from 'svgo';
import type { FileType, Formats } from '../types';
import Transformer from './transformer';

/**
 * The SVGTransformer class.
 *
 * Handles transforming SVGs to Optimised SVGs with the help of `svgo`
 *
 * @beta
 */
class SVGTransformer extends Transformer {
  constructor(format: Formats) {
    super(format, 'svg');
  }

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
      this.logger.error(`Failed optimizing file (${file.srcPath}) with format '${this.format.type}': ${error}`);
      return file;
    }
  }

  /**
   * Transform the passed in files by optimising each of them
   */
  public override transformFiles() {
    this.outputFiles = this.inputFiles?.map((file) => this.optimize(file));
  }
}

export default SVGTransformer;
