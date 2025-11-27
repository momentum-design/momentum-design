import path from 'path';
import svg2ttf from 'svg2ttf';
import type { Formats } from '../types';
import Transformer from './transformer';

/**
 * The TTFTransformer class.
 * Converts SVG Font to TTF
 * @beta
 */
class TTFTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'ttf');
  }

  /**
   * Converts svg font buffer to ttf buffer.
   *
   * @param SVGFontBuffer - svg Font buffer to be transformed
   * @returns - object with final path and buffer
   */
  public generateTTFFont(SVGFontBuffer: Buffer): {data: Buffer, fileCreated: string } {
    const filename = `${this.format?.config?.fontName}.ttf`;
    const data = Buffer.from(
      svg2ttf(SVGFontBuffer.toString(), { ...this.format.config, ts: 0 }).buffer,
    );
    return {
      data,
      fileCreated: path.posix.join(this.destination, filename),
    };
  }

  /**
   * Transforms the svg font file into a single ttf font file
   */
  public override transformFilesSync(): void {
    const SVGFontBuffer = this.inputFiles?.at(0)?.data;
    const font = this.generateTTFFont(SVGFontBuffer);

    this.outputFiles = [{ distPath: font.fileCreated, srcPath: font.fileCreated, data: font.data }];
  }
}

export default TTFTransformer;
