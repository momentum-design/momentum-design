const { join } = require('path');
const { esm } = require('../../../config/esbuild/esbuild.config.js');

esm(`${join(process.cwd())}`, 'src/index.ts', 'index.js', 'tsconfig.json', 'browser');
