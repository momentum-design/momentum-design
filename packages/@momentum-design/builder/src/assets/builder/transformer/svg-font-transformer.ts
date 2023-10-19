import path from 'path';
import SVGIcons2SVGFontStream from 'svgicons2svgfont';
import fs from 'fs';
import type { Formats, GlyphIconData } from '../types';
import Transformer from './transformer';

/**
 * The SVGFontTransformer class.
 *
 * This transformer will process svg icons and will generate a single
 * svg file containing a font svg. Generation of glyphs and unicode is
 * also done here.
 * @beta
 */
class SVGFontTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'svg-font');
  }

  /**
   * Creates a SVGFontStream and will add them into a buffer which will eventually
   * be written in the provided distPath (writing is not done here).
   * @param glyphData - glyphData to be used for generating font
   * @returns - buffer data containing the svg font information ready to be written
   */
  public generateSVGFont(glyphData: Array<GlyphIconData>): Promise<{ data: Buffer; fileCreated: string }> {
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
            fileCreated: path.join(this.destination, filename),
          });
        })
        .on('error', reject);

      Object.values(glyphData)?.forEach((icon) => {
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
   * Retreive the GlyphData from the inputFile
   * and parse it
   * @returns glyph data object
   */
  private getGlyphData() {
    const GlyphDataBuffer = this.inputFiles?.at(0)?.data;

    return JSON.parse(GlyphDataBuffer.toString());
  }

  /**
   * Transform the svg icons into a single svg font file
   */
  public override transformFilesAsync(): Promise<void> {
    const glyphData = this.getGlyphData();

    return new Promise((resolve, reject) => {
      this.generateSVGFont(glyphData)
        .then((font) => {
          this.outputFiles = [{ distPath: font.fileCreated, srcPath: font.fileCreated, data: font.data }];
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default SVGFontTransformer;
