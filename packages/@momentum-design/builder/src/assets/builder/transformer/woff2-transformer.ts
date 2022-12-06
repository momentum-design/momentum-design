import path from 'path';
import wawoff2 from 'wawoff2';
import type { Formats } from '../types';
import Transformer from './transformer';

/**
 * The WOFF2Transformer class.
 * Converts TTF Font to WOFF2
 * @beta
 */
class WOFF2Transformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'WOFF2');
  }

  /**
   * Converts TTF font buffer to WOFF2 buffer.
   *
   * @param SVGFontBuffer - ttf buffer to be transformed
   * @returns - object with final path and buffer
   */
  public generateWOFF2Font(TTFFontBuffer: Buffer): Promise<{ data: Uint8Array; fileCreated: string }> {
    const { fontName } = this.format.config;
    const filename = `${fontName}.woff2`;

    return new Promise((resolve, reject) => {
      wawoff2
        .compress(TTFFontBuffer)
        .then((buffer) => {
          resolve({
            data: buffer,
            fileCreated: path.join(this.destination, filename),
          });
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * Transforms the ttf font file into a single WOFF2 font file
   */
  public override transformFilesAsync(): Promise<void> {
    const TTFFontBuffer = this.inputFiles?.at(0)?.data;

    return new Promise((resolve, reject) => {
      this.generateWOFF2Font(TTFFontBuffer)
        .then((font) => {
          this.outputFiles = [{ distPath: font.fileCreated, srcPath: font.fileCreated, data: font.data }];
          resolve();
        })
        .catch((err) => reject(err));
    });
  }
}

export default WOFF2Transformer;
