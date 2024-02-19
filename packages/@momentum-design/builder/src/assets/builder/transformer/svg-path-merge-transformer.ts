import xml2js from 'xml2js';
import svgpath from 'svgpath';
import type { FileType, Formats } from '../types';
import Transformer from './transformer';

/**
 * The SVGPathMergeTransformer class.
 *
 * Handles transforming SVGs to merge SVGs path with the help of `svgpath` & `xml2js`
 *
 * @beta
 */
class SVGPathMergeTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'svg');
  }

  /**
   * Merge path in SVG file data with the help of `svgpath` & `xml2js`
   * @param file - File, including the file data, which needs to be optimised
   * @returns the file with merged svg path data
   */
  public optimize(file: FileType): FileType {
    try {
      const parser = new xml2js.Parser();
      let parsedSvg;
      parser.parseString(file.data, (error, result) => {
        const parseSvgResult = result;
        if (error) {
          this.logger.error(`Failed optimizing file (${file.srcPath}) with format '${this.format.type}': ${error}`);
          parsedSvg = file;
        }
        const pathDataArray = parseSvgResult.svg.path.map((path: { $: { d: any; }; }) => path.$.d);
        const combinedPathData = pathDataArray.join(' ');
        const combinedPath = svgpath(combinedPathData);
        parseSvgResult.svg.path = [{ $: { d: combinedPath.toString() } }];
        const builder = new xml2js.Builder({ headless: true });
        parsedSvg = builder.buildObject(parseSvgResult);
      });
      return {
        ...file,
        data: parsedSvg,
      };
    } catch (error) {
      this.logger.error(`Failed optimizing file (${file.srcPath}) with format '${this.format.type}': ${error}`);
      return file;
    }
  }

  /**
   * Transform the passed in files by optimising each of them
   */
  public override transformFilesSync() {
    this.outputFiles = this.inputFiles?.map((file) => this.optimize(file));
  }
}

export default SVGPathMergeTransformer;
