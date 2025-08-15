import path from 'path';
import { promises as fs } from 'fs';
import type { FileType, Formats } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The ImageTransformer class.
 *
 * This transformer will process svg icons and will generate ts files file containing the proper image template.
 * @beta
 */
class ImageTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'image');
  }

  private async loadManifest(): Promise<Record<string, string>> {
    try {
      const manifestPath = require.resolve(this.format.config.manifestPath);
      const manifestContent = await fs.readFile(manifestPath, 'utf-8');
      return JSON.parse(manifestContent) as Record<string, string>;
    } catch (error) {
      this.logger.error('manifest.json not found or failed to load:', error);
      throw error;
    }
  }

  public addAttributesToImage(image: string, name: string, partName: string = 'element'): string {
    return image.replace('<img', `<img aria-hidden="true" part="${partName}" data-name="${name}"`);
  }

  /**
   * Converts the svg file to a image template using Handlebars.
   * This will also add attributes to the svg string.
   *
   * @param file - file to convert
   * @returns the converted file
   */
  public async convertToImageTemplate(file: FileType): Promise<FileType> {
    const fileName = path.basename(file.srcPath, path.extname(file.srcPath));
    const imageMap = await this.loadManifest();

    const imageTag = `<img src="${imageMap[fileName]}" />`;
    const enrichedImageTag = this.addAttributesToImage(imageTag, fileName, this.format.config.partName);

    return transformHbs(path.resolve(this.format.config.hbsPath))
      .then((template) => {
        const data = template({
          imageData: enrichedImageTag,
        });
        return {
          ...file,
          distPath: path.join(this.destination, `${fileName}.ts`),
          partName: this.format.config.partName,
          data,
        };
      })
      .catch((error) => {
        this.logger.error(`Failed converting file (${file.srcPath}) to image template: ${error}`);
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
