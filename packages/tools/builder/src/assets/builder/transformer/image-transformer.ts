import path from 'path';
import { promises as fs } from 'fs';
import type { FileType, Formats } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The LitTransformer class.
 *
 * This transformer will process svg icons and will generate ts files file containing the proper lit template.
 * @beta
 */
class ImageTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'image');
  }

  private async loadManifest(): Promise<Record<string, string>> {
    try {
      const manifestPath = require.resolve('@momentum-design/brand-visuals/dist/manifest.json');
      const manifestContent = await fs.readFile(manifestPath, 'utf-8');
      return JSON.parse(manifestContent) as Record<string, string>;
    } catch (error) {
      this.logger.error('manifest.json not found or failed to load:', error);
      throw error;
    }
  }

  /**
   * Converts the svg file to a lit template using Handlebars.
   * This will also add attributes to the svg string.
   *
   * @param file - file to convert
   * @returns the converted file
   */
  public async convertToImageTemplate(file: FileType): Promise<FileType> {
    // retrieve the file name, i.e. accessibility-regular
    const fileName = path.basename(file.srcPath, path.extname(file.srcPath));
    const imageMap = await this.loadManifest();

    return transformHbs(path.resolve(this.format.config.hbsPath))
      .then((template) => {
        const data = template({
          distPath: `${imageMap[fileName]}`,
          partName: this.format.config.partName,
          name: fileName,
        });
        return {
          ...file,
          distPath: path.join(this.destination, `${fileName}.ts`),
          partName: this.format.config.partName,
          data,
        };
      })
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
    return Promise.all(this.inputFiles?.map((file) => this.convertToImageTemplate(file))).then((outputFiles) => {
      this.outputFiles = outputFiles;
    });
  }
}

export default ImageTransformer;
