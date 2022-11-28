const { cli } = require('../../../config/esbuild/esbuild.config.js');
const packageDefinition = require('./package.json');

cli({
  stage: 'production',
  external: Object.keys(packageDefinition.dependencies).filter((value) => !value.includes('@momentum-design')),
  format: 'cjs',
});