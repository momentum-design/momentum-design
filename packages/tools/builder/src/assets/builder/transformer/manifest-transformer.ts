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
    const { fileName, staticPath } = this.format.config;
    const manifest: Record<string, string> = {};

    this.inputFiles?.forEach((file) => {
      const relativePath = file.srcPath
        .split(this.destination)
        .pop()
        ?.replace(/^\/+/, '');

      const key = relativePath?.split('/').pop()?.split('.').at(0) || 'unknown';

      const finalPath = staticPath
        ? `${staticPath.replace(/\/+$/, '')}/${relativePath}`
        : `./${relativePath}`;

      manifest[key] = finalPath;
    });

    this.outputFiles = [
      {
        srcPath: '',
        distPath: path.join(this.destination, fileName),
        data: JSON.stringify(manifest, null, 2),
      },
    ];
  }
}

export default ManifestTransformer;
