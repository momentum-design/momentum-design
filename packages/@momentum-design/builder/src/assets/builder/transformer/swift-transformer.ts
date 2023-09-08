import path from 'path';
import type { Formats, GlyphIconData } from '../types';
import { transformHbs, getNextCodepoint } from '../utils';
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
   * Generates unicode for all icons based on Unicode Private Use.
   * @returns - array of icons including metadata like unicode and codepoints
   */
  private generateGlyphsData(): GlyphIconData[] | undefined {
    if (this.inputFiles) {
      // exclude icons with numbers in the path (to avoid problems in swift)
      const filteredInputFiles = this.inputFiles.filter(({ srcPath }) => !(/\d/.test(srcPath)));
      return filteredInputFiles.map(({ srcPath }) => {
        const name = path.basename(srcPath, path.extname(srcPath));
        const codepoint = getNextCodepoint();
        const codepointHexa = codepoint.toString(16);
        const unicode = String.fromCodePoint(codepoint);

        return {
          name,
          srcPath,
          codepoint,
          codepointHexa,
          unicode,
        };
      });
    }
    this.logger.debug('No input files detected.');
    return undefined;
  }

  private async generateSwiftData(glyphs?: GlyphIconData[]): Promise<string> {
    const template = await transformHbs(path.resolve(this.format.config.hbsPath));
    return template({ glyphsData: glyphs });
  }

  public generateSwiftFile(): Promise<{ data: any }> {
    return new Promise((resolve) => {
      const glyphs = this.generateGlyphsData();
      this.generateSwiftData(glyphs).then((data) => {
        resolve({
          data,
        });
      });
    });
  }

  /**
   * Transform the svg icons into a single svg font file
   */

  public override transformFilesAsync(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.generateSwiftFile()
        .then((file) => {
          this.outputFiles = [
            {
              distPath: path.join(this.destination, this.format.config.fileName),
              srcPath: '',
              data: file.data,
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
