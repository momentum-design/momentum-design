import { cli } from '../../../config/esbuild/esbuild.config.js';
import packageDefinition from './package.json' assert { type: 'json' };

cli({
  stage: 'production',
  extension: 'cjs',
  external: Object.keys(packageDefinition.dependencies).filter((value) => !value.includes('@momentum-design')),
  format: 'cjs',
});
