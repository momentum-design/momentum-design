import path from 'path';
import SVGIcons2SVGFontStream from 'svgicons2svgfont';
import fs from 'fs';
import type { Formats, GlyphIconData } from '../types';
import Transformer from './transformer';
import { getNextCodepoint } from '../utils';

/**
 * The SVGFontTransformer class.
 *
 * @beta
 */
class SVGFontTransformer extends Transformer {
  constructor(format: Formats) {
    super(format, 'svg');
  }

  /**
   * Generates unicode for all icons based on Unicode Private Use.
   * @returns - array of icons including metadata like unicode and codepoints
   */
  private generateGlyphsData(): GlyphIconData[] | undefined {
    if (this.inputFiles) {
      return this.inputFiles.map(({ srcPath }) => {
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
   * Leverage the flow config and grab the dist path from any icon.
   * @returns - path where the font will be written.
   */
  private getDistPath(): string {
    return this.inputFiles?.at(0)?.distPath!;
  }

  /**
   * Creates a SVGFontStream and will add them into a buffer which will eventually
   * be written in the provided distPath (writing is not done here).
   * @returns - buffer data containing the svg font information ready to be written
   */
  public generateSVGFont(): Promise<{data: Buffer, fileCreated: string }> {
    const filename = `${this.format.config.fontName}.svg`;
    const fontStream = new SVGIcons2SVGFontStream(this.format.config);
    return new Promise((resolve, reject) => {
      const buffers: any = [];
      fontStream
        .on('data', (data) => {
          buffers.push(data);
        })
        .on('finish', () => {
          this.logger.debug(`SVG Font buffer data created. It will be written to ${filename}.`);
          resolve({
            data: buffers.toString('utf-8'),
            fileCreated: path.join(this.getDistPath(), filename),
          });
        })
        .on('error', reject);

      const icons = this.generateGlyphsData();
      icons?.forEach((icon) => {
        const glyph = fs.createReadStream(icon.srcPath);
        // @ts-ignore
        glyph.metadata = {
          name: icon.name,
          unicode: [icon.unicode],
        };
        fontStream.write(glyph);
      });
      fontStream.end();
    });
  }

  /**
   * Transform the svg icons into a single svg font file
   */
  public override async transformFiles() {
    if (this.inputFiles) {
      const font = await this.generateSVGFont();
      // we're technically not transforming every icon file, but rather reducing all icon files to one
      this.outputFiles = [{ distPath: font.fileCreated, srcPath: font.fileCreated, data: font.data }];
    }
  }
}

export default SVGFontTransformer;
