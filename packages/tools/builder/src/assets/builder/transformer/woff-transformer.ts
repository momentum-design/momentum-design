import path from 'path';
import ttf2woff from 'ttf2woff';
import type { Formats } from '../types';
import Transformer from './transformer';

/**
 * The WOFFTransformer class.
 * Converts TTF Font to WOFF
 * @beta
 */
class WOFFTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'woff');
  }

  /**
   * Converts TTF font buffer to WOFF buffer.
   *
   * @param SVGFontBuffer - ttf buffer to be transformed
   * @returns - object with final path and buffer
   */
  public generateWOFFFont(TTFFontBuffer: Buffer): {data: Buffer, fileCreated: string } {
    const { fontName, ...ttf2woffConfig } = this.format.config;
    const filename = `${fontName}.woff`;
    const data = Buffer.from(
      ttf2woff(new Uint8Array(TTFFontBuffer), ttf2woffConfig).buffer,
    );
    return {
      data,
      fileCreated: path.posix.join(this.destination, filename),
    };
  }

  /**
   * Transforms the ttf font file into a single woff font file
   */
  public override transformFilesSync(): void {
    const TTFFontBuffer = this.inputFiles?.at(0)?.data;
    const font = this.generateWOFFFont(TTFFontBuffer);

    this.outputFiles = [{ distPath: font.fileCreated, srcPath: font.fileCreated, data: font.data }];
  }
}

export default WOFFTransformer;
