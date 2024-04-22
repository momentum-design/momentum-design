import path from 'path';
import type { Formats } from '../types';
import Transformer from './transformer';

/**
 * The ManifestTransformer class.
 *
 * Generates a manifest file with all svg icons.
 *
 * @beta
 */
class ManifestTransformer extends Transformer {
  constructor(format: Formats, destination: string) {
    super(format, destination, 'manifest');
  }

  /**
   * Transform the passed in files by optimizing each of them
   */
  public override transformFilesSync() {
    const manifest = this.inputFiles?.reduce(
      (output, file) => ({
        ...output,
        [file.srcPath.split('/').pop()?.split('.').at(0) || 'unknown']: `./${file.srcPath
          ?.split(this.destination)
          .pop()}`,
      }),
      {},
    );

    this.outputFiles = [
      {
        srcPath: '',
        distPath: path.join(this.destination, this.format.config.fileName),
        data: JSON.stringify(manifest, null, 2),
      },
    ];
  }
}

export default ManifestTransformer;
