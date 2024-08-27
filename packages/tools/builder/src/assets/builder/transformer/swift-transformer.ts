import path from 'path';
import type { Formats, GlyphIconData } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The SwiftTransformer class.
 *
 * This transformer will process svg icons and will generate a single
 * swift file containing the proper swift structure. Generation of glyphs and unicode is
 * also done here.
 * @beta
 */
class SwiftTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'swift');
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
   * Generates the swift data by using the glyph data and transform
   * it with the help of handlebars templating
   * @param glyphData - glyph data to be used
   * @returns object with swift data
   */

  private async generateSwiftData(): Promise<{data: string}> {
    const glyphData = this.getGlyphData();
    const template = await transformHbs(path.resolve(this.format.config.hbsPath));
    return { data: template({ glyphsData: Object.values(glyphData) }) };
  }

  /**
   * Transform the glyph icons file into a single swift file
   */
  public override transformFilesAsync(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.generateSwiftData()
        .then((swiftData) => {
          this.outputFiles = [
            {
              distPath: path.join(this.destination, this.format.config.fileName),
              srcPath: '',
              data: swiftData.data,
            },
          ];
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default SwiftTransformer;
