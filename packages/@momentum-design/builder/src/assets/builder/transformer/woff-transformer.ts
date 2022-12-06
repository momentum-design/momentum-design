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
   * Converts ttf font buffer to woff buffer.
   *
   * @param SVGFontBuffer - ttf buffer to be transformed
   * @returns - object with final path and buffer
   */
  public generateWOFFFont(TTFFontBuffer: Buffer): {data: Buffer, fileCreated: string } {
    const filename = `${this.format?.config?.fontName}.woff`;
    const data = Buffer.from(
      ttf2woff(TTFFontBuffer).buffer,
    );

    return {
      data,
      fileCreated: path.join(this.destination, filename),
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
