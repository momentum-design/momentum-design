import path from 'path';
import type { Formats, GlyphIconData } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The CssTransformer class.
 *
 * This transformer will process svg icons and will generate a single
 * css file containing the proper css structure. Generation of glyphs and unicode is
 * also done here.
 * @beta
 */
class CssTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'css');
  }

  /**
   * Retreive the GlyphData from the inputFile
   * and parse it
   * @returns glyph data object
   */
  private getGlyphData(): Record<string, GlyphIconData> {
    const GlyphDataBuffer = this.inputFiles?.at(0)?.data;

    return JSON.parse(GlyphDataBuffer.toString());
  }

  /**
   * Generates the css data by using the glyph data and transform
   * it with the help of handlebars templating
   * @param glyphData - glyph data to be used
   * @returns object with css data
   */
  private async generateCssData(): Promise<{ data: string }> {
    const glyphData = this.getGlyphData();
    const template = await transformHbs(path.resolve(this.format.config.hbsPath));
    return {
      data: template({
        glyphsData: Object.values(glyphData),
        woffUrl: this.format.config.woffPath,
        woff2Url: this.format.config.woff2Path,
      }),
    };
  }

  /**
   * Transform the glyph icons file into a single css file
   */
  public override transformFilesAsync(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.generateCssData()
        .then((cssData) => {
          this.outputFiles = [
            {
              distPath: path.join(this.destination, this.format.config.fileName),
              srcPath: '',
              data: cssData.data,
            },
          ];
          resolve();
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  }
}

export default CssTransformer;
