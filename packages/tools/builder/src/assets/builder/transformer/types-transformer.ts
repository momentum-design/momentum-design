import path from 'path';
import type { Formats } from '../types';
import { transformHbs } from '../utils';
import Transformer from './transformer';

/**
 * The TypesTransformer class.
 * Converts manifest.json file to a types file
 * @beta
 */
class TypesTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'TYPES');
  }

  /**
     * Generates the types data from the config
     * @returns object with types data
     */

  private async generateTypesData(): Promise<{data: string}> {
    // const glyphData = this.getGlyphData();
    const template = await transformHbs(path.resolve(this.format.config.hbsPath));
    return { data: template({ name: this.format.config.name, path: this.format.config.manifestPath }) };
  }

  /**
   * creates a types.d.ts file
   */
  public override transformFilesAsync(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.generateTypesData()
        .then((typesData) => {
          this.outputFiles = [
            {
              srcPath: '',
              distPath: path.join(this.destination, this.format.config.fileName),
              data: typesData.data,
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

export default TypesTransformer;
