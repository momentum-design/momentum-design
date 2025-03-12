import path from 'path';
import type { FileType, Formats } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The LitTransformer class.
 *
 * This transformer will process svg icons and will generate ts files file containing the proper lit template.
 * @beta
 */
class LitTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'lit');
  }

  /**
   * Adds attributes to the svg string
   * @param svg - svg string to append attributes to
   * @param name - name of the svg
   * @returns modified svg string
   */
  public addAttributesToSvg(svg: string, name: string, partName: string = 'element'): string {
    // Important: all the added attributes are important and cause issues if modified.
    // part="icon" is required for the icon to be styled
    // (if modified icon component will not be styled correctly)
    // aria-hidden="true" is required for accessibility
    // data-name is used to identify the svg in tests etc
    return svg.replace('<svg', `<svg aria-hidden="true" part="${partName}" data-name="${name}"`);
  }

  /**
   * Converts the svg file to a lit template using Handlebars.
   * This will also add attributes to the svg string.
   *
   * @param file - file to convert
   * @returns the converted file
   */
  public async convertToLitTemplate(file: FileType): Promise<FileType> {
    // retrieve the file name, i.e. accessibility-regular
    const fileName = path.basename(file.srcPath, '.svg');

    return transformHbs(path.resolve(this.format.config.hbsPath))
      .then((template) => ({
        ...file,
        distPath: path.join(this.destination, `${fileName}.ts`),
        data: template({
          svgData: this.addAttributesToSvg(file.data, fileName, this.format.config.partName),
        }),
      }))
      .catch((error) => {
        this.logger.error(`Failed converting file (${file.srcPath}) to lit template: ${error}`);
        throw error;
      });
  }

  public override transformFilesAsync(): Promise<void> {
    if (!this.inputFiles) {
      this.logger.debug('No input files detected.');
      return Promise.resolve();
    }
    return Promise.all(this.inputFiles?.map((file) => this.convertToLitTemplate(file))).then((outputFiles) => {
      this.outputFiles = outputFiles;
    });
  }
}

export default LitTransformer;
