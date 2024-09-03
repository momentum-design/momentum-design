const { join } = require('path');

const projectPath = process.cwd();
const outPath = join('dist', 'browser', 'index.js');

// todo: define browser targets here:
const browsers = ['chrome114', 'firefox114'];

const buildConfig = {
  bundle: true,
  entryPoints: [`${join(projectPath, 'src', 'index.ts')}`],
  minify: true,
  sourcemap: true,
  outfile: `${join(projectPath, outPath)}`,
  target: browsers,
};

module.exports = {
  config: buildConfig,
  outPath,
};
