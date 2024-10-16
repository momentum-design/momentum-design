const { join } = require('path');
const { cjs } = require('../../../config/esbuild/esbuild.config.js');

cjs(`${join(process.cwd())}`, 'src/index.ts', 'index.js', 'tsconfig.json', 'browser', false);
