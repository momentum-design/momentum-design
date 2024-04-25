import path from 'path';
import type { Formats, GlyphIconData } from '../types';
import Transformer from './transformer';
import { getNextCodepoint } from '../utils';

/**
 * The SvgGlyphsTransformer class.
 *
 * Generates a glyphs file with unicodes of all svg icons.
 *
 * @beta
 */
class SvgGlyphsTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'SvgGlyphs');
  }

  /**
   * Generates unicode for all icons based on Unicode Private Use.
   * @returns - array of icons including metadata like unicode and codepoints
   */
  private generateGlyphsData(): GlyphIconData[] | undefined {
    if (this.inputFiles) {
      // exclude icons with numbers in the path (to avoid problems in swift)
      const filteredInputFiles = this.inputFiles.filter(({ srcPath }) => !/\d/.test(srcPath));

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

  /**
   * Transform the passed in files by optimizing each of them
   */
  public override transformFilesSync(): void {
    const glyphDataArray = this.generateGlyphsData();
    const glyphDataObject = { ...glyphDataArray };

    this.outputFiles = [
      {
        distPath: path.join(this.destination, this.format.config.fileName),
        srcPath: '',
        data: JSON.stringify(glyphDataObject, null, 2),
      },
    ];
  }
}

export default SvgGlyphsTransformer;
