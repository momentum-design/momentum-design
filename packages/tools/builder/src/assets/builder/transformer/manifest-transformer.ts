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
    // Filter out manifest file itself and build sorted manifest for deterministic output
    const manifestFileName = this.format.config.fileName;
    
    const manifest = this.inputFiles
      ?.filter(file => file.srcPath.split('/').pop() !== manifestFileName)
      .reduce(
        (output, file) => {
          const key = file.srcPath.split('/').pop()?.split('.').at(0) || 'unknown';
          output[key] = `./${file.srcPath?.split(this.destination).pop()}`;
          return output;
        },
        {} as Record<string, string>,
      );

    // Sort keys alphabetically for deterministic output
    const sortedManifest = Object.keys(manifest || {})
      .sort()
      .reduce((acc, key) => {
        acc[key] = manifest![key];
        return acc;
      }, {} as Record<string, string>);

    this.outputFiles = [
      {
        srcPath: '',
        distPath: path.join(this.destination, this.format.config.fileName),
        data: JSON.stringify(sortedManifest, null, 2),
      },
    ];
  }
}

export default ManifestTransformer;
