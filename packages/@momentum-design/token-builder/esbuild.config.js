import { cli } from '../../../config/esbuild/esbuild.config.js';

cli({
  stage: 'production',
  extension: 'cjs',
  external: [
    'style-dictionary',
  ],
  format: 'cjs',
});
