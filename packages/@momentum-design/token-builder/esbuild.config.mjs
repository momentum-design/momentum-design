import { cli } from '../../../config/esbuild/esbuild.config.js';

cli({ stage: 'production', format: 'cjs' });
